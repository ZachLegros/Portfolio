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
    startDate: "2024-01-01",
    internPeriod: "May - Aug 2023",
    internDuration: "4 mo",
    location: "Ottawa",
    isFeatured: true,
    description:
      "Full-stack development for enterprise cloud security products, specializing in AI-powered threat detection and email protection systems.",
    highlights: [
      "Accelerated full-stack development with **Claude Code** and custom **MCP servers** (Atlassian, Figma): charting migration, encryption implementation, 100+ case triages, and daily debugging workflows.",
      "Reduced base **Tonic UI** open-source bundle by **92%** (752KB → 61KB) via **Vite** build optimization, tree-shaking, and modularization.",
      "Architected frontend (**React**, **TypeScript**, **Zustand**, **React Query**) and backend APIs (**NestJS**, **Node.js**) for **Correlated Intelligence**: AI-powered threat detection with custom signal conditions and anomaly detection.",
      "Championed professional development and technical onboarding for a **University of Waterloo** intern; mentored on full-stack architecture, **NestJS** API design, and systematic troubleshooting within complex production environments.",
      "Led AI-powered migration from **HighCharts** to **ECharts** for **Cloud Email and Collaboration Protection**, leveraging automated refactors to accelerate delivery.",
      "Triaged 100+ technical support cases using **Splunk** log analysis, **ElasticSearch**/**Kibana** debugging, and **MySQL**/**T-SQL** queries.",
      "Developed **Closed-loop Feedback** frontend and **REST APIs**: auto-remediation workflows, quarantine mitigation, and secure email rendering using **DOMPurify**.",
      "Optimized risk metrics service (**Node.js**) with **Azure Service Bus** queue system, request timeouts, connection pooling, and **Grafana** monitoring for improved reliability.",
      "Developed **Email Banner** frontend (**React**) and backend APIs (**NestJS**, **T-SQL** stored procedures) with multi-language template support and **i18n** integration.",
      "Orchestrated a mission-critical encryption migration for secrets; utilized **AI-driven architectural planning** to deliver a seamless, opt-in transition with zero service disruption.",
      "Deployed features via **Docker**, **Kubernetes**, **GitHub Actions** CI/CD pipelines across 25+ repositories.",
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
      "Developed **React** components for RapidResponse and Parcel design system",
      "Led **Dark Mode Epic** with **Styled-Components** and **MaterialUI**",
      "Created custom **ESLint plugin** in **TypeScript**",
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
      "Built web app with **React**, **Next.js**, **Chakra UI**",
      "Integrated **OAuth** and iOS API",
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
      "Developed photonics analysis tools with **NumPy**, **SciPy**, **Pandas**",
      "Automated optical power meter with **Python**",
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
