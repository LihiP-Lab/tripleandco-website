import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ליהיא פינטו | Fractional CMO לסטארטאפים B2B | Triple & Co.",
  description:
    "ליהיא פינטו, מייסדת Triple & Co. — Fractional CMO ו-CRO לסטארטאפים B2B SaaS. 15 שנים, 70M$ שגויסו, 8 סוכני AI. קבעו שיחת אבחון עכשיו ←",
  alternates: { canonical: "https://www.tripleandco.com/about-he" },
  openGraph: {
    title: "ליהיא פינטו | Fractional CMO לסטארטאפים B2B | Triple & Co.",
    description:
      "ליהיא פינטו, מייסדת Triple & Co. — Fractional CMO ו-CRO לסטארטאפים B2B SaaS. 15 שנים, 70M$ שגויסו, 8 סוכני AI. קבעו שיחת אבחון עכשיו.",
    url: "https://www.tripleandco.com/about-he",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "ליהיא פינטו | Fractional CMO לסטארטאפים B2B | Triple & Co.",
    description:
      "ליהיא פינטו, מייסדת Triple & Co. — Fractional CMO ו-CRO לסטארטאפים B2B SaaS. 15 שנים, 70M$ שגויסו, 8 סוכני AI.",
  },
};

export default function AboutHeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
