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
    // Cap length so an arbitrary request body can't inflate log volume.
    domain = String(body.domain ?? "").slice(0, 253);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = await runVisibilityCheck(domain);
  if ("error" in result) {
    console.log(
      JSON.stringify({
        event: "visibility_check_failed",
        domain,
        reason: result.error,
        kind: result.kind ?? null,
        ts: new Date().toISOString(),
      })
    );
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
  console.log(
    JSON.stringify({
      event: "visibility_check",
      domain: result.domain,
      score: result.score,
      grade: result.grade,
      ts: new Date().toISOString(),
    })
  );
  return Response.json(result);
}
