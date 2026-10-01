---
product: Caspian Office
title: "v1.107.1 — Offline charts fix"
date: 2026-07-01
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.107.1.png)

**Shipped v1.107.1** · 2026-07-01

Offline charts fix — the chart tools now render correctly in the downloaded offline packs and single-file build.

- 🐛 **Fixed** — **Statistics**, **Chart Maker**, **Budget Planner** and **Zakat** no longer try to re-fetch the chart engine that's already bundled into the offline downloads (which failed when the file was opened straight from disk). They now reuse the bundled engine offline and still lazy-load it on the hosted site.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 9a0db69
