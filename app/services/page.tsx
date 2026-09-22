import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { ArrowUpRight } from "lucide-react";
import {
  ScrollReveal,
  TextReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

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
    <div className="flex flex-col bg-[#070709]">
      {/* Editorial Header */}
      <section className="relative py-24 sm:py-32 border-b border-white/10 bg-[#070709] overflow-hidden">
        {/* Background mesh */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            {/* Editorial Section Marker */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-[#F42C1D]" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                  [01] // DISCIPLINE DIRECTORY
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                [SYS.ACTIVE_SERVICES // 06]
              </span>
            </div>

            <div className="max-w-4xl">
              <TextReveal delay={0.1}>
                <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.035em] text-white leading-[0.88]">
                  ENGINEERED FOR SPEED.{" "}
                  <span className="text-[#F42C1D]">BUILT TO SCALE.</span>
                </h1>
              </TextReveal>

              <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed font-sans max-w-2xl">
                We specialize in custom Next.js App Router engineering. Whether you need a high-converting campaign page or an enterprise digital product, our architecture delivers sub-second load times, strict TypeScript type-safety, and zero bloatware.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <span className="text-[#F42C1D] font-bold">[06 CORE DISCIPLINES]</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>NEXT.JS APP ROUTER</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>TYPESCRIPT STRICT</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>VERCEL EDGE PRODUCTION</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6 Comprehensive Service Breakdowns */}
      <section className="py-20 sm:py-28 bg-[#070709] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, idx) => (
              <StaggerItem key={service.title}>
                <div
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#090607]/80 p-8 sm:p-12 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)] hover:border-accent/50 hover:bg-[#0e0a0b] h-full"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <span className="font-mono text-xs font-bold text-accent uppercase tracking-[0.2em]">
                        SPEC [0{idx + 1}]
                      </span>
                      <span className="rounded-md border border-white/15 bg-black px-2.5 py-0.5 font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                        FULL-STACK DELIVERY
                      </span>
                    </div>

                    <h2 className="mt-6 font-display uppercase text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                      {service.description}
                    </p>

                    {/* Ideal Fit Callout */}
                    {service.idealFor && (
                      <div className="mt-6 rounded-xl border border-accent/30 bg-black/40 p-4 text-xs font-sans text-zinc-400 leading-relaxed">
                        <span className="font-mono text-accent font-bold uppercase tracking-wider block mb-1">
                          [TARGET PROFILE]
                        </span>
                        <span className="text-zinc-300">{service.idealFor}</span>
                      </div>
                    )}

                    {/* Included Deliverables */}
                    {service.deliverables && (
                      <div className="mt-8 border-t border-white/10 pt-6">
                        <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F42C1D] mb-4">
                          STANDARD PHASE DELIVERABLES
                        </h3>
                        <ul className="space-y-3 font-sans">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                              <span className="h-1.5 w-1.5 bg-[#F42C1D] shrink-0 mt-1.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Card Action Hub */}
                  <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="rounded-xl inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold text-background transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span>Request Proposal for {service.title}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>

                    <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                      DIRECT SENIOR EXECUTION
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Engagement Models Banner */}
      <section className="py-24 sm:py-32 border-y border-white/10 bg-[#070709] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-[#F42C1D]" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                  [02] // COMMERCIAL STRUCTURES
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                [AGREEMENT // TERMS]
              </span>
            </div>

            <div className="max-w-3xl mb-14">
              <TextReveal delay={0.1}>
                <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.92]">
                  FLEXIBLE ENGAGEMENT FRAMEWORKS
                </h2>
              </TextReveal>
              <p className="mt-4 text-base text-zinc-400 font-sans">
                Two straightforward collaboration models engineered to fit your operational cadence with transparent milestones.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Model 1: Fixed-Scope Milestone */}
            <StaggerItem>
              <div className="rounded-2xl border border-white/[0.08] bg-[#090607]/80 p-8 sm:p-10 relative hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)] h-full">
                <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-6 border-b border-white/10 pb-4">
                  <span className="text-accent font-bold">[MODEL 01]</span>
                  <span>FIXED TIMELINE &amp; SCOPE</span>
                </div>
                <h3 className="font-display uppercase text-2xl sm:text-3xl font-black text-white">
                  MILESTONE-BASED FIXED PROJECT
                </h3>
                <p className="mt-4 text-sm text-zinc-400 font-sans leading-relaxed">
                  Ideal for complete website redesigns, new digital storefronts, and standalone web applications with clearly scoped feature sets.
                </p>
                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-zinc-300 font-sans">
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 bg-accent shrink-0 mt-1.5" />
                    <span>Comprehensive upfront technical architecture specification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 bg-accent shrink-0 mt-1.5" />
                    <span>Locked budget with zero unexpected invoice creep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 bg-accent shrink-0 mt-1.5" />
                    <span>Staged milestone approvals before each payment release</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>

            {/* Model 2: Dedicated Weekly Sprint */}
            <StaggerItem>
              <div className="rounded-2xl border border-white/[0.08] bg-[#090607]/80 p-8 sm:p-10 relative hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)] h-full">
                <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-6 border-b border-white/10 pb-4">
                  <span className="text-accent font-bold">[MODEL 02]</span>
                  <span>DEDICATED CAPACITY</span>
                </div>
                <h3 className="font-display uppercase text-2xl sm:text-3xl font-black text-white">
                  DEDICATED SPRINT RETAINER
                </h3>
                <p className="mt-4 text-sm text-zinc-400 font-sans leading-relaxed">
                  Ideal for venture-backed startups and growing digital products requiring ongoing feature velocity, speed audits, and continuous refactoring.
                </p>
                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-zinc-300 font-sans">
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 bg-[#F42C1D] shrink-0 mt-1.5" />
                    <span>Direct pair-programming and technical review sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 bg-[#F42C1D] shrink-0 mt-1.5" />
                    <span>Weekly staged deployments and continuous GitHub integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 bg-[#F42C1D] shrink-0 mt-1.5" />
                    <span>Pause or cancel anytime with two weeks written notice</span>
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
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
