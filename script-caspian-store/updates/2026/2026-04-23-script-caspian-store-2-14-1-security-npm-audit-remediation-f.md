---
product: Caspian Store
title: "script-caspian-store 2.14.1 — Security: npm audit remediation for Cloud Functions"
date: 2026-04-23
type: release
social: false
draft: false
---

**v2.14.1 closes two `npm audit` findings** in the Cloud Functions packages without touching the `firebase-admin ^13.0.0` pin. Security-only; no feature changes.

- [x] `@tootallnate/once <3.0.1` cleared (GHSA-vpq2-c234-7xj6)
- [x] `uuid <14.0.0` cleared (GHSA-w5hq-g745-h8pq)
- **Do not run `npm audit fix --force`** on this tree — it downgrades `firebase-admin` to 10.1.0 and re-introduces 5 critical/high CVEs. Recovery instructions in the release notes.

Upgrade:

```bash
npm install @caspian-explorer/script-caspian-store@latest
```

Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.14.1
Repo: https://github.com/Caspian-Explorer/script-caspian-store
