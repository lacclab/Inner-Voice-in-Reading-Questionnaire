/* ============================================================================
   Self-paced reading sentences (Part 2).
   ----------------------------------------------------------------------------
   The PsyToolkit source references an SPR experiment ("SPR_one_word") whose
   sentence list is NOT part of survey.txt — add the real practice and
   experimental sentences here. The plugin reveals one word per SPACEBAR press
   and logs per-word reading times.

   Everything else (Part 1/3/4/5 wording, the Part 4 passages, the IRQ/VISQ-R
   items, the tweet/text images, and the Amy audio) comes from the parsed
   survey and lives in js/survey_data.js + stimuli/media/.
   ========================================================================== */

window.IVQ = window.IVQ || {};
IVQ.stim = {
  spr_practice: [
    "This is a practice sentence to get used to the task.",
    "Press the space bar to reveal each word in turn.",
  ],
  spr_items: [
    // === PLACEHOLDER experimental sentences — replace with your stimuli ===
    "The old lighthouse keeper watched the storm roll in from the sea.",
    "She whispered the secret so quietly that no one else could hear it.",
    "The committee agreed that the proposal needed substantial revision.",
  ],
};
