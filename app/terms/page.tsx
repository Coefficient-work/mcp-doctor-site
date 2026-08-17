import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for the MCP Doctor website and open-source CLI.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-[760px] space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>
      <p className="text-sm text-muted">Last updated: 17 Aug 2026</p>
      <p>
        These terms cover the public website at coefficient.work and the
        open-source MCP Doctor CLI. They do not invent accounts, paid plans, or a
        hosted product that does not exist.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What this is</h2>
        <p>
          MCP Doctor by Coefficient is an early-stage open-source CLI and this
          informational website. There is no public claim of incorporation, team
          size, customers, uptime, or certifications.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. CLI license</h2>
        <p>
          The CLI is offered under the MIT license in its repository. That license
          governs the software. This page governs the website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Website</h2>
        <p>
          The site is provided as-is. There are no user accounts, no waitlist
          collection, and no checkout. You may copy the install command and read
          the documentation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Outputs</h2>
        <p>
          Scorecards, evals, and benchmarks can be wrong or incomplete. Do not
          treat them as the sole authority for security or production readiness.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Acceptable use</h2>
        <p>
          Do not use the site or CLI for unlawful access, abuse, or to submit
          malware. The waitlist API rejects submissions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. No warranty</h2>
        <p className="uppercase text-muted">
          The website and CLI are provided &quot;as is&quot; without warranties
          to the maximum extent permitted by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Operator and law</h2>
        <p>
          The legal operator is not documented yet. These terms will be updated
          with operator name, jurisdiction, and governing law when that exists.
          Until then, continued use of the site is at your own risk.
        </p>
        <p>
          Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </main>
  );
}
