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
    duration: "2 years",
    internPeriod: "May - Aug 2023",
    internDuration: "4 months",
    location: "Ottawa",
    isFeatured: true,
    description:
      "Leading full-stack development for enterprise cloud security products, specializing in AI-powered threat detection and email protection systems.",
    achievements: [
      {
        metric: "92%",
        description: "Reduced Tonic UI bundle size (752KB to 61KB)",
      },
      {
        metric: "451",
        description: "Pull requests merged across 25+ repositories",
      },
      {
        metric: "100+",
        description: "Technical support cases triaged with Splunk & Kibana",
      },
    ],
    highlights: [
      "Architected Correlated Intelligence: AI-powered threat detection with custom signal conditions and anomaly detection",
      "Built closed-loop feedback system with auto-remediation workflows and secure email rendering using DOMPurify",
      "Developed Email Banner frontend and APIs with multi-language template support (i18n)",
      "Secured OAuth multi-app authentication with JWT token refresh and SSO integration",
      "Optimized risk metrics service with Azure Service Bus queue system and Grafana monitoring",
      "Mentored University of Waterloo intern on React, NestJS, and debugging methodologies",
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
    ],
  },
  {
    id: "kinaxis",
    company: "Kinaxis",
    role: "Software Developer Intern",
    period: "Sep - Dec 2021, May - Aug 2022",
    duration: "8 months",
    location: "Ottawa",
    isFeatured: false,
    description:
      "Developed React components for RapidResponse supply chain management platform.",
    highlights: [
      "Led Dark Mode Epic with Styled-Components and MaterialUI",
      "Created custom ESLint plugin in TypeScript for code quality",
      "Built reusable components for Parcel design system",
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
    duration: "4 months",
    location: "Remote",
    isFeatured: false,
    description: "Built web application for wishlist management startup.",
    highlights: [
      "Developed responsive web app with React, Next.js, and Chakra UI",
      "Integrated OAuth authentication and iOS API",
    ],
    technologies: ["React", "Next.js", "Chakra UI", "OAuth"],
  },
  {
    id: "aeponyx",
    company: "AEPONYX inc.",
    role: "Data Science Intern",
    period: "May - Aug 2020",
    duration: "4 months",
    location: "Montreal",
    isFeatured: false,
    description: "Developed photonics analysis tools for optical systems.",
    highlights: [
      "Built data analysis tools with NumPy, SciPy, and Pandas",
      "Automated optical power meter measurements with Python",
    ],
    technologies: ["Python", "NumPy", "SciPy", "Pandas"],
  },
];

export const projects = [
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

export const skills = {
  frontend: {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  backend: {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST APIs", "GraphQL"],
  },
  databases: {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "DynamoDB", "T-SQL", "Redis"],
  },
  devops: {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Vercel"],
  },
  tools: {
    title: "Tools & Other",
    items: ["Git", "Claude Code", "ECharts", "Jest", "Splunk"],
  },
};

export const education = {
  degree: "BASc. in Software Engineering",
  school: "University of Ottawa",
  honors: "Magna Cum Laude",
  scholarship: "Merit Scholarship Recipient",
};
