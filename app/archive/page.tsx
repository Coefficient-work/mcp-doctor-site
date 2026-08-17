import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archive",
  robots: { index: false, follow: false },
};

export default function ArchivePage() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-20">
      <h1 className="font-display text-2xl font-semibold">Archived</h1>
      <p className="mt-4 text-muted">
        This domain previously described a field-work copilot concept. The public
        product identity is now{" "}
        <Link href="/" className="underline hover:text-ink">
          MCP Doctor by Coefficient
        </Link>
        .
      </p>
    </main>
  );
}
