import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackToTop } from "@/components/BackToTop";
import { MobileCTA } from "@/components/MobileCTA";
import { PageTransition } from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tripleandco.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default:
      "AI-Powered CMO & CRO as a Service for B2B | Triple & Co.",
    template: "%s | Triple & Co.",
  },
  description:
    "Triple & Co. gives B2B tech companies fractional CMO & CRO leadership plus a supervised team of 8 AI marketing specialists. Built for revenue growth. Led by Lihi Pinto.",
  keywords: [
    "CMO as a Service",
    "CRO as a Service",
    "B2B marketing",
    "AI marketing",
    "revenue growth",
    "Lihi Pinto",
    "Triple and Co",
    "fractional CMO",
    "AI marketing agents",
  ],
  openGraph: {
    title: "AI-Powered CMO & CRO as a Service for B2B | Triple & Co.",
    description:
      "On-demand executive marketing and revenue leadership, combined with a team of AI specialists that do the work. Results in weeks, not quarters. Led by Lihi Pinto.",
    url: "https://www.tripleandco.com",
    siteName: "Triple & Co.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          {/* Skip to content, accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-[10px] focus:bg-brand focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-semibold focus:outline-none"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <BackToTop />
          <MobileCTA />
        </ThemeProvider>
        <Analytics />
        {/* LinkedIn Insight Tag (Partner ID 3601938), page-load tracking,
            retargeting audiences, and event-based conversions (e.g. Revenue
            Diagnostic Booked, fired from CalendlyInline). */}
        <Script id="linkedin-insight-tag" strategy="afterInteractive">
          {`_linkedin_partner_id="3601938";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`}
        </Script>
      </body>
    </html>
  );
}
