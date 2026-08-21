import type { Metadata } from "next";
import { HtmlLangController } from "@/components/HtmlLangController";

export const metadata: Metadata = {
  title: {
    absolute: "ליהיא פינטו | CMO ו-CRO as a Service | Triple & Co.",
  },
  description:
    "מומחית CMO ו-CRO as a Service לסטארטאפים B2B Tech עם 15 שנות ניסיון. בניית מנועי צמיחה מבוססי סוכני AI בניהול אסטרטגי של ליהיא פינטו. קבעו שיחת אבחון.",
  alternates: {
    canonical: "https://www.tripleandco.com/about-he",
    languages: {
      "he-IL": "/about-he",
      en: "/about",
      "x-default": "/about",
    },
  },
  openGraph: {
    title:
      "ליהיא פינטו | CMO ו-CRO as a Service לסטארטאפים B2B Tech | Triple & Co.",
    description:
      "מומחית CMO ו-CRO as a Service לסטארטאפים B2B Tech עם 15 שנות ניסיון. בניית מנועי צמיחה מבוססי סוכני AI בניהול אסטרטגי של ליהיא פינטו. קבעו שיחת אבחון.",
    url: "https://www.tripleandco.com/about-he",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ליהיא פינטו | CMO ו-CRO as a Service לסטארטאפים B2B Tech | Triple & Co.",
    description:
      "מומחית CMO ו-CRO as a Service לסטארטאפים B2B Tech עם 15 שנות ניסיון. בניית מנועי צמיחה מבוססי סוכני AI בניהול אסטרטגי של ליהיא פינטו. קבעו שיחת אבחון.",
  },
};

export default function AboutHeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="he" dir="rtl">
      <HtmlLangController lang="he" dir="rtl" />
      {children}
    </div>
  );
}
