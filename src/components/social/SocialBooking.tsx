"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Script from "next/script";
import { CalendarCheck, ExternalLink, Loader2, Lock } from "lucide-react";
import {
  buildCalendlyUrl,
  type CalendlyWindow,
} from "@/components/CalendlyInline";
import {
  PACKAGE_INTEREST_OPTIONS,
  isPackageInterest,
  type PackageInterest,
} from "@/lib/social-packages";
import { BOOK_CALL_EVENT, trackSocial, type BookCallDetail } from "@/lib/social-analytics";

type Status = "idle" | "loading" | "ready" | "failed" | "confirmed";

const CALENDLY_ORIGIN = "https://calendly.com";
const SOCIAL_CALENDLY_URL = "https://calendly.com/lihi-tripleandco/social-media-package-call";
// No `event_type_viewed` message within this window means the embed is
// blocked or down, so we switch to the direct-link fallback.
const LOAD_TIMEOUT_MS = 12_000;

// Package interest travels as a non-personal attribution hint. Inbound
// source/medium/campaign are kept for ad attribution, but utm_content always
// carries the package so Lihi sees it on the booking.
const bookingUrl = (interest: PackageInterest) => {
  const url = new URL(buildCalendlyUrl({ utm_campaign: "social-media-management" }, SOCIAL_CALENDLY_URL));
  url.searchParams.set("utm_content", `social-${interest}`);
  return url.toString();
};

const noopSubscribe = () => () => {};

