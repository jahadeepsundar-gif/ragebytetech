import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { ArrowUpRight } from "lucide-react";
import {
  ScrollReveal,
  TextReveal,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

export const metadata: Metadata = {
  title: "Start a Project — Project Enquiry & Architecture Review",
  description:
    "Ready to engineer your next web application? Submit your technical specifications to RageByte for direct review by senior engineers within 24 business hours.",
  openGraph: {
    title: "Start a Project — Project Enquiry | RageByte",
    description:
      "Ready to engineer your next web application? Submit your technical specifications to RageByte for direct review by senior engineers within 24 business hours.",
  },
};

export default function ContactPage() {
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
                  [01] // INTAKE PROTOCOL
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                [SYS.ACTIVE_INTAKE // 2026]
              </span>
            </div>

            <div className="max-w-4xl">
              <TextReveal delay={0.1}>
                <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.035em] text-white leading-[0.88]">
                  START A PROJECT WITH{" "}
                  <span className="text-[#F42C1D]">RAGEBYTE.</span>
                </h1>
              </TextReveal>

              <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed font-sans max-w-2xl">
                Submit your technical specifications or initial product roadmap. Senior engineers review your scope, dependencies, and architectural requirements with an honest review within 24 business hours.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <span className="text-[#F42C1D] font-bold">[RESPONSE // 24H SLA]</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>DIRECT DEVELOPER ACCESS</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>100% IP OWNERSHIP</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form & Sidebar Section */}
      <section className="py-20 sm:py-28 bg-[#070709] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Form Column (Cols 1-8) */}
            <div className="lg:col-span-8">
              <ScaleIn>
                <div className="rounded-3xl border border-white/[0.08] bg-[#090607]/80 p-6 sm:p-10 lg:p-12 shadow-2xl">
                  <div className="mb-8 border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <h2 className="font-display uppercase text-3xl sm:text-4xl font-black text-white tracking-tight">
                        PROJECT CONFIGURATOR
                      </h2>
                      <p className="mt-1 text-xs text-zinc-500 font-mono uppercase tracking-wider">
                        SPECIFICATION INTAKE PIPELINE
                      </p>
                    </div>
                    <span className="font-mono text-xs text-accent uppercase tracking-wider">
                      [DIRECT SENIOR REVIEW]
                    </span>
                  </div>

                  <ContactForm />
                </div>
              </ScaleIn>
            </div>

            {/* Sidebar Column (Cols 9-12) */}
            <StaggerContainer className="lg:col-span-4 space-y-6">
              {/* Card 1: What Happens Next */}
              <StaggerItem>
                <div className="rounded-2xl border border-white/[0.08] bg-[#090607]/80 p-6 sm:p-8 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">
                      [PROTOCOL]
                    </span>
                    <span className="font-mono text-xs text-zinc-500">48-HOUR TIMELINE</span>
                  </div>
                  <h3 className="font-display uppercase text-2xl font-black text-white tracking-tight mb-5">
                    THE NEXT 48 HOURS
                  </h3>
                  <ul className="space-y-5 text-xs sm:text-sm text-zinc-400">
                    <li className="flex items-start gap-4">
                      <span className="font-mono font-black text-accent shrink-0 text-base leading-none">01</span>
                      <span>A senior engineer reviews your technical requirements within 24 business hours.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="font-mono font-black text-accent shrink-0 text-base leading-none">02</span>
                      <span>If the scope aligns, we schedule a focused 20-minute technical discovery session.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="font-mono font-black text-accent shrink-0 text-base leading-none">03</span>
                      <span>We deliver a fixed-scope milestone proposal with guaranteed staged deadlines.</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* Card 2: Studio Commitments */}
              <StaggerItem>
                <div className="rounded-2xl border border-white/[0.08] bg-[#090607]/80 p-6 sm:p-8 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">
                      [TERMS]
                    </span>
                    <span className="font-mono text-xs text-zinc-500">STANDARDS</span>
                  </div>
                  <h3 className="font-display uppercase text-2xl font-black text-white tracking-tight mb-5">
                    STUDIO COMMITMENTS
                  </h3>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-400 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-accent shrink-0" />
                      <span className="text-zinc-300">Direct contact with creators (zero sales reps)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-accent shrink-0" />
                      <span className="text-zinc-300">No aggressive sales calls or marketing spam</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-accent shrink-0" />
                      <span className="text-zinc-300">Mutual NDA compliance upon request</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-accent shrink-0" />
                      <span className="text-zinc-300">100% full codebase &amp; IP ownership</span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* Card 3: Direct Email Desk */}
              <StaggerItem>
                <div className="rounded-2xl border border-white/[0.08] bg-[#090607]/80 p-6 sm:p-8 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">
                      [DIRECT DESK]
                    </span>
                    <span className="font-mono text-xs text-zinc-500">RFP // FIGMA</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    Have an existing RFP, Figma link, or architecture deck? Reach our technical leads directly:
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <a
                      href="mailto:hello@ragebyte.tech"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-white hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
                    >
                      <span>hello@ragebyte.tech</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQ />
    </div>
  );
}
