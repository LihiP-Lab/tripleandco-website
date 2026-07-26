// WhatsApp click-to-chat configuration.
//
// PHONE must be in full international format, digits only (no "+", spaces, or
// dashes), e.g. Israel mobile 054-123-4567 -> "972541234567".
// Set NEXT_PUBLIC_WHATSAPP_PHONE in the environment to override without a code
// change; the fallback below is used when the env var is absent.
export const WHATSAPP_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "972586307748";

// Default message pre-filled in the user's WhatsApp composer.
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Lihi, I found Triple & Co. and I'd like to talk about growing my B2B revenue.";

export function whatsappHref(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
