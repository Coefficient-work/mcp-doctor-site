import Link from "next/link";
import {
  CONTACT_EMAIL,
  GITHUB_REPO,
  NAMESPACE_NOTE,
  PRODUCT_CREDIT,
  PRODUCT_NAME,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-12">
      <div className="mx-auto max-w-[760px] space-y-4 px-6 text-center text-sm text-muted">
        <p className="text-ink">{PRODUCT_NAME}</p>
        <p className="text-xs">{PRODUCT_CREDIT}</p>
        <p>An early-stage open-source project.</p>
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-ink">
            {CONTACT_EMAIL}
          </a>
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-2">
          <Link href="/privacy" className="hover:text-ink hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-ink hover:underline">
            Terms
          </Link>
          <Link href="/security" className="hover:text-ink hover:underline">
            Security
          </Link>
          <Link href="/changelog" className="hover:text-ink hover:underline">
            Changelog
          </Link>
          <Link href="/data-flow" className="hover:text-ink hover:underline">
            Data flow
          </Link>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline"
          >
            GitHub
          </a>
        </nav>
        <p className="pt-2 text-xs leading-relaxed">{NAMESPACE_NOTE}</p>
      </div>
    </footer>
  );
}
