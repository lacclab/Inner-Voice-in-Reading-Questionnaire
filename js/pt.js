/* ============================================================================
   PsyToolkit → jsPsych translation engine
   ----------------------------------------------------------------------------
   Reproduces PsyToolkit survey question types in the project's themed look.
   Question *specs* are plain objects; `IVQ.pt.page()` renders one or more of
   them onto a single screen (PsyToolkit `page: begin/end`), and the single-
   question helpers wrap one spec onto its own screen.

   Stored values follow PsyToolkit conventions so your `jump`/`if` logic ports
   directly:
     • radio / list / drop  → 1-based option number (string), e.g. "1"
     • check                → array of 1-based option numbers
     • {other} text         → stored under "<name>_other"
     • range                → one numeric value per slider row, keyed by row name
     • textline / textbox   → the raw string

   Conditional logic (PsyToolkit `jump ... goto`) is expressed in jsPsych by
   wrapping the skippable screens in a conditional timeline; see IVQ.pt.showIf().
   ========================================================================== */

window.IVQ = window.IVQ || {};
IVQ.pt = {};

/* where stimulus images / audio live */
IVQ.MEDIA_BASE = "stimuli/media/";

/* media HTML for a question carrying an image and/or audio file.
   Use in a question spec's `preHtml`, e.g. preHtml: IVQ.pt.media({image:"x.png"}) */
IVQ.pt.media = function (m) {
  let html = "";
  if (m.image) {
    html += `<div class="pt-media"><img src="${IVQ.MEDIA_BASE}${m.image}" alt="stimulus image"></div>`;
  }
  if (m.audio) {
    html += `<div class="pt-media"><audio controls preload="auto" src="${IVQ.MEDIA_BASE}${m.audio}"></audio></div>`;
  }
  return html;
};

/* --- low-level rendering of a single question spec to an HTML fragment ----- */
IVQ.pt._renderQuestion = function (q) {
  const name = q.name;
  const promptHtml =
    (q.preHtml || "") + `<div class="pt-prompt">${q.prompt || ""}</div>`;
  let body = "";
  // radios / selects / text inputs are required by default (override with required:false)
  const req = q.required === false ? "" : "required";

  switch (q.type) {
    /* radio = single choice; options may include { other:true, label, size } */
    case "radio": {
      const opts = q.options
        .map((opt, i) => {
          const val = i + 1;
          if (typeof opt === "object" && opt.other) {
            return `<div class="pt-opt pt-opt-other">
                <label class="pt-opt-head">
                  <input type="radio" name="${name}" value="${val}" data-other-radio="${name}" ${req}>
                  <span>${opt.label || "Other (please specify)"}</span>
                </label>
                <input type="text" class="pt-other-text" name="${name}_other"
                       data-other-input="${name}" size="${opt.size || 50}" disabled>
              </div>`;
          }
          return `<label class="pt-opt">
              <input type="radio" name="${name}" value="${val}" ${req}>
              <span>${opt}</span></label>`;
        })
        .join("");
      body = `<div class="pt-options">${opts}</div>`;
      break;
    }

    /* check = multiple choice; options may include { other:true, label, size } */
    case "check": {
      const opts = q.options
        .map((opt, i) => {
          const val = i + 1;
          if (typeof opt === "object" && opt.other) {
            return `<div class="pt-opt pt-opt-other">
                <label class="pt-opt-head">
                  <input type="checkbox" name="${name}_${val}" value="${val}" data-other-check="${name}">
                  <span>${opt.label || "Other (please specify)"}</span>
                </label>
                <input type="text" class="pt-other-text" name="${name}_other"
                       data-other-input="${name}" size="${opt.size || 50}" disabled>
              </div>`;
          }
          return `<label class="pt-opt">
              <input type="checkbox" name="${name}_${val}" value="${val}">
              <span>${opt}</span></label>`;
        })
        .join("");
      body = `<div class="pt-options pt-check">${opts}</div>`;
      break;
    }

    /* list / drop = dropdown select (good for long lists: countries, languages) */
    case "list":
    case "drop": {
      const opts = q.options
        .map((opt, i) => `<option value="${i + 1}">${opt}</option>`)
        .join("");
      body = `<select name="${name}" ${req}>
          <option value="" disabled selected>Select…</option>${opts}</select>`;
      break;
    }

    /* range = one or more sliders, each row { name, label, min, max, start, left, right } */
    case "range": {
      const rows = q.rows
        .map((r) => {
          const rname = `${name}__${r.name}`;
          return `<div class="pt-slider">
              <div class="pt-slider-label">${r.label}</div>
              <div class="slider-row">
                <span class="pt-anchor">${r.left || ""}</span>
                <input type="range" name="${rname}" min="${r.min}" max="${r.max}"
                       step="${r.step || 1}" value="${r.start != null ? r.start : r.min}"
                       data-slider="1">
                <span class="pt-anchor">${r.right || ""}</span>
                <span class="slider-val" data-slider-val="${rname}">${r.start != null ? r.start : r.min}</span>
              </div></div>`;
        })
        .join("");
      body = `<div class="pt-range">${rows}</div>`;
      break;
    }

    /* textline = single-line input; supports {min,max} for numeric inputs */
    case "textline": {
      const numeric = q.min != null || q.max != null;
      body = `<input type="${numeric ? "number" : "text"}" name="${name}"
          ${q.min != null ? `min="${q.min}"` : ""} ${q.max != null ? `max="${q.max}"` : ""}
          ${req}>`;
      break;
    }

    /* textbox = multi-line free text */
    case "textbox": {
      body = `<textarea name="${name}" rows="${q.rows || 4}"
          ${req} placeholder="${q.placeholder || ""}"></textarea>`;
      break;
    }

    default:
      body = `<em>[unsupported question type: ${q.type}]</em>`;
  }

  return `<fieldset class="pt-q" data-qname="${name}" data-qtype="${q.type}">${promptHtml}${body}</fieldset>`;
};

