import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Data flow",
  description: "What MCP Doctor sends, keeps local, and does not collect.",
  alternates: { canonical: `${SITE_URL}/data-flow` },
};

export default function DataFlowPage() {
  return (
    <main className="mx-auto max-w-[760px] space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Data flow</h1>
      <p>Only flows that exist today are listed.</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Local inspect</h2>
        <p>
          <code className="font-mono text-sm">inspect</code> connects from your
          machine to the MCP server you name, scores the schema, and can write
          <code className="font-mono text-sm"> report.md</code> next to you. Nothing
          is uploaded to Coefficient.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Eval</h2>
        <p>
          Optional. Uses a model key you provide. Prompts, tasks, and reports stay
          with you and that model provider. Coefficient does not store them.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Website</h2>
        <p>
          Pages are hosted on Vercel. Aggregate, cookieless Web Analytics may
          record page views and named events such as install-command copy. Event
          properties never include email, endpoints, or free text.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Not enabled</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Waitlist / email collection</li>
          <li>CLI telemetry ingestion</li>
          <li>Stripe checkout</li>
          <li>Accounts</li>
        </ul>
      </section>

      <p className="text-sm text-muted">
        Questions:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
          {CONTACT_EMAIL}
        </a>
      </p>
    </main>
  );
}
