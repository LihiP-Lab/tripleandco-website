"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SOCIAL_ROUTE } from "@/lib/social-packages";
import { BookCallLink } from "@/components/social/BookCallLink";

const ctaCls =
  "flex items-center justify-center gap-2 w-full rounded-[10px] bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark";

export function MobileCTA() {
  const [show, setShow] = useState(false);
  const [bookingVisible, setBookingVisible] = useState(false);
  const pathname = usePathname();
  const isConsole = pathname === "/agents";
  const isSocial = pathname === SOCIAL_ROUTE;

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the social page the bar books on-page, and steps aside while the
  // booking section is on screen so it never covers the scheduler.
  useEffect(() => {
    if (!isSocial) return;
    const el = document.getElementById("book");
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setBookingVisible(entry.isIntersecting));
    io.observe(el);
    return () => {
      io.disconnect();
      setBookingVisible(false);
    };
  }, [isSocial]);

  const visible = show && !bookingVisible;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden p-3 backdrop-blur-md border-t ${
        isConsole
          ? "bg-[#0F0F1A]/95 border-white/10"
          : "bg-white/95 border-purple-15"
      }`}
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
      }}
      inert={!visible}
    >
      {isSocial ? (
        <BookCallLink location="mobile-sticky" className={ctaCls}>
          Book a Call with Lihi <span aria-hidden="true">&#8594;</span>
        </BookCallLink>
      ) : (
        <Link href="/revenue-diagnostic#book" className={ctaCls}>
          Book a Diagnostic Call <span>&#8594;</span>
        </Link>
      )}
    </div>
  );
}
