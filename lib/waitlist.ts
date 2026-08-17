/**
 * Waitlist helpers kept for a later restore after the legal operator is verified.
 * Collection is currently disabled: app/api/waitlist/route.ts rejects all posts.
 */
export type WaitlistPayload = {
  email: string;
  name?: string;
  company?: string;
  role?: string;
  interest?: string;
  consent: boolean;
  website?: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateWaitlistPayload(body: unknown): {
  ok: true;
  data: WaitlistPayload;
} | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }

  const b = body as Record<string, unknown>;

  if (b.website && String(b.website).length > 0) {
    return { ok: false, error: "Rejected" };
  }

  const email = String(b.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Valid email required" };
  }

  if (!b.consent) {
    return { ok: false, error: "Consent required" };
  }

  return {
    ok: true,
    data: {
      email,
      name: b.name ? String(b.name).trim() : undefined,
      company: b.company ? String(b.company).trim() : undefined,
      role: b.role ? String(b.role) : undefined,
      interest: b.interest ? String(b.interest) : "early-access",
      consent: true,
      source: b.source ? String(b.source) : "direct",
    },
  };
}
