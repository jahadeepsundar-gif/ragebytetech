"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  FileSpreadsheet,
  Palette,
  Code2,
  CheckCheck,
  Rocket,
  ArrowRight,
  LucideIcon,
  CheckCircle2,
  Workflow,
  Sparkles,
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
  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section className="py-24 border-t border-surface-border bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-30 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border">
            <Workflow className="h-3.5 w-3.5" />
            <span>THE 6-PHASE DELIVERY ENGINE</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            From Scope to Edge Production
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A structured, transparent engineering lifecycle designed to eliminate uncertainty and ship on schedule.
          </p>
        </div>

        {/* Step Progression Bar (Desktop) */}
        <div className="mt-16 hidden lg:grid grid-cols-6 gap-2 border-b border-surface-border/80 pb-6 relative">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className="group flex flex-col items-start text-left relative focus-visible:outline-none"
              >
                <div className="flex items-center gap-2 font-mono text-xs mb-2">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-all ${
                      isActive
                        ? "bg-accent text-background shadow-[0_0_12px_rgba(244,44,29,0.4)]"
                        : isCompleted
                        ? "bg-surface-elevated text-accent border border-accent/40"
                        : "bg-surface text-muted-foreground border border-surface-border"
                    }`}
                  >
                    {isCompleted ? "✓" : step.stepNumber}
                  </span>
                  <span
                    className={`font-semibold transition-colors ${
                      isActive ? "text-accent" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    Phase {step.stepNumber}
                  </span>
                </div>
                <span
                  className={`text-sm font-heading font-medium truncate w-full transition-colors ${
                    isActive ? "text-foreground font-bold" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {step.title}
                </span>

                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessUnderline"
                    className="absolute -bottom-6 left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_rgba(244,44,29,0.8)]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Step Selector Pills */}
        <div className="mt-10 flex lg:hidden overflow-x-auto pb-4 gap-2 no-scrollbar">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`shrink-0 rounded-xl px-4 py-2 font-mono text-xs transition-all flex items-center gap-2 border ${
                  isActive
                    ? "bg-accent text-background font-bold border-accent shadow-sm"
                    : "bg-surface text-muted-foreground border-surface-border"
                }`}
              >
                <span>{step.stepNumber}</span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="mt-8 rounded-3xl border border-surface-border bg-surface/80 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Details (Cols 1-7) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-surface-border bg-background text-accent shadow-inner">
                    <StepIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-accent">
                      <span>PHASE [{current.stepNumber}]</span>
                      <span>•</span>
                      <span className="text-zinc-400">Typical Cadence: {current.duration}</span>
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-0.5">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  {current.subtitle}
                </p>

                <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {current.description}
                </p>

                {/* Navigation Stepper Controls */}
                <div className="mt-8 pt-6 border-t border-surface-border/60 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="font-mono text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    &larr; Previous Phase
                  </button>

                  <button
                    type="button"
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="inline-flex items-center gap-2 rounded-xl bg-surface-elevated px-4 py-2 font-mono text-xs font-semibold text-accent border border-surface-border hover:border-accent/40 hover:bg-surface transition-all disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Deliverables Snapshot (Cols 8-12) */}
              <div className="lg:col-span-5 rounded-2xl border border-surface-border bg-background/70 p-6 sm:p-7 backdrop-blur-md">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2 mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  Phase Deliverables &amp; Output
                </span>

                <ul className="space-y-3.5 text-xs sm:text-sm text-muted-foreground">
                  {current.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                      <span className="text-zinc-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-surface-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>CLIENT SIGNOFF CHECKPOINT</span>
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Process;
