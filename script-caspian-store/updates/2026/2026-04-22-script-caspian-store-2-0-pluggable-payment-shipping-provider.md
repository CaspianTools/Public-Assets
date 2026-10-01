---
product: Caspian Store
title: "script-caspian-store 2.0 — Pluggable payment + shipping providers"
date: 2026-04-22
type: release
social: false
draft: false
---

Today we're shipping **v2.0.0** — the biggest architectural release since v1.0. Payment and shipping providers are now **installable plugins** the store owner configures from the admin panel, instead of hard-coded fields in Firestore.

### What's new
- 💳 **Payment plugins** — new `/admin/payment-plugins` page with a built-in Stripe plugin. Install, paste your `pk_...` key, enable — no env-var edits, no redeploy.
- 🚚 **Shipping plugins** — new `/admin/shipping-plugins` page with four built-ins: flat rate, free shipping, free over threshold, and weight-based. Checkout now renders a rate picker.
- 🎨 **Admin Appearance page** — theme tokens moved to a dedicated `/admin/appearance` surface, separate from site settings.

### Breaking
This is a major because `ScriptSettings.stripePublicKey` is gone — the publishable key now lives inside the Stripe plugin install. The CHANGELOG spells out the exact upgrade steps.

### Upgrade
```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.0.0
firebase deploy --only firestore:rules
# Then, in the admin panel:
# 1. /admin/payment-plugins → Install Stripe, paste pk_... key, Enable.
# 2. /admin/shipping-plugins → Install the rate strategies you want (or re-run the seed).
```

Full notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.0.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
