import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_COOKIE, verifyAccessToken } from "@/lib/demo-access";

/** Paths behind the shared-access-code gate. Add future client routes here. */
const PROTECTED_PREFIXES = ["/demo-intelligence"];
const ACCESS_PATH = "/demo-intelligence/access";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The access page and its assets must stay reachable, or the gate loops.
  if (pathname === ACCESS_PATH) return NextResponse.next();

  const isProtected = PROTECTED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  if (!isProtected) return NextResponse.next();

  if (verifyAccessToken(request.cookies.get(ACCESS_COOKIE)?.value)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = ACCESS_PATH;
  url.search = `?next=${encodeURIComponent(pathname)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/demo-intelligence", "/demo-intelligence/:path*"],
};
