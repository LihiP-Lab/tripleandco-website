import { NextRequest } from "next/server";
import {
  describeFailedResponse,
  escapeHtml,
  readJsonObject,
  readString,
} from "@/lib/http";

const NOTIFY_EMAIL = "lihi@tripleandco.com";

export async function POST(request: NextRequest) {
  const body = await readJsonObject(request);
  if (!body) {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const proposal = readString(body, "proposal");
  const name = readString(body, "name");
  const role = readString(body, "role");
  const date = readString(body, "date");
  const phases = readString(body, "phases");

  if (!name || !proposal) {
    return Response.json(
      { error: "Name and proposal are required" },
      { status: 400 }
    );
  }

  const timestamp = new Date().toISOString();
  const signature = { proposal, name, role, date, phases, timestamp };

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error("Proposal notification is unavailable: RESEND_API_KEY is missing");
    return Response.json(
      { error: "Signature service is temporarily unavailable" },
      { status: 503 }
    );
  }

  try {
    const notificationResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Triple&Co Proposals <notifications@tripleandco.com>",
          to: NOTIFY_EMAIL,
          subject: `Proposal accepted: ${proposal}, signed by ${name}`,
          html: `
            <h2>Proposal Accepted</h2>
            <p><strong>Proposal:</strong> ${escapeHtml(proposal)}</p>
            <p><strong>Signed by:</strong> ${escapeHtml(name)}</p>
            <p><strong>Title:</strong> ${escapeHtml(role)}</p>
            <p><strong>Date:</strong> ${escapeHtml(date)}</p>
            <p><strong>Phases accepted:</strong> ${escapeHtml(phases)}</p>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
            <hr />
            <p style="color: #666; font-size: 12px;">
              Signed via tripleandco.com/proposals/${escapeHtml(proposal)}
            </p>
          `,
        }),
      }
    );

    if (!notificationResponse.ok) {
      console.error(
        "Proposal notification failed:",
        await describeFailedResponse(notificationResponse)
      );
      return Response.json(
        { error: "Failed to record signature" },
        { status: 502 }
      );
    }

    console.log("Proposal signed:", JSON.stringify(signature));
    return Response.json({ success: true, signature });
  } catch (error) {
    console.error("Proposal notification failed:", error);
    return Response.json(
      { error: "Failed to record signature" },
      { status: 502 }
    );
  }
}
