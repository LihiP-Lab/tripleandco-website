import { NextRequest } from "next/server";
import {
  AREAS,
  DIMENSIONS,
  DIMENSION_BY_ID,
  POINTS,
  decodeAnswers,
  dimensionScore,
  scoreOf,
  tierFor,
  topThreeActions,
  type Answers,
} from "@/lib/readiness";

export const runtime = "nodejs";
export const maxDuration = 15;

const HUBSPOT_PORTAL_ID = "148346424";
const HUBSPOT_FORM_ID = "7bc36ac2-4cef-4498-b86a-76e68ba33187";
const HUBSPOT_ENDPOINT = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const NOTIFY_EMAIL = "lihi@tripleandco.com";
const SITE = "https://www.tripleandco.com";

const hits = new Map<string, number[]>();
function rateLimited(
  store: Map<string, number[]>,
  key: string,
  windowMs: number,
  max: number
): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;
  const recent = (store.get(key) ?? []).filter((t) => t > windowStart);
  recent.push(now);
  store.set(key, recent);
  if (store.size > 5000) store.clear();
  return recent.length > max;
}

const recipientHits = new Map<string, number[]>();

/** Peek at a window without recording, so failed sends never burn quota. */
function overLimit(
  store: Map<string, number[]>,
  key: string,
  windowMs: number,
  max: number
): boolean {
  const now = Date.now();
  const recent = (store.get(key) ?? []).filter((t) => t > now - windowMs);
  store.set(key, recent);
  return recent.length >= max;
}

