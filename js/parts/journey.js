/* ============================================================================
   "Journey through the reading brain" — engagement layer.
   A friendly framing that turns the 5 parts into a tour of brain regions:
   each part you finish lights up a new lobe (with confetti), and at the end
   you get a light, for-fun personal "inner voice" profile.

   Public API (all return jsPsych trials):
     IVQ.parts.journeyIntro(jsPsych)      welcome + what-to-expect
     IVQ.parts.sectionIntro(jsPsych, n)   "Part n of 5" + hook + brain so far
     IVQ.parts.milestone(jsPsych, n)      celebrate part n (confetti + colour lobe)
     IVQ.parts.profileCard(jsPsych)       end-of-study personal profile
   IVQ.brain.svg(opts) renders the brain; IVQ.journey.PARTS holds the metadata.
   ========================================================================== */

window.IVQ = window.IVQ || {};
IVQ.parts = IVQ.parts || {};

/* ---- part ↔ brain-region map (playful associations) ----------------------- */
IVQ.journey = {
  TOTAL: 5,
  PARTS: {
    1: { region: "frontal",    name: "Frontal lobe",   hook: "First, a little about you.",
         info: "This part contains a survey about you, your background and the languages you know. Please read each question and answer carefully." },
    2: { region: "occipital",  name: "Occipital lobe", hook: "In this part you'll read sentences one word at a time.",
         info: "In a self-paced reading task, you'll reveal a sentence one word at a time by pressing the space bar, reading at your own natural pace." },
    3: { region: "temporal",   name: "Temporal lobe",  hook: "How was your reading experience?",
         info: "This part contains a survey about your inner experience while reading. Please read each question and answer carefully." },
    4: { region: "parietal",   name: "Parietal lobe",  hook: "Now for the fun part!",
         info: "You'll read several different kinds of text and answer questions about what you experience as you read each one." },
    5: { region: "cerebellum", name: "Cerebellum",     hook: "Last stretch!",
         info: "Two questionnaires about your reading experience and your inner voice in general. Please answer carefully." },
  },
  // a tailored line of encouragement after finishing each part
  CHEER: {
    1: "Great start! the basics are done.",
    2: "Nice reading! Your visual cortex got a workout.",
    3: "Beautiful! the trickiest introspection is behind you.",
    4: "That was the longest part. The home stretch is short and easy. 🎉",
    5: "That's everything! you made it to the end!",
  },
};

/* ---- smooth global progress bar ------------------------------------------
   Each part is ONE jsPsych trial (a multi-page survey), so jsPsych's built-in
   bar would only jump between parts. Instead we drive it manually: each part
   owns a slice of the bar, and within a survey we advance by visible-page. */
IVQ.progress = (function () {
  let jp = null;
  const PHASES = {
    part1: [0.04, 0.30], part2: [0.30, 0.45], part3: [0.45, 0.66],
    part4: [0.66, 0.90], part5: [0.90, 1.0],
  };
  function attach(jsPsych) { jp = jsPsych; }
  function set(p) { if (jp && jp.progressBar) jp.progressBar.progress = Math.max(0, Math.min(1, p)); }
  function part(n, frac) {
    const span = PHASES["part" + n]; if (!span) return;
    set(span[0] + (frac || 0) * (span[1] - span[0]));
  }
  function bindSurvey(survey, partName) {
    const span = PHASES[partName]; if (!span) return;
    const upd = function () {
      const pages = survey.visiblePages || [];
      const n = Math.max(1, pages.length);
      const frac = n > 1 ? survey.currentPageNo / (n - 1) : 0;
      set(span[0] + Math.max(0, Math.min(1, frac)) * (span[1] - span[0]));
    };
    upd();
    if (survey.onCurrentPageChanged && survey.onCurrentPageChanged.add) survey.onCurrentPageChanged.add(upd);
  }
  return { attach, set, part, bindSurvey, PHASES };
})();

/* ---- the brain illustration ---------------------------------------------- */
IVQ.brain = (function () {
  // Uses the segmented Wikimedia "Lobes of the brain" artwork (js/brain_svg.js).
  // Each lobe is greyed when locked and filled with its colour when completed.
  const GREY = "#e1e5ee";
  const REGIONS = [
    { id: "frontal",    part: 1, color: "#b4d8ec" }, // blue
    { id: "occipital",  part: 2, color: "#f7a6b6" }, // pink
    { id: "temporal",   part: 3, color: "#b6cf9d" }, // green
    { id: "parietal",   part: 4, color: "#fcfb98" }, // yellow
    { id: "cerebellum", part: 5, color: "#f3b66a" }, // orange
  ];
  function byPart(n) { return REGIONS.find((r) => r.part === n); }
  function tint(hex, amt) {            // mix a hex colour toward white (0..1)
    const n = parseInt(hex.slice(1), 16);
    const r = n >> 16, g = (n >> 8) & 255, b = n & 255, m = (c) => Math.round(c + (255 - c) * amt);
    return "rgb(" + m(r) + "," + m(g) + "," + m(b) + ")";
  }
  function svg(opts) {
    opts = opts || {};
    const lit = opts.lit || 0, next = opts.next || 0;
    const fills = {};
    REGIONS.forEach((r) => {
      const on = r.part > 0 && r.part <= lit;
      fills[r.id] = on ? r.color : (r.part === next ? tint(r.color, 0.5) : GREY);
    });
    return IVQ.brainSVG(fills, { width: opts.width || 280 });
  }
  return { svg, byPart, REGIONS };
})();

