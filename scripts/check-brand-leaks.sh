#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

TARGETS=(app components lib data public README.md DEPLOY.md)
EXISTING=()
for t in "${TARGETS[@]}"; do
  if [[ -e "$t" ]]; then
    EXISTING+=("$t")
  fi
done

PATTERN='github\.com/louisreid|github:louisreid|roundtable\.co\.uk|Coefficient AI Inc\.|npx github:louisreid/mcp-doctor|npx github:coefficient-ai/mcp-doctor|github:coefficient-ai/mcp-doctor|@coefficient-ai/mcp-doctor'

if grep -R -n -E -I "$PATTERN" "${EXISTING[@]}" \
  --exclude-dir=node_modules \
  --exclude-dir=.next \
  --exclude-dir=.git; then
  echo "Brand leak check failed." >&2
  exit 1
fi

# "by Coefficient" is allowed only as the quiet footer credit (plus the constant that feeds it).
BYLINE_HITS="$(grep -R -n -E -I 'by Coefficient' "${EXISTING[@]}" \
  --exclude-dir=node_modules \
  --exclude-dir=.next \
  --exclude-dir=.git || true)"
if [[ -n "$BYLINE_HITS" ]]; then
  FILTERED="$(printf '%s\n' "$BYLINE_HITS" | grep -v -E 'components/Footer\.tsx|lib/constants\.ts' || true)"
  if [[ -n "$FILTERED" ]]; then
    printf '%s\n' "$FILTERED" >&2
    echo "by Coefficient is only allowed in the footer credit." >&2
    exit 1
  fi
fi

echo "Brand leak check passed."
