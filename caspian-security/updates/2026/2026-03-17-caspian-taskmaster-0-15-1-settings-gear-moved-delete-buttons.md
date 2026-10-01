---
product: Caspian Security
title: "Caspian Taskmaster 0.15.1 — Settings gear moved, delete buttons fixed"
date: 2026-03-17
type: release
social: false
draft: false
---

Caspian Taskmaster v0.15.1 is out with two quality-of-life improvements:

- ⚙️ **Settings gear button** now sits at the end of the toolbar (after TODOs) for quick access to Manage Sprints, Milestones & Platforms
- 🗑️ **Delete buttons actually work now** — platform, sprint, milestone, and saved view delete icons were silently broken because VS Code webviews don't support `window.confirm()`; they now use native VS Code warning dialogs

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
