---
product: Caspian Security
title: "Caspian Security v9.3.0 — now runs in your CI, with or without VS Code"
date: 2026-04-21
type: release
social: false
draft: false
---

v9.3.0 turns Caspian from an IDE lint into a full CI guardrail. Same rule engine, two new delivery paths.

- 🧪 **Headless CLI** — `caspian-scan` emits SARIF 2.1 on any CI runner, no VS Code required
- ⚡ **Drop-in GitHub Action** — `uses: Caspian-Explorer/caspian-security/.github/actions/scan@v9.3.0` gets you SARIF in the Security tab with zero boilerplate
- 🔑 **28 new provider-prefix secret rules** — Anthropic, OpenAI, Slack, Stripe, Twilio, Discord, Shopify, Notion, HuggingFace, and 19 more. Every pattern build-time proven ReDoS-safe.
- 🛡️ **SECURITY.md + THREAT_MODEL.md** — coordinated-disclosure policy and a full threat model with file:line citations
- 🌐 **Open VSX publishing** — Cursor, Windsurf, and VSCodium users now reachable via the same VSIX

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
