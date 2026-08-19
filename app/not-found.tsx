import Link from "next/link";
import BrandMark from "@/components/icons/BrandMark";
import { INSTALL_CMD, PRODUCT_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-24 text-center">
      <div className="flex justify-center">
        <BrandMark className="h-12 w-12" title={PRODUCT_NAME} surface="paper" />
      </div>
      <h1 className="mt-6 text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">That URL is not part of MCP Doctor.</p>
      <p className="mt-6">
        <Link href="/" className="underline">
          Back to the homepage
        </Link>
      </p>
      <p className="mt-8 font-mono text-sm text-muted">{INSTALL_CMD}</p>
    </main>
  );
}
