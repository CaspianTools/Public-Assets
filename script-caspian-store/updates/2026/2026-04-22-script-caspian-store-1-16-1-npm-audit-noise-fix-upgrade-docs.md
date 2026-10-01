---
product: Caspian Store
title: "script-caspian-store 1.16.1 — npm audit noise fix + upgrade docs"
date: 2026-04-22
type: release
social: false
draft: false
---

Small follow-up release from a field review. No functional changes — scaffolder + docs only.

- **\`firebase-admin\` pin ^12 → ^13 in new scaffolds.** 12.x drags in transitive deps that \`npm audit\` flags as noise. One reviewer hit \`npm audit fix --force\`, which *downgraded* firebase-admin to 10.x and surfaced 5 critical vulns. v13 breaks that chain entirely.
- **Upgrade-path docs.** The scaffolder's generated README now spells out the dev-server stale-cache footgun: stop \`next dev\` → bump dep → redeploy rules if changed → \`rm -rf .next\` → restart. Skipping that sequence is why "every route 500s after upgrade" keeps coming up.
- **INSTALL.md §1 version pin refreshed** from the long-stale \`#v1.9.0\` to \`#v1.16.1\`.

### Upgrade

Existing scaffolded projects (no code changes needed):

\`\`\`
npm install firebase-admin@^13 --save-dev
\`\`\`

Fresh scaffolds get \`^13\` automatically:

\`\`\`
npm create caspian-store@latest my-shop
\`\`\`

### Coming next

v1.17.0 will add GitHub Actions + \`@firebase/rules-unit-testing\` so future rules regressions fail at PR time instead of customer-deploy time.

Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.16.1
