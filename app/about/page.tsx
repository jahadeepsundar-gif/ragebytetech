import React from "react";
import { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { TeamCard } from "@/components/TeamCard";
import { TechStack } from "@/components/TechStack";
import { WhyRageByte } from "@/components/WhyRageByte";
import { CTA } from "@/components/CTA";
import { Sparkles } from "lucide-react";
import {
  ScrollReveal,
  TextReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

import { HeadingReveal } from "@/components/motion/Premium";
export const metadata: Metadata = {
  title: "About Us — Mission, Team & Engineering Philosophy",
  description:
    "Learn about Kaatchi Productions: a specialized web development studio building custom Next.js web applications, headless storefronts, and performance-first interfaces.",
  openGraph: {
    title: "About Us — Mission, Team & Engineering Philosophy | Kaatchi Productions",
    description:
      "Learn about Kaatchi Productions: a specialized web development studio building custom Next.js web applications, headless storefronts, and performance-first interfaces.",
  },
};

export default function AboutPage() {
  const isDemoTeam = teamMembers.some((m) => m.name.includes("[Demo"));

  return (
    <div className="flex flex-col bg-background">
      {/* Editorial Header */}
      <section className="relative py-24 sm:py-32 border-b border-white/10 bg-background overflow-hidden">
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
                <span className="h-1.5 w-1.5 bg-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                  STUDIO MANIFESTO
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                [SYS.PHILOSOPHY // 2026]
              </span>
            </div>

            <div className="max-w-4xl">
              <HeadingReveal delay={0.1}>
                <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.035em] text-white leading-[0.88]">
                  WE BUILD WEB SOFTWARE{" "}
                  <span className="text-accent">THAT PERFORMS.</span>
                </h1>
              </HeadingReveal>

              <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed font-sans max-w-2xl">
                Kaatchi Productions was founded on a simple conviction: businesses don&apos;t need generic templates, bureaucracy, or account-management overhead. They need senior engineers who understand modern web architecture, write clean TypeScript, and ship code that converts.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <span className="text-accent font-bold">[ENGINEERING FIRST]</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>ZERO ACCOUNT MANAGERS</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>100% REPO OWNERSHIP</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>STRICT TYPESCRIPT</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Studio Philosophy */}
      <section className="py-20 sm:py-28 bg-background relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Left Narrative */}
            <ScrollReveal className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  [OPERATIONAL DISCIPLINE]
                </span>
              </div>
              <h2 className="font-display uppercase text-3xl sm:text-5xl font-black text-white leading-[0.92]">
                EARN CONFIDENCE THROUGH REAL ENGINEERING.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Our objective is simple: establish deep client confidence through transparent technical capability, and then exceed every expectation throughout execution. We do not inflate scopes, introduce artificial complexity, or make unverified claims.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                By focusing strictly on modern, proven web technologies — Next.js 14, React 18, TypeScript, and Tailwind CSS — we eliminate the bloat, speed penalties, and maintenance headaches inherent in legacy CMS platforms.
              </p>
            </ScrollReveal>

            {/* Right Pillars Matrix */}
            <StaggerContainer className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StaggerItem>
                <div data-spotlight className="rounded-2xl border border-white/[0.08] bg-surface/80 p-6 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(17,17,17,0.18)] h-full">
                  <span className="font-mono text-xs font-black text-accent block mb-2">01</span>
                  <h3 className="font-display uppercase text-xl font-black text-white mb-2">Speed by Default</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Sub-second LCP, zero layout shifts, and streaming edge responses on every page.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div data-spotlight className="rounded-2xl border border-white/[0.08] bg-surface/80 p-6 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(17,17,17,0.18)] h-full">
                  <span className="font-mono text-xs font-black text-accent block mb-2">02</span>
                  <h3 className="font-display uppercase text-xl font-black text-white mb-2">Strict TypeScript</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    End-to-end schema validation, robust typings, and zero undefined runtime bugs.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div data-spotlight className="rounded-2xl border border-white/[0.08] bg-surface/80 p-6 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(17,17,17,0.18)] h-full">
                  <span className="font-mono text-xs font-black text-accent block mb-2">03</span>
                  <h3 className="font-display uppercase text-xl font-black text-white mb-2">Zero Bloatware</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Handcrafted modular codebases with 100% client repository ownership.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div data-spotlight className="rounded-2xl border border-white/[0.08] bg-surface/80 p-6 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(17,17,17,0.18)] h-full">
                  <span className="font-mono text-xs font-black text-accent block mb-2">04</span>
                  <h3 className="font-display uppercase text-xl font-black text-white mb-2">Direct Dev Pairing</h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Direct communication with the technical architects building your platform.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Full Team Directory */}
      <section className="py-24 sm:py-32 border-t border-white/10 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                  CORE ENGINEERING ROSTER
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                [COLLECTIVE // ACTIVE ARCHITECTS]
              </span>
            </div>

            <div className="mb-14 max-w-3xl">
              <TextReveal delay={0.1}>
                <h2 className="font-display uppercase text-4xl sm:text-6xl font-black text-white leading-[0.92]">
                  MEET THE CREATORS
                </h2>
              </TextReveal>
              <p className="mt-4 text-base text-zinc-400 font-sans">
                A specialized team of full-stack engineers, UI/UX systems designers, and cloud architects building high-velocity web platforms.
              </p>

              {isDemoTeam && (
                <div className="mt-4 rounded-lg border border-white/10 bg-surface px-3.5 py-1 text-xs text-zinc-400 font-mono inline-flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span>Demo team roster for UI verification — pending production team profiles</span>
                </div>
              )}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Architectural Stack Breakdown */}
      <TechStack />

      {/* Why Choose Kaatchi Productions Advantage */}
      <WhyRageByte />

      {/* Final Studio CTA */}
      <CTA />
    </div>
  );
}
