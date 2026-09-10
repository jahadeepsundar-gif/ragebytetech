import React from "react";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { CTA } from "@/components/CTA";
import { Code2, Sparkles } from "lucide-react";

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
    <div className="flex flex-col">
      {/* Editorial Page Header */}
      <section className="relative py-24 border-b border-surface-border bg-background-secondary overflow-hidden">
        {/* Background glow and mesh */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-30 radial-mask" 
        />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border mb-6">
              <Code2 className="h-3.5 w-3.5" />
              <span>CASE STUDY REPOSITORY</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Selected Work &amp;{" "}
              <span className="bg-gradient-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                Architecture.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Every build is a study in speed, type safety, and architectural discipline.
              Explore our recent web applications, performance overhauls, and headless systems.
            </p>

            {/* Filter / Meta Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 text-accent font-semibold">
                All Projects ({projects.length})
              </span>
              <span className="rounded-lg border border-surface-border bg-surface px-3 py-1.5 text-muted-foreground">
                Headless E-commerce
              </span>
              <span className="rounded-lg border border-surface-border bg-surface px-3 py-1.5 text-muted-foreground">
                Cloud Dashboards
              </span>
              <span className="rounded-lg border border-surface-border bg-surface px-3 py-1.5 text-muted-foreground">
                Fintech Portals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Demo Testing Disclosure Note */}
          <div className="mb-12 rounded-2xl border border-surface-border bg-surface/60 p-4 sm:p-5 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Sparkles className="h-4 w-4 text-accent shrink-0" />
              <span>
                <strong className="text-foreground">Interactive Demo Case Studies:</strong> These projects represent realistic architectural reference implementations designed to test case study layouts, performance benchmarks, and dynamic routes.
              </span>
            </div>
            <span className="shrink-0 rounded-md border border-surface-border bg-background px-2.5 py-1 text-[11px] font-mono text-accent">
              RSC &amp; ISR Enabled
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
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
