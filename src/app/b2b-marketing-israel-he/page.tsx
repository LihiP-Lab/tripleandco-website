import type { Metadata } from "next";
import Link from "next/link";
import { HtmlLangController } from "@/components/HtmlLangController";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    absolute: "שיווק B2B לחברות טכנולוגיה ישראליות | Triple & Co.",
  },
  description:
    "שיווק B2B לחברות טכנולוגיה ישראליות שמוכרות לארה\u05f4ב ולאירופה: מיצוב, ביקוש ופייפליין בהובלת ליהיא פינטו עם צוות של 8 סוכני AI מפוקחים. אבחון הכנסות חינם.",
  alternates: {
    canonical: "https://www.tripleandco.com/b2b-marketing-israel-he",
    languages: {
      "he-IL": "/b2b-marketing-israel-he",
      en: "/b2b-marketing-israel",
      "x-default": "/b2b-marketing-israel",
    },
  },
  openGraph: {
    title: "שיווק B2B לחברות טכנולוגיה ישראליות | Triple & Co.",
    description:
      "שיווק שנבנה לקונה האמריקאי והאירופי, בהובלה ישראלית: ליהיא פינטו וצוות AI מפוקח, בהתקשרות חודשית אחת.",
    url: "https://www.tripleandco.com/b2b-marketing-israel-he",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "B2B Marketing for Israeli Tech Companies",
  serviceType: "שיווק B2B לחברות טכנולוגיה ישראליות",
  inLanguage: "he",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["Israel", "US", "Europe"],
  audience: {
    "@type": "Audience",
    audienceType: "חברות טכנולוגיה B2B ישראליות",
  },
  description:
    "שיווק B2B לחברות ישראליות שמוכרות לארה\u05f4ב ולאירופה: מיצוב, יצירת ביקוש ופייפליין בהובלת ליהיא פינטו, עם צוות של 8 סוכני AI מפוקחים וביקורת אנושית על כל תוצר.",
  url: "https://www.tripleandco.com/b2b-marketing-israel-he",
};

const reasons = [
  {
    title: "בנוי לקונה האמריקאי",
    description:
      "המוצר ישראלי, אבל הקונה יושב בניו יורק או בלונדון. ההודעות, התוכן והקמפיינים נכתבים באנגלית ברמת שפת אם, על ידי מי שמכירה את הקונה הזה מבפנים אחרי יותר מ-15 שנה ב-B2B SaaS.",
  },
  {
    title: "מנהיגות בכירה, לא עוד סוכנות",
    description:
      "במקום לתאם בין יועץ, סוכנות ופרילנסרים, מקבלים מנהלת שיווק אחת שאחראית למספר: ליהיא פינטו, שבחברות שהובילה גויסו יותר מ-$70M וההכנסות שולשו שוב ושוב.",
  },
  {
    title: "ביצוע בקצב של AI, באחריות של אדם",
    description:
      "צוות של 8 סוכני AI מתמחים מריץ תוכן, קמפיינים, סושיאל, מחקר, אנליטיקה ווידאו מדי יום, וכל תוצר עובר בקרה אנושית לפני פרסום. מהירות של מערכת, אמינות של מנהלת בכירה.",
  },
];

