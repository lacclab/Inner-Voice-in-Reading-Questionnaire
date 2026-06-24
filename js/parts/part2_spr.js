/* Part 2 — Self-paced reading task
   Edit question wording/options directly here.
 */
window.IVQ = window.IVQ || {};
IVQ.parts.part2 = function (jsPsych) {
  const t = [];

  t.push(IVQ.pt.info({ name: "spr_instructions", html: "<div class=\"pt-info\">Second part<br> In this part you will read some sentences in a self-paced reading task.<br></div>" }));

  // Self-paced reading task (sentences in stimuli/texts.js)
  IVQ.buildSPR(jsPsych).forEach(function (trial) { t.push(trial); });

  return t;
};
