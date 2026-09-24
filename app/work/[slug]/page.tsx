import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, isInProgress, type Project } from "@/data/projects";
import { CTA } from "@/components/CTA";
import { RedactedCover } from "@/components/ProjectCard";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Lock,
  Terminal,
} from "lucide-react";

import { Magnetic } from "@/components/motion/Premium";
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

  return {
    title: `${project.name} — Case Study`,
    description: project.description,
    // Unreleased builds stay out of search results until they launch
    robots: isInProgress(project) ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${project.name} — Kaatchi Productions Case Study`,
      description: project.description,
      images: project.coverImage ? [{ url: project.coverImage }] : undefined,
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  // Next / Previous projects for navigational continuity
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const inProgress = isInProgress(project);

  return (
    <article className="flex flex-col bg-background">
      {/* Case Study Header & Hero */}
      <header className="relative border-b border-white/10 bg-background py-16 sm:py-24 overflow-hidden">
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
              <span className="text-accent uppercase truncate">{project.name}</span>
            </div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              {inProgress ? "[SYS.CASE_SPEC // LOCKED]" : "[SYS.CASE_SPEC // ARCHIVE]"}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              {inProgress ? (
                <div className="inline-flex items-center gap-2 border border-accent/40 bg-black px-3 py-1 font-mono text-xs text-accent mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span>CURRENTLY IN DEVELOPMENT</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 border border-white/15 bg-black px-3 py-1 font-mono text-xs text-zinc-300 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>LIVE IN PRODUCTION</span>
                </div>
              )}
              <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.035em] text-white leading-[0.88]">
                {project.name}
              </h1>
              <p className="mt-5 text-base sm:text-xl text-zinc-400 font-sans leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              {project.liveUrl && (
                <Magnetic>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-wider font-bold text-background hover:bg-accent-hover transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                </Magnetic>
              )}
              <Link
                href="/work"
                className="btn-sweep rounded-xl inline-flex items-center justify-center gap-2 border border-white/20 bg-transparent px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white hover:border-accent hover:text-accent transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>All Case Studies</span>
              </Link>
            </div>
          </div>

          {/* Project Metadata Strip */}
          <MetaStrip project={project} />

          {/* Tech Stack Pills */}
          {project.tech.length > 0 && (
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
          )}
        </div>
      </header>

      {/* Hero Cover */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={`Cover preview of ${project.name}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-top"
              />
            ) : (
              <RedactedCover />
            )}
          </div>
        </div>
      </section>

      {inProgress ? (
        /* Locked case study for builds that are still under wraps */
        <section className="py-16 border-t border-white/10 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/[0.08] bg-surface/80 p-8 sm:p-14">
              <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-widest">
                <Lock className="h-4 w-4" />
                <span>[CASE STUDY LOCKED]</span>
              </div>
              <h2 className="mt-3 font-display uppercase text-3xl sm:text-4xl font-black text-white">
                Revealed at launch
              </h2>
              <p className="mt-4 text-sm sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-3xl">
                This build is on our workbench right now. The client, the brief and the full case
                study stay confidential until it goes live. Check back after launch.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* The Brief vs What We Built */}
          <section className="py-16 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div data-spotlight className="rounded-2xl border border-white/[0.08] bg-surface/80 p-8 sm:p-12 relative hover:border-accent/40 transition-colors duration-200">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                    THE BRIEF
                  </span>
                  <h2 className="mt-3 font-display uppercase text-2xl sm:text-3xl font-black text-white">
                    WHAT THEY NEEDED
                  </h2>
                  <p className="mt-5 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div data-spotlight className="rounded-2xl border border-white/[0.08] bg-surface/80 p-8 sm:p-12 relative hover:border-accent/40 transition-colors duration-200">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                    OUR APPROACH
                  </span>
                  <h2 className="mt-3 font-display uppercase text-2xl sm:text-3xl font-black text-white">
                    WHAT WE BUILT
                  </h2>
                  <p className="mt-5 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Deliverables */}
          <section className="py-20 border-t border-white/10 bg-background relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                  [DELIVERABLE SPEC]
                </span>
                <h2 className="mt-3 font-display uppercase text-3xl sm:text-4xl font-black text-white">
                  KEY DELIVERABLES
                </h2>
                <p className="mt-2 text-sm text-zinc-400 font-sans">What shipped in the live build.</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl flex items-start gap-3 border border-white/[0.08] bg-surface/80 p-6"
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

          {/* Desktop & Mobile Screenshots */}
          {project.screenshots.length > 0 && (
            <section className="py-24 border-t border-white/10 bg-background">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-14">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                    [VIEWPORT AUDIT]
                  </span>
                  <h2 className="mt-3 font-display uppercase text-3xl sm:text-4xl font-black text-white">
                    DESKTOP &amp; MOBILE
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400 font-mono">Captured from the live production site.</p>
                </div>

                <div className="space-y-20">
                  {project.screenshots.map((shot, idx) => (
                    <div key={idx} className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                      <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-white/15 bg-black">
                        <div className="flex items-center gap-2 border-b border-white/10 bg-black/90 px-4 py-3">
                          <div className="h-2 w-2 bg-accent" />
                          <span className="ml-2 font-mono text-[11px] text-zinc-400 flex items-center gap-1">
                            <Terminal className="h-3.5 w-3.5 text-accent" />
                            DESKTOP VIEWPORT // 1440x900
                          </span>
                        </div>
                        <div className="relative aspect-[16/10] w-full">
                          <Image
                            src={shot.desktop}
                            alt={`${project.name} desktop view ${idx + 1}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-4 flex justify-center">
                        <div className="w-[280px] overflow-hidden rounded-2xl border border-white/15 bg-black">
                          <div className="border-b border-white/10 bg-black/90 px-4 py-2 font-mono text-[10px] text-zinc-500 uppercase tracking-wider text-center">
                            MOBILE VIEWPORT // 390x844
                          </div>
                          <div className="relative aspect-[390/844] w-full">
                            <Image
                              src={shot.mobile}
                              alt={`${project.name} mobile view ${idx + 1}`}
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

          {/* Outcome (only when there is a real, verified result to report) */}
          {project.result && (
            <section className="py-20 border-t border-white/10 bg-background">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-white/[0.08] bg-surface/80 p-8 sm:p-14 relative shadow-2xl">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">[OUTCOME]</span>
                  <h2 className="mt-3 font-display uppercase text-3xl sm:text-4xl font-black text-white">THE RESULT</h2>
                  <p className="mt-4 text-sm sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-3xl">
                    {project.result}
                  </p>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Next / Previous Project Navigation */}
      <section className="border-t border-white/10 bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
          <Link
            href={`/work/${prevProject.slug}`}
            className="flex items-center gap-2 text-zinc-400 hover:text-accent focus-visible:outline-none focus-visible:text-accent transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>PREV: {prevProject.name.toUpperCase()}</span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="flex items-center gap-2 text-zinc-400 hover:text-accent focus-visible:outline-none focus-visible:text-accent transition-colors duration-200"
          >
            <span>NEXT: {nextProject.name.toUpperCase()}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Bottom Final CTA */}
      <CTA />
    </article>
  );
}

function MetaStrip({ project }: { project: Project }) {
  const items = [
    { label: "Industry", value: project.industry },
    { label: "Scope", value: project.scope },
    { label: "Platform", value: project.tech[0] ?? "Undisclosed" },
    { label: "Status", value: isInProgress(project) ? "In Development" : "Live", accent: true },
  ];
  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8 font-mono text-xs">
      {items.map((item) => (
        <div key={item.label}>
          <span className="text-zinc-500 block mb-1 uppercase tracking-wider">{item.label}</span>
          <span className={`font-bold ${item.accent ? "text-accent" : "text-white"}`}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
