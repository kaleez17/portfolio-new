export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  githubUrl: string;
  imageBg: string;
}

export const PERSONAL_INFO = {
  name: 'Kaleeswaran Irulaiya',
  title: 'Java Full Stack & Angular Developer',
  location: 'Chennai, Tamil Nadu, India',
  email: 'kaleeswaranirulaiya@gmail.com',
  phone: '+91 63799 53691',
  whatsAppUrl: 'https://wa.me/+916379953691',
  githubUrl: 'https://github.com/kaleez17',
  linkedinUrl: 'https://www.linkedin.com/in/kaleeswaran-irulaiya-293414214',
  summary: 'M.Sc. Information Technology graduate with software development training at Lissomsoft Technologies. Specialized in Java, Spring Boot, REST APIs, SQL, and reactive Angular 19 single-page applications. Creator of 25+ projects on GitHub.',
  metrics: {
    projects: '25+',
    trainingMonths: '3+',
    certifications: '2',
    satisfaction: '100%'
  }
};

export const SERVICES_DATA = [
  {
    icon: 'code',
    title: 'Java & Spring Boot APIs',
    description: 'Engineering high-performance RESTful APIs with Spring Boot 3, Hibernate/JPA, JWT authentication, and resilient microservices architecture.',
    tags: ['Java 21', 'Spring Boot', 'REST APIs', 'Spring Security']
  },
  {
    icon: 'layers',
    title: 'Angular 19 Frontend Development',
    description: 'Building modern, reactive single-page applications using Angular standalone components, RxJS observables, TypeScript, and responsive Tailwind CSS.',
    tags: ['Angular 19', 'TypeScript', 'RxJS', 'Tailwind CSS']
  },
  {
    icon: 'database',
    title: 'SQL & Database Architecture',
    description: 'Designing normalized relational databases in MySQL and PostgreSQL with complex queries, indexing, transactions, and Postman API validation.',
    tags: ['MySQL', 'PostgreSQL', 'Postman', 'CRUD Lifecycle']
  }
];

export const TOOLS_DATA = [
  { name: 'Angular', level: 95, icon: '🅰️' },
  { name: 'Java', level: 94, icon: '☕' },
  { name: 'Spring Boot', level: 92, icon: '🍃' },
  { name: 'TypeScript', level: 90, icon: '📘' },
  { name: 'SQL / MySQL', level: 88, icon: '🗄️' },
  { name: 'Postman', level: 93, icon: '🚀' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'CloudVault — Distributed Microservices Storage Engine',
    category: 'Java & Microservices',
    tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker'],
    description: 'Distributed file streaming and metadata indexing microservices platform with Spring Cloud and circuit breakers.',
    githubUrl: 'https://github.com/kaleez17',
    imageBg: 'from-emerald-900 to-forest-900'
  },
  {
    id: 'proj-2',
    title: 'NexusOS — Interactive 3D Angular Workspace',
    category: 'Angular & Web',
    tags: ['Angular 19', 'TypeScript', 'Three.js', 'RxJS'],
    description: 'Futuristic desktop environment built in Angular featuring WebGL 3D physics widgets, reactive signals, and custom shaders.',
    githubUrl: 'https://github.com/kaleez17',
    imageBg: 'from-amber-900 to-forest-900'
  },
  {
    id: 'proj-3',
    title: 'ApexCommerce — Reactive Full Stack Marketplace',
    category: 'Full Stack',
    tags: ['Java', 'Spring Boot', 'Angular 19', 'MySQL'],
    description: 'Enterprise e-commerce system orchestrating Spring Boot REST APIs, reactive cart state, and optimistic inventory locking.',
    githubUrl: 'https://github.com/kaleez17',
    imageBg: 'from-slate-900 to-forest-850'
  },
  {
    id: 'proj-4',
    title: 'NeuralQuery — Python Document Semantic Search',
    category: 'Python & AI',
    tags: ['Python', 'FastAPI', 'Vector Search', 'LangChain'],
    description: 'Semantic vector similarity engine and QA search assistant with asynchronous REST endpoints and streaming responses.',
    githubUrl: 'https://github.com/kaleez17',
    imageBg: 'from-teal-900 to-forest-900'
  }
];

export const JOURNEY_DATA = {
  education: [
    {
      period: '2021 – 2023',
      institution: 'NMSSVN College, Madurai',
      degree: 'Master of Science in Information Technology (M.Sc. IT)',
      grade: 'First Class with Distinction'
    },
    {
      period: '2018 – 2021',
      institution: 'NMSSVN College, Madurai',
      degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
      grade: 'First Class'
    }
  ],
  experience: [
    {
      period: 'June 2026 – August 2026',
      company: 'Lissomsoft Technologies',
      role: 'Software Developer Trainee',
      location: 'Guindy, Chennai',
      summary: 'Practical enterprise training across Java, Spring Boot, REST API testing via Postman, SQL databases, and frontend Angular.'
    },
    {
      period: '2024',
      company: 'Besant Technologies',
      role: 'Python Full Stack Certification',
      location: 'Velachery, Chennai',
      summary: 'Comprehensive certification program covering backend Python architectures, web frameworks, and relational databases.'
    },
    {
      period: 'Continuous',
      company: 'GitHub Open Source (kaleez17)',
      role: 'Full Stack Developer',
      location: 'Chennai / Remote',
      summary: 'Created and deployed 25+ independent software repositories spanning Java, Spring Boot, Angular, and Python.'
    }
  ]
};

export const PRICING_DATA = [
  {
    tier: 'Full-Time Hire',
    rate: 'Competitive',
    period: '/ Annual CTC',
    highlighted: True,
    badge: 'Immediate Availability',
    features: [
      'Java & Spring Boot Microservices Development',
      'Angular 19 Frontend Web Engineering',
      'REST API Design, CRUD & Postman Testing',
      'Relational Database & SQL Query Optimization',
      'Immediate joining in Chennai / Madurai / Remote',
      'Disciplined Git / GitHub collaborative workflow'
    ],
    ctaText: 'Hire Kaleeswaran →'
  },
  {
    tier: 'Contract / Project',
    rate: 'Fixed Scope',
    period: '/ Milestone',
    highlighted: False,
    badge: 'End-to-End Delivery',
    features: [
      'Full Stack Web Application Architecture',
      'Clean Angular SPA Frontend Scaffolding',
      'Spring Boot RESTful Backend Services',
      'Complete Database Schema & API Documentation',
      'Postman Collections & Automated Test Validation'
    ],
    ctaText: 'Start a Project →'
  },
  {
    tier: 'Technical Consultation',
    rate: 'Flexible',
    period: '/ Hourly',
    highlighted: False,
    badge: 'Code & Architecture',
    features: [
      'Angular Architecture & Signal Migration',
      'Spring Boot REST API Refactoring & Debugging',
      'Database Query Tuning & Schema Reviews',
      'Technical Code Assessment & Review'
    ],
    ctaText: 'Schedule Consultation →'
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: 'Kaleeswaran demonstrates strong fundamentals in Java Spring Boot and Angular. His ability to grasp complex API lifecycles and deliver clean code is commendable.',
    name: 'Training Mentor',
    role: 'Lissomsoft Technologies',
    rating: 5
  },
  {
    quote: 'Energetic full-stack developer with 25+ repositories on GitHub. Dedicated to mastering modern frameworks and writing robust, maintainable code.',
    name: 'Academic Advisor',
    role: 'NMSSVN College, Madurai',
    rating: 5
  }
];