const faqs = [
  {
    q: "כמה עולה שיווק B2B במיקור חוץ בישראל?",
    a: "בשוק הישראלי, מנהל שיווק במיקור חוץ עולה בדרך כלל 6,000 עד 12,000 ש\u05f4ח בחודש, ו-CMO בכיר לחברת טכנולוגיה נע בין 25,000 ל-50,000 ש\u05f4ח בחודש עבור יומיים עד ארבעה ימים בשבוע. התקשרות של Triple & Co., שכוללת גם את הביצוע של צוות סוכני ה-AI ולא רק אסטרטגיה, נעה בין $5,000 ל-$15,000 לחודש.",
  },
  {
    q: "מה ההבדל בין Triple & Co. לסוכנות שיווק?",
    a: "סוכנות מבצעת מול בריף שמישהו אחר צריך לכתוב, ולא אחראית למספר ההכנסות. אצלנו האסטרטגיה והביצוע יושבים יחד: ליהיא קובעת את הכיוון, צוות הסוכנים מבצע, והכול נמדד מול פייפליין. ספק אחד, מספר אחד, אחריות אחת.",
  },
  {
    q: "אנחנו מוכרים רק לחו\u05f4ל. למה שנעבוד עם ספק ישראלי?",
    a: "כי הפער הכי יקר של חברות ישראליות הוא בדיוק התרגום בין מוצר מצוין לסיפור שקונה אמריקאי מוכן לשלם עליו. ליהיא עובדת בעברית מולכם ובאנגלית מול השוק, ומביאה ניסיון של שנים במיצוב חברות ישראליות מול קונים בארה\u05f4ב ובאירופה.",
  },
  {
    q: "איך מתחילים?",
    a: "באבחון הכנסות חינם של 30 דקות: עוברים יחד על מתמטיקת המשפך, מזהים את שלושת הפערים המשמעותיים, ויוצאים עם תוכנית פעולה, בין אם נעבוד יחד ובין אם לא.",
  },
];

export default function B2bMarketingIsraelHePage() {
  return (
    <div lang="he" dir="rtl">
      <HtmlLangController lang="he" dir="rtl" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "he",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 mb-6">
              <span className="text-brand text-xs font-bold tracking-widest">
                הובלה ישראלית &middot; אנגלית שפת אם &middot; קונה גלובלי
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              שיווק B2B לחברות טכנולוגיה{" "}
              <span className="gradient-text">ישראליות</span>
            </h1>
            <p className="text-purple-8 text-lg lg:text-xl leading-relaxed mb-4">
              המוצר שלכם מעולה. הסיפור שלו באנגלית פחות. Triple & Co. בונה
              לחברות ישראליות את המיצוב, הביקוש והפייפליין מול הקונה
              האמריקאי והאירופי, בהתקשרות חודשית אחת.
            </p>
            <p className="text-purple-7 text-[15.5px] leading-relaxed mb-8">
              מנהיגות בכירה של ליהיא פינטו, ביצוע יומי של 8 סוכני AI מפוקחים,
              ובקרה אנושית על כל תוצר.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/revenue-diagnostic"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                קביעת אבחון הכנסות חינם
              </Link>
              <Link
                href="/pricing"
                className="text-brand font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                למודלים ומחירים <span>&#8592;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-12">
              למה חברות ישראליות{" "}
              <span className="gradient-text">בוחרות בנו</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={0.05 + i * 0.04}>
                <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-base)] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
                  <h3 className="text-xl font-black tracking-tight text-purple-9 mb-4">
                    {r.title}
                  </h3>
                  <p className="text-purple-7 text-[15px] leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[840px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-12">
              שאלות <span className="gradient-text">נפוצות</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={0.04 * i}>
                <div className="relative bg-white rounded-2xl p-7 shadow-[var(--shadow-base)] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
                  <h3 className="font-bold text-[17px] text-purple-9 mb-3">
                    {f.q}
                  </h3>
                  <p className="text-purple-7 text-[15px] leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-purple-9">
        <div className="mx-auto max-w-[840px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              הקונה שלכם כבר שואל את ChatGPT.{" "}
              <span className="gradient-text">תהיו התשובה.</span>
            </h2>
            <p className="text-purple-2 text-lg leading-relaxed mb-8">
              שיחת אבחון חינם של 30 דקות עם ליהיא, בעברית. עוברים על המשפך
              ויוצאים עם שלושה מהלכים קונקרטיים לרבעון הקרוב.
            </p>
            <Link
              href="/revenue-diagnostic"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              קביעת אבחון הכנסות חינם
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
