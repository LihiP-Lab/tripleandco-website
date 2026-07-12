import { NextRequest } from "next/server";
import {
  describeFailedResponse,
  escapeHtml,
  readJsonObject,
  readString,
} from "@/lib/http";

const HUBSPOT_PORTAL_ID = "148346424";
const HUBSPOT_FORM_ID = "7bc36ac2-4cef-4498-b86a-76e68ba33187";
const HUBSPOT_ENDPOINT = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const NOTIFY_EMAIL = "lihi@tripleandco.com";

export async function POST(request: NextRequest) {
  const body = await readJsonObject(request);
  if (!body) {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const firstName = readString(body, "firstName");
  const lastName = readString(body, "lastName");
  const email = readString(body, "email");
  const company = readString(body, "company");
  const message = readString(body, "message");

  if (!email) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }

  const hubspotPayload = {
    fields: [
      { objectTypeId: "0-1", name: "firstname", value: firstName || "" },
      { objectTypeId: "0-1", name: "lastname", value: lastName || "" },
      { objectTypeId: "0-1", name: "email", value: email },
      { objectTypeId: "0-1", name: "company", value: company || "" },
      { objectTypeId: "0-1", name: "message", value: message || "" },
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
      console.error(
        "HubSpot submission failed:",
        await describeFailedResponse(hsResponse)
      );
      return Response.json(
        { error: "Failed to submit to CRM" },
        { status: 502 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
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
              from: "Triple&Co Website <notifications@tripleandco.com>",
              to: NOTIFY_EMAIL,
              subject: `New lead: ${firstName} ${lastName} from ${company || "N/A"}`,
              html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message || "No message provided")}</p>
                <hr />
                <p style="color: #666; font-size: 12px;">
                  Submitted via tripleandco.com contact form.
                  This lead has also been added to HubSpot.
                </p>
              `,
            }),
          }
        );

        if (!notificationResponse.ok) {
          console.error(
            "Email notification failed:",
            await describeFailedResponse(notificationResponse)
          );
        }
      } catch (error) {
        console.error("Email notification failed:", error);
      }
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
