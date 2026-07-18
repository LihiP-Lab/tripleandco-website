import { NextRequest } from "next/server";

const NOTIFY_EMAIL = "lihi@tripleandco.com";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { proposal, name, role, date, phases } = body as {
    proposal: string;
    name: string;
    role: string;
    date: string;
    phases: string;
  };

  if (!name || !proposal) {
    return Response.json(
      { error: "Name and proposal are required" },
      { status: 400 }
    );
  }

  const timestamp = new Date().toISOString();
  const signature = { proposal, name, role, date, phases, timestamp };

  console.log("Proposal signed:", JSON.stringify(signature));

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
          subject: `Proposal accepted: ${proposal}, signed by ${name}`,
          html: `
            <h2>Proposal Accepted</h2>
            <p><strong>Proposal:</strong> ${proposal}</p>
            <p><strong>Signed by:</strong> ${name}</p>
            <p><strong>Title:</strong> ${role}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Phases accepted:</strong> ${phases}</p>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
            <hr />
            <p style="color: #666; font-size: 12px;">
              Signed via tripleandco.com/proposals/${proposal}
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
