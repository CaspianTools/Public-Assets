---
product: Caspian Store
title: "script-caspian-store 1.9 — Next.js App Router installs finally work"
date: 2026-04-21
type: release
social: false
draft: false
---

Fresh installs into Next.js App Router now render out of the box. Two build-time bugs that had been quietly broken since tsup 8.5 upgraded the filename convention are fixed.

- **`'use client'` preserved in the bundle** — the library now *is* the Server Component boundary, so importing `LayoutShell` / `AdminShell` / providers from a Server Component layout no longer triggers `createContext` errors.
- **`exports` map resolves for both `import` and `require`** — the map was pointing at `.cjs`/`.js` targets that tsup 8.5 no longer emits; now points at the actually-emitted `.mjs`/`.js`.
- **GitHub shop-window refreshed** — README status, INSTALL version pins, roadmap, and the long-standing *"v0.1.1 will preserve directives"* promise all cleaned up.
- **CLAUDE.md** added for AI-assisted development sessions.

Upgrade:

\`\`\`
npm install github:Caspian-Explorer/script-caspian-store#v1.9.0
\`\`\`

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.9.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
