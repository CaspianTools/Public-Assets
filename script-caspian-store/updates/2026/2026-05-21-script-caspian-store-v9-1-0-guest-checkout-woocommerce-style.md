---
product: Caspian Store
title: "script-caspian-store v9.1.0 — Guest checkout (WooCommerce-style)"
date: 2026-05-21
type: release
social: false
draft: false
---

Shoppers can now complete checkout without creating an account. The flow is modeled on WooCommerce: the form is the landing view, with sign-in and "create an account" offered inline as optional affordances.

## Highlights

- **Inline guest checkout** — no more sign-in interstitial. Anonymous Firebase auth starts silently; the form renders immediately.
- **Inline sign-in panel** at the top of the checkout (email/password + Google).
- **"Create an account for faster checkout"** checkbox — no password collected, password setup link emailed post-purchase.
- **Account linking trigger** — when a buyer registers later with the same email, prior guest orders auto-attach to the new account.
- **`<GuestOrderLookupPage />`** at `/order-status` — order # + email lookup, no login required.

## Upgrade

```bash
npm install github:CaspianTools/script-caspian-store#v9.1.0
firebase deploy --only functions:caspian-admin,functions:caspian-stripe
```

Default flip: `accounts.allowGuestCheckout` now defaults to `true` for new stores. Existing stores keep their setting.

Repo: https://github.com/CaspianTools/script-caspian-store
