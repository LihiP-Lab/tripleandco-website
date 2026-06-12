"use client";

import { useState } from "react";

export function InsightsNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "",
          lastName: "",
          email,
          company: "",
          message: "Newsletter subscription from /insights",
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-white font-semibold text-base">
        You&apos;re in. The next briefing lands in your inbox.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 rounded-[10px] bg-purple-85 border border-purple-7 px-4 py-3 text-[15px] text-white placeholder:text-purple-4 focus:outline-none focus:border-brand transition-colors"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Subscribing..." : "Subscribe"}{" "}
        <span aria-hidden>&#8594;</span>
      </button>
      {status === "error" && (
        <p className="text-pink-3 text-sm sm:absolute sm:mt-14">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
