---
product: SendHaste
title: "SendHaste 2.77.0 — AI assistant, domain health score and safer sign-in"
date: 2026-10-17
type: release
social: true
draft: false
---

An Org Super Admin can now turn on the AI assistant in Settings → Organization, using the organization's own Claude, OpenAI or Gemini key. Emails then get Summarize and Draft a reply buttons. A draft is only ever placed in the reply box for you to read and change; nothing is sent for you. Details: https://sendhaste.com/en/help/ai-assistant
Each domain now has a health score from A to F on its page in Settings → Domains. It shows what to fix, warns when the domain's DMARC policy only watches, and summarizes who sent mail as the domain: https://sendhaste.com/en/help/domain-health
Sign-in is safer. Common passwords and passwords that appeared in a data leak are refused, and an organization can ask for letters and numbers. After repeated wrong passwords or a sign-in from a new network, we email the person and their Org Super Admins. Org Super Admins also get a Sign-in log for every member: https://sendhaste.com/en/help/sign-in-security
