---
product: Caspian Store
title: "script-caspian-store v9.10.2 — Product editor dropdowns no longer blank on fresh projects"
date: 2026-06-13
type: release
social: false
draft: false
---

v9.10.2 fixes a bug where the admin product editor's **Category** and **Brand** dropdowns could load empty — a selected category even showed a raw document id.

- 🐛 Root cause: the editor loaded reference data atomically, and the active-brands query needed a `productBrands` composite index a fresh project wouldn't have
- 🔧 `listActiveBrands` is now index-free (equality query + client-side sort) — works on any project, no index deploy
- 🧱 The editor now loads each source independently, so one failing query can't blank the rest

No upgrade action needed — no schema, rules, or index change.

Upgrade: `npm install github:CaspianTools/script-caspian-store#v9.10.2`

https://github.com/CaspianTools/script-caspian-store
