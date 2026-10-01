---
product: Caspian Store
title: "script-caspian-store 1.18 — Admin triggers deployable without Stripe + retroactive claim-admin + Node 22"
date: 2026-04-22
type: release
social: false
draft: false
---

v1.18 is three coupled fixes from the latest field-install review, all landed together.

**Admin triggers deployable without Stripe.** The \`caspian-store\` Functions codebase was one monolithic bundle — \`firebase deploy\` pre-flighted every function (including Stripe ones) before deploying *any*, so consumers without Stripe secrets couldn't deploy even the \`onUserCreate\` auto-promote trigger. Split into two codebases: \`caspian-admin\` (no secrets, deployable on install day) and \`caspian-stripe\` (opt-in via \`--with-stripe\` in the scaffolder, or \`npm install\`-then-deploy when you're ready).

**Retroactive admin claim.** \`onUserCreate\` only fires on CREATE, not on existing docs. If the installer registered *before* deploying the trigger, the trigger never fires for them. New **\`claimAdmin\` callable** closes the gap: gated by the same "no admin exists yet" invariant, wired to a "Claim admin role" button in the \`<AdminGuard>\` access-denied screen. One click, done.

**Node 22 + firebase-functions 7.** Time-sensitive: Firebase deprecates Node 20 on **2026-04-30** (decommission 2026-10-30). Both Function codebases bumped to \`engines.node: "22"\`, \`firebase-functions@^7\`, \`firebase-admin@^13\`. Our handlers use v2 APIs only, so the v6→v7 bump is source-compatible. Scaffolder \`firebase.json\` generates \`nodejs22\` for both codebases.

v1.18.1 followed immediately with a fix for the scaffolder \`--with-stripe\` branch that was still emitting \`nodejs20\` for the stripe codebase, plus regenerated lock files matching the bumped deps.

### Upgrade

If you're on v1.17 or earlier, the Functions-layout change needs a manual step:

\`\`\`
npm install github:Caspian-Explorer/script-caspian-store#v1.18.1 firebase
rm -rf functions                                  # old unified codebase
cp -R node_modules/@caspian-explorer/script-caspian-store/firebase/functions-admin .
cp -R node_modules/@caspian-explorer/script-caspian-store/firebase/functions-stripe .   # only if you have Stripe
cp node_modules/@caspian-explorer/script-caspian-store/firebase/firebase.json .         # or merge
cd functions-admin && npm install && cd ..
firebase deploy --only functions:caspian-admin
\`\`\`

Already-deployed \`caspian-store\` functions on Firebase won't auto-rename — leave them idle or \`firebase functions:delete <name> --codebase caspian-store\`.

### Releases

- v1.18.0: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.18.0
- v1.18.1: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.18.1
