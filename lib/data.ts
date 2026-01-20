export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  url?: string;
  github?: string;
  isFeatured: boolean;
  features?: string[];
  technologies: string[];
  screenshot?: string;
  screenshotAlt?: string;
}

export const personalInfo = {
  name: "Zachary Legros",
  title: "Full-Stack Developer",
  tagline:
    "Building AI-powered security systems and crafting exceptional user experiences",
  email: "contact@zacharylegros.dev",
  location: "Ottawa, ON, Canada",
  github: "https://github.com/ZachLegros",
  linkedin: "https://linkedin.com/in/zachary-legros",
};

export const experience = [
  {
    id: "trend-micro",
    company: "Trend Micro",
    role: "Software Developer",
    period: "Jan 2024 - Present",
    duration: "2 yrs",
    internPeriod: "May - Aug 2023",
    internDuration: "4 mo",
    location: "Ottawa",
    isFeatured: true,
    description:
      "Full-stack development for enterprise cloud security products, specializing in AI-powered threat detection and email protection systems.",
    achievements: [
      {
        metric: "92%",
        description: "Reduced Tonic UI bundle size (752KB → 61KB)",
      },
      {
        metric: "451",
        description: "PRs merged across 25+ repositories",
      },
      {
        metric: "100+",
        description: "Support cases triaged with Splunk & Kibana",
      },
    ],
    highlights: [
      "**Claude Code + MCP servers** — Accelerated dev workflows: charting migration, encryption, **100+ case triages**",
      "**92% bundle reduction** — Optimized **Tonic UI** open-source (752KB → 61KB) via **Vite** tree-shaking",
      "**Correlated Intelligence** — AI threat detection frontend (**React**, **Zustand**) and APIs (**NestJS**)",
      "**Threat protection** — **DLP**, **BEC**, malware, spam, quishing dashboards with **ECharts**",
      "**Closed-loop Feedback** — Auto-remediation, quarantine, secure rendering with **DOMPurify**",
      "**OAuth/SSO** — **JWT** refresh, multi-app auth, cross-service credential management",
      "**Risk metrics** — **Azure Service Bus** queues, connection pooling, **Grafana** monitoring",
      "**Email Banner** — **React** frontend + **NestJS** APIs with **T-SQL** stored procedures, **i18n**",
      "**CI/CD** — **Docker**, **Kubernetes**, **GitHub Actions** across **25+ repos**",
      "**Mentorship** — Guided UWaterloo intern on **React**, **NestJS**, debugging methodologies",
    ],
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "Node.js",
      "Zustand",
      "React Query",
      "ECharts",
      "Docker",
      "Kubernetes",
      "T-SQL",
    ],
  },
  {
    id: "kinaxis",
    company: "Kinaxis",
    role: "Software Developer Intern",
    period: "Sep - Dec 2021, May - Aug 2022",
    duration: "8 mo",
    location: "Ottawa",
    isFeatured: false,
    description:
      "Developed React components for RapidResponse supply chain management platform.",
    highlights: [
      "**Dark Mode Epic** — Led implementation with **Styled-Components** and **MaterialUI**",
      "**Custom ESLint plugin** — Built in **TypeScript** for code quality enforcement",
      "**Parcel design system** — Created reusable **React** component library",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Styled-Components",
      "MaterialUI",
      "ESLint",
    ],
  },
  {
    id: "wishslate",
    company: "WishSlate",
    role: "Front-End Developer",
    period: "Jan - Apr 2021",
    duration: "4 mo",
    location: "Remote",
    isFeatured: false,
    description: "Built web application for wishlist management startup.",
    highlights: [
      "**React + Next.js** — Built responsive web app with **Chakra UI**",
      "**OAuth + iOS API** — Integrated authentication and mobile sync",
    ],
    technologies: ["React", "Next.js", "Chakra UI", "OAuth"],
  },
  {
    id: "aeponyx",
    company: "AEPONYX inc.",
    role: "Data Science Intern",
    period: "May - Aug 2020",
    duration: "4 mo",
    location: "Montreal",
    isFeatured: false,
    description: "Developed photonics analysis tools for optical systems.",
    highlights: [
      "**Data analysis tools** — **NumPy**, **SciPy**, **Pandas** for photonics research",
      "**Automation** — Optical power meter measurements with **Python**",
    ],
    technologies: ["Python", "NumPy", "SciPy", "Pandas"],
  },
];

