"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="max-w-lg rounded-2xl border border-purple-15 bg-white p-10 text-center shadow-[var(--shadow-base)]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
          Something went wrong
        </p>
        <h1 className="mb-4 text-3xl font-extrabold text-purple-9">
          We couldn&apos;t load this page.
        </h1>
        <p className="mb-8 text-purple-7">
          Please try again. If the problem continues, contact
          lihi@tripleandco.com.
        </p>
        <button
          type="button"
          onClick={unstable_retry}
          className="rounded-[10px] bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
