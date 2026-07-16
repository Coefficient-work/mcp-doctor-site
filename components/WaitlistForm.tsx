"use client";

import { useState } from "react";
import InstallPill from "./InstallPill";
import { INSTALL_CMD } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          name: data.get("name") || undefined,
          company: data.get("company") || undefined,
          role: data.get("role") || undefined,
          interest: data.get("interest") || "early-access",
          mcpUrl: data.get("mcpUrl") || undefined,
          consent: data.get("consent") === "on",
          website: data.get("website") || "",
          source: "landing",
        }),
      });

      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong");
      }
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (state === "success") {
    return (
      <div className="space-y-4 text-center">
        <p className="text-lg font-medium text-black">You&apos;re on the list.</p>
        <p className="text-[#737373]">Try the CLI today:</p>
        <InstallPill command={INSTALL_CMD} className="mx-auto" />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Email *"
          className="w-full rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm outline-none focus:border-black"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm outline-none focus:border-black"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm outline-none focus:border-black"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <select
          name="role"
          className="rounded-full border border-[#e5e5e5] bg-white px-4 py-2.5 text-sm outline-none focus:border-black"
          defaultValue=""
        >
          <option value="" disabled>
            Role
          </option>
          <option value="platform">Platform engineer</option>
          <option value="devrel">DevRel</option>
          <option value="eng-lead">Eng lead</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
        <select
          name="interest"
          className="rounded-full border border-[#e5e5e5] bg-white px-4 py-2.5 text-sm outline-none focus:border-black"
          defaultValue="early-access"
        >
          <option value="early-access">Early access</option>
          <option value="private-benchmark">Private benchmark</option>
          <option value="design-partner">Design partner</option>
          <option value="ci-updates">CI updates</option>
        </select>
      </div>
      <input
        type="url"
        name="mcpUrl"
        placeholder="MCP endpoint URL (optional)"
        className="w-full rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm outline-none focus:border-black"
      />
      <label className="flex items-start gap-2 text-sm text-[#737373]">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          I agree to be contacted about MCP Doctor.{" "}
          <a href="/privacy" className="underline hover:text-black">
            Privacy Policy
          </a>
        </span>
      </label>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#090909] disabled:opacity-60"
      >
        {state === "submitting" ? "Joining..." : "Join early access"}
      </button>
    </form>
  );
}
