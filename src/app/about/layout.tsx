import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lihi Pinto: Israel's Native AI CMO & CRO",
  description:
    "Lihi Pinto is Israel's first native AI CMO/CRO. 15+ years in B2B SaaS, revenue tripled repeatedly, now running 8 specialist AI agents supervised end-to-end.",
  alternates: {
    canonical: "/about",
    languages: {
      en: "/about",
      "he-IL": "/about-he",
      "x-default": "/about",
    },
  },
  openGraph: {
    title: "About Lihi Pinto | Triple & Co.",
    description:
      "Israel's first native AI CMO/CRO. 15+ years in B2B SaaS, now running a supervised team of 8 specialist AI marketing agents.",
    url: "https://www.tripleandco.com/about",
    siteName: "Triple & Co.",
    type: "profile",
  },
};

// The Person node references #organization via worksFor. That node lives on the
// homepage, so /about emits a minimal Organization stub in the same @graph to
// keep the reference resolvable for crawlers that only fetch this page.
const profileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.tripleandco.com/#organization",
      name: "Triple & Co.",
      url: "https://www.tripleandco.com",
      sameAs: [
        "https://www.linkedin.com/company/triple-and-co/",
        "https://www.youtube.com/@Tripleandco",
        "https://clutch.co/profile/triple-co",
      ],
    },
    {
  "@type": "ProfilePage",
  "@id": "https://www.tripleandco.com/about#profile",
  url: "https://www.tripleandco.com/about",
  name: "About Lihi Pinto",
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.tripleandco.com/#lihi-pinto",
    name: "Lihi Pinto",
    alternateName: "Lihi Pinto Fryman",
    url: "https://www.tripleandco.com/about",
    image: "https://www.tripleandco.com/images/lihi-portrait.jpg",
    jobTitle: "Founder, CMO & CRO as a Service",
    worksFor: { "@id": "https://www.tripleandco.com/#organization" },
    description:
      "Founder of Triple & Co. and Israel's first native AI CMO/CRO. 15+ years in B2B SaaS and investment banking, revenue tripled repeatedly. Runs a supervised team of 8 specialist AI marketing agents with human review on every output.",
    knowsAbout: [
      "B2B SaaS Marketing",
      "Go-to-Market Strategy",
      "Revenue Operations",
      "AI Marketing Agents",
      "Brand Strategy",
      "HubSpot",
    ],
    sameAs: [
      "https://www.linkedin.com/in/lihipinto/",
      "https://www.crunchbase.com/person/lihi-pinto-fryman",
      "https://x.com/lihipinto",
      "https://blog.hubspot.com/marketing/author/lihi-pinto-fryman",
      "https://www.womeninretail.com/author/lihipintofryman/",
    ],
      },
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      {children}
    </>
  );
}
