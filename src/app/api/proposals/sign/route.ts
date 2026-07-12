import { NextRequest } from "next/server";
import { cleanString, escapeHtml } from "@/lib/sanitize";

const NOTIFY_EMAIL = "lihi@tripleandco.com";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const source = (body ?? {}) as Record<string, unknown>;
  const proposal = cleanString(source.proposal, 200);
  const name = cleanString(source.name, 200);
  const role = cleanString(source.role, 200);
  const date = cleanString(source.date, 100);
  const phases = cleanString(source.phases, 500);

  if (!name || !proposal) {
    return Response.json(
      { error: "Name and proposal are required" },
      { status: 400 }
    );
  }

  const timestamp = new Date().toISOString();
  const signature = { proposal, name, role, date, phases, timestamp };

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Triple&Co Proposals <notifications@tripleandco.com>",
          to: NOTIFY_EMAIL,
          subject: `Proposal accepted: ${proposal} — signed by ${name}`,
          html: `
            <h2>Proposal Accepted</h2>
            <p><strong>Proposal:</strong> ${escapeHtml(proposal)}</p>
            <p><strong>Signed by:</strong> ${escapeHtml(name)}</p>
            <p><strong>Title:</strong> ${escapeHtml(role)}</p>
            <p><strong>Date:</strong> ${escapeHtml(date)}</p>
            <p><strong>Phases accepted:</strong> ${escapeHtml(phases)}</p>
            <p><strong>Timestamp:</strong> ${escapeHtml(timestamp)}</p>
            <hr />
            <p style="color: #666; font-size: 12px;">
              Signed via tripleandco.com/proposals/${escapeHtml(proposal)}
            </p>
          `,
        }),
      });
    } catch (err) {
      console.error("Email notification failed:", err);
    }
  }

  return Response.json({ success: true, signature });
}
