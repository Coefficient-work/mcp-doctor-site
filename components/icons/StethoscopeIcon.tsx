export default function StethoscopeIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 8c0-2.2 1.8-4 4-4s4 1.8 4 4v14c0 4.4-3.6 8-8 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M22 8c0-2.2 1.8-4 4-4s4 1.8 4 4v14c0 6.6-5.4 12-12 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M28 28c2-2 4-3 6-3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
