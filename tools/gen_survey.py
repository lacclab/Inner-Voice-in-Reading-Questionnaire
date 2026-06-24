#!/usr/bin/env python3
"""
Generate SurveyJS-based part files from survey_source/survey.txt.

Each part (1,3,4,5) becomes ONE jsPsychSurvey trial: a SurveyJS survey with one
page per original screen, giving Previous/Next navigation WITHIN the part,
required-validation, and `visibleIf` branching (converted from the PsyToolkit
jumps). Part 2 (self-paced reading) is left as-is.

Run:  python3 tools/gen_survey.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "survey_source", "survey.txt")

DIRECTIVE = re.compile(r"^(l|t|q|i|a|o|scale|page):")
OPTION = re.compile(r"^-\s?(.*)$")
JUMP_RE = re.compile(r"if\s+\$(\w+)\s*(==|!=|=)\s*(\S+)\s+then\s+goto\s+(\w+)", re.I)

JUMP_FIXES = {
    ("jump_reading_experience", "hearing_inner_voice"): "survey_inner_voice",
    ("jump_quality_change_inner_voice_reading", "hearing_inner_voice"): "change_inner_voice_reading",
    ("jump_other_language_native", "english_native"): None,  # disabled
}
PART_STARTS = {"experiment_instructions": 1, "spr_instructions": 2,
               "iewr_instructions": 3, "alphabet": 4, "irq_visqr_instructions": 5}
# the only youtube item → play the uploaded local video instead
VIDEO_MAP = {"Qgr4dcsY-60": "harry_potter.mp4"}


def clean(s):
    return re.sub(r"\s*\n\s*", " ", (s or "")).strip()


def parse_attrs(s):
    a = {}
    for tok in s.split(","):
        tok = tok.strip()
        if not tok:
            continue
        if "=" in tok:
            k, v = tok.split("=", 1)
            a[k.strip()] = v.strip()
        else:
            a[tok] = True
    return a


def split_braces(text):
    m = re.match(r"^\{([^}]*)\}\s*(.*)$", text)
    return (parse_attrs(m.group(1)), m.group(2).strip()) if m else (None, text.strip())


def num(v, d=0):
    if v is None:
        return d
    m = re.search(r"-?\d+", str(v))
    return int(m.group()) if m else d


# ── parse ────────────────────────────────────────────────────────────────────
def parse():
    lines = open(SRC, encoding="utf-8").read().split("\n")
    items, scales, block = [], {}, None

    def finalize(b):
        if b is None:
            return
        if b.get("scale_def") is not None:
            scales[b["scale_def"]] = b["opts"]
            return
        t = b.get("t", "")
        it = {"label": b.get("l"), "prompt": "\n".join(b.get("q", [])).strip(),
              "image": b.get("i"), "audio": b.get("a"),
              "random": "random" in b.get("o", [])}
        raw = b["opts"]
        if t == "info":
            it["type"] = "info"
        elif t == "jump":
            m = JUMP_RE.search(raw[0] if raw else "")
            if not m:
                return
            var, op, val, goto = m.groups()
            key = (b["l"], var)
            if key in JUMP_FIXES:
                fix = JUMP_FIXES[key]
                if fix is None:
                    return
                var = fix
            it.update(type="jump", var=var, op=op, val=val, goto=goto)
        elif t == "experiment":
            it.update(type="experiment")
        elif t == "youtube":
            it.update(type="youtube", videoId=raw[0].strip() if raw else "")
        elif t.startswith("scale"):
            it.update(type="scale", scale=t.split()[1] if len(t.split()) > 1 else None,
                      items=[o.strip() for o in raw])
        elif t == "range":
            rows = []
            for i, o in enumerate(raw):
                a, lbl = split_braces(o)
                a = a or {}
                rows.append({"name": f"row{i+1}", "label": lbl, "min": num(a.get("min"), 0),
                             "max": num(a.get("max"), 10), "left": a.get("left", ""), "right": a.get("right", "")})
            it.update(type="range", rows=rows)
        elif t == "textline":
            a = (split_braces(raw[0])[0] or {}) if raw else {}
            it.update(type="textline")
            if "min" in a:
                it["min"] = num(a["min"])
            if "max" in a:
                it["max"] = num(a["max"])
        elif t == "textbox":
            it.update(type="textbox")
        elif t in ("radio", "check", "list", "drop"):
            opts = []
            for o in raw:
                a, txt = split_braces(o)
                if a and "other" in a:
                    opts.append({"other": True, "label": txt})
                else:
                    opts.append(txt)
            it.update(type=t, options=opts)
        else:
            it["type"] = t or "unknown"
        items.append(it)

    for raw in lines:
        s = raw.strip()
        if s.startswith("page:"):
            finalize(block); block = None
            items.append({"type": "page_" + s.split(":", 1)[1].strip()})
            continue
        if s.startswith("scale:"):
            finalize(block)
            block = {"scale_def": s.split(":", 1)[1].strip(), "opts": [], "q": [], "o": []}
            continue
        m = DIRECTIVE.match(s)
        if m:
            k = m.group(1); v = s.split(":", 1)[1].strip()
            if k == "l":
                finalize(block); block = {"l": v, "opts": [], "q": [], "o": []}
            elif block is not None:
                if k == "q":
                    block["q"] = [v]
                elif k == "o":
                    block["o"].append(v)
                elif k in ("t", "i", "a"):
                    block[k] = v
            continue
        om = OPTION.match(s)
        if om and block is not None:
            block["opts"].append(om.group(1).rstrip())
            continue
        if block is not None and block.get("q") and s != "":
            block["q"].append(raw)
    finalize(block)
    return items, scales


# ── units + guards (for visibleIf) ───────────────────────────────────────────
def build_units(items):
    units, jumps, page = [], [], None
    for it in items:
        if it["type"] == "page_begin":
            page = []; continue
        if it["type"] == "page_end":
            if page is not None:
                units.append({"kind": "page", "items": page, "guards": []})
            page = None; continue
        if it["type"] == "jump":
            jumps.append({"after": len(units), "var": it["var"], "op": it["op"], "val": it["val"], "goto": it["goto"]})
            continue
        (page.append(it) if page is not None
         else units.append({"kind": "single", "items": [it], "guards": []}))
    l2u = {}
    for i, u in enumerate(units):
        for x in u["items"]:
            if x.get("label") and x["label"] not in l2u:
                l2u[x["label"]] = i
    for j in jumps:
        tgt = l2u.get(j["goto"])
        if tgt is None:
            continue
        for u in range(j["after"], tgt):
            units[u]["guards"].append(j)
    return units


def visible_if(guards):
    # guard "if COND goto" → show iff NOT COND
    parts = []
    for g in guards:
        op = g["op"]
        if op in ("=", "=="):
            parts.append(f"{{{g['var']}}} <> '{g['val']}'")
        else:  # !=
            parts.append(f"{{{g['var']}}} = '{g['val']}'")
    return " and ".join(parts)


# ── SurveyJS element builders ────────────────────────────────────────────────
def media_html(it):
    h = ""
    if it.get("image"):
        f = re.sub(r"^\{[^}]*\}\s*", "", it["image"]).strip()
        h += f'<div class="pt-media"><img src="stimuli/media/{f}" alt="stimulus image"></div>'
    if it.get("audio"):
        h += f'<div class="pt-media"><audio controls preload="auto" src="stimuli/media/{it["audio"]}"></audio></div>'
    return h


def choices(options):
    out = []
    for i, o in enumerate(options):
        if isinstance(o, dict) and o.get("other"):
            continue
        out.append({"value": str(i + 1), "text": o})
    return out


def other_text(options):
    for o in options:
        if isinstance(o, dict) and o.get("other"):
            return o["label"]
    return None


def question_elements(it):
    """Return list of SurveyJS elements for one question item (html prompt + input)."""
    pre = media_html(it) + f'<div class="pt-prompt">{clean(it["prompt"])}</div>'
    els = [{"type": "html", "name": it["label"] + "_q", "html": pre}]
    t = it["type"]
    base = {"name": it["label"], "titleLocation": "hidden"}
    if t in ("radio", "check", "list", "drop"):
        e = dict(base)
        e["type"] = {"radio": "radiogroup", "check": "checkbox",
                     "list": "dropdown", "drop": "dropdown"}[t]
        if it["label"] == "home_country":
            e["choices"] = "__COUNTRIES__"
        elif it["label"] == "other_languages_list":
            e["choices"] = "__LANGUAGES__"
        else:
            e["choices"] = choices(it["options"])
        ot = other_text(it["options"])
        if ot is not None:
            e["showOtherItem"] = True
            e["otherText"] = ot
        e["isRequired"] = (t != "check")            # radios/dropdowns required
        if t == "check":
            e["isRequired"] = True                  # ≥1 selection required
        els.append(e)
    elif t == "textline":
        e = dict(base, type="text")
        if "min" in it or "max" in it:
            e["inputType"] = "number"
            if "min" in it:
                e["min"] = it["min"]
            if "max" in it:
                e["max"] = it["max"]
        e["isRequired"] = True
        els.append(e)
    elif t == "textbox":
        els.append(dict(base, type="comment", isRequired=True))
    elif t == "range":
        # SurveyJS has no slider → one rating row per item (0..max with end labels)
        for r in it["rows"]:
            els.append({"type": "rating", "name": it["label"] + "__" + r["name"],
                        "title": r["label"], "rateMin": r["min"], "rateMax": r["max"],
                        "minRateDescription": r["left"], "maxRateDescription": r["right"],
                        "isRequired": True})
    elif t == "scale":
        return None  # handled separately
    return els


def scale_page(it, scales):
    labels = scales.get(it.get("scale"), [])
    return {
        "name": it["label"],
        "elements": [{
            "type": "matrix",
            "name": it["label"],
            "title": clean(it["prompt"]),
            "isAllRowRequired": True,
            "rowsOrder": "random" if it.get("random") else "initial",
            "columns": [{"value": i + 1, "text": l} for i, l in enumerate(labels)],
            "rows": [{"value": f"{it['label']}_{str(i+1).zfill(2)}", "text": s}
                     for i, s in enumerate(it["items"])],
        }],
    }


def youtube_html(it):
    f = VIDEO_MAP.get(it.get("videoId"))
    media = (f'<div class="pt-video"><video controls preload="metadata" src="stimuli/media/{f}"></video></div>'
             if f else
             f'<div class="pt-video"><iframe width="640" height="360" '
             f'src="https://www.youtube.com/embed/{it["videoId"]}" frameborder="0" allowfullscreen></iframe></div>')
    return f'<div class="pt-prompt">{clean(it["prompt"])}</div>' + media


def unit_to_page(u, scales):
    items = u["items"]
    # scale page (always alone)
    sc = next((x for x in items if x["type"] == "scale"), None)
    if sc:
        pg = scale_page(sc, scales)
    else:
        els = []
        for it in items:
            if it["type"] == "info":
                els.append({"type": "html", "name": (it["label"] or "info") + "_h",
                            "html": f'<div class="pt-info">{clean(it["prompt"])}</div>'})
            elif it["type"] == "youtube":
                els.append({"type": "html", "name": it["label"] + "_h", "html": youtube_html(it)})
            else:
                qe = question_elements(it)
                if qe:
                    els.extend(qe)
        name = next((x["label"] for x in items if x.get("label")), "page")
        pg = {"name": name, "elements": els}
    vif = visible_if(u["guards"])
    if vif:
        pg["visibleIf"] = vif
    return pg


# ── emit ──────────────────────────────────────────────────────────────────────
PART_TITLES = {1: "Part 1 — Demographic survey and reading profile",
               3: "Part 3 — Inner speech during reading",
               4: "Part 4 — Inner speech during diverse text types",
               5: "Part 5 — IRQ and VISQ-R"}


def emit_part(pn, pages):
    survey = {"showQuestionNumbers": "off", "showPrevButton": True,
              "showProgressBar": "off", "pageNextText": "Next",
              "pagePrevText": "Previous", "completeText": "Continue",
              "pages": pages}
    body = json.dumps(survey, ensure_ascii=False, indent=2)
    # inject the big choice lists by reference (kept out of the file)
    body = body.replace('"__COUNTRIES__"', "IVQ.lists.countries.map(function(c,i){return{value:String(i+1),text:c};})")
    body = body.replace('"__LANGUAGES__"', "IVQ.lists.languages.map(function(c,i){return{value:String(i+1),text:c};})")
    return (f"/* {PART_TITLES[pn]}\n   SurveyJS survey — edit questions here. Re-run nothing; this IS the source.\n */\n"
            f"window.IVQ = window.IVQ || {{}};\n"
            f"IVQ.parts.part{pn} = function (jsPsych) {{\n"
            f"  const survey_json = {body};\n"
            f"  return [ IVQ.makeSurvey(survey_json, {{ part: \"part{pn}\" }}) ];\n}};\n")


def main():
    items, scales = parse()
    units = build_units(items)
    cur = 1
    for u in units:
        for x in u["items"]:
            if x.get("label") in PART_STARTS:
                cur = PART_STARTS[x["label"]]
        u["part"] = cur

    names = {1: "part1_demographics", 3: "part3_iewr", 4: "part4_diverse", 5: "part5_scales"}
    for pn in (1, 3, 4, 5):
        pages = [unit_to_page(u, scales) for u in units if u["part"] == pn]
        open(os.path.join(ROOT, "js", "parts", names[pn] + ".js"), "w", encoding="utf-8").write(emit_part(pn, pages))
        print(f"wrote js/parts/{names[pn]}.js  ({len(pages)} pages)")


if __name__ == "__main__":
    main()