/* ---- small shared helpers ------------------------------------------------- */
IVQ.journey.pips = function (current) {
  let s = '<div class="journey-pips">';
  for (let i = 1; i <= IVQ.journey.TOTAL; i++) {
    s += `<span class="pip${i < current ? " done" : i === current ? " now" : ""}"></span>`;
  }
  return s + "</div>";
};

/* ---- welcome / what to expect -------------------------------------------- */
IVQ.parts.journeyIntro = function (jsPsych) {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <div class="journey">
        ${IVQ.brain.svg({ lit: 0, next: 1, width: 300 })}
        <h1>A journey through your reading brain</h1>
        <p class="journey-lead">Over <strong>5 parts</strong> we'll explore how you read and
        what happens in your mind while you do. Each part you finish lights up a new
        region of the brain 🧠.</p>
        <p class="journey-lead">At the very end, you'll get a little <strong>personal profile of your
        inner voice</strong> — just for fun, not a diagnosis. Ready to explore?</p>
      </div>`,
    choices: ["Start the journey →"],
    data: { screen: "journey_intro" },
    on_load: function () { IVQ.progress.set(0.02); },
  };
};

/* ---- overview of the 5 parts (shown right after the welcome) -------------- */
IVQ.parts.partsOverview = function (jsPsych) {
  const P = IVQ.journey.PARTS;
  const rows = [1, 2, 3, 4, 5].map((n) =>
    `<li><span class="overview-num region-${P[n].region}">${n}</span>
       <div class="overview-text"><span class="overview-name">${P[n].name}</span> — ${P[n].info}</div></li>`).join("");
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <div class="journey journey-overview">
        <h1>Here's the plan</h1>
        <p class="journey-lead">The study has <strong>five parts</strong>. Each one explores a different
        region of your reading brain — read the short instructions for each and answer to the best of your ability.</p>
        <ol class="overview-list">${rows}</ol>
      </div>`,
    choices: ["Got it — let's begin →"],
    data: { screen: "parts_overview" },
    on_load: function () { IVQ.progress.set(0.03); },
  };
};

/* ---- per-part opening ----------------------------------------------------- */
IVQ.parts.sectionIntro = function (jsPsych, n) {
  const p = IVQ.journey.PARTS[n];
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <div class="journey">
        ${IVQ.brain.svg({ lit: n - 1, next: n, width: 250 })}
        ${IVQ.journey.pips(n)}
        <div class="journey-step">Part ${n} of ${IVQ.journey.TOTAL}</div>
        <h1 class="journey-title">Next stop: <span class="region-name region-${p.region}">${p.name}</span></h1>
        <p class="journey-hook">${p.hook}</p>
        <p class="journey-info">${p.info}</p>
      </div>`,
    choices: [`Begin Part ${n} →`],
    data: { screen: "section_intro_" + n },
    on_load: function () { IVQ.progress.part(n, 0); },
  };
};

/* ---- milestone / celebration after a part -------------------------------- */
IVQ.parts.milestone = function (jsPsych, n) {
  const p = IVQ.journey.PARTS[n];
  const region = IVQ.brain.byPart(n);
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <div class="journey">
        ${IVQ.brain.svg({ lit: n - 1, next: 0, width: 250 })}
        ${IVQ.journey.pips(n + 1)}
        <h1 class="journey-title">Part ${n} complete! 🎉</h1>
        <p class="journey-hook">You just lit up the <span class="region-name region-${p.region}">${p.name}</span>.
        ${IVQ.journey.CHEER[n] || ""}</p>
        <p class="muted">Take a short break if you need one.</p>
      </div>`,
    choices: [n < IVQ.journey.TOTAL ? "Continue →" : "See my profile →"],
    data: { screen: "milestone_" + n },
    on_load: function () {
      IVQ.progress.part(n, 1);   // part fully done → end of its slice
      // colour-in the just-finished lobe, then fire confetti
      const el = document.getElementById("lobe-" + region.id);
      if (el) {
        setTimeout(function () { el.style.fill = region.color; }, 250);
      }
      if (typeof confetti === "function") {
        const burst = function (x) {
          confetti({ particleCount: 70, spread: 70, origin: { x: x, y: 0.55 },
            colors: ["#F39200", "#E5392B", "#1E9E5A", "#2E6FC9", "#7E3F98", "#F4B400"] });
        };
        setTimeout(function () { burst(0.3); burst(0.7); }, 300);
      }
    },
  };
};

