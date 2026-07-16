import Link from "next/link";
import InstallPill from "@/components/InstallPill";
import TerminalCard from "@/components/TerminalCard";
import WaitlistForm from "@/components/WaitlistForm";
import StethoscopeIcon from "@/components/icons/StethoscopeIcon";
import {
  BENCHMARK_ROWS,
  COMPARISON_ROWS,
  DOCS_URL,
  FAQ,
  GITHUB_REPO,
  INSTALL_CMD,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="section-gap px-6 pt-8 text-center">
        <div className="mx-auto max-w-[720px] space-y-6">
          <h1 className="font-display text-[28px] font-medium leading-tight text-black sm:text-[36px]">
            The easiest way to score MCP agent readiness
          </h1>
          <InstallPill command={INSTALL_CMD} className="mx-auto" />
          <p className="text-sm text-[#737373]">
            paste this in terminal, or{" "}
            <a href={DOCS_URL} className="underline hover:text-black">
              read the docs
            </a>
          </p>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-[#090909]"
          >
            Get started
          </a>
          <div className="flex justify-center pt-2 text-[#737373]">
            <StethoscopeIcon className="h-10 w-10" />
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-[#e5e5e5] px-6">
        <div className="mx-auto grid max-w-[720px] gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold">
              Score any MCP before agents hit production
            </h2>
            <ul className="list-inside list-disc space-y-2 text-[#737373]">
              <li>
                Static scorecard - tokens, descriptions, destructive ops (no API
                key)
              </li>
              <li>
                Task eval - real agents complete realistic tasks (BYOK via AI
                Gateway)
              </li>
              <li>
                Agent friction - retries, wrong tools, auth recovery scored 0-10
              </li>
            </ul>
            <Link href="/benchmark" className="text-sm font-medium underline">
              See benchmark results
            </Link>
          </div>
          <TerminalCard
            lines={[
              { text: "$ npx github:louisreid/mcp-doctor inspect puppeteer -o report.md" },
              { text: "" },
              { text: "Grade: B | Tools: 12 | Tokens: 2,840", tone: "warn" },
              { text: "" },
              { text: "Recommended Improvements", tone: "muted" },
              { text: "  navigate: description too short" },
              { text: "  screenshot: missing input schema hints" },
            ]}
          />
        </div>
      </section>

      <section className="section-gap px-6" id="early-access">
        <div className="mx-auto max-w-[720px] space-y-8">
          <h2 className="text-center font-display text-2xl font-semibold">
            Start local. Scale with eval.
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#e5e5e5] p-6">
              <h3 className="font-display text-lg font-semibold">Free (local)</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#737373]">
                <li>inspect and benchmark - no API key</li>
                <li>list reads your Cursor mcp.json</li>
                <li>Markdown reports you own</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] p-6">
              <h3 className="font-display text-lg font-semibold">Eval + CI</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#737373]">
                <li>eval via Vercel AI Gateway</li>
                <li>GitHub Action scorecard (coming)</li>
                <li>Private benchmark + design partner access</li>
              </ul>
              <div className="mt-6">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-[#e5e5e5] px-6">
        <div className="mx-auto max-w-[720px] space-y-4">
          <h2 className="font-display text-2xl font-semibold">Your MCP stays yours</h2>
          <ul className="list-inside list-disc space-y-2 text-[#737373]">
            <li>Reports are local markdown - nothing uploaded for inspect</li>
            <li>eval uses your own AI Gateway key - we do not store prompts</li>
            <li>Open source CLI - MIT license, audit the code</li>
          </ul>
        </div>
      </section>

      <section className="section-gap px-6">
        <div className="mx-auto max-w-[720px] space-y-6">
          <h2 className="font-display text-2xl font-semibold">
            State of MCP Quality 2026
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#e5e5e5]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#e5e5e5] text-[#737373]">
                  <th className="px-4 py-3 font-medium">Server</th>
                  <th className="px-4 py-3 font-medium">Grade</th>
                  <th className="px-4 py-3 font-medium">Tools</th>
                  <th className="px-4 py-3 font-medium">Tokens</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARK_ROWS.map((row) => (
                  <tr key={row.server} className="border-b border-[#e5e5e5] last:border-0">
                    <td className="px-4 py-3">{row.server}</td>
                    <td className="px-4 py-3 font-mono">{row.grade}</td>
                    <td className="px-4 py-3">{row.tools}</td>
                    <td className="px-4 py-3">{row.tokens.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/benchmark" className="text-sm font-medium underline">
            Read full benchmark
          </Link>
        </div>
      </section>

      <section className="section-gap border-t border-[#e5e5e5] px-6">
        <div className="mx-auto max-w-[720px] space-y-6">
          <h2 className="font-display text-2xl font-semibold">Where MCP Doctor fits</h2>
          <div className="overflow-x-auto rounded-xl border border-[#e5e5e5]">
            <table className="w-full text-left text-sm">
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.need} className="border-b border-[#e5e5e5] last:border-0">
                    <td className="px-4 py-3 text-[#737373]">{row.need}</td>
                    <td
                      className={`px-4 py-3 ${"highlight" in row && row.highlight ? "font-semibold text-black" : ""}`}
                    >
                      {row.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-gap px-6">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-6 font-display text-2xl font-semibold">FAQ</h2>
          <dl className="divide-y divide-[#e5e5e5]">
            {FAQ.map((item) => (
              <div key={item.q} className="py-4">
                <dt className="font-medium text-black">{item.q}</dt>
                <dd className="mt-2 text-[#737373]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-gap border-t border-[#e5e5e5] px-6 pb-20 text-center">
        <div className="mx-auto max-w-[720px] space-y-6">
          <h2 className="font-display text-2xl font-semibold">
            Get started with MCP Doctor
          </h2>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-[#090909]"
          >
            Get started
          </a>
          <InstallPill command={INSTALL_CMD} className="mx-auto" />
        </div>
      </section>
    </main>
  );
}
