"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";

// Base Calendly widget params we always want set.
// primary_color matches Triple brand pink; hide_gdpr_banner keeps it clean.
const CALENDLY_BASE = "https://calendly.com/lihi-tripleandco/30min";
const CALENDLY_PARAMS = new URLSearchParams({
  hide_gdpr_banner: "1",
  primary_color: "FE3465",
});

// Fallback attribution for visitors who arrive with no UTMs of their own
// (direct, organic search, referral). We never hardcode a paid-social source,
// so only genuine ad clicks report as paid. Inbound UTMs always take priority.
const DEFAULT_UTMS: Record<string, string> = {
  utm_source: "website",
  utm_medium: "organic",
};

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
  };
  lintrk?: (action: "track", data: { conversion_id: number }) => void;
};

// LinkedIn conversion id for "Revenue Diagnostic Booked" (event-specific tag).
const LINKEDIN_BOOKED_CONVERSION_ID = 27632930;

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
      // Forward the visitor's real inbound query string (the ad's/campaign's
      // UTMs) verbatim, so a booking attributes back to the exact source.
      const inbound = new URLSearchParams(window.location.search);
      inbound.forEach((value, key) => params.set(key, value));
    }
    // Only fill attribution defaults the visitor did not supply, so unknown
    // traffic reads as "website / organic" rather than as LinkedIn paid.
    for (const [key, value] of Object.entries(DEFAULT_UTMS)) {
      if (!params.has(key)) params.set(key, value);
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

  // Fire the LinkedIn "Revenue Diagnostic Booked" conversion when a visitor
  // completes a booking inside the inline Calendly widget. Calendly posts a
  // `calendly.event_scheduled` message to the parent window on success.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      const data = e.data as { event?: string } | undefined;
      if (data && data.event === "calendly.event_scheduled") {
        const w = window as CalendlyWindow;
        if (typeof w.lintrk === "function") {
          w.lintrk("track", { conversion_id: LINKEDIN_BOOKED_CONVERSION_ID });
        }
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

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
