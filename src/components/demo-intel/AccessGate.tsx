"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, LoaderCircle } from "lucide-react";

function safeNext(next: string | null): string {
  // Only allow internal demo-intelligence paths to prevent open redirects.
  if (next && next.startsWith("/demo-intelligence") && !next.startsWith("//")) {
    return next;
  }
  return "/demo-intelligence";
}

export function AccessGate() {
  const router = useRouter();
  const params = useSearchParams();
  const next = safeNext(params.get("next"));

  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/demo-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      if (res.ok) {
        router.replace(next);
        router.refresh();
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(data.error ?? "Incorrect access code.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <label className="mono-label mb-2 block" style={{ color: "var(--c-text-dim)" }}>
        Access code
      </label>
      <input
        type="password"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        autoFocus
        autoComplete="off"
        aria-label="Access code"
        aria-invalid={error ? true : undefined}
        placeholder="Enter your code"
        className="w-full rounded-xl px-4 py-3 text-[15px] outline-none transition"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${error ? "rgba(214,69,69,0.6)" : "var(--c-border)"}`,
          color: "var(--c-text)",
        }}
      />
      {error && (
        <p className="mt-2 text-[13px]" role="alert" style={{ color: "#F08A8A" }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading || code.length === 0}
        className="mono-label mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50"
        style={{ background: "var(--c-brand)", color: "#fff" }}
      >
        {loading ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Lock className="h-4 w-4" aria-hidden="true" />
        )}
        {loading ? "Verifying…" : "Unlock dashboard"}
      </button>
    </form>
  );
}
