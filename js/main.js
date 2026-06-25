/* ============================================================================
   Inner Voice Questionnaire — entry point
   Wires up Prolific identifiers, builds the full timeline, saves to DataPipe.
   ========================================================================== */

(function () {
  const jsPsych = initJsPsych({
    show_progress_bar: true,
    message_progress_bar: "Progress",
    on_finish: function () {
      // Final navigation/redirect is handled by the completion screen in
      // IVQ.parts.outro so we can show a "thank you" before leaving.
    },
  });

  /* ── Prolific participant identifiers (passed as URL parameters) ────────── */
  const subject_id =
    jsPsych.data.getURLVariable("PROLIFIC_PID") ||
    "test_" + jsPsych.randomization.randomID(8);
  const study_id = jsPsych.data.getURLVariable("STUDY_ID") || "NA";
  const session_id = jsPsych.data.getURLVariable("SESSION_ID") || "NA";

  jsPsych.data.addProperties({
    subject_id: subject_id,
    study_id: study_id,
    session_id: session_id,
    dev_mode: IVQ.config.devMode,
  });

  // One CSV per participant on OSF.
  const filename = subject_id + "_" + Date.now() + ".csv";

  /* Participants who consistently report NO inner reading voice (Part 3:
     spr_inner_voice=1, survey_inner_voice=1, hearing_inner_voice_reading=1)
     skip the rest of Part 3 (handled by visibleIf) and ALL of Part 4 — there's
     no inner reading voice to characterise — and go straight to Part 5. */
  function hasNoInnerReadingVoice() {
    const vals = jsPsych.data.get().values();
    for (let i = 0; i < vals.length; i++) {
      const r = vals[i] && vals[i].response;
      if (r && r.hearing_inner_voice_reading !== undefined) {
        return r.spr_inner_voice === "1" && r.survey_inner_voice === "1" && r.hearing_inner_voice_reading === "1";
      }
    }
    return false;
  }

  /* ── Build the timeline ─────────────────────────────────────────────────── */
  // intro = consent + media preload + fullscreen; each part file supplies its
  // own instructions/welcome (authored in js/parts/*.js).
  let timeline = [];
  timeline = timeline
    .concat(IVQ.parts.intro(jsPsych))
    .concat(IVQ.parts.part1(jsPsych))
    .concat([IVQ.parts.breakScreen(jsPsych, 1)])
    .concat(IVQ.parts.part2(jsPsych))
    .concat([IVQ.parts.breakScreen(jsPsych, 2)])
    .concat(IVQ.parts.part3(jsPsych))
    .concat([IVQ.parts.breakScreen(jsPsych, 3)])
    // Part 4 (+ its break) is skipped entirely for no-inner-voice participants
    .concat([{
      timeline: [].concat(IVQ.parts.part4(jsPsych)).concat([IVQ.parts.breakScreen(jsPsych, 4)]),
      conditional_function: function () { return !hasNoInnerReadingVoice(); },
    }])
    .concat(IVQ.parts.part5(jsPsych));

  /* ── Save data to DataPipe → OSF (skipped in dev mode) ──────────────────── */
  if (!IVQ.config.devMode) {
    timeline.push({
      type: jsPsychPipe,
      action: "save",
      experiment_id: IVQ.config.dataPipeExperimentID,
      filename: filename,
      data_string: function () {
        return jsPsych.data.get().csv();
      },
    });
  }

  // Completion / Prolific redirect.
  timeline = timeline.concat(IVQ.parts.outro(jsPsych));

  jsPsych.run(timeline);
})();
