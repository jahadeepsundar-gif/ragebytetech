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
    <article className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#090607]/80 p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)] hover:border-accent/50 hover:bg-[#0e0a0b]">
      {/* Top Corner Marker */}
      <div className="absolute top-3 right-3 font-mono text-xs text-zinc-600 transition-colors group-hover:text-accent">
        +
      </div>

      <div>
        {/* Header: Photo, Role Badges & Social Links */}
        <div className="flex items-start justify-between gap-4">
          <div className="relative h-20 w-20 rounded-xl overflow-hidden border border-white/15 bg-black">
            <Image
              src={member.photo || member.image}
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
                className="flex h-8 w-8 rounded-lg items-center justify-center border border-white/15 bg-black text-zinc-400 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
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
                className="flex h-8 w-8 rounded-lg items-center justify-center border border-white/15 bg-black text-zinc-400 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Member Details */}
        <div className="mt-6">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="font-display uppercase text-2xl font-black text-white tracking-tight">
              {displayName}
            </h3>
            {isDemo && (
              <span className="rounded-md border border-white/15 bg-black px-2 py-0.5 font-mono text-[10px] text-accent uppercase">
                DEMO PROFILE
              </span>
            )}
          </div>
          <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-accent">
            {member.role || member.designation}
          </p>

          <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Engineering Skills / Specializations */}
      <div className="mt-6 border-t border-white/10 pt-4">
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] block mb-2">
          [SPECIALIZATIONS]
        </span>
        <div className="flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-black/60 px-2 py-0.5 font-mono text-[10px] text-zinc-300"
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
