export interface Profile {
  _id: string;
  name: string;
  title: string;
  avatar: any;
  bio: any[];
  stats: { label: string; value: string }[];
  skills: { name: string; level: number }[];
  socialLinks: { platform: string; url: string }[];
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: any;
  client: string;
  industry: string;
  services: string[];
  techStack: string[];
  duration: string;
  overview: string;
  challenge?: string;
  solution?: string;
  results?: { metric: string; value: string }[];
  images?: any[];
  testimonial?: { quote: string; author: string; role: string };
  liveUrl?: string;
  featured: boolean;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: any;
  publishedAt: string;
  excerpt: string;
  body: any[];
  tags: { _id: string; name: string }[];
  readingTime: number;
}

export interface Tag {
  _id: string;
  name: string;
  slug: { current: string };
}
