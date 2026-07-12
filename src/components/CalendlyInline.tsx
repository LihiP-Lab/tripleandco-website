"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [loadError, setLoadError] = useState(false);

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
    try {
      // Reset so we never stack two iframes (e.g. on fast refresh / re-init).
      containerRef.current.innerHTML = "";
      w.Calendly.initInlineWidget({
        url: buildUrl(),
        parentElement: containerRef.current,
      });
      setLoadError(false);
    } catch (error) {
      console.error("Calendly widget failed to initialize:", error);
      setLoadError(true);
    }
  }, [buildUrl]);

  useEffect(() => {
    // If the script already loaded (client nav), init immediately.
    const timer = window.setTimeout(initWidget, 0);
    return () => window.clearTimeout(timer);
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
        onError={() => {
          console.error("Calendly widget script failed to load");
          setLoadError(true);
        }}
      />
      <div
        ref={containerRef}
        className="overflow-hidden rounded-2xl border border-purple-15 bg-white shadow-[var(--shadow-base)]"
        style={{ minWidth: 320, height: 700 }}
        aria-label="Book your Revenue Diagnostic"
      >
        {loadError && (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-purple-7">
              The booking calendar could not be loaded.
            </p>
            <a
              href={CALENDLY_BASE}
              className="rounded-[10px] bg-brand px-6 py-3 font-semibold text-white"
            >
              Open Calendly
            </a>
          </div>
        )}
      </div>
    </>
  );
}
