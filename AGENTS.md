# Agent guide

Repository: coefficient-landing

## Todo lists (TARS)

Use the **tars-todos** skill: `.cursor/skills/tars-todos/SKILL.md`

| Resource | Path |
|----------|------|
| Todo format (canonical) | [`TODO-FORMAT.md`](/Users/louisreid/Documents/å-reid-finance/docs/tars/TODO-FORMAT.md) |
| TARS hub / Mac mini bridge | [`cross-repo-agent-bridge.md`](/Users/louisreid/Documents/å-reid-finance/docs/tars/cross-repo-agent-bridge.md) |

**Louis's rules:** Cursor Canvas primary · urgency lanes (🔴 urgent · 🟡 soon · 🟢 later) · thread markdown secondary · progress in `canvases/*.canvas.data.json` (git).

**Prompt:** `Use tars-todos skill. Project: … Deadline: …`

## TARS remote API (Gmail / Sheets)

Gmail, Sheets, Docs via Mac mini `:3049` — **no local OAuth**. Skill: `.cursor/skills/tars-remote-api/SKILL.md`

**Cursor secrets (set once):** `REID_REMOTE_TOKEN`, `MAC_MINI_HOST`, `TAILSCALE_AUTH_KEY` (cloud agents)

**Hub:** [å-reid-finance README](/Users/louisreid/Documents/å-reid-finance/README.md#using-tars-from-other-cursor-repos)

**Prompt:** `Use tars-remote-api skill. Search Gmail from:jamie@good.space`
