import React from "react";
import {
  Zap,
  Gauge,
  Boxes,
  Smartphone,
  MessagesSquare,
  CheckCircle2,
  XCircle,
  ShieldCheck,
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
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-30 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>THE RAGEBYTE DIFFERENCE</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Why High-Growth Teams Choose Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            We operate as a specialized technical studio, not a bloated volume agency. Here is how our model compares.
          </p>
        </div>

        {/* Agency vs RageByte Comparison Matrix */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-surface-border bg-surface/70 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-surface-border">
            {/* The Traditional Agency Dilemma */}
            <div className="p-8 sm:p-10 bg-background/40">
              <div className="flex items-center gap-2 font-mono text-xs text-rose-400 font-semibold tracking-wider uppercase">
                <XCircle className="h-4 w-4" />
                <span>The Traditional Agency Model</span>
              </div>
              <h3 className="mt-2 text-xl font-heading font-bold text-foreground">
                Bloat, Bureaucracy &amp; Hand-offs
              </h3>
              <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                  <span>Account managers act as telephone games between you and offshore contractors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                  <span>Heavily reliant on off-the-shelf WordPress themes, brittle plugins, and page builders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                  <span>Slow 3-6 month delivery cycles with inflated agency management overhead.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80 mt-2 shrink-0" />
                  <span>Performance treated as an afterthought; poor Core Web Vitals and low mobile scores.</span>
                </li>
              </ul>
            </div>

            {/* The RageByte Studio Model */}
            <div className="p-8 sm:p-10 bg-surface/80 relative">
              <div className="absolute top-0 right-0 h-40 w-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 font-mono text-xs text-accent font-semibold tracking-wider uppercase">
                <CheckCircle2 className="h-4 w-4" />
                <span>The RageByte Studio Model</span>
              </div>
              <h3 className="mt-2 text-xl font-heading font-bold text-foreground">
                Precision, Speed &amp; Direct Senior Engineers
              </h3>
              <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Direct communication with the senior engineers actually writing your code.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>100% bespoke Next.js App Router and TypeScript architecture tailored to your brand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Fast, agile sprints with working staged deployment URLs delivered every week.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>Engineered for sub-second page loads, accessible contrast, and zero layout shift.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5 Core Differentiators Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            const isWide = idx === 4;
            return (
              <div
                key={item.title}
                className={`group relative flex flex-col justify-between rounded-2xl border border-surface-border bg-surface/80 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.8),0_0_20px_-6px_rgba(0,245,160,0.15)] ${
                  isWide ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-surface-border bg-background text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-surface-elevated group-hover:shadow-[0_0_16px_rgba(0,245,160,0.25)]">
                      <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-accent transition-colors">
                      [0{idx + 1}]
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-mono text-xs font-medium text-accent">
                    {item.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-surface-border/60 pt-6 text-xs text-muted-foreground">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-zinc-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyRageByte;
