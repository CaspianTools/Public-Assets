---
product: Caspian Store
title: "script-caspian-store v7.4.0 — Self-update API route moves into the library"
date: 2026-04-25
type: release
social: false
draft: false
---

Architectural fix triggered by a real consumer bug. The scaffolded `/api/caspian-store/update/route.ts` was a 150-line hand-rolled handler — every projectId / credential / spawn fix required consumers to re-scaffold or hand-edit. v7.4.0 moves the handler into a new server-only library entry at `@caspian-explorer/script-caspian-store/server`. Consumers' route files become a 7-line shim that calls `caspianHandleSelfUpdate(req)`. Future fixes land via `npm install` — same self-healing contract the v7 single-mount `<CaspianRoot />` already provides for client routing.

One-time migration: replace the body of `src/app/api/caspian-store/update/route.ts` with the shim. The about page now surfaces the snippet inline when it detects the broken-route failure mode.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.4.0
```

Details in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.4.0).
