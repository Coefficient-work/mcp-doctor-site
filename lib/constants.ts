export const GITHUB_REPO = "https://github.com/louisreid/mcp-doctor";
export const DOCS_URL = "https://github.com/louisreid/mcp-doctor#readme";
export const FRIEND_GUIDE_URL =
  "https://github.com/louisreid/mcp-doctor/blob/main/docs/FRIEND-GUIDE.md";
export const BENCHMARK_REPO_URL =
  "https://github.com/louisreid/mcp-doctor/blob/main/examples/reports/STATE-OF-MCP-2026.md";
export const CONTACT_EMAIL = "hello@coefficient.work";
export const ROUNDTABLE_URL = "https://roundtable.co.uk";

export const INSTALL_CMD =
  "npx github:louisreid/mcp-doctor inspect memory -o report.md";

export const BENCHMARK_ROWS = [
  { server: "MCP Filesystem", grade: "A", tools: 14, tokens: 1997 },
  { server: "MCP Sequential Thinking", grade: "A", tools: 1, tokens: 996 },
  { server: "MCP Everything", grade: "A", tools: 13, tokens: 1236 },
  { server: "MCP Memory", grade: "A", tools: 9, tokens: 1040 },
  { server: "MCP Puppeteer", grade: "B", tools: 7, tokens: 612 },
] as const;

export const FAQ = [
  {
    q: "How is this different from MCPJam?",
    a: "MCPJam is a debug playground. MCP Doctor is a packaged scorecard plus public benchmark - built for platform teams certifying before ship.",
  },
  {
    q: "Do I need an API key?",
    a: "No for inspect and benchmark. Eval uses your own Vercel AI Gateway or OpenAI key - we do not store prompts.",
  },
  {
    q: "Does it work with Stainless or Speakeasy output?",
    a: "Yes - MCP Doctor scores any MCP server, regardless of how it was generated.",
  },
  {
    q: "Is it open source?",
    a: "Yes. The CLI is MIT-licensed on GitHub. Hosted CI is coming later.",
  },
  {
    q: "Pricing?",
    a: "CLI is free during early access. CI and private audit pricing is TBD.",
  },
] as const;

export const COMPARISON_ROWS = [
  { need: "Generate MCP from OpenAPI", use: "Stainless, Speakeasy" },
  { need: "Debug OAuth in a playground", use: "MCPJam Inspector" },
  { need: "pytest eval harness", use: "mcp-eval" },
  { need: "Score + certify before ship", use: "MCP Doctor", highlight: true },
] as const;
