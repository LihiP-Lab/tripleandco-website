import { track } from "@vercel/analytics";
import type { PackageInterest } from "@/lib/social-packages";

// Custom events for /social-media-management. Values are fixed labels only:
// never put names, emails, or anything a visitor typed into these payloads.
type SocialEvent =
  | { name: "Social CTA Click"; props: { location: string; package: PackageInterest | "none" } }
  | { name: "Social Package Interest"; props: { package: PackageInterest } }
  | { name: "Social Scheduler Opened"; props: { package: PackageInterest } }
  | { name: "Social Scheduler Failed"; props: { package: PackageInterest } }
  | { name: "Social Booking Confirmed"; props: { package: PackageInterest } };

export function trackSocial<E extends SocialEvent>(name: E["name"], props: E["props"]) {
  try {
    track(name, props);
  } catch {
    // Analytics must never break the booking journey.
  }
}

/** Fired by any "Book a Call" CTA; the booking section listens for it. */
export const BOOK_CALL_EVENT = "social:book-call";
export type BookCallDetail = { package?: PackageInterest };
