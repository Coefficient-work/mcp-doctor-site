import { NextResponse } from "next/server";
import { CONTACT_EMAIL, WAITLIST_ENABLED } from "@/lib/constants";

export async function POST() {
  if (!WAITLIST_ENABLED) {
    return NextResponse.json(
      {
        error: "Waitlist is not open.",
        contact: CONTACT_EMAIL,
      },
      { status: 403 },
    );
  }

  return NextResponse.json({ error: "Waitlist is not open." }, { status: 403 });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
