import Link from "next/link";
import BrandMark from "./icons/BrandMark";
import { DOCS_URL, GITHUB_REPO } from "@/lib/constants";

export default function Header() {
  return (
    <header className="border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-black">
          <BrandMark className="h-6 w-6" />
          <span className="font-display text-base font-semibold">MCP Doctor</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <Link href="/benchmark" className="hover:underline">
            Benchmark
          </Link>
          <a href={DOCS_URL} className="hover:underline">
            Docs
          </a>
        </nav>
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-[#090909]"
        >
          Get started
        </a>
      </div>
    </header>
  );
}
