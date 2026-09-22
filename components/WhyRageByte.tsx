"use client";

import React from "react";
import {
  ScrollReveal,
  TextReveal,
  DividerReveal,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface Tenet {
  number: string;
  title: string;
  tagline: string;
  statement: string;
  specs: string[];
}

const tenets: Tenet[] = [
  {
    number: "01",
    title: "Modern React Exclusivity",
    tagline: "NEXT.JS 14, RSC & STRICT TYPESCRIPT",
    statement:
      "We build exclusively on modern, high-velocity technologies with end-to-end type safety, Server Components, and zero runtime styling overhead. Zero legacy baggage, zero outdated patterns.",
    specs: ["ZERO LEGACY CODE DEBT", "STRICT TYPESCRIPT ENFORCEMENT", "STREAMING EDGE RUNTIME"],
  },
  {
    number: "02",
    title: "Performance as an Invariant",
    tagline: "CORE WEB VITALS ENGINEERED FROM LINE ZERO",
    statement:
      "Performance is an architectural foundation, not an optimization pass before launch. We engineer critical rendering paths, asset compression, and layout stability into every layout from day one.",
    specs: ["TARGETED SUB-SECOND LCP", "ZERO CUMULATIVE LAYOUT SHIFT", "AUDITED EDGE CACHING"],
  },
  {
    number: "03",
    title: "Zero-Bloat Bespoke Code",
    tagline: "NO PAGE BUILDERS // NO VULNERABLE PLUGINS",
    statement:
      "Every single component is purpose-written for your product. We eliminate bulky visual builders and fragile third-party plugin ecosystems in favor of clean, maintainable modular code.",
    specs: ["100% CLIENT REPO OWNERSHIP", "AUDITED CSS TOKEN BUNDLE", "HANDCRAFTED MODULAR ARCHITECTURE"],
  },
  {
    number: "04",
    title: "Mobile-First Touch Architecture",
    tagline: "FLUID, HANDHELD-OPTIMIZED LAYOUTS",
    statement:
      "The majority of modern traffic arrives on mobile glass. We design and stress-test on physical handheld devices first, scaling up to high-resolution ultrawide desktop displays.",
    specs: ["48PX+ HIT TARGET AUDIT", "FLUID TYPOGRAPHIC CLAMPS", "ACCESSIBLE DRAWER NAVIGATION"],
  },
  {
    number: "05",
    title: "Direct Senior Engineer Access",
    tagline: "ZERO MIDDLEMEN // DIRECT COMMIT COLLABORATION",
    statement:
      "No account managers, junior handoffs, or administrative bureaucracy. You communicate directly with the senior engineers architecting and executing your production platform.",
    specs: ["DIRECT SLACK & GITHUB CADENCE", "24-HOUR TECHNICAL SLA", "TRANSPARENT SPRINT PREVIEWS"],
  },
];

export function WhyRageByte() {
  return (
    <section className="py-20 lg:py-28 border-y border-white/10 bg-background relative overflow-hidden">
      {/* Background Engineering Mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <ScrollReveal className="pb-10">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>[04] // STUDIO MANIFESTO &amp; PRINCIPLES</span>
          </div>
          <TextReveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.035em] text-foreground leading-[0.88]">
              Why High-Growth<br />
              <span className="text-white/95">Teams Choose Us</span>
            </h2>
          </TextReveal>
          <p className="mt-8 font-display text-2xl sm:text-3xl lg:text-4xl text-zinc-300 font-bold uppercase tracking-tight max-w-5xl leading-tight">
            We operate as a dedicated technical engineering lab, not a volume agency.
            Zero administrative layers. Direct senior code execution.
          </p>
        </ScrollReveal>

        <DividerReveal className="border-t border-white/10" />

        {/* The Studio Manifesto Comparison: Softened Editorial Comparison */}
        <ScaleIn className="my-10 rounded-3xl border border-white/[0.08] bg-[#090607]/80 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* The Traditional Agency Model (Anti-Pattern) */}
            <div className="rounded-2xl border border-white/5 bg-black/40 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                    [ ANTI-PATTERN // DEPRECATED ]
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600 uppercase">SYS_LEGACY</span>
                </div>
                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-zinc-400">
                  The Traditional Agency Dilemma
                </h3>
                <p className="mt-1 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  Bureaucracy, Dilution &amp; Plugin Debt
                </p>

                <div className="mt-6 space-y-4 font-mono text-xs text-zinc-500">
                  <div className="border-l-2 border-zinc-800 pl-3.5 py-0.5">
                    <span className="text-zinc-600 block text-[10px] uppercase">FAIL_01 // THE TELEPHONE GAME</span>
                    <span className="text-zinc-400 font-sans text-xs sm:text-sm mt-0.5 block">
                      Account managers act as translation filters between you and outsourced junior developers.
                    </span>
                  </div>
                  <div className="border-l-2 border-zinc-800 pl-3.5 py-0.5">
                    <span className="text-zinc-600 block text-[10px] uppercase">FAIL_02 // THEME RECYCLING</span>
                    <span className="text-zinc-400 font-sans text-xs sm:text-sm mt-0.5 block">
                      Heavily reliant on off-the-shelf WordPress templates, brittle visual builders, and fragile plugins.
                    </span>
                  </div>
                  <div className="border-l-2 border-zinc-800 pl-3.5 py-0.5">
                    <span className="text-zinc-600 block text-[10px] uppercase">FAIL_03 // SCHEDULE DILUTION</span>
                    <span className="text-zinc-400 font-sans text-xs sm:text-sm mt-0.5 block">
                      Sluggish 3 to 6-month delivery cycles inflated with administrative meetings and scope bloat.
                    </span>
                  </div>
                  <div className="border-l-2 border-zinc-800 pl-3.5 py-0.5">
                    <span className="text-zinc-600 block text-[10px] uppercase">FAIL_04 // RUNTIME DEGRADATION</span>
                    <span className="text-zinc-400 font-sans text-xs sm:text-sm mt-0.5 block">
                      Performance treated as an afterthought; poor Core Web Vitals and sluggish mobile responsiveness.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* The RageByte Studio Model (Production Standard) */}
            <div className="rounded-2xl border border-accent/30 bg-[#140c0d]/70 p-6 sm:p-8 shadow-[0_0_24px_rgba(244,44,29,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-accent/20 pb-3">
                  <span className="font-mono text-xs font-semibold text-accent uppercase tracking-widest">
                    [ PRODUCTION STANDARD // ACTIVE ]
                  </span>
                  <span className="font-mono text-[10px] text-accent uppercase">SYS_RAGEBYTE</span>
                </div>
                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                  The RageByte Studio Paradigm
                </h3>
                <p className="mt-1 font-mono text-xs text-accent uppercase tracking-wider">
                  Precision, Velocity &amp; Direct Senior Access
                </p>

                <div className="mt-6 space-y-4 font-mono text-xs">
                  <div className="border-l-2 border-accent pl-3.5 py-0.5">
                    <span className="text-accent block text-[10px] uppercase font-bold">EXEC_01 // DIRECT SENIOR COMMIT</span>
                    <span className="text-zinc-300 font-sans text-xs sm:text-sm mt-0.5 block">
                      Direct collaboration with the senior engineers architecting, testing, and deploying your code.
                    </span>
                  </div>
                  <div className="border-l-2 border-accent pl-3.5 py-0.5">
                    <span className="text-accent block text-[10px] uppercase font-bold">EXEC_02 // 100% BESPOKE CODEBASE</span>
                    <span className="text-zinc-300 font-sans text-xs sm:text-sm mt-0.5 block">
                      Zero visual page builders. Pure Next.js 14 App Router, Server Components, and Tailwind design tokens.
                    </span>
                  </div>
                  <div className="border-l-2 border-accent pl-3.5 py-0.5">
                    <span className="text-accent block text-[10px] uppercase font-bold">EXEC_03 // 7-DAY DELIVERY CADENCE</span>
                    <span className="text-zinc-300 font-sans text-xs sm:text-sm mt-0.5 block">
                      Fast agile sprints with live staged preview deployment URLs delivered every milestone.
                    </span>
                  </div>
                  <div className="border-l-2 border-accent pl-3.5 py-0.5">
                    <span className="text-accent block text-[10px] uppercase font-bold">EXEC_04 // PERFORMANCE INVARIANT</span>
                    <span className="text-zinc-300 font-sans text-xs sm:text-sm mt-0.5 block">
                      Engineered from day one for sub-second page loads, accessible contrast ratios, and zero layout shift.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>

        {/* 5 Core Engineering Tenets (Manifesto Statements) */}
        <DividerReveal className="border-t border-white/10 my-8" />
        <StaggerContainer className="space-y-4">
          {tenets.map((tenet) => (
            <StaggerItem key={tenet.number}>
              <div
                tabIndex={0}
                className="group rounded-2xl border border-white/[0.06] hover:border-accent/40 focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none bg-[#0c0809]/40 hover:bg-[#120a0b]/80 p-6 sm:p-8 lg:p-10 transition-all duration-300 ease-out hover:-translate-y-0.5 cursor-default"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Refined Editorial Display Numeral (Cols 1-2) */}
                  <div className="lg:col-span-2">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-400 group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">
                        {tenet.number}
                      </span>
                      <span className="font-mono text-[11px] tracking-widest text-zinc-600 font-normal">
                        / 05
                      </span>
                    </div>
                    <div className="mt-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      TENET ARCHITECTURE
                    </div>
                  </div>

                  {/* Tenet Title & Tagline (Cols 3-6) */}
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200 leading-[0.98]">
                      {tenet.title}
                    </h3>
                    <p className="mt-2.5 font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                      [ {tenet.tagline} ]
                    </p>
                  </div>

                  {/* Statement & Technical Specs (Cols 7-12) */}
                  <div className="lg:col-span-6 space-y-4">
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {tenet.statement}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {tenet.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300 uppercase tracking-wider"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export default WhyRageByte;
