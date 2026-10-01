---
product: Caspian Office
title: "v1.156.0 — Org chart: per-card colours and a simpler menu"
date: 2026-07-19
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.156.0.png)

**Shipped v1.156.0** · 2026-07-19

The Org chart maker's card menu gets per-card colours, a simpler menu, and a guard so the canvas can never be emptied into a dead end. Still 100% client-side, offline, no accounts and no AI.

- **New — per-card colours.** Each person's menu now has **Accent** and **Border** colour pickers, so you can highlight an individual person, team or role. A **Reset** puts a card back to the chart's colours. (The chart-wide accent and box-fill still restyle every card.)
- **Improved — simpler menu.** Removed **Add a peer** from the card menu and the floating **+ Person** button from the canvas. Build co-heads by adding a report and choosing **Make top-level**, or import JSON.
- **Fix — no empty dead-end.** The chart now always keeps at least one person, and an empty chart (after **Clear**) shows a click-to-add prompt — so you're never stuck with nothing to build from.

🔗 Live: https://caspianoffice.io/tool/orgchart/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 2683c5f