/* Wire up dynamic behaviour after a survey-html-form screen renders:
   slider value read-outs and {other} text-field enabling/disabling. */
IVQ.pt._wire = function (root) {
  root = root || document;

  // slider read-outs
  root.querySelectorAll('input[type="range"][data-slider]').forEach((s) => {
    const out = root.querySelector(`[data-slider-val="${s.name}"]`);
    const sync = () => out && (out.textContent = s.value);
    s.addEventListener("input", sync);
    sync();
  });

  // {other} text fields tied to a radio group
  root.querySelectorAll("input[data-other-radio]").forEach((otherRadio) => {
    const group = otherRadio.getAttribute("data-other-radio");
    const txt = root.querySelector(`input[data-other-input="${group}"]`);
    root.querySelectorAll(`input[type="radio"][name="${group}"]`).forEach((radio) => {
      radio.addEventListener("change", () => {
        const on = otherRadio.checked;
        txt.disabled = !on;
        if (on) txt.focus();
        else txt.value = "";
      });
    });
  });

  // {other} text fields tied to a checkbox
  root.querySelectorAll("input[data-other-check]").forEach((otherChk) => {
    const group = otherChk.getAttribute("data-other-check");
    const txt = root.querySelector(`input[data-other-input="${group}"]`);
    otherChk.addEventListener("change", () => {
      txt.disabled = !otherChk.checked;
      if (otherChk.checked) txt.focus();
      else txt.value = "";
    });
  });

  // Require at least one box per "check all that apply" question. Native HTML5
  // validation handles required radios/selects/text; this covers checkbox groups
  // and shows an inline "please answer" message.
  const form = document.querySelector(".jspsych-content form") || document.querySelector("form");
  if (form && !form.dataset.ptValidate) {
    form.dataset.ptValidate = "1";
    form.addEventListener(
      "submit",
      function (e) {
        let firstBad = null;
        form.querySelectorAll('fieldset.pt-q[data-qtype="check"]').forEach((fs) => {
          const checked = fs.querySelector('input[type="checkbox"]:checked');
          let err = fs.querySelector(".pt-error");
          if (!checked) {
            if (!err) {
              err = document.createElement("div");
              err.className = "pt-error";
              err.textContent = "Please select at least one option to continue.";
              fs.appendChild(err);
            }
            if (!firstBad) firstBad = fs;
          } else if (err) {
            err.remove();
          }
        });
        if (firstBad) {
          e.preventDefault();
          e.stopImmediatePropagation();
          firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      },
      true // capture phase → runs before jsPsych's own submit handler
    );
    form.querySelectorAll('fieldset.pt-q[data-qtype="check"] input[type="checkbox"]').forEach((cb) => {
      cb.addEventListener("change", () => {
        const fs = cb.closest("fieldset.pt-q");
        const err = fs && fs.querySelector(".pt-error");
        if (err && fs.querySelector('input[type="checkbox"]:checked')) err.remove();
      });
    });
  }
};

/* A PsyToolkit "page" — one or more questions on a single screen.
   spec: { name, title, intro, questions:[...], data:{} } */
IVQ.pt.page = function (spec) {
  const html =
    (spec.title ? `<h2>${spec.title}</h2>` : "") +
    (spec.intro ? `<p class="muted">${spec.intro}</p>` : "") +
    spec.questions.map(IVQ.pt._renderQuestion).join("");

  return {
    type: jsPsychSurveyHtmlForm,
    html: html,
    button_label: spec.button_label || "Continue",
    on_load: function () {
      IVQ.pt._wire(document);
    },
    // keep the option text + question types in the data so the CSV is decodable
    data: Object.assign(
      {
        screen: spec.name,
        question_meta: JSON.stringify(
          spec.questions.map((q) => ({
            name: q.name,
            type: q.type,
            options: q.options || (q.rows ? q.rows.map((r) => r.name) : undefined),
          }))
        ),
      },
      spec.data || {}
    ),
  };
};

/* Convenience: a single question on its own screen. */
IVQ.pt.q = function (spec) {
  return IVQ.pt.page({
    name: spec.name,
    title: spec.title,
    intro: spec.intro,
    questions: [spec],
    button_label: spec.button_label,
    data: spec.data,
  });
};

/* PsyToolkit "scale" question = a Likert table (survey-likert).
   spec: { name, prompt, statements:[...], labels:[...], random, data } */
IVQ.pt.scale = function (spec) {
  return {
    type: jsPsychSurveyLikert,
    preamble: spec.prompt ? `<div class="pt-prompt">${spec.prompt}</div>` : "",
    randomize_question_order: !!spec.random,
    questions: spec.statements.map((text, i) => ({
      prompt: text,
      labels: spec.labels,
      name: `${spec.name}_${String(i + 1).padStart(2, "0")}`,
      required: true,
    })),
    data: Object.assign(
      {
        screen: spec.name,
        scale_labels: JSON.stringify(spec.labels),
        // map item code → statement text so the CSV is decodable after randomisation
        item_text: JSON.stringify(
          spec.statements.reduce((m, t, i) => {
            m[`${spec.name}_${String(i + 1).padStart(2, "0")}`] = t;
            return m;
          }, {})
        ),
      },
      spec.data || {}
    ),
  };
};

/* PsyToolkit "info" screen (instructions / between-part text). */
IVQ.pt.info = function (spec) {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: spec.html || spec.q || "",
    choices: [spec.button || "Continue"],
    data: Object.assign({ screen: spec.name || "info" }, spec.data || {}),
  };
};

