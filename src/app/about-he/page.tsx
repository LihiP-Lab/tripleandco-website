"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Agent cast (Hebrew) ──────────────────────────────────────────────────────
const agents = [
  {
    id: "camille",
    name: "קמי",
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
  ]);

  const statsSection = useInView(0.3);
  const agentsSection = useInView(0.1);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  const stat0 = useCounter(stats[0].value, 1600, statsSection.inView);
  const stat1 = useCounter(stats[1].value, 1200, statsSection.inView);
  const stat2 = useCounter(stats[2].value, 800, statsSection.inView);
  const stat3 = useCounter(stats[3].value, 1000, statsSection.inView);
  const statValues = [stat0, stat1, stat2, stat3];

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "ליהיא פינטו | עמוד רשמי",
    "url": "https://www.tripleandco.com/about-he",
    "inLanguage": "he",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Triple & Co.",
      "url": "https://www.tripleandco.com",
    },
    "mainEntity": {
      "@type": "Person",
      "@id": "https://www.tripleandco.com/about-he#lihi-pinto",
      "name": "ליהיא פינטו",
      "alternateName": ["Lihi Pinto", "Lihi Pinto Triple & Co.", "ליהיא פינטו Triple & Co.", "Lihi Pinto CMO", "Lihi Pinto Fractional CMO"],
      "jobTitle": "Fractional CMO and CRO as a Service",
      "nationality": "Israeli",
      "worksFor": {
        "@type": "Organization",
        "@id": "https://www.tripleandco.com#organization",
        "name": "Triple & Co.",
        "url": "https://www.tripleandco.com",
        "foundingDate": "2022",
        "description": "Triple & Co. מספקת שירותי Fractional CMO ו-CRO as a Service לסטארטאפים B2B SaaS באמצעות צוות של 8 סוכני AI ייעודיים תחת פיקוח אנושי של ליהיא פינטו.",
        "areaServed": ["Israel", "United States", "Global"],
        "serviceType": ["Fractional CMO", "Fractional CRO", "CMO as a Service", "CRO as a Service", "B2B SaaS Marketing", "AI Marketing"],
        "founder": {
          "@type": "Person",
          "name": "ליהיא פינטו",
        },
      },
      "alumniOf": [
        {
          "@type": "Organization",
          "name": "Syte",
          "description": "חברת B2B SaaS בתחום ה-eCommerce, ליהיא פינטו הייתה ממייסדיה ושימשה בתפקידי צמיחה ושיווק",
        },
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Fractional CMO",
        "occupationLocation": { "@type": "Country", "name": "Israel" },
        "skills": "Fractional CMO, CRO as a Service, B2B SaaS Growth, Go-To-Market Strategy, AI Marketing Agents, Pipeline Generation, Demand Generation, Customer Success",
      },
      "url": "https://www.tripleandco.com/about-he",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.tripleandco.com/images/lihi.png",
        "description": "ליהיא פינטו, מייסדת Triple & Co., Fractional CMO ו-CRO לסטארטאפים B2B SaaS",
      },
      "description": "ליהיא פינטו היא יזמת טכנולוגיה ישראלית ומייסדת Triple & Co., המספקת שירותי Fractional CMO ו-CRO as a Service לסטארטאפים B2B SaaS. בעלת ניסיון של 15+ שנים בבנקאות השקעות, יזמות הייטק וגיוסי הון. גייסה מעל 70 מיליון דולר ומובילה צוות שיווק של 8 סוכני AI תחת פיקוח אנושי.",
      "knowsAbout": [
        "Fractional CMO",
        "Fractional CRO",
        "CMO as a Service",
        "CRO as a Service",
        "B2B SaaS Marketing",
        "Revenue Growth",
        "AI Marketing Agents",
        "Investment Banking",
        "Go-To-Market Strategy",
        "Pipeline Generation",
        "Customer Success",
        "Demand Generation",
        "Startup Growth",
        "SaaS Revenue Operations",
      ],
      "sameAs": [
        "https://www.linkedin.com/in/lihipinto/",
        "https://www.linkedin.com/company/triple-and-co/",
        "https://www.youtube.com/@lihipinto",
        "https://www.tripleandco.com",
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "מי זאת ליהיא פינטו?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ליהיא פינטו היא מייסדת Triple & Co. ומומחית Fractional CMO ו-CRO as a Service לסטארטאפים B2B SaaS. היא יזמת טכנולוגיה ישראלית עם ניסיון של מעל 15 שנים בבנקאות השקעות, יזמות הייטק וגיוסי הון.",
        },
      },
      {
        "@type": "Question",
        "name": "מה עושה ליהיא פינטו?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ליהיא פינטו בונה לסטארטאפים B2B SaaS מנועי צמיחה, שיווק, מכירות, customer success ותהליכי Go-To-Market מבוססי AI, דרך Triple & Co., חברת Fractional CMO ו-CRO שהקימה ב-2022.",
        },
      },
      {
        "@type": "Question",
        "name": "מה הקשר בין ליהיא פינטו ל-Triple & Co.?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ליהיא פינטו היא המייסדת והמובילה של Triple & Co., חברת Fractional CMO ו-CRO as a Service. היא מובילה את אסטרטגיית הצמיחה והביצוע עבור כלל לקוחות החברה.",
        },
      },
      {
        "@type": "Question",
        "name": "במה ליהיא פינטו מתמחה?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ליהיא פינטו מתמחה בצמיחה לסטארטאפים B2B SaaS, בניית אסטרטגיית שיווק ומכירות, מיצוב, יצירת ביקושים, ניהול פייפליין, והקמת מנועי הכנסות. היא נחשבת לאחת ממומחיות ה-Fractional CMO המובילות לסטארטאפים B2B SaaS בישראל.",
        },
      },
      {
        "@type": "Question",
        "name": "האם זה העמוד הרשמי של ליהיא פינטו?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן. זהו עמוד האודות הרשמי של ליהיא פינטו באתר Triple & Co. בכתובת https://www.tripleandco.com/about-he, החברה שהקימה ומובילה מאז 2022.",
        },
      },
      {
        "@type": "Question",
        "name": "איך אפשר ליצור קשר עם ליהיא פינטו?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "אפשר לקבוע שיחת אבחון עם ליהיא פינטו דרך אתר Triple & Co. בכתובת https://www.tripleandco.com/contact, לבדוק התאמה לשירותי Fractional CMO ו-CRO as a Service.",
        },
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.tripleandco.com/about-he#lihi-pinto",
    "name": "Lihi Pinto",
    "jobTitle": "Founder & Fractional CMO",
    "worksFor": {
      "@type": "Organization",
      "@id": "https://www.tripleandco.com#organization",
      "name": "Triple & Co.",
      "url": "https://www.tripleandco.com",
    },
    "description":
      "CMO and CRO as a Service for B2B SaaS startups, utilizing an AI-native team of 8 agents.",
    "url": "https://www.tripleandco.com/about-he",
    "sameAs": [
      "https://il.linkedin.com/in/lihipinto",
      "https://www.linkedin.com/in/lihipinto/",
    ],
  };

  return (
    <div dir="rtl" lang="he">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center lg:items-start">
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

              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black leading-[1.0] text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
                <span className="gradient-text">ליהיא פינטו</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4 leading-tight">
                  CMO ו-CRO as a Service מבוסס AI לסטארטאפים
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-purple-3 mb-6 leading-snug">
                Fractional CMO ו-CRO as a Service לסטארטאפים B2B ישראל
              </p>

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

              <p className="text-lg text-white leading-relaxed mb-5 max-w-xl font-medium">
                טריפל אנד קו (Triple &amp; Co) הוא שירות ה-CMO ו-CRO הראשון בישראל
                מבוסס בינה מלאכותית לסטארטאפים B2B SaaS. השירות משלב פיקוח אנושי
                אסטרטגי של המייסדת ליהיא פינטו עם צוות של 8 סוכני AI מתמחים לביצוע
                אקסקיושן שיווקי והאצת הכנסות.
              </p>
              <p className="text-lg text-purple-3 leading-relaxed mb-5 max-w-xl">
                ליהיא פינטו היא מייסדת Triple &amp; Co. ומומחית Fractional CMO ו-CRO as a Service
                לסטארטאפים B2B SaaS. זהו העמוד הרשמי של ליהיא פינטו בעברית, עם
                מידע על הניסיון, שיטת העבודה והשירותים שהיא מובילה דרך Triple &amp; Co.
              </p>
              <p className="text-lg text-purple-3 leading-relaxed mb-5 max-w-xl">
                עם מעל 15 שנות ניסיון בבנקאות השקעות, יזמות הייטק, גיוסי הון
                ובניית מנועי צמיחה B2B SaaS, ליהיא פינטו גייסה מעל 70 מיליון דולר, בנתה
                מכונת SaaS משומנת ושילשה הכנסות שוב ושוב.
              </p>
              <p className="text-lg text-purple-3 leading-relaxed mb-8 max-w-xl">
                היום ליהיא פינטו מובילה את Triple &amp; Co. כצוות שיווק, מכירות
                ו AI נייטיב לסטארטאפים שרוצים לבנות פייפליין, לחדד מיצוב
                ולהאיץ צמיחה.
              </p>

              <ul className="space-y-2 mb-10 max-w-xl">
                {[
                  "15+ שנות ניסיון ב-B2B SaaS",
                  "70M$+ גיוסי הון",
                  "8 סוכני AI בצוות שלכם",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg text-white font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

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
                  alt="ליהיא פינטו, מייסדת Triple & Co."
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

              {/* Rex card, top left */}
              <div
                className="absolute -left-6 top-8 bg-purple-85/95 border border-purple-7/40 rounded-2xl p-3 backdrop-blur-sm w-52 hidden lg:block"
                style={{ animation: "ai-panel-breathe 4s 1s ease-in-out infinite", zIndex: 20 }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-purple-7/40">
                    <Image src="/images/agents/rex.png" alt="Rex" fill className="object-cover object-top" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                        style={{ animation: "ai-dot-pulse 1.5s ease-in-out infinite" }}
                      />
                      <span className="text-[10px] font-bold text-brand uppercase tracking-wider">פעיל</span>
                    </div>
                    <p className="text-xs font-bold text-white truncate">רקס</p>
                    <p className="text-[10px] text-purple-4 truncate">מריץ בריף קמפיין</p>
                  </div>
                </div>
              </div>

              {/* Camille card, bottom left */}
              <div
                className="absolute -left-6 bottom-32 bg-purple-85/95 border border-purple-7/40 rounded-2xl p-3 backdrop-blur-sm w-52 hidden lg:block"
                style={{ animation: "ai-panel-breathe 5s 0.5s ease-in-out infinite", zIndex: 20 }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-purple-7/40">
                    <Image src="/images/agents/camille.png" alt="Camille" fill className="object-cover object-top" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                        style={{ animation: "ai-dot-pulse 1.5s 0.4s ease-in-out infinite" }}
                      />
                      <span className="text-[10px] font-bold text-brand uppercase tracking-wider">כותבת</span>
                    </div>
                    <p className="text-xs font-bold text-white truncate">קמי</p>
                    <p className="text-[10px] text-purple-4 truncate">מסיימת דף נחיתה</p>
                  </div>
                </div>
              </div>

              {/* Atlas card, right side */}
              <div
                className="absolute -right-6 top-1/2 -translate-y-1/2 bg-purple-85/95 border border-purple-7/40 rounded-2xl p-3 backdrop-blur-sm w-52 hidden lg:block"
                style={{ animation: "ai-panel-breathe 4.5s 1.8s ease-in-out infinite", zIndex: 20 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-purple-7/40">
                    <Image src="/images/agents/atlas.png" alt="Atlas" fill className="object-cover object-top" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                        style={{ animation: "ai-dot-pulse 1.5s 0.8s ease-in-out infinite" }}
                      />
                      <span className="text-[10px] font-bold text-brand uppercase tracking-wider">מנתח</span>
                    </div>
                    <p className="text-xs font-bold text-white truncate">אטלס</p>
                    <p className="text-[10px] text-purple-4 truncate">סוקר ביצועי Q2</p>
                  </div>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-6 px-1">
                  {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm gradient-bar opacity-70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
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

      {/* ── ABOUT LIHI ──────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white" id="about">
        <div className="mx-auto max-w-[800px] px-8">
          <h2 className="text-3xl lg:text-[44px] font-black leading-[1.1] text-purple-9 mb-10" style={{ letterSpacing: "-0.02em" }}>
            אודות{" "}
            <span className="gradient-text">ליהיא פינטו</span>
          </h2>
          <div className="space-y-6 text-lg text-purple-7 leading-relaxed">
            <p>
              ליהיא פינטו היא יזמת, מומחית צמיחה ומייסדת Triple &amp; Co. לאורך
              הקריירה שלה היא שילבה בין בנקאות השקעות, יזמות, שיווק, מכירות
              ובניית מנועי הכנסות לחברות טכנולוגיה.
            </p>
            <p>
              לפני הקמת Triple &amp; Co., ליהיא פינטו הייתה ממייסדי Syte, חברת B2B SaaS
              בתחום ה-eCommerce, ושימשה בתפקידי צמיחה, שיווק והכנסות. הניסיון
              הזה הפך לבסיס לשיטת העבודה של Triple &amp; Co. שילוב בין אסטרטגיה
              בכירה, ביצוע שיווקי, תהליכי מכירה, customer success ו AI בפיקוח אנושי.
            </p>
            <p>
              דרך Triple &amp; Co., ליהיא פינטו מלווה מייסדים והנהלות של חברות
              B2B SaaS שרוצות לבנות תשתית צמיחה מדידה, להגדיל פייפליין
              ולייצר מנוע הכנסות יציב.
            </p>
          </div>
        </div>
      </section>

      {/* ── POSITION STATEMENT ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1000px] px-8">
          <p className="eyebrow mb-4 text-brand">הראשון מסוגו</p>
          <h2 className="text-4xl lg:text-[52px] font-black leading-[1.1] text-purple-9 mb-8" style={{ letterSpacing: "-0.02em" }}>
            ליהיא פינטו:{" "}
            <span className="gradient-text">Fractional CMO עם AI נייטיב</span>.
            <br />לא יועצת שמשתמשת ב-AI.
            <br />אקסקיושן מלא.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div>
              <p className="text-lg text-purple-7 leading-relaxed mb-6">
                רוב הסוכנויות הוסיפו AI לתהליכים קיימים. ליהיא בנתה את
                התהליך סביב AI מהיום הראשון. שמונה סוכני AI לשיווק B2B, כל אחד
                מנהל ורטיקל, כולם תחת פיקוח של Fractional CMO שגייסה 70 מיליון דולר
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
                "15+ שנות ניסיון ב-B2B SaaS, Fractional CMO בפועל, לא תיאוריה שיווקית",
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
            &ldquo;בונה את צוותי השיווק שהייתי רוצה שיהיו לי כמייסדת בשלב מוקדם.&rdquo;
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
            <p className="eyebrow text-brand mb-3">סוכני AI לשיווק, הצוות של ליהיא פינטו</p>
            <h2 className="text-4xl lg:text-[52px] font-black leading-[1.05] text-white" style={{ letterSpacing: "-0.02em" }}>
              8 סוכני AI לשיווק.{" "}
              <span className="gradient-text">אקסקיושן מלא</span>.
              <br />ליהיא פינטו מפקחת על הכל.
            </h2>
            <p className="text-purple-3 text-lg mt-4 max-w-xl mx-auto">
              כל סוכן מנהל ורטיקל. ליהיא מחזיקה את הבריף, סוקרת כל
              פלט, ומחברת את כל המבצע.
            </p>
          </div>

          {/* Agent grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {agents.map((agent, i) => (
              <Link
                key={agent.id}
                href={`/agents#${agent.id}`}
                aria-label={`${agent.name} - ${agent.role}`}
                className="relative block bg-purple-85 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
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
              </Link>
            ))}
          </div>

          {/* How they work together */}
          <div className="bg-purple-85 rounded-3xl p-8 lg:p-12 border border-purple-7/30">
            <h2 className="text-2xl font-black text-white mb-8 text-center">
              איך זה עובד ביחד
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  label: "בריף",
                  color: "#FE3465",
                  desc: "אתם נותנים לליהיא את המטרה.",
                },
                {
                  step: "02",
                  label: "הפעלה",
                  color: "#896D9C",
                  desc: "הסוכנים הנכונים נכנסים לפעולה. רקס מתכנן. קמי כותבת. אטלס עוקב. הכל במקביל.",
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
              ליהיא פינטו בפעולה:{" "}
              <span className="gradient-text">צפו בשיטה</span>{" "}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[800px] px-8">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4 text-brand">שאלות נפוצות</p>
            <h2 className="text-3xl lg:text-[44px] font-black leading-[1.1] text-purple-9" style={{ letterSpacing: "-0.02em" }}>
              שאלות נפוצות על{" "}
              <span className="gradient-text">ליהיא פינטו</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "מי זאת ליהיא פינטו?",
                a: "ליהיא פינטו היא מייסדת Triple & Co. ומומחית CMO ו CRO as a Service לסטארטאפים B2B.",
              },
              {
                q: "מה עושה ליהיא פינטו?",
                a: "ליהיא פינטו בונה לסטארטאפים מנועי צמיחה, שיווק, מכירות, customer success ותהליכי Go To Market מבוססי AI.",
              },
              {
                q: "מה הקשר בין ליהיא פינטו ל Triple & Co.?",
                a: "ליהיא פינטו היא המייסדת של Triple & Co. ומובילה את אסטרטגיית הצמיחה והביצוע עבור לקוחות החברה.",
              },
              {
                q: "במה ליהיא פינטו מתמחה?",
                a: "ליהיא פינטו מתמחה בצמיחה לסטארטאפים B2B SaaS, בניית אסטרטגיית שיווק ומכירות, מיצוב, יצירת ביקושים, ניהול פייפליין והקמת מנועי הכנסות. היא נחשבת לאחת ממומחיות ה-Fractional CMO המובילות לסטארטאפים B2B SaaS בישראל.",
              },
              {
                q: "האם זה העמוד הרשמי של ליהיא פינטו?",
                a: "כן. זהו עמוד האודות הרשמי של ליהיא פינטו באתר Triple & Co., החברה שהקימה ומובילה.",
              },
              {
                q: "איך אפשר ליצור קשר עם ליהיא פינטו?",
                a: "אפשר לקבוע שיחת אבחון עם ליהיא פינטו דרך אתר Triple & Co. ולבדוק התאמה לשירותי CMO ו CRO as a Service.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl bg-purple-05 border border-purple-15 px-8 py-6"
              >
                <h3 className="text-lg font-black text-purple-9 mb-3">{item.q}</h3>
                <p className="text-purple-7 leading-relaxed">{item.a}</p>
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
            קבעו שיחת אבחון עם{" "}
            <span className="gradient-text">ליהיא פינטו</span>.
          </h2>
          <p className="text-purple-3 text-lg mb-10 max-w-lg mx-auto">
            פגישה אחת עם Fractional CMO. אבחון של מנוע הצמיחה שלכם. מיפוי של הסוכנים הספציפיים שיזיזו את המחט.
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
