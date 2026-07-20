"use client";

import { useState } from "react";

// ─── Questions ────────────────────────────────────────────────────────────────

type PrefilledItem = { label: string; value: string; highlight?: string };
type Question = { id: string; text: string; hint?: string; rows?: number };
type Section = { num: number; title: string; sub: string; prefilled?: PrefilledItem[]; questions: Question[] };

const SECTIONS: Section[] = [
  {
    num: 1,
    title: "Who you are & what you do",
    sub: "Foundations, this shapes every headline, caption, and CTA we write",
    questions: [
      {
        id: "q1",
        text: "In one sentence, what does Once-HR do?",
        hint: "Don't overthink it. Write the sentence you'd say to someone at a coffee meeting.",
      },
      {
        id: "q2",
        text: "What type of companies do you work with today?",
        hint: 'Stage, size, industry, geography. E.g. "Series A–B startups in Israel, 30–120 employees, mainly tech."',
      },
      {
        id: "q3",
        text: "What does a typical engagement look like?",
        hint: "What do you actually do for a client from start to finish? Walk us through it.",
      },
    ],
  },
  {
    num: 2,
    title: "Your UVP & messaging",
    sub: "Feeds the positioning statement, headlines, and campaign copy",
    questions: [
      {
        id: "q4",
        text: "Who is the person who decides to hire you, and what is the exact problem they have when they call you?",
        hint: "Job title, company stage, what they're struggling with, what's on the line for them.",
      },
      {
        id: "q5",
        text: "Why do clients choose you over a competing recruiter or doing it in-house?",
        hint: "Ask yourself: what have clients actually told you? Quote them if you can.",
      },
      {
        id: "q6",
        text: "What are the top 3 objections you hear before someone becomes a client?",
        hint: 'E.g. "You\'re too expensive", "We\'ve tried recruiters before and it didn\'t work", "We can do this ourselves."',
        rows: 4,
      },
      {
        id: "q7",
        text: "What do you want Once-HR to be known for in 12 months?",
        hint: "Brand aspiration. What should people say when they mention your name?",
      },
    ],
  },
  {
    num: 3,
    title: "Your LinkedIn audience",
    sub: "Shapes voice, content pillars, and the July posting table",
    questions: [
      {
        id: "q8",
        text: "Who are you trying to reach on LinkedIn?",
        hint: "Primary: founders/CTOs/COOs hiring now. Secondary: candidates? HR professionals? List in order of priority.",
      },
      {
        id: "q9",
        text: "What topics do your ideal clients care about?",
        hint: 'What do they read, share, and engage with? E.g. "startup culture", "how to hire fast without burning the team".',
      },
      {
        id: "q10",
        text: "What tone do you want for Once-HR's LinkedIn presence?",
        hint: "Expert and direct / warm and approachable / provocative and opinionated. Pick one or describe.",
      },
    ],
  },
  {
    num: 4,
    title: "Customer logos & testimonials",
    sub: "Social proof for the website, lead magnet, and campaign assets",
    prefilled: [
      {
        label: "Confirmed clients (logos with Lihi)",
        value: "Taboola · Hoopo · Chamelio · Develeap · Bring It On · SignalPet",
      },
      {
        label: "Testimonial 1 · Lital Eitan-Shmidet, Director Global TA, Taboola",
        value: `"When we faced a period of rapid hiring growth and limited internal recruiting capacity at Taboola we partnered with Once HR to support our Talent Acquisition efforts. From day one, Inbal Drori and her team quickly immersed themselves in our business, hiring processes, and culture. Within a short time, they felt like a true extension of our internal TA team rather than an external vendor.\n\nWhat stood out most was their professionalism, responsiveness, and ability to build strong partnerships with our hiring managers. They were proactive, highly engaged, open to feedback, and genuinely invested in helping us achieve our hiring goals. Throughout the partnership, there was a strong sense of trust and accountability, and it was clear we could rely on them when it mattered most.\n\nI would gladly partner with Once HR again in the future and highly recommend Inbal and her team to any organization looking for a flexible, high-quality recruiting partner."`,
        highlight: "they felt like a true extension of our internal TA team rather than an external vendor",
      },
    ],
    questions: [
      {
        id: "q11",
        text: "Any additional clients we can name or show their logo on the website?",
        hint: "Add names here if there are more beyond the 6 confirmed above.",
      },
      {
        id: "q12",
        text: "Do you have a second or third client testimonial you can share?",
        hint: "Paste it below or give a rough paraphrase. We can write it up for approval.",
        rows: 5,
      },
      {
        id: "q13",
        text: "Any case studies or results you can share?",
        hint: 'E.g. "Helped [Company] hire a VP Engineering in 3 weeks", "Reduced time-to-hire by 40%". Even rough numbers help.',
        rows: 4,
      },
    ],
  },
  {
    num: 5,
    title: "Logistics",
    sub: "So we never block on a missed message",
    prefilled: [
      {
        label: "Best way to reach you during the project (answered by Lihi)",
        value: "Answered by Lihi",
      },
      {
        label: "Final approval authority (answered by Lihi)",
        value: "Answered by Lihi",
      },
      {
        label: "Hard deadlines or external constraints (answered by Lihi)",
        value: "Campaign live by 1 July 2026",
      },
    ],
    questions: [
      {
        id: "q17",
        text: "Anything else you want us to know before we start?",
        hint: "",
        rows: 4,
      },
    ],
  },
];

