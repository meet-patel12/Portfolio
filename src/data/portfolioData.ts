// Centralized portfolio data for Meet (Meet Patel)
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | '3D & WebGL' | 'AI & System';
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

export interface AchievementItem {
  id: string;
  metric: string;
  label: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Meet",
  fullName: "Meet Patel",
  role: "Full Stack Developer & Creative Technologist",
  greeting: "Hello, World — I'm",
  tagline: "Engineering AI-Startup Tier 3D Web Experiences & Scalable Systems",
  bio: "Full Stack Engineer specializing in React, Next.js, TypeScript, Node.js, and Three.js. Passionate about marrying high-performance system architectures with cinematic, 60 FPS WebGL interactions.",
  location: "Surat, Gujarat, India",
  availability: "Available for Work",
  statusMessage: "Open for Full-time Roles & High-Impact Contracts",
  emails: {
    primary: "meetviral120@gmail.com",
  },
  socials: {
    github: "https://github.com/meet-patel12",
    linkedin: "https://linkedin.com/in/meetpatel",
    twitter: "https://x.com/meetpatel",
  },
  resumeUrl: "/Meet_Patel_Resume.pdf",
};

export const CORE_TECH = [
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "Next.js", icon: "/icons/nextjs.svg", category: "frontend" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "frontend" },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "backend" },
  { name: "Docker", icon: "/icons/docker.svg", category: "cloud" },
  { name: "AWS", icon: "/icons/aws.svg", category: "cloud" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "database" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database" },
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend & 3D WebGL",
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Three.js / React Three Fiber", level: 88 },
      { name: "Tailwind CSS & Glassmorphism", level: 96 },
      { name: "Framer Motion & GSAP", level: 90 },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js & Express", level: 90 },
      { name: "Java & Spring Boot", level: 88 },
      { name: "RESTful & GraphQL APIs", level: 92 },
      { name: "Python & FastAPI", level: 82 },
      { name: "Microservices Architecture", level: 85 },
    ],
  },
  {
    title: "Cloud, DevOps & Databases",
    skills: [
      { name: "Docker & Containerization", level: 86 },
      { name: "AWS (S3, CloudFront, Lambda)", level: 84 },
      { name: "MongoDB & Redis", level: 90 },
      { name: "PostgreSQL & MySQL", level: 88 },
      { name: "CI/CD & Git Workflows", level: 92 },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "StreamVault — Adaptive Video Streaming Platform",
    description: "Production-grade streaming platform built with Next.js 16, React 19, FastAPI, and Google Shaka Player. Features adaptive DASH/HLS streaming, AV1/H.264 multi-codec encoding ladders, Drizzle ORM, PostgreSQL, Redis caching, payment gateways, and Kubernetes deployment manifests.",
    category: "Full Stack",
    tags: ["Next.js 16", "React 19", "FastAPI", "PostgreSQL", "Drizzle ORM", "Redis", "Docker", "Kubernetes"],
    image: "/images/react.webp",
    githubUrl: "https://github.com/meet-patel12/Stream-Vault",
    liveUrl: "https://github.com/meet-patel12/Stream-Vault",
    featured: true,
    metrics: "DASH/HLS • AV1/H.264 • Shaka Player",
  },
  {
    id: "proj-2",
    title: "Immersive 3D Horror Web Experience",
    description: "Atmospheric 3D interactive horror environment built with Next.js 16, React 19, Three.js, and React Three Fiber. Features spatial 3D audio via Howler.js, dynamic volumetric lighting, Drizzle ORM, and PostgreSQL.",
    category: "3D & WebGL",
    tags: ["Next.js 16", "React 19", "Three.js", "R3F", "Drei", "Drizzle ORM", "PostgreSQL", "Howler.js"],
    image: "/images/image.webp",
    githubUrl: "https://github.com/meet-patel12/Horror-",
    liveUrl: "https://github.com/meet-patel12/Horror-",
    featured: true,
    metrics: "60 FPS • Spatial 3D Audio",
  },
  {
    id: "proj-3",
    title: "EduCore — School Management System",
    description: "Full-stack institutional management platform with granular role-based access control for Admins, Teachers, Students & Parents. Features student attendance tracking, examination grading, fee payment gateways, and real-time records sync.",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "REST APIs", "Tailwind CSS"],
    image: "/images/mongodb.webp",
    githubUrl: "https://github.com/meet-patel12/School-Management-System",
    liveUrl: "https://github.com/meet-patel12/School-Management-System",
    featured: true,
    metrics: "4 RBAC Roles • Real-Time Records",
  },
  {
    id: "proj-4",
    title: "Tech Heaven — E-Commerce Tech Store",
    description: "Full-stack e-commerce web platform for premium tech gear and gaming peripherals. Built with dynamic product search, interactive cart state, bcrypt authentication, and RESTful API endpoints.",
    category: "Full Stack",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript", "Bcrypt", "REST APIs", "CSS3"],
    image: "/images/node.webp",
    githubUrl: "https://github.com/meet-patel12/Tech-Heaven",
    liveUrl: "https://github.com/meet-patel12/Tech-Heaven",
    featured: true,
    metrics: "Dynamic Cart • Bcrypt Security",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2024 — Present",
    role: "Full Stack Software Engineer",
    company: "Freelance & High-Impact Open Source",
    location: "Remote",
    description: [
      "Engineered production-grade web applications using React 19, TypeScript, and Three.js.",
      "Optimized WebGL rendering pipelines, reducing GPU draw calls by 45% and locking 60 FPS.",
      "Architected backend microservices and RESTful endpoints handling high-concurrency traffic.",
    ],
    technologies: ["React", "TypeScript", "Three.js", "Node.js", "Docker", "PostgreSQL"],
  },
  {
    id: "exp-2",
    period: "2023 — 2024",
    role: "Full Stack Developer Intern",
    company: "Tech Innovation Lab",
    location: "India",
    description: [
      "Developed responsive frontend modules with Tailwind CSS and Framer Motion.",
      "Implemented Spring Boot APIs with PostgreSQL database integration and automated testing.",
      "Collaborated with cross-functional teams to deploy features on AWS cloud environments.",
    ],
    technologies: ["Java", "Spring Boot", "React", "MongoDB", "Git", "AWS"],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Full Stack Web Engineering",
    description: "End-to-end web applications built with modern frameworks, clean microservice architectures, and robust type safety.",
    icon: "Layers",
    capabilities: ["React & Next.js Systems", "Node.js & Spring Boot APIs", "Database Modeling & Caching"],
  },
  {
    id: "srv-2",
    title: "Cinematic 3D Web & WebGL",
    description: "Immersive 3D environments, interactive product models, and custom shaders that elevate brands above competitors.",
    icon: "Box",
    capabilities: ["Three.js & R3F Scene Graphs", "Interactive Particle Effects", "Physics & Camera Animations"],
  },
  {
    id: "srv-3",
    title: "Cloud Infrastructure & DevOps",
    description: "Automated container pipelines, zero-downtime deployments, and highly resilient cloud architectures.",
    icon: "Cloud",
    capabilities: ["Docker Containerization", "AWS Cloud Architecture", "CI/CD Pipeline Automation"],
  },
  {
    id: "srv-4",
    title: "Performance Audits & 60 FPS",
    description: "Profiling and optimizing sluggish web apps to achieve 95+ Lighthouse scores and instantaneous Core Web Vitals.",
    icon: "Zap",
    capabilities: ["Core Web Vitals Optimization", "WebGL Draw Call Reduction", "Bundle Size & Asset Compression"],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { id: "ach-1", metric: "25+", label: "Completed Projects", description: "Delivered web applications and full stack solutions." },
  { id: "ach-2", metric: "60+", label: "Targeted FPS", description: "Silky smooth WebGL interactions with zero dropped frames." },
  { id: "ach-3", metric: "99.9%", label: "System Reliability", description: "Architectures designed for resilience and sub-100ms response." },
  { id: "ach-4", metric: "100k+", label: "Audience Impact", description: "Technical content, hackathons, and creative digital reach." },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Full Stack Engineering & Modern Web",
    issuer: "Tech Certification Board",
    date: "2024",
    credentialUrl: "https://linkedin.com/in/meetpatel",
  },
  {
    id: "cert-2",
    title: "Java & Spring Boot Architecture Masterclass",
    issuer: "Enterprise Software Institute",
    date: "2023",
    credentialUrl: "https://linkedin.com/in/meetpatel",
  },
  {
    id: "cert-3",
    title: "Innovation, Design & Entrepreneurship (IDE)",
    issuer: "Ministry of Education & IIT Roorkee",
    date: "2023",
    credentialUrl: "https://linkedin.com/in/meetpatel",
  },
];

