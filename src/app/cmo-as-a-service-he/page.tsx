import type { Metadata } from "next";
import Link from "next/link";
import { HtmlLangController } from "@/components/HtmlLangController";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    absolute: "CMO as a Service לחברות B2B | Triple & Co.",
  },
  description:
    "CMO as a Service לחברות טכנולוגיה B2B: מנהיגות שיווק בכירה של ליהיא פינטו וצוות של 8 סוכני AI מפוקחים, במנוי חודשי אחד של $5,000 עד $15,000. מתחילים באבחון הכנסות חינם.",
  alternates: {
    canonical: "https://www.tripleandco.com/cmo-as-a-service-he",
    languages: {
      "he-IL": "/cmo-as-a-service-he",
      en: "/cmo-as-a-service",
      "x-default": "/cmo-as-a-service",
    },
  },
  openGraph: {
    title: "CMO as a Service לחברות B2B | Triple & Co.",
    description:
      "מנוי אחד שמחליף את כל הקבלנים: אסטרטגיית שיווק בכירה של ליהיא פינטו וביצוע יומי של 8 סוכני AI מפוקחים.",
    url: "https://www.tripleandco.com/cmo-as-a-service-he",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CMO as a Service",
  serviceType: "סמנכ\u05f4לית שיווק כשירות לחברות B2B",
  inLanguage: "he",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["Israel", "US", "Europe"],
  audience: {
    "@type": "Audience",
    audienceType: "חברות טכנולוגיה B2B",
  },
  description:
    "CMO as a Service לחברות טכנולוגיה B2B: מנהיגות שיווק בכירה של ליהיא פינטו וצוות של 8 סוכני AI מפוקחים שמבצעים את העבודה מדי יום. כל תוצר עובר בקרה אנושית לפני פרסום.",
  url: "https://www.tripleandco.com/cmo-as-a-service-he",
  offers: {
    "@type": "Offer",
    url: "https://www.tripleandco.com/pricing",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "USD",
      minPrice: 5000,
      maxPrice: 15000,
      unitCode: "MON",
      unitText: "month",
    },
  },
};

const faqs = [
  {
    q: "מה זה CMO as a Service?",
    a: "מודל שבו חברה מקבלת סמנכ\u05f4לית שיווק בכירה במיקור חוץ יחד עם צוות ביצוע, במנוי חודשי אחד. אצל Triple & Co. זה אומר: ליהיא פינטו מובילה את האסטרטגיה, המיצוב וההודעות, וצוות של 8 סוכני AI מתמחים מבצע את העבודה היומיומית בתוכן, קמפיינים, סושיאל, מחקר, אנליטיקה ווידאו. כל תוצר עובר בקרה אנושית לפני שהוא יוצא.",
  },
  {
    q: "כמה עולה CMO as a Service אצל Triple & Co.?",
    a: "בין $5,000 ל-$15,000 לחודש, כולל את כל 8 סוכני ה-AI ללא תוספת תשלום. המיקום בטווח נקבע לפי היקף האחריות, נפח הביצוע ומספר השווקים. לשם השוואה, שכירת CMO במשרה מלאה בהייטק הישראלי עולה בממוצע כ-42,000 ש\u05f4ח בחודש בשכר בלבד, לפני עלויות מעסיק וגיוס.",
  },
  {
    q: "במה זה שונה משכירת סמנכ\u05f4ל שיווק במיקור חוץ רגיל?",
    a: "סמנכ\u05f4ל שיווק במיקור חוץ נותן אסטרטגיה, אבל הביצוע נשאר אצלכם או מתפזר בין פרילנסרים וסוכנויות. כאן האסטרטגיה והביצוע יושבים תחת קורת גג אחת: מי שקובעת את הכיוון היא גם מי שאחראית שהעבודה תישלח בפועל, עם צוות AI שעובד מדי יום.",
  },
  {
    q: "מה מקבלים בחודש הראשון?",
    a: "השבועיים הראשונים הם אבחון: מיצוב, ניתוח משפך ומתמטיקת פייפליין. עד השבוע השלישי יש תוכנית מתועדפת והצוות כבר משיק את הספרינט הראשון. רוב הלקוחות רואים תוכן, קמפיינים ודוחות חיים בתוך החודש הראשון.",
  },
  {
    q: "האם זה מתאים גם לחברות שמוכרות לשוק האמריקאי?",
    a: "כן, זה בדיוק הפרופיל. Triple & Co. עובדת עם חברות ישראליות שמוכרות לארה\u05f4ב ולאירופה: אנגלית ברמת שפת אם, ניסיון בגיוס של יותר מ-$70M בחברות שליהיא הובילה בהן את השיווק, והיכרות עומק עם הקונה האמריקאי.",
  },
];

const pillars = [
  {
    title: "ליהיא פינטו מובילה את האסטרטגיה",
    description:
      "יותר מ-15 שנות ניסיון ב-B2B SaaS, יותר מ-$70M גויסו בחברות שבהן הובילה את השיווק, וההכנסות שולשו שוב ושוב. מיצוב, הודעות, ארכיטקטורת פייפליין ודיווח להנהלה יושבים אצל מנהלת אחת שאחראית לתוצאה.",
  },
  {
    title: "8 סוכני AI מבצעים מדי יום",
    description:
      "קמיל (שפת מותג), רקס (אסטרטגיית צמיחה), זארה (סושיאל), נובה (מחקר), אטלס (אנליטיקה), סייג\u05f3 (מיחזור תוכן), וגה (ארט דיירקשן) ולומן (וידאו). כל אחד אחראי לתפקיד אחד, וכולם כלולים במחיר.",
  },
  {
    title: "בקרה אנושית על כל תוצר",
    description:
      "שום דבר לא מתפרסם בלי שעבר בדיקה של ליהיא. זה ההבדל בין תוכן AI גנרי לבין מערכת שיווק שנשמעת כמו החברה שלכם ועומדת מאחורי מה שהיא אומרת.",
  },
];

export default function CmoAsAServiceHePage() {
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
                מנוי אחד &middot; אסטרטגיה וביצוע &middot; סוכני AI כלולים
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              CMO as a Service{" "}
              <span className="gradient-text">לחברות B2B</span>
            </h1>
            <p className="text-purple-8 text-lg lg:text-xl leading-relaxed mb-4">
              מנוי חודשי אחד שמחליף את הטלאים של יועץ אסטרטגי, סוכנות
              ופרילנסרים: מנהיגות שיווק בכירה של ליהיא פינטו, וצוות של 8 סוכני
              AI מפוקחים שמבצע את העבודה מדי יום.
            </p>
            <p className="text-purple-7 text-[15.5px] leading-relaxed mb-8">
              $5,000 עד $15,000 לחודש, כל הסוכנים כלולים. מתחילים באבחון
              הכנסות חינם של 30 דקות.
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

      {/* Model */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-12">
              איך זה <span className="gradient-text">עובד</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={0.05 + i * 0.04}>
                <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-base)] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
                  <h3 className="text-xl font-black tracking-tight text-purple-9 mb-4">
                    {p.title}
                  </h3>
                  <p className="text-purple-7 text-[15px] leading-relaxed">
                    {p.description}
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
              מוכנים להפסיק לנהל ספקים{" "}
              <span className="gradient-text">ולהתחיל לייצר פייפליין?</span>
            </h2>
            <p className="text-purple-2 text-lg leading-relaxed mb-8">
              שיחת אבחון חינם של 30 דקות עם ליהיא. עוברים יחד על מתמטיקת
              המשפך שלכם ויוצאים עם שלושה מהלכים קונקרטיים לרבעון הקרוב.
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
