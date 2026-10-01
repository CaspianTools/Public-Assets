---
product: Caspian Office
title: "v1.119.1 — Lifting plan: readable rows + failure recommendations"
date: 2026-07-10
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.119.1.png)

**Shipped v1.119.1** · 2026-07-10

Two improvements to the **Lifting plan** tool from user feedback — the rigging-accessory rows are now easy to read, and every failed check comes with a plain-language reason and a fix.

- ✏️ **Improved — readable accessory rows.** Each rigging accessory now puts its **description on its own full-width line** instead of a cramped column, so what you type is no longer clipped; the description is legible in the checks table too.
- 🆕 **New — Recommendations panel.** Every failed or marginal check is now explained in plain language — the exact tension versus the Working Load Limit and factor of safety, a crane over its rated capacity, or a sling angle below 30° — each with what to change: raise the WLL, add legs, steepen the angle, reduce the load, or use a higher-capacity crane. A clean rig shows a single green "all pass" note.

🔗 Live: https://caspianoffice.io/tool/lifting-plan/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 9ad578c
