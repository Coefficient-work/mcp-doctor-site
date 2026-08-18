type Line = { text: string; tone?: "muted" | "warn" | "success" };

type Props = {
  lines: Line[];
  className?: string;
};

export default function TerminalCard({ lines, className = "" }: Props) {
  return (
    <div className={`overflow-hidden rounded-lg border border-line bg-ink ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal" />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-paper">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.tone === "muted"
                ? "text-white/55"
                : line.tone === "warn"
                  ? "text-warn"
                  : line.tone === "success"
                    ? "text-signal"
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
