type Line = { text: string; tone?: "muted" | "warn" | "success" };

type Props = {
  lines: Line[];
  className?: string;
};

export default function TerminalCard({ lines, className = "" }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[#e5e5e5] bg-white ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[#e5e5e5] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-black">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.tone === "muted"
                ? "text-[#737373]"
                : line.tone === "warn"
                  ? "text-[#ffbd2e]"
                  : line.tone === "success"
                    ? "text-[#27c93f]"
                    : undefined
            }
          >
            {line.text}
          </div>
        ))}
      </pre>
    </div>
  );
}
