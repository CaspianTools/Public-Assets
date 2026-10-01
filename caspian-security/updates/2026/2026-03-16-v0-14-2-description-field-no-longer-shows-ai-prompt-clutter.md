---
product: Caspian Security
title: "v0.14.2 — Description field no longer shows AI prompt clutter"
date: 2026-03-16
type: release
social: false
draft: false
---

Caspian Taskmaster v0.14.2 is out with a key bug fix.

- 🛠️ The description field in the issue editor now shows **only your description** — no more AI prompt metadata leaking in
- MCP write tools (`create_issue`, `update_issue`) automatically sanitize descriptions that contain the formatted prompt pattern
- Existing issues with corrupted descriptions are cleaned up on edit

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
