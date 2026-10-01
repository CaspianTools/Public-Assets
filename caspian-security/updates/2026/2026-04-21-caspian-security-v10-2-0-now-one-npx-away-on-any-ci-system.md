---
product: Caspian Security
title: "Caspian Security v10.2.0 — now one `npx` away on any CI system"
date: 2026-04-21
type: release
social: false
draft: false
---

Same rule engine, three distribution channels: VS Code Marketplace, Open VSX, and now npm. Install with `npm i -g caspian-security` and `caspian-scan` / `caspian-git-history-scan` / `caspian-check-updates` are on your PATH. Run it anywhere — GitLab CI, CircleCI, Jenkins, Drone, BuildKite, or your local shell.

- 📦 `npx caspian-security caspian-scan . --format sarif --fail-on error` — zero-install scanning
- 🌐 Same SARIF, same baseline format, same 295+ rules as the VS Code extension and the GitHub Action
- 📉 VSIX also shrank 30% as a side effect (was shipping redundant TS source)

Next up on the roadmap: auto-fix code actions (VS Code lightbulb for mechanical rule fixes) and an MCP server for Claude / Cursor / any MCP client.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
https://www.npmjs.com/package/caspian-security
