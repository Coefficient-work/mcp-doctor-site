import type { Metadata } from "next";
import Link from "next/link";
import {
  BENCHMARK_REPO_URL,
  BENCHMARK_ROWS,
  GITHUB_REPO,
} from "@/lib/constants";
import InstallPill from "@/components/InstallPill";

export const metadata: Metadata = {
  title: "State of MCP Quality 2026 - MCP Doctor",
  description:
    "Public benchmark of MCP server agent readiness. Grades, tool counts, and token footprints.",
};

export default function BenchmarkPage() {
  return (
    <main className="section-gap px-6 pb-20">
      <div className="mx-auto max-w-[720px] space-y-8">
        <div className="space-y-2">
          <Link href="/" className="text-sm text-[#737373] hover:underline">
            &larr; MCP Doctor
          </Link>
          <h1 className="font-display text-[28px] font-semibold sm:text-[36px]">
            State of MCP Quality 2026
          </h1>
          <p className="text-[#737373]">
            v0 benchmark - static scorecard + live tool discovery. 10 servers in
            catalog; 5 connected at last run (2026-07-10).
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#e5e5e5]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#e5e5e5] text-[#737373]">
                <th className="px-4 py-3 font-medium">Rank</th>
                <th className="px-4 py-3 font-medium">Server</th>
                <th className="px-4 py-3 font-medium">Grade</th>
                <th className="px-4 py-3 font-medium">Tools</th>
                <th className="px-4 py-3 font-medium">Tokens</th>
              </tr>
            </thead>
            <tbody>
              {BENCHMARK_ROWS.map((row, i) => (
                <tr key={row.server} className="border-b border-[#e5e5e5] last:border-0">
                  <td className="px-4 py-3 text-[#737373]">{i + 1}</td>
                  <td className="px-4 py-3">{row.server}</td>
                  <td className="px-4 py-3 font-mono">{row.grade}</td>
                  <td className="px-4 py-3">{row.tools}</td>
                  <td className="px-4 py-3">{row.tokens.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="space-y-3 text-[#737373]">
          <h2 className="font-display text-lg font-semibold text-black">Awards (v0)</h2>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>Best overall: MCP Filesystem (Grade A)</li>
            <li>Lowest token cost: MCP Puppeteer (612 tokens)</li>
            <li>Most tools: MCP Filesystem (14 tools)</li>
          </ul>
        </section>

        <section className="space-y-3 text-[#737373]">
          <h2 className="font-display text-lg font-semibold text-black">
            Connection failures (v0)
          </h2>
          <p className="text-sm">
            Time, Fetch, Git, SQLite, and Brave Search failed to connect at last
            run - likely environment/network limits in CI, not product bugs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-lg font-semibold">Run it yourself</h2>
          <InstallPill command="npx github:coefficient-ai/mcp-doctor benchmark -o ./reports" />
          <p className="text-sm text-[#737373]">
            Full report on{" "}
            <a
              href={BENCHMARK_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              GitHub
            </a>
            . Score your MCP privately via{" "}
            <a href="/#early-access" className="underline hover:text-black">
              early access
            </a>
            .
          </p>
        </section>

        <div className="pt-4">
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-[#090909]"
          >
            Get started
          </a>
        </div>
      </div>
    </main>
  );
}
