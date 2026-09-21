import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-surface-border bg-background-secondary text-foreground relative overflow-hidden">
      {/* Subtle bottom mesh pattern */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-40 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        {/* Top Direct Engagement Banner */}
        <div className="mb-16 border border-surface-border/80 bg-surface/30 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] font-semibold tracking-widest text-accent uppercase flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                [DIRECT SENIOR ENGAGEMENT]
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground leading-[0.95]">
                Have an ambitious web project in mind?
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
                We take on a limited number of high-stakes engagements each quarter. Direct developer access, zero account-manager layers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-background transition-all duration-200 hover:bg-accent-hover active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:hello@ragebyte.tech"
                className="inline-flex items-center gap-2 border border-white/20 bg-background/80 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-foreground transition-all duration-200 hover:border-white/50 active:scale-[0.98]"
              >
                <Mail className="h-4 w-4 text-accent" />
                <span>hello@ragebyte.tech</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Directory Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 lg:gap-12">
          {/* Brand & Mission (Col 1 & 2) */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
            >
              <div className="flex h-8 w-8 items-center justify-center border border-surface-border bg-surface p-1.5 transition-colors group-hover:border-accent">
                <Terminal className="h-4 w-4 text-accent" />
              </div>
              <span className="font-display text-3xl font-black uppercase tracking-tight text-foreground">
                RAGE<span className="text-accent">BYTE</span>
              </span>
            </Link>
            <p className="max-w-sm text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              A specialized, technically strong web development studio building custom Next.js applications,
              headless e-commerce platforms, and performance-driven digital tools.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>Accepting New Project Inquiries</span>
            </div>
          </div>

          {/* Navigation Links (Col 3) */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Studio Routes
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-muted-foreground transition-colors hover:text-accent">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-accent">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-accent">
                  About &amp; Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-accent">
                  Project Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Breakdown (Col 4) */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Core Capabilities
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Next.js Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  High-Conversion Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Corporate &amp; Business Sites
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Headless E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  UI/UX &amp; Design Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Performance &amp; Retainer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Stack & Architecture (Col 5) */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Architecture
            </h3>
            <div className="mt-4 space-y-2 text-xs font-mono text-muted-foreground">
              <div className="border border-surface-border bg-surface/50 p-2.5">
                <span className="text-accent font-semibold block">Next.js 14+</span>
                <span className="text-[11px] text-zinc-400">App Router &amp; Server Components</span>
              </div>
              <div className="border border-surface-border bg-surface/50 p-2.5">
                <span className="text-accent font-semibold block">TypeScript</span>
                <span className="text-[11px] text-zinc-400">Strict End-to-End Type Safety</span>
              </div>
              <div className="border border-surface-border bg-surface/50 p-2.5">
                <span className="text-accent font-semibold block">Tailwind CSS</span>
                <span className="text-[11px] text-zinc-400">Zero-Runtime Design Tokens</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Telemetry, and Architecture Notes */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-surface-border/70 pt-8 sm:flex-row gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {currentYear} RageByte Web Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Edge Ready</span>
            </span>
            <span>WCAG AA Accessible</span>
            <Link href="/contact" className="hover:text-accent transition-colors flex items-center gap-1 text-accent">
              <span>hello@ragebyte.tech</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
