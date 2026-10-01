---
product: Caspian Security
title: "v1.1.6 — Activity Bar now opens full tracker every time"
date: 2026-03-20
type: release
social: false
draft: false
---

Caspian Taskmaster v1.1.6 fixes a sneaky startup bug.

- 🐛 Clicking the Activity Bar icon now reliably opens the full tracker tab, even when VS Code restores the Caspian sidebar as the active panel at startup
- Previously the redirect silently did nothing in that scenario — now it fires immediately at the 3-second startup mark

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-taskmaster
