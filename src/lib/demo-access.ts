import { createHmac, timingSafeEqual } from "crypto";

/**
 * Shared-access-code gate for internal client dashboards (e.g. /demo-intelligence).
 * A correct code mints an HMAC-signed cookie; the proxy verifies it on every request.
 * Not a full auth system — one shared code per deployment, rotate via env vars.
 */

export const ACCESS_COOKIE = "dt_client_access";
export const ACCESS_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function secret(): string {
  return process.env.DEMO_ACCESS_SECRET ?? "";
}

function b64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function sign(payload: string): string {
  return b64url(createHmac("sha256", secret()).update(payload).digest());
}

/** Mint a signed token of the form `<payloadB64>.<sig>`. */
export function createAccessToken(): string {
  const payload = b64url(JSON.stringify({ v: 1, iat: Date.now() }));
  return `${payload}.${sign(payload)}`;
}

/** Verify a token's HMAC and freshness. Returns true only for untampered, unexpired tokens. */
export function verifyAccessToken(token: string | undefined | null): boolean {
  if (!token || !secret()) return false;
  const dot = token.lastIndexOf(".");
  if (dot < 1) return false;

  const payload = token.slice(0, dot);
  const providedSig = token.slice(dot + 1);
  const expectedSig = sign(payload);

  const a = Buffer.from(providedSig);
  const b = Buffer.from(expectedSig);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

  try {
    const json = JSON.parse(
      Buffer.from(payload.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString()
    ) as { iat?: number };
    if (typeof json.iat !== "number") return false;
    return Date.now() - json.iat < ACCESS_MAX_AGE * 1000;
  } catch {
    return false;
  }
}

/**
 * Constant-time comparison of a submitted code against the configured access code.
 * Both sides are trimmed and lower-cased so stray whitespace or capitalization
 * (a common cause of "incorrect code" when typing on a phone/laptop) still works.
 */
export function isValidAccessCode(submitted: string): boolean {
  const expected = (process.env.DEMO_ACCESS_CODE ?? "").trim().toLowerCase();
  if (!expected) return false;
  const provided = (submitted ?? "").trim().toLowerCase();
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
