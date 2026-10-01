---
product: Caspian Store
title: "script-caspian-store 1.11.1 — npm create caspian-store@latest is live"
date: 2026-04-22
type: release
social: false
draft: false
---

Scaffolding a fresh Caspian Store is now one command.

\`\`\`
npm create caspian-store@latest my-shop
cd my-shop && npm install && npm run dev
\`\`\`

- **New package: [\`create-caspian-store\`](https://www.npmjs.com/package/create-caspian-store) v0.1.0** on the public npm registry. Thin launcher that shallow-clones the main repo into a temp dir, runs the scaffolder, cleans up.
- All scaffolder flags forwarded: \`--package-tag vX.Y.Z\`, \`--with-functions\` (Stripe Cloud Functions tree), \`--force\` (non-empty target dir).
- Main package v1.11.1 refreshes README and INSTALL §0 to lead with the new command; the manual git-URL install is still supported as the "Manual install" path for locked-network environments.

Main-package consumers don't need to upgrade — v1.11.0 and v1.11.1 are functionally identical. The release is about getting the one-command scaffold live.

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.11.1
Repo: https://github.com/Caspian-Explorer/script-caspian-store
