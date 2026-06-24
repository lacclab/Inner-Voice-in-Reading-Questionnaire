# Inner Voice & Reading — online questionnaire

A five-part study on the "inner voice" during reading, built with
[jsPsych](https://www.jspsych.org) v8, designed to run on **Prolific**, host on
**GitHub Pages**, and save data to **OSF via DataPipe** as one CSV per
participant.

**Live site:** <https://lacclab.github.io/Inner-Voice-in-Reading-Questionnaire/>
(currently **pilot mode** — `devMode: true`, so nothing is saved and there's no
Prolific redirect). Repo: <https://github.com/lacclab/Inner-Voice-in-Reading-Questionnaire>.

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

## Questionnaire map

Order of screens with the question name(s) on each, and what is skipped/shown by
prior answers. Every screen is one page (Previous/Next within a part; no going
back across parts). _Italic_ notes are the branching conditions.

**Intro**
- `consent` — agree / decline (decline ends the study)
- `fullscreen_enter` — setup instructions + enter full screen

**Part 1 — Demographics & language background**
- `demographics` — age, gender, home_country
- `countries_lived` — countries lived >3 months (repeatable: country, duration_months) — optional
- `education` — education, years_education, occupation
- `english_native` — english_native (Yes/No)
- `english_profile` — English proficiency (speaking/understanding/reading) + 4 acquisition ages + read_to_child (asked of everyone)
- `english_reading_habits` — 5 categories (books/printed, online, social media, TV/subtitles, environment)
- `other_languages` — do you know other languages? (Yes/No)
- `other_languages_panel` — _only if other_languages = Yes_ — per language (repeatable): name, proficiency ×3, 4 ages, read_to_child
- `language_summary` — _only if other_languages = Yes_ — rank by dominance, rank by acquisition, % exposure, % speak, % read (rows = English + the languages entered; each % set must total 100)
- `vision` — vision_normal, vision_problem (+ describe _if vision_problem = Yes_)
- `hearing_status` — hearing_status (Hearing / Deaf-HoH), native_sign (is a sign language native?)
- **Deaf/ASL battery** — _only if hearing_status = Deaf/HoH OR native_sign = Yes_:
  - `deaf_1` know_asl, age_became_deaf, db_level, deafness_classification
  - `deaf_2_aids` used_hearing_aids → (_if used_) hearing_aid_usage matrix, start/stop age
  - `deaf_3_ci` cochlear_implant → (_if yes_) ci_age, ci_usage matrix, device_function, device_describe
  - `deaf_4_asl` asl_exposure_early, age_exposed_asl, primary/secondary parent deaf, learned_asl_from
  - `deaf_5_home` home_language_primary, home_language_other, deaf_siblings → (_if yes_) sibling_knows_asl, older/younger deaf siblings
  - `deaf_6_edu` education_modality matrix, years studied/used English & ASL
  - `deaf_7_aslprof` asl_proficiency matrix, language_history_note
- `language_impairment` — disorder? (+ describe _if Yes_)
- `dominant_hand`

**Part 2 — Self-paced reading**
- instructions → 2 practice sentences → experimental sentences (random order). Sentences live in `stimuli/texts.js` (currently placeholders).

**Part 3 — Inner speech during reading**
- `spr_inner_voice` (+ explain) — voice while reading the Part 2 sentences
- `survey_inner_voice` — voice while reading the survey itself
- `reading_experience` — _only if survey_inner_voice = "understand without a voice"_
- `hearing_inner_voice_reading` — do you ever hear an inner voice when reading?
- _The next block shows **only if** hearing_inner_voice_reading ≠ "always without a voice":_
  `frequency_inner_voice_reading`, `hearing_inner_voice` (listen vs speak), `material_inner_voice_reading`, `whose_voice_reading`, `different_inner_voice_reading`, `gender_/accent_/pitch_/loudness_/emotional_inner_voice_reading`, `change_inner_voice_reading`, `quality_change_inner_voice_reading` (_also requires change = Yes_), `having_inner_voice_reading` (+ explain)
- `harder_inner_voice_reading` (+ explain) — always shown
- `most_people_inner_voice_reading` — always shown

**Part 4 — Diverse text types** (all shown, in order)
- `alphabet`, `happy_birthday`, `twinkle_twinkle`
- Harry Potter: `harry_potter_book/audio_book/movie` + `harry_potter` reading → `harry_potter_youtube` (local video) + `harry_potter_scene` → `harry_potter_2` (re-read) + diff
- `sherlock_holmes`, `winnie_the_pooh`, `genesis`, `non_words`
- `trump_tweet` (image), `mom_text_1` (image), `mom_text_2` (image)
- Water passage: `one_stop_qa_silent_reading` + comprehension `one_stop_qa_q`
- Manipulations (re-read changing one property): `one_stop_qa_silent_reading_gender / _accent / _pitch / _speed / _loudness / _emotional_tone / _friend`
- Modalities: `one_stop_qa_lips_moving`, `one_stop_qa_aloud`, `one_stop_qa_listening` (audio)
- `one_stop_qa_2` (read as Amy) + `one_stop_qa_2_listening` (audio) + comprehension `one_stop_qa_2_q`

**Part 5 — Validated scales**
- `irq` — IRQ, 36 items, 5-point matrix (random order)
- `visqr` — VISQ-R, 35 items, 7-point matrix (random order)

**End**
- `completion` — thank-you + (live mode) Prolific redirect

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

## Jump-logic corrections (baked into the `visibleIf` conditions)

The PsyToolkit source had a few buggy jumps; the corrected logic is written into
the SurveyJS `visibleIf` conditions in the part files. **Please confirm these are
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

## Deployment (already live)

The study is deployed on **GitHub Pages** from the `main` branch of
`lacclab/Inner-Voice-in-Reading-Questionnaire`. The same URL is used for **both**
piloting and the real study — you never change the URL, you only flip the config.

**To update the live site:** commit and push to `main`; GitHub Pages rebuilds in
~1 minute.

```bash
git add -A && git commit -m "short message" && git push
```

## Going live (checklist)

1. **DataPipe + OSF**: at <https://pipe.jspsych.org> create an experiment linked
   to an OSF component, enable data collection, copy the experiment ID →
   `js/config.js` → `dataPipeExperimentID`.
2. **Prolific**: set the study URL to the live URL with
   `?PROLIFIC_PID={{%PROLIFIC_PID%}}&STUDY_ID={{%STUDY_ID%}}&SESSION_ID={{%SESSION_ID%}}`,
   choose "redirect using a URL", copy the completion code →
   `js/config.js` → `prolificCompletionCode`.
3. Set `devMode: false` in `js/config.js`.
4. Commit & push (auto-redeploys).
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
