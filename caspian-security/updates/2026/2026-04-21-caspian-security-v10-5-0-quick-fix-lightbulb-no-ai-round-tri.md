---
product: Caspian Security
title: "Caspian Security v10.5.0 — quick-fix lightbulb (no AI round-trip)"
date: 2026-04-21
type: release
social: false
draft: false
---

Ctrl+. over a Caspian finding now shows a deterministic one-click fix for 13 common remediations. No AI, no consent dialog, no provider spend — just the mechanical answer where there is exactly one.

- ☸️ Kubernetes: privileged:true → false, hostNetwork:true line removed, runAsUser:0 → 1000, allowPrivilegeEscalation:true → false
- ☁️ Terraform: publicly_accessible = true → false, S3 acl = "public-read" → "private"
- 🔐 JWT: jwt.verify(token, key) gets third arg `{ algorithms: ["RS256"] }`, ignoreExpiration:true removed
- 🐍 Python: yaml.unsafe_load → safe_load, yaml.load(x) → yaml.safe_load(x)
- 🔒 TLS/CORS: rejectUnauthorized:false → true, origin:"*" → origin:false
- 🐋 Docker: HEALTHCHECK NONE commented out (recoverable)

Conservative by design: each fix returns null if the matched line is even slightly off-shape. False auto-fix is worse than no auto-fix. For ambiguous cases, the existing AI-fix command is untouched.

21 unit tests, pure-function fix registry (testable without vscode), fully reversible via undo.

Rules unchanged at 295+. Tests 989 → 1010.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
https://www.npmjs.com/package/caspian-security
