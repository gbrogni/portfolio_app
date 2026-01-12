export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  issued: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}