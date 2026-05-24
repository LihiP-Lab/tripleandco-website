import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Triple & Co. | AI-Powered CMO & CRO as a Service for B2B",
    template: "%s | Triple & Co.",
  },
  description:
    "Israel's leading CMO & CRO-as-a-Service for B2B companies ready to grow with AI. Led by Lihi Pinto with 15+ years of experience scaling B2B companies.",
  keywords: [
    "CMO as a Service",
    "CRO as a Service",
    "B2B marketing",
    "AI marketing",
    "revenue growth",
    "Lihi Pinto",
    "Triple and Co",
  ],
  openGraph: {
    title: "Triple & Co. | AI-Powered CMO & CRO as a Service",
    description:
      "Israel's leading CMO & CRO-as-a-Service for B2B companies ready to grow with AI.",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
