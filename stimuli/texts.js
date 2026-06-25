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
    "This is a practice sentence to get used to the task",
    "The horse raced past the barn fell",
    "This is another practice sentence",
    "The quick brown fox jumps over the lazy dog",
  ],
  spr_items: [
    "The little girl wore a flour in her hair to the party",
    "After the storm the knight was cold and completely still",
    "The sailor tied the not before the ship left the harbor",
    "The blurven mimped quietly across the tazzled florning",
    "She had two many boxes to carry up the stairs",
    "They decided to brake the rules just this once",
    "He wanted to write the wrongs of his past mistakes",
    "She had twopled the grentish mabbins before the wuffle began",
    "When the baby cried the mother rushed into the room immediately",
    "While the man hunted the deer ran into the forest and disappeared",
    "The chicken is ready to eat",
    "When the droven splicked the narvish gleeped into the mottled surn",
    "The content of her lecture was surprisingly engaging",
    "She seemed perfectly content sitting alone by the window",
    "There was a serious conflict between the two neighboring countries",
    "The new evidence began to conflict with the original findings",
    "The band gave an impressive protest outside the government building",
    "The workers decided to protest the unfair changes to their contract",
    "The strimming was contently frobished by the wazzled bleen",
  ],
};
