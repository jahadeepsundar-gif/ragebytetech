import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { ContactSparkBadge } from "@/components/ContactSparkBadge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, isInProgress } from "@/data/projects";
import {
  ScrollReveal,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

import { HeadingReveal } from "@/components/motion/Premium";
export const metadata: Metadata = {
  title: "Start a Project — Project Enquiry",
  description:
    "Planning a new website, landing page, online store or redesign? Tell Kaatchi Productions about your project and we'll reply within 24 hours on working days.",
  openGraph: {
    title: "Start a Project — Project Enquiry | Kaatchi Productions",
    description:
      "Planning a new website, landing page, online store or redesign? Tell Kaatchi Productions about your project and we'll reply within 24 hours on working days.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Editorial Header */}
      <section className="relative py-24 sm:py-32 border-b border-white/10 bg-background overflow-hidden">
        {/* Background mesh */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            {/* Editorial Section Marker */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                  INTAKE PROTOCOL
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                [SYS.ACTIVE_INTAKE // 2026]
              </span>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <HeadingReveal delay={0.1}>
                <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.035em] text-white leading-[0.88]">
                  START A PROJECT WITH{" "}
                  <span className="text-accent">Kaatchi Productions.</span>
                </h1>
              </HeadingReveal>

              <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed font-sans max-w-2xl">
                Planning a new website, landing page, online store or redesign? Tell us about it. We&apos;ll read your brief and reply within 24 hours on working days with honest next steps.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <span className="text-accent font-bold">[REPLY WITHIN 24H]</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>TALK DIRECTLY TO THE BUILDERS</span>
                <span className="text-zinc-600">{"//"}</span>
                <span>YOU OWN THE CODE</span>
              </div>
            </div>

            {/* ThreeUI SparkBadge: Kaatchi Productions credential in rain */}
            <div className="lg:col-span-5">
              <ContactSparkBadge className="h-[380px] sm:h-[460px] lg:h-[520px]" />
            </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form & Sidebar Section */}
      <section className="py-20 sm:py-28 bg-background relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Form Column (Cols 1-8) */}
            <div className="lg:col-span-8">
              <ScaleIn>
                <div className="rounded-3xl border border-white/[0.08] bg-surface/80 p-6 sm:p-10 lg:p-12">
                  <div className="mb-10 flex flex-col gap-3 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>Project enquiry</span>
                      </div>
                      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black uppercase tracking-[-0.02em] leading-[0.92] text-white">
                        Tell us about your project
                      </h2>
                    </div>
                    <span className="shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      4 steps · about 2 minutes
                    </span>
                  </div>

                  <ContactForm />
                </div>
              </ScaleIn>
            </div>

            {/* Sidebar Column (Cols 9-12) */}
            <StaggerContainer className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 lg:self-start">
              {/* Card 1: What happens next */}
              <StaggerItem>
                <div data-spotlight className="rounded-2xl border border-white/[0.08] bg-surface/80 p-6 sm:p-8">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent">[What happens next]</span>
                  <h3 className="mt-3 mb-6 font-display text-2xl font-black uppercase tracking-tight text-white">
                    After you hit send
                  </h3>
                  <ol className="space-y-5 text-sm text-zinc-400 font-sans">
                    {[
                      "We read your brief and reply within 24 hours on working days.",
                      "A short call to understand your goals, content and timeline.",
                      "A clear proposal with the scope, price in ₹ and delivery dates.",
                    ].map((step, idx) => (
                      <li key={step} className="flex items-start gap-4">
                        <span className="font-mono text-xs font-bold text-accent leading-6 shrink-0">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-6">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </StaggerItem>

              {/* Card 2: Working with us */}
              <StaggerItem>
                <div data-spotlight className="rounded-2xl border border-white/[0.08] bg-surface/80 p-6 sm:p-8">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent">[Working with us]</span>
                  <h3 className="mt-3 mb-6 font-display text-2xl font-black uppercase tracking-tight text-white">
                    What you can expect
                  </h3>
                  <ul className="space-y-3.5 text-sm text-zinc-300 font-sans">
                    {[
                      "Talk directly to the people building your site",
                      "No sales pressure or marketing spam",
                      "Happy to sign an NDA on request",
                      "You own the code, design and content",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>

              {/* Card 3: Recent work */}
              <StaggerItem>
                <div data-spotlight className="rounded-2xl border border-white/[0.08] bg-surface/80 p-6 sm:p-8">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent">[Recent work]</span>
                  <h3 className="mt-3 mb-5 font-display text-2xl font-black uppercase tracking-tight text-white">
                    Live projects
                  </h3>
                  <ul className="divide-y divide-white/[0.06]">
                    {projects
                      .filter((project) => !isInProgress(project))
                      .map((project) => (
                        <li key={project.slug}>
                          <Link
                            href={`/work/${project.slug}`}
                            className="group flex items-center justify-between gap-3 py-3 focus-visible:outline-none focus-visible:text-accent"
                          >
                            <span>
                              <span className="block font-display text-lg font-black uppercase tracking-tight text-white transition-colors group-hover:text-accent">
                                {project.name}
                              </span>
                              <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                                {project.industry}
                              </span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQ />
    </div>
  );
}
