"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="mx-auto max-w-[1200px] px-8 flex items-center justify-between py-[18px] gap-6">
        <Link href="/" className="inline-flex items-center h-9">
          <Image
            src="/images/logos/logo-dark.png"
            alt="Triple & Co."
            width={140}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-purple-7">
          <Link href="/about" className="hover:text-brand transition-colors">
            About
          </Link>
          <Link href="/agents" className="hover:text-brand transition-colors">
            Marketing Agents
          </Link>
          <Link href="/contact" className="hover:text-brand transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(254,52,101,.20)]"
          >
            Book a Diagnostic Call <span>&#8594;</span>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-purple-7 hover:text-foreground"
          aria-label="Toggle menu"
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

      {mobileOpen && (
        <div className="lg:hidden border-t border-purple-15">
          <div className="px-8 py-4 space-y-3">
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-purple-7 hover:text-brand"
            >
              About
            </Link>
            <Link
              href="/agents"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-purple-7 hover:text-brand"
            >
              Marketing Agents
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-purple-7 hover:text-brand"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center rounded-[10px] bg-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Book a Diagnostic Call &#8594;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
