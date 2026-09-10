export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  coverImage: string;
  challenge: string;
  solution: string;
  features: string[];
  screenshots: { desktop: string; mobile: string }[];
  result?: string;
}

/**
 * NOTICE: The items below are structured DEMO / PLACEHOLDER projects designed to enable
 * full case study testing across /work and /work/[slug]. They are clearly marked for replacement
 * once genuine RageByte client projects and assets are provided.
 */
export const projects: Project[] = [
  {
    slug: "nexus-e-commerce",
    name: "Nexus Storefront [Demo Project]",
    description:
      "A headless e-commerce experience built for lightning-fast catalog navigation, sub-second checkout transitions, and real-time inventory synchronization.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shopify Storefront API", "Zustand"],
    liveUrl: "https://example.com/demo/nexus",
    coverImage: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "The client suffered from severe page-load latency (4.8s avg) on a legacy monolithic platform, resulting in a 42% cart drop-off rate on mobile devices.",
    solution:
      "Architected a Next.js App Router frontend with Incremental Static Regeneration (ISR) for high-traffic product catalog pages, paired with edge caching and optimistic UI updates for instant cart modifications.",
    features: [
      "Sub-second page transitions via Next.js App Router and server prefetching",
      "Instant faceted search and multi-attribute filtering without full page reloads",
      "Optimistic UI updates for immediate cart modifications and drawer state",
      "Mobile-first responsive layout tailored for high conversion on handheld devices",
      "Automated edge image optimization via WebP/AVIF compression",
    ],
    screenshots: [
      {
        desktop: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        mobile: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80",
      },
      {
        desktop: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        mobile: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=600&q=80",
      },
    ],
    result:
      "Reduced Core Web Vitals LCP from 4.8s to 0.7s, achieving a 98 Lighthouse Performance score and a 34% increase in completed mobile checkouts during initial load testing.",
  },
  {
    slug: "strata-cloud-platform",
    name: "Strata Analytics [Demo Project]",
    description:
      "A real-time metrics and cloud telemetry dashboard engineered for telemetry visualization, customizable widgets, and team access delegation.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Tremor", "Server-Sent Events"],
    liveUrl: "https://example.com/demo/strata",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "High-frequency time-series datasets caused browser thread freezing and severe UI sluggishness on traditional client-side rendering setups.",
    solution:
      "Employed React Server Components to offload compute-heavy aggregations, streaming rendered charts directly to the client while keeping client bundle footprint minimal.",
    features: [
      "Real-time streaming telemetry charts updating every 500ms without lag",
      "Role-based permission architecture with granular team workspace switches",
      "Custom dark-mode glassmorphic interface with accessible contrast tokens",
      "Export capabilities supporting high-res PDF reports and raw CSV exports",
    ],
    screenshots: [
      {
        desktop: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        mobile: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80",
      },
    ],
    result:
      "Zero client CPU thrashing under continuous data streams; reduced initial JavaScript bundle size by 62% using Server Component architecture.",
  },
  {
    slug: "vanguard-fintech-site",
    name: "Vanguard Capital [Demo Project]",
    description:
      "A sleek corporate web presence and institutional investor portal delivering bank-grade security, interactive portfolio visualizers, and lead qualification.",
    tech: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Motion"],
    liveUrl: "https://example.com/demo/vanguard",
    coverImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "The client needed to convey utmost institutional credibility while avoiding generic corporate templates that failed to engage high-net-worth visitors.",
    solution:
      "Crafted a bespoke, dark-toned visual aesthetic with subtle micro-interactions, bold display typography, interactive yield calculators, and an end-to-end validated enquiry workflow.",
    features: [
      "Interactive asset allocation simulator with dynamic return modeling",
      "Institutional-grade typography system leveraging Space Grotesk and Inter",
      "Strict WCAG AA accessibility compliance across all interactive elements",
      "Multi-step qualified investor inquiry funnel with encrypted dispatch",
    ],
    screenshots: [
      {
        desktop: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
        mobile: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=600&q=80",
      },
    ],
    result:
      "Earned an Awwwards Site of the Day nomination and delivered a 55% boost in qualified institutional lead submissions.",
  },
  {
    slug: "pulse-landing-page",
    name: "Pulse AI Platform [Demo Project]",
    description:
      "An ultra-fast, high-converting product launch page built for a developer-first AI infrastructure company, featuring interactive code demos and benchmark visualizers.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Motion", "lucide-react"],
    liveUrl: "https://example.com/demo/pulse",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Needed an impactful, zero-bloat product launch site with custom code playground previews and high conversion for developer signups.",
    solution:
      "Developed a custom single-page showcase utilizing Tailwind CSS design tokens, dynamic code syntax highlighting, and lightweight Framer Motion reveals.",
    features: [
      "Interactive code snippet previewer with one-click copy and tabbed languages",
      "Live latency benchmark comparisons against competing APIs",
      "Staggered entrance animations tuned for optimal 60fps rendering",
      "Instant email waitlist form with server-side validation",
    ],
    screenshots: [
      {
        desktop: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        mobile: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&q=80",
      },
    ],
    result:
      "Achieved a 100/100 Lighthouse Performance score on mobile and desktop with zero layout shift (CLS: 0.00).",
  },
];
