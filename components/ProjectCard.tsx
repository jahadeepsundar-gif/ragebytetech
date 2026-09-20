"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const isDemo = project.name.includes("[Demo");
  const displayName = project.name.replace(" [Demo Project]", "").replace(" [Demo]", "");

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_24px_-8px_rgba(244,44,29,0.2)]">
      {/* Visual Thumbnail Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-subtle">
        <Image
          src={project.coverImage}
          alt={`Screenshot preview of ${displayName}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {isDemo ? (
            <span className="inline-flex items-center gap-1 rounded-md border border-surface-border bg-background/90 px-2.5 py-1 font-mono text-[10px] text-accent backdrop-blur-md shadow-sm">
              <Sparkles className="h-3 w-3" />
              Demo Case Study
            </span>
          ) : (
            <span className="inline-flex items-center rounded-md border border-surface-border bg-background/90 px-2.5 py-1 font-mono text-[10px] text-foreground backdrop-blur-md">
              Client Project
            </span>
          )}

          {project.liveUrl && (
            <span className="hidden sm:inline-flex items-center gap-1 rounded-md border border-surface-border bg-background/90 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live Demo
            </span>
          )}
        </div>

        {/* Hover Quick Action on Desktop */}
        <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-300 md:flex md:group-hover:opacity-100 bg-background/40 backdrop-blur-[2px]">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-semibold text-background shadow-lg transition-transform hover:scale-105"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-md border border-surface-border/80 bg-background/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-surface-border-hover group-hover:text-foreground"
              >
                {item}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="rounded-md border border-surface-border/80 bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
            <Link href={`/work/${project.slug}`} className="flex items-center justify-between">
              <span>{displayName}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </Link>
          </h3>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Card Footer Bar */}
        <div className="mt-6 flex items-center justify-between border-t border-surface-border/60 pt-4 text-xs">
          <Link
            href={`/work/${project.slug}`}
            className="font-mono text-xs font-semibold text-accent transition-colors hover:text-accent-hover inline-flex items-center gap-1"
          >
            <span>View Architecture</span>
            <span>&rarr;</span>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground font-mono text-[11px]"
            >
              <span>External Demo</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
