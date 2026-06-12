import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── RETOPICED — Jun 2026: fractional-vs-aaS pillar replaced by Israel cost guide
      {
        source: "/insights/cmo-as-a-service-vs-fractional-cmo",
        destination: "/insights/outsourced-cmo-israel-cost",
        permanent: true,
      },
      // ── CONTENT PRUNING — Jun 2026 ──────────────────────────────────────
      // 1. Expired event: Vitafoods Europe 2023 → Insights Hub
      {
        source: "/insights/5-key-insights-from-vitafoods-europe-2023",
        destination: "/insights",
        permanent: true,
      },
      // 2. Expired date: Q4 2024 CRO article → CRO pillar
      {
        source: "/insights/maximizing-your-startup-growth-in-q4-2024-with-cro-as-a-service",
        destination: "/insights/cro-as-a-service-vs-fractional-cro",
        permanent: true,
      },
      // 3. Keyword cannibalization: 3 thin CMO articles → CMO Mega Pillar
      {
        source: "/insights/exploring-the-rise-of-cmo-as-a-service",
        destination: "/insights/what-is-cmo-as-a-service",
        permanent: true,
      },
      {
        source: "/insights/unlocking-growth-potential-understanding-cmo-services-and-the-rise-of-cmo-as-a-service",
        destination: "/insights/what-is-cmo-as-a-service",
        permanent: true,
      },
      {
        source: "/insights/cro-and-cmo-as-a-service-the-growth-boost-your-startup-has-been-waiting-for",
        destination: "/insights/what-is-cmo-as-a-service",
        permanent: true,
      },
      // ── WORDPRESS LEGACY URLS (without trailing slash) ──────────────────
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/podcasts",
        destination: "/insights/podcasts",
        permanent: true,
      },
      {
        source: "/marketing-agents",
        destination: "/agents",
        permanent: true,
      },
      {
        source: "/hiring",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
      // WordPress trailing-slash variants
      {
        source: "/contact-us/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/our-services/",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/podcasts/",
        destination: "/insights/podcasts",
        permanent: true,
      },
      {
        source: "/marketing-agents/",
        destination: "/agents",
        permanent: true,
      },
      {
        source: "/hiring/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/blog/:slug/",
        destination: "/insights/:slug",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/proposals/:slug",
        destination: "/proposals/:slug/index.html",
      },
    ];
  },
};

export default nextConfig;
