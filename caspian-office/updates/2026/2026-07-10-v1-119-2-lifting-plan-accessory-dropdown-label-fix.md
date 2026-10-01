---
product: Caspian Office
title: "v1.119.2 — Lifting plan: accessory dropdown label fix"
date: 2026-07-10
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.119.2.png)

**Shipped v1.119.2** · 2026-07-10

A quick fix for the **Lifting plan** tool, reported from a direct link.

- 🐛 **Fixed — rigging-accessory labels.** On a fresh direct link to the tool, the accessory **type dropdown** (Sling leg, Shackle, Spreader beam, Master link, Hook, Turnbuckle) and the description placeholder could briefly show internal keys (`tool.lifting-plan.type.…`) instead of their names. The rows are built before the deferred language pack finishes loading; they now **re-localise the moment it arrives** (and on any language switch), so the proper labels always show.

🔗 Live: https://caspianoffice.io/tool/lifting-plan/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: d94b346
