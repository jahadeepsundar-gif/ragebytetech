import React from "react";
import { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { TeamCard } from "@/components/TeamCard";
import { TechStack } from "@/components/TechStack";
import { WhyRageByte } from "@/components/WhyRageByte";
import { CTA } from "@/components/CTA";
import {
  Code2,
  Gauge,
  Layers,
  Sparkles,
  Users,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Mission, Team & Engineering Philosophy",
  description:
    "Learn about RageByte: a specialized web development studio building custom Next.js web applications, headless storefronts, and performance-first interfaces.",
  openGraph: {
    title: "About Us — Mission, Team & Engineering Philosophy | RageByte",
    description:
      "Learn about RageByte: a specialized web development studio building custom Next.js web applications, headless storefronts, and performance-first interfaces.",
  },
};

export default function AboutPage() {
  const isDemoTeam = teamMembers.some((m) => m.name.includes("[Demo"));

  return (
    <div className="flex flex-col bg-background">
      {/* Editorial Header */}
      <section className="relative py-24 border-b border-surface-border bg-background-secondary overflow-hidden">
        {/* Background glow and mesh */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-30 radial-mask" 
        />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border mb-6">
              <Terminal className="h-3.5 w-3.5" />
              <span>THE STUDIO MANIFESTO</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              We Build Web Software{" "}
              <span className="bg-gradient-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                That Performs.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              RageByte was founded on a simple conviction: businesses don&apos;t need generic templates,
              bureaucracy, or account-management overhead. They need senior engineers who understand
              modern web architecture, write clean TypeScript, and ship code that converts.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Studio Philosophy */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                Our Operational Model
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                Earn Trust Through Real Engineering.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our objective is simple: establish deep client confidence through transparent technical capability,
                and then exceed every expectation throughout execution. We do not inflate scopes or make unverified claims.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                By focusing strictly on modern, proven web technologies — Next.js 14, React 18,
                TypeScript, and Tailwind CSS — we eliminate the bloat, speed penalties, and maintenance headaches
                inherent in legacy CMS platforms.
              </p>
            </div>

            {/* Right Pillars Matrix */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-surface-border bg-surface/80 p-6 backdrop-blur-md transition-colors hover:border-accent/40">
                <Gauge className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-heading text-base font-bold text-foreground">Speed by Default</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Sub-second LCP, zero layout shifts, and streaming edge responses on every page.
                </p>
              </div>

              <div className="rounded-2xl border border-surface-border bg-surface/80 p-6 backdrop-blur-md transition-colors hover:border-accent/40">
                <Code2 className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-heading text-base font-bold text-foreground">Strict TypeScript</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  End-to-end schema validation, robust typings, and zero undefined runtime bugs.
                </p>
              </div>

              <div className="rounded-2xl border border-surface-border bg-surface/80 p-6 backdrop-blur-md transition-colors hover:border-accent/40">
                <Layers className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-heading text-base font-bold text-foreground">Zero Bloatware</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Handcrafted modular codebases with 100% client repository ownership.
                </p>
              </div>

              <div className="rounded-2xl border border-surface-border bg-surface/80 p-6 backdrop-blur-md transition-colors hover:border-accent/40">
                <Users className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-heading text-base font-bold text-foreground">Direct Dev Pairing</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Direct communication with the technical architects building your platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Team Directory */}
      <section className="py-24 border-t border-surface-border bg-background-secondary relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-surface-border/60 pb-8">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                Core Engineering Roster
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                Meet the Creators
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                A specialized team of full-stack engineers, UI/UX systems designers, and cloud architects.
              </p>

              {isDemoTeam && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/90 px-3.5 py-1 text-xs text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span>Demo team roster for UI verification — pending production team profiles</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Stack Breakdown */}
      <TechStack />

      {/* Why Choose RageByte Advantage */}
      <WhyRageByte />

      {/* Final Studio CTA */}
      <CTA />
    </div>
  );
}
