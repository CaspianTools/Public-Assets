---
product: Caspian Security
title: "Caspian Security v9.5.0 — now understands dataflow, not just regex"
date: 2026-04-21
type: release
social: false
draft: false
---

The single biggest detection jump since v8.0. Caspian stops being a pure pattern matcher — it now follows user input forward through a function and tells you when it reaches a sink.

- 🔬 **Intra-file taint tracking** — 8 new TAINT00x rules track `req.body` / `$_GET` / `process.argv` to command-injection, eval, fs path, SQL, open-redirect, XSS, SSRF, and prototype-pollution sinks. Sanitiser-aware (validator, DOMPurify, Zod, Joi). Bounded to 100ms / file.
- 🎯 **Multi-line context fixed** — scanner walker now handles template literals, block comments, and JS regex literals (inc. char classes) across lines. Our self-scan CI is back on strict `--fail-on error`.
- 🔐 **Four new rule families** — OAuth hygiene (state / PKCE / open redirect), LDAP injection, command injection expansion (Node / Python / PHP / Ruby / Java), prototype pollution expansion (`Object.assign` / lodash merge / spread).
- 📈 **270+ rules, 880 tests** — up from 240+ / 812.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
