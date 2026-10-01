---
product: Caspian Office
title: "v1.111.0 — repo-wide quality pass: 19 bug fixes, mobile polish, offline hardening"
date: 2026-07-01
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.111.0.png)

**Shipped v1.111.0** · 2026-07-01

A repo-wide quality pass. A new full-registry Playwright scan drove a browser render + mobile check across all 148 tools, alongside a multi-agent code review with adversarial verification. The app was clean at render time (no crashes, no console errors) — this release fixes what deeper testing surfaced.

- **fix** — 19 verified tool bugs: correct **Google Calendar** timezones, **tip** "round up" now rounds to cents (not whole units), **password** strength reflects real entropy, the **regex** replace preview honours your flags, **PDF-metadata** "wipe" truly clears the dates, plus colour-picker, timesheet, video-to-GIF, pomodoro, ER-diagram and more.
- **imp** — **mobile polish**: ten tools that overflowed on phones (base convert, business card, gantt, timesheet, zakat, directional survey, ICE scoring, text-to-speech, user flow, countdown) now fit narrow screens — wide tables and charts scroll neatly instead of stretching the page.
- **imp** — sturdier & tidier: **Sankey** diagrams now autosave, the **Excel → PDF** export matches the on-screen preview, and a round of visual polish.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 2710c28
