import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
