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
          // MASTER Specification Fallback: Qualitative Trust Matrix (FAST / MODERN / RESPONSIVE / CUSTOM BUILDS)
          <div>
            {/* Header / Section Meta */}
            <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-border/60 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md bg-surface px-2.5 py-1 text-[11px] font-mono font-medium text-accent border border-surface-border">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>CORE PILLARS</span>
                </div>
                <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  The RageByte Engineering Matrix
                </h2>
              </div>
              <p className="max-w-md text-xs sm:text-sm text-muted-foreground font-mono">
                Rigorous full-stack discipline. No template shortcuts, no bloated plugins, no technical compromises.
              </p>
            </div>

            {/* 4 Architectural Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustQualities.map((item, idx) => {
                const Icon = icons[idx % icons.length];
                const indexFormatted = `0${idx + 1}`;
                return (
                  <div
                    key={item.label}
                    className="group relative flex flex-col justify-between rounded-2xl border border-surface-border bg-surface/70 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface hover:shadow-[0_12px_32px_-8px_rgba(0,245,160,0.15)]"
                  >
                    {/* Top corner crosshair aesthetic marker */}
                    <div className="absolute top-3 right-3 font-mono text-[10px] text-zinc-600 group-hover:text-accent transition-colors">
                      +
                    </div>

                    <div>
                      {/* Monospaced Index & Icon Row */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
                          [{indexFormatted}]
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border bg-background p-2 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-surface-elevated group-hover:shadow-[0_0_16px_rgba(0,245,160,0.2)]">
                          <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Title & Sublabel */}
                      <div className="mt-6">
                        <h3 className="font-heading text-xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-white">
                          {item.label}
                        </h3>
                        <p className="mt-1 font-mono text-xs font-medium text-accent">
                          {item.sublabel}
                        </p>
                      </div>

                      {/* Technical Description */}
                      <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom accent indicator bar */}
                    <div className="mt-6 pt-4 border-t border-surface-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                      <span>VERIFIED SPEC</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
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
