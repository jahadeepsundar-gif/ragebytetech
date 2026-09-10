import React from "react";
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  Mail,
  Terminal,
  Sparkles,
  Server,
} from "lucide-react";

interface TechCategory {
  title: string;
  items: {
    name: string;
    description: string;
    icon: React.ElementType;
  }[];
}

const stackCategories: TechCategory[] = [
  {
    title: "Frontend Architecture",
    items: [
      {
        name: "Next.js 14+ (App Router)",
        description: "Streaming React Server Components & edge prefetching",
        icon: Layers,
      },
      {
        name: "React 18",
        description: "Concurrent rendering with selective hydration",
        icon: Cpu,
      },
      {
        name: "Tailwind CSS",
        description: "Zero runtime CSS overhead with atomic utility tokens",
        icon: Zap,
      },
      {
        name: "Framer Motion",
        description: "Hardware-accelerated, accessible micro-interactions",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "Language & Data Integrity",
    items: [
      {
        name: "TypeScript (Strict)",
        description: "End-to-end type safety eliminating runtime null errors",
        icon: Code2,
      },
      {
        name: "Zod Schema Validation",
        description: "Runtime payload parsing for forms & API route boundaries",
        icon: ShieldCheck,
      },
      {
        name: "Node.js Serverless",
        description: "Isolated edge functions with sub-10ms cold start times",
        icon: Server,
      },
      {
        name: "Resend Engine",
        description: "Transactional delivery with DKIM/SPF verification",
        icon: Mail,
      },
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-20 border-b border-surface-border bg-background-secondary relative overflow-hidden">
      {/* Background Mesh Grid */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-border/60 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-mono font-medium text-accent border border-surface-border">
              <Terminal className="h-3.5 w-3.5" />
              <span>THE PRODUCTION STACK</span>
            </div>
            <h2 className="mt-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
              Engineered on Next.js &amp; TypeScript
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-muted-foreground font-mono">
            Every technology is selected strictly for execution speed, developer velocity, and long-term maintainability.
          </p>
        </div>

        {/* 2-Column Categorized Architecture Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stackCategories.map((cat, cIdx) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-surface-border bg-surface/60 p-6 sm:p-8 backdrop-blur-md"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-border/60 font-mono text-xs text-muted-foreground">
                <span className="text-accent font-semibold uppercase tracking-wider">
                  [{cIdx === 0 ? "TIER-01" : "TIER-02"}] {cat.title}
                </span>
                <span>PRODUCTION READY</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="group rounded-xl border border-surface-border bg-surface/80 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-surface-elevated hover:shadow-[0_8px_24px_-6px_rgba(0,245,160,0.15)]"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-background text-accent transition-colors group-hover:border-accent">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-heading text-sm font-bold text-foreground transition-colors group-hover:text-accent">
                          {item.name}
                        </span>
                      </div>
                      <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
