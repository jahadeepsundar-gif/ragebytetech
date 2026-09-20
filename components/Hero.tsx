"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypographyVortexCanvas } from "@/components/typography-vortex/TypographyVortexCanvas";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-36">
      {/* 0. Typography Vortex Background Canvas - Exact Hero dimensions */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <TypographyVortexCanvas
          mode="dark"
          phrase="RAGEBYTE TECH "
          speed={1.00}
          ringGrowth={1.21}
          opacity={1.00}
          dissolveRadius={1.00}
          particleAmount={1.00}
          suctionDuration={920}
        />
      </div>

      {/* 1. Atmospheric Ambient Lighting & Engineering Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden"
      >
        {/* Top-down accent spotlight */}
        <div className="absolute -top-40 h-[550px] w-[850px] rounded-full bg-gradient-to-b from-accent/20 via-accent/5 to-transparent blur-[140px]" />
        {/* Secondary ambient depth nodes */}
        <div className="absolute top-1/3 -right-48 h-[450px] w-[450px] rounded-full bg-[#4B2D2E]/40 blur-[130px]" />
        <div className="absolute top-1/2 -left-48 h-[400px] w-[400px] rounded-full bg-[#701C1A]/25 blur-[130px]" />
        {/* Fine Engineering Grid */}
        <div className="absolute inset-0 bg-grid-pattern radial-mask opacity-75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="mx-auto max-w-4xl text-center">
          {/* 2. Elevated Studio Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full border border-surface-border bg-surface/90 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md shadow-sm transition-all hover:border-accent/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs font-medium text-foreground tracking-wide">
              Engineering-First Web Studio
            </span>
            <span className="text-surface-border">/</span>
            <span className="flex items-center gap-1 text-accent font-medium">
              <Sparkles className="h-3 w-3" /> Available for New Projects
            </span>
          </motion.div>

          {/* 3. High-Contrast Editorial Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 font-heading text-4xl font-extrabold tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl leading-[1.06]"
          >
            Technically Strong Web Development.{" "}
            <span className="relative whitespace-nowrap block sm:inline mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                Built to Perform.
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent"
              />
            </span>
          </motion.h1>

          {/* 4. Balanced Technical Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans"
          >
            RageByte is a small, specialized team building custom Next.js web applications,
            headless storefronts, and performance-driven digital platforms. Zero templates,
            zero account-manager bureaucracy — direct access to senior engineers.
          </motion.p>

          {/* 5. Premium Action Controls (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-background shadow-[0_0_28px_-4px_rgba(244,44,29,0.4)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_36px_-2px_rgba(244,44,29,0.55)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface/80 px-7 py-4 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-200 hover:border-surface-border-hover hover:bg-surface-subtle active:scale-[0.98]"
            >
              <span>View Selected Work</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* 6. Factual Technical Stack Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-auto mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-muted-foreground"
          >
            <div className="flex items-center gap-1.5 rounded-lg border border-surface-border/70 bg-surface/70 px-3 py-1.5 backdrop-blur-sm">
              <Layers className="h-3.5 w-3.5 text-accent" />
              <span>Next.js App Router</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-surface-border/70 bg-surface/70 px-3 py-1.5 backdrop-blur-sm">
              <Code2 className="h-3.5 w-3.5 text-accent" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-surface-border/70 bg-surface/70 px-3 py-1.5 backdrop-blur-sm">
              <Palette className="h-3.5 w-3.5 text-accent" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-surface-border/70 bg-surface/70 px-3 py-1.5 backdrop-blur-sm">
              <Smartphone className="h-3.5 w-3.5 text-accent" />
              <span>Mobile-First &amp; Responsive</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
