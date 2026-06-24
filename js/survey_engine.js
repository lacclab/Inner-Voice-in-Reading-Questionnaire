/* ============================================================================
   SurveyJS engine wrapper.
   Each part file builds a SurveyJS `survey_json` (pages, questions, visibleIf
   branching) and wraps it with IVQ.makeSurvey(...) into a jsPsychSurvey trial.
   SurveyJS provides Previous/Next navigation WITHIN the part, required-field
   validation with messages, "other" fields, dropdown search, and matrix scales.
   ========================================================================== */

window.IVQ = window.IVQ || {};

IVQ.makeSurvey = function (survey_json, data, survey_function) {
  const trial = {
    type: jsPsychSurvey,
    survey_json: survey_json,
    data: Object.assign({ part: "survey" }, data || {}),
  };
  if (survey_function) trial.survey_function = survey_function;
  return trial;
};
