---
product: Caspian Security
title: "Caspian Security 10.0 — now scans Dockerfiles, Terraform, and Kubernetes"
date: 2026-04-21
type: release
social: false
draft: false
---

Caspian graduates from "code scanner" to "code + infrastructure scanner". The major-version bump reflects a new scanning domain — everything from 9.x is preserved; this release adds a parallel surface as thorough as the existing code rules.

- 🐳 **Dockerfile rules** — :latest base images, missing non-root USER, secrets baked into ENV/ARG/RUN, ADD from URL, curl|sh, unpinned apt/apk.
- ☁️ **Terraform / HCL rules** — 0.0.0.0/0 ingress, public S3 ACLs, wildcard IAM, publicly_accessible RDS, missing encryption, AdminAccess attached to tasks, KMS kms:* to root.
- ☸️ **Kubernetes manifest rules** — privileged:true, hostNetwork/PID/IPC, runAsUser:0, hostPath volumes, SYS_ADMIN capabilities, wildcard RBAC, LoadBalancer without sourceRanges.
- 🧪 **Vulnerable-corpus regression suite** — small synthetic fixtures assert that every rule family keeps firing; caught two real regressions during development before they shipped.
- 📈 **295+ rules, 961 tests** — up from 270+ / 880.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
