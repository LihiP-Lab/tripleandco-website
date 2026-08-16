import type { Metadata } from "next";
import Link from "next/link";
import { HtmlLangController } from "@/components/HtmlLangController";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    absolute: "סוכני AI לשיווק B2B, בפיקוח אנושי | Triple & Co.",
  },
  description:
    "צוות של 8 סוכני AI מתמחים לשיווק B2B: שפת מותג, אסטרטגיה, סושיאל, מחקר, אנליטיקה, מיחזור תוכן, ארט דיירקשן ווידאו. כל תוצר עובר בקרה אנושית של ליהיא פינטו.",
  alternates: {
    canonical: "https://www.tripleandco.com/ai-marketing-agents-he",
    languages: {
      "he-IL": "/ai-marketing-agents-he",
      en: "/ai-marketing-agents",
      "x-default": "/ai-marketing-agents",
    },
  },
  openGraph: {
    title: "סוכני AI לשיווק B2B, בפיקוח אנושי | Triple & Co.",
    description:
      "8 סוכני AI מתמחים, כל אחד אחראי לתפקיד שיווקי אחד, בפיקוח אנושי מלא. כלולים בכל התקשרות חודשית.",
    url: "https://www.tripleandco.com/ai-marketing-agents-he",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Marketing Agents",
  serviceType: "סוכני AI לשיווק B2B בפיקוח אנושי",
  inLanguage: "he",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["Israel", "US", "Europe"],
  audience: {
    "@type": "Audience",
    audienceType: "חברות טכנולוגיה B2B",
  },
  description:
    "צוות של 8 סוכני AI מתמחים לשיווק B2B, כל אחד אחראי לתפקיד אחד, בפיקוח אנושי של ליהיא פינטו. כלולים בכל התקשרות חודשית של Triple & Co.",
  url: "https://www.tripleandco.com/ai-marketing-agents-he",
};

const agents = [
  {
    name: "קמיל (Camille)",
    role: "שפת מותג",
    description:
      "מחלצת את הקול של המותג מהתוכן הקיים שלכם ואוכפת אותו בכל ערוץ, כדי שהחברה תישמע כמו עצמה ולא כמו כל סטארטאפ אחר בלינקדאין.",
  },
  {
    name: "רקס (Rex)",
    role: "אסטרטגיית צמיחה",
    description:
      "מבצע אודיט למנוע הצמיחה, מאתר את הקמפיינים שיזיזו פייפליין באמת, ובונה מפת דרכים של 90 יום ליעד ההכנסות הבא.",
  },
  {
    name: "זארה (Zara)",
    role: "סושיאל",
    description:
      "הופכת את הערוצים החברתיים מרעש רקע לנכס מייצר הכנסות: אודיט ערוצים, לוח תוכן ל-30 יום ומסגרת קול למנכ\u05f4ל או למייסדת.",
  },
  {
    name: "נובה (Nova)",
    role: "מחקר",
    description:
      "ממפה את נוף התוכן בקטגוריה, מזהה את השאלות שהקונים באמת שואלים, ומספקת אסטרטגיה מבוססת ביקוש אמיתי ולא ניחושים.",
  },
  {
    name: "אטלס (Atlas)",
    role: "אנליטיקה",
    description:
      "מאחד את נתוני השיווק והמכירות, בונה אטריביושן מלא לאורך המשפך, ומגיש דשבורד מוכן להנהלה עם תוכנית הקצאת תקציב.",
  },
  {
    name: "סייג' (Sage)",
    role: "מיחזור תוכן",
    description:
      "לוקחת את התוכן שכבר הפקתם ומכפילה את התפוצה שלו: וובינר אחד הופך לתריסר פוסטים, שלושה מאמרים, רצף מיילים ומגנט לידים.",
  },
  {
    name: "וגה (Vega)",
    role: "ארט דיירקשן",
    description:
      "אחראית לכיוון הוויזואלי במותג, בשיווק, באתר ובמצגות. תמיד מגישה שתיים עד ארבע חלופות עם המלצה, אף פעם לא פתרון יחיד.",
  },
  {
    name: "לומן (Lumen)",
    role: "וידאו",
    description:
      "אחראי לווידאו מקצה לקצה: קונספט, תסריט, רשימת שוטים והנחיית עריכה. חושב בסיפור לפני כלים: פתיח, בנייה, פאנץ\u05f3.",
  },
];

