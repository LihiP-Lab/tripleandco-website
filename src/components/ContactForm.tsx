"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl bg-white shadow-[var(--shadow-base)] border border-purple-15 p-8"
    >
      <h3 className="text-xl font-extrabold text-purple-9 mb-6">
        Let&apos;s get started
      </h3>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-purple-9 mb-1.5"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors placeholder:text-purple-4"
            placeholder="Your name"
          />
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
            rows={4}
            required
            className="w-full rounded-[10px] border border-purple-15 bg-purple-05 px-4 py-2.5 text-sm text-purple-9 focus:outline-none focus:border-brand transition-colors resize-none placeholder:text-purple-4"
            placeholder="Tell me about your growth goals..."
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
        >
          Book a Diagnostic Call
        </button>
      </div>
    </form>
  );
}
