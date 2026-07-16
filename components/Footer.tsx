import Link from "next/link";
import {
  CONTACT_EMAIL,
  GITHUB_REPO,
  ROUNDTABLE_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white py-12">
      <div className="mx-auto max-w-[720px] space-y-4 px-6 text-center text-xs text-[#737373]">
        <p className="text-sm text-black">MCP Doctor — agent readiness for MCP</p>
        <p>Coefficient builds AI tooling for platform teams.</p>
        <p>
          A project by{" "}
          <a href={ROUNDTABLE_URL} className="underline hover:text-black">
            Roundtable
          </a>{" "}
          ·{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-black">
            {CONTACT_EMAIL}
          </a>
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-2">
          <Link href="/privacy" className="hover:text-black hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-black hover:underline">
            Terms
          </Link>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black hover:underline"
          >
            GitHub
          </a>
        </nav>
        <p>© {new Date().getFullYear()} Coefficient AI Inc.</p>
      </div>
    </footer>
  );
}
