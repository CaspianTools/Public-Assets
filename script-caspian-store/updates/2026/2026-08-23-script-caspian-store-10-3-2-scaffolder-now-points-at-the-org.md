---
product: Caspian Store
title: "script-caspian-store 10.3.2 — scaffolder now points at the org that exists"
date: 2026-08-23
type: release
social: false
draft: false
---

Housekeeping ahead of the offline work.

🔗 The scaffolder installed the library from `github:Caspian-Explorer/...` while the repo lives at `CaspianTools/...`. GitHub's rename redirect has been quietly covering for it — nothing was broken, but a redirect stops the day someone else claims the old org name. **24 URLs repointed.**

📌 **Install examples were three majors stale.** README and INSTALL told people to install `#v8.0.0`, and INSTALL asserted "v8.0.0 is the current release", while the package was on 10.3.1.

🛡️ `check-manuals.mjs` now checks that too — same rot as the manual's footer version stamp, which sat at v10.0.0 through two releases because nothing checked it. Historical migration notes are left alone.

`Caspian-Explorer` is untouched wherever it's the author or copyright holder. That's a name, not a typo.

https://github.com/CaspianTools/script-caspian-store
