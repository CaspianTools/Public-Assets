---
product: Caspian Store
title: "script-caspian-store v8.9.2 — App Hosting deploys really do just work now"
date: 2026-04-29
type: release
social: false
draft: false
---

Shipping **v8.9.2** of `@caspian-explorer/script-caspian-store`. This release closes a regression in v8.9.0 where the App Hosting fix required a two-line consumer-side edit that consumers weren't applying.

### What changed

- 🔁 **Auto-heal now happens inside the library.** `initCaspianFirebase` merges any passed `config` with `readFirebaseConfigFromEnv()`, so an incomplete `caspianFirebaseConfig` literal (the v8.8.x scaffold output reading `process.env.NEXT_PUBLIC_FIREBASE_*!` that resolves to `undefined` on App Hosting) gets filled from `FIREBASE_WEBAPP_CONFIG` automatically.
- 📝 **Resolved config is forwarded to the client browser via an SSR-injected `<script>` tag.** No more requiring consumers to edit `next.config.mjs` to forward `FIREBASE_WEBAPP_CONFIG`. The browser runs the script at parse time, before React hydration, so the client and server see the same Firebase config. (Firebase web API keys are public by design — same exposure as the standard `NEXT_PUBLIC_FIREBASE_API_KEY` pattern.)
- 🛡 **The v8.9.0 pre-check stays in place** but now fires only when *all* sources come up empty.

### Upgrade

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.9.2
firebase deploy --only apphosting
```

No `caspian-adapters.tsx` edit, no `next.config.mjs` change. App Hosting backends created via the Firebase Console deploy with zero env-var setup. Vercel and local-dev consumers are unaffected.

Full release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.9.2
Repo: https://github.com/Caspian-Explorer/script-caspian-store
