---
product: Caspian Notes
title: "Caspian Notes 1.4.8: that blocked publish was a false positive, and what we fixed anyway"
date: 2026-07-28
type: release
social: false
draft: false
---

**Caspian Notes 1.4.8 is out.** Two things: our Open VSX publish got blocked by a secret scanner, and digging into it surfaced a documentation gap worth fixing properly.

- 🔍 **The flagged "secret" was a false positive — nothing leaked, nothing rotated.** The scanner matched our bundled Firebase *Web* API key on shape alone. That value is a public project identifier, not a credential: it authorizes nothing on its own, and the identical string is already served to every visitor of caspiantools.com. Access is decided by Firebase Auth and the Firestore security rules, never by holding that string.
- ✅ **Fixed the sanctioned way** — the `secret-detector:ignore` marker Open VSX documents for exactly this case, with a comment on the line explaining why it's legitimate and warning against reusing it on anything that genuinely is secret.
- 🛡️ **New threat-model section on cloud sync.** Our threat model hadn't been revised since 1.3.4, so it still described a purely local extension — no Firebase trust boundary, no refresh token in the asset list, and "no sync" listed as a residual risk. All three stopped being true in 1.4.0. Section G now covers the public key, refresh-token theft, forged pairing callbacks, and sync-loop prevention.
- 🔐 **Real credentials never touch source.** Your refresh token and uid live in `vscode.SecretStorage`, backed by the OS keychain.

A blocked publish is a good excuse to write down what your trust boundaries actually are.

Get it on the VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-notes
