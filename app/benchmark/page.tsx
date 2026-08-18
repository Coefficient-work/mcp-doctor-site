import type { Metadata } from "next";
import Link from "next/link";
import { CURRENT_BENCHMARK } from "@/lib/benchmark";
import { BENCHMARK_CMD, BENCHMARK_REPO_URL } from "@/lib/constants";
import InstallPill from "@/components/InstallPill";

export const metadata: Metadata = {
  title: CURRENT_BENCHMARK.title,
  description: CURRENT_BENCHMARK.methodology,
  alternates: { canonical: "https://coefficient.work/benchmark" },
};

export default function BenchmarkPage() {
  const data = CURRENT_BENCHMARK;

  return (
    <main className="section-gap px-6 pb-20">
      <div className="mx-auto max-w-[760px] space-y-8">
        <div className="space-y-2">
          <Link href="/" className="text-sm text-muted hover:underline">
            ← MCP Doctor
          </Link>
          <h1 className="font-display text-[28px] font-semibold sm:text-[36px]">
            {data.title}
          </h1>
          <p className="text-muted">{data.methodology}</p>
          <p className="font-mono text-sm text-muted">
            {data.version} · observed {data.observedAt} · CLI {data.cliVersion} · commit{" "}
            {data.commit} · {data.connectedCount}/{data.catalogSize} connected
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-line bg-white">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="px-4 py-3 font-medium">Rank</th>
                <th className="px-4 py-3 font-medium">Server</th>
                <th className="px-4 py-3 font-medium">Grade</th>
                <th className="px-4 py-3 font-medium">Score</th>
                <th className="px-4 py-3 font-medium">Tools</th>
                <th className="px-4 py-3 font-medium">Tokens</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr key={row.server} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 text-muted">{i + 1}</td>
                  <td className="px-4 py-3">{row.server}</td>
                  <td className="px-4 py-3 font-mono">{row.grade}</td>
                  <td className="px-4 py-3">{row.score}</td>
                  <td className="px-4 py-3">{row.tools}</td>
                  <td className="px-4 py-3">{row.tokens.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="space-y-3 text-muted">
          <h2 className="font-display text-lg font-semibold text-ink">Awards ({data.version})</h2>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {data.awards.map((award) => (
              <li key={award.label}>
                {award.label}: {award.value}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3 text-muted">
          <h2 className="font-display text-lg font-semibold text-ink">
            Connection failures ({data.version})
          </h2>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {data.connectionFailures.map((row) => (
              <li key={row.server}>
                {row.server}: {row.reason}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3 text-sm text-muted">
          {data.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-lg font-semibold">Reproduce</h2>
          <InstallPill command={BENCHMARK_CMD} />
          <p className="text-sm text-muted">
            Source report on{" "}
            <a
              href={BENCHMARK_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
