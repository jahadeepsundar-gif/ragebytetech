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
import {
  ScrollReveal,
  DividerReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

import { HeadingReveal } from "@/components/motion/Premium";
export default function HomePage() {
  // Selected Work: every live project plus the builds currently in development
  const selectedProjects = projects;

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
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>SELECTED WORK ARCHIVE</span>
              </div>
              <HeadingReveal delay={0.1}>
                <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.92]">
                  Selected Work
                </h2>
              </HeadingReveal>
              <p className="mt-3 max-w-xl text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                Live websites we have designed and built for clients across music, performing arts,
                media, events and hospitality, plus the builds on our workbench right now.
              </p>
            </div>
            <Link
              href="/work"
              className="btn-sweep inline-flex items-center gap-2 rounded-xl border border-white/20 bg-background/80 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.98] transition-colors group self-start md:self-auto"
            >
              <span>Explore All Archives</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-zinc-400 group-hover:text-accent" />
            </Link>
          </ScrollReveal>

          <DividerReveal className="border-t border-surface-border/80 mb-16" />

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {selectedProjects.map((project, idx) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} priority={idx === 0} index={idx} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Services Section (6 Capabilities) */}
      <section className="py-24 border-b border-surface-border bg-background-secondary relative overflow-hidden">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 radial-mask" 
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>CAPABILITIES DIRECTORY</span>
              </div>
              <HeadingReveal delay={0.1}>
                <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.92]">
                  Engineered Services
                </h2>
              </HeadingReveal>
              <p className="mt-3 max-w-xl text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                From high-conversion landing pages to full-scale web applications. Six core volume capabilities, zero generic templates.
              </p>
            </div>
            <Link
              href="/services"
              className="btn-sweep inline-flex items-center gap-2 rounded-xl border border-white/20 bg-background/80 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.98] transition-colors group self-start md:self-auto"
            >
              <span>Service Breakdown</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-zinc-400 group-hover:text-accent" />
            </Link>
          </ScrollReveal>

          <DividerReveal className="border-t border-surface-border/80 mb-16" />

          <BookshelfServices />
        </div>
      </section>

      {/* 5. Why Kaatchi Productions Section (5 Differentiators) */}
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
