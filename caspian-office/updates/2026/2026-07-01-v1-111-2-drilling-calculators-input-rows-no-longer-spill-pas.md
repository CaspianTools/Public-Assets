---
product: Caspian Office
title: "v1.111.2 — Drilling calculators: input rows no longer spill past their card"
date: 2026-07-01
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.111.2.png)

**Shipped v1.111.2** · 2026-07-01

The eight rig-floor drilling calculators had their multi-column input rows overflowing the card on wider screens — the last fields (e.g. *Inclination 2 / Azimuth 2*) spilled outside the panel. This release keeps every input inside its card.

- **Fixed** — Multi-column input rows in **directional survey**, **kill sheet**, **surge & swab**, **bit hydraulics**, **drillstring**, **hole volume**, **mud weight** and **pump output** now shrink to fit. The `.*-field` grid items were missing `min-width: 0`, so each number input's min-content stopped the `1fr` tracks from shrinking — a classic CSS grid blowout. Directional survey (a 4-column row) overflowed by ~396px; the 3-column rows by ~138px. Verified with a Playwright pass: **0px overflow across all 28 panels** (was 138–396px pre-fix).

🔗 Live: https://caspianoffice.io/tool/directional-survey-calculator/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: f9552c1
