---
product: Caspian Store
title: "script-caspian-store 1.20.2 — predev kill-port for Windows dev-server hygiene"
date: 2026-04-22
type: release
social: false
draft: false
---

Small Windows-only papercut fixed. Next 16's Turbopack sometimes leaves Node.exe worker PIDs holding port 3000 after an unclean shell exit; the next `npm run dev` then hangs on EADDRINUSE. Scaffolded `package.json` now runs `kill-port 3000` before `next dev`.

**What's new:**
- `predev` script: `npx --yes kill-port 3000 || exit 0`. Cross-platform safe — no-op on macOS/Linux or when the port is free; clears Windows zombies otherwise.

**Upgrade:**
```bash
npm install github:Caspian-Explorer/script-caspian-store#v1.20.2
```
No consumer action required. Existing sites on Windows with the EADDRINUSE symptom can copy the `predev` line into their own `package.json` scripts; fresh scaffolds get it automatically.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.20.2
