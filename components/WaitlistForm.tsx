import { CONTACT_EMAIL } from "@/lib/constants";

/** Waitlist collection stays disabled. Do not enable without an explicit request. */
export default function WaitlistForm() {
  return (
    <div className="rounded-lg border border-line bg-white p-5 text-sm text-muted">
      <p className="font-medium text-ink">Early access is not collecting emails yet.</p>
      <p className="mt-2">
        The waitlist stays closed. Use the CLI locally, or write to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-ink">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
