"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/MotionPrimitives";

import { HeadingReveal } from "@/components/motion/Premium";
export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What makes Kaatchi Productions different from standard web agencies?",
    answer:
      "We operate as a small, senior, technically strong engineering unit. You communicate directly with the developers building your application — never account managers or junior outsourcers. We write custom Next.js and TypeScript codebases without page builders or bloated templates.",
  },
  {
    question: "How long does a typical website or web application project take?",
    answer:
      "A focused landing page or business website typically ships in 2–3 weeks. A complex web application, custom headless e-commerce build, or multi-role portal typically takes 4–8 weeks depending on backend integrations and feature scope.",
  },
  {
    question: "What technology stack do you work with?",
    answer:
      "Our primary production stack is Next.js 14+ (App Router), TypeScript, React 18, and Tailwind CSS, hosted on Vercel. For email delivery and forms, we use Resend and Zod. For databases and backends, we integrate with PostgreSQL, Supabase, Prisma, or custom REST/GraphQL APIs.",
  },
  {
    question: "Do you offer post-launch maintenance and technical support?",
    answer:
      "Yes. We provide ongoing maintenance plans covering speed audits, dependency updates, serverless health checks, security patches, and iterative feature development so your codebase stays fast and secure.",
  },
  {
    question: "How does the engagement and billing process work?",
    answer:
      "We work primarily on milestone-based fixed project quotes with clear deliverables, or dedicated weekly sprints for open-ended product development. An initial discovery call defines the exact scope before any commitment.",
  },
];

interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQ({
  items = defaultFAQs,
  title = "Frequently Asked Questions",
  subtitle = "Clear answers regarding our architecture, sprints, and studio collaboration model.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 border-t border-white/10 bg-background relative overflow-hidden">
      {/* Background mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-20 radial-mask" 
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Marker */}
        <ScrollReveal>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                Questions &amp; answers
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              Straight answers
            </span>
          </div>

          <div>
            <HeadingReveal delay={0.1}>
              <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.035em] text-white leading-[0.92]">
                {title}
              </h2>
            </HeadingReveal>
            <p className="mt-5 text-sm sm:text-base text-zinc-400 font-sans max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const qCode = `0${idx + 1}`;
            return (
              <div
                key={idx}
                className={`transition-colors duration-200 ${
                  isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-start justify-between py-6 sm:py-8 text-left transition-colors focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 pr-6">
                    <span className="font-mono text-xs sm:text-sm font-bold text-accent shrink-0">
                      {qCode}
                    </span>
                    <span className="font-display uppercase text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200 ${
                      isOpen
                        ? "rotate-180 border-accent text-accent bg-accent/10"
                        : "border-white/20 text-zinc-400 hover:text-accent hover:border-accent"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="pb-8 font-sans text-sm sm:text-base text-zinc-300 leading-relaxed pl-10 sm:pl-14 max-w-3xl border-l-2 border-accent/40 ml-2 mb-4">
                        <div className="pl-4">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
