import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { ProjectCard } from "@/components/ProjectCard";
import { BookshelfServices } from "@/components/BookshelfServices";
import { WhyRageByte } from "@/components/WhyRageByte";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { TeamSection } from "@/components/TeamSection";
import { CTA } from "@/components/CTA";
import { projects } from "@/data/projects";

export default function HomePage() {
  // Selected Work: 2-4 strongest projects per Section 4
  const selectedProjects = projects.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust / Stats Section */}
      <TrustStats />

      {/* 3. Selected Work Section */}
      <section className="py-24 border-b border-surface-border bg-background relative overflow-hidden">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-surface-border/80 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>[02] // SELECTED WORK ARCHIVE</span>
              </div>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.92]">
                Selected Work
              </h2>
              <p className="mt-3 max-w-xl text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                A selection of high-performance web applications, headless commerce systems,
                and digital platforms engineered for production speed.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-white/20 bg-background/80 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all group self-start md:self-auto"
            >
              <span>Explore All Archives</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {selectedProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} priority={idx === 0} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section (6 Capabilities) */}
      <section className="py-24 border-b border-surface-border bg-background-secondary relative overflow-hidden">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 radial-mask" 
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-surface-border/80 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>[03] // CAPABILITIES DIRECTORY</span>
              </div>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.92]">
                Engineered Services
              </h2>
              <p className="mt-3 max-w-xl text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                From high-conversion landing pages to full-scale web applications. Six core volume capabilities, zero generic templates.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/20 bg-background/80 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all group self-start md:self-auto"
            >
              <span>Service Breakdown</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <BookshelfServices />
        </div>
      </section>

      {/* 5. Why RageByte Section (5 Differentiators) */}
      <WhyRageByte />

      {/* 6. Tech Stack Strip */}
      <TechStack />

      {/* 7. Process Section (Discover -> Launch) */}
      <Process />

      {/* 8. Team Section (3D Filmstrip & Dynamic Details) */}
      <TeamSection />

      {/* 9. Final CTA Section */}
      <CTA />
    </div>
  );
}
