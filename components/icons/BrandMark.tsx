type Props = {
  className?: string;
  title?: string;
};

/** Readiness signal: one check between two MCP terminals. No plus, no four-node hub. */
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
      <path
        d="M8.8 16.8 13.6 21.7 23.4 10.6"
        stroke="#16A36A"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.8" cy="16.8" r="2.4" fill="#F7F8F5" />
      <circle cx="23.4" cy="10.6" r="2.4" fill="#F7F8F5" />
    </svg>
  );
}
