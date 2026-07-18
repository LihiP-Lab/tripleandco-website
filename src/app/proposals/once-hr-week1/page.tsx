"use client";

import { useState } from "react";

const PASSWORD = "oncehr";

const DELIVERABLES = [
  {
    num: "01",
    agent: "Nova",
    title: "Competitor & market audit",
    desc: "A structured audit of 5 Israeli HR-for-startups sites and LinkedIn presences.",
    items: [
      "Positioning language each competitor uses",
      "Target audience claims",
      "Key messaging angles they own",
      "Visual and tone choices",
      "Gaps and white space Once-HR can claim",
    ],
    format: "1-page summary PDF + comparison table",
  },
  {
    num: "02",
    agent: "Camille",
    title: "Positioning statement",
    desc: "One sentence Once-HR owns: the sharpest, most defensible version of what you do, for whom, and why it matters.",
    items: [
      "3 candidate positioning lines, ranked with rationale",
      "Tested against competitor audit, no overlaps",
      "You pick one or refine together in the kickoff session",
    ],
    format: "Shared doc for review before the kickoff call",
  },
  {
    num: "03",
    agent: "Vega",
    title: "Site architecture",
    desc: "6-page sitemap with low-fidelity wireframes and a copy outline for every section.",
    items: [
      "Sitemap: Home, For Startups, For Scaling Companies, About, Process, Contact",
      "Low-fidelity wireframes for the Home page (desktop + mobile)",
      "Copy outline per page: section job, headline direction, CTA",
    ],
    format: "Shared PDF or Figma link",
  },
  {
    num: "04",
    agent: "Atlas",
    title: "CRM schema design",
    desc: "A documented schema reviewed live in the kickoff session, HubSpot build begins Week 2.",
    items: [
      "Object types: Companies (startup clients), Contacts (founders + candidates), Deals (open roles)",
      "Property list per object with recommended field types",
      "Client pipeline: Lead → Discovery → Signed → Active",
      "Notes on LinkedIn lead-gen form mapping and email alias setup",
    ],
    format: "1-page schema doc",
  },
];

const NEEDS = [
  {
    by: "Tue 3 June",
    items: [
      {
        title: "Completed onboarding questionnaire",
        desc: "Shared via the link Lihi sent. Takes about 20 minutes. This is the single most important input for Week 1.",
        urgent: true,
      },
      {
        title: "Any existing brand files",
        desc: "Logo (SVG or PNG), brand colors, font names, any previous design work. Share via Google Drive or WeTransfer.",
        urgent: false,
      },
      {
        title: "3 to 5 competitor names",
        desc: "HR firms or individual recruiters you consider direct competitors. We'll research them, your shortlist saves time.",
        urgent: false,
      },
    ],
  },
  {
    by: "Thu 5 or Fri 6 June",
    items: [
      {
        title: "Confirm kickoff call slot",
        desc: "60 minutes, any time Thursday 5 June or Friday 6 June. Lihi will send a calendar link.",
        urgent: true,
      },
    ],
  },
];