/* PsyToolkit "youtube" — embed a video, advance on a button. */
IVQ.pt.youtube = function (spec) {
  const url = `https://www.youtube.com/embed/${spec.videoId}`;
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      ${spec.q ? `<div class="pt-prompt">${spec.q}</div>` : ""}
      <div class="pt-video">
        <iframe width="640" height="360" src="${url}"
          title="video" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>`,
    choices: [spec.button || "Continue"],
    data: Object.assign({ screen: spec.name || "youtube", video_id: spec.videoId }, spec.data || {}),
  };
};

/* Conditional block = PsyToolkit `jump ... goto`.
   Wrap the screens that should be SHOWN only when `test()` is true.
   `test(jsPsych)` reads earlier responses via IVQ.pt.val().            */
IVQ.pt.showIf = function (jsPsych, test, screens) {
  return {
    timeline: Array.isArray(screens) ? screens : [screens],
    conditional_function: function () {
      return !!test(jsPsych);
    },
  };
};

/* Read a stored response value for a given question `name` (screen name).
   Returns the 1-based option number (string) for radio/list/drop, or the
   raw response object for other types. */
IVQ.pt.val = function (jsPsych, qName) {
  // Search all collected rows (newest first) for a response containing qName.
  // Works whether the question was on its own screen or grouped into a page.
  const rows = jsPsych.data.get().values();
  for (let i = rows.length - 1; i >= 0; i--) {
    const r = rows[i] && rows[i].response;
    if (r && Object.prototype.hasOwnProperty.call(r, qName)) return r[qName];
  }
  return undefined;
};
