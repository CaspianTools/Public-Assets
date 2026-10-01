---
product: Caspian Store
title: "script-caspian-store 1.11 — Admin onboarding without uid-hunting"
date: 2026-04-21
type: release
social: false
draft: false
---

First-install admin grant finally doesn't require a trip to the Firebase console.

- **Auto-promote the first user.** A new \`onUserCreate\` Firestore trigger promotes whoever creates the first \`users/{uid}\` doc, then permanently stops. Deploy the functions, register your own account before announcing your store, done.
- **\`grant-admin\` CLI by email.** \`npm run grant-admin -- --email you@example.com\` resolves the uid via firebase-admin/auth and sets role='admin' on the user doc. Works any time.
- **\`grant-admin\` CLI by uid.** If the auto-promote window has closed and you'd rather use the uid copy-button on the AdminGuard access-denied screen: \`npm run grant-admin -- --uid <uid>\`.

Race caveat: the \`onUserCreate\` trigger can be won by a rogue sign-up between deployment and your own registration. Mitigate by deploying it right before signing up, or leave it out and use the CLI exclusively.

Upgrade:

\`\`\`
npm install github:Caspian-Explorer/script-caspian-store#v1.11.0
\`\`\`

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.11.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
