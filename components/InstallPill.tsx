"use client";

import { useState } from "react";

type Props = {
  command: string;
  className?: string;
};

export default function InstallPill({ command, className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      className={`flex w-full max-w-xl items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4 py-3 sm:px-5 ${className}`}
    >
      <code className="min-w-0 flex-1 break-all font-mono text-sm text-black sm:text-base">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-[#737373] transition hover:bg-white hover:text-black"
        aria-label="Copy command"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
