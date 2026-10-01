---
product: Caspian Store
title: "script-caspian-store v9.8.0 — Dedicated category editor with image upload"
date: 2026-06-12
type: release
social: false
draft: false
---

Categories now get a full-page editor at `/admin/categories/{id}/edit` instead of a cramped in-list modal — the same first-class editing products already had.

- 🖼️ Featured-image **upload** to Firebase Storage (URL fallback included)
- 🎚️ Active/Featured are now toggle switches (new `Switch` primitive)
- 🔗 Click a category name — or **+ New category** — to jump straight to the editor
- ♻️ Parent picker excludes a category's own descendants, so you can't create a cycle

⚠️ On upgrade, redeploy Storage rules so category image uploads are allowed:
`firebase deploy --only storage`

Install / upgrade:
`npm install github:CaspianTools/script-caspian-store#v9.8.0`

https://github.com/CaspianTools/script-caspian-store
