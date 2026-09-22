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
    // Production Case Study View
    <article className="flex flex-col bg-[#070709]">
      {/* Case Study Header & Hero */}
      <header className="relative border-b border-white/10 bg-[#070709] py-16 sm:py-24 overflow-hidden">
        {/* Background mesh */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation & Editorial Marker */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <span>/</span>
              <Link href="/work" className="hover:text-white transition-colors">
                WORK
              </Link>
              <span>/</span>
              <span className="text-[#F42C1D] uppercase truncate">{displayName}</span>
            </div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              [SYS.CASE_SPEC // ARCHIVE]
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              {isDemo && (
                <div className="inline-flex items-center gap-2 border border-white/15 bg-black px-3 py-1 font-mono text-xs text-[#F42C1D] mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>DEMO CASE STUDY // REFERENCE ARCHITECTURE</span>
                </div>
              )}
              <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.035em] text-white leading-[0.88]">
                {displayName}
              </h1>
              <p className="mt-5 text-base sm:text-xl text-zinc-400 font-sans leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-bold text-background hover:bg-accent-hover transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Visit Live Prototype</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <Link
                href="/work"
                className="rounded-xl inline-flex items-center justify-center gap-2 border border-white/20 bg-transparent px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white hover:border-accent hover:text-accent transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>All Case Studies</span>
              </Link>
            </div>
          </div>

          {/* Metadata Architecture Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8 font-mono text-xs">
            <div>
              <span className="text-zinc-500 block mb-1 uppercase tracking-wider">Architecture</span>
              <span className="font-bold text-white">Next.js 14 App Router</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1 uppercase tracking-wider">Language</span>
              <span className="font-bold text-white">TypeScript (Strict)</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1 uppercase tracking-wider">Rendering Strategy</span>
              <span className="font-bold text-[#F42C1D]">React Server Components</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1 uppercase tracking-wider">Deployment</span>
              <span className="font-bold text-white">Vercel Edge Network</span>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">Stack:</span>
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-black px-2.5 py-1 font-mono text-xs text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Cover Image Mockup */}
      <section className="py-16 bg-[#070709]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
            <Image
              src={project.coverImage}
              alt={`Cover preview of ${displayName}`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Deep-Dive Analysis: The Problem vs The Solution */}
      <section className="py-16 bg-[#070709]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* The Challenge */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#090607]/80 p-8 sm:p-12 relative hover:border-accent/40 transition-colors duration-200">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                [01] // THE BOTTLENECK
              </span>
              <h2 className="mt-3 font-display uppercase text-2xl sm:text-3xl font-black text-white">
                ARCHITECTURAL CHALLENGE
              </h2>
              <p className="mt-5 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#090607]/80 p-8 sm:p-12 relative hover:border-accent/40 transition-colors duration-200">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                [02] // ENGINEERED EXECUTION
              </span>
              <h2 className="mt-3 font-display uppercase text-2xl sm:text-3xl font-black text-white">
                IMPLEMENTED SOLUTION
              </h2>
              <p className="mt-5 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Architectural Deliverables Checklist */}
      <section className="py-20 border-t border-white/10 bg-[#070709] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F42C1D]">
              [DELIVERABLE SPEC]
            </span>
            <h2 className="mt-3 font-display uppercase text-3xl sm:text-4xl font-black text-white">
              KEY DELIVERABLES &amp; PATTERNS
            </h2>
            <p className="mt-2 text-sm text-zinc-400 font-sans">
              Specific architectural patterns and engineering components implemented for this project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-xl flex items-start gap-3 border border-white/[0.08] bg-[#090607]/80 p-6"
              >
                <span className="h-1.5 w-1.5 bg-accent shrink-0 mt-2" />
                <span className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans font-medium">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Device Visual Artifacts */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-24 border-t border-white/10 bg-[#070709]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F42C1D]">
                [VIEWPORT AUDIT]
              </span>
              <h2 className="mt-3 font-display uppercase text-3xl sm:text-4xl font-black text-white">
                MULTI-VIEWPORT ARTIFACTS
              </h2>
              <p className="mt-2 text-sm text-zinc-400 font-mono">
                Engineered for pixel perfection across physical desktop &amp; mobile handheld screens.
              </p>
            </div>

            <div className="space-y-20">
              {project.screenshots.map((shot, idx) => (
                <div key={idx} className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                  {/* Desktop Preview */}
                  <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-white/15 bg-black">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-black/90 px-4 py-3">
                      <div className="h-2 w-2 bg-accent" />
                      <span className="ml-2 font-mono text-[11px] text-zinc-400 flex items-center gap-1">
                        <Terminal className="h-3.5 w-3.5 text-accent" />
                        DESKTOP VIEWPORT // 1920x1080
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
                    <div className="w-[280px] overflow-hidden rounded-2xl border border-white/15 bg-black">
                      <div className="border-b border-white/10 bg-black/90 px-4 py-2 font-mono text-[10px] text-zinc-500 uppercase tracking-wider text-center">
                        MOBILE VIEWPORT
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
        <section className="py-20 border-t border-white/10 bg-[#070709]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/[0.08] bg-[#090607]/80 p-8 sm:p-14 relative shadow-2xl">
              <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-widest">
                <TrendingUp className="h-4 w-4" />
                <span>[BENCHMARK IMPACT]</span>
              </div>
              <h2 className="mt-3 font-display uppercase text-3xl sm:text-4xl font-black text-white">
                MEASURABLE TECHNICAL PERFORMANCE
              </h2>
              <p className="mt-4 text-sm sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-3xl">
                {project.result}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Next / Previous Project Navigation */}
      <section className="border-t border-white/10 bg-[#070709] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
          <Link
            href={`/work/${prevProject.slug}`}
            className="flex items-center gap-2 text-zinc-400 hover:text-accent focus-visible:outline-none focus-visible:text-accent transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>PREV: {prevProject.name.replace(" [Demo Project]", "").toUpperCase()}</span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="flex items-center gap-2 text-zinc-400 hover:text-accent focus-visible:outline-none focus-visible:text-accent transition-colors duration-200"
          >
            <span>NEXT: {nextProject.name.replace(" [Demo Project]", "").toUpperCase()}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Bottom Final CTA */}
      <CTA />
    </article>
  );
}
