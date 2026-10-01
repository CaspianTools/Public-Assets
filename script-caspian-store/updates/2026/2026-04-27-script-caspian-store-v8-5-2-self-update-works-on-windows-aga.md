---
product: Caspian Store
title: "script-caspian-store v8.5.2 — Self-update works on Windows again"
date: 2026-04-27
type: release
social: false
draft: false
---

v8.5.2 fixes a long-latent bug that left every Windows host unable to use the in-app `Update` button on the admin About page. Clicks returned `Unexpected non-JSON response (HTTP 500)` with `Error: spawn EINVAL` in the server log. Linux deploys (Vercel / Cloud Run / Firebase App Hosting) were always fine, which is how this hid for the entire v7.x and v8.x cycle.

**What changed**
- One parameter in `src/server/self-update.ts`: `shell: process.platform === 'win32'` for the `npm.cmd` spawn. Required since Node's CVE-2024-27980 patch (Node ≥ 18.20.2 / 20.12.2 / 21.7.3 / 22) tightened `.cmd` / `.bat` spawning.
- Safe because owner/repo/version are regex-validated upstream — no shell metacharacters can reach the shell.
- POSIX path is bit-for-bit identical to v8.5.1.

**Upgrade — Windows admins (one-time manual install, since the broken endpoint *is* the self-update mechanism):**

```powershell
npm install github:Caspian-Explorer/script-caspian-store#v8.5.2
```

After that, future updates work from the in-app `Update` button as designed.

**Linux/Mac admins:** either path works — your in-app `Update` button has been functional all along.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Full changelog: https://github.com/Caspian-Explorer/script-caspian-store/blob/main/CHANGELOG.md
