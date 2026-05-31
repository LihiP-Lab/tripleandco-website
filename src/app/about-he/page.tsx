"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Agent cast (Hebrew) ──────────────────────────────────────────────────────
const agents = [
  {
    id: "camille",
    name: "קמיל",
    role: "קול המותג",
    desc: "כותבת קופי שנשמע בדיוק כמו ליהיא, בכל בריף ובכל פוסט.",
  },
  {
    id: "rex",
    name: "רקס",
    role: "אסטרטג צמיחה",
    desc: "משיק קמפיינים. מוצא את הזווית. עומד ביעדים.",
  },
  {
    id: "zara",
    name: "זארה",
    role: "מפקדת סושיאל",
    desc: "מנהלת כל ערוץ. מפרסמת, מגיבה וצומחת מדי יום.",
  },
  {
    id: "nova",
    name: "נובה",
    role: "אנליסטית מחקר",
    desc: "אינטל תחרותי, נתוני שוק, תובנות, בתוך דקות.",
  },
  {
    id: "atlas",
    name: "אטלס",
    role: "סוכן אנליטיקה",
    desc: "עוקב אחרי כל מדד. מציף את מה שחשוב. חוזה מה הולך לקרות.",
  },
  {
    id: "sage",
    name: "סייג",
    role: "מנוע תוכן",
    desc: "תוכן אחד. שמונה ערוצים. אפס מאמץ נוסף.",
  },
  {
    id: "vega",
    name: "וגה",
    role: "art director",
    desc: "שומר על מערכת הויזואל. שומר כל נכס על-ברנד.",
  },
  {
    id: "lumen",
    name: "לומן",
    role: "במאי וידאו",
    desc: "כותב, מסריט ועורך תוכן וידאו במהירות.",
  },
];

// ─── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(lines: string[], speed = 50) {
  const [displayed, setDisplayed] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setLineIdx((i) => (i + 1) % lines.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, lineIdx, lines, speed]);

  return displayed;
}

// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

