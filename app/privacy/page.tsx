import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, GITHUB_REPO, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What MCP Doctor by Coefficient actually collects today.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[760px] space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
      <p className="text-sm text-muted">Last updated: 17 Aug 2026</p>
      <p>
        This page describes the data flows that exist now for the MCP Doctor
        website and CLI. It does not describe a future product.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Operator</h2>
        <p>
          MCP Doctor is an early-stage open-source project endorsed as MCP Doctor
          by Coefficient. The legal operator / controller is not documented yet.
          Until that is verified, this site does not collect waitlist emails and
          the CLI does not send product telemetry.
        </p>
        <p>
          Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Website</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Hosting: Vercel serves this site. Vercel may process standard request
            logs as a processor.
          </li>
          <li>
            Analytics: Vercel Web Analytics, cookieless aggregate page views and
            named events. Event names only. No email, MCP endpoints, or free-text
            properties.
          </li>
          <li>No accounts, no cookies for tracking, no advertising pixels.</li>
          <li>
            Waitlist form: disabled. Posts to{" "}
            <code className="font-mono text-sm">/api/waitlist</code> are rejected.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">CLI</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <code className="font-mono text-sm">inspect</code> and{" "}
            <code className="font-mono text-sm">benchmark</code> run on your
            machine and write local files. They do not upload MCP names, URLs,
            filesystem paths, prompts, or reports.
          </li>
          <li>
            <code className="font-mono text-sm">eval</code> uses a model key you
            supply. Prompts stay with you and that provider.
          </li>
          <li>
            Anonymous CLI telemetry is designed but ingestion is off until a
            verified operator and privacy notice exist.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Email you send us</h2>
        <p>
          If you write to {CONTACT_EMAIL}, we receive whatever you include in that
          message. There is no automated marketing list.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">More detail</h2>
        <p>
          <Link href="/data-flow" className="underline">
            Data flow
          </Link>{" "}
          ·{" "}
          <a href={GITHUB_REPO} className="underline">
            Source
          </a>
        </p>
      </section>
    </main>
  );
}
