// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Profile extends CosmicObject {
  type: 'profile';
  metadata: {
    full_name?: string;
    tagline?: string;
    bio?: string;
    profile_photo?: CosmicImage;
    email?: string;
    location?: string;
    github_url?: string;
    linkedin_url?: string;
    website_url?: string;
  };
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Design' | 'DevOps' | 'Tools' | 'Other';

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name?: string;
    category?: string | { key?: string; value?: string };
    proficiency?: string | { key?: string; value?: string };
  };
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title?: string;
    description?: string;
    screenshots?: CosmicImage[];
    tech_stack?: string[];
    live_url?: string;
    github_url?: string;
    featured?: boolean;
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title?: string;
    company?: string;
    company_logo?: CosmicImage;
    location?: string;
    start_date?: string;
    current_role?: boolean;
    end_date?: string;
    description?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}