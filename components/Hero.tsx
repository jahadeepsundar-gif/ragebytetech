"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { STUDIO_EASE } from "@/components/motion/MotionPrimitives";
import { MaskLine, Magnetic, useIntroReady } from "@/components/motion/Premium";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const ready = useIntroReady();
  const reduce = useReducedMotion();

  // Scroll depth: the headline drifts up and thins out as the page scrolls
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0.15]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28 bg-background">
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* 1. Headline: each line rises out of its own mask, in sequence, after the intro */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.035em] text-foreground leading-[0.88]">
            <MaskLine play={ready} delay={0.05} className="text-white">Technically Strong</MaskLine>
            <MaskLine play={ready} delay={0.17} className="mt-1 sm:mt-2 text-white/95">Web Development.</MaskLine>
            <MaskLine play={ready} delay={0.29} className="mt-1 sm:mt-2 text-accent">Built to Perform.</MaskLine>
          </h1>

          {/* 2. Actions: magnetic, arrive last */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.55, ease: STUDIO_EASE }}
            className="pointer-events-auto mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Magnetic>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 rounded-xl border border-accent bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-background shadow-[0_0_24px_-4px_rgba(17,17,17,0.158)] transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span>Start a Project</span>
                <span className="arrow-nudge inline-flex">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href="/work"
                className="btn-sweep inline-flex items-center gap-3 rounded-xl border border-white/20 bg-background/60 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black group"
              >
                <span>Selected Work</span>
                <span className="arrow-nudge-x inline-flex">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </span>
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
