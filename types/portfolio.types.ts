// types/portfolio.ts

import { StaticImageData } from "next/image";
import { TechStackItem } from "./services";

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: TechStackItem[];
  features: string[];
  images: StaticImageData[];
  videoUrl?: string;
  liveUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface PortfolioCategory {
  id: string;
  name: string;
  count: number;
}

export interface PortfolioFilter {
  category: string;
  technology?: string;
  year?: string;
}
