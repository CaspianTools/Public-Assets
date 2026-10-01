---
product: Caspian Notes
title: "Caspian Notes v1.3.4 — security hardening pass"
date: 2026-04-25
type: release
social: false
draft: false
---

Security-focused release. No user-facing behavior change.

- **Restored the `textContent`-only XSS invariant** in the webview — two static-string `innerHTML` callsites (empty-state heading, pin-button SVG) now build their DOM properly via `createElement` / `createElementNS`. Documented invariant restored.
- **Documented the markdown-preview rendering surface** in `THREAT_MODEL.md` §F. The preview sends `marked.parse(body)` to `innerHTML`, which is safe under the existing CSP (blocks `<script>`, `on*` handlers, `javascript:` URIs, `<iframe>`, remote `<img>`). No runtime sanitizer needed; future contributors warned via inline comment.
- **Bumped `@typescript-eslint` 6 → 8** — closes all 6 high-severity `npm audit` findings.
- **`.gitignore` hardened** with `.env*`, credential files, private keys.

Grab it on the VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-notes

Full notes: https://github.com/Caspian-Explorer/caspian-notes/releases/tag/v1.3.4
