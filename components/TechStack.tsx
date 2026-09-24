"use client";

import React from "react";
import {
  ScrollReveal,
  DividerReveal,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "@/components/motion/MotionPrimitives";

import { HeadingReveal } from "@/components/motion/Premium";
export function TechStack() {
  const coreShowcases = [
    {
      number: "01",
      name: "NEXT.JS",
      sysLabel: "SYS.RUNTIME // V14+",
      role: "Application Architecture",
      subRole: "React Server Components & Streaming",
      description:
        "Streaming React Server Components, nested route hierarchies, and automated edge prefetching. Zero client-side hydration overhead for static UI components.",
      specs: ["APP ROUTER ARCHITECTURE", "STREAMING RSC", "SUB-50MS TTFB"],
    },
    {
      number: "02",
      name: "TYPESCRIPT",
      sysLabel: "SYS.LANGUAGE // STRICT",
      role: "Type-Safe Systems",
      subRole: "End-to-End Schema Integrity",
      description:
        "End-to-end type safety eliminating runtime null pointer exceptions, state ambiguity, and silent UI bugs across client-server boundaries.",
      specs: ["100% STRICT MODE", "COMPILE-TIME VERIFICATION", "ZERO RUNTIME NULLS"],
    },
    {
      number: "03",
      name: "TAILWIND CSS",
      sysLabel: "SYS.DESIGN // TOKENS",
      role: "Zero-Runtime Tokens",
      subRole: "Atomic Design Token Architecture",
      description:
        "Zero runtime CSS overhead with atomic utility tokens, strict contrast enforcement, and high-density responsive styling compiled to minimal bytes.",
      specs: ["0KB RUNTIME OVERHEAD", "WCAG AA CONTRAST", "DARK HARMONIZED PALETTE"],
    },
    {
      number: "04",
      name: "REACT 18",
      sysLabel: "SYS.RENDER // CONCURRENT",
      role: "Concurrent Rendering",
      subRole: "Selective Hydration Engine",
      description:
        "Concurrent rendering engine with selective hydration and sub-50ms First Input Delay for fluid, responsive user interactions.",
      specs: ["CONCURRENT PIPELINE", "SELECTIVE HYDRATION", "SUB-50MS FID"],
    },
  ];

  const secondaryTech = [
    {
      code: "05",
      name: "VERCEL EDGE",
      role: "DISTRIBUTED RUNTIME",
      detail: "Sub-10ms cold starts across global edge regions with distributed CDN caching.",
    },
    {
      code: "06",
      name: "ZOD ENGINE",
      role: "DATA INTEGRITY",
      detail: "Runtime payload validation for forms, server actions, and API boundaries.",
    },
    {
      code: "07",
      name: "FRAMER MOTION",
      role: "HIGH-PERFORMANCE SPRINGS",
      detail: "GPU-accelerated micro-interactions and smooth physical springs.",
    },
    {
      code: "08",
      name: "LUCIDE ICONS",
      role: "VECTOR GRAPHICS",
      detail: "Tree-shakable clean geometric icons compiled at zero runtime penalty.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-background-secondary relative overflow-hidden">
      {/* Background Engineering Mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>PRODUCTION INFRASTRUCTURE</span>
            </div>
            <HeadingReveal delay={0.1}>
              <h2 className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.035em] text-foreground leading-[0.88]">
                Engineered on<br />
                <span className="text-white/95">Next.js &amp; TypeScript</span>
              </h2>
            </HeadingReveal>
          </div>

          <div className="max-w-md space-y-2 lg:text-right">
            <div className="inline-block font-mono text-[10px] text-accent uppercase tracking-[0.25em] rounded-full border border-accent/30 bg-accent/5 px-3 py-1">
              FOUNDATION: ZERO RUNTIME OVERHEAD
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
              Every technology is selected strictly for execution speed, developer velocity, and long-term architectural stability. Zero speculative dependencies.
            </p>
          </div>
        </ScrollReveal>

        <DividerReveal className="border-t border-white/10" />

        {/* Softened Editorial Showcase Panels */}
        <StaggerContainer className="space-y-5 mt-10">
          {coreShowcases.map((tech) => (
            <StaggerItem key={tech.name}>
              <div data-spotlight
                tabIndex={0}
                className="group rounded-2xl border border-white/[0.08] hover:border-accent/40 focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none bg-surface/40 hover:bg-surface/80 p-6 sm:p-8 lg:p-10 transition-all duration-300 ease-out hover:-translate-y-0.5 cursor-default"
              >
                {/* Technical Meta Header */}
                <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-400 group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">
                      {tech.number}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-zinc-600 font-normal">
                      / 04
                    </span>
                    <span className="text-white/20 mx-1">|</span>
                    <span className="uppercase tracking-widest text-[11px] text-zinc-400">{tech.sysLabel}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600 hidden sm:inline">
                    CORE INFRASTRUCTURE
                  </span>
                </div>

                {/* Graphic Typography: Technology Name */}
                <h3 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200 leading-[0.9]">
                  {tech.name}
                </h3>

                {/* Editorial Hairline Separator */}
                <hr className="border-white/10 my-5 sm:my-6" />

                {/* Editorial Technical Description Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-5">
                    <div className="font-display text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight leading-tight">
                      {tech.role}
                    </div>
                    <div className="mt-1 font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                      {tech.subRole}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {tech.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {tech.specs.map((spec, sIdx) => (
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

        {/* Secondary Infrastructure Array (Softened Container) */}
        <ScaleIn className="mt-10 rounded-3xl border border-white/[0.08] bg-surface/80 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest">
              [ SUPPORTING INFRASTRUCTURE &amp; PROTOCOLS ]
            </span>
            <span className="font-mono text-[10px] text-zinc-500 uppercase">TIER-02 SPECIFICATIONS</span>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {secondaryTech.map((item) => (
              <StaggerItem key={item.code}>
                <div data-spotlight
                  tabIndex={0}
                  className="rounded-xl border border-white/5 hover:border-accent/30 focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none p-5 group hover:bg-surface/60 transition-all duration-300 ease-out hover:-translate-y-0.5 cursor-default"
                >
                  <div className="flex items-baseline justify-between font-mono text-[11px] mb-2">
                    <span className="text-accent font-bold">[{item.code}]</span>
                    <span className="text-zinc-500 uppercase tracking-wider text-[10px]">VERIFIED</span>
                  </div>
                  <div className="font-display text-xl font-black uppercase text-white group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200 tracking-tight">
                    {item.name}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-accent/90 uppercase tracking-wider">
                    {item.role}
                  </div>
                  <p className="mt-2 text-xs text-zinc-400 font-sans leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScaleIn>
      </div>
    </section>
  );
}

export default TechStack;