export default function OnceHRWeek1() {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);

  function handlePw() {
    if (pw.trim().toLowerCase() === PASSWORD) {
      setUnlocked(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  }

  // ── Gate ──────────────────────────────────────────────────────────────────

  if (!unlocked) {
    return (
      <div style={s.gate}>
        <div style={s.gateCard}>
          <svg style={{ height: 28, width: "auto", display: "block", marginBottom: 28 }} viewBox="0 0 309 309" aria-label="Triple & Co.">
            <path d="M205.976 100.806H102.984V205.887H205.976V100.806Z" fill="#FE3465" />
            <path d="M308.976 205.888H205.984V308.549H296.125C303.222 308.549 308.976 302.795 308.976 295.698V205.888Z" fill="#FE3465" />
            <path d="M0 102.992V12.845C0 5.751 5.751 0 12.845 0H285.692C298.548 0 308.833 10.428 308.833 23.141V102.849H0V102.992Z" fill="#372C3E" />
            <path d="M296.125 0H205.984V102.802H308.976V12.993C308.976 5.895 303.222 0 296.125 0Z" fill="#FE3465" />
          </svg>
          <p style={s.eyebrow}>Triple &amp; Co. × Once-HR</p>
          <h1 style={s.gateTitle}>Week 1 Delivery Plan</h1>
          <p style={s.gateLead}>Enter the access code Lihi sent you to view this week&apos;s plan.</p>
          <div style={s.gateRow}>
            <input
              type="password"
              placeholder="Access code"
              value={pw}
              onChange={(e) => { setPw(e.target.value); setPwError(false); }}
              onKeyDown={(e) => e.key === "Enter" && handlePw()}
              style={{ ...s.gateInput, ...(pwError ? s.gateInputErr : {}) }}
              autoFocus
            />
            <button onClick={handlePw} style={s.gateBtn}>Enter →</button>
          </div>
          {pwError && <p style={s.gateErr}>Wrong code. Check with Lihi.</p>}
          <p style={s.gateNote}>Questions? <a href="mailto:lihi@tripleandco.com" style={s.link}>lihi@tripleandco.com</a></p>
        </div>
      </div>
    );
  }

  // ── Page ──────────────────────────────────────────────────────────────────

  return (
    <div style={s.page}>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroInner}>
          <div style={s.heroTop}>
            <svg style={{ height: 26, width: "auto" }} viewBox="0 0 309 309" aria-label="Triple & Co.">
              <path d="M205.976 100.806H102.984V205.887H205.976V100.806Z" fill="#FE3465" />
              <path d="M308.976 205.888H205.984V308.549H296.125C303.222 308.549 308.976 302.795 308.976 295.698V205.888Z" fill="#FE3465" />
              <path d="M0 102.992V12.845C0 5.751 5.751 0 12.845 0H285.692C298.548 0 308.833 10.428 308.833 23.141V102.849H0V102.992Z" fill="white" />
              <path d="M296.125 0H205.984V102.802H308.976V12.993C308.976 5.895 303.222 0 296.125 0Z" fill="#FE3465" />
            </svg>
            <div style={{ fontSize: 13, color: "#B8A7C4", fontWeight: 500 }}>
              <span style={{ color: "#fff", fontWeight: 700 }}>Week 1</span> · 1–7 June 2026
            </div>
          </div>

          <p style={s.eyebrow}>Triple &amp; Co. × Once-HR · Build Phase</p>
          <h1 style={s.h1}>
            What you receive <span style={s.grad}>this week.</span>
          </h1>
          <p style={s.lead}>
            Week 1 is the foundation. Everything built in weeks 2–4 depends on the clarity we create this week.
            By Friday 7 June, Once-HR will have a positioning statement, a site architecture, a CRM schema, and a clear brief the full team builds from.
          </p>

          {/* Week chips */}
          <div style={s.chipRow}>
            {["Week 1: Foundation", "Week 2: Design", "Week 3: Build", "Week 4: QA + Campaign", "1 Jul: Go-live"].map((w, i) => (
              <span key={i} style={{ ...s.chip, ...(i === 0 ? s.chipActive : {}) }}>{w}</span>
            ))}
          </div>
        </div>
      </header>

      <main style={s.main}>

        {/* Deliverables */}
        <div style={s.sectionLabel}>What you receive by Friday 7 June</div>

        {DELIVERABLES.map((d) => (
          <div key={d.num} style={s.card}>
            <div style={s.cardHead}>
              <div style={s.delivNum}>{d.num}</div>
              <div style={{ flex: 1 }}>
                <div style={s.agentTag}>Led by {d.agent}</div>
                <h2 style={s.cardTitle}>{d.title}</h2>
                <p style={s.cardDesc}>{d.desc}</p>
              </div>
            </div>
            <ul style={s.itemList}>
              {d.items.map((item, i) => (
                <li key={i} style={s.item}>
                  <span style={s.itemDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={s.formatTag}>
              <span style={s.formatLabel}>Delivered as</span>
              <span style={s.formatVal}>{d.format}</span>
            </div>
          </div>
        ))}

        {/* What we need */}
        <div style={{ ...s.sectionLabel, marginTop: 48 }}>What we need from you</div>

        {NEEDS.map((group, gi) => (
          <div key={gi} style={s.needGroup}>
            <div style={s.needBy}>By {group.by}</div>
            {group.items.map((item, i) => (
              <div key={i} style={{ ...s.needItem, ...(item.urgent ? s.needItemUrgent : {}) }}>
                <div style={s.needTitle}>
                  {item.urgent && <span style={s.urgentBadge}>Required</span>}
                  {item.title}
                </div>
                <p style={s.needDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Kickoff session */}
        <div style={s.kickoff}>
          <div style={s.kickoffInner}>
            <p style={s.eyebrow}>The kickoff working session</p>
            <h2 style={s.kickoffTitle}>Thu 5 June or Fri 6 June · 60 minutes</h2>
            <p style={s.kickoffLead}>
              Lihi sends a calendar invite within 24 hours of signature. Zoom or Google Meet, your choice.
            </p>
            <div style={s.agendaGrid}>
              {[
                "Walk through the 3 positioning candidates and align on one",
                "Review the site architecture and wireframes together",
                "Walk through the CRM schema before build begins",
                "Answer any questions about the process, timeline, or tools",
              ].map((item, i) => (
                <div key={i} style={s.agendaItem}>
                  <div style={s.agendaNum}>{i + 1}</div>
                  <span style={{ fontSize: 14, color: "#DCD3E1", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Not this week */}
        <div style={s.notBlock}>
          <div style={s.notTitle}>Not happening this week</div>
          <div style={s.notGrid}>
            {[
              { item: "Website design or build", when: "Weeks 2–3" },
              { item: "HubSpot setup", when: "Week 2" },
              { item: "LinkedIn profile rebuild", when: "Week 2" },
              { item: "Campaign drafting", when: "Weeks 3–4" },
            ].map((n, i) => (
              <div key={i} style={s.notItem}>
                <span style={s.notItemText}>{n.item}</span>
                <span style={s.notItemWhen}>{n.when}</span>
              </div>
            ))}
          </div>
          <p style={s.notNote}>
            Week 1 is intentionally about getting the foundation right, not moving fast on the wrong brief.
          </p>
        </div>

      </main>

      <footer style={s.footer}>
        <span>Triple &amp; Co. · <a href="mailto:lihi@tripleandco.com" style={s.link}>lihi@tripleandco.com</a></span>
        <a href="https://www.tripleandco.com" style={s.link}>tripleandco.com</a>
      </footer>
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const C = {
  pink: "#FE3465", pinkDark: "#CD2A51", pink05: "#FFEBF0", pink2: "#FFAEC1",
  p9: "#1B161F", p8: "#372C3E", p7: "#52415E",
  p5: "#896D9C", p3: "#B8A7C4", p15: "#DCD3E1", p05: "#F3F0F5",
  gradH: "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)",
  shadow: "0 4px 20px rgba(137,109,156,.12)",
};

const s: Record<string, React.CSSProperties> = {
  // Gate
  gate: { minHeight: "100vh", background: C.p9, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 16px", fontFamily: "Inter,-apple-system,sans-serif" },
  gateCard: { background: "#fff", borderRadius: 20, padding: "40px 36px", maxWidth: 440, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,.3)" },
  gateTitle: { fontWeight: 900, fontSize: 28, letterSpacing: "-0.03em", color: C.p9, marginBottom: 10, lineHeight: 1.1 },
  gateLead: { fontSize: 14, color: C.p5, marginBottom: 24, lineHeight: 1.6 },
  gateRow: { display: "flex", gap: 10, marginBottom: 8 },
  gateInput: { flex: 1, padding: "12px 14px", borderRadius: 10, border: `1.5px solid ${C.p15}`, fontSize: 15, fontFamily: "inherit", outline: "none", color: C.p9 },
  gateInputErr: { borderColor: C.pink, background: C.pink05 },
  gateBtn: { background: C.pink, color: "#fff", border: "none", borderRadius: 10, padding: "12px 18px", fontFamily: "inherit", fontWeight: 700, fontSize: 14, cursor: "pointer", whiteSpace: "nowrap" },
  gateErr: { fontSize: 12, color: C.pink, fontWeight: 600, marginBottom: 4 },
  gateNote: { fontSize: 12, color: C.p3, marginTop: 24 },

  // Page
  page: { fontFamily: "Inter,-apple-system,sans-serif", background: C.p05, minHeight: "100vh", WebkitFontSmoothing: "antialiased" },

  // Hero
  hero: { background: C.p9, color: "#fff", padding: "40px 40px 52px", position: "relative", overflow: "hidden" },
  heroInner: { maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 },
  heroTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 12 },
  eyebrow: { fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, color: C.pink2, marginBottom: 12 },
  h1: { fontWeight: 900, fontSize: "clamp(28px,4vw,46px)", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 14 },
  grad: { background: C.gradH, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
  lead: { color: "#DCD3E1", fontSize: 15, lineHeight: 1.65, maxWidth: 640, marginBottom: 28 },

  // Week chips
  chipRow: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: { padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600, color: C.p3, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)" },
  chipActive: { background: C.gradH, color: "#fff", border: "none" },

  // Main
  main: { maxWidth: 860, margin: "0 auto", padding: "0 40px 80px" },
  sectionLabel: { fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, color: C.pink, marginTop: 36, marginBottom: 16 },

  // Deliverable card
  card: { background: "#fff", borderRadius: 20, boxShadow: C.shadow, marginBottom: 20, overflow: "hidden", position: "relative" },
  cardHead: { display: "flex", gap: 20, padding: "24px 28px 16px", alignItems: "flex-start" },
  delivNum: { width: 40, height: 40, borderRadius: 12, background: C.gradH, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 16, flexShrink: 0, marginTop: 2 },
  agentTag: { fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, color: C.pink, marginBottom: 5 },
  cardTitle: { fontWeight: 900, fontSize: 18, letterSpacing: "-0.02em", color: C.p9, marginBottom: 5, lineHeight: 1.2 },
  cardDesc: { fontSize: 13.5, color: C.p5, lineHeight: 1.6 },
  itemList: { listStyle: "none", padding: "0 28px 0 88px", marginBottom: 0 },
  item: { display: "flex", alignItems: "flex-start", gap: 10, padding: "7px 0", borderTop: `1px solid ${C.p05}`, fontSize: 13.5, color: C.p7, lineHeight: 1.55 },
  itemDot: { width: 6, height: 6, borderRadius: "50%", background: C.pink, flexShrink: 0, marginTop: 6 },
  formatTag: { display: "flex", alignItems: "center", gap: 10, padding: "12px 28px", background: C.p05, borderTop: `1px solid ${C.p05}` },
  formatLabel: { fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, color: C.p3 },
  formatVal: { fontSize: 12.5, fontWeight: 600, color: C.p7 },

  // Need from you
  needGroup: { marginBottom: 20 },
  needBy: { fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: C.p5, marginBottom: 10 },
  needItem: { background: "#fff", borderRadius: 14, padding: "16px 20px", marginBottom: 10, boxShadow: C.shadow },
  needItemUrgent: { borderLeft: `4px solid ${C.pink}` },
  needTitle: { fontWeight: 700, fontSize: 14.5, color: C.p9, marginBottom: 4, display: "flex", alignItems: "center", gap: 8 },
  urgentBadge: { fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 800, color: "#fff", background: C.pink, padding: "3px 8px", borderRadius: 999 },
  needDesc: { fontSize: 13, color: C.p5, lineHeight: 1.6 },

  // Kickoff
  kickoff: { background: C.p9, borderRadius: 20, padding: "36px 32px", marginTop: 20, position: "relative", overflow: "hidden" },
  kickoffInner: { position: "relative", zIndex: 2 },
  kickoffTitle: { fontWeight: 900, fontSize: 22, letterSpacing: "-0.02em", color: "#fff", marginBottom: 8, lineHeight: 1.2 },
  kickoffLead: { fontSize: 14, color: "#B8A7C4", marginBottom: 24, lineHeight: 1.6 },
  agendaGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  agendaItem: { display: "flex", gap: 12, alignItems: "flex-start", background: "rgba(255,255,255,.05)", borderRadius: 12, padding: "14px 16px" },
  agendaNum: { width: 24, height: 24, borderRadius: "50%", background: C.gradH, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 12, flexShrink: 0 },

  // Not this week
  notBlock: { background: "#fff", borderRadius: 20, padding: "24px 28px", marginTop: 20, boxShadow: C.shadow },
  notTitle: { fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: C.p3, marginBottom: 14 },
  notGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 },
  notItem: { display: "flex", justifyContent: "space-between", alignItems: "center", background: C.p05, borderRadius: 10, padding: "10px 14px" },
  notItemText: { fontSize: 13, fontWeight: 600, color: C.p7 },
  notItemWhen: { fontSize: 11, fontWeight: 700, color: C.p3, background: "#fff", padding: "3px 8px", borderRadius: 999 },
  notNote: { fontSize: 13, color: C.p3, fontStyle: "italic", lineHeight: 1.6 },

  // Footer
  footer: { maxWidth: 860, margin: "0 auto", padding: "20px 40px 48px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, fontSize: 12, color: C.p5, borderTop: `1px solid ${C.p15}` },
  link: { color: C.pink, textDecoration: "none", fontWeight: 600 },
};
