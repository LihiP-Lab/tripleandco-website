import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const FETCH_TIMEOUT_MS = 8000;
const MAX_BODY_BYTES = 600_000;
const MAX_REDIRECTS = 5;
const UA =
  "Mozilla/5.0 (compatible; TripleVisibilityChecker/1.0; +https://www.tripleandco.com/ai-visibility-checker)";

// AI answer-engine crawlers that matter for being cited. Order = display order.
const AI_BOTS = [
  { bot: "GPTBot", label: "ChatGPT training", engine: "OpenAI" },
  { bot: "OAI-SearchBot", label: "ChatGPT search", engine: "OpenAI" },
  { bot: "ChatGPT-User", label: "ChatGPT browsing", engine: "OpenAI" },
  { bot: "ClaudeBot", label: "Claude", engine: "Anthropic" },
  { bot: "PerplexityBot", label: "Perplexity", engine: "Perplexity" },
  { bot: "Google-Extended", label: "Gemini grounding", engine: "Google" },
  { bot: "Meta-ExternalAgent", label: "Meta AI", engine: "Meta" },
  { bot: "Amazonbot", label: "Alexa / Rufus", engine: "Amazon" },
  { bot: "Applebot-Extended", label: "Apple Intelligence", engine: "Apple" },
  { bot: "CCBot", label: "Common Crawl", engine: "Common Crawl" },
] as const;

const CONTENT_SCHEMA_TYPES = [
  "FAQPage",
  "Article",
  "BlogPosting",
  "NewsArticle",
  "Service",
  "Product",
  "SoftwareApplication",
  "HowTo",
  "BreadcrumbList",
  "Person",
  "Offer",
  "AggregateRating",
  "Review",
];

/* ------------------------------------------------------------------ */
/* SSRF guard: only fetch public hosts                                 */
/* ------------------------------------------------------------------ */

export function isPrivateIp(addr: string): boolean {
  if (addr.includes(":")) {
    const a = addr.toLowerCase();
    return (
      a === "::1" ||
      a === "::" ||
      a.startsWith("fe80") ||
      a.startsWith("fc") ||
      a.startsWith("fd") ||
      a.startsWith("::ffff:127.") ||
      a.startsWith("::ffff:10.") ||
      a.startsWith("::ffff:192.168.")
    );
  }
  const parts = addr.split(".").map(Number);
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n))) return true;
  const [a, b] = parts;
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 192 && b === 0) ||
    (a === 198 && (b === 18 || b === 19)) ||
    a >= 224
  );
}

const hostChecked = new Map<string, boolean>();
async function hostIsPublic(hostname: string): Promise<boolean> {
  const cached = hostChecked.get(hostname);
  if (cached !== undefined) return cached;
  if (isIP(hostname)) {
    const ok = !isPrivateIp(hostname);
    hostChecked.set(hostname, ok);
    return ok;
  }
  try {
    const addrs = await lookup(hostname, { all: true });
    const ok = addrs.length > 0 && addrs.every((r) => !isPrivateIp(r.address));
    hostChecked.set(hostname, ok);
    return ok;
  } catch {
    hostChecked.set(hostname, false);
    return false;
  }
}

/* ------------------------------------------------------------------ */
/* Guarded fetch with manual, host-validated redirects                 */
/* ------------------------------------------------------------------ */

type FetchResult = {
  ok: boolean;
  status: number;
  body: string;
  headers: Headers | null;
  finalUrl: string;
};

async function guardedFetch(url: string): Promise<FetchResult> {
  let current = url;
  for (let i = 0; i <= MAX_REDIRECTS; i++) {
    const u = new URL(current);
    if (u.protocol !== "https:" && u.protocol !== "http:") break;
    if (!(await hostIsPublic(u.hostname))) break;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    let res: Response;
    try {
      res = await fetch(current, {
        redirect: "manual",
        signal: controller.signal,
        headers: { "User-Agent": UA, Accept: "*/*" },
      });
    } catch {
      clearTimeout(timer);
      return { ok: false, status: 0, body: "", headers: null, finalUrl: current };
    }
    clearTimeout(timer);

    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location");
      res.body?.cancel().catch(() => {});
      if (!loc) break;
      current = new URL(loc, current).toString();
      continue;
    }

    let body = "";
    try {
      const reader = res.body?.getReader();
      if (reader) {
        const decoder = new TextDecoder();
        let received = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          received += value.byteLength;
          body += decoder.decode(value, { stream: true });
          if (received >= MAX_BODY_BYTES) {
            reader.cancel().catch(() => {});
            break;
          }
        }
      }
    } catch {
      /* partial body is fine */
    }
    return {
      ok: res.status >= 200 && res.status < 300,
      status: res.status,
      body,
      headers: res.headers,
      finalUrl: current,
    };
  }
  return { ok: false, status: 0, body: "", headers: null, finalUrl: url };
}

