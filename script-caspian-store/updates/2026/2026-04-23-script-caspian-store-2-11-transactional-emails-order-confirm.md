---
product: Caspian Store
title: "script-caspian-store 2.11 — Transactional emails (order confirmations, admin alerts, welcome)"
date: 2026-04-23
type: release
social: false
draft: false
---

**v2.11.0 is out** — first half of Release C.

The library now ships a full transactional email surface. Admin UI at `/admin/emails`, eight pre-wired templates, reference Cloud Functions that fire on every `orders/{id}` status transition, and a pluggable sender that uses SendGrid out of the box.

- 📨 **Eight templates** — New order (admin), Cancelled, Failed/pending (admin), Processing, Completed, Refunded, Customer note, New account.
- 🎨 **Global sender config** — from-name, from-address, logo, accent color, footer text, and a master enabled switch.
- 👀 **Live preview + Send test** — every template edit shows the rendered subject/heading/body with sample placeholders; the Send test button invokes the `sendTestEmail` callable Cloud Function with your own inbox as the recipient.
- 🔌 **Pluggable sender** — SendGrid ships by default. Swap to Resend, SES, Postmark, whatever, by replacing `sendViaSendGrid` in `functions-admin/src/email-sender.ts`. The interface is provider-agnostic.
- 📎 **Inline-styled HTML** — intentionally minimal. Max Gmail / Outlook / Apple Mail compatibility. Customize via the settings fields, not HTML.

Upgrade:

```bash
firebase functions:secrets:set SENDGRID_API_KEY
npm install github:Caspian-Explorer/script-caspian-store#v2.11.0
cd firebase/functions-admin && npm install && npm run build && firebase deploy --only functions:caspian-admin
firebase deploy --only firestore:rules
```

Then flip the master `enabled` switch in `/admin/emails`. Stores that leave it off see zero change — the triggers are deployed but exit early. https://github.com/Caspian-Explorer/script-caspian-store
