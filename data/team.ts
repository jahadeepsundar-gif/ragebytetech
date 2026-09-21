export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  shortRole: string;
  role?: string;
  image: string;
  photo?: string;
  bio: string;
  specializations: string[];
  skills: string[];
  experience?: string;
  github?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "team-01",
    name: "Jahadeep Sundar",
    designation: "Founder & Principal Architect",
    shortRole: "Systems Architecture",
    image: "/images/team/team-01.webp",
    bio: "Leads RageByte's architectural vision, specializing in distributed systems, high-throughput Next.js App Router architectures, and edge infrastructure.",
    specializations: [
      "Distributed Cloud Systems",
      "Next.js App Router Architecture",
      "Edge Runtime Optimization",
      "Full-Stack TypeScript"
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "Docker", "PostgreSQL", "AWS"],
    experience: "10+ Years",
    github: "https://github.com/jahadeepsundar-gif",
    linkedin: "https://linkedin.com/company/ragebytetech"
  },
  {
    id: "team-02",
    name: "Arjun Mehta",
    designation: "Lead Frontend Engineer",
    shortRole: "Web Performance & Motion",
    image: "/images/team/team-02.webp",
    bio: "Obsessed with 60fps render loops, sub-50ms interaction latencies, zero layout shifts, and accessible component design systems.",
    specializations: [
      "Core Web Vitals Optimization",
      "Micro-Interactions & Motion",
      "Design Systems Engineering",
      "Responsive Architecture"
    ],
    skills: ["React 18", "Tailwind CSS", "Framer Motion", "WebGL", "TypeScript"],
    experience: "8+ Years",
    github: "https://github.com/ragebytetech",
    linkedin: "https://linkedin.com/company/ragebytetech"
  },
  {
    id: "team-03",
    name: "Kavita Rao",
    designation: "Head of UI/UX & Interaction",
    shortRole: "Design Systems & UX",
    image: "/images/team/team-03.webp",
    bio: "Architects seamless user experiences, dark-mode visual hierarchy, and cohesive multi-platform design token systems for enterprise web applications.",
    specializations: [
      "Interaction Architecture",
      "Design Token Systems",
      "WCAG AA Accessibility",
      "User Journey Mapping"
    ],
    skills: ["Figma", "Design Systems", "Interaction Design", "Prototyping", "Design Tokens"],
    experience: "7+ Years",
    github: "https://github.com/ragebytetech",
    linkedin: "https://linkedin.com/company/ragebytetech"
  },
  {
    id: "team-04",
    name: "Rohan Varma",
    designation: "Principal Backend Engineer",
    shortRole: "APIs & Data Pipelines",
    image: "/images/team/team-04.webp",
    bio: "Engineers resilient database architectures, transactional event streams, serverless backends, and low-latency GraphQL/REST endpoints.",
    specializations: [
      "Database Sharding & Replication",
      "Event-Driven Microservices",
      "High-Concurrency APIs",
      "Cache Invalidation Strategies"
    ],
    skills: ["PostgreSQL", "Prisma", "Go", "Redis", "Kafka", "GraphQL"],
    experience: "8+ Years",
    github: "https://github.com/ragebytetech",
    linkedin: "https://linkedin.com/company/ragebytetech"
  },
  {
    id: "team-05",
    name: "Ananya Sen",
    designation: "Lead Headless Commerce Engineer",
    shortRole: "Storefronts & Checkout",
    image: "/images/team/team-05.webp",
    bio: "Builds ultra-fast headless commerce platforms with sub-second catalog navigation, headless Shopify integrations, and custom checkout flows.",
    specializations: [
      "Headless E-Commerce Architecture",
      "Shopify Storefront API",
      "Checkout Flow Optimization",
      "Real-Time Catalog Indexing"
    ],
    skills: ["Next.js Commerce", "Shopify Hydrogen", "Stripe", "Algolia", "Tailwind CSS"],
    experience: "6+ Years",
    github: "https://github.com/ragebytetech",
    linkedin: "https://linkedin.com/company/ragebytetech"
  },
  {
    id: "team-06",
    name: "Devendra Patel",
    designation: "DevOps & Cloud Security Architect",
    shortRole: "Infrastructure & SRE",
    image: "/images/team/team-06.webp",
    bio: "Specializes in zero-downtime automated deployment pipelines, infrastructure as code, DDoS mitigation, and edge security policies.",
    specializations: [
      "Infrastructure as Code (IaC)",
      "Kubernetes & Container Orchestration",
      "CI/CD Pipeline Automation",
      "Edge Security & Rate Limiting"
    ],
    skills: ["Terraform", "Docker", "GitHub Actions", "Vercel Enterprise", "Cloudflare", "AWS"],
    experience: "7+ Years",
    github: "https://github.com/ragebytetech",
    linkedin: "https://linkedin.com/company/ragebytetech"
  },
  {
    id: "team-07",
    name: "Pooja Nair",
    designation: "Senior 3D & Creative Developer",
    shortRole: "Three.js & WebGL Visuals",
    image: "/images/team/team-07.webp",
    bio: "Brings brands to life with bespoke GLSL shaders, 3D interactive canvases, realistic PBR materials, and GPU-accelerated web experiences.",
    specializations: [
      "GLSL Shader Programming",
      "Three.js & WebGL Canvas",
      "3D Scene Performance Tuning",
      "Creative Code Architecture"
    ],
    skills: ["Three.js", "GLSL Shaders", "Blender", "Canvas 2D", "WebAudio API"],
    experience: "5+ Years",
    github: "https://github.com/ragebytetech",
    linkedin: "https://linkedin.com/company/ragebytetech"
  },
  {
    id: "team-08",
    name: "Siddharth Roy",
    designation: "Full-Stack QA & Performance Lead",
    shortRole: "Automated Testing & Speed",
    image: "/images/team/team-08.webp",
    bio: "Guarantees rock-solid reliability through automated end-to-end testing, cross-browser visual regression audits, and Lighthouse 100 verification.",
    specializations: [
      "Automated End-to-End Testing",
      "Lighthouse 100 Performance Audits",
      "Cross-Browser Regression QA",
      "High-Load Stress Testing"
    ],
    skills: ["Playwright", "Jest", "Lighthouse CI", "Cypress", "TypeScript"],
    experience: "6+ Years",
    github: "https://github.com/ragebytetech",
    linkedin: "https://linkedin.com/company/ragebytetech"
  }
];
