import React from "react";
import { trustQualities, metricStats } from "@/data/stats";
import { Zap, ShieldCheck, Smartphone, Terminal } from "lucide-react";

const icons = [Zap, Terminal, Smartphone, ShieldCheck];

export function TrustStats() {
  const hasRealStats = metricStats.some((s) => s.isReal);

  return (
    <section className="border-y border-surface-border bg-background-secondary py-20 relative overflow-hidden">
      {/* Subtle telemetry mesh background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-30 radial-mask" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {hasRealStats ? (
          // Metric mode if verified numbers are provided
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {metricStats.map((stat, idx) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-surface-elevated group"
              >
                <div className="font-mono text-xs text-muted-foreground">METRIC [0{idx + 1}]</div>
                <div className="mt-3 font-heading text-4xl sm:text-5xl font-black tracking-tight text-accent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        ) : (
          // Editorial Architecture: Qualitative Trust Matrix (FAST / MODERN / RESPONSIVE / CUSTOM BUILDS)
          <div>
            {/* Header / Section Meta */}
            <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-border/80 pb-8">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold text-accent uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>[01] // ARCHITECTURAL PILLARS</span>
                </div>
                <h2 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] text-foreground leading-[0.92]">
                  The RageByte Engineering Matrix
                </h2>
              </div>
              <p className="max-w-md text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
                Rigorous full-stack discipline. No template shortcuts, no bloated plugins, zero technical compromises.
              </p>
            </div>

            {/* Editorial Asymmetric Rows with Hairlines */}
            <div className="divide-y divide-surface-border/80 border-t border-b border-surface-border/80">
              {trustQualities.map((item, idx) => {
                const Icon = icons[idx % icons.length];
                const indexFormatted = `0${idx + 1}`;
                return (
                  <div
                    key={item.label}
                    className="group py-8 sm:py-10 transition-colors duration-300 hover:bg-surface/30 px-2 sm:px-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                      {/* Dominant Editorial Numeral (Cols 1-2) */}
                      <div className="md:col-span-2 flex items-baseline gap-3">
                        <span className="font-display text-5xl sm:text-7xl font-black tracking-tighter text-white/20 group-hover:text-accent transition-colors">
                          {indexFormatted}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                          / 04
                        </span>
                      </div>

                      {/* Title & Sublabel (Cols 3-6) */}
                      <div className="md:col-span-4">
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-accent" />
                          <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground group-hover:text-white transition-colors">
                            {item.label}
                          </h3>
                        </div>
                        <p className="mt-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                          [ {item.sublabel} ]
                        </p>
                      </div>

                      {/* Technical Description (Cols 7-10) */}
                      <div className="md:col-span-4">
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>

                      {/* Metadata / Status (Cols 11-12) */}
                      <div className="md:col-span-2 md:text-right flex md:flex-col justify-between items-center md:items-end gap-2 pt-2 md:pt-0">
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                          SPEC VERIFIED
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                          LIVE
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TrustStats;
