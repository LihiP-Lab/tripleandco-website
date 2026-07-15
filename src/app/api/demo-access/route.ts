import { NextRequest } from "next/server";
import {
  ACCESS_COOKIE,
  ACCESS_MAX_AGE,
  createAccessToken,
  isValidAccessCode,
} from "@/lib/demo-access";

export async function POST(request: NextRequest) {
  const { code } = (await request.json().catch(() => ({}))) as { code?: string };

  if (!process.env.DEMO_ACCESS_CODE || !process.env.DEMO_ACCESS_SECRET) {
    return Response.json(
      { error: "Access is not configured on this deployment." },
      { status: 503 }
    );
  }

  if (!code || !isValidAccessCode(code)) {
    return Response.json({ error: "Incorrect access code." }, { status: 401 });
  }

  const response = Response.json({ success: true });
  response.headers.append(
    "Set-Cookie",
    [
      `${ACCESS_COOKIE}=${createAccessToken()}`,
      "Path=/",
      "HttpOnly",
      "SameSite=Lax",
      "Secure",
      `Max-Age=${ACCESS_MAX_AGE}`,
    ].join("; ")
  );
  return response;
}

export async function DELETE() {
  const response = Response.json({ success: true });
  response.headers.append(
    "Set-Cookie",
    `${ACCESS_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=0`
  );
  return response;
}
