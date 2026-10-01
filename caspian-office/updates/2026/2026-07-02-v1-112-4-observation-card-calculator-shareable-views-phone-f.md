---
product: Caspian Office
title: "v1.112.4 — Observation Card Calculator: shareable views + phone-friendly fit"
date: 2026-07-02
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.112.4.png)

**Shipped v1.112.4** · 2026-07-02

Two focused upgrades to the **Observation Card Calculator**: its Forecast / Status-check view is now a shareable link, and the whole tool fits cleanly on a phone.

- **New — link straight to a view.** Switch to **Status check** and the URL becomes `?view=status`, so you can bookmark or share a link that opens on exactly that tab. Forecast stays a clean URL, and a shared link opens the right tab even on a cold page load.
- **Fixed — fits on a phone.** The tool no longer runs off the side of small screens: the safety-pyramid model buttons stack one per row and the layout stays inside the viewport on narrow devices (verified with zero horizontal overflow at 320 / 360 / 390 px).

Under the hood, the deep-link plumbing is generic — every tool's landing page now forwards its query string into the app, so more shareable tool links can follow.

🔗 Live: https://caspianoffice.io/tool/observation-card/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: efa4b0a
