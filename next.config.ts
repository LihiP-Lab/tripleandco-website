import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
