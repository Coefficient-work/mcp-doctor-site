type Props = {
  className?: string;
  title?: string;
};

/** Geometric readiness mark: MCP connection points plus a check/signal. */
export default function BrandMark({ className = "h-8 w-8", title }: Props) {
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
      <rect width="32" height="32" rx="8" fill="#0B0F14" />
      <circle cx="8" cy="16" r="2.15" fill="#F7F8F5" />
      <circle cx="16" cy="8" r="2.15" fill="#F7F8F5" />
      <circle cx="24" cy="16" r="2.15" fill="#F7F8F5" />
      <circle cx="16" cy="24" r="2.15" fill="#F7F8F5" />
      <path d="M8 16h16M16 8v16" stroke="#F7F8F5" strokeWidth="1.35" />
      <path
        d="M11.4 16.3 14.3 19.2 20.7 12.6"
        stroke="#16A36A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
