"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypographyVortexCanvas } from "@/components/typography-vortex/TypographyVortexCanvas";
import {
  ArrowRight,
  ArrowUpRight,
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
        <div className="mx-auto max-w-5xl text-center">
          {/* 2. Editorial Studio Status Annotation */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto inline-flex items-center gap-2.5 sm:gap-3.5 border-b border-surface-border/80 pb-2 text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase"
          >
            <span className="flex items-center gap-1.5 text-accent font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              [SYS.ACTIVE // 2026]
            </span>
            <span className="text-white/20">|</span>
            <span className="text-zinc-300">TECHNICAL WEB DEVELOPMENT STUDIO</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-accent hidden sm:inline">NEW ENGAGEMENTS OPEN</span>
          </motion.div>

          {/* 3. Bold Editorial Condensed Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.035em] text-foreground leading-[0.88]"
          >
            <span className="block text-white">Technically Strong</span>
            <span className="block mt-1 sm:mt-2 text-white/95">Web Development.</span>
            <span className="block mt-1 sm:mt-2 text-accent">
              Built to Perform.
            </span>
          </motion.h1>

          {/* 4. Balanced Editorial Technical Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans font-normal"
          >
            Bespoke Next.js web applications, headless storefronts, and high-throughput edge systems.
            Direct access to senior architects — zero templates, zero account-manager layers.
          </motion.p>

          {/* 5. Minimalist Editorial Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 rounded-none border border-accent bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-background shadow-[0_0_24px_-4px_rgba(244,44,29,0.35)] transition-all duration-200 hover:bg-accent-hover active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-3 rounded-none border border-white/20 bg-background/60 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur-md transition-all duration-200 hover:border-white/50 hover:bg-surface-elevated active:scale-[0.98]"
            >
              <span>Selected Work</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* 6. Technical Stack Hairline Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-auto mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-mono tracking-wider text-zinc-400 uppercase"
          >
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" />
              NEXT.JS 14 APP ROUTER
            </span>
            <span className="text-white/10 hidden sm:inline">/</span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" />
              STRICT TYPESCRIPT
            </span>
            <span className="text-white/10 hidden sm:inline">/</span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" />
              TAILWIND TOKENS
            </span>
            <span className="text-white/10 hidden sm:inline">/</span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent" />
              EDGE RUNTIME
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
