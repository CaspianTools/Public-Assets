---
product: Caspian Store
title: "script-caspian-store 2.13 — Public contact page + admin Users inbox"
date: 2026-04-23
type: release
social: false
draft: false
---

v2.13.0 is out. Your store now ships with a built-in `/contact` page.

Visitors can send a message without an account; submissions land in a new **Admin > Users > Contacts** inbox, light up the notifications bell, and appear in a Recent contacts card on the dashboard. A Cloud Function mails you every new submission and sends a polite auto-reply to the sender — both use the v2.11 SendGrid pipeline and ship with sensible default templates you can customise in **Admin > Emails**.

- `<ContactPage />` at `/contact` — name + email + optional subject + message, with a honeypot for basic spam.
- `<AdminUsersPage />` at `/admin/users` — tabbed inbox with mark-read / archive / delete + detail dialog.
- Dashboard `Recent contacts` card + bell badge for `status: new` submissions.
- `runEmailOnContactCreate` Cloud Function — admin-notify with reply-to = submitter, plus auto-reply to the sender.
- New Firestore rule clamps length/shape; 7 new rules-behavior tests.

Upgrade:

```bash
npm i @caspian-explorer/script-caspian-store@2.13.0
cp node_modules/@caspian-explorer/script-caspian-store/firebase/firestore.rules .
cp node_modules/@caspian-explorer/script-caspian-store/firebase/firestore.indexes.json .
firebase deploy --only firestore:rules,firestore:indexes,functions:caspian-admin
```

Then mount `<ContactPage />` at `/contact` and `<AdminUsersPage />` at `/admin/users`.

Full release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.13.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
