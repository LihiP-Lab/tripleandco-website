import { NextRequest } from "next/server";

const HUBSPOT_PORTAL_ID = "148346424";
const HUBSPOT_FORM_ID = "7bc36ac2-4cef-4498-b86a-76e68ba33187";
const HUBSPOT_ENDPOINT = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
const NOTIFY_EMAIL = "lihi@tripleandco.com";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, email, company, message } = body as {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    message: string;
  };

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
          subject: `New lead: ${firstName || ""} ${lastName || ""} from ${company || "N/A"}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p>${message || "No message provided"}</p>
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