const faqs = [
  {
    q: "מה זה סוכני AI לשיווק?",
    a: "תוכנות AI מתמחות שכל אחת מהן אחראית לתפקיד שיווקי אחד מוגדר, כמו עובד מקצועי בצוות. אצל Triple & Co. פועלים 8 סוכנים: שפת מותג, אסטרטגיית צמיחה, סושיאל, מחקר, אנליטיקה, מיחזור תוכן, ארט דיירקשן ווידאו. הם עובדים כמערכת אחת בפיקוח אנושי של ליהיא פינטו.",
  },
  {
    q: "האם התוצרים לא ייראו כמו תוכן AI גנרי?",
    a: "לא, וזו בדיוק הנקודה. הסוכנים עובדים בתוך שפת מותג שחולצה מהתוכן שלכם, על נושאים שנבחרו לפי ביקוש אמיתי, וכל תוצר עובר בקרה אנושית לפני פרסום. תוכן AI גנרי הוא מה שקורה כשמשתמשים בכלים בלי המערכת והפיקוח.",
  },
  {
    q: "כמה עולה צוות הסוכנים?",
    a: "כל 8 הסוכנים כלולים ללא תוספת תשלום בכל התקשרות חודשית של Triple & Co., שנעה בין $5,000 ל-$15,000 לחודש עבור CMO as a Service, CRO as a Service או Head of Growth. סוכן בודד ללא התקשרות מנהיגותית מתחיל ב-$2,500 לחודש.",
  },
  {
    q: "אפשר להתחיל עם סוכן אחד?",
    a: "כן. הרבה התקשרויות מתחילות באבחון עם סוכן אחד, בדרך כלל קמיל לשפת מותג, רקס לאסטרטגיה או נובה למחקר, ומתרחבות משם ככל שנבנה אמון.",
  },
];

export default function AiMarketingAgentsHePage() {
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
                8 מתמחים &middot; תפקיד אחד לכל סוכן &middot; בקרה אנושית מלאה
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              צוות שיווק של{" "}
              <span className="gradient-text">8 סוכני AI</span>
            </h1>
            <p className="text-purple-8 text-lg lg:text-xl leading-relaxed mb-4">
              כל סוכן אחראי לתפקיד שיווקי אחד: שפת מותג, אסטרטגיה, סושיאל,
              מחקר, אנליטיקה, מיחזור תוכן, ארט דיירקשן ווידאו. ליהיא פינטו
              מפקחת על כולם, וכל תוצר עובר בקרה אנושית לפני שהוא יוצא.
            </p>
            <p className="text-purple-7 text-[15.5px] leading-relaxed mb-8">
              כל הצוות כלול בכל התקשרות חודשית, ללא תוספת תשלום.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/revenue-diagnostic"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                קביעת אבחון הכנסות חינם
              </Link>
              <Link
                href="/agents"
                className="text-brand font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                לעמוד הסוכנים המלא (אנגלית) <span>&#8592;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-12">
              הכירו את <span className="gradient-text">הצוות</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((a, i) => (
              <ScrollReveal key={a.name} delay={0.03 * i}>
                <div className="relative h-full bg-white rounded-3xl p-7 shadow-[var(--shadow-base)] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
                  <h3 className="text-lg font-black tracking-tight text-purple-9 mb-1">
                    {a.name}
                  </h3>
                  <p className="text-brand text-sm font-bold mb-3">{a.role}</p>
                  <p className="text-purple-7 text-[14.5px] leading-relaxed">
                    {a.description}
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
              רוצים לראות את הצוות{" "}
              <span className="gradient-text">עובד עליכם?</span>
            </h2>
            <p className="text-purple-2 text-lg leading-relaxed mb-8">
              שיחת אבחון חינם של 30 דקות עם ליהיא, בעברית או באנגלית. בלי
              מצגת מכירה.
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
