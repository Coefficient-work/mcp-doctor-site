export type WaitlistPayload = {
  email: string;
  name?: string;
  company?: string;
  role?: string;
  interest?: string;
  mcpUrl?: string;
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
      mcpUrl: b.mcpUrl ? String(b.mcpUrl).trim() : undefined,
      consent: true,
      source: b.source ? String(b.source) : "direct",
    },
  };
}

export async function saveWaitlistSignup(data: WaitlistPayload): Promise<void> {
  const url = process.env.POSTGRES_URL ?? process.env.DATABASE_URL;

  if (!url) {
    if (process.env.NODE_ENV === "development") {
      console.info("[waitlist] dev signup (no DB):", data);
      return;
    }
    throw new Error(
      "Waitlist database not configured. Set POSTGRES_URL on Vercel.",
    );
  }

  const { sql } = await import("@vercel/postgres");

  await sql`
    INSERT INTO waitlist_signups (email, name, company, role, interest, mcp_url, source)
    VALUES (
      ${data.email},
      ${data.name ?? null},
      ${data.company ?? null},
      ${data.role ?? null},
      ${data.interest ?? "early-access"},
      ${data.mcpUrl ?? null},
      ${data.source ?? "direct"}
    )
    ON CONFLICT (email) DO UPDATE SET
      name = EXCLUDED.name,
      company = EXCLUDED.company,
      role = EXCLUDED.role,
      interest = EXCLUDED.interest,
      mcp_url = EXCLUDED.mcp_url,
      source = EXCLUDED.source
  `;
}

export async function notifyWaitlistSignup(data: WaitlistPayload): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.WAITLIST_NOTIFY_EMAIL ?? "hello@coefficient.work";
  if (!key) return;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "MCP Doctor <onboarding@resend.dev>",
      to: [to],
      subject: `Waitlist: ${data.email}`,
      text: JSON.stringify(data, null, 2),
    }),
  });
}
