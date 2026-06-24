/* ============================================================================
   Inner Voice Questionnaire — shared helpers
   Small reusable builders so the part files stay readable.
   ========================================================================== */

window.IVQ = window.IVQ || {};
IVQ.h = {};

/* A standard "continue" button instruction / information screen. */
IVQ.h.info = function (html, opts) {
  opts = opts || {};
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: html,
    choices: [opts.button || "Continue"],
    data: { screen: opts.tag || "info" },
  };
};

/* A section divider that introduces one of the five parts. */
IVQ.h.sectionIntro = function (partNumber, title, bodyHtml) {
  return IVQ.h.info(
    `<div class="eyebrow">Part ${partNumber} of 5</div>
     <h1>${title}</h1>
     ${bodyHtml}`,
    { button: "Begin this part", tag: `part${partNumber}_intro` }
  );
};

/* Wrap a stimulus passage in the reading-card styling. */
IVQ.h.passageHTML = function (eyebrow, title, text) {
  return `
    ${eyebrow ? `<div class="eyebrow">${eyebrow}</div>` : ""}
    ${title ? `<h2>${title}</h2>` : ""}
    <div class="stim-passage">${text}</div>`;
};

/* Five-point Likert label set used by the IRQ. */
IVQ.h.IRQ_LABELS = [
  "Strongly disagree", "Disagree", "Neither agree nor disagree",
  "Agree", "Strongly agree",
];

/* Seven-point frequency label set used by the VISQ-R. */
IVQ.h.VISQR_LABELS = [
  "Never", "Rarely", "Occasionally", "Sometimes",
  "Often", "Very often", "All the time",
];

/* Generic 1-5 agreement scale used by adapted IEWR / Part 4 items. */
IVQ.h.AGREE5 = [
  "Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree",
];

/*
 * Build a validated-scale block (IRQ / VISQ-R) as a single survey-likert trial
 * with item-order randomisation. Each item carries a stable `name` (e.g.
 * "IRQ_07") so the CSV columns are interpretable even though display order
 * is randomised; the realised order is stored in `question_order`.
 *
 * items: array of { name, prompt, factor }
 */
IVQ.h.scaleBlock = function (jsPsych, { scaleName, items, labels, part, preamble }) {
  return {
    type: jsPsychSurveyLikert,
    preamble: preamble || "",
    randomize_question_order: true,
    questions: items.map((it) => ({
      prompt: it.prompt,
      labels: labels,
      name: it.name,
      required: true,
    })),
    data: {
      part: part,
      scale: scaleName,
      // store the factor mapping so scoring is reproducible from the data file
      factor_map: JSON.stringify(
        items.reduce((m, it) => ((m[it.name] = it.factor), m), {})
      ),
    },
  };
};

/* Tag every trial in an array with a `part` label (added to the data row). */
IVQ.h.tagPart = function (trials, partLabel) {
  trials.forEach((t) => {
    t.data = Object.assign({ part: partLabel }, t.data || {});
  });
  return trials;
};
