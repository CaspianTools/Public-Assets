---
product: Caspian Store
title: "script-caspian-store v8.7.0 — Install wizard with prereqs + super-admin designation"
date: 2026-04-28
type: release
social: false
draft: false
---

The `/setup` wizard is now a real installation guide rather than a configuration form. Two new leading steps:

- **Pre-flight checklist** — every prerequisite an installer needs to gather (Firebase project + web config, service account JSON, Node/Java/firebase-cli, contact email, brand assets, Stripe keys). Required items gate the Begin button.
- **Super-admin designation** — tabbed: sign in (email+password / Google → `claimAdmin` + token refresh), or designate by email (writes `pendingSuperAdmin/{email}`; the `onUserCreate` trigger promotes only that exact address). The legacy first-user-wins race window is closed.

7 new Firestore rules tests cover the `pendingSuperAdmin` collection. Full suite 54/54 green.

**Consumer action on upgrade:** redeploy Firestore rules + the `caspian-admin` Functions codebase. Sign-in tab works without redeploy; email-designation tab needs the new rules.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.7.0
npm run firebase:sync
firebase deploy --only firestore:rules,functions:caspian-admin
```

Full notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.7.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
