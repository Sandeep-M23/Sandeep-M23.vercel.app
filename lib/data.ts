// Single source of truth for site content. Keep in sync with the resume.

export type Project = {
  title: string;
  description: string;
  github: string;
  link: string;
  tags: string[];
  category: string;
  image?: string;
  features?: string[];
};

export const profile = {
  name: 'Sandeep M',
  role: 'Full-Stack Engineer',
  location: 'Bengaluru, India',
  email: 'sandeep.m24.rathnam@gmail.com',
  github: 'https://github.com/Sandeep-M23',
  linkedin: 'https://www.linkedin.com/in/sandeep-m23/',
  resume: '/assests/resume/Sandeep M.pdf',
  photo: '/assests/images/Profile/Image.jpeg',
  intro:
    'I design and build web products end to end, from backend systems and third-party integrations to fast, polished frontends.',
};

export const experience = [
  {
    role: 'Founding Engineer',
    company: 'Outbox Labs',
    link: 'https://outbox.vc/',
    location: 'Bengaluru',
    duration: 'Feb 2024 – Oct 2026',
    summary:
      'Founding team on a fast-growing cold-email platform, across backend systems, integrations and frontend architecture.',
    points: [
      "Led engineering for ColdMailReseller.com, Zapmail's white-label B2B platform (1M+ mailboxes, 330K+ domains), through roughly 50% month-over-month growth, owning the Node.js and PostgreSQL backend and reseller partner onboarding onto the REST API.",
      'Engineered event-driven provisioning workflows that deliver domains, DNS and Google Workspace / Microsoft 365 mailboxes in about 40 minutes per order, backed by queue health checks and deduplicated Slack and Sentry alerts.',
      'Expanded reseller sales channels by launching pre-warmed mailboxes that are ready to send on day one, with AI-generated profile photos using Gemini and OpenAI.',
      'Oversaw the design of Clavis, an independent export microservice that decouples failure-prone Playwright exports to 10+ cold-email platforms from the core API through Kafka messaging, improving fault isolation.',
      'Built DomainStack end to end, integrating 5+ domain registrars, including Namecheap, GoDaddy and Spaceship, behind a pluggable registrar abstraction for multi-TLD domain search, checkout and DNS management.',
      'Built ReferralStack, an affiliate platform tracking hundreds of thousands of dollars in affiliate revenue, with an embeddable JavaScript attribution SDK, ClickHouse analytics and automated Stripe payouts.',
      "Designed the company-wide frontend architecture as a shared starter kit, now the standard for every product's web app and landing pages, and cut page load time by 50% on ReachInbox.ai and MailVerify.ai through code splitting, lazy loading and SSR.",
    ],
    tags: [
      'Node.js',
      'PostgreSQL',
      'Kafka',
      'BullMQ',
      'Redis',
      'ClickHouse',
      'Stripe',
      'Next.js',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'OpenInApp',
    link: 'https://openinapp.com/',
    location: 'Bengaluru',
    duration: 'Sep 2023 – Jan 2024',
    summary:
      'Shipped creator-monetization features and SSR smart-link redirection in Next.js.',
    points: [
      'Shipped 4 creator-monetization features (YTCash, Barter Box, Captions, Dub This) in Next.js, on a modular frontend architecture that made new features faster to integrate.',
      'Optimised smart-link redirection with server-side rendering so links open directly in native mobile apps instead of the browser.',
    ],
    tags: ['Next.js', 'SSR', 'React'],
  },
];

export const earlierExperience: {
  role: string;
  icon: 'code' | 'cloud' | 'layout';
  tags: string[];
  company: string;
  link: string;
  duration?: string;
  summary: string;
}[] = [
  {
    role: 'Jr Developer Intern',
    icon: 'code',
    tags: ['Next.js', 'Jotai', 'Tailwind CSS', 'Pusher'],
    company: 'OpenInApp',
    link: 'https://openinapp.com/',
    summary:
      'Built responsive interfaces with Next.js, Jotai and Tailwind CSS, and real-time notifications over WebSockets (Pusher).',
  },
  {
    role: 'Public Cloud Intern',
    icon: 'cloud',
    tags: ['Azure', 'AWS', 'PowerShell', 'CoreStack'],
    company: 'Getronics',
    link: 'http://www.getronics.com/',
    duration: 'Mar 2023 – May 2023',
    summary:
      'Worked across Azure and AWS: access control and network security groups, task automation with PowerShell and Azure CLI, and cost reporting with CoreStack.',
  },
  {
    role: 'Front-End Developer Intern',
    icon: 'layout',
    tags: ['React', 'Next.js', 'Strapi', 'REST APIs'],
    company: 'Project42 Labs',
    link: 'https://project42labs.com/',
    duration: 'May 2022 – Aug 2022',
    summary:
      'Integrated React and Next.js frontends with REST APIs and Strapi, using the Context API for state management.',
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Java', 'SQL'],
  },
  {
    group: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'GraphQL',
      'Kafka',
      'BullMQ',
      'REST APIs',
      'Webhooks',
    ],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js', 'TanStack Query', 'Tailwind CSS'],
  },
  {
    group: 'Databases & Tools',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'ClickHouse',
      'Elasticsearch',
      'Docker',
      'GitHub Actions',
      'Git',
    ],
  },
  {
    group: 'Integrations & AI',
    items: ['Stripe', 'Playwright', 'Sentry', 'OpenAI', 'Gemini'],
  },
];

