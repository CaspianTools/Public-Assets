---
product: Caspian Store
title: "script-caspian-store v2.5.1 — Save buttons work again on Products and Promo codes"
date: 2026-04-23
type: release
social: false
draft: false
---

Quick patch on top of v2.5.0. If you tried to **create or edit a Product** with the weight field blank, or to **create a Promo code** without filling Min order amount and Max discount, the save button threw `Function addDoc() called with invalid data. Unsupported field value: undefined`. v2.5.1 fixes both.

- 🐛 Fixed: blank optional fields on Products (`weightKg`, `shortDescription`, `details`) no longer crash save.
- 🐛 Fixed: blank optional fields on Promo codes (`minOrderAmount`, `maxDiscount`) no longer crash save.
- 🛡️ Defense-in-depth: a new internal `stripUndefined` helper now scrubs `undefined` keys before every Firestore write in these two services, so the bug can't sneak back in via new fields.
- ✅ No consumer action required — upgrade and the save flows start working.

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.5.1
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
