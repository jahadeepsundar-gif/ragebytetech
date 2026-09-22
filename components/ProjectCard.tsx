"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  index?: number;
}

export function ProjectCard({ project, priority = false, index }: ProjectCardProps) {
  const isDemo = project.name.includes("[Demo");
  const displayName = project.name.replace(" [Demo Project]", "").replace(" [Demo]", "");
  const indexFormatted = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <article className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-[#090607]/80 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:bg-[#0e0a0b] hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.8)] focus-within:border-accent/60">
      {/* Visual Thumbnail Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-black/40">
        <Image
          src={project.coverImage}
          alt={`Screenshot preview of ${displayName}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

        {/* Top Badges & Monospace Index */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-2">
            {indexFormatted && (
              <span className="font-mono text-xs font-bold tracking-widest text-accent bg-background/90 px-2.5 py-0.5 rounded-md border border-white/10">
                [{indexFormatted}]
              </span>
            )}
            {isDemo ? (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-background/90 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300 uppercase tracking-wider">
                <Sparkles className="h-3 w-3 text-accent" />
                Demo Case Study
              </span>
            ) : (
              <span className="inline-flex items-center rounded-md border border-white/10 bg-background/90 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300 uppercase tracking-wider">
                Production Release
              </span>
            )}
          </div>

          {project.liveUrl && (
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-background/90 px-2.5 py-0.5 font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live System
            </span>
          )}
        </div>

        {/* Hover Quick Action on Desktop */}
        <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-200 md:flex md:group-hover:opacity-100 bg-black/50 backdrop-blur-[2px]">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-background shadow-xl transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Read Architecture</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div>
          {/* Tech Stack Metadata Hairlines */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Large Editorial Project Title */}
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-foreground group-hover:text-accent group-focus-within:text-accent transition-colors duration-200 leading-[1.02]">
            <Link 
              href={`/work/${project.slug}`} 
              className="flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              <span>{displayName}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent shrink-0" />
            </Link>
          </h3>

          {/* Technical Description */}
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Card Footer Bar */}
        <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs font-mono">
          <Link
            href={`/work/${project.slug}`}
            className="font-semibold text-accent transition-colors duration-200 hover:text-accent-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent inline-flex items-center gap-2 tracking-wider uppercase text-[11px]"
          >
            <span>Explore Architecture Specification</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-colors duration-200 tracking-wider uppercase text-[10px]"
            >
              <span>Live Instance</span>
              <ExternalLink className="h-3 w-3 text-accent" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
