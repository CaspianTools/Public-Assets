---
product: Caspian Security
title: "Caspian Security 10.7.2 — the caspian CLI now installs cleanly from npm"
date: 2026-07-15
type: release
social: false
draft: false
---

Caspian Security 10.7.2 fixes npm packaging so the standalone `caspian` CLI ships correctly.

- 🔧 Fixed npm 11 silently stripping the CLI `bin` entries at publish time
- ⚡ `npm install -g caspian-security` now installs all five commands: `caspian`, `caspian-scan`, `caspian-git-history-scan`, `caspian-check-updates`, `caspian-mcp`
- 🛡️ Same 295+ rules, intra-file taint tracking, and MCP server — now one `npm i -g` away

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
