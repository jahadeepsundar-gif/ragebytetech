import React from "react";

export function TechStack() {
  const allTechItems = [
    {
      name: "NEXT.JS 14+ (APP ROUTER)",
      role: "APPLICATION ARCHITECTURE",
      description: "Streaming React Server Components, layout nesting, and edge prefetching.",
      tier: "TIER-01 // CORE RUNTIME"
    },
    {
      name: "TYPESCRIPT (STRICT)",
      role: "TYPE-SAFE SYSTEMS",
      description: "End-to-end type safety eliminating runtime null references and state ambiguity.",
      tier: "TIER-01 // LANGUAGE"
    },
    {
      name: "TAILWIND CSS",
      role: "ZERO-RUNTIME TOKENS",
      description: "Zero runtime CSS overhead with atomic utility tokens and strict dark palette.",
      tier: "TIER-01 // DESIGN SYSTEM"
    },
    {
      name: "REACT 18 CONCURRENT",
      role: "SELECTIVE HYDRATION",
      description: "Concurrent rendering engine with selective hydration and sub-50ms FID.",
      tier: "TIER-01 // FRAMEWORK"
    },
    {
      name: "ZOD VALIDATION",
      role: "DATA INTEGRITY BOUNDARIES",
      description: "Runtime payload parsing for forms, server actions, and API boundaries.",
      tier: "TIER-02 // DATA INTEGRITY"
    },
    {
      name: "NODE.JS SERVERLESS",
      role: "SUB-10MS EDGE LATENCY",
      description: "Isolated edge functions with sub-10ms cold starts across distributed regions.",
      tier: "TIER-02 // INFRASTRUCTURE"
    },
    {
      name: "FRAMER MOTION",
      role: "60FPS MOTION LOOPS",
      description: "Hardware-accelerated, WCAG-compliant micro-interactions and route shifts.",
      tier: "TIER-02 // INTERACTION"
    },
    {
      name: "RESEND ENGINE",
      role: "TRANSACTIONAL DELIVERY",
      description: "Transactional delivery with DKIM/SPF verification and sub-second ingestion.",
      tier: "TIER-02 // MESSAGING"
    },
  ];

  return (
    <section className="py-24 border-b border-surface-border bg-background-secondary relative overflow-hidden">
      {/* Background Mesh Grid */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-border/80 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>[05] // PRODUCTION INFRASTRUCTURE</span>
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.92]">
              Engineered on Next.js &amp; TypeScript
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
            Every technology is selected strictly for execution speed, developer velocity, and long-term architectural stability.
          </p>
        </div>

        {/* Technical Editorial Spread: Large Typography Pairs */}
        <div className="divide-y divide-surface-border/80 border-b border-surface-border/80">
          {allTechItems.map((item, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={item.name}
                className="group py-6 sm:py-8 transition-colors duration-300 hover:bg-surface/30 px-2 sm:px-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                  {/* Numeral + Tier Annotation (Cols 1-3) */}
                  <div className="lg:col-span-3 flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-accent">
                      [{num}]
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      {item.tier}
                    </span>
                  </div>

                  {/* Large Visual Technology Typography (Cols 4-8) */}
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-semibold text-accent/90 uppercase tracking-wider flex items-center gap-1.5">
                      <span>&rarr;</span>
                      <span>{item.role}</span>
                    </p>
                  </div>

                  {/* Description (Cols 9-12) */}
                  <div className="lg:col-span-4">
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
