---
product: Caspian Store
title: "script-caspian-store 1.12 — Next 15 + create-next-app delegation"
date: 2026-04-22
type: release
social: false
draft: false
---

Closes the install-review punch list. Two scaffolder improvements:

- **\`--next-version <spec>\`** — default pin bumped from \`^14.2.0\` to \`^15.0.0\`; override with \`--next-version '^14.2.0'\` if you need the older stack.
- **\`--use-create-next-app\`** (opt-in) — delegates Next's boilerplate (\`tsconfig.json\`, \`next.config.ts\`, \`next-env.d.ts\`, \`.gitignore\`) to \`npx create-next-app@latest\`, then overlays our pages / adapters / providers / Firebase config. Tsconfig stays drift-free from Next upstream. Inherits Next 15's React 19 pins too.

\`\`\`
npm create caspian-store@latest my-shop --use-create-next-app
\`\`\`

Or without the opt-in for offline / locked networks:

\`\`\`
npm create caspian-store@latest my-shop
\`\`\`

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.12.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
