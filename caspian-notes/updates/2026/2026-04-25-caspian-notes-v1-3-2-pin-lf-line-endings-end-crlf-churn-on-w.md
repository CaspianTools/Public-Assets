---
product: Caspian Notes
title: "Caspian Notes v1.3.2 — pin LF line endings, end CRLF churn on Windows"
date: 2026-04-25
type: release
social: false
draft: false
---

Tooling-only release that ends a Windows-only papercut.

- **Pinned all text files to LF** via new `.gitattributes` — Git's `core.autocrlf=true` default no longer rewrites your checkouts to CRLF. Diffs stay clean even when you didn't touch line endings.
- **Binary assets** (`*.png`, `*.jpg`, `*.svg`, `*.woff`, `*.vsix`) explicitly marked binary so Git never normalizes them.
- **No user-facing behavior change.** Re-clone or re-checkout to get clean diffs going forward.

Grab it on the VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-notes

Full notes: https://github.com/Caspian-Explorer/caspian-notes/releases/tag/v1.3.2
