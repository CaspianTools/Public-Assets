---
product: Caspian Store
title: "script-caspian-store 15.4 — run the store inside any app, and sell downloads"
date: 2026-11-20
type: release
social: false
draft: true
---

Caspian Store can now live inside an app that already has its own sign-in, database, admin and design, without taking any of them over. It can also sell downloadable products. This release includes the colour picker, order details page, related products and Stripe tax work from 15.2 and 15.3.

- 🧩 **Embedded mode.** The store uses the host's sign-in and keeps its data separate. Store admins are people the host grants access to, and the store follows the host's colours and fonts.
- 📦 **Digital products.** Upload files to a product, sell it through Stripe, and buyers download it from their order page or account through short-lived private links, with an optional download limit.
- 🛣️ **Any address.** The store can sit under a path such as `/store`.
- 💳 **Room for more payment providers.** Stripe is built in, and other providers can now be added.

Existing shops need no changes unless they want to sell downloads; the release notes list the three steps for that.

```bash
npm install github:CaspianTools/script-caspian-store#v15.4.0
```

https://github.com/CaspianTools/script-caspian-store
