import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "אודות ליהי פינטו | Triple & Co.",
  description:
    "עם ניסיון של יותר מ-15 שנה בבנקאות השקעות ויזמות הייטק, ליהי פינטו גייסה מעל 70 מיליון דולר ושילשה הכנסות של חברות SaaS שוב ושוב.",
  alternates: { canonical: "/about-he" },
  openGraph: {
    title: "אודות ליהי פינטו | Triple & Co.",
    description:
      "עם ניסיון של יותר מ-15 שנה בבנקאות השקעות ויזמות הייטק, ליהי פינטו גייסה מעל 70 מיליון דולר ושילשה הכנסות של חברות SaaS שוב ושוב.",
    url: "https://www.tripleandco.com/about-he",
  },
};

const credentials = [
  "15+ שנות ניסיון ב-B2B SaaS ובנקאות השקעות",
  "גיוס של יותר מ-70 מיליון דולר",
  "שילוש הכנסות בחברת SaaS, שוב ושוב",
  "דוברת עברית ואנגלית. ישראלית ובינלאומית.",
];

export default function AboutHebrewPage() {
  return (
    <div dir="rtl" lang="he">
      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">אודות</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.15] text-purple-9 mb-6">
                היי! אני <span className="gradient-text">ליהי</span>.
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                יש לי ניסיון של יותר מ-15 שנה בבנקאות השקעות ויזמות הייטק.
                גייסתי יותר מ-70 מיליון דולר ובניתי מכונת SaaS שבה שילשתי את
                הכנסות החברה שלי שוב ושוב.
              </p>
              <p className="text-lg text-purple-7 leading-relaxed">
                עכשיו אני במשימה לעזור לסטארטאפים אחרים לעשות בדיוק את אותו
                הדבר.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[360px] rounded-3xl overflow-hidden shadow-[var(--shadow-base)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="ליהי פינטו"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.2] text-purple-9 mb-8">
            יזמים מתמודדים עם אתגרים רבים בדרכם לצמיחה.
          </h2>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-6xl font-black gradient-text">5%</span>
            <span className="text-xl text-purple-7">מהסטארטאפים מצליחים</span>
          </div>
          <p className="text-lg text-purple-7 leading-relaxed mb-6">
            תני ל-Triple &amp; Co. להפוך ליתרון הבלתי הוגן שלך.
          </p>
          <p className="text-purple-7 leading-relaxed mb-6">
            יחד, נעזור לך למקסם את המומנטום ולהאיץ את מאמציך לבנות
            &apos;מכונת כסף&apos; עם פוטנציאל לשלש את ההכנסות שלך.
          </p>
          <p className="text-purple-7 leading-relaxed mb-8">
            חייתי בתוך תרבות הסטארטאפים. כמה הייתי רוצה שה&apos;אני&apos; של
            היום הייתה לצד ליהי של אז. ללמד אותה איך לבנות מערכות ולגדול מהיסוד.
          </p>

          <ul className="mb-8">
            {credentials.map((cred) => (
              <li
                key={cred}
                className="py-3 border-b border-purple-15 last:border-b-0 flex items-center gap-3 text-purple-7"
              >
                <span className="w-2 h-2 rounded-full gradient-bar shrink-0" />
                {cred}
              </li>
            ))}
          </ul>

          <blockquote className="text-lg italic text-purple-9 py-5 px-6 bg-purple-05 border-r-4 border-l-0 border-brand rounded-xl shadow-[var(--shadow-base)] leading-snug">
            &ldquo;בונה את צוות השיווק שהייתי רוצה שיהיה לי כמייסדת בשלב
            מוקדם.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
            מוכנים לעבוד יחד?
          </h2>
          <p className="text-purple-7 mb-10">
            גלו איך AI משנה את מנוע ההכנסות שלכם, עם ליהי פינטו.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
          >
            קבעו שיחת אבחון <span>&#8594;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
