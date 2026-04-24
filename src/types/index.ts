export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  stars?: string;
}

export interface NavLink {
  label: string;
  path: string;
}
