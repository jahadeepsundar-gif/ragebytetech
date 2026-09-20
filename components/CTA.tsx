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
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-surface-border bg-surface/90 p-8 text-center sm:p-16 backdrop-blur-2xl shadow-2xl shadow-black/80 transition-all duration-300 hover:border-accent/40">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-background/80 px-4 py-1 text-xs text-muted-foreground backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-foreground font-medium">New Studio Engagements Open</span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Ready to build something{" "}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-accent bg-clip-text text-transparent">
              extraordinary?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tell us about your product goals, timeline, and architectural requirements.
            A senior engineer will review your project and reply with technical feedback within 24 hours.
          </p>

          {/* Action Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-background shadow-[0_0_28px_-4px_rgba(244,44,29,0.4)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_36px_-2px_rgba(244,44,29,0.55)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-background px-7 py-4 text-sm font-medium text-foreground transition-all duration-200 hover:border-surface-border-hover hover:bg-surface-elevated active:scale-[0.98]"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>

          {/* Factual Trust Guarantees */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-surface-border/60 pt-8 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>Responses within 24 business hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
              <span>Direct senior engineer evaluation</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-accent" />
              <span>Mutual NDA ready on request</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
