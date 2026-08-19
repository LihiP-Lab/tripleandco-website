import { NextRequest } from "next/server";
import { ogCard, ogVisibilityScoreCard } from "@/lib/og";
import { normalizeDomain, runVisibilityCheck } from "@/lib/visibility-check";

export const runtime = "nodejs";
export const maxDuration = 30;

const CACHE = "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800";

function genericCard() {
  return ogCard({
    eyebrow: "Free AI Visibility Checker",
    title: "Can AI Engines Read Your Site?",
    subtitle:
      "Instant 0 to 100 score: llms.txt, AI crawler access, structured data, and Bing indexability.",
  });
}

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("domain") ?? "";
  const domain = normalizeDomain(raw.slice(0, 253));
  if (!domain) return genericCard();

  try {
    const result = await runVisibilityCheck(domain);
    if ("error" in result) return genericCard();
    return ogVisibilityScoreCard({
      domain: result.domain,
      score: result.score,
      grade: result.grade,
      headers: { "Cache-Control": CACHE },
    });
  } catch {
    return genericCard();
  }
}
