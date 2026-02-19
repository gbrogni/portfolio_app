import { Experience, Skill, Education, Certification, Project } from './types';

export const experiences: Experience[] = [
  {
    title: 'Full-Stack Engineer',
    company: 'Table IT',
    period: 'August 2025 – Present',
    description: [
      'Develop full-stack solutions with .NET (C#), Node.js (NestJS/Express), ReactJS and Angular, building scalable APIs and modern SPA interfaces.',
      'Led migration of legacy ASP system to modern architecture (.NET + React/Angular), decreasing post-deploy risks and improving delivery velocity.',
      'Designed and maintained REST and GraphQL APIs with focus on performance, data modeling and security (JWT, access control).',
      'Implemented secure authentication services for automated integrations using RSA encryption and digital signatures in production.',
      'Work with observability, logging and CI/CD pipelines (Azure DevOps/Git) to enable predictable deployments and safe rollbacks.',
      'Collaborate with stakeholders on technical design and prioritization.'
    ]
  },
  {
    title: 'Full-Stack Engineer',
    company: 'Movtech Systems',
    period: 'September 2022 - August 2025',
    description: [
      'Led legacy migration (VB.NET → C#/.NET Core) and architectural redesign using Clean Architecture and DDD, reducing technical debt and improving maintainability.',
      'Designed and built scalable APIs using .NET Core and Node.js (Express/NestJS), including authentication, versioning and clear API contracts.',
      'Architected SPAs with Angular and ReactJS focused on component reuse, state management and render performance.',
      'Implemented asynchronous Node.js services for integrations and batch processing to improve throughput and system decoupling.',
      'Defined automated testing strategy (unit, integration, E2E) with XUnit, Jest and Cypress, raising release reliability.',
      'Active participant in architecture decisions, code reviews and engineering standards.'
    ]
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['Angular', 'ReactJS', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    items: ['.NET Core/Framework', 'C#', 'Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'GraphQL']
  },
  {
    category: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Entity Framework', 'Prisma']
  },
  {
    category: 'Testing & DevOps',
    items: ['XUnit', 'Jest', 'Cypress', 'TDD', 'AWS', 'Azure DevOps', 'CI/CD']
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor's Degree in Systems Analysis and Development",
    institution: 'SENAI (Brazil)',
    period: '2022 - 2024'
  }
];

export const certifications: Certification[] = [
  { name: 'AWS Academy Graduate - Cloud Foundations', issued: 'May 2024' },
  { name: 'The Complete Agile Scrum Fundamentals Course', issued: 'January 2023' }
];

export const projects: Project[] = [
  {
    name: 'Forum API',
    description: 'A robust backend RESTful API designed for Q&A platforms and discussion forums. Features include authentication, thread management, real-time updates, and caching for optimal performance.',
    tech: ['TypeScript', 'Node.js', 'NestJS', 'Redis'],
    link: 'https://github.com/gbrogni'
  }
];