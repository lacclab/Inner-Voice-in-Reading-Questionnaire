/* ============================================================================
   SurveyJS engine wrapper.
   Each part file builds a SurveyJS `survey_json` (pages, questions, visibleIf
   branching) and wraps it with IVQ.makeSurvey(...) into a jsPsychSurvey trial.
   SurveyJS provides Previous/Next navigation WITHIN the part, required-field
   validation with messages, "other" fields, dropdown search, and matrix scales.
   ========================================================================== */

window.IVQ = window.IVQ || {};

IVQ.makeSurvey = function (survey_json, data, survey_function) {
  const part = (data && data.part) || null;
  const trial = {
    type: jsPsychSurvey,
    survey_json: survey_json,
    data: Object.assign({ part: "survey" }, data || {}),
  };
  // Always supply a survey_function so the global progress bar can advance from
  // SurveyJS page changes (each part is one trial → the built-in bar is too
  // coarse). Any part-specific survey_function still runs first.
  trial.survey_function = function (survey) {
    if (survey_function) survey_function(survey);
    if (IVQ.progress && part) IVQ.progress.bindSurvey(survey, part);
  };
  return trial;
};
