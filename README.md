# MCP Doctor

Public site for [coefficient.work](https://coefficient.work).

MCP Doctor is an early-stage open-source CLI that inspects MCP servers and writes a local readiness report.

## Identity

- Product: **MCP Doctor**
- GitHub/npm namespace: **coefficient-work**
- Contact: hello@coefficient.work
- Operator (legal): Roundtable Design Ltd — details on Privacy and Terms
- Waitlist, telemetry ingestion, and checkout are **off**

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

Production is the `main` branch of this repo on the Vercel project `coefficient-landing`. Keep waitlist, Stripe, and telemetry ingestion off.
