---
product: Caspian Store
title: "script-caspian-store v8.9.1 — diagnostic toasts work in PowerShell 5.1"
date: 2026-04-29
type: release
social: false
draft: false
---

Final cleanup on the `#store-1210` chain. Three diagnostic toast strings instructed users to run `X && Y` chained commands, which PowerShell 5.1 (the default Windows PowerShell on Win10/11) doesn't support — Windows admins following the toast hit a parser error and got stuck.

This release rephrases each chained command to "Run `X`, then `Y`" prose, which works identically in cmd, PowerShell 5.1, PowerShell 7+, bash, and zsh.

**No consumer action required.** Pure copy change. Existing v8.9.0 installs see the new text on the next library refresh.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.9.1
```

Full notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.9.1
Repo: https://github.com/Caspian-Explorer/script-caspian-store
