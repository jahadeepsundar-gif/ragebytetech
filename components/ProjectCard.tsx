"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Project, isInProgress } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import { STUDIO_EASE } from "@/components/motion/MotionPrimitives";
import { useParallax } from "@/components/motion/Premium";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  index?: number;
}

export function ProjectCard({ project, priority = false, index }: ProjectCardProps) {
  const inProgress = isInProgress(project);
  const displayName = project.name;
  const indexFormatted = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;
  const caseHref = `/work/${project.slug}`;

  // Motion: image frame uncovers upward on scroll, the screenshot drifts inside it,
  // and a "VIEW" badge follows the cursor across the image on hover.
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const drift = useParallax(frameRef, reduce ? 0 : 18);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const badgeX = useSpring(cursorX, { stiffness: 380, damping: 32, mass: 0.5 });
  const badgeY = useSpring(cursorY, { stiffness: 380, damping: 32, mass: 0.5 });
  const [hovering, setHovering] = useState(false);

  const trackCursor = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const r = event.currentTarget.getBoundingClientRect();
    // badge is 96px; offset so its centre sits on the cursor
    cursorX.set(event.clientX - r.left - 48);
    cursorY.set(event.clientY - r.top - 48);
  };

  return (
    <article className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-surface/80 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:bg-background-secondary hover:shadow-[0_16px_36px_-12px_rgba(17,17,17,0.24)] focus-within:border-accent/60">
      {/* Visual Thumbnail Frame */}
      <motion.div
        ref={frameRef}
        className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-black/40 md:cursor-none"
        initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: STUDIO_EASE }}
        onPointerMove={trackCursor}
        onPointerEnter={(event) => {
          trackCursor(event);
          setHovering(true);
        }}
        onPointerLeave={() => setHovering(false)}
      >
        {project.coverImage ? (
          // Oversized slightly so the scroll drift never shows an edge
          <motion.div className="absolute -inset-y-[6%] inset-x-0" style={{ y: drift }}>
            <Image
              src={project.coverImage}
              alt={`Screenshot preview of ${displayName}`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
          </motion.div>
        ) : (
          <RedactedCover />
        )}

        {/* Top Badges & Monospace Index */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-2">
            {indexFormatted && (
              <span className="font-mono text-xs font-bold tracking-widest text-accent bg-background/90 px-2.5 py-0.5 rounded-md border border-white/10">
                [{indexFormatted}]
              </span>
            )}
            {inProgress ? (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-background/90 px-2.5 py-0.5 font-mono text-[10px] text-accent uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                In Development
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

        {/* Whole image opens the case study */}
        <Link
          href={caseHref}
          aria-label={`${inProgress ? "View build status for" : "Read case study:"} ${displayName}`}
          className="absolute inset-0 z-[5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
        />

        {/* Cursor-follow badge (desktop pointer only) */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20 hidden md:grid h-24 w-24 place-items-center rounded-full bg-accent text-center font-mono text-[10px] font-bold uppercase leading-tight tracking-[0.18em] text-background shadow-[0_18px_40px_-16px_rgba(17,17,17,0.55)]"
          style={{ x: badgeX, y: badgeY }}
          initial={false}
          animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.35, ease: STUDIO_EASE }}
        >
          <span className="flex flex-col items-center gap-1">
            {inProgress ? "Status" : "View"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </motion.span>
      </motion.div>

      {/* Card Content & Details */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div>
          {/* Tech Stack Metadata Hairlines */}
          <div className="flex flex-wrap gap-2 mb-4">
            {inProgress && (
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Stack Undisclosed
              </span>
            )}
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
            <span className="link-draw">{inProgress ? "Build Status" : "Explore Case Study"}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>

          {inProgress ? (
            <span className="inline-flex items-center gap-1.5 text-zinc-500 tracking-wider uppercase text-[10px]">
              <Lock className="h-3 w-3 text-accent" />
              <span>Revealed at Launch</span>
            </span>
          ) : project.liveUrl && (
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

/** Stand-in artwork for builds that can't be shown yet */
export function RedactedCover({ label = "Under NDA // Currently Building" }: { label?: string }) {
  return (
    // Always a black block (like the reference's dark image tiles), never a pale haze
    <div className="theme-dark absolute inset-0 bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgb(var(--c-foreground)) 0 1px, transparent 1px 14px)",
        }}
      />
      {/* Redacted wireframe of a page */}
      <div aria-hidden="true" className="absolute inset-x-[12%] top-[18%] space-y-3 blur-[1.5px]">
        <div className="h-3 w-1/3 rounded-sm bg-white/10" />
        <div className="h-8 w-4/5 rounded-sm bg-white/[0.08]" />
        <div className="h-8 w-3/5 rounded-sm bg-white/[0.08]" />
        <div className="h-2 w-2/3 rounded-sm bg-white/[0.06]" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-accent/40 bg-background/80">
          <Lock className="h-5 w-5 text-accent" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">{label}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