export const education = [
  {
    course: 'B.E. in Computer Science & Engineering',
    institution: 'JSS Academy of Technical Education, Bengaluru',
    year: '2019 – 2023',
    grade: 'CGPA 8.21',
  },
  {
    course: 'Pre-University (PCMB)',
    institution: 'The National PU College',
    year: '2017 – 2019',
    grade: '78.25%',
  },
  {
    course: 'ICSE',
    institution: 'Sree Rama Vidyalaya',
    year: '2006 – 2017',
    grade: '83%',
  },
];

export const featuredProjects: Project[] = [
  {
    title: 'Placement Portal',
    description:
      'A portal for students and administrators to coordinate college placements end to end.',
    github: 'https://github.com/Sandeep-M23/placement-management',
    link: 'https://placement-management.vercel.app/',
    tags: ['Next.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
    category: 'Full-stack app',
    features: [
      'Separate student and administrator workflows',
      'GraphQL API backed by Prisma and PostgreSQL',
      'Built with Next.js and TypeScript',
    ],
    image: '/assests/images/Website-Images/Placement-Management-Website.png',
  },
  {
    title: 'Mental Health Matters',
    description:
      'A web app to schedule appointments and take surveys that help resolve mental health issues.',
    github: 'https://github.com/Sandeep-M23/mental-health-matters',
    link: 'https://mental-health-matters.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'tRPC'],
    category: 'Full-stack app',
    features: [
      'Appointment scheduling',
      'Surveys to understand mental health concerns',
      'End-to-end type safety with tRPC',
    ],
    image: '/assests/images/Website-Images/Mental-Health-Matters-2.png',
  },
  {
    title: 'Rise Against Hunger',
    description:
      'A web and mobile app to combat hunger: donate food, report hunger hot-spots, and manage it all from an admin panel.',
    github: 'https://github.com/Sandeep-M23/rise-against-hunger',
    link: 'https://rise-against-hunger.vercel.app/',
    tags: ['Next.js', 'Firebase', 'Flutter', 'Google Maps'],
    category: 'Web & mobile',
    features: [
      'Food donation forum',
      'Surveys to map hunger hot-spots',
      'Admin panel to review every submission',
    ],
    image: '/assests/images/Website-Images/Rise-Aganist-Hunger-Website.png',
  },
  {
    title: 'Hoodies',
    description:
      'An e-commerce store for modern hoodies, with login, favourites, a shopping cart and checkout.',
    github: 'https://github.com/Sandeep-M23/hoodies-app',
    link: 'https://hoodies-app.vercel.app/',
    tags: ['React', 'Material UI', 'Firebase'],
    category: 'E-commerce',
    features: [
      'Login and favourites',
      'Shopping cart and checkout',
      'Firebase backend',
    ],
    image: '/assests/images/Website-Images/Hoodie-Website.png',
  },
];

export const otherProjects: Project[] = [
  {
    title: 'MovieDirectory',
    description:
      'Browse and search movies from the TMDB API and keep your own watchlists.',
    github: 'https://github.com/Sandeep-M23/MovieDirectory',
    link: 'https://movie-directory.vercel.app/',
    tags: ['React', 'Firebase', 'TMDB API'],
    category: 'Web app',
  },
  {
    title: 'Hackwell 3.0',
    description:
      'Official website of Hackwell 3.0, a virtual hackathon by JSSATE-B with Honeywell.',
    github: 'https://github.com/Sandeep-M23/Hackwell3.0',
    link: 'https://hackwell3-0.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    category: 'Event website',
  },
  {
    title: 'Hackwell 4.0',
    description:
      'Official website of Hackwell 4.0, a virtual hackathon by JSSATE-B with Honeywell.',
    github: 'https://github.com/Sandeep-M23/Hackwell4.0',
    link: 'https://hackwell4-0.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Chakra UI'],
    category: 'Event website',
  },
  {
    title: 'Optimize Prime',
    description:
      'A mental-health site built in 24 hours for the Optimize Prime UI hackathon by BMSCE and HeyCoach.',
    github: 'https://github.com/Sandeep-M23/OptimizePrime-BMSCE',
    link: 'https://optimize-prime-bmsce.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Chakra UI'],
    category: 'Hackathon',
  },
  {
    title: 'Blog Publishing',
    description: 'Publish, edit and bookmark blog posts with image uploads.',
    github: 'https://github.com/Sandeep-M23/blog-website-frontend',
    link: '',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Full-stack app',
  },
  {
    title: 'Burger Builder',
    description:
      'Customise a burger ingredient by ingredient and place an order.',
    github: 'https://github.com/Sandeep-M23/burger-builder',
    link: 'https://burger-builder-three.vercel.app/',
    tags: ['React', 'Redux', 'Firebase'],
    category: 'Web app',
  },
];

