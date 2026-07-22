"use client";

import { useState } from "react";

export function ContactForm() {
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
          Thank you!
        </h3>
        <p className="text-purple-7">
          Your submission has been received. Lihi will get back to you soon.
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

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: formData.get("firstName") || "",
              lastName: formData.get("lastName") || "",
              email: formData.get("email"),
              company: formData.get("company") || "",
              message: formData.get("message") || "",
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
      <h3 className="text-xl font-extrabold text-purple-9 mb-6">
        Let&apos;s get started
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-purple-9 mb-1.5"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors placeholder:text-purple-4"
              placeholder="First name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-purple-9 mb-1.5"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors placeholder:text-purple-4"
              placeholder="Last name"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-purple-9 mb-1.5"
          >
            Email
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
            htmlFor="message"
            className="block text-sm font-semibold text-purple-9 mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors resize-none placeholder:text-purple-4"
            placeholder="Tell me about your growth goals..."
          />
        </div>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Request a diagnostic"}
        </button>
      </div>
    </form>
  );
}
