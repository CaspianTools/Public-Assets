---
product: Caspian Store
title: "script-caspian-store v8.9.0 — Firebase App Hosting deploys now just work"
date: 2026-04-29
type: release
social: false
draft: false
---

Shipping **v8.9.0** of `@caspian-explorer/script-caspian-store` — App Hosting consumers, this one is for you.

### What changed

- 🚀 **App Hosting deploys with zero env-var setup.** New `readFirebaseConfigFromEnv()` helper auto-picks up `FIREBASE_WEBAPP_CONFIG` (the JSON blob Firebase App Hosting injects into every backend created via the Console), with the six `NEXT_PUBLIC_FIREBASE_*` vars as fallback. New scaffolds wire it up out of the box.
- 🔧 **Actionable errors instead of `auth/invalid-api-key`.** `initCaspianFirebase` now pre-checks the required config fields and throws a message that names the missing field(s) and the detected platform (App Hosting / Vercel / unknown).
- 📦 **No-op for Vercel and local dev.** Existing `NEXT_PUBLIC_FIREBASE_*` setups continue working unchanged.

This fixes a class of `next build` crashes during the `/_not-found` static prerender — the static page was wrapped by the root layout's `<CaspianStoreProvider>`, which tried to call `getAuth()` with an undefined `apiKey` because App Hosting's auto-injected JSON wasn't being read.

### Existing App Hosting consumers — two-line upgrade

```ts
// src/lib/caspian-adapters.tsx
import { readFirebaseConfigFromEnv } from '@caspian-explorer/script-caspian-store/firebase';
export const caspianFirebaseConfig = readFirebaseConfigFromEnv();
```

```js
// next.config.mjs — add inside nextConfig
env: {
  FIREBASE_WEBAPP_CONFIG: process.env.FIREBASE_WEBAPP_CONFIG,
},
```

### Install

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.9.0
```

Full release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.9.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
