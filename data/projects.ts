export type ProjectStatus = "live" | "in-progress";

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  description: string;
  industry: string;
  scope: string;
  tech: string[];
  liveUrl?: string;
  /** Omitted for in-progress builds, which render a redacted cover instead */
  coverImage?: string;
  challenge: string;
  solution: string;
  features: string[];
  screenshots: { desktop: string; mobile: string }[];
  result?: string;
}

export const isInProgress = (project: Project) => project.status === "in-progress";

/**
 * Selected work. Live projects link out to the production site; in-progress builds are
 * deliberately anonymous (no client, URL, stack or imagery) until they launch.
 */
export const projects: Project[] = [
  {
    slug: "mlj-media",
    name: "MLJ Media",
    status: "live",
    description:
      "The website for MLJ Media, a Christian songs production and marketing studio founded by Amalan Jerome, independent audio production since 2000, presenting worship songs, hymns and devotional videos in one browsable catalog.",
    industry: "Music & Ministry",
    scope: "Website Design & Development",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://mljmedia.in",
    coverImage: "/images/work/mlj-media-desktop.png",
    challenge:
      "MLJ Media publishes a steady stream of worship, Lent, Christmas and ordination songs, mostly on YouTube. The brief was a cinematic home for the studio that tells its story and lets listeners browse releases by album and video, not just by upload date.",
    solution:
      "We built a cinematic, content-led site with a bold MLJ / MEDIA wordmark hero, a Recent Releases feed, dedicated Albums and Videos sections and bilingual Tamil / English titles, all prerendered for fast loading on any connection.",
    features: [
      "Recent Releases feed surfacing the newest worship, Lent and Christmas songs first",
      "Dedicated Albums and Videos sections for browsing the full catalog",
      "Bilingual Tamil and English song titles, credits and descriptions",
      "About and Contact pages that tell the ministry's story and open collaboration enquiries",
      "Statically prerendered pages served from Vercel's edge for quick loads on mobile data",
    ],
    screenshots: [
      {
        desktop: "/images/work/mlj-media-desktop.png",
        mobile: "/images/work/mlj-media-mobile.png",
      },
    ],
  },
  {
    slug: "natiya-siragugal",
    name: "Natiya Siragugal",
    status: "live",
    description:
      "The official portfolio of Angeline Sheril A J, folk and classical dancer, choreographer and founder of Natiya Siragugal Kalaikoodam, Cuddalore, with 28 world records and 3000+ performances.",
    industry: "Performing Arts",
    scope: "Portfolio & Academy Website",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://natiyasiragugal.com",
    coverImage: "/images/work/natiya-siragugal-desktop.png",
    challenge:
      "An artist with 28 world records, international performances and her own academy needed a presence that matched that stature, one that serves audiences, event organisers and prospective students at the same time.",
    solution:
      "We designed an editorial portfolio that tells her story from first performance to world stages, with dedicated pages for records, legacy and gallery, the art forms she teaches, and a booking flow for performances.",
    features: [
      "Story-driven home page covering her journey, records, art forms and academy",
      "Art form showcases for Bharatanatyam, Parai, Karagattam, Oyilattam and Silambam",
      "International performance highlights across Kuwait City, Kuala Lumpur, Port Louis and Victoria",
      "Records, Legacy and Gallery pages documenting achievements",
      "Booking page for performance and event enquiries",
      "Structured data (schema.org) so the artist is correctly understood by search engines",
    ],
    screenshots: [
      {
        desktop: "/images/work/natiya-siragugal-desktop.png",
        mobile: "/images/work/natiya-siragugal-mobile.png",
      },
    ],
  },
  {
    slug: "focus1-media",
    name: "Focus1 Media",
    status: "live",
    description:
      "A cinematic single-page site for a media production company specialising in storytelling, multi-camera live telecast and digital promotions.",
    industry: "Media Production",
    scope: "Company Website",
    tech: ["Next.js", "React", "Vercel"],
    liveUrl: "https://focus1media.org",
    coverImage: "/images/work/focus1-media-desktop.png",
    challenge:
      "Focus1 Media's work spans state-level cultural coverage, education programmes and live broadcasts. The brief was a site that sells that production capability as confidently as the footage itself.",
    solution:
      "We built a bold, cinematic one-page experience that leads with their three pillars, backs them up with major projects and equipment, and funnels every section toward a single contact call to action.",
    features: [
      "Hero built around the three service pillars: cinematic storytelling, multi-camera live setups and digital promotions",
      "Major Projects showcase including Kalai Thiruvizha and Kalviyil Sirantha Tamilnadu coverage",
      "Media Equipment & Team section that demonstrates production capacity",
      "Why Focus 1 Media section and repeated contact calls to action",
      "Anchor-linked single-page navigation for quick scanning",
    ],
    screenshots: [
      {
        desktop: "/images/work/focus1-media-desktop.png",
        mobile: "/images/work/focus1-media-mobile.png",
      },
    ],
  },
  {
    slug: "jollo-experiences",
    name: "Jollo Experiences",
    status: "live",
    description:
      "A premium multi-page site for a brand experience and growth company delivering branding, M.I.C.E., celebrations, digital engineering and growth strategy.",
    industry: "Events & Brand Experience",
    scope: "Multi-page Company Website",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://jolloexp.com",
    coverImage: "/images/work/jollo-experiences-desktop.png",
    challenge:
      "Jollo Experience offers six very different services, from corporate M.I.C.E. to celebrations to digital engineering. The brief was to present them as one premium brand without diluting any of them.",
    solution:
      "We built a premium multi-page site with a 'six ways we build your brand' services system, proof points, a work and gallery archive, and two contact routes: a full enquiry form and a quick 'we'll call you' callback request.",
    features: [
      "Services system presenting six offerings under one brand story",
      "Headline proof points (200+, 15+, 10+) to build trust quickly",
      "Work and Gallery pages for past experiences",
      "Dual conversion paths: contact form and callback request",
      "Privacy and Terms pages, plus schema.org structured data for search",
    ],
    screenshots: [
      {
        desktop: "/images/work/jollo-experiences-desktop.png",
        mobile: "/images/work/jollo-experiences-mobile.png",
      },
    ],
  },
  {
    slug: "inbavanam",
    name: "Inbavanam",
    status: "live",
    description:
      "A website for Inbavanam in Karamadai, Coimbatore: a place to stay, a space to connect and a community with purpose, hosting retreats, camps, weddings and corporate gatherings.",
    industry: "Hospitality & Community",
    scope: "Multi-page Website",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://inbavanam.vercel.app",
    coverImage: "/images/work/inbavanam-desktop.png",
    challenge:
      "Inbavanam is part retreat, part venue and part community programme. Visitors arrive with very different intentions, whether that's to stay, host an event or get involved, and the brief was a clear path for each.",
    solution:
      "We structured the site around those intentions: dedicated Stay, Experiences, Events and Community pages, a values-led story of the land and its climate-responsive architecture, and a contact form that is pre-routed by enquiry type.",
    features: [
      "Stay, Experiences, Events, Community and Our Work pages for each type of visitor",
      "Storytelling on the land: natural cooling, heavy stone and climate-responsive design",
      "Offerings for retreats, group stays, camps, weddings and corporate gatherings",
      "Contact flow pre-filled by intent (stay or event) via query parameters",
      "Skip-to-content link and structured data for accessibility and search",
    ],
    screenshots: [
      {
        desktop: "/images/work/inbavanam-desktop.png",
        mobile: "/images/work/inbavanam-mobile.png",
      },
    ],
  },
  {
    slug: "classified-build-06",
    name: "Classified Build 06",
    status: "in-progress",
    description:
      "An active engagement currently in development. Client, scope and visuals stay under wraps until launch.",
    industry: "Undisclosed",
    scope: "In Development",
    tech: [],
    challenge: "",
    solution: "",
    features: [],
    screenshots: [],
  },
  {
    slug: "classified-build-07",
    name: "Classified Build 07",
    status: "in-progress",
    description:
      "A new build on our workbench right now. Details will be revealed once it ships.",
    industry: "Undisclosed",
    scope: "In Development",
    tech: [],
    challenge: "",
    solution: "",
    features: [],
    screenshots: [],
  },
];
