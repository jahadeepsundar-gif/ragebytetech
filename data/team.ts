export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  photo: string;
  github?: string;
  linkedin?: string;
}

/**
 * NOTICE: The team entries below are DEMO / PLACEHOLDER profiles designed to verify
 * TeamCard rendering, layout styling, and profile linking. They are clearly marked for
 * replacement once real RageByte team member names, photos, bios, and links are provided.
 */
export const teamMembers: TeamMember[] = [
  {
    name: "Lead Architect [Demo Profile]",
    role: "Full-Stack & Systems Lead",
    bio: "Specializes in high-throughput Next.js architecture, edge runtime optimization, and scalable TypeScript engineering.",
    skills: ["Next.js", "TypeScript", "Node.js", "System Architecture", "Performance Optimization"],
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Senior Frontend Engineer [Demo Profile]",
    role: "UI/UX & Motion Specialist",
    bio: "Passionate about zero-layout-shift web design, micro-animations, accessible design systems, and responsive interfaces.",
    skills: ["React", "Tailwind CSS", "Motion (Framer)", "Design Systems", "Web Accessibility"],
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Backend & DevOps Engineer [Demo Profile]",
    role: "Cloud & Infrastructure Engineer",
    bio: "Focuses on automated CI/CD pipelines, serverless route handlers, transactional delivery, and edge security.",
    skills: ["PostgreSQL", "Vercel", "Docker", "REST/GraphQL", "Security & Rate Limiting"],
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];
