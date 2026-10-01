---
product: Caspian Store
title: "script-caspian-store 1.15 — Account page cards fixed, admin nav link"
date: 2026-04-22
type: release
social: false
draft: false
---

Three account-page issues reported on a fresh install; all fixed.

- **First-sign-in profile creation now succeeds.** The \`users/{uid}\` Firestore rule was denying the client's first write (role='customer' compared against a null existing role). Split into \`allow create\` and \`allow update\`. Missing Profile / Photo / Addresses cards now render correctly.
- **Admin nav link in \`<SiteHeader>\`** — small button in the right cluster, visible only when \`userProfile.role === 'admin'\`. No info leak for non-admins; admins get a one-click path to \`/admin\`.
- **\`<AccountPage>\` polished** — \`maxWidth: 960\` container, avatar-based header on a gradient card, tighter section order.

**⚠ Upgrade note:** re-deploy the Firestore rules after upgrading:

\`\`\`
npm install github:Caspian-Explorer/script-caspian-store#v1.15.0
firebase deploy --only firestore:rules
\`\`\`

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.15.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
