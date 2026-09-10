import React from "react";
import Image from "next/image";
import { TeamMember } from "@/data/team";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const isDemo = member.name.includes("[Demo");
  const displayName = member.name.replace(" [Demo Profile]", "").replace(" [Demo]", "");

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-surface/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.8),0_0_20px_-6px_rgba(0,245,160,0.15)]">
      {/* Top Corner Marker */}
      <div className="absolute top-3 right-3 font-mono text-[10px] text-zinc-600 transition-colors group-hover:text-accent">
        +
      </div>

      <div>
        {/* Header: Photo, Role Badges & Social Links */}
        <div className="flex items-start justify-between gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-surface-border bg-surface-subtle shadow-inner">
            <Image
              src={member.photo}
              alt={`Photo of ${displayName}`}
              fill
              sizes="80px"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex items-center gap-2">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${displayName}'s GitHub`}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-surface-border bg-background text-muted-foreground transition-all hover:border-accent/50 hover:text-accent hover:bg-surface-elevated"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${displayName}'s LinkedIn`}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-surface-border bg-background text-muted-foreground transition-all hover:border-accent/50 hover:text-accent hover:bg-surface-elevated"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Member Details */}
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-white">
              {displayName}
            </h3>
            {isDemo && (
              <span className="rounded-md border border-surface-border bg-background/80 px-2 py-0.5 font-mono text-[10px] text-accent">
                Demo Profile
              </span>
            )}
          </div>
          <p className="mt-1 font-mono text-xs font-semibold text-accent">
            {member.role}
          </p>

          <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Engineering Skills / Specializations */}
      <div className="mt-6 border-t border-surface-border/60 pt-4">
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider block mb-2">
          Specializations
        </span>
        <div className="flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-surface-border bg-background/80 px-2 py-0.5 font-mono text-[10px] text-zinc-300 transition-colors group-hover:border-surface-border-hover group-hover:text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default TeamCard;
