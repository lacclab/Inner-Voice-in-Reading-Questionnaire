/* ============================================================================
   Inner Voice Questionnaire — global configuration
   Edit the values in IVQ.config before launching on Prolific.
   ========================================================================== */

window.IVQ = window.IVQ || {};

IVQ.config = {
  // ── DataPipe → OSF ────────────────────────────────────────────────────────
  // 1. Go to https://pipe.jspsych.org and sign in with OSF.
  // 2. Create an OSF project + component, generate an OSF access token.
  // 3. Create a new experiment on DataPipe, connect it to the OSF component.
  // 4. Set the experiment to "active" / enable data collection.
  // 5. Paste the experiment ID it gives you here:
  dataPipeExperimentID: "REPLACE_WITH_DATAPIPE_EXPERIMENT_ID",

  // ── Prolific ──────────────────────────────────────────────────────────────
  // From your Prolific study's "completion code" (Prolific generates this).
  prolificCompletionCode: "REPLACE_WITH_PROLIFIC_COMPLETION_CODE",

  // ── Behaviour switches ──────────────────────────────────────────────────────
  // devMode = true  → does NOT save to DataPipe and does NOT redirect to Prolific.
  //                   Use while building/testing locally.
  // devMode = false → saves data + redirects participant back to Prolific at the end.
  devMode: true,

  // Set true to require fullscreen for the whole session (recommended for the
  // self-paced reading timing in Part 2).
  useFullscreen: true,
};

// Namespaces filled in by the part files.
IVQ.parts = {};
