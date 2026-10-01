---
product: Caspian Security
title: "v0.2.2 — Every button in Caspian Taskmaster now actually works"
date: 2026-03-14
type: release
social: false
draft: false
---

Caspian Taskmaster v0.2.2 fixes a critical bug where **all webview buttons were silently broken**.

- ✅ "+New Issue", filters, sort headers, bulk actions, and modal controls all work now
- 🛡️ Root cause: Content Security Policy blocked 55+ inline event handlers — replaced with CSP-compliant `addEventListener` calls
- 🎨 Matches the secure pattern already used in other webviews

If buttons weren’t responding for you, this is the fix.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
