import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ליהיא פינטו | מייסדת Triple & Co. | CMO ו CRO as a Service",
  description:
    "ליהיא פינטו, מייסדת Triple & Co., מספקת CMO ו CRO as a Service לסטארטאפים B2B SaaS. ניסיון של 15 שנים, מעל 70 מיליון דולר שגויסו, ובניית מנועי צמיחה מבוססי AI.",
  alternates: { canonical: "https://www.tripleandco.com/about-he" },
  openGraph: {
    title: "ליהיא פינטו | מייסדת Triple & Co. | CMO ו CRO as a Service",
    description:
      "ליהיא פינטו, מייסדת Triple & Co., מספקת CMO ו CRO as a Service לסטארטאפים B2B SaaS. ניסיון של 15 שנים, מעל 70 מיליון דולר שגויסו.",
    url: "https://www.tripleandco.com/about-he",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "ליהיא פינטו | מייסדת Triple & Co. | CMO ו CRO as a Service",
    description:
      "ליהיא פינטו, מייסדת Triple & Co., מספקת CMO ו CRO as a Service לסטארטאפים B2B SaaS.",
  },
};

export default function AboutHeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
