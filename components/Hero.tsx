"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Layers,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

type TabKey = "architecture" | "performance" | "delivery";

export function Hero() {
  const [activeTab, setActiveTab] = useState<TabKey>("architecture");
  const [copied, setCopied] = useState(false);

  const snippets: Record<TabKey, string> = {
    architecture: `// RageByte Core Engineering Stack
export const ragebyte = defineStudio({
  framework: "Next.js 14+ (App Router)",
  language: "TypeScript",
  styling: "Tailwind CSS",
  rendering: "Server Components (RSC)",
  principles: [
    "Responsive by default",
    "Performance-focused",
    "Custom-built",
    "Mobile-first",
  ],
});`,
    performance: `// Performance Engineering Guardrails
export const performanceAudit = {
  webVitals: "Optimized for Sub-Second LCP",
  rendering: "Streaming React Server Components",
  styling: "Zero-Runtime CSS Overhead",
  bundling: "Tree-Shaken Edge Packages",
  caching: "Aggressive ISR & Stale-While-Revalidate",
};`,
    delivery: `// Studio Engagement Model
export const deliveryManifest = {
  directAccess: "Direct collaboration with senior engineers",
  cadence: "Weekly staged production deployments",
  handover: "Full IP ownership + automated CI/CD setup",
  support: "Dedicated post-launch warranty & retainers",
};`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-36">
      {/* 1. Atmospheric Ambient Lighting & Engineering Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        {/* Top-down accent spotlight */}
        <div className="absolute -top-40 h-[550px] w-[850px] rounded-full bg-gradient-to-b from-accent/20 via-accent/5 to-transparent blur-[140px]" />
        {/* Secondary ambient depth nodes */}
        <div className="absolute top-1/3 -right-48 h-[450px] w-[450px] rounded-full bg-surface-subtle/80 blur-[130px]" />
        <div className="absolute top-1/2 -left-48 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[130px]" />
        {/* Fine Engineering Grid */}
        <div className="absolute inset-0 bg-grid-pattern radial-mask opacity-75" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* 2. Elevated Studio Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-surface-border bg-surface/90 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md shadow-sm transition-all hover:border-accent/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs font-medium text-foreground tracking-wide">
              Engineering-First Web Studio
            </span>
            <span className="text-surface-border">/</span>
            <span className="flex items-center gap-1 text-accent font-medium">
              <Sparkles className="h-3 w-3" /> Available for New Projects
            </span>
          </motion.div>

          {/* 3. High-Contrast Editorial Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 font-heading text-4xl font-extrabold tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl leading-[1.06]"
          >
            Technically Strong Web Development.{" "}
            <span className="relative whitespace-nowrap block sm:inline mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
                Built to Perform.
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent"
              />
            </span>
          </motion.h1>

          {/* 4. Balanced Technical Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans"
          >
            RageByte is a small, specialized team building custom Next.js web applications,
            headless storefronts, and performance-driven digital platforms. Zero templates,
            zero account-manager bureaucracy — direct access to senior engineers.
          </motion.p>

          {/* 5. Premium Action Controls (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-background shadow-[0_0_28px_-4px_rgba(0,245,160,0.4)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_36px_-2px_rgba(0,245,160,0.55)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface/80 px-7 py-4 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-200 hover:border-surface-border-hover hover:bg-surface-subtle active:scale-[0.98]"
            >
              <span>View Selected Work</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* 6. Factual Technical Stack Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-muted-foreground"
          >
            <div className="flex items-center gap-1.5 rounded-lg border border-surface-border/70 bg-surface/70 px-3 py-1.5 backdrop-blur-sm">
              <Layers className="h-3.5 w-3.5 text-accent" />
              <span>Next.js App Router</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-surface-border/70 bg-surface/70 px-3 py-1.5 backdrop-blur-sm">
              <Code2 className="h-3.5 w-3.5 text-accent" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-surface-border/70 bg-surface/70 px-3 py-1.5 backdrop-blur-sm">
              <Palette className="h-3.5 w-3.5 text-accent" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-surface-border/70 bg-surface/70 px-3 py-1.5 backdrop-blur-sm">
              <Smartphone className="h-3.5 w-3.5 text-accent" />
              <span>Mobile-First &amp; Responsive</span>
            </div>
          </motion.div>
        </div>

        {/* 7. Interactive Studio Architecture Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface/90 backdrop-blur-xl shadow-2xl shadow-black/80 transition-all duration-300 hover:border-accent/40">
            {/* Terminal Window Header Bar & Tab Switcher */}
            <div className="flex flex-wrap items-center justify-between border-b border-surface-border/80 bg-background/90 px-4 py-2.5 gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 ml-2 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("architecture")}
                    className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-colors ${
                      activeTab === "architecture"
                        ? "bg-surface-elevated text-accent font-semibold border border-surface-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Terminal className="h-3.5 w-3.5" />
                    <span>ragebyte.architecture.ts</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("performance")}
                    className={`hidden sm:flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-colors ${
                      activeTab === "performance"
                        ? "bg-surface-elevated text-accent font-semibold border border-surface-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Zap className="h-3.5 w-3.5" />
                    <span>performance.spec.ts</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("delivery")}
                    className={`hidden md:flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-colors ${
                      activeTab === "delivery"
                        ? "bg-surface-elevated text-accent font-semibold border border-surface-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>delivery.manifest.ts</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block rounded bg-surface-subtle px-2 py-0.5 text-[10px] font-mono text-accent border border-surface-border">
                  Live Stack Blueprint
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy code snippet"
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-surface-elevated hover:text-foreground transition-colors border border-transparent hover:border-surface-border"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-accent">
                      <Check className="h-3.5 w-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-mono">
                      <Copy className="h-3.5 w-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="overflow-x-auto p-6 font-mono text-xs sm:text-sm text-foreground/90 leading-relaxed bg-[#07080c]">
              {activeTab === "architecture" && (
                <pre className="text-muted-foreground font-mono">
                  <code>
                    <span className="text-zinc-500">{"// RageByte Core Engineering Stack"}</span>{'\n'}
                    <span className="text-purple-400">export const </span>
                    <span className="text-accent font-semibold">ragebyte</span>
                    <span className="text-zinc-400"> = </span>
                    <span className="text-blue-400">defineStudio</span>
                    <span className="text-zinc-400">({'{'}</span>{'\n'}
                    <span className="text-zinc-400">  framework: </span>
                    <span className="text-emerald-300">&quot;Next.js 14+ (App Router)&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  language: </span>
                    <span className="text-emerald-300">&quot;TypeScript&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  styling: </span>
                    <span className="text-emerald-300">&quot;Tailwind CSS&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  rendering: </span>
                    <span className="text-emerald-300">&quot;Server Components (RSC)&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  principles: [</span>{'\n'}
                    <span className="text-accent">    &quot;Responsive by default&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-accent">    &quot;Performance-focused&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-accent">    &quot;Custom-built&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-accent">    &quot;Mobile-first&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  ],</span>{'\n'}
                    <span className="text-zinc-400">{'}'});</span>
                  </code>
                </pre>
              )}

              {activeTab === "performance" && (
                <pre className="text-muted-foreground font-mono">
                  <code>
                    <span className="text-zinc-500">{"// Performance Engineering Guardrails"}</span>{'\n'}
                    <span className="text-purple-400">export const </span>
                    <span className="text-accent font-semibold">performanceAudit</span>
                    <span className="text-zinc-400"> = {'{'}</span>{'\n'}
                    <span className="text-zinc-400">  webVitals: </span>
                    <span className="text-emerald-300">&quot;Optimized for Sub-Second LCP&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  rendering: </span>
                    <span className="text-emerald-300">&quot;Streaming React Server Components&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  styling: </span>
                    <span className="text-emerald-300">&quot;Zero-Runtime CSS Overhead&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  bundling: </span>
                    <span className="text-emerald-300">&quot;Tree-Shaken Edge Packages&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  caching: </span>
                    <span className="text-emerald-300">&quot;Aggressive ISR &amp; Stale-While-Revalidate&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">{'}'};</span>
                  </code>
                </pre>
              )}

              {activeTab === "delivery" && (
                <pre className="text-muted-foreground font-mono">
                  <code>
                    <span className="text-zinc-500">{"// Studio Engagement Model"}</span>{'\n'}
                    <span className="text-purple-400">export const </span>
                    <span className="text-accent font-semibold">deliveryManifest</span>
                    <span className="text-zinc-400"> = {'{'}</span>{'\n'}
                    <span className="text-zinc-400">  directAccess: </span>
                    <span className="text-emerald-300">&quot;Direct collaboration with senior engineers&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  cadence: </span>
                    <span className="text-emerald-300">&quot;Weekly staged production deployments&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  handover: </span>
                    <span className="text-emerald-300">&quot;Full IP ownership + automated CI/CD setup&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">  support: </span>
                    <span className="text-emerald-300">&quot;Dedicated post-launch warranty &amp; retainers&quot;</span>
                    <span className="text-zinc-400">,</span>{'\n'}
                    <span className="text-zinc-400">{'}'};</span>
                  </code>
                </pre>
              )}
            </div>

            {/* Factual Technical Architecture Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-surface-border/80 bg-background/50 text-center text-xs divide-x divide-surface-border/80">
              <div className="p-3.5">
                <div className="font-mono font-bold text-accent">Next.js 14+</div>
                <div className="text-[11px] text-muted-foreground">App Router &amp; RSC</div>
              </div>
              <div className="p-3.5">
                <div className="font-mono font-bold text-accent">TypeScript</div>
                <div className="text-[11px] text-muted-foreground">Type-Safe Architecture</div>
              </div>
              <div className="p-3.5">
                <div className="font-mono font-bold text-accent">Tailwind CSS</div>
                <div className="text-[11px] text-muted-foreground">Design Token System</div>
              </div>
              <div className="p-3.5">
                <div className="font-mono font-bold text-accent">Mobile-First</div>
                <div className="text-[11px] text-muted-foreground">Responsive by Default</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
