# Inner Voice & Reading — online questionnaire

A five-part study on the "inner voice" during reading, built with
[jsPsych](https://www.jspsych.org) v8, designed to run on **Prolific**, host on
**GitHub Pages**, and save data to **OSF via DataPipe** as one CSV per
participant.

The questions live as editable JavaScript in `js/parts/*.js`. Parts 1/3/4/5 are
**SurveyJS surveys** (via jsPsych's `@jspsych/plugin-survey`), which gives a
**Previous/Next** button within each part, required-field validation with
messages, "other" fields, searchable dropdowns, and matrix scales. Part 2 is the
self-paced reading task. `survey_source/survey.txt` is the original PsyToolkit
**reference** only.

Each part file builds a SurveyJS `survey_json` (one page per screen, with
`visibleIf` for the conditional questions) and returns it via `IVQ.makeSurvey`.
Branching, required rules, and wording are all edited directly in these files.

## How it fits together

```
js/parts/part1_demographics.js   ← the actual questions (edit these)
js/parts/part2_spr.js               each part = IVQ.parts.partN(jsPsych) → [trials]
js/parts/part3_iewr.js
js/parts/part4_diverse.js
js/parts/part5_scales.js
js/parts/spr_task.js             self-paced reading task (IVQ.buildSPR)
js/parts/intro_outro.js          consent · media preload · fullscreen · completion
js/pt.js                         question-type builders (radio/check/range/…) + theme
js/lists.js                      big option lists (countries, languages) + media manifest
js/main.js                       Prolific capture · timeline assembly · DataPipe save
css/style.css                    visual theme
stimuli/texts.js                 ← Part 2 self-paced-reading sentences
stimuli/media/                   ← tweet/text images + Amy .wav recordings
js/config.js                     ← DataPipe id, Prolific code, devMode
survey_source/survey.txt         reference only (original PsyToolkit source)
```

## Editing the survey

Open the relevant `js/parts/partN_*.js` and edit the SurveyJS `survey_json`
(pages → elements), then reload. Each screen is a `page`; questions use SurveyJS
types: `radiogroup`, `checkbox`, `dropdown` (with `showOtherItem`/`otherText`
for "other"), `text` (`inputType:"number"` + `min`/`max` for numeric), `comment`
(free text), `rating` (the 0–N scales — SurveyJS has no drag-slider), `matrix`
(the IRQ/VISQ-R tables), and `html` (instructions / passages / images / video).
Branching uses `visibleIf` on a page, e.g. `"{english_native} <> '1'"`.
Required validation is `isRequired` / `isAllRowRequired`. The big country/
language lists are injected from `js/lists.js`.

## What you still need to provide

Search the code/source for `PLACEHOLDER`:

- **Part 2 SPR sentences** — `stimuli/texts.js`. The PsyToolkit source references
  an SPR experiment (`SPR_one_word`) whose sentence list isn't in `survey.txt`;
  add the real practice + experimental sentences.
- **Media files** in `stimuli/media/`: the tweet/text images and Harry Potter
  video are already present. Still needed — the two Amy recordings:
  `Food-Shortages-Could-Force-World-into-Vegetarianism_p1.wav`,
  `Food-Shortages-Could-Force-World-into-Vegetarianism_p2.wav`.
- **Consent text** — `js/parts/intro_outro.js`.
- Before launch: **DataPipe experiment ID** + **Prolific completion code** in
  `js/config.js`.

## Jump-logic corrections (baked into the `showIf` conditions)

The PsyToolkit source had a few buggy jumps; the corrected logic is written into
the `IVQ.pt.showIf(...)` conditions in the part files. **Please confirm these are
what you intended:**

- `jump_reading_experience` → variable `$hearing_inner_voice` corrected to
  `$survey_inner_voice` (original named a non-existent question).
- `jump_quality_change_inner_voice_reading` → `$hearing_inner_voice` corrected to
  `$change_inner_voice_reading`.
- `jump_other_language_native` → **disabled** (`$english_native != 5` is always
  true, since that question has only Yes/No, so it would never show the other-
  language reading-habits sliders). Result: those sliders now always show for
  people who speak another language. Tell me the intended rule if different.

## Run locally for testing

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. With `devMode: true` (default in `js/config.js`)
nothing is saved and there's no Prolific redirect. To simulate a participant:
`http://localhost:8000/?PROLIFIC_PID=test123&STUDY_ID=s1&SESSION_ID=x1`.

## Preview the whole questionnaire (export to PDF/text)

Open **`export.html`** (e.g. <http://localhost:8000/export.html>) to see the entire
questionnaire on one page — every question across all five parts, all conditional
branches shown and labelled, and the self-paced-reading sentences printed in full.
Click **"Save as PDF / Print"** (top-right) to save it as a PDF, or just read/copy
it as text. It's a read-only preview generated from the same part files, so it
always matches the live study; it is not part of the participant flow.

## Sharing a quick pilot link (temporary)

To let someone test the study without deploying, you can expose your local server
with a Cloudflare quick tunnel (no account):

```bash
brew install cloudflared            # once
python3 -m http.server 8000 &       # serve the folder
cloudflared tunnel --url http://localhost:8000   # prints a https://….trycloudflare.com URL
```

This URL is **temporary** — it works only while your computer is awake and both
processes are running, and the address changes each time you restart the tunnel.
Fine for piloting; **not** suitable for the real data-collection study (use a
permanent host below).

## Permanent hosting

A real Prolific study needs a permanent static host. The same deployed URL is used
for **both** piloting and the real study — you don't change the URL later, you only
flip the config (see "Going live"). Two easy options:

- **Netlify Drop** (fastest, no CLI): go to <https://app.netlify.com/drop> and drag
  the whole `inner_voice_questionnaire` folder onto the page. You get a permanent
  `https://<name>.netlify.app` URL immediately (create a free account to keep it /
  rename it). Re-drag the folder to update.
- **GitHub Pages**: push this folder to a GitHub repo, then Settings → Pages →
  deploy from branch (root). URL: `https://<user>.github.io/<repo>/`.

## Going live (checklist)

1. **DataPipe + OSF**: at <https://pipe.jspsych.org> create an experiment linked
   to an OSF component, enable data collection, copy the experiment ID →
   `js/config.js` → `dataPipeExperimentID`.
2. **Prolific**: set the study URL to your GitHub Pages URL with
   `?PROLIFIC_PID={{%PROLIFIC_PID%}}&STUDY_ID={{%STUDY_ID%}}&SESSION_ID={{%SESSION_ID%}}`,
   choose "redirect using a URL", copy the completion code →
   `js/config.js` → `prolificCompletionCode`.
3. Set `devMode: false`.
4. **GitHub Pages**: push, enable Pages (deploy from branch, root).
5. Pilot 1–2 participants end to end; confirm a CSV lands on OSF and the Prolific
   redirect registers completion.

## Data notes

- One CSV per participant on OSF (`<PROLIFIC_PID>_<timestamp>.csv`), long format
  (one row per screen). Page screens store all their questions in one `response`
  object keyed by the PsyToolkit label.
- Part 2 rows include `word`, `rt` (per-word reading times), `rt_total`.
- Part 5 scales randomise item order; `item_text` (in the data) maps each item
  code back to its statement for scoring.

## Version pinning

jsPsych core (`8.2.3`) and community plugins (self-paced-reading `2.0.0`,
pipe `0.6.0`) are pinned in `index.html`; core `@jspsych/plugin-*` use the `@2`
line. Pin those to exact versions before launch for full reproducibility.
