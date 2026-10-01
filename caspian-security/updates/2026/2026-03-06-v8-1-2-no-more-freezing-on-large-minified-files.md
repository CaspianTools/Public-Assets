---
product: Caspian Security
title: "v8.1.2 — No more freezing on large minified files"
date: 2026-03-06
type: release
social: false
draft: false
---

Caspian Security 8.1.2 fixes a performance issue that could freeze VS Code when scanning large minified files like pdf.worker.min.mjs.

- Minified file detection now covers all `.min.*` extensions (not just .js/.css)
- New `maxFileSize` setting (500KB default) skips oversized files automatically
- Per-file timeout (10s) and line length guards prevent any single file from blocking the editor
- Event loop yielding improved to keep VS Code responsive during workspace scans

If you ever saw "extension causes high CPU load" — this one is for you.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
