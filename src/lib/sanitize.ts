/**
 * Escape a string for safe interpolation into HTML markup.
 * Prevents HTML/email injection when user-supplied values are embedded
 * into notification email bodies.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Coerce an unknown value to a trimmed string and cap its length.
 * Non-string values become an empty string.
 */
export function cleanString(value: unknown, maxLength = 2000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Basic email shape validation. */
export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value) && value.length <= 254;
}
