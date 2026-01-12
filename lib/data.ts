import { Experience, Skill, Education, Certification, Project } from './types';

export const experiences: Experience[] = [
  {
    title: 'Mid-Level Full-Stack Engineer',
    company: 'Table IT',
    period: 'August 2025 – Present',
    description: [
      'Development of full-stack features using .NET (C#), Angular, and SQL Server',
      'Migration and reimplementation of legacy ASP system into modern .NET + Angular architecture',
      'Implementation of authentication/authorization service using RSA asymmetric cryptography and digital signatures',
      'Design and maintenance of REST and GraphQL APIs with query optimization',
      'Application of Clean Code, Clean Architecture, and DDD principles',
      'Work within Agile (Scrum) using Git and Azure DevOps for CI/CD pipelines'
    ]
  },
  {
    title: 'Mid-Level Full-Stack Engineer',
    company: 'Movtech Systems',
    period: 'September 2022 - August 2025',
    description: [
      'Led system modernization by refactoring legacy VB.NET to C# using Clean Architecture',
      'Architected comprehensive testing strategy using XUnit and Cypress for E2E testing',
      'Developed features across backend (.NET Core) and frontend (Angular)',
      'Collaborated with stakeholders to translate business needs into technical solutions',
      'Participated in Scrum ceremonies and maintained high code quality standards'
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