// ─── Gate ─────────────────────────────────────────────────────────────────────

const PASSWORD = "oncehr";

// ─── Component ────────────────────────────────────────────────────────────────

export default function OnceHROnboarding() {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  // Count fillable questions
  const totalQ = SECTIONS.flatMap((s) => s.questions).length;

  function handlePw() {
    if (pw.trim().toLowerCase() === PASSWORD) {
      setUnlocked(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  }

  function handleChange(id: string, val: string) {
    const next = { ...answers, [id]: val };
    setAnswers(next);
    const filled = Object.values(next).filter((v) => v.trim().length > 0).length;
    setProgress(Math.round((filled / totalQ) * 100));
  }

  async function handleSubmit() {
    if (submitting) return;

    // Build a flat payload for Formspree
    const payload: Record<string, string> = {
      _subject: "Once-HR Onboarding Questionnaire, answers",
    };
    SECTIONS.forEach((sec) => {
      sec.questions.forEach((q, i) => {
        const globalNum =
          SECTIONS.slice(0, SECTIONS.indexOf(sec)).flatMap((s) => s.questions).length + i + 1;
        const key = `Q${globalNum}. ${q.text}`;
        payload[key] = answers[q.id]?.trim() || "(no answer)";
      });
    });

    setSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("https://formspree.io/f/mlgvyzqy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Formspree returned ${response.status}`);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Onboarding questionnaire submission failed:", error);
      setSubmitError(
        "Your answers could not be sent. Please try again or email lihi@tripleandco.com."
      );
    } finally {
      setSubmitting(false);
    }
  }

  // ─── Gate screen ──────────────────────────────────────────────────────────

  if (!unlocked) {
    return (
      <div style={styles.gate}>
        <div style={styles.gateCard}>
          {/* Logo */}
          <svg style={{ height: 28, width: "auto", display: "block", marginBottom: 28 }} viewBox="0 0 309 309" aria-label="Triple & Co.">
            <path d="M205.976 100.806H102.984V205.887H205.976V100.806Z" fill="#FE3465" />
            <path d="M308.976 205.888H205.984V308.549H296.125C303.222 308.549 308.976 302.795 308.976 295.698V205.888Z" fill="#FE3465" />
            <path d="M0 102.992V12.845C0 5.751 5.751 0 12.845 0H285.692C298.548 0 308.833 10.428 308.833 23.141V102.849H0V102.992Z" fill="#372C3E" />
            <path d="M296.125 0H205.984V102.802H308.976V12.993C308.976 5.895 303.222 0 296.125 0Z" fill="#FE3465" />
          </svg>

          <p style={styles.gateEyebrow}>Triple &amp; Co. × Once-HR</p>
          <h1 style={styles.gateTitle}>Onboarding Questionnaire</h1>
          <p style={styles.gateLead}>
            Enter the access code Lihi sent you to get started.
          </p>

          <div style={styles.gateInputRow}>
            <input
              type="password"
              placeholder="Access code"
              value={pw}
              onChange={(e) => { setPw(e.target.value); setPwError(false); }}
              onKeyDown={(e) => e.key === "Enter" && handlePw()}
              style={{ ...styles.gateInput, ...(pwError ? styles.gateInputError : {}) }}
              autoFocus
            />
            <button onClick={handlePw} style={styles.gateBtn}>Enter →</button>
          </div>
          {pwError && <p style={styles.gateErr}>Wrong code. Check with Lihi.</p>}

          <p style={styles.gateFootNote}>
            Questions? <a href="mailto:lihi@tripleandco.com" style={styles.link}>lihi@tripleandco.com</a>
          </p>
        </div>
      </div>
    );
  }

  // ─── Success screen ───────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div style={styles.gate}>
        <div style={{ ...styles.gateCard, textAlign: "center" }}>
          <div style={styles.successDot}>✓</div>
          <h2 style={{ ...styles.gateTitle, marginBottom: 12 }}>You&apos;re done.</h2>
          <p style={{ color: "#896D9C", fontSize: 15, lineHeight: 1.65 }}>
            Your answers are on their way to Lihi. She&apos;ll be in touch within 24 hours with the kickoff invite.
          </p>
          <p style={{ marginTop: 20, fontSize: 13, color: "#B8A7C4" }}>
            <a href="https://www.tripleandco.com" style={styles.link}>← Back to tripleandco.com</a>
          </p>
        </div>
      </div>
    );
  }

  // ─── Main form ────────────────────────────────────────────────────────────

  const answeredCount = Object.values(answers).filter((v) => v.trim().length > 0).length;

  return (
    <div style={styles.page}>
      {/* Hero */}
      <header style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroTop}>
            <svg style={{ height: 26, width: "auto" }} viewBox="0 0 309 309" aria-label="Triple & Co.">
              <path d="M205.976 100.806H102.984V205.887H205.976V100.806Z" fill="#FE3465" />
              <path d="M308.976 205.888H205.984V308.549H296.125C303.222 308.549 308.976 302.795 308.976 295.698V205.888Z" fill="#FE3465" />
              <path d="M0 102.992V12.845C0 5.751 5.751 0 12.845 0H285.692C298.548 0 308.833 10.428 308.833 23.141V102.849H0V102.992Z" fill="white" />
              <path d="M296.125 0H205.984V102.802H308.976V12.993C308.976 5.895 303.222 0 296.125 0Z" fill="#FE3465" />
            </svg>
            <div style={styles.heroMeta}>
              <span style={{ color: "#B8A7C4" }}>Due </span>
              <strong style={{ color: "#fff" }}>Sunday 7 June 2026</strong>
            </div>
          </div>

          <p style={styles.eyebrow}>Triple &amp; Co. × Once-HR · Onboarding</p>
          <h1 style={styles.h1}>
            Onboarding{" "}
            <span style={styles.grad}>Questionnaire</span>
          </h1>
          <p style={styles.lead}>
            17 questions. About 20 minutes. The more specific you are, the better everything we build will fit Once-HR.
          </p>

          {/* Progress bar */}
          <div style={styles.progressWrap}>
            <div style={{ ...styles.progressBar, width: `${progress}%` }} />
          </div>
          <p style={styles.progressLabel}>{answeredCount} of {totalQ} answered</p>
        </div>
      </header>

      {/* Form */}
      <main style={styles.main}>
        {SECTIONS.map((sec) => (
          <div key={sec.num} style={styles.sectionBlock}>
            {/* Section header */}
            <div style={styles.sectionHead}>
              <div style={styles.sectionNum}>{sec.num}</div>
              <div>
                <h2 style={styles.sectionTitle}>{sec.title}</h2>
                <p style={styles.sectionSub}>{sec.sub}</p>
              </div>
            </div>

            {/* Pre-filled items */}
            {sec.prefilled?.map((pf, i) => (
              <div key={i} style={styles.question}>
                <span style={styles.prefilledLabel}>{pf.label}</span>
                {pf.highlight ? (
                  <div style={styles.prefilledValue}>
                    {pf.value.split(pf.highlight).map((part, idx, arr) => (
                      <span key={idx}>
                        {part}
                        {idx < arr.length - 1 && (
                          <mark style={styles.highlight}>{pf.highlight}</mark>
                        )}
                      </span>
                    ))}
                    <div style={styles.highlightNote}>
                      ★ Recommended for website, this is the line to feature
                    </div>
                  </div>
                ) : (
                  <div style={styles.prefilledValue}>{pf.value}</div>
                )}
              </div>
            ))}

            {/* Questions */}
            {sec.questions.map((q, qi) => {
              const globalNum =
                SECTIONS.slice(0, SECTIONS.indexOf(sec)).flatMap((s) => s.questions).length + qi + 1;
              return (
                <div key={q.id} style={styles.question}>
                  <span style={styles.qNum}>Q{globalNum}</span>
                  <p style={styles.qText}>{q.text}</p>
                  {q.hint && <p style={styles.qHint}>{q.hint}</p>}
                  <textarea
                    rows={q.rows || 3}
                    placeholder="Your answer..."
                    value={answers[q.id] || ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                    style={{
                      ...styles.textarea,
                      ...(answers[q.id]?.trim() ? styles.textareaFilled : {}),
                    }}
                  />
                </div>
              );
            })}
          </div>
        ))}

        {/* Submit */}
        <div style={styles.submitBlock}>
          <div>
            <p style={styles.submitNote}>
              Clicking submit securely sends all answers directly to Lihi.
            </p>
            {submitError && (
              <p role="alert" style={styles.submitError}>
                {submitError}
              </p>
            )}
          </div>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            style={{
              ...styles.submitBtn,
              ...(submitting ? styles.submitBtnDisabled : {}),
            }}
          >
            {submitting ? "Sending…" : "Submit answers to Lihi →"}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <span>Triple &amp; Co. · <a href="mailto:lihi@tripleandco.com" style={styles.link}>lihi@tripleandco.com</a></span>
        <a href="https://www.tripleandco.com" style={styles.link}>tripleandco.com</a>
      </footer>
    </div>
  );
}

