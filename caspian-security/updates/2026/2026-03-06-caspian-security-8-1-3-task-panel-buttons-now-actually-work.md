---
product: Caspian Security
title: "Caspian Security 8.1.3 — Task panel buttons now actually work"
date: 2026-03-06
type: release
social: false
draft: false
---

Quick but important fix — all buttons in the Task Detail panel are now fully functional.

- Run Check, Mark Complete, Snooze, Change Interval, and Dismiss all respond to clicks
- Root cause: Content Security Policy was silently blocking inline event handlers
- Replaced with CSP-compliant addEventListener wiring

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
