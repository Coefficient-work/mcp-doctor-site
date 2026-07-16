# Deploy MCP Doctor landing to coefficient.work

## What was built (2026-07-16)

- Ollama-style homepage at `/` (install pill, terminal card, FAQ, benchmark preview)
- `/benchmark` full leaderboard page
- `/archive` stub (old HVAC product retired)
- Waitlist form at `/#early-access` + `POST /api/waitlist`
- Components: `InstallPill`, `TerminalCard`, `WaitlistForm`, stethoscope icon

## Deploy to Vercel

```bash
cd coefficient-landing
git add -A && git commit -m "MCP Doctor landing (Ollama-style)"
git push origin main
```

Vercel auto-deploys from `main` if the project is linked. Confirm at https://vercel.com/dashboard.

## Environment variables (Vercel project settings)

| Variable | Required | Purpose |
|----------|----------|---------|
| `POSTGRES_URL` | **Yes for waitlist** | Vercel Postgres / Neon connection string |
| `RESEND_API_KEY` | Optional | Email you on each signup |
| `WAITLIST_NOTIFY_EMAIL` | Optional | Defaults to hello@coefficient.work |

### Waitlist database setup

1. Vercel Dashboard -> Storage -> Create Postgres (or connect existing Neon)
2. Run SQL from `scripts/waitlist-schema.sql` in the Query tab
3. Add `POSTGRES_URL` to project env vars (Production + Preview)

Without `POSTGRES_URL`, the form works in local dev (logs to console) but returns 503 in production.

## Verify domain

1. Open https://coefficient.work - should show MCP Doctor, not HVAC
2. If still old site: Vercel -> coefficient-landing -> Settings -> Domains -> confirm `coefficient.work` points here (not the old `coefficient` project)
3. Test install pill copy on mobile
4. Submit waitlist test email

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```
