import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgCardProps = {
  /** Small pink uppercase label above the title */
  eyebrow?: string;
  /** Main headline on the card */
  title: string;
  /** Optional one-line supporting text under the title */
  subtitle?: string;
};

/**
 * Shared branded 1200x630 Open Graph card.
 * Dark brand background, bright logo, pink accent, Inter type,
 * with Lihi and two agents on the right.
 * Used by every opengraph-image.tsx route file.
 */
export async function ogCard({ eyebrow = "Triple & Co.", title, subtitle }: OgCardProps) {
  const root = process.cwd();
  const [interRegular, interExtraBold, logo, lihi, camille, atlas] = await Promise.all([
    readFile(join(root, "src/assets/fonts/inter-latin-400-normal.woff")),
    readFile(join(root, "src/assets/fonts/inter-latin-800-normal.woff")),
    readFile(join(root, "public/images/logos/logo-bright.png")),
    readFile(join(root, "public/images/og/lihi.png")),
    readFile(join(root, "public/images/og/camille.png")),
    readFile(join(root, "public/images/og/atlas.png")),
  ]);
  const b64 = (buf: Buffer) => `data:image/png;base64,${buf.toString("base64")}`;

  // Scale the headline down as it gets longer so it never overflows.
  const titleSize = title.length > 60 ? 46 : title.length > 34 ? 54 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
          backgroundColor: "#1B161F",
          backgroundImage:
            "radial-gradient(circle at 85% 0%, rgba(254,52,101,0.22), transparent 55%), radial-gradient(circle at 0% 100%, rgba(137,109,156,0.28), transparent 55%)",
          fontFamily: "Inter",
        }}
      >
        {/* Lihi + agents, anchored bottom right */}
        <div
          style={{
            position: "absolute",
            right: 36,
            bottom: 0,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b64(camille)} width={196} height={180} style={{ marginRight: -34, marginBottom: 0 }} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b64(lihi)} width={318} height={470} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b64(atlas)} width={150} height={190} style={{ marginLeft: -30 }} alt="" />
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={b64(logo)} width={194} height={54} alt="" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 800,
              color: "#FE3465",
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: titleSize,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.08,
              maxWidth: 620,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 26,
                fontWeight: 400,
                color: "#B9B0C2",
                lineHeight: 1.35,
                maxWidth: 580,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#8E8598" }}>
          tripleandco.com
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interExtraBold, weight: 800, style: "normal" },
      ],
    }
  );
}
