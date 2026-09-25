import React from "react";
import {
  ScrollReveal,
  DividerReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

import { HeadingReveal, ScrollRail } from "@/components/motion/Premium";
interface Step {
  stepNumber: string;
  stageName: string;
  subtitle: string;
  duration: string;
  description: string;
  deliverables: string[];
}

const steps: Step[] = [
  {
    stepNumber: "01",
    stageName: "DISCOVER",
    subtitle: "Scope Deconstruction & Architectural Bounds",
    duration: "Week 1",
    description:
      "We deconstruct your product goals, traffic patterns, and performance targets. We map out constraints, edge requirements, and third-party integrations before writing a single line of code.",
    deliverables: [
      "Technical architecture brief & scope document",
      "Core Web Vitals target specification (LCP < 1.0s)",
      "API & third-party service contract mapping",
    ],
  },
  {
    stepNumber: "02",
    stageName: "PLAN",
    subtitle: "App Router Hierarchy & Schema Contracts",
    duration: "Week 1 - 2",
    description:
      "We design the complete application routing structure, TypeScript data models, Server Component boundaries, and state management strategy to guarantee clean architectural boundaries.",
    deliverables: [
      "TypeScript schema definitions & Zod validation models",
      "Next.js App Router page & layout hierarchy",
      "Milestone sprint plan with staged preview deadlines",
    ],
  },
  {
    stepNumber: "03",
    stageName: "DESIGN",
    subtitle: "Design Token Architecture & Touch Ergonomics",
    duration: "Week 2 - 3",
    description:
      "We establish the design token foundation in Tailwind CSS: custom typography scales, surface contrast ratios, and purposeful motion curves compliant with WCAG AA standards.",
    deliverables: [
      "Atomic Tailwind CSS token architecture",
      "High-fidelity responsive component designs",
      "Keyboard navigation & focus indicator standards",
    ],
  },
  {
    stepNumber: "04",
    stageName: "DEVELOP",
    subtitle: "React Server Components & Production Code",
    duration: "Week 3 - 5",
    description:
      "We engineer the platform using React Server Components by default, minimizing client-side JavaScript, streaming responses, and ensuring zero cumulative layout shift.",
    deliverables: [
      "Production-grade Next.js App Router codebase",
      "Strict TypeScript enforcement (zero type errors)",
      "Continuous preview deployment branches",
    ],
  },
  {
    stepNumber: "05",
    stageName: "TEST",
    subtitle: "Lighthouse Performance & Mobile Stress Testing",
    duration: "Week 5",
    description:
      "Every route undergoes exhaustive performance audits, cross-browser compatibility checks across real physical mobile devices, and end-to-end form verification.",
    deliverables: [
      "Lighthouse performance and SEO verification",
      "Cross-device physical mobile regression testing",
      "Security headers & contact form rate-limiting audit",
    ],
  },
  {
    stepNumber: "06",
    stageName: "LAUNCH",
    subtitle: "Global Edge Deployment & Repository Handover",
    duration: "Week 6",
    description:
      "We coordinate DNS propagation, production edge caching on Vercel, automated Git deployment triggers, and a complete code walkthrough with your engineering team.",
    deliverables: [
      "Zero-downtime global edge production launch",
      "Full IP & Git repository handover",
      "Post-launch warranty & optional retainer setup",
    ],
  },
];

export function Process() {
  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-background relative overflow-hidden">
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
              <span>How we work</span>
            </div>
            <HeadingReveal delay={0.1}>
              <h2 className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.035em] text-foreground leading-[0.88]">
                From Scope to<br />
                <span className="text-white/95">Edge Production</span>
              </h2>
            </HeadingReveal>
          </div>

          <div className="max-w-md space-y-2 lg:text-right">
            <div className="inline-block font-mono text-[10px] text-accent uppercase tracking-[0.25em] rounded-full border border-accent/30 bg-accent/5 px-3 py-1">
              Six weeks, start to launch
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
              Predictable weekly sprint cadence, working staged preview environments, and transparent milestones. Zero scope drift, zero administrative bureaucracy.
            </p>
          </div>
        </ScrollReveal>

        <DividerReveal className="border-t border-white/10" />

        {/* Continuous Editorial Engineering Timeline (Softened Panels) */}
        <div className="relative mt-10">
          {/* Scroll rail: fills as the reader moves from Discover to Launch */}
          <ScrollRail className="-left-6 top-0 bottom-0 hidden xl:block" />
        <StaggerContainer staggerDelay={0.08} className="space-y-4">
          {steps.map((step) => (
            <StaggerItem key={step.stepNumber}>
              <div data-spotlight
                tabIndex={0}
                className="group rounded-2xl border border-white/[0.08] hover:border-accent/40 focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none bg-surface/40 hover:bg-surface/80 p-6 sm:p-8 lg:p-10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(17,17,17,0.18)] cursor-default"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Refined Editorial Display Numeral (Cols 1-3) */}
                  <div className="lg:col-span-3">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-400 group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">
                        {step.stepNumber}
                      </span>
                      <span className="font-mono text-[11px] tracking-widest text-zinc-600 font-normal">
                        / 06
                      </span>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-accent uppercase tracking-wider">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  {/* Stage Title, Subtitle, & Description (Cols 4-7) */}
                  <div className="lg:col-span-4 space-y-2.5">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200 leading-[0.98] tracking-tight">
                      {step.stageName}
                    </h3>
                    <div className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                      {step.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans pt-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables Manifest (Cols 8-12) */}
                  <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-5 lg:pt-0 lg:pl-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-3">
                      What you receive
                    </span>
                    <div className="space-y-2.5 font-mono">
                      {step.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 pb-2.5 border-b border-white/5 last:border-b-0 last:pb-0"
                        >
                          <span className="text-[10px] text-accent font-bold mt-0.5 shrink-0">
                            0{dIdx + 1}
                          </span>
                          <span className="text-xs text-zinc-300 font-sans leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

export default Process;
