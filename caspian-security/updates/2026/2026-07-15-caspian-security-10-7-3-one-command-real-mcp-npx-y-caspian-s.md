---
product: Caspian Security
title: "Caspian Security 10.7.3 — one command, real MCP: npx -y caspian-security mcp"
date: 2026-07-15
type: release
social: false
draft: false
---

Caspian Security 10.7.3 makes the one-command AI-agent integration actually work.

- ⚡ `npx -y caspian-security mcp` now starts the MCP server directly — no `-p` flag, no workarounds
- 🔧 Every zero-install command works out of the box: `npx -y caspian-security scan .`, `... git-history`, `... check-updates`
- 🤝 One-line Claude Code setup: `claude mcp add caspian-security -- npx -y caspian-security mcp`
- ♻️ Commands copied from older docs still work (built-in back-compat shim)

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
