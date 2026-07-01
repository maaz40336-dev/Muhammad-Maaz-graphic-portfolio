export interface Project {
  id: string;
  title: string;
  category: 'Brand & Identity' | 'UI & UX Design' | 'Packaging Design' | 'Editorial & Print' | 'Social Media';
  year: string;
  client: string;
  role: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  creativeDirection: string;
  tools: string[];
  tags: string[];
  featured: boolean;
  gallery?: string[];
}

export interface ViewerImage {
  image: string;
  title: string;
  category: string;
  description: string;
  client?: string;
  role?: string;
  year?: string;
  tags?: string[];
  tools?: string[];
  challenge?: string;
  solution?: string;
  creativeDirection?: string;
  dimensions?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Award {
  id: string;
  year: string;
  title: string;
  category: string;
  organization: string;
}

export interface Experience {
  id: string;
  duration: string;
  role: string;
  company: string;
  description: string;
}
