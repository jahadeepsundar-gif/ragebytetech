import React from "react";
import {
  Zap,
  Gauge,
  Boxes,
  Smartphone,
  MessagesSquare,
  CheckCircle2,
  XCircle,
} from "lucide-react";

interface Differentiator {
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  bullets: string[];
}

const differentiators: Differentiator[] = [
  {
    title: "Modern React Stack",
    tagline: "Next.js 14, RSC, TypeScript",
    description:
      "We build exclusively on modern, high-velocity technologies with end-to-end type safety, Server Components, and zero runtime styling overhead.",
    icon: Zap,
    bullets: ["Zero legacy code debt", "Strict TypeScript architecture", "Streaming edge runtime caching"],
  },
  {
    title: "Performance by Design",
    tagline: "Optimized Core Web Vitals",
    description:
      "Performance is an architectural pillar, not an afterthought. We optimize critical rendering paths, asset compression, and layout stability from day one.",
    icon: Gauge,
    bullets: ["Targeted sub-second LCP", "Zero cumulative layout shift", "Automated next/image compression"],
  },
  {
    title: "Zero-Bloat Custom Code",
    tagline: "No Page Builders, No Fragile Plugins",
    description:
      "Every line of code is purpose-written for your product. We eliminate bulky visual builders and vulnerable third-party dependencies in favor of clean components.",
    icon: Boxes,
    bullets: ["Handcrafted modular architecture", "Clean, audited CSS output", "100% client codebase ownership"],
  },
  {
    title: "Mobile-First Touch Architecture",
    tagline: "Fluid, Handheld-Optimized Layouts",
    description:
      "The majority of web traffic arrives on mobile screens. We design and stress-test on physical devices first, scaling up to high-resolution ultrawide displays.",
    icon: Smartphone,
    bullets: ["Ergonomic 48px+ touch targets", "Fluid typographic clamp scaling", "Accessible mobile drawer navigation"],
  },
  {
    title: "Direct Senior Engineer Model",
    tagline: "Direct Access, Zero Middlemen",
    description:
      "No account managers, junior handoffs, or administrative bureaucracy. You communicate directly with the senior engineers architecting and executing your platform.",
    icon: MessagesSquare,
    bullets: ["Rapid technical alignment", "Zero communication dilution", "Transparent weekly milestone previews"],
  },
];

export function WhyRageByte() {
  return (
    <section className="py-24 border-y border-surface-border bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Manifesto Header */}
        <div className="border-b border-surface-border/80 pb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>[04] // STUDIO MANIFESTO</span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.92]">
            Why High-Growth Teams Choose Us
          </h2>
          <div className="mt-6 font-display text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-bold uppercase tracking-tight max-w-4xl leading-tight">
            We operate as a specialized technical studio, not a bloated volume agency.
            Zero administrative layers. Direct senior code execution.
          </div>
        </div>

        {/* High-Contrast Editorial Model Comparison */}
        <div className="mt-14 border border-surface-border/80 bg-surface/20">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-surface-border/80">
            {/* The Traditional Agency Dilemma */}
            <div className="p-8 sm:p-12 bg-black/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                  [ ANTI-PATTERN ]
                </span>
                <XCircle className="h-4 w-4 text-zinc-600" />
              </div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-zinc-400">
                The Traditional Agency Model
              </h3>
              <p className="mt-1 font-mono text-xs text-zinc-500">
                Bloat, Bureaucracy &amp; Telephone Games
              </p>
              <ul className="mt-8 space-y-4 text-xs sm:text-sm text-zinc-500 font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-600 font-mono text-xs mt-0.5">—</span>
                  <span>Account managers act as telephone games between you and offshore contractors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-600 font-mono text-xs mt-0.5">—</span>
                  <span>Heavily reliant on off-the-shelf WordPress themes, brittle plugins, and page builders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-600 font-mono text-xs mt-0.5">—</span>
                  <span>Slow 3-6 month delivery cycles with inflated agency management overhead.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-600 font-mono text-xs mt-0.5">—</span>
                  <span>Performance treated as an afterthought; poor Core Web Vitals and low mobile scores.</span>
                </li>
              </ul>
            </div>

            {/* The RageByte Studio Model */}
            <div className="p-8 sm:p-12 bg-surface/40 relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-accent uppercase tracking-widest">
                  [ PRODUCTION STANDARD ]
                </span>
                <CheckCircle2 className="h-4 w-4 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                The RageByte Studio Model
              </h3>
              <p className="mt-1 font-mono text-xs text-accent">
                Precision, Speed &amp; Direct Senior Engineers
              </p>
              <ul className="mt-8 space-y-4 text-xs sm:text-sm text-zinc-300 font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-0.5">&rarr;</span>
                  <span>Direct communication with the senior engineers actually writing and deploying your code.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-0.5">&rarr;</span>
                  <span>100% bespoke Next.js App Router and TypeScript architecture tailored to your product.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-0.5">&rarr;</span>
                  <span>Fast, agile weekly sprints with working staged deployment URLs delivered every milestone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-0.5">&rarr;</span>
                  <span>Engineered for sub-second page loads, accessible contrast, and zero layout shift.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5 Core Differentiators as an Editorial Specification Matrix */}
        <div className="mt-16 divide-y divide-surface-border/80 border-t border-b border-surface-border/80">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            const indexFormatted = `0${idx + 1}`;
            return (
              <div
                key={item.title}
                className="group py-8 sm:py-10 transition-colors duration-300 hover:bg-surface/30 px-2 sm:px-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Dominant Numeral */}
                  <div className="md:col-span-2 flex items-baseline gap-3">
                    <span className="font-display text-5xl sm:text-6xl font-black text-white/20 group-hover:text-accent transition-colors">
                      {indexFormatted}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                      / 05
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-accent" />
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                      [ {item.tagline} ]
                    </p>
                  </div>

                  {/* Description & Technical Bullets */}
                  <div className="md:col-span-6 space-y-3">
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.bullets.map((bullet, bIdx) => (
                        <span
                          key={bIdx}
                          className="inline-flex items-center gap-1.5 border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-300 uppercase tracking-wider"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyRageByte;
