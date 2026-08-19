type Props = {
  className?: string;
  title?: string;
  /** paper: ink plus, no tile (chrome). ink: paper plus on an ink rounded square (OG/apple). */
  surface?: "paper" | "ink";
};

/** Geometric medical plus. One hue; no check, nodes, or signal green. */
export default function BrandMark({
  className = "h-8 w-8",
  title,
  surface = "paper",
}: Props) {
  const glyph = surface === "ink" ? "#F7F8F5" : "#0B0F14";
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {surface === "ink" ? <rect width="32" height="32" rx="8" fill="#0B0F14" /> : null}
      <rect x="12.5" y="5" width="7" height="22" rx="1.6" fill={glyph} />
      <rect x="5" y="12.5" width="22" height="7" rx="1.6" fill={glyph} />
    </svg>
  );
}
