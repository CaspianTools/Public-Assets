---
product: Caspian Store
title: "script-caspian-store v6.0.0 — React 19 + Firebase 12 stack"
date: 2026-04-24
type: release
social: false
draft: false
---

v6.0.0 ships a coordinated major-version dep upgrade: **React 19**, **Firebase 12**, **tailwind-merge 3**. The library compiles cleanly with no source changes, and `peerDependencies` widen to keep React 18 / Firebase 10 / 11 consumers working — only upgrade your own app when you want the new stack.

**Highlights**

- ⚛️ React 19 + matching `@types/react` 19
- 🔥 Firebase 12 (peer range now `^10 || ^11 || ^12`)
- 🎨 tailwind-merge 3
- 🔒 `.gitignore` hardened against accidental commits of `service-account.json` / `serviceAccountKey*.json` / `credentials.json`

**Upgrade**

```bash
npm install react@^19 react-dom@^19 firebase@^12
npm install github:Caspian-Explorer/script-caspian-store#v6.0.0
```

Newly scaffolded sites (`npm create caspian-store@latest`) get the new versions automatically.

**Repo:** https://github.com/Caspian-Explorer/script-caspian-store
**Release:** https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v6.0.0
