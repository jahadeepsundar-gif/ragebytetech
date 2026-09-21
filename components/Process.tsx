"use client";

import React, { useState } from "react";
import {
  Compass,
  FileSpreadsheet,
  Palette,
  Code2,
  CheckCheck,
  Rocket,
  LucideIcon,
} from "lucide-react";

interface Step {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    id: "discover",
    stepNumber: "01",
    title: "Discover & Scope",
    subtitle: "Understanding Core Technical Requirements",
    duration: "Week 1",
    description:
      "We deconstruct your product goals, traffic patterns, and performance targets. We map out constraints, edge requirements, and third-party integrations before writing a single line of code.",
    deliverables: [
      "Technical architecture brief & scope document",
      "Core Web Vitals target specification",
      "API & third-party service contract mapping",
    ],
    icon: Compass,
  },
  {
    id: "plan",
    stepNumber: "02",
    title: "Architecture & Data",
    subtitle: "Next.js App Router & Schema Design",
    duration: "Week 1 - 2",
    description:
      "We design the complete application routing structure, TypeScript data models, Server Component boundaries, and state management strategy to guarantee clean boundaries.",
    deliverables: [
      "TypeScript schema definitions & Zod validation models",
      "App Router page & layout component hierarchy",
      "Milestone sprint plan with staged preview deadlines",
    ],
    icon: FileSpreadsheet,
  },
  {
    id: "design",
    stepNumber: "03",
    title: "Design System & UI",
    subtitle: "Tailwind Tokens & Interactive Prototypes",
    duration: "Week 2 - 3",
    description:
      "We establish the design token foundation in Tailwind CSS: custom typography ramps, surface contrast ratios, and purposeful motion curves compliant with WCAG AA.",
    deliverables: [
      "Atomic Tailwind CSS token architecture",
      "High-fidelity responsive component designs",
      "Keyboard navigation & focus indicator standards",
    ],
    icon: Palette,
  },
  {
    id: "develop",
    stepNumber: "04",
    title: "Full-Stack Development",
    subtitle: "Server Components & Clean Code",
    duration: "Week 3 - 5",
    description:
      "We engineer the platform using React Server Components by default, minimizing client-side JavaScript, streaming responses, and ensuring zero layout shifts.",
    deliverables: [
      "Production-grade Next.js App Router codebase",
      "Strict TypeScript enforcement (zero type errors)",
      "Continuous preview deployment branches",
    ],
    icon: Code2,
  },
  {
    id: "test",
    stepNumber: "05",
    title: "QA & Performance Audit",
    subtitle: "Lighthouse Verification & Testing",
    duration: "Week 5",
    description:
      "Every route undergoes exhaustive performance audits, cross-browser compatibility checks across real physical mobile devices, and end-to-end form verification.",
    deliverables: [
      "Lighthouse performance and SEO verification",
      "Cross-device mobile and tablet regression testing",
      "Security headers & contact form rate-limiting audit",
    ],
    icon: CheckCheck,
  },
  {
    id: "launch",
    stepNumber: "06",
    title: "Global Launch & Handover",
    subtitle: "Edge Deployment & Documentation",
    duration: "Week 6",
    description:
      "We coordinate DNS propagation, production edge caching on Vercel, automated Git deployment triggers, and a complete code walkthrough with your team.",
    deliverables: [
      "Zero-downtime global edge production launch",
      "Full IP & Git repository handover",
      "Post-launch warranty & optional retainer setup",
    ],
    icon: Rocket,
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-24 border-b border-surface-border bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="border-b border-surface-border/80 pb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>[06] // DELIVERY PROTOCOL</span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.92]">
            From Scope to Edge Production
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-mono max-w-2xl leading-relaxed">
            The 6-Phase continuous engineering protocol. Predictable weekly sprint cadence, transparent milestones, zero scope drift.
          </p>
        </div>

        {/* Continuous Editorial Engineering Timeline */}
        <div className="divide-y divide-surface-border/80 border-b border-surface-border/80">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`group py-8 sm:py-10 transition-all duration-300 cursor-pointer px-2 sm:px-4 ${
                  isActive ? "bg-surface/40 border-l-2 border-l-accent" : "hover:bg-surface/20"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Dominant Numeral (Cols 1-2) */}
                  <div className="lg:col-span-2 flex items-baseline gap-3">
                    <span
                      className={`font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter transition-colors ${
                        isActive ? "text-accent" : "text-white/20 group-hover:text-accent/60"
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                      / 06
                    </span>
                  </div>

                  {/* Title, Subtitle, & Cadence (Cols 3-6) */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <Icon className={`h-4 w-4 ${isActive ? "text-accent" : "text-zinc-500 group-hover:text-accent"}`} />
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 font-mono text-xs text-zinc-400">
                      {step.subtitle}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-accent uppercase tracking-wider">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span>CADENCE: {step.duration}</span>
                    </div>
                  </div>

                  {/* Description & Deliverables (Cols 7-12) */}
                  <div className="lg:col-span-6 space-y-4">
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {step.description}
                    </p>

                    <div className="pt-2 border-t border-white/5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block mb-2">
                        {"//"} DELIVERABLES &amp; OUTPUT
                      </span>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                            <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
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

export default Process;
