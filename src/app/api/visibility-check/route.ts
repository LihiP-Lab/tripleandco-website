import { NextRequest } from "next/server";
import { runVisibilityCheck } from "@/lib/visibility-check";

export const runtime = "nodejs";
export const maxDuration = 30;

/* ------------------------------------------------------------------ */
/* Rate limiting (per warm lambda instance; cheap belt-and-braces)     */
/* ------------------------------------------------------------------ */

const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 60_000;
  const recent = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 10;
}


export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many checks from this network. Try again in a minute." },
      { status: 429 }
    );
  }

  let domain = "";
  try {
    const body = await request.json();
    domain = String(body.domain ?? "");
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = await runVisibilityCheck(domain);
  if ("error" in result) {
    return Response.json(
      {
        error: result.error,
        kind: result.kind,
        provider: result.provider,
        httpStatus: result.httpStatus,
      },
      { status: result.status }
    );
  }
  return Response.json(result);
}
