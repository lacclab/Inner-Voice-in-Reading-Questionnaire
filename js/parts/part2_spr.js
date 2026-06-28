/* Part 2 — Self-paced reading task
   Edit question wording/options directly here.
 */
window.IVQ = window.IVQ || {};
IVQ.parts.part2 = function (jsPsych) {
  const t = [];

  // (the high-level "what is this part" intro now lives on the section-intro
  //  screen; spr_howto inside buildSPR still gives the task mechanics)
  // Self-paced reading task (sentences in stimuli/texts.js)
  IVQ.buildSPR(jsPsych).forEach(function (trial) { t.push(trial); });

  return t;
};