/* ---- end-of-study personal profile --------------------------------------- */
IVQ.parts.profileCard = function (jsPsych) {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: "",                          // built on_load from the collected data
    choices: ["Finish →"],
    data: { screen: "profile_card" },
    on_start: function (trial) {
      trial.stimulus = IVQ.journey.buildProfile(jsPsych);
    },
    on_load: function () {
      IVQ.progress.set(1);
      if (typeof confetti === "function") {
        confetti({ particleCount: 120, spread: 100, origin: { y: 0.4 },
          colors: ["#F39200", "#E5392B", "#1E9E5A", "#2E6FC9", "#7E3F98", "#F4B400"] });
      }
    },
  };
};

/* Compute the profile HTML from whatever the participant answered. */
IVQ.journey.buildProfile = function (jsPsych) {
  const responses = (jsPsych.data.get().values() || [])
    .map((v) => v && v.response).filter(Boolean);
  const field = (name) => {
    for (let i = 0; i < responses.length; i++) {
      if (responses[i] && responses[i][name] !== undefined) return responses[i][name];
    }
    return undefined;
  };

  const rows = [];

  /* 1 — do you hear an inner voice while reading? */
  const hear = field("hearing_inner_voice_reading");
  const HEAR_MAP = {
    "1": ["A quiet reader", "You usually take in words without hearing a voice — reading runs silently for you."],
    "2": ["A sometimes-hearer", "An inner voice shows up now and then while you read."],
    "3": ["A voice reader", "Words almost always come with an inner voice as you read."],
    "4": ["A free-roaming voice", "You hear an inner voice while reading — but it does its own thing rather than just reading the words."],
  };
  if (hear && HEAR_MAP[hear]) {
    rows.push(profileRow("🔊", "Your reading voice", "<strong>" + HEAR_MAP[hear][0] + ".</strong> " + HEAR_MAP[hear][1]));
  }

  /* 2 — whose voice? */
  const WHOSE = { "1": "your own inner voice", "2": "your own voice as others hear it", "3": "a story character",
    "4": "a celebrity or famous person", "5": "a family member", "6": "a friend", "7": "whoever sent the message",
    "8": "a teacher or acquaintance", "9": "a familiar voice you can't quite place", "10": "an unfamiliar voice" };
  const whose = field("whose_voice_reading");
  if (Array.isArray(whose) && whose.length) {
    const labels = whose.map((v) => WHOSE[v]).filter(Boolean);
    if (labels.length) {
      rows.push(profileRow("🗣️", "Whose voice", "You hear " + listJoin(labels) + "."));
    }
  }

  /* 3 — verbal vs visual leaning (from the IRQ) */
  const irq = field("irq");
  if (irq && typeof irq === "object") {
    const VISUAL = ["irq_01", "irq_02", "irq_03", "irq_04", "irq_05", "irq_06", "irq_07", "irq_09", "irq_10"];
    const VERBAL = ["irq_11", "irq_12", "irq_13", "irq_14", "irq_15", "irq_16", "irq_18", "irq_20", "irq_21", "irq_22", "irq_27", "irq_28"];
    const mean = (keys) => {
      const vals = keys.map((k) => irq[k]).filter((x) => x != null).map(Number);
      return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null;
    };
    const vis = mean(VISUAL), ver = mean(VERBAL);
    if (vis != null && ver != null) {
      // position on a 0..100 spectrum (0 = fully visual, 100 = fully verbal)
      const diff = ver - vis;                       // -4..+4 on the 1-5 scale
      const pos = Math.max(8, Math.min(92, 50 + diff * 18));
      let lean = "fairly balanced — you mix words and pictures";
      if (diff > 0.5) lean = "leaning <strong>verbal</strong> — you think more in words";
      else if (diff < -0.5) lean = "leaning <strong>visual</strong> — you think more in pictures";
      rows.push(profileRow("🧩", "Words vs. pictures",
        "In your mind's eye and ear, you're " + lean + "." +
        `<div class="spectrum"><span class="spectrum-end">🖼️ visual</span>
           <div class="spectrum-bar"><span class="spectrum-dot" style="left:${pos}%"></span></div>
         <span class="spectrum-end">verbal 💬</span></div>`));
    }
  }

  /* 4 — how you compare to most people */
  rows.push(profileRow("👥", "Compared with most people",
    "Around <strong>8 in 10</strong> people report some inner voice when they read — and a real minority don't. " +
    "The most common voice is one's own. However your mind works, you're in good (and varied) company."));

  const body = rows.length
    ? rows.join("")
    : profileRow("🙂", "Your profile", "Thanks for sharing your inner experiences with us!");

  return `
    <div class="journey profile">
      ${IVQ.brain.svg({ lit: 5, next: 0, width: 220 })}
      <h1 class="journey-title">Your inner-voice profile</h1>
      <p class="muted profile-disclaimer">A light, just-for-fun summary of what you told us — not a diagnosis or a test score.</p>
      <div class="profile-rows">${body}</div>
    </div>`;
};

function profileRow(icon, label, text) {
  return `<div class="profile-row"><div class="profile-icon">${icon}</div>
    <div class="profile-text"><div class="profile-label">${label}</div><div>${text}</div></div></div>`;
}
function listJoin(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] + " and " + arr[1];
  return arr.slice(0, -1).join(", ") + ", and " + arr[arr.length - 1];
}
