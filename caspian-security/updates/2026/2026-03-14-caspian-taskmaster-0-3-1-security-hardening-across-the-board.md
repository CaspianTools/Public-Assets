---
product: Caspian Security
title: "Caspian Taskmaster 0.3.1 — Security hardening across the board"
date: 2026-03-14
type: release
social: false
draft: false
---

Caspian Taskmaster 0.3.1 locks things down with a focused security pass.

- Cryptographically secure CSP nonces replace Math.random() in all webview providers
- Markdown links now validate protocols and block tab-nabbing
- MCP server gets localhost-only CORS, security headers, and request size limits
- Dropped 79 unused Express packages from the dependency tree
- Credential files (.pem, .key, serviceAccountKey) now gitignored by default

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
