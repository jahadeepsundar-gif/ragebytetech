"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowUp, Terminal, Mail } from "lucide-react";
import {
  ScrollReveal,
  TextReveal,
  DividerReveal,
} from "@/components/motion/MotionPrimitives";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const editorialNav = [
    { num: "01", label: "WORK", href: "/work", description: "Selected Web Platforms & Applications" },
    { num: "02", label: "SERVICES", href: "/services", description: "Technical Architecture & Engineering" },
    { num: "03", label: "ABOUT", href: "/about", description: "Studio Philosophy & Senior Team" },
    { num: "04", label: "CONTACT", href: "/contact", description: "Project Intake & Direct Inquiries" },
  ];

  const focusAreas = [
    "Next.js App Router Architecture",
    "High-Conversion Landing Pages",
    "Headless E-Commerce Engines",
    "Design Systems & WebGL/ThreeUI",
    "Sub-Second Performance Retainers",
  ];

  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-[#050507] text-foreground relative overflow-hidden">
      {/* Subtle Atmospheric Studio Ambient Glow - no checkered patterns or grids */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-accent/5 rounded-full blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32 lg:pb-16">
        {/* =================================================== */}
        {/* TOP: Monumental Editorial Statement & Primary Action */}
        {/* =================================================== */}
        <ScrollReveal className="pb-16 sm:pb-20">
          <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest mb-6 sm:mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>[09] // FINALE — STUDIO DISPATCH</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-14">
            <div className="max-w-4xl">
              <TextReveal delay={0.1}>
                <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] text-white leading-[0.88] select-none">
                  LET&apos;S BUILD<br />
                  <span className="text-white/95">SOMETHING </span>
                  <span className="text-accent">TECHNICAL.</span>
                </h2>
              </TextReveal>
              <p className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Direct access to senior engineers and creative technologists.
                Zero account managers, zero generic templates. Built for performance, stability, and scale.
              </p>
            </div>

            {/* Primary Action Suite */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 rounded-full border border-accent bg-accent px-8 py-4 sm:px-9 sm:py-4.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_28px_-4px_rgba(244,44,29,0.4)] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_36px_-2px_rgba(244,44,29,0.6)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="mailto:hello@ragebyte.tech"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 sm:px-7 sm:py-4.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300 transition-all duration-300 hover:border-accent hover:text-white hover:bg-white/[0.06] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Mail className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                <span>hello@ragebyte.tech</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Gossamer Hairline Divider */}
        <DividerReveal className="border-t border-white/[0.08] mb-14 sm:mb-20" />

        {/* =================================================== */}
        {/* CENTER: Editorial Navigation & Compact Studio Ledger */}
        {/* =================================================== */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Side: Large Editorial Navigation Index (6 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-6 block">
                {"//"} INDEX
              </span>

              <nav aria-label="Footer navigation" className="divide-y divide-white/[0.06]">
                {editorialNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group py-4 sm:py-5 flex items-center justify-between transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-zinc-600 transition-colors duration-200 group-hover:text-accent">
                        [{item.num}]
                      </span>
                      <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-zinc-300 transition-all duration-200 group-hover:text-white group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline font-mono text-[11px] text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">
                        {item.description}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Side: Compact Studio Coordinates & Inquiries (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-10 lg:pl-8">
              {/* Studio Identity & Manifesto */}
              <div className="space-y-5">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
                  aria-label="RageByte Home"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] p-2 transition-colors duration-200 group-hover:border-accent">
                    <Terminal className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-2xl sm:text-3xl font-black uppercase tracking-[-0.03em] text-white leading-none">
                      RAGE<span className="text-accent">BYTE</span>
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase mt-0.5">
                      TECHNICAL WEB STUDIO
                    </span>
                  </div>
                </Link>

                <p className="max-w-lg text-sm text-zinc-400 font-sans leading-relaxed">
                  A specialized, technically strong web development studio building custom Next.js applications,
                  headless commerce storefronts, and performance-first digital software.
                </p>

                {/* Live Availability Status Pill */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-mono text-zinc-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span>Accepting Select Inquiries // Q3-Q4 2026</span>
                </div>
              </div>

              {/* Focus Areas (Editorial Tags, not rigid boxes) */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500 block">
                  {"//"} CAPABILITIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-zinc-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent/70" />
                      <span>{area}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Studio Coordinates & SLA */}
              <div className="pt-2 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-400">
                <div>
                  <span className="text-[10px] text-zinc-600 block uppercase tracking-wider mb-1">
                    Direct Contact
                  </span>
                  <a
                    href="mailto:hello@ragebyte.tech"
                    className="hover:text-accent transition-colors duration-200"
                  >
                    hello@ragebyte.tech
                  </a>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-600 block uppercase tracking-wider mb-1">
                    Engineering Intake
                  </span>
                  <span className="text-zinc-300">Direct Senior Engineer Response &lt; 24h</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =================================================== */}
        {/* BOTTOM: Minimal Editorial Utility Row */}
        {/* =================================================== */}
        <div className="mt-16 sm:mt-24 flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.08] pt-8 gap-4 font-mono text-xs text-zinc-500">
          <p>
            &copy; {currentYear} RageByte Web Studio. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Edge Deployed</span>
            </span>
            <span className="hidden sm:inline text-zinc-600">/</span>
            <span className="text-zinc-400">WCAG AA Compliant</span>
            <span className="hidden sm:inline text-zinc-600">/</span>
            <span className="text-zinc-400">LCP &lt; 1.0s Spec</span>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 text-zinc-400 hover:text-accent hover:border-accent/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ml-2"
              aria-label="Scroll back to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
