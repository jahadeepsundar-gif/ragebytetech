import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { CTA } from "@/components/CTA";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Terminal,
} from "lucide-react";

interface CaseStudyProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  const displayName = project.name.replace(" [Demo Project]", "").replace(" [Demo]", "");

  return {
    title: `${displayName} — Architecture & Case Study`,
    description: project.description,
    openGraph: {
      title: `${displayName} — RageByte Architecture Case Study`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const displayName = project.name.replace(" [Demo Project]", "").replace(" [Demo]", "");
  const isDemo = project.name.includes("[Demo");

  // Next / Previous projects for navigational continuity
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <article className="flex flex-col bg-background">
      {/* Case Study Header & Hero */}
      <header className="relative border-b border-surface-border bg-background-secondary py-16 sm:py-24 overflow-hidden">
        {/* Background glow and mesh */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-30 radial-mask" 
        />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/work" className="hover:text-accent transition-colors">
              Work
            </Link>
            <span>/</span>
            <span className="text-accent truncate">{displayName}</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              {isDemo && (
                <div className="inline-flex items-center gap-2 rounded-md border border-surface-border bg-surface px-3 py-1 font-mono text-xs text-accent mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>DEMO CASE STUDY &bull; REFERENCE ARCHITECTURE</span>
                </div>
              )}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                {displayName}
              </h1>
              <p className="mt-5 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-background shadow-[0_0_20px_rgba(0,245,160,0.3)] hover:bg-accent-hover transition-all"
                >
                  <span>Visit Live Prototype</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface/80 px-6 py-3.5 text-sm font-medium text-foreground hover:border-surface-border-hover hover:bg-surface-elevated transition-colors font-mono text-xs"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>All Case Studies</span>
              </Link>
            </div>
          </div>

          {/* Metadata Architecture Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-surface-border/80 pt-8 font-mono text-xs">
            <div>
              <span className="text-muted-foreground block mb-1">Architecture</span>
              <span className="font-semibold text-foreground">Next.js 14 App Router</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">Language</span>
              <span className="font-semibold text-foreground">TypeScript (Strict)</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">Rendering Strategy</span>
              <span className="font-semibold text-accent">React Server Components</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">Deployment</span>
              <span className="font-semibold text-foreground">Vercel Edge Network</span>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground mr-1">Stack:</span>
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-surface-border bg-surface px-2.5 py-1 font-mono text-xs text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Cover Image Mockup */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-surface-border bg-surface-subtle shadow-2xl shadow-black/90">
            <Image
              src={project.coverImage}
              alt={`Cover preview of ${displayName}`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Deep-Dive Analysis: The Problem vs The Solution */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* The Challenge */}
            <div className="rounded-3xl border border-surface-border bg-surface/80 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-rose-400">
                [01] The Technical Bottleneck
              </span>
              <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-foreground">
                The Architectural Challenge
              </h2>
              <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="rounded-3xl border border-accent/40 bg-surface/90 p-8 sm:p-12 backdrop-blur-md shadow-xl shadow-accent/5 relative overflow-hidden">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                [02] The Engineered Execution
              </span>
              <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-foreground">
                The Implemented Solution
              </h2>
              <p className="mt-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Architectural Deliverables Checklist */}
      <section className="py-20 border-t border-surface-border bg-background-secondary relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Core Capabilities Shipped
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              Key Features &amp; Deliverables
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Specific architectural patterns and engineering components implemented for this project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-surface-border bg-surface/80 p-6 backdrop-blur-md transition-colors hover:border-accent/40"
              >
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Device Visual Artifacts */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-24 border-t border-surface-border bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                Responsive Previews
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                Multi-Viewport Artifacts
              </h2>
              <p className="mt-2 text-sm text-muted-foreground font-mono">
                Engineered for pixel perfection across physical desktop &amp; mobile handheld screens.
              </p>
            </div>

            <div className="space-y-20">
              {project.screenshots.map((shot, idx) => (
                <div key={idx} className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                  {/* Desktop Preview */}
                  <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-surface-border bg-surface-subtle shadow-2xl shadow-black/80">
                    <div className="flex items-center gap-2 border-b border-surface-border/80 bg-background/90 px-4 py-3">
                      <div className="h-3 w-3 rounded-full bg-red-500/60" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                      <div className="h-3 w-3 rounded-full bg-green-500/60" />
                      <span className="ml-3 font-mono text-[11px] text-muted-foreground flex items-center gap-1">
                        <Terminal className="h-3.5 w-3.5 text-accent" />
                        Desktop Viewport (1920x1080)
                      </span>
                    </div>
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={shot.desktop}
                        alt={`${displayName} desktop preview ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Mobile Preview Frame */}
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="w-[280px] overflow-hidden rounded-[2.5rem] border-[6px] border-surface-border bg-surface-subtle shadow-2xl shadow-black/90">
                      <div className="h-5 bg-surface-border flex justify-center items-center">
                        <div className="h-1 w-14 rounded-full bg-surface" />
                      </div>
                      <div className="relative aspect-[9/18] w-full">
                        <Image
                          src={shot.mobile}
                          alt={`${displayName} mobile handheld preview ${idx + 1}`}
                          fill
                          sizes="280px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Measurable Performance Results Card */}
      {project.result && (
        <section className="py-20 border-t border-surface-border bg-background-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-accent/40 bg-surface/90 p-8 sm:p-14 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-64 w-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 text-accent font-mono text-xs font-semibold uppercase tracking-widest">
                <TrendingUp className="h-4 w-4" />
                <span>BENCHMARK IMPACT</span>
              </div>
              <h2 className="mt-3 font-heading text-2xl sm:text-4xl font-extrabold text-foreground">
                Measurable Technical Performance
              </h2>
              <p className="mt-4 text-sm sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
                {project.result}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Next / Previous Project Carousel Navigation */}
      <section className="border-t border-surface-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
          <Link
            href={`/work/${prevProject.slug}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Prev: {prevProject.name.replace(" [Demo Project]", "")}</span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <span>Next: {nextProject.name.replace(" [Demo Project]", "")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Bottom Final CTA */}
      <CTA />
    </article>
  );
}
