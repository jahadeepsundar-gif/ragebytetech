export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatarUrl?: string;
  quote: string;
  projectSlug?: string;
  isDemo?: boolean;
}

/**
 * NOTICE: The testimonials below are DEMO / PLACEHOLDER items to enable testing of the
 * Testimonials component layout and carousel interactions.
 * In accordance with MASTER specification Section 4 ("Testimonials — only real ones; omit section if none yet"),
 * this section is clearly marked as demo content until real client testimonials are provided.
 */
export const testimonials: Testimonial[] = [
  {
    id: "demo-1",
    clientName: "Alex Mercer [Demo Review]",
    clientRole: "VP of Engineering",
    company: "CloudVibe Inc.",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    quote:
      "RageByte delivered our Next.js application ahead of schedule with remarkable attention to performance. Our page load speed dropped by over 60%, and their TypeScript architecture was exceptionally clean.",
    projectSlug: "strata-cloud-platform",
    isDemo: true,
  },
  {
    id: "demo-2",
    clientName: "Sophia Lin [Demo Review]",
    clientRole: "Founder & CEO",
    company: "Aura Commerce",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote:
      "Working with RageByte felt like having an elite technical team in our corner. No fluff, direct developer communication, and a website that immediately impressed our investors.",
    projectSlug: "nexus-e-commerce",
    isDemo: true,
  },
  {
    id: "demo-3",
    clientName: "David Sterling [Demo Review]",
    clientRole: "Managing Director",
    company: "Sterling Partners",
    avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
    quote:
      "The precision in execution was second to none. Our new institutional portal is razor-sharp, accessible, and handles high lead volumes seamlessly.",
    projectSlug: "vanguard-fintech-site",
    isDemo: true,
  },
];
