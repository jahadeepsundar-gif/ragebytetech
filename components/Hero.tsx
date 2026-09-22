"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypographyVortexCanvas } from "@/components/typography-vortex/TypographyVortexCanvas";
import { STUDIO_EASE } from "@/components/motion/MotionPrimitives";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28 bg-background">
      {/* 0. Typography Vortex Background Canvas - Floating directly on clean dark background */}
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="mx-auto max-w-5xl text-center">
          {/* 1. Bold Editorial Condensed Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: STUDIO_EASE }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.035em] text-foreground leading-[0.88]"
          >
            <span className="block text-white">Technically Strong</span>
            <span className="block mt-1 sm:mt-2 text-white/95">Web Development.</span>
            <span className="block mt-1 sm:mt-2 text-accent">
              Built to Perform.
            </span>
          </motion.h1>

          {/* 2. Balanced Editorial Technical Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: STUDIO_EASE }}
            className="mt-8 text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans font-normal"
          >
            Bespoke Next.js web applications, headless storefronts, and high-throughput edge systems.
            Direct access to senior architects — zero templates, zero account-manager layers.
          </motion.p>

          {/* 3. Minimalist Editorial Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28, ease: STUDIO_EASE }}
            className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 rounded-xl border border-accent bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-background shadow-[0_0_24px_-4px_rgba(244,44,29,0.35)] transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-background/60 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur-md transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black group"
            >
              <span>Selected Work</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
