export type JsonObject = Record<string, unknown>;

export async function readJsonObject(
  request: Request
): Promise<JsonObject | null> {
  try {
    const body: unknown = await request.json();
    if (body && typeof body === "object" && !Array.isArray(body)) {
      return body as JsonObject;
    }
  } catch {
    return null;
  }

  return null;
}

export function readString(body: JsonObject, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function describeFailedResponse(
  response: Response
): Promise<string> {
  try {
    const body = (await response.text()).slice(0, 500);
    return `${response.status} ${response.statusText}${body ? `: ${body}` : ""}`;
  } catch {
    return `${response.status} ${response.statusText}`;
  }
}
