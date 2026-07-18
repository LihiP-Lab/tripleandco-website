"use client";

import { useState } from "react";

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white shadow-[var(--shadow-base)] border border-purple-15 p-12 text-center">
        <div className="h-16 w-16 rounded-full bg-pink-05 flex items-center justify-center mx-auto mb-6">
          <svg
            className="h-8 w-8 text-brand"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-purple-9 mb-2">
          Request received.
        </h3>
        <p className="text-purple-7">
          Lihi and the agents will run your AI Visibility Audit and send it to
          your inbox. Expect it within two business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const website = String(formData.get("website") || "");
        const competitor = String(formData.get("competitor") || "");
        const fullName = String(formData.get("fullName") || "").trim();
        const nameParts = fullName.split(/\s+/).filter(Boolean);
        const firstName = nameParts[0] || fullName;
        const lastName = nameParts.slice(1).join(" ") || firstName;

        const message = [
          "AI Visibility Audit request",
          website ? `Website: ${website}` : "",
          competitor ? `Competitor to compare: ${competitor}` : "",
        ]
          .filter(Boolean)
          .join("\n");

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName,
              lastName,
              email: formData.get("email"),
              company: formData.get("company") || "",
              message,
            }),
          });

          if (!res.ok) {
            throw new Error("Submission failed");
          }

          setSubmitted(true);
        } catch {
          setError(
            "Something went wrong. Please try again or email lihi@tripleandco.com directly."
          );
        } finally {
          setSubmitting(false);
        }
      }}
      className="rounded-2xl bg-white shadow-[var(--shadow-base)] border border-purple-15 p-8"
    >
      <h3 className="text-xl font-extrabold text-purple-9 mb-1.5">
        Request your free audit
      </h3>
      <p className="text-sm text-purple-7 mb-6">
        No cost, no pitch deck. Just a clear read on how AI engines see your
        brand.
      </p>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-purple-9 mb-1.5"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors placeholder:text-purple-4"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-purple-9 mb-1.5"
          >
            Work Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors placeholder:text-purple-4"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-purple-9 mb-1.5"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors placeholder:text-purple-4"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-semibold text-purple-9 mb-1.5"
          >
            Company Website
          </label>
          <input
            type="text"
            id="website"
            name="website"
            required
            className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors placeholder:text-purple-4"
            placeholder="yourcompany.com"
          />
        </div>
        <div>
          <label
            htmlFor="competitor"
            className="block text-sm font-semibold text-purple-9 mb-1.5"
          >
            A competitor to compare against{" "}
            <span className="font-normal text-purple-5">(optional)</span>
          </label>
          <input
            type="text"
            id="competitor"
            name="competitor"
            className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors placeholder:text-purple-4"
            placeholder="competitor.com"
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Get my free AI Visibility Audit"}
        </button>
        <p className="text-xs text-purple-5 text-center">
          We use your details only to run and send the audit. No spam.
        </p>
      </div>
    </form>
  );
}
