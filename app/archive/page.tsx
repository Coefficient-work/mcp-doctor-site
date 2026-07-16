import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archive - Previous Coefficient landing",
  robots: { index: false },
};

export default function ArchivePage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-20">
      <h1 className="font-display text-2xl font-semibold">Archived</h1>
      <p className="mt-4 text-[#737373]">
        This site previously promoted Coefficient&apos;s HVAC field-work copilot
        product. The current focus is{" "}
        <Link href="/" className="underline hover:text-black">
          MCP Doctor
        </Link>{" "}
        - agent readiness scoring for MCP servers.
      </p>
    </main>
  );
}
