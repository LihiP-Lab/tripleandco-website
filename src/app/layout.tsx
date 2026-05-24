import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackToTop } from "@/components/BackToTop";
import { MobileCTA } from "@/components/MobileCTA";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default:
      "B2B growth needs a new kind of marketing partner. | Triple & Co.",
    template: "%s | Triple & Co.",
  },
  description:
    "Triple & Co. is led by Lihi Pinto. Senior CMO and CRO leadership, full-service B2B marketing execution, and a supervised team of specialist AI agents. Built for revenue in the AI era.",
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
    title: "B2B growth needs a new kind of marketing partner. | Triple & Co.",
    description:
      "Senior CMO and CRO leadership, full-service B2B marketing execution, and a supervised team of specialist AI agents. Built for revenue in the AI era.",
    url: "https://tripleandco.com",
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
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          {/* Skip to content — accessibility */}
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
      </body>
    </html>
  );
}
