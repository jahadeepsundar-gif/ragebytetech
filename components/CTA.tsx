import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  ScrollReveal,
  TextReveal,
  ScaleIn,
} from "@/components/motion/MotionPrimitives";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-background">
      {/* Radiant atmospheric background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="h-[450px] w-[750px] rounded-full bg-gradient-to-r from-accent/15 via-accent/5 to-transparent blur-[140px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 radial-mask" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Softened Editorial Container */}
        <ScaleIn>
          <div className="relative rounded-3xl border border-white/[0.08] bg-[#090607]/80 backdrop-blur-md overflow-hidden p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest mb-10 pb-6 border-b border-white/[0.08]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>[08] // INTAKE &amp; COLLABORATION</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Monumental Typographic Action Area (7 cols) */}
              <ScrollReveal className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <TextReveal delay={0.1}>
                    <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.035em] text-white leading-[0.92]">
                      Ready to build<br />
                      <span className="text-accent">Something Extraordinary?</span>
                    </h2>
                  </TextReveal>

                  <p className="mt-6 text-xs sm:text-sm text-zinc-300 font-sans max-w-xl leading-relaxed">
                    Tell us about your product goals, traffic constraints, and timeline.
                    A senior engineer will review your specification and reply with technical feedback and architectural insights within 24 business hours.
                  </p>
                </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 rounded-xl border border-accent bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-background shadow-[0_0_24px_-4px_rgba(244,44,29,0.35)] transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.03] px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span>Selected Work</span>
                  <ArrowRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-1" />
                </Link>
                </div>
              </ScrollReveal>

              {/* Right Column: Technical Intake Invariants & Protocol (5 cols) */}
              <div className="lg:col-span-5 rounded-2xl border border-white/[0.06] bg-black/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-6">
                    {"//"} INTAKE PROTOCOL &amp; SLA
                  </span>

                  <div className="space-y-4 font-mono text-xs">
                    <div className="rounded-xl border border-accent/30 bg-accent/[0.04] p-4 transition-colors duration-200 hover:border-accent">
                      <span className="text-accent text-[10px] uppercase font-bold block">SLA_01 // 24-HOUR RESPONSE</span>
                      <span className="text-zinc-300 font-sans text-xs mt-1 block leading-relaxed">
                        Direct technical feedback and timeline estimates from senior software architects.
                      </span>
                    </div>

                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors duration-200 hover:border-accent/50 hover:bg-accent/[0.02] group">
                      <span className="text-zinc-400 group-hover:text-accent transition-colors text-[10px] uppercase font-bold block">SLA_02 // ZERO SALES FILTERS</span>
                      <span className="text-zinc-400 font-sans text-xs mt-1 block leading-relaxed">
                        No aggressive sales reps or account managers. Strictly engineering-led scoping.
                      </span>
                    </div>

                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors duration-200 hover:border-accent/50 hover:bg-accent/[0.02] group">
                      <span className="text-zinc-400 group-hover:text-accent transition-colors text-[10px] uppercase font-bold block">SLA_03 // MUTUAL NDA READY</span>
                      <span className="text-zinc-400 font-sans text-xs mt-1 block leading-relaxed">
                        We routinely execute mutual non-disclosure agreements before technical architecture audits.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase">
                  <span>STATUS: ACCEPTING Q3/Q4 PROJECTS</span>
                  <span className="text-accent flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}

export default CTA;
