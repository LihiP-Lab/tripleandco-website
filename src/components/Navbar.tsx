"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/cmo-as-a-service", label: "CMO as a Service" },
  { href: "/geo", label: "GEO" },
  { href: "/agents", label: "Marketing Agents" },
  { href: "/ai-marketing-agents", label: "AI Agents Guide" },

  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 glass-header" role="banner">
      <div className="mx-auto max-w-[1200px] px-8 flex items-center justify-between py-[18px] gap-6">
        <Link href="/" className="inline-flex items-center h-9" aria-label="Triple & Co. home">
          <Image
            src={theme === "dark" ? "/images/logos/logo-bright.png" : "/images/logos/logo-dark.png"}
            alt="Triple & Co."
            width={140}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-purple-7" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors hover:text-brand ${isActive ? "text-brand" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bar rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/revenue-diagnostic#book"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(254,52,101,.20)]"
          >
            Book a Diagnostic Call <span>&#8594;</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-purple-7 hover:text-foreground"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className="lg:hidden border-t border-purple-15 overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "360px" : "0",
          opacity: mobileOpen ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <nav className="px-8 py-4 space-y-3" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium hover:text-brand ${isActive ? "text-brand" : "text-purple-7"}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/revenue-diagnostic#book"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center rounded-[10px] bg-brand px-5 py-3 text-sm font-semibold text-white"
          >
            Book a Diagnostic Call &#8594;
          </Link>
        </nav>
      </div>
    </header>
  );
}
