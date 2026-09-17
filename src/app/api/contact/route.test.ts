import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
} from "vitest";
import { NextRequest } from "next/server";
import { POST } from "./route";

const HUBSPOT_ENDPOINT =
  "https://api-eu1.hsforms.com/submissions/v3/integration/submit/148346424/7bc36ac2-4cef-4498-b86a-76e68ba33187";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

interface ContactBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
}

function makeRequest(body: ContactBody, referer?: string): NextRequest {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (referer) headers.referer = referer;
  return new NextRequest("https://tripleandco.com/api/contact", {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
}

function okResponse() {
  return new Response("{}", { status: 200 });
}

describe("POST /api/contact", () => {
  const validBody: ContactBody = {
    firstName: "Ada",
    lastName: "Lovelace",
    email: "ada@example.com",
    company: "Analytical Engines",
    message: "Hello there",
  };

  beforeEach(() => {
    delete process.env.RESEND_API_KEY;
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("rejects a submission without an email (400)", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest({ firstName: "NoEmail" }));

    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ error: "Email is required" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("submits the mapped fields to HubSpot and returns success", async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse());
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(
      makeRequest(validBody, "https://tripleandco.com/contact")
    );

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ success: true });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(HUBSPOT_ENDPOINT);
    const payload = JSON.parse(init.body);
    const fieldMap = Object.fromEntries(
      payload.fields.map((f: { name: string; value: string }) => [
        f.name,
        f.value,
      ])
    );
    expect(fieldMap).toMatchObject({
      firstname: "Ada",
      lastname: "Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines",
      message: "Hello there",
    });
    expect(payload.context.pageUri).toBe("https://tripleandco.com/contact");
  });

  it("defaults optional fields to empty strings and pageUri to the site root", async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse());
    vi.stubGlobal("fetch", fetchMock);

    await POST(makeRequest({ email: "only@example.com" }));

    const [, init] = fetchMock.mock.calls[0];
    const payload = JSON.parse(init.body);
    const fieldMap = Object.fromEntries(
      payload.fields.map((f: { name: string; value: string }) => [
        f.name,
        f.value,
      ])
    );
    expect(fieldMap).toMatchObject({
      firstname: "",
      lastname: "",
      email: "only@example.com",
      company: "",
      message: "",
    });
    expect(payload.context.pageUri).toBe("https://tripleandco.com");
  });

  it("returns 502 when the HubSpot submission fails", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response("bad", { status: 500 }));
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest(validBody));

    expect(res.status).toBe(502);
    await expect(res.json()).resolves.toEqual({
      error: "Failed to submit to CRM",
    });
  });

  it("also sends a Resend notification email when RESEND_API_KEY is set", async () => {
    process.env.RESEND_API_KEY = "re_test_key";
    const fetchMock = vi.fn().mockResolvedValue(okResponse());
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest(validBody));

    expect(res.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    const [url, init] = fetchMock.mock.calls[1];
    expect(url).toBe(RESEND_ENDPOINT);
    expect(init.headers.Authorization).toBe("Bearer re_test_key");
  });

  it("returns 500 when a network error is thrown", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error("network down"));
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest(validBody));

    expect(res.status).toBe(500);
    await expect(res.json()).resolves.toEqual({
      error: "Internal server error",
    });
  });
});
