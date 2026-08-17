# MCP Doctor by Coefficient

Public site for [coefficient.work](https://coefficient.work).

MCP Doctor is an early-stage open-source CLI that inspects MCP servers and writes a local readiness report.

## Identity

- Product: **MCP Doctor by Coefficient**
- GitHub/npm namespace: **coefficient-work** (the GitHub org is not created yet, so links may 404)
- Contact: hello@coefficient.work
- Waitlist, telemetry ingestion, and checkout are **off** until the legal operator is verified

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
bash scripts/check-brand-leaks.sh
npx tsc --noEmit
npm run build
```

## Deploy

Production deploy stays gated. This branch is the rebrand implementation; connecting Vercel to a transferred GitHub repo is a separate browser step.
