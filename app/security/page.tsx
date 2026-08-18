import type { Metadata } from "next";
import { CONTACT_EMAIL, GITHUB_REPO, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Security",
  description: "How to report a vulnerability in MCP Doctor.",
  alternates: { canonical: `${SITE_URL}/security` },
};

export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-[760px] space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Security</h1>
      <p>
        This is a contact path, not a formal security program, bug bounty, or SLA.
      </p>
      <p>
        If you believe you found a vulnerability in the website or CLI, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
          {CONTACT_EMAIL}
        </a>{" "}
        with enough detail to reproduce. Do not include secrets you do not control.
      </p>
      <p>
        Source:{" "}
        <a href={GITHUB_REPO} className="underline">
          {GITHUB_REPO}
        </a>
      </p>
    </main>
  );
}