// ─── Inline styles ────────────────────────────────────────────────────────────

const C = {
  pink: "#FE3465",
  pinkDark: "#CD2A51",
  pink05: "#FFEBF0",
  pink2: "#FFAEC1",
  purple9: "#1B161F",
  purple8: "#372C3E",
  purple7: "#52415E",
  purple5: "#896D9C",
  purple3: "#B8A7C4",
  purple15: "#DCD3E1",
  purple05: "#F3F0F5",
  gradH: "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)",
  shadow: "0 4px 20px rgba(137,109,156,.12)",
};

const styles: Record<string, React.CSSProperties> = {
  // Gate
  gate: {
    minHeight: "100vh",
    background: C.purple9,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px",
    fontFamily: "Inter, -apple-system, sans-serif",
  },
  gateCard: {
    background: "#fff",
    borderRadius: 20,
    padding: "40px 36px",
    maxWidth: 440,
    width: "100%",
    boxShadow: "0 20px 60px rgba(0,0,0,.3)",
  },
  gateEyebrow: {
    fontSize: 10,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: C.pink,
    marginBottom: 8,
  },
  gateTitle: {
    fontWeight: 900,
    fontSize: 28,
    letterSpacing: "-0.03em",
    color: C.purple9,
    marginBottom: 10,
    lineHeight: 1.1,
  },
  gateLead: {
    fontSize: 14,
    color: C.purple5,
    marginBottom: 24,
    lineHeight: 1.6,
  },
  gateInputRow: {
    display: "flex",
    gap: 10,
    marginBottom: 8,
  },
  gateInput: {
    flex: 1,
    padding: "12px 14px",
    borderRadius: 10,
    border: `1.5px solid ${C.purple15}`,
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
    color: C.purple9,
  },
  gateInputError: {
    borderColor: C.pink,
    background: C.pink05,
  },
  gateBtn: {
    background: C.pink,
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "12px 18px",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  gateErr: {
    fontSize: 12,
    color: C.pink,
    fontWeight: 600,
    marginBottom: 4,
  },
  gateFootNote: {
    fontSize: 12,
    color: C.purple3,
    marginTop: 24,
  },
  successDot: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: C.gradH,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 900,
    fontSize: 22,
    margin: "0 auto 20px",
  },

  // Page
  page: {
    fontFamily: "Inter, -apple-system, sans-serif",
    background: C.purple05,
    minHeight: "100vh",
    WebkitFontSmoothing: "antialiased",
  },

  // Hero
  hero: {
    background: C.purple9,
    color: "#fff",
    padding: "40px 40px 52px",
    position: "relative",
    overflow: "hidden",
  },
  heroInner: {
    maxWidth: 820,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  heroTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
    flexWrap: "wrap",
    gap: 12,
  },
  heroMeta: {
    fontSize: 13,
    fontWeight: 500,
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: C.pink2,
    marginBottom: 12,
  },
  h1: {
    fontWeight: 900,
    fontSize: "clamp(28px, 4vw, 46px)",
    letterSpacing: "-0.03em",
    lineHeight: 1.05,
    marginBottom: 14,
  },
  grad: {
    background: C.gradH,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  lead: {
    color: "#DCD3E1",
    fontSize: 15,
    lineHeight: 1.65,
    maxWidth: 600,
    marginBottom: 24,
  },
  progressWrap: {
    height: 6,
    background: "rgba(255,255,255,.12)",
    borderRadius: 999,
    overflow: "hidden",
    maxWidth: 400,
  },
  progressBar: {
    height: "100%",
    background: C.gradH,
    borderRadius: 999,
    transition: "width .3s ease",
  },
  progressLabel: {
    fontSize: 11,
    color: "#B8A7C4",
    marginTop: 6,
    letterSpacing: "0.06em",
  },

  // Main
  main: {
    maxWidth: 820,
    margin: "0 auto",
    padding: "0 40px 80px",
  },

  // Section
  sectionBlock: {
    background: "#fff",
    borderRadius: 20,
    boxShadow: C.shadow,
    marginTop: 28,
    position: "relative",
    overflow: "hidden",
  },
  sectionHead: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "24px 28px 18px",
    borderBottom: `1px solid ${C.purple05}`,
  },
  sectionNum: {
    width: 34,
    height: 34,
    borderRadius: 10,
    background: C.gradH,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    color: "#fff",
    fontSize: 14,
    flexShrink: 0,
  },
  sectionTitle: {
    fontWeight: 900,
    fontSize: 17,
    letterSpacing: "-0.02em",
    color: C.purple9,
    lineHeight: 1.2,
  },
  sectionSub: {
    fontSize: 12,
    color: C.purple5,
    marginTop: 2,
  },

  // Question
  question: {
    padding: "20px 28px",
    borderBottom: `1px solid ${C.purple05}`,
  },
  qNum: {
    display: "inline-block",
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: C.pink,
    marginBottom: 5,
  },
  qText: {
    fontWeight: 700,
    fontSize: 15,
    color: C.purple9,
    marginBottom: 4,
    lineHeight: 1.4,
  },
  qHint: {
    fontSize: 12,
    color: C.purple5,
    fontStyle: "italic",
    marginBottom: 10,
    lineHeight: 1.55,
  },
  textarea: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: `1.5px dashed ${C.purple3}`,
    background: C.purple05,
    fontSize: 14,
    fontFamily: "inherit",
    color: C.purple9,
    lineHeight: 1.6,
    resize: "vertical",
    outline: "none",
    transition: "border-color .2s, background .2s",
  },
  textareaFilled: {
    border: `1.5px solid ${C.pink2}`,
    background: "#FFEBF0",
  },

  // Prefilled
  prefilledLabel: {
    display: "block",
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: C.purple5,
    marginBottom: 6,
  },
  prefilledValue: {
    background: C.purple05,
    border: `1.5px solid ${C.purple15}`,
    borderRadius: 10,
    padding: "14px 16px",
    fontSize: 13,
    color: C.purple7,
    lineHeight: 1.75,
    whiteSpace: "pre-wrap" as const,
  },
  highlight: {
    background: "linear-gradient(120deg,#FFD6E0 0%,#FFAEC1 100%)",
    color: C.purple9,
    fontWeight: 700,
    borderRadius: 4,
    padding: "1px 3px",
  },
  highlightNote: {
    marginTop: 12,
    fontSize: 11,
    fontWeight: 700,
    color: C.pink,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    borderTop: `1px solid ${C.purple15}`,
    paddingTop: 10,
  },

  // Submit
  submitBlock: {
    marginTop: 28,
    background: C.purple9,
    borderRadius: 20,
    padding: "32px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
  },
  submitNote: {
    fontSize: 13,
    color: "#B8A7C4",
    lineHeight: 1.6,
    maxWidth: 440,
  },
  submitBtn: {
    background: C.pink,
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "14px 24px",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  submitBtnDisabled: {
    cursor: "wait",
    opacity: 0.65,
  },
  submitError: {
    color: C.pink2,
    fontSize: 12,
    fontWeight: 600,
    marginTop: 8,
    maxWidth: 440,
  },

  // Footer
  footer: {
    maxWidth: 820,
    margin: "0 auto",
    padding: "20px 40px 48px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
    fontSize: 12,
    color: C.purple5,
    borderTop: `1px solid ${C.purple15}`,
  },
  link: {
    color: C.pink,
    textDecoration: "none",
    fontWeight: 600,
  },
};
