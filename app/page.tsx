import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Users, Layers } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { ProjectCard } from "@/components/ProjectCard";
import { BookshelfServices } from "@/components/BookshelfServices";
import { WhyRageByte } from "@/components/WhyRageByte";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { TeamCard } from "@/components/TeamCard";
import { Testimonials } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { projects } from "@/data/projects";
import { teamMembers } from "@/data/team";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  // Selected Work: 2-4 strongest projects per Section 4
  const selectedProjects = projects.slice(0, 4);
  // Team Preview: 3 cards per Section 4
  const previewTeam = teamMembers.slice(0, 3);

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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-surface-border/60 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border">
                <Code2 className="h-3.5 w-3.5" />
                <span>CASE STUDY ARCHIVE</span>
              </div>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                Selected Work
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                A selection of high-performance web applications, headless commerce systems,
                and digital platforms engineered for production speed.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface px-5 py-2.5 font-mono text-xs font-semibold text-foreground hover:border-accent/40 hover:text-accent transition-all group self-start md:self-auto"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {selectedProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} priority={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section (6 Cards) */}
      <section className="py-24 border-b border-surface-border bg-background-secondary relative overflow-hidden">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 radial-mask" 
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-surface-border/60 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border">
                <Layers className="h-3.5 w-3.5" />
                <span>STUDIO CAPABILITIES</span>
              </div>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                Services Built for Performance
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                From fast-loading marketing sites to enterprise-grade web applications,
                we engineer modern digital infrastructure tailored to your exact roadmap.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface px-5 py-2.5 font-mono text-xs font-semibold text-foreground hover:border-accent/40 hover:text-accent transition-all group self-start md:self-auto"
            >
              <span>View Service Breakdown</span>
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

      {/* 8. Team Preview Section (3 Cards linking to /about) */}
      <section className="py-24 border-t border-surface-border bg-background relative overflow-hidden">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-surface-border/60 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border">
                <Users className="h-3.5 w-3.5" />
                <span>THE CORE CREW</span>
              </div>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                Senior Engineering Leadership
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Direct access to the creators. We don&apos;t employ account managers or junior buffers — you work directly with our technical leads.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface px-5 py-2.5 font-mono text-xs font-semibold text-foreground hover:border-accent/40 hover:text-accent transition-all group self-start md:self-auto"
            >
              <span>About Studio &amp; Team</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {previewTeam.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section (Rendered with demo disclosure) */}
      <Testimonials testimonials={testimonials} />

      {/* 10. Final CTA Section */}
      <CTA />
    </div>
  );
}
