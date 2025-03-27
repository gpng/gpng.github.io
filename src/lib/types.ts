export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github: string | null;
  website: string | null;
  image?: string;
  source?: string;
}
