---
product: Caspian Store
title: "script-caspian-store 10.2 — the register gets its own manual"
date: 2026-08-23
type: release
social: false
draft: false
---

The point-of-sale register is a different job, done by a different person, often on a different machine. So it now has its own manual instead of living inside the store one. **Hand it to a cashier and nothing else.**

📘 **Two manuals, one per product** — `docs/user-manual.html` for the shop (7 parts / 57 sections), `docs/pos-manual.html` for the register (7 parts / 38 sections), plus a picker at `docs/index.html`. Self-contained, open straight from disk, no build step.

🧾 **The register manual runs the whole lifecycle** — what to buy, installing it, giving cashiers access, a day at the counter, where the sales end up, and winding a till down when a contract ends.

🌍 **Fully translated into all four languages** — English, Azerbaijani, Russian and Turkish. Not one section falls back.

🔎 **Writing it against the source found four things our own docs got wrong** — `--pos-only` never switched the storefront off, three files routed owners to a "Shops → Edit" screen that has never existed, the manual overstated what dismissing a licence banner does, and translated part blurbs had been silently dead since v10.0.0. All fixed, and those classes of rot are now CI assertions rather than good intentions.

Upgrade — no consumer action needed beyond the install:

```bash
npm install github:CaspianTools/script-caspian-store#v10.2.0
```

https://github.com/CaspianTools/script-caspian-store
