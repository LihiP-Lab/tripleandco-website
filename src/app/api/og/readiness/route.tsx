import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ogCard, OG_SIZE } from "@/lib/og";
import {
  DIMENSIONS,
  decodeAnswers,
  dimensionScore,
  scoreOf,
  tierFor,
  type Answers,
} from "@/lib/readiness";
import { normalizeDomain } from "@/lib/visibility-check";

export const runtime = "nodejs";
export const maxDuration = 30;

const CACHE = "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800";

function genericCard() {
  return ogCard({
    eyebrow: "Free Revenue Assessment",
    title: "Score Your Revenue Operation in 3 Minutes.",
    subtitle:
      "20 areas, 7 dimensions, 0 to 100. Your score, the shape of your gaps, and the three things to fix first.",
  });
}

/**
 * Load everything the card needs. Kept separate from the render so no JSX is
 * constructed inside a try/catch (React would not catch render errors there
 * anyway, and the lint rule enforces it).
 */
async function loadCardData(answers: Answers) {
  const score = scoreOf(answers);
  const tier = tierFor(score);
  const root = process.cwd();
  const [interRegular, interExtraBold, logo, lihi, atlas] = await Promise.all([
    readFile(join(root, "src/assets/fonts/inter-latin-400-normal.woff")),
    readFile(join(root, "src/assets/fonts/inter-latin-800-normal.woff")),
    readFile(join(root, "public/images/logos/logo-bright.png")),
    readFile(join(root, "public/images/og/lihi.png")),
    readFile(join(root, "public/images/og/atlas.png")),
  ]);
  const bars = DIMENSIONS.map((d) => ({
    label: d.short,
    pct: dimensionScore(answers, d.id).pct,
  }));
  return { score, tier, interRegular, interExtraBold, logo, lihi, atlas, bars };
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("r") ?? "";
  const answers = decodeAnswers(code.slice(0, 40));
  if (!answers) return genericCard();
  const domain = normalizeDomain(
    (request.nextUrl.searchParams.get("d") ?? "").slice(0, 253)
  );

  let data: Awaited<ReturnType<typeof loadCardData>>;
  try {
    data = await loadCardData(answers);
  } catch {
    return genericCard();
  }

  const { score, tier, interRegular, interExtraBold, logo, lihi, atlas, bars } =
    data;
  const b64 = (buf: Buffer) => `data:image/png;base64,${buf.toString("base64")}`;

  return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 72px",
            position: "relative",
            backgroundColor: "#1B161F",
            backgroundImage:
              "radial-gradient(circle at 85% 0%, rgba(254,52,101,0.22), transparent 55%), radial-gradient(circle at 0% 100%, rgba(137,109,156,0.28), transparent 55%)",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: 40,
              bottom: 0,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b64(lihi)} width={272} height={402} alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={b64(atlas)}
              width={132}
              height={167}
              style={{ marginLeft: -26 }}
              alt=""
            />
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b64(logo)} width={182} height={50} alt="" />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 21,
                fontWeight: 800,
                color: "#FE3465",
                letterSpacing: 5,
                textTransform: "uppercase",
              }}
            >
              AI Revenue Readiness Score
              {domain ? (
                <div
                  style={{
                    display: "flex",
                    marginLeft: 18,
                    color: "#E7E2EB",
                    letterSpacing: 1,
                    textTransform: "lowercase",
                  }}
                >
                  {domain}
                </div>
              ) : null}
            </div>

            <div style={{ display: "flex", alignItems: "baseline", marginTop: 10 }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 128,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {score}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 42,
                  fontWeight: 800,
                  color: "#8E8598",
                  marginLeft: 8,
                }}
              >
                /100
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: 26,
                  fontSize: 32,
                  fontWeight: 800,
                  color: tier.color,
                }}
              >
                {tier.name}
              </div>
            </div>

            {/* seven dimension bars */}
            <div style={{ display: "flex", gap: 10, marginTop: 26 }}>
              {bars.map((b) => (
                <div
                  key={b.label}
                  style={{ display: "flex", flexDirection: "column", width: 78 }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: 8,
                      width: "100%",
                      borderRadius: 4,
                      backgroundColor: "rgba(255,255,255,0.14)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        height: 8,
                        width: Math.max(4, Math.round(78 * b.pct)),
                        borderRadius: 4,
                        backgroundImage:
                          "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: 7,
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#8E8598",
                    }}
                  >
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 22, color: "#8E8598" }}>
            tripleandco.com/ai-revenue-readiness-score
          </div>
        </div>
      ),
      {
        ...OG_SIZE,
        headers: { "Cache-Control": CACHE },
        fonts: [
          { name: "Inter", data: interRegular, weight: 400, style: "normal" },
          { name: "Inter", data: interExtraBold, weight: 800, style: "normal" },
        ],
      }
  );
}
