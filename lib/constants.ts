export const SITE_URL = "https://coefficient.work";
export const PRODUCT_NAME = "MCP Doctor";
export const PARENT_BRAND = "Coefficient";
export const PRODUCT_BYLINE = "MCP Doctor by Coefficient";
export const CONTACT_EMAIL = "hello@coefficient.work";

/** Locked public namespace. The GitHub org is not created yet, so these URLs may 404. */
export const GITHUB_ORG = "coefficient-work";
export const GITHUB_REPO = "https://github.com/coefficient-work/mcp-doctor";
export const GITHUB_SITE_REPO = "https://github.com/coefficient-work/mcp-doctor-site";
export const NPM_PACKAGE = "@coefficient-work/mcp-doctor";
export const DOCS_URL = `${GITHUB_REPO}#readme`;
export const LICENSE_URL = `${GITHUB_REPO}/blob/main/LICENSE`;
export const BENCHMARK_REPO_URL = `${GITHUB_REPO}/blob/main/examples/reports/STATE-OF-MCP-2026.md`;

export const INSTALL_CMD =
  "npx @coefficient-work/mcp-doctor@latest inspect memory -o report.md";
export const BENCHMARK_CMD =
  "npx @coefficient-work/mcp-doctor@latest benchmark -o ./reports";

export const OPERATOR_VERIFIED = false;
export const WAITLIST_ENABLED = false;

export const NAMESPACE_NOTE =
  "Public GitHub and npm identity is coefficient-work. That organization is not created yet, so repository and package links may 404 until it exists. Do not install the unrelated unscoped mcp-doctor package.";

export const HERO_HEADLINE =
  "Know whether agents can use your MCP before you ship.";
export const HERO_SUBHEAD =
  "An open-source CLI that inspects schemas, runs task evals, and produces a local readiness report.";

export const FAQ = [
  {
    q: "How is this different from MCPJam?",
    a: "MCPJam is a debug playground. MCP Doctor is a local CLI that inspects schemas, runs optional task evals, and writes a readiness report you keep on disk.",
  },
  {
    q: "Do I need an API key?",
    a: "No for inspect and benchmark. Eval uses your own Vercel AI Gateway or OpenAI key. Prompts and reports stay on your machine.",
  },
  {
    q: "Does it work with Stainless or Speakeasy output?",
    a: "Yes. MCP Doctor inspects any MCP server, regardless of how it was generated.",
  },
  {
    q: "Is it open source?",
    a: "Yes. The CLI is MIT-licensed. Hosted CI is not available yet.",
  },
  {
    q: "Who operates this?",
    a: "MCP Doctor is an early-stage open-source project endorsed as MCP Doctor by Coefficient. The legal operator is not documented yet, so the site does not collect waitlist emails or enable product telemetry.",
  },
  {
    q: "Pricing?",
    a: "The CLI is free. There is no checkout. Paid hosted CI is not offered until that product exists.",
  },
] as const;

export const COMPARISON_ROWS = [
  { need: "Generate MCP from OpenAPI", use: "Stainless, Speakeasy" },
  { need: "Debug OAuth in a playground", use: "MCPJam Inspector" },
  { need: "pytest eval harness", use: "mcp-eval" },
  { need: "Inspect readiness before you ship", use: "MCP Doctor", highlight: true },
] as const;
