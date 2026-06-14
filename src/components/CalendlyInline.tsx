"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";

// Base Calendly event + the params we always want set.
// primary_color matches Triple brand pink; hide_gdpr_banner keeps it clean.
const CALENDLY_BASE = "https://calendly.com/lihi-tripleandco/30min";
const CALENDLY_PARAMS = new URLSearchParams({
  hide_gdpr_banner: "1",
  primary_color: "FE3465",
  utm_source: "linkedin",
  utm_medium: "paid_social",
  utm_campaign: "cmo_leadgen_q2_2026",
});

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
  };
};

/**
 * Inline Calendly widget for the Revenue Diagnostic booking section.
 * Forwards the inbound landing-page query string (the ad's UTMs) into the
 * booking so a booked call attributes back to the exact campaign/ad.
 */
export function CalendlyInline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const buildUrl = useCallback(() => {
    const params = new URLSearchParams(CALENDLY_PARAMS);
    if (typeof window !== "undefined") {
      // Forward inbound UTMs (utm_content, utm_term, etc.) without
      // clobbering the params we set above.
      const inbound = new URLSearchParams(window.location.search);
      inbound.forEach((value, key) => {
        if (!params.has(key)) params.set(key, value);
      });
    }
    return `${CALENDLY_BASE}?${params.toString()}`;
  }, []);

  const initWidget = useCallback(() => {
    const w = window as CalendlyWindow;
    if (!w.Calendly || !containerRef.current) return;
    // Reset so we never stack two iframes (e.g. on fast refresh / re-init).
    containerRef.current.innerHTML = "";
    w.Calendly.initInlineWidget({
      url: buildUrl(),
      parentElement: containerRef.current,
    });
  }, [buildUrl]);

  useEffect(() => {
    // If the script already loaded (client nav), init immediately.
    initWidget();
  }, [initWidget]);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={initWidget}
      />
      <div
        ref={containerRef}
        className="overflow-hidden rounded-2xl border border-purple-15 bg-white shadow-[var(--shadow-base)]"
        style={{ minWidth: 320, height: 700 }}
        aria-label="Book your Revenue Diagnostic"
      />
    </>
  );
}
