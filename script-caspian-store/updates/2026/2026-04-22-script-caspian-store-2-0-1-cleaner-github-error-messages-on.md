---
product: Caspian Store
title: "script-caspian-store 2.0.1 — cleaner GitHub error messages on admin About page"
date: 2026-04-22
type: release
social: false
draft: false
---

Small UX polish in v2.0.1. The admin About page's GitHub-releases widget used to render 'Couldn't reach GitHub: GitHub API 404:' when the fetch failed — a dangling colon with nothing after it, because modern browsers leave `res.statusText` empty on HTTP/2.

- 404 → 'Not found or private'
- 403 → 'Rate-limited or forbidden'
- Network failure (offline / DNS / CORS) → 'Network error'
- `AbortError` propagates unchanged so unmounts don't look like failures

No consumer action required — internal-only bug fix, existing installs continue to work.

Install / upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.0.1
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.0.1
