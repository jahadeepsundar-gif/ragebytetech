import React from "react";
import { Metadata } from "next";
import { projects, isInProgress } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { CTA } from "@/components/CTA";
import { Lock } from "lucide-react";
import {
  ScrollReveal,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

import { HeadingReveal } from "@/components/motion/Premium";
export const metadata: Metadata = {
  title: "Selected Work & Engineering Case Studies",
  description:
    "Case studies of live websites Kaatchi Productions has designed and built for clients across music, performing arts, media production, events and hospitality.",
  openGraph: {
    title: "Selected Work & Engineering Case Studies | Kaatchi Productions",
    description:
      "Case studies of live websites Kaatchi Productions has designed and built for clients across music, performing arts, media production, events and hospitality.",
  },
};

export default function WorkPage() {
  const liveCount = projects.filter((project) => !isInProgress(project)).length;
  const inProgressCount = projects.length - liveCount;

  return (
    <div className="flex flex-col bg-background">
      {/* Editorial Page Header */}
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
                  ARCHIVE INDEX
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                [SYS.CASE_STUDIES // {liveCount} LIVE]
              </span>
            </div>

            <div className="max-w-4xl">
              <HeadingReveal delay={0.1}>
                <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.035em] text-white leading-[0.88]">
                  SELECTED WORK &amp;{" "}
                  <span className="text-accent">ARCHITECTURE.</span>
                </h1>
              </HeadingReveal>

              <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed font-sans max-w-2xl">
                Every project here is live in production. Explore how we approached each brief, what we shipped, and how it looks on desktop and mobile.
              </p>

              {/* Filter / Meta Pills */}
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="rounded-lg border border-accent bg-accent/15 px-3 py-1.5 text-white font-bold">
                  [ALL PROJECTS ({projects.length})]
                </span>
                <span className="rounded-lg border border-white/10 bg-surface px-3 py-1.5 text-zinc-400">
                  [LIVE ({liveCount})]
                </span>
                <span className="rounded-lg border border-white/10 bg-surface px-3 py-1.5 text-zinc-400">
                  [IN DEVELOPMENT ({inProgressCount})]
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 sm:py-28 bg-background relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Demo Testing Disclosure Note */}
          <ScaleIn delay={0.1}>
            <div className="mb-12 rounded-2xl border border-white/[0.08] bg-surface/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <Lock className="h-4 w-4 text-accent shrink-0" />
                <span>
                  <strong className="text-white font-mono uppercase tracking-wider">Currently building:</strong> {inProgressCount} client projects are in development. Their details stay confidential until launch.
                </span>
              </div>
              <span className="shrink-0 rounded-md border border-white/15 bg-black px-2.5 py-1 text-[11px] font-mono text-accent">
                [{liveCount} LIVE // {inProgressCount} IN PROGRESS]
              </span>
            </div>
          </ScaleIn>

          <StaggerContainer className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {projects.map((project, idx) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} priority={idx < 2} index={idx} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA />
    </div>
  );
}
