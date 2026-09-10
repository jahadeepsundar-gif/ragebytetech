"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Testimonial as TestimonialType } from "@/data/testimonials";
import { Quote, Sparkles, ArrowUpRight } from "lucide-react";

interface TestimonialsProps {
  testimonials: TestimonialType[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  // MASTER Specification Section 4: "Testimonials — only real ones; omit section if none yet"
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const hasDemoItems = testimonials.some((t) => t.isDemo || t.clientName.includes("[Demo"));

  return (
    <section className="py-24 border-y border-surface-border bg-background-secondary relative overflow-hidden">
      {/* Ambient background mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border">
            <Quote className="h-3.5 w-3.5" />
            <span>EXECUTIVE ENDORSEMENTS</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Trusted by Technical Leaders
          </h2>

          {/* Factual Demo Disclosure */}
          {hasDemoItems && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/90 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Placeholder testimonials for interface testing — pending production client signoffs</span>
            </div>
          )}
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => {
            const cleanName = item.clientName.replace(" [Demo Review]", "").replace(" [Demo]", "");
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-surface-border bg-surface/80 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.8),0_0_20px_-6px_rgba(0,245,160,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="h-8 w-8 text-accent/30 transition-colors group-hover:text-accent" />
                    <span className="font-mono text-xs text-muted-foreground">
                      REV [0{idx + 1}]
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 border-t border-surface-border/60 pt-6">
                  <div className="flex items-center gap-3.5">
                    {item.avatarUrl ? (
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-surface-border bg-surface-subtle">
                        <Image
                          src={item.avatarUrl}
                          alt={`Avatar of ${cleanName}`}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-accent font-bold font-mono">
                        {cleanName.charAt(0)}
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-sm font-bold text-foreground truncate">
                        {cleanName}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate font-mono">
                        {item.clientRole} &middot; <span className="text-zinc-300">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Related Case Study Link (if provided) */}
                  {item.projectSlug && (
                    <div className="mt-4 pt-3 border-t border-surface-border/40">
                      <Link
                        href={`/work/${item.projectSlug}`}
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-accent hover:text-accent-hover transition-colors"
                      >
                        <span>Related Project Case Study</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
