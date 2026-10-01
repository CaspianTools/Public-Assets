---
product: Caspian Store
title: "script-caspian-store v2.5.2 — Blank optional fields now safe across every admin save"
date: 2026-04-23
type: release
social: false
draft: false
---

Follow-up sweep on top of v2.5.1. v2.5.1 fixed the `Unsupported field value: undefined` Firestore crash on Products and Promo codes. v2.5.2 applies the same hardening to **every other admin save flow** with optional fields, so leaving a field blank can no longer crash the save anywhere in the panel.

Now protected:

- 🗂️ Categories, Collections, Languages, Journal, FAQs
- ⚙️ Site settings (favicon, currency, timezone, tax mode + label + rate, supported countries)
- 🚚 Shipping plugin installs (eligible countries) and 💳 Payment plugin installs
- ✅ Admin todos

🛡️ Pure runtime hardening — no schema or API changes.
✅ No consumer action required — upgrade and you're done.

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.5.2
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
