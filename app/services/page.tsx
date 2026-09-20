import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import {
  ArrowUpRight,
  CheckCircle2,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Full-Stack Capabilities",
  description:
    "Explore RageByte's 6 core engineering services: Next.js Website Dev, High-Conversion Landing Pages, Business Sites, Headless E-commerce, UI/UX Systems, and Retainer Support.",
  openGraph: {
    title: "Services & Full-Stack Capabilities | RageByte",
    description:
      "Explore RageByte's 6 core engineering services: Next.js Website Dev, High-Conversion Landing Pages, Business Sites, Headless E-commerce, UI/UX Systems, and Retainer Support.",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Editorial Header */}
      <section className="relative py-24 border-b border-surface-border bg-background-secondary overflow-hidden">
        {/* Background glow and mesh */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-30 radial-mask" 
        />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border mb-6">
              <Layers className="h-3.5 w-3.5" />
              <span>STUDIO SERVICE CATALOG</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Engineered for Speed.{" "}
              <span className="bg-gradient-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                Built to Scale.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We specialize in custom Next.js App Router engineering. Whether you need a high-converting
              campaign page or a full-stack digital product, our architecture delivers sub-second
              load times, full TypeScript safety, and zero bloatware.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
              <span className="rounded-md border border-surface-border bg-surface px-3 py-1 text-accent">
                6 Core Disciplines
              </span>
              <span>&bull;</span>
              <span>Next.js 14 App Router</span>
              <span>&bull;</span>
              <span>TypeScript Strict</span>
              <span>&bull;</span>
              <span>Vercel Edge Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Comprehensive Service Breakdowns */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-surface-border bg-surface/80 p-8 sm:p-12 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_24px_-8px_rgba(244,44,29,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-surface-border/60 pb-5">
                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
                      SPEC [0{idx + 1}]
                    </span>
                    <span className="rounded-md border border-surface-border bg-background px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                      Full-Stack Delivery
                    </span>
                  </div>

                  <h2 className="mt-6 font-heading text-2xl sm:text-3xl font-bold text-foreground transition-colors group-hover:text-white">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Ideal Fit Callout */}
                  {service.idealFor && (
                    <div className="mt-6 rounded-2xl border border-surface-border bg-background/60 p-4 text-xs text-muted-foreground leading-relaxed">
                      <span className="font-mono text-accent font-semibold block mb-1">Target Profile:</span>
                      <span className="text-zinc-300">{service.idealFor}</span>
                    </div>
                  )}

                  {/* Included Deliverables */}
                  {service.deliverables && (
                    <div className="mt-8 border-t border-surface-border/60 pt-6">
                      <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                        Standard Phase Deliverables
                      </h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span className="text-zinc-200">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Action Hub */}
                <div className="mt-10 border-t border-surface-border/60 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-xs font-mono font-semibold text-background hover:bg-accent-hover transition-all shadow-[0_0_16px_rgba(244,44,29,0.2)]"
                  >
                    <span>Request Proposal for {service.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>

                  <span className="text-[11px] font-mono text-muted-foreground">
                    Direct Senior Engineer Execution
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Banner */}
      <section className="py-20 border-y border-surface-border bg-background-secondary relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Commercial Structures
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              Flexible Engagement Frameworks
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              We offer two straightforward collaboration models designed to fit your operational cadence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Model 1: Fixed-Scope Milestone */}
            <div className="rounded-3xl border border-surface-border bg-surface/90 p-8 sm:p-10 backdrop-blur-md relative">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground mb-4">
                <span className="text-accent font-semibold">[MODEL 01]</span>
                <span>FIXED TIMELINE</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                Milestone-Based Fixed Project
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Ideal for complete website redesigns, new digital storefronts, and standalone web applications with clearly scoped feature sets.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Comprehensive upfront technical architecture specification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Locked budget with zero unexpected invoice creep</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Staged milestone approvals before each payment release</span>
                </li>
              </ul>
            </div>

            {/* Model 2: Dedicated Weekly Sprint */}
            <div className="rounded-3xl border border-surface-border bg-surface/90 p-8 sm:p-10 backdrop-blur-md relative">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground mb-4">
                <span className="text-accent font-semibold">[MODEL 02]</span>
                <span>DEDICATED CAPACITY</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                Dedicated Engineering Sprint Retainer
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Ideal for venture-backed startups and growing digital products requiring ongoing feature velocity, speed audits, and continuous refactoring.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Direct pair-programming and technical review sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Weekly staged deployments and continuous GitHub integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Pause or cancel anytime with two weeks written notice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Phase Delivery Engine */}
      <Process />

      {/* Comprehensive FAQs */}
      <FAQ />

      {/* Bottom CTA */}
      <CTA />
    </div>
  );
}