export const projects: Project[] = [
  {
    id: "moondca",
    name: "MoonDCA",
    description:
      "Advanced cryptocurrency analytics platform with Bitcoin risk indices, DCA strategy tools, and comprehensive charting capabilities.",
    longDescription:
      "Full-stack financial analytics platform providing real-time cryptocurrency market analysis, risk assessment tools, and dollar-cost averaging calculators for informed investment decisions.",
    url: "https://moondca.com/charts",
    github: "https://github.com/ZachLegros/moondca.com",
    isFeatured: true,
    features: [
      "Bitcoin Risk Index calculations",
      "Rolling ROI analysis",
      "DCA strategy simulator",
      "Multi-asset comparison tools",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "AWS Lambda",
      "DynamoDB",
      "Tailwind CSS",
    ],
    screenshot: "/screenshots/moondca.png",
    screenshotAlt:
      "MoonDCA cryptocurrency analytics dashboard showing Bitcoin risk index charts",
  },
  {
    id: "crayobois",
    name: "Crayobois",
    description:
      "E-commerce platform for handcrafted wooden pens and accessories with custom order capabilities.",
    longDescription:
      "Full-stack e-commerce site for a Quebec-based woodworking microenterprise, featuring custom pen builder, multi-language support, and secure payment processing.",
    url: "https://crayobois.ca",
    github: "https://github.com/ZachLegros/CrayoboisV2",
    isFeatured: true,
    features: [
      "Custom pen builder",
      "Stripe payment integration",
      "Bilingual (FR/EN) support",
      "Order tracking system",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe",
      "Vercel",
    ],
    screenshot: "/screenshots/crayobois.png",
    screenshotAlt:
      "Crayobois e-commerce website featuring handcrafted wooden pens",
  },
  {
    id: "uottahack",
    name: "uOttaHack 4",
    description:
      "Official website for University of Ottawa's largest hackathon, serving 500+ participants.",
    url: "https://2021.uottahack.ca",
    github: "https://github.com/ZachLegros/2021-landing-page",
    isFeatured: false,
    technologies: ["React", "TypeScript", "Next.js", "CSS"],
  },
  {
    id: "oscillator",
    name: "All-in-One Oscillator",
    description:
      "TradingView technical analysis indicator combining stochastics, RSI, MFI, and VWAP signals.",
    github: "https://github.com/ZachLegros/all-in-one-oscillator",
    isFeatured: false,
    technologies: ["Pine Script", "TradingView"],
  },
  {
    id: "uorocketry",
    name: "uORocketry",
    description:
      "Flight computer software for university rocketry team's avionics systems.",
    github: "https://github.com/uorocketry/rocket-code-2020",
    isFeatured: false,
    technologies: ["C++", "Embedded Systems"],
  },
];

export interface Skill {
  name: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  title: string;
  items: Skill[];
}

export const skills: Record<string, SkillCategory> = {
  frontend: {
    title: "Frontend",
    items: [
      { name: "React", proficiency: 5 },
      { name: "Next.js", proficiency: 5 },
      { name: "TypeScript", proficiency: 5 },
      { name: "Tailwind CSS", proficiency: 5 },
      { name: "Framer Motion", proficiency: 4 },
    ],
  },
  backend: {
    title: "Backend",
    items: [
      { name: "Node.js", proficiency: 5 },
      { name: "NestJS", proficiency: 4 },
      { name: "Express", proficiency: 4 },
      { name: "REST APIs", proficiency: 5 },
      { name: "GraphQL", proficiency: 3 },
    ],
  },
  databases: {
    title: "Databases",
    items: [
      { name: "PostgreSQL", proficiency: 4 },
      { name: "MySQL", proficiency: 4 },
      { name: "DynamoDB", proficiency: 3 },
      { name: "T-SQL", proficiency: 3 },
      { name: "Redis", proficiency: 3 },
    ],
  },
  devops: {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", proficiency: 4 },
      { name: "Docker", proficiency: 4 },
      { name: "Kubernetes", proficiency: 3 },
      { name: "GitHub Actions", proficiency: 4 },
      { name: "Vercel", proficiency: 5 },
    ],
  },
  tools: {
    title: "Tools & Other",
    items: [
      { name: "Git", proficiency: 5 },
      { name: "Claude Code", proficiency: 5 },
      { name: "ECharts", proficiency: 4 },
      { name: "Jest", proficiency: 4 },
      { name: "Splunk", proficiency: 3 },
    ],
  },
};

export const education = {
  degree: "BASc. in Software Engineering",
  school: "University of Ottawa",
  honors: "Magna Cum Laude",
  scholarship: "Merit Scholarship Recipient",
};
