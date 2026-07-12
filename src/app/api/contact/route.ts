import { NextRequest } from "next/server";
import { cleanString, escapeHtml, isValidEmail } from "@/lib/sanitize";

const HUBSPOT_PORTAL_ID = "148346424";
const HUBSPOT_FORM_ID = "7bc36ac2-4cef-4498-b86a-76e68ba33187";
const HUBSPOT_ENDPOINT = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const NOTIFY_EMAIL = "lihi@tripleandco.com";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const source = (body ?? {}) as Record<string, unknown>;
  const firstName = cleanString(source.firstName, 100);
  const lastName = cleanString(source.lastName, 100);
  const email = cleanString(source.email, 254);
  const company = cleanString(source.company, 200);
  const message = cleanString(source.message, 5000);

  if (!email || !isValidEmail(email)) {
    return Response.json(
      { error: "A valid email is required" },
      { status: 400 }
    );
  }

  const hubspotPayload = {
    fields: [
      { objectTypeId: "0-1", name: "firstname", value: firstName },
      { objectTypeId: "0-1", name: "lastname", value: lastName },
      { objectTypeId: "0-1", name: "email", value: email },
      { objectTypeId: "0-1", name: "company", value: company },
      { objectTypeId: "0-1", name: "message", value: message },
    ],
    context: {
      pageUri: request.headers.get("referer") || "https://tripleandco.com",
      pageName: "Triple&Co Contact Form",
    },
  };

  try {
    const hsResponse = await fetch(HUBSPOT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotPayload),
    });

    if (!hsResponse.ok) {
      const errorText = await hsResponse.text();
      console.error("HubSpot submission failed:", errorText);
      return Response.json(
        { error: "Failed to submit to CRM" },
        { status: 502 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Triple&Co Website <notifications@tripleandco.com>",
          to: NOTIFY_EMAIL,
          subject: `New lead: ${firstName} ${lastName} from ${company || "N/A"}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Company:</strong> ${escapeHtml(company) || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message) || "No message provided"}</p>
            <hr />
            <p style="color: #666; font-size: 12px;">
              Submitted via tripleandco.com contact form.
              This lead has also been added to HubSpot.
            </p>
          `,
        }),
      }).catch((err) => {
        console.error("Email notification failed:", err);
      });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