/* ------------------------------------------------------------------ */
/* Bot-protection detection                                            */
/* ------------------------------------------------------------------ */

// When a WAF rejects the fetch outright, that is a finding, not a dead end:
// protection that blocks this checker usually blocks AI crawlers too.
export function botBlockProvider(res: FetchResult): string | null {
  if (!res.headers) return null;
  if (![401, 403, 429, 503].includes(res.status)) return null;
  const server = (res.headers.get("server") || "").toLowerCase();
  if (
    server.includes("cloudflare") ||
    res.headers.get("cf-ray") ||
    res.headers.get("cf-mitigated")
  )
    return "Cloudflare";
  if (server.includes("akamai") || res.headers.get("x-akamai-request-id"))
    return "Akamai";
  if (res.headers.get("x-amzn-waf-action")) return "AWS WAF";
  if (server.includes("imperva") || res.headers.get("x-iinfo"))
    return "Imperva";
  if (res.status === 401 || res.status === 403) return "bot protection";
  return null;
}

/* ------------------------------------------------------------------ */
/* robots.txt parsing (simplified RFC 9309)                            */
/* ------------------------------------------------------------------ */

type RobotsGroup = { agents: string[]; allow: string[]; disallow: string[] };

export function parseRobots(txt: string): { groups: RobotsGroup[]; sitemaps: string[] } {
  const groups: RobotsGroup[] = [];
  const sitemaps: string[] = [];
  let current: RobotsGroup | null = null;
  let lastWasAgent = false;

  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, "").trim();
    if (!line) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const field = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();

    if (field === "sitemap") {
      if (value) sitemaps.push(value);
      continue;
    }
    if (field === "user-agent") {
      if (!lastWasAgent || !current) {
        current = { agents: [], allow: [], disallow: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (!current) continue;
    if (field === "allow") current.allow.push(value);
    else if (field === "disallow") current.disallow.push(value);
  }
  return { groups, sitemaps };
}

export function groupFor(groups: RobotsGroup[], bot: string): RobotsGroup | null {
  // Most specific named match wins; the "*" group is the fallback.
  const b = bot.toLowerCase();
  let best: RobotsGroup | null = null;
  let bestLen = 0;
  for (const g of groups) {
    for (const agent of g.agents) {
      if (agent !== "*" && b.includes(agent) && agent.length > bestLen) {
        best = g;
        bestLen = agent.length;
      }
    }
  }
  if (best) return best;
  return groups.find((g) => g.agents.includes("*")) ?? null;
}

export function pathAllowed(group: RobotsGroup | null, path: string): boolean {
  // RFC 9309: longest matching rule wins; on a tie, Allow wins.
  if (!group) return true;
  let bestLen = -1;
  let allowed = true;
  for (const rule of group.disallow) {
    if (rule && ruleMatches(rule, path) && rule.length > bestLen) {
      bestLen = rule.length;
      allowed = false;
    }
  }
  for (const rule of group.allow) {
    if (rule && ruleMatches(rule, path) && rule.length >= bestLen) {
      bestLen = rule.length;
      allowed = true;
    }
  }
  return allowed;
}

function ruleMatches(rule: string, path: string): boolean {
  // Support * wildcards and $ end anchor.
  const anchored = rule.endsWith("$");
  const body = anchored ? rule.slice(0, -1) : rule;
  const pattern = body
    .split("*")
    .map((s) => s.replace(/[.+?^${}()|[\]\\]/g, "\\$&"))
    .join(".*");
  const re = new RegExp("^" + pattern + (anchored ? "$" : ""));
  return re.test(path);
}

/* ------------------------------------------------------------------ */
/* HTML extraction                                                     */
/* ------------------------------------------------------------------ */

export function extractJsonLdTypes(html: string): string[] {
  const types = new Set<string>();
  const re =
    /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    try {
      const parsed = JSON.parse(m[1]);
      collectTypes(parsed, types);
    } catch {
      /* invalid JSON-LD block; skip */
    }
  }
  return [...types];
}

