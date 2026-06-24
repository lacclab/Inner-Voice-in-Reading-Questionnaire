/* ============================================================================
   Self-paced reading task (used by Part 2).
   Moving-window, one word per SPACEBAR press; logs per-word reading times.
   Sentences come from stimuli/texts.js — replace the placeholders there.
   ========================================================================== */

window.IVQ = window.IVQ || {};

IVQ.buildSPR = function (jsPsych) {
  const timeline = [];
  const base = {
    type: jsPsychSelfPacedReading,
    font_family: "monospace",
    font_size: "28px",
    mask_type: 1, // moving window: only the current word is visible
    choices: [" "],
    canvas_size: [1000, 300],
  };

  timeline.push(IVQ.pt.info({
    name: "spr_howto",
    html: `<div class="pt-info">You'll read sentences <strong>one word at a time</strong>.
      Press the <span class="kbd">space bar</span> to reveal each next word; the
      previous word hides again. Read naturally, at your own pace.</div>
      <p class="muted">We'll start with a little practice.</p>`,
  }));

  (IVQ.stim.spr_practice || []).forEach((s, i) => {
    timeline.push(Object.assign({}, base, {
      sentence: s,
      data: { screen: "spr_practice", item_id: "practice_" + (i + 1), is_practice: true },
    }));
  });

  timeline.push(IVQ.pt.info({
    name: "spr_realstart",
    html: `<div class="pt-info">Great — now the real sentences. Keep reading at a
      natural, steady pace, pressing <span class="kbd">space</span> for each word.</div>`,
    button: "Start reading",
  }));

  // experimental sentences in a fresh random order per participant
  const order = jsPsych.randomization.shuffle((IVQ.stim.spr_items || []).map((s, i) => ({ s, i })));
  order.forEach(({ s, i }) => {
    timeline.push(Object.assign({}, base, {
      sentence: s,
      data: { screen: "spr_item", item_id: "item_" + (i + 1), is_practice: false },
    }));
  });

  return timeline;
};
