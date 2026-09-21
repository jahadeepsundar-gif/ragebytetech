"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, CheckCircle2, X } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

import { CharacterCarousel } from "@/src/shaders/character-carousel/CharacterCarousel";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  // Details panel is initially hidden (null) until a member card is explicitly clicked
  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState<number>(0);

  // Esc key listener to close details panel if open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedMemberIndex !== null) {
        setSelectedMemberIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMemberIndex]);

  const handleSelectMember = React.useCallback((idx: number, id?: string) => {
    let targetIndex = idx;
    if (id) {
      const foundIdx = teamMembers.findIndex((m) => m.id === id);
      if (foundIdx !== -1) targetIndex = foundIdx;
    }
    setSelectedMemberIndex(targetIndex);
    setActiveCarouselIndex(targetIndex);
  }, []);

  const handleActiveIndexChange = React.useCallback((idx: number) => {
    setActiveCarouselIndex(idx);
  }, []);

  const handleCloseDetails = React.useCallback(() => {
    setSelectedMemberIndex(null);
  }, []);

  const selectedMember = selectedMemberIndex !== null && teamMembers[selectedMemberIndex]
    ? teamMembers[selectedMemberIndex]
    : null;

  return (
    <section 
      id="team" 
      className="py-24 border-t border-surface-border bg-background relative overflow-hidden"
    >
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-15 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-surface-border/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>[07] // TECHNICAL LEADERSHIP</span>
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.92]">
              The Engineering Collective
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
              Direct access to our senior architects, engineers, and creative technologists. Zero account managers, zero junior buffers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
              INDEX:
            </span>
            <div className="flex gap-1.5 flex-wrap">
              {teamMembers.map((member, idx) => {
                const isSelected = selectedMemberIndex === idx;
                const isActive = selectedMemberIndex === null && activeCarouselIndex === idx;
                return (
                  <button
                    key={member.id}
                    onClick={() => handleSelectMember(idx, member.id)}
                    className={`h-8 w-8 font-mono text-xs font-bold transition-all flex items-center justify-center border ${
                      isSelected
                        ? "bg-accent text-background border-accent shadow-sm"
                        : isActive
                        ? "bg-white/10 border-white/40 text-foreground"
                        : "bg-surface/40 border-surface-border text-zinc-400 hover:text-foreground hover:border-white/30"
                    }`}
                    aria-label={`Select ${member.name}`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MAIN TEAM CONTAINER: Full-width Filmstrip initially, transitions to Split layout upon selection */}
        <div className="relative rounded-2xl border border-surface-border/80 bg-surface/30 overflow-hidden shadow-2xl backdrop-blur-md">
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          />

          <div className="flex flex-col lg:flex-row items-stretch min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            {/* FILMSTRIP: Full-width (100%) initially, smoothly transitions to Left (≈60%) when member is selected */}
            <div 
              className={`relative flex flex-col justify-between bg-black/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                selectedMember !== null 
                  ? "w-full lg:w-[58%] xl:w-[60%] border-b lg:border-b-0 lg:border-r border-surface-border/60 shrink-0" 
                  : "w-full"
              }`}
            >
              <div className="h-[460px] sm:h-[520px] lg:h-full min-h-[460px] lg:min-h-[580px] w-full relative">
                <CharacterCarousel
                  variant="filmstrip"
                  teamMembers={teamMembers}
                  onSelectMember={handleSelectMember}
                  onActiveIndexChange={handleActiveIndexChange}
                  activeIndex={selectedMemberIndex !== null ? selectedMemberIndex : activeCarouselIndex}
                  selectedMemberIndex={selectedMemberIndex}
                />
              </div>

              {/* Status bar inside the Filmstrip container */}
              <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-muted-foreground/70 border-t border-white/5 pt-2">
                <span className="hidden sm:inline-flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-accent" />
                  DRAG, SCROLL, OR ARROW KEYS TO BROWSE
                </span>
                <span className="ml-auto flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  ACTIVE: {String((selectedMemberIndex !== null ? selectedMemberIndex : activeCarouselIndex) + 1).padStart(2, "0")} / {String(teamMembers.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* RIGHT PORTION: Selected Member Details (ONLY rendered after an explicit member click) */}
            {selectedMember !== null && (
              <div 
                key={selectedMember.id}
                className="w-full lg:w-[42%] xl:w-[40%] p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative z-10 bg-surface/20 animate-details-enter shrink-0"
              >
                <div className="space-y-6">
                  {/* Header: Identity Indicator, Portrait, and Clean Close Control */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-xl overflow-hidden border-2 border-accent/40 bg-surface shadow-md shrink-0">
                        <Image
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                          priority
                        />
                        <div className="absolute bottom-0 right-0 px-1 py-0.2 rounded-tl bg-background/90 text-[9px] font-mono text-accent font-bold">
                          {String(selectedMemberIndex! + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono font-medium mb-1">
                          <span>{selectedMember.shortRole}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight truncate">
                          {selectedMember.name}
                        </h3>
                        <p className="text-xs font-mono text-muted-foreground mt-0.5">
                          {selectedMember.designation}
                        </p>
                      </div>
                    </div>

                    {/* Clean, Non-Intrusive Close Control */}
                    <button
                      onClick={handleCloseDetails}
                      className="h-7 w-7 rounded-lg border border-surface-border bg-surface/60 hover:bg-surface text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors flex items-center justify-center shrink-0"
                      aria-label="Close details"
                      title="Close details (Esc)"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Experience Badge if available */}
                  {selectedMember.experience && (
                    <div className="flex items-center gap-2 text-xs font-mono text-accent/80 border-y border-surface-border/50 py-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span>{selectedMember.experience} in High-Scale Engineering</span>
                    </div>
                  )}

                  {/* Professional Overview */}
                  <div>
                    <h4 className="text-[11px] font-mono font-semibold uppercase text-accent tracking-wider mb-2">
                      {"// PROFESSIONAL OVERVIEW"}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  {/* Specializations */}
                  {selectedMember.specializations && selectedMember.specializations.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-mono font-semibold uppercase text-accent tracking-wider mb-2.5">
                        {"// SPECIALIZATIONS"}
                      </h4>
                      <ul className="space-y-1.5">
                        {selectedMember.specializations.map((spec) => (
                          <li 
                            key={spec}
                            className="flex items-center gap-2 text-xs font-mono text-foreground/90"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills / Technologies */}
                  {selectedMember.skills && selectedMember.skills.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-mono font-semibold uppercase text-accent tracking-wider mb-2.5">
                        {"// SKILLS / TECHNOLOGIES"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedMember.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded border border-surface-border/80 bg-background/60 px-2 py-0.5 text-[11px] font-mono text-zinc-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Links: GitHub & LinkedIn */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-surface-border/60">
                  {selectedMember.github && (
                    <a
                      href={selectedMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-surface-border bg-surface/80 text-xs font-mono text-foreground hover:border-accent hover:text-accent transition-all"
                      aria-label={`${selectedMember.name} GitHub`}
                    >
                      <GithubIcon />
                      <span>GitHub</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                    </a>
                  )}
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-surface-border bg-surface/80 text-xs font-mono text-foreground hover:border-accent hover:text-accent transition-all"
                      aria-label={`${selectedMember.name} LinkedIn`}
                    >
                      <LinkedinIcon />
                      <span>LinkedIn</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
