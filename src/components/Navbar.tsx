"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/logo-bright.png"
              alt="Triple & Co."
              width={140}
              height={38}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/agents"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              AI Agents
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground"
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
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-6 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/agents"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted hover:text-foreground"
            >
              AI Agents
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