export function SocialBooking() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const openedRef = useRef(false);
  const [interest, setInterest] = useState<PackageInterest>("not-sure");
  const [shouldLoad, setShouldLoad] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [timeChosen, setTimeChosen] = useState(false);
  const interestRef = useRef(interest);
  useEffect(() => {
    interestRef.current = interest;
  }, [interest]);

  // Load the embed only as the visitor approaches it, or the moment any
  // "Book a Call" CTA is used.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    function onBookCall(e: Event) {
      const detail = (e as CustomEvent<BookCallDetail>).detail;
      setShouldLoad(true);
      if (detail?.package && isPackageInterest(detail.package)) {
        setTimeChosen((locked) => {
          if (!locked) setInterest(detail.package as PackageInterest);
          return locked;
        });
      }
    }
    window.addEventListener(BOOK_CALL_EVENT, onBookCall);
    return () => window.removeEventListener(BOOK_CALL_EVENT, onBookCall);
  }, []);

  const clearLoadTimeout = () => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  const initWidget = useCallback(() => {
    const w = window as CalendlyWindow;
    const container = containerRef.current;
    if (!w.Calendly || !container) return;
    container.innerHTML = "";
    setStatus("loading");
    clearLoadTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setStatus((s) => (s === "loading" ? "failed" : s));
      trackSocial("Social Scheduler Failed", { package: interestRef.current });
    }, LOAD_TIMEOUT_MS);
    w.Calendly.initInlineWidget({
      url: bookingUrl(interestRef.current),
      parentElement: container,
    });
  }, []);

  // (Re)initialise when the script is ready or the package interest changes,
  // but never after a time is chosen: that would wipe the visitor's progress.
  useEffect(() => {
    if (!scriptReady || timeChosen) return;
    initWidget();
  }, [scriptReady, interest, timeChosen, initWidget]);

  useEffect(() => clearLoadTimeout, []);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== CALENDLY_ORIGIN) return;
      const event = (e.data as { event?: string } | undefined)?.event;
      if (event === "calendly.event_type_viewed") {
        clearLoadTimeout();
        setStatus((s) => (s === "confirmed" ? s : "ready"));
        if (!openedRef.current) {
          openedRef.current = true;
          trackSocial("Social Scheduler Opened", { package: interestRef.current });
        }
      } else if (event === "calendly.date_and_time_selected") {
        setTimeChosen(true);
      } else if (event === "calendly.event_scheduled") {
        // The only signal we treat as a booking: Calendly confirmed it.
        setStatus("confirmed");
        trackSocial("Social Booking Confirmed", { package: interestRef.current });
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Inbound UTMs only exist in the browser, so the server render uses the
  // organic defaults and the client swaps in the full attribution.
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const directUrl = hydrated
    ? bookingUrl(interest)
    : `${SOCIAL_CALENDLY_URL}?utm_source=website&utm_medium=organic&utm_campaign=social-media-management&utm_content=social-${interest}`;
  const showOverlay = status === "idle" || status === "loading";

  return (
    <div ref={sectionRef}>
      {shouldLoad && (
        <>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
            // onReady also fires on remount, so client-side navigation back
            // to this page re-initialises an already-loaded script.
            onReady={() => setScriptReady(true)}
            onError={() => {
              setStatus("failed");
              trackSocial("Social Scheduler Failed", { package: interestRef.current });
            }}
          />
        </>
      )}

      <fieldset disabled={timeChosen} className="mb-6">
        <legend className="text-sm font-bold text-purple-9 mb-1">
          Which package are you curious about? <span className="font-normal text-purple-6">(optional)</span>
        </legend>
        <p className="text-sm text-purple-6 mb-3">
          {timeChosen ? (
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Your time is selected. Mention any change of package on the call.
            </span>
          ) : (
            "It helps Lihi prepare. You can change your mind on the call."
          )}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PACKAGE_INTEREST_OPTIONS.map((opt) => (
            <label key={opt.id} className="relative cursor-pointer has-[:disabled]:cursor-not-allowed">
              <input
                type="radio"
                name="package-interest"
                value={opt.id}
                checked={interest === opt.id}
                onChange={() => {
                  setInterest(opt.id);
                  trackSocial("Social Package Interest", { package: opt.id });
                }}
                className="peer sr-only"
              />
              <span className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-[10px] border border-purple-15 bg-white px-3 py-2 text-center text-sm font-semibold text-purple-7 transition-colors peer-checked:border-brand peer-checked:bg-pink-05 peer-checked:text-purple-9 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand peer-disabled:opacity-60">
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 shrink-0 rounded-full border border-current ${interest === opt.id ? "bg-brand border-brand" : ""}`}
                />
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div aria-live="polite" className="sr-only">
        {status === "loading" && "Loading Lihi's calendar."}
        {status === "ready" && "Lihi's calendar is ready. Choose a time below."}
        {status === "failed" && "The calendar could not load. Use the direct booking link instead."}
        {status === "confirmed" && "Your call with Lihi is booked."}
      </div>

      {status === "confirmed" && (
        <div className="mb-4 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
          <CalendarCheck className="h-5 w-5 shrink-0 text-green-700 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-bold text-green-800">Your call with Lihi is booked.</p>
            <p className="text-sm text-purple-7 mt-0.5">
              Calendly has sent the confirmation and invite to the email you entered. Bring your priorities
              and any questions about volume or channels.
            </p>
          </div>
        </div>
      )}

      <div className="relative">
        {/* Stays mounted and laid out under the fallback, so a calendar that
            loads after the timeout can still take over. */}
        <div
          ref={containerRef}
          inert={status === "failed"}
          className="overflow-hidden rounded-2xl border border-purple-15 bg-white h-[1040px] sm:h-[720px]"
          style={{ minWidth: 300 }}
          aria-label="Book a call with Lihi Pinto"
          role="region"
        />
        {showOverlay && (
          <div className="absolute inset-0 flex flex-col items-center justify-start gap-3 rounded-2xl border border-purple-15 bg-white pt-24 text-center">
            <Loader2 className="h-6 w-6 text-brand-dark animate-spin motion-reduce:animate-none" aria-hidden="true" />
            <p className="font-semibold text-purple-8">Loading Lihi&apos;s calendar</p>
            <p className="text-sm text-purple-6 max-w-xs">
              You will see available times first. Calendly asks for your details after you pick one.
            </p>
          </div>
        )}
        {status === "failed" && (
          <div className="absolute inset-0 flex flex-col items-center justify-start rounded-2xl border border-purple-15 bg-purple-05 px-6 pt-24 text-center">
            <p className="font-extrabold text-purple-9 text-lg mb-2">The calendar did not load here.</p>
            <p className="text-purple-7 mb-5 max-w-md mx-auto">
              A browser extension or network setting may be blocking it. You can still book directly with Lihi.
            </p>
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] rounded-[10px] bg-brand-dark px-6 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Open Lihi&apos;s calendar <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <p className="text-sm text-purple-6 mt-4">
              Or email{" "}
              <a href="mailto:lihi@tripleandco.com" className="font-semibold text-brand-dark underline underline-offset-2">
                lihi@tripleandco.com
              </a>
            </p>
          </div>
        )}
      </div>

      {status !== "failed" && (
        <p className="text-sm text-purple-6 mt-4 text-center">
          Calendar not working?{" "}
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-dark underline underline-offset-2"
          >
            Open it in a new tab<span className="sr-only"> (opens in a new tab)</span>
          </a>{" "}
          or email{" "}
          <a href="mailto:lihi@tripleandco.com" className="font-semibold text-brand-dark underline underline-offset-2">
            lihi@tripleandco.com
          </a>
          .
        </p>
      )}
    </div>
  );
}
