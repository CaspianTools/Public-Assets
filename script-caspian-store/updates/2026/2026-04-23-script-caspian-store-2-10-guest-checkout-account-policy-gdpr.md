---
product: Caspian Store
title: "script-caspian-store 2.10 — Guest checkout, account policy, GDPR retention"
date: 2026-04-23
type: release
social: false
draft: false
---

**v2.10.0 closes Release B.**

Three merchant-facing additions:

- 👤 **Accounts policy** — four toggles at `/admin/settings`: guest checkout, create-account at checkout, register on My Account, and the new 'send password setup link' sign-up flow (random password + reset email, skipping the pick-a-password step).
- 🏃 **Real guest checkout** — when `allowGuestCheckout` is on, a "Continue as guest" button appears on the checkout sign-in gate and uses Firebase anonymous auth so Firestore rules still pass. Requires the Anonymous provider enabled in your Firebase project.
- 🗑 **GDPR retention** — four retention-in-days fields drive a new scheduled Cloud Function `runRetentionCleanup` that runs daily at 03:15 UTC. Deletes inactive accounts (Auth + user doc), cancelled / failed / completed orders older than their respective windows. Blank fields mean "keep forever" — off by default.

`FeatureFlags.guestCheckout` on `ScriptSettings` is now deprecated; `SiteSettings.accounts.allowGuestCheckout` takes precedence.

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.10.0
cd firebase/functions-admin && npm install && npm run build && firebase deploy --only functions:caspian-admin
```

The second line is only required if you're turning on retention or guest checkout. https://github.com/Caspian-Explorer/script-caspian-store
