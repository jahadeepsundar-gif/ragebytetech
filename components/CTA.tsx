import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, Shield, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28 border-t border-surface-border bg-background">
      {/* Radiant atmospheric background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="h-[450px] w-[750px] rounded-full bg-gradient-to-r from-accent/20 via-accent/5 to-transparent blur-[140px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-35 radial-mask" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl border border-surface-border/80 bg-surface/30 p-8 sm:p-16 text-center backdrop-blur-xl transition-all duration-300 hover:border-accent/60">
          {/* Top Editorial Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest border-b border-surface-border/80 pb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>[08] // NEW ENGAGEMENTS OPEN</span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.035em] text-foreground leading-[0.88]">
            <span className="block text-white">Ready to build something</span>
            <span className="block mt-2 text-accent">Extraordinary?</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-xl text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
            Tell us about your product goals, timeline, and architectural requirements.
            A senior engineer will review your project and reply with technical feedback within 24 business hours.
          </p>

          {/* Action Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-background shadow-[0_0_24px_-4px_rgba(244,44,29,0.35)] transition-all duration-200 hover:bg-accent-hover active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-3 border border-white/20 bg-background/80 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur-md transition-all duration-200 hover:border-white/50 hover:bg-surface-elevated active:scale-[0.98]"
            >
              <span>Selected Work</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Factual Trust Guarantees */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-surface-border/80 pt-8 text-[11px] text-zinc-400 font-mono uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>24-Hour Senior Response</span>
            </div>
            <span className="text-white/10 hidden sm:inline">/</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              <span>Direct Engineer Review</span>
            </div>
            <span className="text-white/10 hidden sm:inline">/</span>
            <div className="flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-accent" />
              <span>Mutual NDA Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
