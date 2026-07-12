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

const RESEND_ENDPOINT = "https://api.resend.com/emails";

interface SignBody {
  proposal?: string;
  name?: string;
  role?: string;
  date?: string;
  phases?: string;
}

function makeRequest(body: SignBody): NextRequest {
  return new NextRequest("https://tripleandco.com/api/proposals/sign", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/proposals/sign", () => {
  const validBody: SignBody = {
    proposal: "growth-retainer",
    name: "Grace Hopper",
    role: "CEO",
    date: "2026-07-12",
    phases: "1,2,3",
  };

  beforeEach(() => {
    delete process.env.RESEND_API_KEY;
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("requires a name (400)", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest({ proposal: "x", name: "" }));

    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({
      error: "Name and proposal are required",
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("requires a proposal (400)", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest({ name: "Grace" }));

    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({
      error: "Name and proposal are required",
    });
  });

  it("returns a signature echoing the input plus an ISO timestamp", async () => {
    vi.stubGlobal("fetch", vi.fn());
    const before = Date.now();

    const res = await POST(makeRequest(validBody));

    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.signature).toMatchObject(validBody);
    expect(typeof data.signature.timestamp).toBe("string");
    const ts = Date.parse(data.signature.timestamp);
    expect(ts).toBeGreaterThanOrEqual(before);
  });

  it("does not call fetch when RESEND_API_KEY is unset", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await POST(makeRequest(validBody));

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("sends a Resend email when RESEND_API_KEY is set", async () => {
    process.env.RESEND_API_KEY = "re_test_key";
    const fetchMock = vi.fn().mockResolvedValue(new Response("{}"));
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest(validBody));

    expect(res.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(RESEND_ENDPOINT);
    expect(init.headers.Authorization).toBe("Bearer re_test_key");
    expect(init.body).toContain("growth-retainer");
  });

  it("still succeeds if the Resend email throws", async () => {
    process.env.RESEND_API_KEY = "re_test_key";
    const fetchMock = vi.fn().mockRejectedValue(new Error("resend down"));
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest(validBody));

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toMatchObject({ success: true });
    expect(console.error).toHaveBeenCalled();
  });
});
