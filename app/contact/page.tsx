import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import {
  Clock,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Project — Project Enquiry & Architecture Review",
  description:
    "Ready to engineer your next web application? Submit your technical specifications to RageByte for direct review by senior engineers within 24 business hours.",
  openGraph: {
    title: "Start a Project — Project Enquiry | RageByte",
    description:
      "Ready to engineer your next web application? Submit your technical specifications to RageByte for direct review by senior engineers within 24 business hours.",
  },
};

export default function ContactPage() {
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
              <span>DIRECT DEVELOPER ACCESS</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Start a Project with{" "}
              <span className="bg-gradient-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                RageByte.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Tell us what you&apos;re looking to build. Whether you have a detailed technical specification
              or just an initial product concept, our senior engineering team will review your requirements
              and provide honest technical feedback within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Sidebar Section */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Form Column (Cols 1-8) */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-surface-border bg-surface/80 p-8 sm:p-12 backdrop-blur-xl shadow-2xl shadow-black/80">
                <div className="mb-10 border-b border-surface-border/80 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                      Project Configurator
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-mono">
                      Step-by-step engineering intake form
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-accent bg-accent/10 border border-accent/30 rounded-md px-2.5 py-1 self-start sm:self-auto">
                    Direct Senior Review
                  </span>
                </div>

                <ContactForm />
              </div>
            </div>

            {/* Sidebar Column (Cols 9-12) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Card 1: What Happens Next */}
              <div className="rounded-3xl border border-surface-border bg-surface/70 p-7 backdrop-blur-md">
                <h3 className="font-heading text-base font-bold text-foreground flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>The Next 48 Hours</span>
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-accent shrink-0 mt-0.5">01.</span>
                    <span>A senior engineer reviews your technical requirements within 24 business hours.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-accent shrink-0 mt-0.5">02.</span>
                    <span>If the scope aligns, we schedule a focused 20-minute technical discovery session.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-accent shrink-0 mt-0.5">03.</span>
                    <span>We deliver a fixed-scope milestone proposal with guaranteed staged deadlines.</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Studio Commitments */}
              <div className="rounded-3xl border border-surface-border bg-surface/70 p-7 backdrop-blur-md">
                <h3 className="font-heading text-base font-bold text-foreground flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>Studio Commitments</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Direct contact with creators (zero sales reps)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>No aggressive sales calls or marketing spam</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Mutual NDA compliance upon request</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>100% full codebase &amp; IP ownership</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Direct Email Desk */}
              <div className="rounded-3xl border border-surface-border bg-surface/70 p-7 backdrop-blur-md">
                <h3 className="font-heading text-base font-bold text-foreground flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>Direct Communication Desk</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Have an existing RFP, Figma link, or architecture deck? Email us directly:
                </p>
                <div className="mt-4 pt-3 border-t border-surface-border/60">
                  <a
                    href="mailto:hello@ragebyte.tech"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline"
                  >
                    <span>hello@ragebyte.tech</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQ />
    </div>
  );
}
