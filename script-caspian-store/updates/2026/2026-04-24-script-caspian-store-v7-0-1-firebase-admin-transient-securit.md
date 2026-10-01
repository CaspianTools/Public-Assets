---
product: Caspian Store
title: "script-caspian-store v7.0.1 — firebase-admin transient security patches"
date: 2026-04-24
type: release
social: false
draft: false
---

Patch release. `npm audit` was reporting 5 critical + 3 high vulns under `firebase-admin`'s dep tree (protobufjs prototype pollution + RCE, jsonwebtoken signature bypass, credential-logging in @google-cloud/firestore, and more). v7.0.1 pushes every library-side pin past `firebase-admin@13.8.0` and adds npm `overrides` at scaffold root + every Cloud Functions codebase so vulnerable transients can't sneak back in.

- **Fresh scaffolds** (`npm create caspian-store@latest`) are clean automatically.
- **Existing consumer apps** need a one-time `package.json` bump + lockfile rebuild — full PowerShell steps in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.0.1).

No source changes. No API changes. If your `npm audit` currently passes, you don't need to do anything.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.0.1
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
