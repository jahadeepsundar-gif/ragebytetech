export interface TrustQuality {
  label: string;
  sublabel: string;
  description: string;
}

export interface MetricStat {
  value: string;
  label: string;
  isReal: boolean;
}

/**
 * MASTER Specification Section 4:
 * "Trust/Stats — real numbers only (projects, clients shipped); fall back to qualities (FAST/MODERN/RESPONSIVE) if numbers are thin"
 *
 * Current status: Configured with qualitative trust qualities by default to avoid fabricating stats.
 */
export const trustQualities: TrustQuality[] = [
  {
    label: "FAST",
    sublabel: "Sub-Second Delivery",
    description: "Engineered for 95+ Lighthouse scores, instant routing, and zero layout shift.",
  },
  {
    label: "MODERN",
    sublabel: "Next.js 14+ Ecosystem",
    description: "Built strictly on React Server Components, TypeScript, and edge caching.",
  },
  {
    label: "RESPONSIVE",
    sublabel: "Mobile-First Design",
    description: "Fluid, touch-optimized layouts tested across all modern devices and viewports.",
  },
  {
    label: "CUSTOM BUILDS",
    sublabel: "Zero Bloatware",
    description: "Handcrafted codebases without bulky page builders or fragile plugin dependencies.",
  },
];

// Placeholder metrics ready to be activated when genuine RageByte shipping counts are provided
export const metricStats: MetricStat[] = [
  { value: "99.9%", label: "Uptime Reliability", isReal: false },
  { value: "< 1.0s", label: "Avg Core Web Vitals LCP", isReal: false },
  { value: "100%", label: "TypeScript Safety", isReal: false },
];
