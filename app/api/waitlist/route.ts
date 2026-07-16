import { NextResponse } from "next/server";
import {
  notifyWaitlistSignup,
  saveWaitlistSignup,
  validateWaitlistPayload,
} from "@/lib/waitlist";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = validateWaitlistPayload(body);

    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    await saveWaitlistSignup(parsed.data);
    await notifyWaitlistSignup(parsed.data).catch(() => undefined);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to save signup";
    return NextResponse.json({ error: message }, { status: 503 });
  }
}