// ─── InView hook ──────────────────────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Videos ───────────────────────────────────────────────────────────────────
const videos = [
  { id: "MRlDdVdAbkk", title: "איך בניתי מכונת הכנסות" },
  { id: "ACnkGqyOlSo", title: "סוכני AI לשיווק, הסבר מלא" },
  { id: "LLyyYhw4Lec", title: "עתיד ה-CMO" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: 70, suffix: "M$", label: "גיוסים", prefix: "" },
  { value: 15, suffix: "+", label: "שנות ניסיון ב-B2B SaaS", prefix: "" },
  { value: 3, suffix: "×", label: "צמיחה בהכנסות, שוב ושוב", prefix: "" },
  { value: 8, suffix: "", label: "סוכני AI בצוות שלכם", prefix: "" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutHebrewPage() {
  const typewritten = useTypewriter([
    "ה-CMO הראשון בישראל עם AI נייטיב.",
    "ה-CRO הראשון בישראל עם AI נייטיב.",
    "Human in the Loop.",
    "8 סוכנים. מפקחת אחת.",
    "בריף. הפעלה. מסירה.",
  ]);

  const statsSection = useInView(0.3);
  const agentsSection = useInView(0.1);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  const stat0 = useCounter(stats[0].value, 1600, statsSection.inView);
  const stat1 = useCounter(stats[1].value, 1200, statsSection.inView);
  const stat2 = useCounter(stats[2].value, 800, statsSection.inView);
  const stat3 = useCounter(stats[3].value, 1000, statsSection.inView);
  const statValues = [stat0, stat1, stat2, stat3];

  return (
    <div dir="rtl" lang="he">
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-purple-9 overflow-hidden">
        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 70% at 20% 50%, rgba(254,52,101,.18) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(254,52,101,1) 1px, transparent 1px), linear-gradient(90deg, rgba(254,52,101,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-8 w-full py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-pink-05/10 border border-brand/30 rounded-full px-4 py-1.5 mb-8">
                <span
                  className="w-2 h-2 rounded-full bg-brand shrink-0"
                  style={{ animation: "ai-dot-pulse 1.5s ease-in-out infinite" }}
                />
                <span className="text-xs font-bold tracking-widest uppercase text-brand">
                  ראשון בישראל
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black leading-[1.0] text-white mb-6" style={{ letterSpacing: "-0.02em" }}>
                היי, אני{" "}
                <span className="gradient-text">ליהיא</span>.
              </h1>

              {/* Typewriter */}
              <div className="h-10 flex items-center mb-8">
                <span className="text-xl sm:text-2xl font-bold text-purple-3">
                  {typewritten}
                  <span
                    className="inline-block w-0.5 h-6 bg-brand mr-1 align-middle"
                    style={{ animation: "ai-cursor-blink 1s step-end infinite" }}
                  />
                </span>
              </div>

              <p className="text-lg text-purple-3 leading-relaxed mb-6 max-w-xl">
                15 שנות ניסיון ב-B2B SaaS ובנקאות השקעות. יותר מ-70 מיליון דולר
                שגויסו. הכנסות שולשו, שוב ושוב. כעת מפעילה את צוות השיווק הראשון
                בישראל עם AI מלא, שמורכב מ-8 סוכנים ייעודיים עם ליהיא כ-Human in
                the Loop.
              </p>
              <p className="text-lg text-purple-3 leading-relaxed mb-10 max-w-xl">
                לא פלט AI גולמי. לא ספריית פרומפטים. מכונת הכנסות עם פיקוח
                מקצה לקצה, שמנוהלת על ידי CRO שכבר עשתה את זה.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5"
                  style={{ boxShadow: "0 0 0 0 rgba(254,52,101,0)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(254,52,101,.35)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 0 0 rgba(254,52,101,0)")
                  }
                >
                  <span>&#8592;</span> קבעו שיחת אבחון
                </Link>
                <Link
                  href="/agents"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-purple-7 px-6 py-3.5 text-[15px] font-semibold text-purple-3 transition-all hover:border-brand hover:text-brand hover:-translate-y-0.5"
                >
                  הכירו את הסוכנים
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div
                className="relative aspect-[4/5] w-full max-w-[340px] rounded-3xl overflow-hidden"
                style={{
                  animation: "ai-panel-breathe 5s ease-in-out infinite",
                  boxShadow: "0 0 60px rgba(254,52,101,.22)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="ליהיא פינטו, ה-CMO/CRO הראשון בישראל עם AI ילידי"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Overlay tag */}
                <div className="absolute bottom-4 right-4 left-4 bg-purple-9/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-purple-7/40">
                  <p className="text-xs font-bold tracking-widest uppercase text-brand mb-0.5">
                    ראשון בישראל
                  </p>
                  <p className="text-sm font-bold text-white leading-snug">
                    Native AI CMO / CRO
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -left-4 top-12 bg-purple-85 border border-purple-7/40 rounded-2xl px-4 py-3 backdrop-blur-sm"
                style={{ animation: "ai-panel-breathe 4s 1s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full bg-brand shrink-0"
                    style={{ animation: "ai-dot-pulse 1.5s ease-in-out infinite" }}
                  />
                  <span className="text-xs font-bold text-brand uppercase tracking-wider">
                    פעיל
                  </span>
                </div>
                <p className="text-xs text-purple-3 font-semibold">רקס מריץ בריף קמפיין</p>
                <p className="text-[10px] text-purple-5 mt-0.5">8 סוכנים פעילים</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] font-bold tracking-widest uppercase text-purple-3">גללו</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand to-transparent" />
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────────────── */}
      <div ref={statsSection.ref} className="bg-purple-85 py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-black gradient-text leading-none mb-2">
                  {s.prefix}{statValues[i]}{s.suffix}
                </div>
                <div className="text-sm text-purple-3 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── POSITION STATEMENT ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1000px] px-8">
          <p className="eyebrow mb-4 text-brand">הראשון מסוגו</p>
          <h2 className="text-4xl lg:text-[52px] font-black leading-[1.1] text-purple-9 mb-8" style={{ letterSpacing: "-0.02em" }}>
            ה-CMO/CRO הראשון בישראל{" "}
            <span className="gradient-text">עם AI נייטיב</span>.
            <br />לא יועצת שמשתמשת ב-AI.
            <br />אקסקיושן מלא.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div>
              <p className="text-lg text-purple-7 leading-relaxed mb-6">
                רוב הסוכנויות הוסיפו AI לתהליכים קיימים. ליהיא בנתה את
                התהליך סביב AI מהיום הראשון. שמונה סוכנים ייעודיים, כל אחד
                מנהל ורטיקל, כולם תחת פיקוח של CMO שגייסה 70 מיליון דולר
                ושילשה הכנסות SaaS בעולם האמיתי.
              </p>
              <p className="text-purple-7 leading-relaxed">
                התוצאה: צוות שיווק שרץ במהירות מכונה, עם שיקול דעת אנושי
                על כל פלט שיוצא החוצה. אתם לא מקבלים טקסט AI גולמי. כל
                דלברבל נסקר, מעודן ומאושר.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "פיקוח מקצה לקצה, על ידי ליהיא",
                "8 מומחי Claude מוגדרים מראש",
                "הבריף מכם. הביצוע על ידי הסוכנים. הסקירה על ידי ליהיא.",
                "15+ שנות ניסיון ב-SaaS, לא תיאוריה שיווקית",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 py-3 border-b border-purple-15 last:border-b-0"
                >
                  <span className="w-2 h-2 rounded-full bg-brand shrink-0 mt-2" />
                  <span className="text-purple-7 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="mt-12 text-xl italic text-purple-9 py-6 px-8 bg-purple-05 border-r-4 border-l-0 border-brand rounded-2xl leading-snug">
            &ldquo;בונה את צוות השיווק שהייתי רוצה שיהיה לי כמייסדת בשלב מוקדם.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── AGENTS IN MOTION ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-purple-9 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(254,52,101,.12) 0%, transparent 70%)",
          }}
        />
        <div ref={agentsSection.ref} className="relative z-10 mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-16">
            <p className="eyebrow text-brand mb-3">הצוות מאחורי העבודה</p>
            <h2 className="text-4xl lg:text-[52px] font-black leading-[1.05] text-white" style={{ letterSpacing: "-0.02em" }}>
              8 סוכנים. ליהיא{" "}
              <span className="gradient-text">אחת</span>.
              <br />אקסקיושן מלא.
            </h2>
            <p className="text-purple-3 text-lg mt-4 max-w-xl mx-auto">
              כל סוכן מנהל ורטיקל. ליהיא מחזיקה את הבריף, סוקרת כל
              פלט, ומחברת את כל המבצע.
            </p>
          </div>

          {/* Agent grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {agents.map((agent, i) => (
              <div
                key={agent.id}
                className="relative bg-purple-85 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  opacity: agentsSection.inView ? 1 : 0,
                  transform: agentsSection.inView
                    ? "translateY(0)"
                    : "translateY(32px)",
                  transition: `opacity 0.5s ${i * 0.07}s ease-out, transform 0.5s ${i * 0.07}s ease-out`,
                  boxShadow:
                    activeAgent === agent.id
                      ? "0 0 32px rgba(254,52,101,.27)"
                      : "none",
                }}
                onMouseEnter={() => setActiveAgent(agent.id)}
                onMouseLeave={() => setActiveAgent(null)}
              >
                <div className="h-1 w-full gradient-bar" />
                <div className="p-5">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-purple-8">
                    <Image
                      src={`/images/agents/${agent.id}.png`}
                      alt={`${agent.name} - ${agent.role}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                      style={{
                        backgroundColor:
                          activeAgent === agent.id ? "#FE3465" : "#52415E",
                        animation:
                          activeAgent === agent.id
                            ? "ai-dot-pulse 1.2s ease-in-out infinite"
                            : "none",
                      }}
                    />
                    <span className="text-[10px] font-bold tracking-wide text-purple-5">
                      {agent.role}
                    </span>
                  </div>

                  <p className="text-sm font-black text-white mb-1">{agent.name}</p>
                  <p
                    className="text-xs text-purple-4 leading-relaxed transition-all duration-300 overflow-hidden"
                    style={{
                      maxHeight: activeAgent === agent.id ? "60px" : "0px",
                      opacity: activeAgent === agent.id ? 1 : 0,
                    }}
                  >
                    {agent.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How they work together */}
          <div className="bg-purple-85 rounded-3xl p-8 lg:p-12 border border-purple-7/30">
            <h3 className="text-2xl font-black text-white mb-8 text-center">
              איך זה עובד ביחד
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  label: "בריף",
                  color: "#FE3465",
                  desc: "אתם נותנים לליהיא את המטרה. משפט אחד או מצגת מלאה. שניהם עובדים.",
                },
                {
                  step: "02",
                  label: "הפעלה",
                  color: "#896D9C",
                  desc: "הסוכנים הנכונים נכנסים לפעולה. רקס מתכנן. קמיל כותבת. אטלס עוקב. הכל במקביל.",
                },
                {
                  step: "03",
                  label: "מסירה",
                  color: "#B8A7C4",
                  desc: "ליהיא סוקרת כל פלט לפני שהוא מגיע אליכם. שיקול דעת אנושי, תמיד.",
                },
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div
                    className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl font-black"
                    style={{
                      background: `${phase.color}22`,
                      color: phase.color,
                      border: `1px solid ${phase.color}44`,
                    }}
                  >
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-black text-white mb-2">{phase.label}</h4>
                  <p className="text-sm text-purple-3 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
            <div className="hidden md:flex items-center justify-center gap-0 mt-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand to-purple-5" />
              <div
                className="w-3 h-3 rounded-full bg-brand mx-4"
                style={{ animation: "ai-dot-pulse 1.5s ease-in-out infinite" }}
              />
              <div className="flex-1 h-px bg-gradient-to-r from-purple-5 to-transparent" />
            </div>
            <p className="text-center text-xs font-bold tracking-widest uppercase text-purple-5 mt-4">
              תמיד עם פיקוח. אף פעם לא פלט AI גולמי.
            </p>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5"
            >
              <span>&#8592;</span> הכירו את כל 8 הסוכנים
            </Link>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE VIDEOS ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-purple-15 rounded-full px-5 py-2 mb-6 shadow-[var(--shadow-base)]">
              <span
                className="w-2 h-2 rounded-full bg-brand shrink-0"
                style={{ animation: "ai-dot-pulse 1.5s ease-in-out infinite" }}
              />
              <span className="text-xs font-bold tracking-widest uppercase text-brand">
                ליהיא בפעולה
              </span>
            </div>
            <h2 className="text-4xl lg:text-[48px] font-black leading-[1.05] text-purple-9" style={{ letterSpacing: "-0.02em" }}>
              צפו{" "}
              <span className="gradient-text">בשיטה</span>{" "}
              מקרוב.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div
                key={v.id}
                className="relative bg-white rounded-2xl overflow-hidden card-gradient-top"
                style={{ boxShadow: "var(--shadow-base)" }}
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-bold text-purple-8 leading-snug">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-purple-9 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(254,52,101,.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[700px] px-8 text-center">
          <p className="eyebrow text-brand mb-4">מוכנים?</p>
          <h2 className="text-4xl lg:text-[52px] font-black leading-[1.05] text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            התחילו עם{" "}
            <span className="gradient-text">שיחת אבחון</span>.
          </h2>
          <p className="text-purple-3 text-lg mb-10 max-w-lg mx-auto">
            פגישה אחת. ליהיא עושה אבחון של מבצע ההכנסות שלכם וממפה את
            הסוכנים הספציפיים שיזיזו את המחט.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5"
            style={{ boxShadow: "0 0 40px rgba(254,52,101,.3)" }}
          >
            <span>&#8592;</span> קבעו שיחת אבחון
          </Link>
        </div>
      </section>
    </div>
  );
}
