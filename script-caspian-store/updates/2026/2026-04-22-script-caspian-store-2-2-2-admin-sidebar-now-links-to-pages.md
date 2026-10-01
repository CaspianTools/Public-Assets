---
product: Caspian Store
title: "script-caspian-store 2.2.2 — admin sidebar now links to Pages, FAQs, Journal, and more"
date: 2026-04-22
type: release
social: false
draft: false
---

Small fix for an admin-panel navigation gap. The storefront's empty-page fallback told admins 'Edit it in /admin/pages.' — but the default admin sidebar had no Pages link. Same gap for FAQs, Journal, Promo codes, Subscribers, Collections, and Languages: the pages were fully built and the scaffolder generated routes for them, but `DEFAULT_ADMIN_NAV` didn't link them.

**New sidebar entries:**

- Collections (`/admin/collections`)
- Pages (`/admin/pages`)
- FAQs (`/admin/faqs`)
- Journal (`/admin/journal`)
- Promo codes (`/admin/promo-codes`)
- Subscribers (`/admin/subscribers`)
- Languages (`/admin/languages`)

Order groups content next to products/reviews and marketing before shipping/payments.

No consumer action required — existing installs using the default nav pick up the links automatically. Consumers who pass a custom `navItems` prop are unaffected.

Install / upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.2.2
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.2.2