function recordHit(store: Map<string, number[]>, key: string): void {
  const arr = store.get(key) ?? [];
  arr.push(Date.now());
  store.set(key, arr);
  if (store.size > 5000) store.clear();
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function reportHtml(
  answers: Answers,
  measured: boolean,
  checkerScore: number | null,
  resultUrl: string
): string {
  const score = scoreOf(answers);
  const tier = tierFor(score);
  const actions = topThreeActions(answers);

  const dimensionRows = DIMENSIONS.map((d) => {
    const s = dimensionScore(answers, d.id);
    return `<tr>
      <td style="padding:6px 12px 6px 0;font-weight:600;">${esc(d.label)}</td>
      <td style="padding:6px 0;text-align:right;font-variant-numeric:tabular-nums;">${s.points}/${s.max}</td>
    </tr>`;
  }).join("");

  const areaBlocks = DIMENSIONS.map((d) => {
    const rows = AREAS.filter((a) => a.dimension === d.id)
      .map((a) => {
        const idx = answers[a.id] ?? 0;
        const isC3 = a.id === "C3";
        const label =
          isC3 && measured
            ? `Measured live${checkerScore != null ? `, checker score ${checkerScore}/100` : ""}`
            : esc(a.options[idx] ?? a.options[0]);
        return `<p style="margin:0 0 10px;">
          <strong>${esc(a.title)}</strong> (+${POINTS[idx] ?? 0} pts)<br/>
          <span style="color:#555;">${label}</span>
        </p>`;
      })
      .join("");
    return `<h3 style="margin:22px 0 8px;color:#1B161F;">${esc(d.label)}</h3>${rows}`;
  }).join("");

  const actionBlocks = actions
    .map(
      (a, i) => `<p style="margin:0 0 16px;">
        <strong>${i + 1}. ${esc(a.action.title)}</strong><br/>
        ${esc(a.action.claim)}<br/>
        <strong>The lever:</strong> ${esc(a.action.lever)}<br/>
        <strong>First step:</strong> ${esc(a.action.step)}
      </p>`
    )
    .join("");

  return `<div style="font-family:Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto;color:#1B161F;">
    <h1 style="margin:0 0 4px;">Your AI Revenue Readiness Score: ${score}/100</h1>
    <p style="margin:0 0 18px;font-size:18px;"><strong>${esc(tier.name)}.</strong> ${esc(tier.line)}</p>
    <h2 style="margin:24px 0 8px;">The seven dimensions</h2>
    <table style="border-collapse:collapse;">${dimensionRows}</table>
    <h2 style="margin:28px 0 8px;">Three things to fix first</h2>
    ${actionBlocks}
    <h2 style="margin:28px 0 0;">All 20 areas, with your answer on each</h2>
    ${areaBlocks}
    <p style="margin:26px 0 8px;">
      <a href="${resultUrl}" style="color:#FE3465;">View your result online</a>
      &nbsp;&middot;&nbsp;
      <a href="${SITE}/revenue-diagnostic" style="color:#FE3465;">Book a 30-minute Revenue Diagnostic</a>
    </p>
    <hr style="border:none;border-top:1px solid #ddd;margin:20px 0;"/>
    <p style="color:#888;font-size:12px;">Sent by Triple &amp; Co. because you requested this report at ${SITE}/ai-revenue-readiness-score.</p>
  </div>`;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(hits, ip, 60_000, 5)) {
    return Response.json(
      { error: "Too many requests from this network. Try again in a minute." },
      { status: 429 }
    );
  }

  let email = "";
  let code = "";
  let domain = "";
  let measured = false;
  let checkerScore: number | null = null;
  try {
    const body = await request.json();
    email = String(body.email ?? "").slice(0, 254);
    code = String(body.code ?? "").slice(0, 40);
    domain = String(body.domain ?? "").slice(0, 253);
    measured = body.measured === true;
    checkerScore =
      typeof body.checkerScore === "number" &&
      body.checkerScore >= 0 &&
      body.checkerScore <= 100
        ? Math.round(body.checkerScore)
        : null;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "A valid email is required." }, { status: 400 });
  }
  const answers = decodeAnswers(code);
  if (!answers) {
    return Response.json({ error: "Invalid result code." }, { status: 400 });
  }

  if (overLimit(recipientHits, email.toLowerCase(), 3_600_000, 3)) {
    return Response.json(
      { error: "This address already received the report. Check your inbox." },
      { status: 429 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error("readiness-report: RESEND_API_KEY is not configured");
    return Response.json(
      { error: "Report delivery is not available right now." },
      { status: 503 }
    );
  }

  const score = scoreOf(answers);
  const tier = tierFor(score);
  const resultUrl = `${SITE}/ai-revenue-readiness-score?r=${encodeURIComponent(code)}`;

  const sendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: "Triple&Co <notifications@tripleandco.com>",
      to: email,
      subject: `Your AI Revenue Readiness Score: ${score}/100 (${tier.name})`,
      html: reportHtml(answers, measured, checkerScore, resultUrl),
    }),
  });
  if (!sendRes.ok) {
    console.error("readiness-report: send failed", await sendRes.text());
    return Response.json(
      { error: "The report could not be sent. Try again." },
      { status: 502 }
    );
  }
  recordHit(recipientHits, email.toLowerCase());

  console.log(
    JSON.stringify({
      event: "readiness_report_requested",
      score,
      tier: tier.name,
      domain: measured ? domain : null,
      measured,
      ts: new Date().toISOString(),
    })
  );

  const hubspotPayload = {
    fields: [
      { objectTypeId: "0-1", name: "email", value: email },
      { objectTypeId: "0-1", name: "company", value: domain || "" },
      {
        objectTypeId: "0-1",
        name: "message",
        value: [
          "AI Revenue Readiness Score report requested",
          `Score: ${score}/100 (${tier.name})`,
          `Dimensions: ${DIMENSIONS.map((d) => {
            const s = dimensionScore(answers, d.id);
            return `${d.label} ${s.points}/${s.max}`;
          }).join("; ")}`,
          `AI search visibility: ${measured ? `measured live, checker score ${checkerScore ?? "n/a"}` : "self-reported"}`,
          `Top three actions: ${topThreeActions(answers)
            .map((a) => `${a.id} (${DIMENSION_BY_ID[a.dimension].label})`)
            .join(", ")}`,
          `Result link: ${resultUrl}`,
        ].join("\n"),
      },
    ],
    context: {
      pageUri: resultUrl,
      pageName: "AI Revenue Readiness Score",
    },
  };
  try {
    const hs = await fetch(HUBSPOT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotPayload),
    });
    if (!hs.ok) console.error("readiness-report: HubSpot failed", await hs.text());
  } catch (err) {
    console.error("readiness-report: HubSpot error", err);
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: "Triple&Co Website <notifications@tripleandco.com>",
      to: NOTIFY_EMAIL,
      subject: `Readiness Score lead: ${email} scored ${score}/100 (${tier.name})`,
      html: `<p><strong>${esc(email)}</strong> requested the full readiness report.</p>
        <p>Score: ${score}/100 (${esc(tier.name)})${measured && domain ? `, domain: ${esc(domain)}` : ""}</p>
        <p><a href="${resultUrl}">Open their result</a></p>`,
    }),
  }).catch((err) => {
    console.error("readiness-report: notify failed", err);
  });

  return Response.json({ success: true });
}
