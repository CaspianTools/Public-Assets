---
product: SendHaste
title: "SendHaste 1.45.0 — no more lost mail to unknown addresses"
date: 2026-10-06
type: release
social: false
draft: false
---

Every domain in SendHaste now gets a catchall@ mailbox by itself as soon as it's active. Mail sent to an address on your domain that has no mailbox, for example a typo or an old address, arrives there instead of being returned to the sender. Domains that are already active get it the next time their page in Settings → Domains is opened. You can send that mail to another mailbox, or return it to the sender, under Emails on the domain's page. The step-by-step guide is at https://sendhaste.com/en/help/connect-domain.
