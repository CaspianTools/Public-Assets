---
product: Caspian Office
title: "v1.177.0 — Raw translation keys on deep links, and three half-translated tools"
date: 2026-08-13
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.177.0.png)

**Shipped v1.177.0** · 2026-08-13

A release about words that were not words. Opening any of the six Lean boards from a direct link showed raw translation keys on screen — `tool.lean.tpl.kaizen.ideas` where "Ideas" belongs — **in every language, English included**. Alongside that: three tools that were only half translated, a search box that never got connected to its own translation, and a check that now looks *inside* a tool instead of only at its name.

- **fix** — **Deep links showed raw translation keys.** All six Lean boards (Kaizen, PDCA, DMAIC, PICK, ICE, and the combined board), in all twelve languages. The tool catalogue loads after the app is interactive so it stays off the boot path; a deep-linked tool therefore paints before its words exist, and boards had opted out of repainting afterwards to protect a half-typed card. They now repaint the moment the catalogue lands — unless you are genuinely mid-edit.
- **fix** — **The org chart could save a person called "tool.orgchart.sample"** to your browser, and bring it back on every later visit. Same root cause, and it now repairs itself.
- **fix** — **The home page search box was English whatever language you chose.** The translation had existed in all twelve languages since the switcher shipped; the box was simply never wired to it.
- **fix** — **Three tools were half in your language, half in English.** Incident rate calculator (22 strings — fatalities, all injuries, near misses, medical-treatment and first-aid cases, their result cards and every formula caption), Org chart (empty state and per-node colours), Flowchart maker (JSON import/export). Plus the file strip shared by all six Lean boards.
- **fix** — A stray space in Chinese cron descriptions.
- **imp** — **`verify:i18n` now looks inside a tool.** It had only ever checked names and subtitles, which is how 1,214 missing strings per language accumulated across seven releases while it reported everything was fine. It now names every tool untranslated or partly translated inside, lists empty values, and flags the 13 tools whose text is hardcoded and so cannot be translated at all.
- **imp** — The template new tools are copied from now ships with translation wiring — its absence is exactly how those 13 tools came to be.

Still to come: the ten Electrical calculators, Lifting plan, Bowtie and LOPA, then the video/audio set, the Excel editor and the SIMOPS planner.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: a74f7b0
