---
product: Caspian Store
title: "script-caspian-store v8.22 — Update button now works on Firebase App Hosting & Vercel"
date: 2026-05-14
type: release
social: false
draft: false
---

The **Update** button on `/admin/about` now works on serverless hosts. Previously it tried to `npm install` inside the running container — which fails on Firebase App Hosting (no `git` on PATH, read-only filesystem) and Vercel (read-only filesystem). v8.22 adds a second path: push a `package.json` bump to GitHub via the REST API and let the host's normal git-trigger redeploy handle the rest.

- 🟢 **GitHub-commit mode** activates when `CASPIAN_GITHUB_TOKEN` + `CASPIAN_CONSUMER_REPO` are set. One fine-grained PAT, scoped to one repo, Contents: read & write.
- 🟢 **Fall-through to npm-install mode** when those vars aren't set — VPS / Docker / local dev keep the v8.21 behaviour unchanged.
- 🟢 **Best-effort lockfile updater** keeps `npm ci` builds reproducible across the bump.
- 🟢 **Stale `Caspian-Explorer` default fixed** to `CaspianTools` throughout the runtime defaults (the npm scope `@caspian-explorer/` is separate and stays).

Upgrade:

```bash
npm install github:CaspianTools/script-caspian-store#v8.22.0
```

Setup walkthrough for serverless hosts: <https://github.com/CaspianTools/script-caspian-store/blob/v8.22.0/INSTALL.md#github-commit-mode-setup-firebase-app-hosting--vercel--serverless>

Repo: <https://github.com/CaspianTools/script-caspian-store>
