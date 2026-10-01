---
product: Caspian Security
title: "Caspian Security v10.4.0 — now an MCP server (Claude Desktop, Cursor, Zed, Cline)"
date: 2026-04-21
type: release
social: false
draft: false
---

"Use Caspian to scan this repo" is now a one-line prompt. Caspian ships a Model Context Protocol server exposing four tools over stdio: `scan`, `scan_git_history`, `list_rules`, `explain_rule`.

Wire it into Claude Desktop / Cursor / any MCP client with:
```json
{
  "mcpServers": {
    "caspian-security": {
      "command": "npx",
      "args": ["-y", "caspian-security", "caspian-mcp"]
    }
  }
}
```

- 🤖 **stdio-only** — no network port, no auth tokens, no telemetry
- 📦 **Shared scan engine** — new `src/scanRunner.ts` dedups the core logic between CLI and MCP
- 🧪 **12 new unit tests** plus an end-to-end smoke (real `initialize` + `tools/list` over stdio)
- 🔐 Each tool validates its `path` arg and respects the same per-file deadlines as every other scan path

Rules unchanged at 295+. Tests 977 → 989.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
https://www.npmjs.com/package/caspian-security
