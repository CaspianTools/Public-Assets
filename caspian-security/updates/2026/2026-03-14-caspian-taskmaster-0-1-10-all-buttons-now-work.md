---
product: Caspian Security
title: "Caspian Taskmaster 0.1.10 — All buttons now work"
date: 2026-03-14
type: release
social: false
draft: false
---

Caspian Taskmaster 0.1.10 is out with a critical bug fix — every interactive button and link in the extension was silently broken.

- Fixed: "Create one on GitHub →" link, "Connect & Open Tracker", "+ New issue", "Create first issue"
- Fixed: Search, filters, sort headers, and row action buttons all wired up properly
- Fixed: New-issue modal now closes automatically after saving

Root cause: the webview Content Security Policy (`script-src nonce`) blocks inline HTML event handlers in Electron — all interactions are now registered via `addEventListener` in the nonce script block.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-taskmaster
