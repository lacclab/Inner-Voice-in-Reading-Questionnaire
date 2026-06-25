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

Order of screens with the question(s) on each, and what is shown/skipped by prior
answers. Within a part, SurveyJS gives Previous/Next; there's a **break screen
after Parts 1–4** ("you've finished Part N… press space to continue"). _Italic_
notes are the branching conditions. (For the full, always-current question list,
open `export.html`.)

**Intro**
- `consent` (agree / decline → ends study) → media preload → `fullscreen_enter`

**Part 1 — Demographics & language background**
- `demographics` — age, gender, home country (searchable dropdown)
- `countries_lived` — countries lived >3 months (add-as-many; optional)
- `education` (expanded list + "Other"), years of education, occupation (dropdown + "Other")
- `english_native` (Yes/No)
- `english_profile` — for each of speaking / understanding / reading / writing: a 0–10 proficiency scale **and** a "select all that apply" usage-context checkbox; then 4 acquisition ages (start / fluent / begin-reading / fluent-reading, with order validators) + "read to as a child?"
- **Weekly-hours sliders (0–30, "30+")** — `english_reading_habits`, `english_listening_habits`, `english_speaking_habits`, `english_writing_habits` (one page each; default 0)
- `other_languages` (Yes/No)
- `other_languages_panel` — _if Yes_ — add each language (no duplicates, English excluded): name, proficiency ×4, ages, read-to-as-child
- `language_summary` — _if Yes_ — rank by dominance, rank by acquisition, and % exposure / speak / read (sliders per language, each set must total 100)
- `vision` — vision conditions (multi-select + None/Other)
- `hearing_status` (Hearing / Deaf-HoH) + native_sign (sign language native?)
- **Deaf/ASL battery** (`deaf_1`…`deaf_7_aslprof`) — _only if Deaf/HoH OR native sign language_ — ASL knowledge, age deaf, dB, classification, hearing-aid use (+ usage grid), cochlear implant (+ usage grid), ASL exposure, parents/siblings, home language, education-modality grid, years studied/used, ASL proficiency
- `language_impairment` — disorders (multi-select + None/Other) → _if any_: age of diagnosis + specify
- `dominant_hand`

**Part 2 — Self-paced reading**
- Instructions → practice sentences → experimental sentences (random order), word-by-word on spacebar; long sentences wrap to multiple lines. Sentences in `stimuli/texts.js`.

**Part 3 — Inner speech during reading**
- `spr_inner_voice` page — **natural_reading** (felt like natural reading? + how similar/different), then did-you-hear-a-voice (+ explain), then **writing_inner_voice** (did you hear a voice while writing your answers?)
- `survey_inner_voice` → `reading_experience` _(if survey_inner_voice = "understand without a voice")_
- `hearing_inner_voice_reading` — do you ever hear an inner voice when reading?
- _Phenomenology block, shown **only if** hearing_inner_voice_reading ≠ "always without a voice":_ frequency, **situations** (when you're more likely to hear it — difficulty, non-native language, attention, etc.), listen-vs-speak, materials, whose voice, **voice qualities matrix** (gender/accent/pitch/loudness × same/different/varies/can't-tell), emotional tone, can-you-change (→ which qualities _if Yes_), adds-to-experience (+ explain)
- `harder_inner_voice_reading` (+ explain), `most_people_inner_voice_reading`
- **Skip:** if a participant reports **no inner reading voice** (spr_inner_voice = survey_inner_voice = hearing_inner_voice_reading = "no/never"), the last two Part-3 questions **and all of Part 4** are skipped → straight to Part 5.

**Part 4 — Diverse text types** (in order; each big checklist is now split into themed sub-questions)
- `alphabet`, `happy_birthday`, `twinkle_twinkle`
- Harry Potter: read-novels/audio/movies → reading passage with `hp_hear / hp_voice / hp_accent / hp_gender / hp_spell / hp_visual` → `harry_potter_youtube` (uploaded clip) + `harry_potter_scene` → re-read `hp2_*` + differences
- `sherlock_holmes` (`sh_*`), `winnie_the_pooh` (`wp_*` incl. human-vs-non-human + "Honey!"), `genesis` (`gn_*` incl. human-vs-non-human), `non_words`
- `trump_tweet` (image) — `tr_hear/voice/accent` + how you read @nytimes / @realDonaldTrump / the date
- `mom_text_1`, `mom_text_2` (images) — `m_hear/voice/accent/tone/volume` + how you read WTF / LOL
- Water passage: `one_stop_qa_silent_reading` (`os_*`) + comprehension `one_stop_qa_q`
- Manipulations (re-read changing one property): `one_stop_qa_silent_reading_gender / _accent / _pitch / _speed / _loudness / _emotional_tone / _friend`
- Modalities: `one_stop_qa_lips_moving`, `one_stop_qa_aloud`, `one_stop_qa_listening` (audio, `l1_*` vs Amy)
- `one_stop_qa_2` (read as Amy, `o2_*`) + `one_stop_qa_2_listening` (audio, `l2_*`) + comprehension `one_stop_qa_2_q`

**Part 5 — Validated scales** (item order randomised)
- `irq` — IRQ, 5-point matrix (full set in file; some items commented out)
- `visqr` — VISQ-R, 7-point matrix (full set in file; some items commented out)

**End**
- `completion` — thank-you + (live mode) Prolific redirect

## Editing the survey

Open the relevant `js/parts/partN_*.js` and edit the SurveyJS `survey_json`
(pages → elements), then reload. Each screen is a `page`; questions use SurveyJS
types: `radiogroup`, `checkbox`, `dropdown` (with `showOtherItem`/`otherText`
for "other"), `text` (`inputType:"number"` + `min`/`max` for numeric), `comment`
(free text), `rating` (the 0–N scales — SurveyJS has no drag-slider), `matrix`
(Likert grids — the IRQ/VISQ-R tables and the Part 3 voice-qualities grid), and
`html` (instructions / passages / images / video).
Branching uses `visibleIf` on a page, e.g. `"{english_native} <> '1'"`.
Required validation is `isRequired` / `isAllRowRequired`. The big country/
language lists are injected from `js/lists.js`.

## What you still need to provide

Already in: Part 2 SPR sentences (`stimuli/texts.js`), the tweet/text images and
the Harry Potter video (`stimuli/media/`). Still to do:

- **Amy audio** — two recordings in `stimuli/media/`, referenced by the listening
  pages: `Food-Shortages-Could-Force-World-into-Vegetarianism_p1.wav` and `…_p2.wav`.
- **Consent text** — replace the placeholder in `js/parts/intro_outro.js`.
- **Before launch:** set `devMode: false` and add the **DataPipe experiment ID**
  + **Prolific completion code** in `js/config.js`.

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