function collectTypes(node: unknown, out: Set<string>): void {
  if (Array.isArray(node)) {
    for (const item of node) collectTypes(item, out);
    return;
  }
  if (node && typeof node === "object") {
    const obj = node as Record<string, unknown>;
    const t = obj["@type"];
    if (typeof t === "string") out.add(t);
    else if (Array.isArray(t))
      for (const v of t) if (typeof v === "string") out.add(v);
    for (const key of Object.keys(obj)) collectTypes(obj[key], out);
  }
}

export function metaRobotsNoindex(html: string): boolean {
  const re =
    /<meta[^>]*name\s*=\s*["'](?:robots|bingbot|msnbot)["'][^>]*content\s*=\s*["']([^"']*)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    if (/noindex/i.test(m[1])) return true;
  }
  // attribute order can be reversed
  const re2 =
    /<meta[^>]*content\s*=\s*["']([^"']*noindex[^"']*)["'][^>]*name\s*=\s*["'](?:robots|bingbot|msnbot)["'][^>]*>/gi;
  return re2.test(html);
}

function hasTitle(html: string): boolean {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return !!m && m[1].trim().length > 0;
}

function hasMetaDescription(html: string): boolean {
  return /<meta[^>]*name\s*=\s*["']description["'][^>]*content\s*=\s*["'][^"']+["']/i.test(
    html
  ) ||
    /<meta[^>]*content\s*=\s*["'][^"']+["'][^>]*name\s*=\s*["']description["']/i.test(
      html
    );
}

/* ------------------------------------------------------------------ */
/* Domain input handling                                               */
/* ------------------------------------------------------------------ */

