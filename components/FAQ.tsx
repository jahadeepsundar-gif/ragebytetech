"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What makes RageByte different from standard web agencies?",
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
    <section className="py-24 border-t border-surface-border bg-background relative overflow-hidden">
      {/* Background mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 radial-mask" 
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>TRANSPARENCY &amp; PROTOCOLS</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const qCode = `0${idx + 1}`;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-accent/40 bg-surface/90 shadow-xl shadow-black/40"
                    : "border-surface-border bg-surface/60 hover:border-surface-border-hover hover:bg-surface/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-4">
                    <span className="font-mono text-xs font-bold text-accent shrink-0">
                      [{qCode}]
                    </span>
                    <span className="font-heading text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-surface-border transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-accent/10 border-accent/40 text-accent" : "text-muted-foreground bg-background"
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
                      <div className="border-t border-surface-border/50 px-6 pt-4 pb-6 font-sans text-sm sm:text-base text-zinc-300 leading-relaxed pl-12 sm:pl-14">
                        {item.answer}
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
