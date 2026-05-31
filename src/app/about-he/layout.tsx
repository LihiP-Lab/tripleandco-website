import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות ליהיא פינטו | ה-CMO/CRO הראשון בישראל עם AI ילידי | Triple & Co.",
  description:
    "ליהיא פינטו היא ה-CMO/CRO הראשון בישראל מסוג Native AI. 15+ שנות ניסיון, גיוס של 70 מיליון דולר, הכנסות שולשו שוב ושוב. כעת מפעילה 8 סוכני AI עם פיקוח מלא.",
  alternates: { canonical: "/about-he" },
  openGraph: {
    title: "אודות ליהיא פינטו | ה-CMO/CRO הראשון בישראל עם AI ילידי | Triple & Co.",
    description:
      "ליהיא פינטו היא ה-CMO/CRO הראשון בישראל מסוג Native AI. 15+ שנות ניסיון, גיוס של 70 מיליון דולר, הכנסות שולשו שוב ושוב.",
    url: "https://www.tripleandco.com/about-he",
  },
};

export default function AboutHeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