export function normalizeDomain(input: string): string | null {
  let s = (input || "").trim().toLowerCase();
  if (!s) return null;
  s = s.replace(/^https?:\/\//, "").replace(/^\/+/, "");
  s = s.split(/[/?#]/)[0].split("@").pop() ?? "";
  s = s.split(":")[0];
  if (!s || s.length > 253) return null;
  if (isIP(s)) return null;
  if (
    !/^(?!-)[a-z0-9-]{1,63}(?<!-)(\.(?!-)[a-z0-9-]{1,63}(?<!-))+$/.test(s)
  )
    return null;
  if (s === "localhost" || s.endsWith(".local") || s.endsWith(".internal"))
    return null;
  return s;
}

function looksLikeHtmlSoft404(body: string): boolean {
  const head = body.slice(0, 300).trim().toLowerCase();
  return head.startsWith("<!doctype") || head.startsWith("<html");
}

/* ------------------------------------------------------------------ */
/* The checks                                                          */
/* ------------------------------------------------------------------ */

export type CheckStatus = "pass" | "warn" | "fail";
export type Check = {
  id: string;
  title: string;
  status: CheckStatus;
  points: number;
  maxPoints: number;
  detail: string;
  fix?: string;
  bots?: { bot: string; label: string; engine: string; allowed: boolean }[];
  schemaTypes?: string[];
};

export type VisibilityReport = {
  domain: string;
  checkedUrl: string;
  score: number;
  grade: string;
  checks: Check[];
  note?: string;
};

export type RunError = {
  error: string;
  status: number;
  kind?: "bot_blocked";
  provider?: string;
  httpStatus?: number;
};

export async function runVisibilityCheck(
  rawDomain: string,
  opts: { allowPrivateHosts?: boolean } = {}
): Promise<VisibilityReport | RunError> {
  const domain = normalizeDomain(rawDomain);
  if (!domain) {
    return {
      error: "That does not look like a domain. Try the format example.com.",
      status: 400,
    };
  }
  if (opts.allowPrivateHosts) {
    hostChecked.set(domain, true);
    hostChecked.set("www." + domain, true);
    hostChecked.set(domain.replace(/^www\./, ""), true);
  }
  if (!(await hostIsPublic(domain))) {
    return {
      error: "We could not resolve that domain to a public website.",
      status: 400,
    };
  }
  const base = `https://${domain}`;

  // Resolve the homepage first; it tells us the canonical host (www or not).
  // If the typed host fails, try its sibling (apex <-> www) before giving up,
  // and record a note so the report can say what happened.
  let home = await guardedFetch(`${base}/`);
  let effectiveBase = base;
  let note: string | undefined;
  let siblingResult: FetchResult | null = null;
  if (!home.ok) {
    const sibling = domain.startsWith("www.")
      ? domain.slice(4)
      : `www.${domain}`;
    const alt = await guardedFetch(`https://${sibling}/`);
    siblingResult = alt;
    if (alt.ok) {
      const failure =
        home.status > 0
          ? `answered with an error (status ${home.status})`
          : "did not answer over HTTPS";
      note = `${domain} ${failure}, so the checks below ran against ${sibling} instead. Worth fixing: crawlers that land on ${domain} hit the same problem.`;
      home = alt;
      effectiveBase = `https://${sibling}`;
    }
  }
  if (home.ok) {
    try {
      effectiveBase = new URL(home.finalUrl).origin;
    } catch {
      /* keep base */
    }
  }

  if (!home.ok) {
    const blocked =
      botBlockProvider(home) ??
      (siblingResult ? botBlockProvider(siblingResult) : null);
    if (blocked) {
      const httpStatus =
        botBlockProvider(home) !== null
          ? home.status
          : (siblingResult?.status ?? home.status);
      return {
        error: `Automated checks are blocked by this site's bot protection (${blocked} answered with status ${httpStatus}).`,
        status: 422,
        kind: "bot_blocked",
        provider: blocked,
        httpStatus,
      };
    }
    return {
      error:
        "We could not reach that site over HTTPS. It may be down, or it may be blocking automated checks.",
      status: 422,
    };
  }

  const [llms, llmsFull, robots, sitemap] = await Promise.all([
    guardedFetch(`${effectiveBase}/llms.txt`),
    guardedFetch(`${effectiveBase}/llms-full.txt`),
    guardedFetch(`${effectiveBase}/robots.txt`),
    guardedFetch(`${effectiveBase}/sitemap.xml`),
  ]);

  const checks: Check[] = [];

  /* ---- 1 · llms.txt (20) ---- */
  {
    const present = llms.ok && llms.body.trim().length > 0 && !looksLikeHtmlSoft404(llms.body);
    const fullPresent =
      llmsFull.ok &&
      llmsFull.body.trim().length > 0 &&
      !looksLikeHtmlSoft404(llmsFull.body);
    let points = 0;
    if (present) points += 16;
    if (fullPresent) points += 4;
    checks.push({
      id: "llms",
      title: "llms.txt",
      status: present ? (fullPresent ? "pass" : "warn") : "fail",
      points,
      maxPoints: 20,
      detail: present
        ? fullPresent
          ? "Found llms.txt and llms-full.txt. AI engines get a curated map of your site and a full-text version to read."
          : "Found llms.txt. Adding llms-full.txt gives engines the full text of your key pages in one fetch."
        : "No llms.txt found. It is a plain-text map of your site written for AI engines, the fastest way to tell them what you do and which pages matter.",
      fix: present
        ? undefined
        : "Publish a llms.txt file at your domain root listing your key pages with one-line descriptions.",
    });
  }

  /* ---- 2 · robots.txt AI crawler access (30) ---- */
  {
    const robotsPresent = robots.ok && !looksLikeHtmlSoft404(robots.body);
    const parsed = robotsPresent
      ? parseRobots(robots.body)
      : { groups: [], sitemaps: [] };
    const bots = AI_BOTS.map((b) => ({
      ...b,
      allowed: robotsPresent
        ? pathAllowed(groupFor(parsed.groups, b.bot), "/")
        : true,
    }));
    const allowedCount = bots.filter((b) => b.allowed).length;
    const points = Math.round((allowedCount / bots.length) * 30);
    const blocked = bots.filter((b) => !b.allowed).map((b) => b.bot);
    checks.push({
      id: "robots",
      title: "AI crawler access",
      status:
        allowedCount === bots.length
          ? "pass"
          : allowedCount >= bots.length - 2
            ? "warn"
            : "fail",
      points,
      maxPoints: 30,
      detail:
        allowedCount === bots.length
          ? robotsPresent
            ? `robots.txt allows all ${bots.length} AI crawlers we test. Every major answer engine can read your site.`
            : `No robots.txt found, so nothing blocks AI crawlers. All ${bots.length} engines we test can read your site, but an explicit robots.txt is better than an accidental default.`
          : `${blocked.length} of ${bots.length} AI crawlers are blocked in robots.txt: ${blocked.join(", ")}. Each one is an answer engine that cannot read your site.`,
      fix:
        allowedCount === bots.length
          ? undefined
          : "Add explicit Allow rules for the blocked crawlers in robots.txt, or remove the Disallow rules that catch them.",
      bots: bots.map(({ bot, label, engine, allowed }) => ({
        bot,
        label,
        engine,
        allowed,
      })),
    });
  }

  /* ---- 3 · Structured data (25) ---- */
  {
    const types = extractJsonLdTypes(home.body);
    const hasAny = types.length > 0;
    const hasOrg = types.some((t) =>
      ["Organization", "LocalBusiness", "Corporation", "ProfessionalService"].includes(t)
    );
    const hasWebSite = types.includes("WebSite");
    const contentTypes = types.filter((t) => CONTENT_SCHEMA_TYPES.includes(t));
    let points = 0;
    if (hasAny) points += 10;
    if (hasOrg) points += 6;
    if (hasWebSite) points += 4;
    if (contentTypes.length > 0) points += 5;
    checks.push({
      id: "schema",
      title: "Structured data (JSON-LD)",
      status: points >= 20 ? "pass" : hasAny ? "warn" : "fail",
      points,
      maxPoints: 25,
      detail: hasAny
        ? `Found JSON-LD on the homepage with ${types.length} schema ${types.length === 1 ? "type" : "types"}: ${types.slice(0, 8).join(", ")}${types.length > 8 ? " and more" : ""}.${hasOrg ? "" : " No Organization node, so engines cannot resolve who is behind the site."}${hasWebSite ? "" : " No WebSite node."}`
        : "No JSON-LD structured data on the homepage. Engines have to guess who you are, what you sell, and how your pages relate.",
      fix:
        points >= 20
          ? undefined
          : hasAny
            ? "Add the missing nodes: an Organization with sameAs links, a WebSite node, and page-level types like Service or FAQPage."
            : "Add JSON-LD to the homepage: an Organization node with sameAs links to your public profiles, a WebSite node, and FAQPage or Service where relevant.",
      schemaTypes: types.slice(0, 20),
    });
  }

  /* ---- 4 · Bing indexability (25) ---- */
  {
    const robotsPresent = robots.ok && !looksLikeHtmlSoft404(robots.body);
    const parsed = robotsPresent
      ? parseRobots(robots.body)
      : { groups: [], sitemaps: [] };
    const bingAllowed = robotsPresent
      ? pathAllowed(groupFor(parsed.groups, "bingbot"), "/")
      : true;
    const headerNoindex = /noindex/i.test(
      home.headers?.get("x-robots-tag") ?? ""
    );
    const noindex = metaRobotsNoindex(home.body) || headerNoindex;
    const sitemapPresent =
      parsed.sitemaps.length > 0 ||
      (sitemap.ok && !looksLikeHtmlSoft404(sitemap.body));
    const basics = hasTitle(home.body) && hasMetaDescription(home.body);

    let points = 0;
    if (bingAllowed) points += 10;
    if (!noindex) points += 8;
    if (sitemapPresent) points += 4;
    if (basics) points += 3;

    const problems: string[] = [];
    if (!bingAllowed) problems.push("robots.txt blocks bingbot");
    if (noindex) problems.push("the homepage carries a noindex directive");
    if (!sitemapPresent) problems.push("no sitemap.xml found");
    if (!basics)
      problems.push("the homepage is missing a title or meta description");

    checks.push({
      id: "bing",
      title: "Bing indexability",
      status: points >= 22 ? "pass" : points >= 14 ? "warn" : "fail",
      points,
      maxPoints: 25,
      detail:
        problems.length === 0
          ? "Bingbot is allowed, no noindex directives, sitemap present, title and meta description in place. Bing can index you, which matters because Bing's index feeds ChatGPT search and Microsoft Copilot."
          : `Issues found: ${problems.join("; ")}. Bing's index feeds ChatGPT search and Microsoft Copilot, so a Bing problem is an AI visibility problem.`,
      fix:
        problems.length === 0
          ? undefined
          : "Fix the flagged items, then verify the site in Bing Webmaster Tools and submit your sitemap.",
    });
  }

  const score = checks.reduce((s, c) => s + c.points, 0);
  const grade =
    score >= 85
      ? "AI-ready"
      : score >= 60
        ? "Readable, with gaps"
        : score >= 35
          ? "Partially invisible"
          : "Invisible to AI";

  return { domain, checkedUrl: effectiveBase, score, grade, checks, note };
}