export const focusAreas = [
  {
    icon: 'layout',
    title: 'Frontend development',
    description:
      'Fast, responsive web apps with React and Next.js, built on clean, reusable components and tuned for performance with SSR and smart loading.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    description:
      'Scalable services in Node.js, from REST and GraphQL APIs to event-driven workflows with queues and Kafka, designed to stay reliable in production.',
    tags: ['Node.js', 'Express.js', 'GraphQL', 'Kafka'],
  },
  {
    icon: 'database',
    title: 'Databases & DevOps',
    description:
      'Data modelling across relational, document and analytics stores, plus containerised deployments with automated CI/CD pipelines.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
  },
  {
    icon: 'plug',
    title: 'Integrations & AI',
    description:
      'Connecting products to the services around them: payments, webhooks, third-party APIs, AI models and browser automation.',
    tags: ['Stripe', 'Webhooks', 'OpenAI', 'Playwright'],
  },
] as const;

export const quickFacts = [
  { label: 'Based in', value: 'Bengaluru, India' },
  { label: 'Education', value: 'B.E. Computer Science, 2023' },
];

export const journey = [
  {
    year: '2024',
    title: 'Founding Engineer at Outbox Labs',
    description:
      'Joined the founding team and led engineering for ColdMailReseller.com through roughly 50% month-over-month growth.',
  },
  {
    year: '2023',
    title: 'Graduated and joined OpenInApp',
    description:
      'Finished my B.E. in Computer Science after a public cloud internship at Getronics, then shipped creator-monetization features at OpenInApp.',
  },
  {
    year: '2022',
    title: 'First industry role at Project42 Labs',
    description:
      'Front-end developer intern, integrating React and Next.js frontends with REST APIs and Strapi.',
  },
  {
    year: '2019',
    title: 'Started Computer Science at JSSATE',
    description:
      'Began my B.E. in Bengaluru, building full-stack projects and hackathon websites along the way.',
  },
];
