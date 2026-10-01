---
product: Caspian Store
title: "script-caspian-store 1.10 — Scaffolder polish + one-click admin grant"
date: 2026-04-21
type: release
social: false
draft: false
---

Two first-run papercuts are gone in v1.10.

- **Scaffolder ships real rule files** — `firestore.rules`, `firestore.indexes.json`, and `storage.rules` are now copied from the package at scaffold time. `firebase deploy --only firestore:rules` just works. No more "copy me from node_modules" stubs that locked databases down if deployed unread.
- **`--with-functions` opt-in** — the `functions` block in `firebase.json` no longer points at a non-existent directory by default. Pass `--with-functions` to scaffold the Stripe Cloud Functions tree alongside.
- **AdminGuard shows your UID** — sign up, open `/admin`, hit the Copy UID button. Paste into `npm run firebase:seed -- --admin <uid>` and you're admin. No more Firebase-console hunting.
- **Harmless-files detection** — scaffolding into a fresh `gh repo create` directory (with `.git`, `README.md`, `.gitignore`, `LICENSE`) no longer needs `--force`.

Upgrade:

\`\`\`
npm install github:Caspian-Explorer/script-caspian-store#v1.10.0
\`\`\`

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.10.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
