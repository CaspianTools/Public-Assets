---
product: Caspian Store
title: "script-caspian-store v9.9.0 — Products now support SKU"
date: 2026-06-12
type: release
social: false
draft: false
---

v9.9.0 adds an optional **SKU** to products — set it right in the admin product editor.

- 🏷️ New optional `sku` field on every product (free text, not enforced unique)
- ✏️ SKU input in the admin product editor, persisted automatically on save
- ✅ No upgrade action: purely additive — no Firestore rules/index change, no migration

Upgrade: `npm install github:CaspianTools/script-caspian-store#v9.9.0`

https://github.com/CaspianTools/script-caspian-store
