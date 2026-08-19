import Link from "next/link";
import BrandMark from "./icons/BrandMark";
import { DOCS_URL, PRODUCT_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[760px] items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-ink">
          <BrandMark className="h-7 w-7" title={PRODUCT_NAME} surface="paper" />
          <span className="font-display text-base font-semibold tracking-tight">
            {PRODUCT_NAME}
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link href="/benchmark" className="hover:underline">
            Benchmark
          </Link>
          <Link href="/data-flow" className="hidden hover:underline sm:inline">
            Data flow
          </Link>
          <a href={DOCS_URL} className="hover:underline">
            Docs
          </a>
        </nav>
      </div>
    </header>
  );
}
