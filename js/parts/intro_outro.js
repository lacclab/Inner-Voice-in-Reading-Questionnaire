/* ============================================================================
   Intro (welcome · consent · preload · fullscreen) and Outro (completion).
   ========================================================================== */

window.IVQ = window.IVQ || {};

IVQ.parts.intro = function (jsPsych) {
  const timeline = [];

  /* Informed consent -------------------------------------------------------- */
  const consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <h1>Informed consent</h1>
      <p>« PLACEHOLDER: paste IRB/ethics-approved consent text here. »</p>
      <p>This study explores people’s NORMAL INNER EXPERIENCES when they are reading 
      written text. During the experiment, you will read texts and asked to answer 
      questions to the best of your ability. This study is conducted for research purposes. 
      Your responses are recorded anonymously and stored securely. Participation is 
      voluntary and you may withdraw at any time by closing the window.</p>
      <p><strong>By clicking “I consent and wish to begin,” you confirm that you
      are 18 or older, have read the information above, and agree to take
      part.</strong></p>`,
    choices: ["I consent and wish to begin", "I do not consent"],
    data: { screen: "consent" },
    on_finish: function (data) {
      data.consented = data.response === 0;
      if (data.response === 1) {
        // Decline → end the experiment gracefully.
        jsPsych.abortExperiment(
          `<h1>Thank you</h1><p>You have chosen not to take part. You may now
           close this window.</p>`
        );
      }
    },
  };
  timeline.push(consent);

  /* Preload media (Amy recordings, tweet/text images) -----------------------
     Skipped in dev mode so testing isn't blocked by media that isn't added yet.
     In production, max_load_time guarantees we never hang on a missing/slow file. */
  const media = IVQ.media || { audio: [], images: [] };
  if (!IVQ.config.devMode) {
    timeline.push({
      type: jsPsychPreload,
      audio: (media.audio || []).map((f) => IVQ.MEDIA_BASE + f),
      images: (media.images || []).map((f) => IVQ.MEDIA_BASE + f),
      message: "Loading the study…",
      show_progress_bar: true,
      continue_after_error: true,
      max_load_time: 10000, // ms — proceed even if a file fails or stalls
      data: { screen: "preload" },
    });
  }

  /* Fullscreen -------------------------------------------------------------- */
  if (IVQ.config.useFullscreen) {
    timeline.push({
      type: jsPsychFullscreen,
      fullscreen_mode: true,
      message: `<p>Please make sure you are sitting comfortably in a well-lit room,
                in front of a computer screen, with a keyboard (a laptop, or a tablet
                with a keyboard, is also fine). During the survey, you will be asked 
                to listen to a couple of audio clips. Please make sure your speakers 
                are on or that you have headphones connected to your device.
                Please try to complete the experiment continuously, in one sitting.</p>
                <p>The study works best in full-screen mode, which also helps
                keep the reading task accurate.</p>
                <p>Click below to continue in full screen.</p>`,
      button_label: "Enter full screen",
      data: { screen: "fullscreen_enter" },
    });
  }

  return IVQ.h.tagPart(timeline, "intro");
};

/* Between-parts break screen (after Parts 1–4); advance on the space bar. */
IVQ.parts.breakScreen = function (jsPsych, partNum) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    choices: [" "],
    stimulus: `<div class="pt-info">
        <h2>You've finished Part ${partNum} of 5.</h2>
        <p>Feel free to take a short break.</p>
        <p>When you're ready, press the <span class="kbd">space bar</span> to continue to the next part.</p>
      </div>`,
    data: { screen: "break_after_part" + partNum, part: "break" },
  };
};

IVQ.parts.outro = function (jsPsych) {
  const timeline = [];

  const completionURL =
    "https://app.prolific.com/submissions/complete?cc=" +
    IVQ.config.prolificCompletionCode;

  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <h1>You're all done — thank you!</h1>
      <p>Your responses have been recorded. Thank you for your time and your
      thoughtful answers.</p>
      ${
        IVQ.config.devMode
          ? `<p class="muted"><em>Developer mode: data was NOT saved and you will
             not be redirected to Prolific.</em></p>`
          : `<p>Click below to return to Prolific and register your completion.
             You must click this to be paid.</p>`
      }`,
    choices: IVQ.config.devMode ? ["Finish"] : ["Return to Prolific"],
    data: { screen: "completion" },
    on_load: function () {
      // leave fullscreen automatically (no extra blank screen / stuck feeling)
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(function () {});
      }
    },
    on_finish: function () {
      if (!IVQ.config.devMode) window.location = completionURL;
    },
  });

  return IVQ.h.tagPart(timeline, "outro");
};
