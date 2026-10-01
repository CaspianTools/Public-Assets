---
product: Caspian Store
title: "script-caspian-store 2.6 — Real country picker + per-country tax + per-method shipping eligibility"
date: 2026-04-23
type: release
social: false
draft: false
---

The v2.5 MVP textarea is gone. Admins now:

- 🌍 **Manage supported countries** via a proper check-many-at-once picker dialog over 90 curated ISO 3166 countries — with search, Select-visible, Clear-all, and Confirm-with-count.
- 💰 **Edit per-country tax rates** inline in a table when tax mode is `per-country` — no more comma-gymnastics.
- 🚢 **Scope shipping methods to countries** — each shipping-plugin install grows an **Eligible countries** picker, so "Standard" can be US-only while "International" covers everywhere else.

No schema change. Same `SiteSettings.supportedCountries` and `ShippingPluginInstall.eligibleCountries` fields from v2.5 — just real editors now. Existing data survives the upgrade untouched.

**Also fixed:** the admin About page **Update** button no longer crashes with `Unable to detect a Project Id in the current environment` on Vercel / generic Node hosts / local `next dev`. The scaffolded `/api/caspian-store/update` route now uses an explicit `projectId` from `NEXT_PUBLIC_FIREBASE_PROJECT_ID`.

**Upgrade:**

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.6.0
```

### ⚠️ Heads up if you scaffolded against v2.4.0 – v2.5.x and use the Update button

The scaffolder only runs at project creation, so library upgrades **don't** regenerate route files. To pick up the projectId fix, open `src/app/api/caspian-store/update/route.ts` in your site repo and replace the `ensureAdminApp` function:

```ts
function ensureAdminApp() {
  if (getApps().length > 0) return;
  const projectId =
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.GCLOUD_PROJECT ||
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  try {
    initializeApp({ credential: applicationDefault(), projectId });
  } catch {
    initializeApp({ projectId });
  }
}
```

Restart the dev server (or redeploy) and the Update button works. No env-var changes — `NEXT_PUBLIC_FIREBASE_PROJECT_ID` is already in your `.env.local` from the original scaffold.

Full notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.6.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
