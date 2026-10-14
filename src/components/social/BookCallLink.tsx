"use client";

import type { ReactNode } from "react";
import { BOOK_CALL_EVENT, trackSocial, type BookCallDetail } from "@/lib/social-analytics";
import type { PackageInterest } from "@/lib/social-packages";

interface BookCallLinkProps {
  /** Where on the page the CTA sits, e.g. "hero" or "package-growth". */
  location: string;
  /** Package of interest to carry into the booking step, if any. */
  packageId?: PackageInterest;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

/**
 * Every primary CTA on the page is this link: it jumps to the on-page
 * booking section, carries the package of interest, and records the CTA
 * location. Without JavaScript it is still a plain #book anchor.
 */
export function BookCallLink({ location, packageId, className, onClick, children }: BookCallLinkProps) {
  return (
    <a
      href="#book"
      className={className}
      onClick={() => {
        onClick?.();
        trackSocial("Social CTA Click", { location, package: packageId ?? "none" });
        window.dispatchEvent(
          new CustomEvent<BookCallDetail>(BOOK_CALL_EVENT, { detail: { package: packageId } }),
        );
      }}
    >
      {children}
    </a>
  );
}
