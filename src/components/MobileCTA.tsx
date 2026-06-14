"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCTA() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isConsole = pathname === "/agents";

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden p-3 backdrop-blur-md border-t ${
        isConsole
          ? "bg-[#0F0F1A]/95 border-white/10"
          : "bg-white/95 border-purple-15"
      }`}
      style={{
        transform: show ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <Link
        href="/revenue-diagnostic#book"
        className="flex items-center justify-center gap-2 w-full rounded-[10px] bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Book a Diagnostic Call <span>&#8594;</span>
      </Link>
    </div>
  );
}
