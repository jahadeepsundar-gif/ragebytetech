export interface Service {
  title: string;
  description: string;
  icon: string;
  deliverables?: string[];
  idealFor?: string;
}

/**
 * 6 Core Services prescribed by the MASTER Architecture Specification (Section 4 & 5)
 */
export const services: Service[] = [
  {
    title: "Website Dev",
    description:
      "Bespoke, high-performance web applications built from scratch using Next.js App Router, TypeScript, and modern headless paradigms.",
    icon: "Globe",
    deliverables: [
      "Custom Next.js App Router architecture",
      "Full TypeScript type safety & clean abstractions",
      "Mobile-first responsive layouts across all viewports",
      "95+ Lighthouse performance optimization",
      "Full SEO setup with OpenGraph and dynamic sitemaps",
    ],
    idealFor: "Modern businesses and tech startups requiring custom web architecture that cannot be built with cookie-cutter website builders.",
  },
  {
    title: "Landing Pages",
    description:
      "High-conversion, laser-focused launch and campaign pages engineered for rapid load times, clear visual storytelling, and high lead capture.",
    icon: "Layout",
    deliverables: [
      "Sub-second load times for peak campaign conversion",
      "Compelling visual hierarchy with restrained Motion reveals",
      "Interactive enquiry funnels & lead capture integrations",
      "Cross-browser and multi-device QA testing",
      "Analytics event tracking & conversion attribution",
    ],
    idealFor: "Product launches, venture funding announcements, SaaS beta rollouts, and targeted marketing campaigns.",
  },
  {
    title: "Business Sites",
    description:
      "Authoritative, polished corporate presences that establish domain expertise, communicate brand positioning, and build deep buyer trust.",
    icon: "Briefcase",
    deliverables: [
      "Bespoke dark or light theme design system",
      "Executive bios, team directories, and credential showcases",
      "Structured service breakdowns and case study showcases",
      "Security-hardened contact forms with rate limiting",
      "Accessibility compliance (WCAG AA standards)",
    ],
    idealFor: "Consultancies, financial firms, law practices, and service businesses where client trust is paramount.",
  },
  {
    title: "E-commerce",
    description:
      "Lightning-fast digital storefronts with headless checkout integration, optimized catalog navigation, and instantaneous inventory updates.",
    icon: "ShoppingCart",
    deliverables: [
      "Headless storefront integration (Shopify, Stripe, or custom API)",
      "Instant faceted search, filtering, and product sorting",
      "Optimistic cart updates with slide-over mini cart drawer",
      "Secure, PCI-compliant checkout workflow",
      "Edge caching and ISR for high-traffic product pages",
    ],
    idealFor: "Direct-to-consumer (DTC) brands and boutique merchants needing faster checkouts and lower cart abandonment rates.",
  },
  {
    title: "UI/UX",
    description:
      "User-centered interaction architecture, component design systems, and responsive wireframes engineered for usability and aesthetic excellence.",
    icon: "Palette",
    deliverables: [
      "Design token architecture (spacing, typography, color scales)",
      "High-fidelity interactive Figma prototypes",
      "Micro-interaction and motion design specifications",
      "Design-to-code component mapping for rapid development",
      "Comprehensive usability testing and contrast checks",
    ],
    idealFor: "Teams with complex products requiring intuitive flows, cohesive design languages, or complete interface redesigns.",
  },
  {
    title: "Maintenance",
    description:
      "Proactive technical support, dependency updates, speed audits, security monitoring, and ongoing feature enhancements.",
    icon: "Wrench",
    deliverables: [
      "Routine dependency updates & security vulnerability patching",
      "Continuous Core Web Vitals monitoring and speed audits",
      "Serverless route handler and API health checks",
      "Priority bug fixes and minor feature enhancements",
      "Monthly performance and uptime reporting",
    ],
    idealFor: "Businesses requiring peace of mind and consistent uptime without maintaining a full-time in-house engineering team.",
  },
];
