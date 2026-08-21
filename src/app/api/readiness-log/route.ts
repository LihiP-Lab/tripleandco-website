import { NextRequest } from "next/server";
import { decodeAnswers, scoreOf, tierFor } from "@/lib/readiness";

export const runtime = "nodejs";
export const maxDuration = 5;

/**
 * Completion beacon for the AI Revenue Readiness Score. The assessment runs
 * entirely client-side, so this is the only server-side signal that someone
 * finished it. Mirrors the structured logging on /api/visibility-check.
 */
export async function POST(request: NextRequest) {
  let code = "";
  let domain = "";
  let measured = false;
  try {
    const body = await request.json();
    code = String(body.code ?? "").slice(0, 40);
    domain = String(body.domain ?? "").slice(0, 253);
    measured = body.measured === true;
  } catch {
    return new Response(null, { status: 400 });
  }

  const answers = decodeAnswers(code);
  if (!answers) return new Response(null, { status: 400 });

  const score = scoreOf(answers);
  console.log(
    JSON.stringify({
      event: "readiness_score_completed",
      score,
      tier: tierFor(score).name,
      answers: code,
      domain: measured ? domain : null,
      measured,
      ts: new Date().toISOString(),
    })
  );
  return new Response(null, { status: 204 });
}
