import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lihi Pinto | Israel's First Native AI CMO/CRO | Triple & Co.",
  description:
    "Lihi Pinto is Israel's first native AI CMO/CRO, 15+ years in B2B SaaS, $70M+ raised, revenue tripled repeatedly. Now running 8 specialist AI agents supervised end-to-end.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
