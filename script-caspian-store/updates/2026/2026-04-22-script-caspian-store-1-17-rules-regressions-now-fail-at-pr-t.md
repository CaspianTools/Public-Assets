---
product: Caspian Store
title: "script-caspian-store 1.17 — Rules regressions now fail at PR time"
date: 2026-04-22
type: release
social: false
draft: false
---

The last two shipped bugs (v1.13.0 storage grammar, v1.15.0 users first-create silently denied) both escaped because nobody ran \`firebase deploy\` before release. v1.17 closes that gap with two safety nets that run automatically on every rules change:

- **Rules compilation in CI.** New [.github/workflows/rules.yml](https://github.com/Caspian-Explorer/script-caspian-store/blob/main/.github/workflows/rules.yml) boots the Firebase emulator on every PR that touches \`firebase/*.rules\` — which parses the rules on startup and fails the job on grammar errors. Catches the v1.13.0 class of bug.
- **Behavior tests.** 20 assertions via \`@firebase/rules-unit-testing@5\` + Node 22's built-in \`node --test\`, covering users / products / orders / reviews / adminTodos. Regression-verified locally: reverting the v1.15.0 fix makes the relevant assertion fail; re-applying turns it green. Catches the v1.15.0 class of bug.

\`npm test\` runs the same suite locally (needs \`firebase-tools\` on PATH + Java 17+).

No consumer upgrade action needed — the workflow runs server-side.

Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v1.17.0
