---
product: Caspian Security
title: "Caspian Taskmaster 1.7.0 — See what sync is doing; first unit tests land"
date: 2026-04-21
type: release
social: false
draft: false
---

Two robustness wins, zero new user-facing features — just a tracker you can trust more.

🔍 Sync diagnostic log: every phase of every sync (push, delete, pull, project items) now writes to the Caspian Taskmaster output channel with counts, errors, and context. New command "Show Sync Log" opens it directly.

🧪 First-ever tests: 16 unit tests cover the most regression-prone helpers in the GitHub Projects integration — scope-error detection, GraphQL field-value extraction, data-type mapping. `npm test` runs clean.

If you hit a weird sync error, you now have a way to diagnose it.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
