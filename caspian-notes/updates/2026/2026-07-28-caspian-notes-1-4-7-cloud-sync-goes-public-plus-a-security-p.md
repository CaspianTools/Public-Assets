---
product: Caspian Notes
title: "Caspian Notes 1.4.7: cloud sync goes public, plus a security patch"
date: 2026-07-28
type: release
social: false
draft: false
---

**Caspian Notes 1.4.7 is out — and it's the first public release of the entire cloud-sync line.** 1.4.0 through 1.4.6 were built but never tagged, so everything below ships today.

- ☁️ **Two-way cloud sync with Caspian Tools.** Pair once from the command palette, then your notes sync both ways every 15 seconds across every machine you code on.
- ✓ **Per-note sync markers in the sidebar.** Synced, pending, conflict, or local-only — visible at a glance without opening anything.
- 🤝 **Shared-workspace fix.** Notes you create in VS Code are now visible to your whole team, not just to you.
- 🔒 **Security patch.** Closed a high-severity DoS in the YAML parser behind every note read (`js-yaml` via `gray-matter`), pinned to the patched release.

Your notes, in your editor, everywhere you work.

Get it on the VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-notes
