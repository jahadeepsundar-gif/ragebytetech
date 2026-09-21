import React from "react";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { CTA } from "@/components/CTA";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work & Engineering Case Studies",
  description:
    "Explore our archive of production Next.js web applications, headless e-commerce storefronts, and real-time cloud dashboards.",
  openGraph: {
    title: "Selected Work & Engineering Case Studies | RageByte",
    description:
      "Explore our archive of production Next.js web applications, headless e-commerce storefronts, and real-time cloud dashboards.",
  },
};

export default function WorkPage() {
  return (
    <div className="flex flex-col bg-[#070709]">
      {/* Editorial Page Header */}
      <section className="relative py-24 sm:py-32 border-b border-white/10 bg-[#070709] overflow-hidden">
        {/* Background mesh */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Editorial Section Marker */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[#F42C1D]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                [01] // ARCHIVE INDEX
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              [SYS.CASE_STUDIES // {projects.length} ACTIVE]
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.035em] text-white leading-[0.88]">
              SELECTED WORK &amp;{" "}
              <span className="text-[#F42C1D]">ARCHITECTURE.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed font-sans max-w-2xl">
              Every build is a study in sub-second speed, end-to-end type safety, and architectural discipline. Explore our archive of production web applications, performance overhauls, and headless systems.
            </p>

            {/* Filter / Meta Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="border border-[#F42C1D] bg-[#F42C1D]/15 px-3 py-1.5 text-white font-bold">
                [ALL PROJECTS ({projects.length})]
              </span>
              <span className="border border-white/10 bg-[#0C0C0E] px-3 py-1.5 text-zinc-400">
                [HEADLESS E-COMMERCE]
              </span>
              <span className="border border-white/10 bg-[#0C0C0E] px-3 py-1.5 text-zinc-400">
                [CLOUD DASHBOARDS]
              </span>
              <span className="border border-white/10 bg-[#0C0C0E] px-3 py-1.5 text-zinc-400">
                [FINTECH PORTALS]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 sm:py-28 bg-[#070709] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Demo Testing Disclosure Note */}
          <div className="mb-12 border border-white/10 bg-[#0C0C0E] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <Sparkles className="h-4 w-4 text-[#F42C1D] shrink-0" />
              <span>
                <strong className="text-white font-mono uppercase tracking-wider">Interactive Reference Studies:</strong> Architectural reference implementations designed to test case study layouts, performance benchmarks, and dynamic routes.
              </span>
            </div>
            <span className="shrink-0 border border-white/15 bg-black px-2.5 py-1 text-[11px] font-mono text-[#F42C1D]">
              [RSC &amp; ISR ENABLED]
            </span>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {projects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} priority={idx < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA />
    </div>
  );
}
