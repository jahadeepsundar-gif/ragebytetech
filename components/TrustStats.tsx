"use client";

import React from "react";
import { trustQualities } from "@/data/stats";
import {
  ScrollReveal,
  TextReveal,
  DividerReveal,
  ScaleIn,
} from "@/components/motion/MotionPrimitives";

export function TrustStats() {
  return (
    <section id="stats" className="border-y border-white/10 bg-background-secondary py-20 lg:py-28 relative overflow-hidden">
      {/* Engineering Mesh Grid Background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>[01] // ARCHITECTURAL SPECIFICATION</span>
            </div>
            <TextReveal delay={0.1}>
              <h2 className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.035em] text-foreground leading-[0.88]">
                The RageByte<br />
                <span className="text-white/95">Engineering Matrix</span>
              </h2>
            </TextReveal>
          </div>

          <div className="max-w-md space-y-2 lg:text-right">
            <div className="inline-block font-mono text-[10px] text-accent uppercase tracking-[0.25em] rounded-full border border-accent/30 bg-accent/5 px-3 py-1">
              STATUS: DEPLOYED // ZERO COMPROMISE
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
              Rigorous full-stack discipline. Every line purpose-engineered for sub-second edge execution, total type safety, and zero administrative overhead.
            </p>
          </div>
        </ScrollReveal>

        <DividerReveal className="border-t border-white/10" />

        {/* Softened Editorial Technical Spread Enclosure */}
        <ScaleIn className="mt-10 rounded-3xl border border-white/[0.08] bg-[#090607]/80 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Monumental Typographic Anchor & Telemetry (4 cols) */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/[0.08] p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-black/40">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    REF: RB-CORE-PHILOSOPHY
                  </span>
                  <span className="font-mono text-[10px] text-accent">01 / 04</span>
                </div>

                <div className="font-display text-4xl sm:text-5xl font-black uppercase text-white leading-[0.92] tracking-tight">
                  Zero Templates.<br />
                  Zero Bloat.<br />
                  <span className="text-accent">100% Raw Code.</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  We eliminate visual page builders, bloated WordPress plugins, and fragile dependencies. Every system is purpose-built on Next.js 14, React Server Components, and strict TypeScript.
                </p>
              </div>

              {/* Live Telemetry Readout */}
              <div className="mt-10 pt-6 border-t border-white/[0.08] space-y-2.5 font-mono">
                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-2">
                  {"//"} BENCHMARK TELEMETRY
                </span>
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5">
                  <span className="text-zinc-400">[01] TARGETED LCP</span>
                  <span className="text-accent font-bold">SUB-1.0S</span>
                </div>
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5">
                  <span className="text-zinc-400">[02] TYPE INTEGRITY</span>
                  <span className="text-white font-bold">100% STRICT TS</span>
                </div>
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5">
                  <span className="text-zinc-400">[03] ADMIN LAYERS</span>
                  <span className="text-zinc-300 font-bold">0 MIDDLEMEN</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-400">[04] CODEBASE IP</span>
                  <span className="text-accent font-bold">100% CLIENT OWNED</span>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Asymmetric Blueprint Grid (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-white/[0.01]">
              {/* Top Row: FAST & MODERN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] border-b border-white/[0.08]">
                {/* Item 01: FAST */}
                <div
                  tabIndex={0}
                  className="p-6 sm:p-8 lg:p-10 relative group hover:bg-[#140c0d]/60 focus-visible:bg-[#140c0d]/60 focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none transition-colors duration-200 flex flex-col justify-between cursor-default"
                >
                  <span className="absolute top-4 right-4 font-mono text-[11px] text-zinc-600 select-none group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">+</span>
                  <div>
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-400 group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">
                          01
                        </span>
                        <span className="font-mono text-[10px] tracking-widest text-zinc-600 font-normal">
                          / 04
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">METRIC // LATENCY</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200 leading-none tracking-tight">
                      {trustQualities[0].label}
                    </h3>
                    <p className="mt-2 font-mono text-xs font-semibold text-accent/90 uppercase tracking-wider">
                      [ {trustQualities[0].sublabel} ]
                    </p>
                    <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                      {trustQualities[0].description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase">
                    <span>SPEC // LCP &lt; 1000MS</span>
                    <span className="text-accent group-hover:text-white transition-colors duration-200">VERIFIED</span>
                  </div>
                </div>

                {/* Item 02: MODERN */}
                <div
                  tabIndex={0}
                  className="p-6 sm:p-8 lg:p-10 relative group hover:bg-[#140c0d]/60 focus-visible:bg-[#140c0d]/60 focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none transition-colors duration-200 flex flex-col justify-between cursor-default"
                >
                  <span className="absolute top-4 right-4 font-mono text-[11px] text-zinc-600 select-none group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">+</span>
                  <div>
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-400 group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">
                          02
                        </span>
                        <span className="font-mono text-[10px] tracking-widest text-zinc-600 font-normal">
                          / 04
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">STACK // ARCHITECTURE</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200 leading-none tracking-tight">
                      {trustQualities[1].label}
                    </h3>
                    <p className="mt-2 font-mono text-xs font-semibold text-accent/90 uppercase tracking-wider">
                      [ {trustQualities[1].sublabel} ]
                    </p>
                    <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                      {trustQualities[1].description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase">
                    <span>SPEC // NEXT 14 + RSC</span>
                    <span className="text-accent group-hover:text-white transition-colors duration-200">VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: RESPONSIVE & CUSTOM BUILDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                {/* Item 03: RESPONSIVE */}
                <div
                  tabIndex={0}
                  className="p-6 sm:p-8 lg:p-10 relative group hover:bg-[#140c0d]/60 focus-visible:bg-[#140c0d]/60 focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none transition-colors duration-200 flex flex-col justify-between cursor-default"
                >
                  <span className="absolute top-4 right-4 font-mono text-[11px] text-zinc-600 select-none group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">+</span>
                  <div>
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-400 group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">
                          03
                        </span>
                        <span className="font-mono text-[10px] tracking-widest text-zinc-600 font-normal">
                          / 04
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">DEVICE // ERGONOMICS</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200 leading-none tracking-tight">
                      {trustQualities[2].label}
                    </h3>
                    <p className="mt-2 font-mono text-xs font-semibold text-accent/90 uppercase tracking-wider">
                      [ {trustQualities[2].sublabel} ]
                    </p>
                    <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                      {trustQualities[2].description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase">
                    <span>SPEC // 48PX+ TOUCH TARGETS</span>
                    <span className="text-accent group-hover:text-white transition-colors duration-200">VERIFIED</span>
                  </div>
                </div>

                {/* Item 04: CUSTOM BUILDS */}
                <div
                  tabIndex={0}
                  className="p-6 sm:p-8 lg:p-10 relative group hover:bg-[#140c0d]/60 focus-visible:bg-[#140c0d]/60 focus-visible:ring-1 focus-visible:ring-accent focus-visible:outline-none transition-colors duration-200 flex flex-col justify-between cursor-default"
                >
                  <span className="absolute top-4 right-4 font-mono text-[11px] text-zinc-600 select-none group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">+</span>
                  <div>
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-400 group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200">
                          04
                        </span>
                        <span className="font-mono text-[10px] tracking-widest text-zinc-600 font-normal">
                          / 04
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">CODEBASE // INTEGRITY</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white group-hover:text-accent group-focus-visible:text-accent transition-colors duration-200 leading-none tracking-tight">
                      {trustQualities[3].label}
                    </h3>
                    <p className="mt-2 font-mono text-xs font-semibold text-accent/90 uppercase tracking-wider">
                      [ {trustQualities[3].sublabel} ]
                    </p>
                    <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                      {trustQualities[3].description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase">
                    <span>SPEC // 0% CMS DEPENDENCY</span>
                    <span className="text-accent group-hover:text-white transition-colors duration-200">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}

export default TrustStats;
