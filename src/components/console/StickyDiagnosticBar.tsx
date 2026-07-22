"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Desktop-only sticky conversion bar. Appears after the user scrolls past the
 * hero and hides again near the page footer so it never covers the final CTA.
 * Mobile already has the global MobileCTA, so this is hidden below lg.
 */
export function StickyDiagnosticBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y > document.body.scrollHeight - 700;
      setShow(y > 720 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-5 left-1/2 z-50 hidden lg:block"
      style={{
        transform: `translateX(-50%) translateY(${show ? "0" : "180%"})`,
        opacity: show ? 1 : 0,
        transition: "transform .4s cubic-bezier(.2,.8,.2,1), opacity .3s ease",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <div
        className="flex items-center gap-5 rounded-full px-5 py-2.5"
        style={{
          background: "rgba(15,15,26,0.92)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 18px 50px -16px rgba(0,0,0,0.7)",
        }}
      >
        <span className="flex items-center gap-2.5">
          <span className="signal-dot" aria-hidden="true" />
          <span className="text-sm text-[#C9C9D6]">
            Not sure who you need?
          </span>
        </span>
        <Link
          href="/revenue-diagnostic#book"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Book a diagnostic &#8594;
        </Link>
      </div>
    </div>
  );
}
