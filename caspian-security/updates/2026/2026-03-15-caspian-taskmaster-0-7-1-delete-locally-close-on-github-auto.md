---
product: Caspian Security
title: "Caspian Taskmaster 0.7.1 — Delete locally, close on GitHub automatically"
date: 2026-03-15
type: release
social: false
draft: false
---

Caspian Taskmaster 0.7.1 fixes a long-standing sync gap: deleted issues now stay deleted.

- Deleting an issue locally closes the corresponding GitHub issue on the next sync
- A `deleted-locally` label prevents re-import, so your cleanup actually sticks
- No more zombie issues reappearing after every sync cycle

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
