---
product: Caspian Office
title: "v1.179.0 — Twenty-seven tools that opened in English now read in your language"
date: 2026-08-14
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.179.0.png)

**Shipped v1.179.0** · 2026-08-14

Until now a tool could carry a translated **name** in the menu while every button, label and message *inside* it stayed English. This release closes most of that gap.

**Thirteen more tool interiors, translated throughout.** The whole video and audio set — trim video, trim audio, compress, convert to MP4, convert audio, merge audio, resize, mute, extract audio, screen recorder and voice recorder — plus the **Excel editor** and the **SIMOPS planner**. That is 200 new `data-i18n` attributes across those modules and **19,097 new strings** across the twelve catalogs.

**A help article for every tool, in every language.** The "About this tool" guide below each tool — what it is, how to use it, the questions people actually ask — now exists in all eleven translated languages for **179 of 179** tools, up from 152. That is **296 new articles**.

**Where coverage stands now**

| Surface | Coverage |
|---|---|
| Tool names & subtitles | 179/179 in all 11 languages |
| Tool interiors | 97% — the remaining 232 keys are the SIMOPS planner in Portuguese and Russian |
| Help articles | 179/179, except Portuguese at 178 |

**A note on how this one was checked.** The translation content came from the parallel automated process that has been running alongside these releases. Before landing it, everything structural was verified: all 2,160 JSON files under `web/content` parse and are not truncated, all 19 changed modules compile, and every static `data-i18n` key referenced by a tool resolves in `en.json`. Four empty-string values that the checker flags in Japanese and Chinese were investigated rather than waved through — they turn out to be deliberate, because those slots are filled by a name formatter whose output already carries the counter ("1月", "月曜日"), and the code trims the collapsed slot so no stray space is left.

What was *not* checked is the linguistic quality of the translations themselves — they were verified for structure, key coverage, encoding and build correctness, not read line by line for meaning. Corrections remain cheap: one line in `web/content/i18n/<lang>.json` plus a rebuild.

This also cleared the single `verify:slides` failure seen at v1.179.0's predecessor. That was a stale generated catalog deliberately held back while the font change was isolated, not a defect — regenerating it put the suite back to 25/25.

`verify:i18n` 0 errors · `verify:tools` 179 tools, 0/0 · `verify:logic` 129 passed · `verify:diagrams` 6/6 · `verify:slides` 25/25 · `verify:packs` all 13.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: a190dd97
