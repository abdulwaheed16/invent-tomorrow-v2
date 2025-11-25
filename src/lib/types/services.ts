export interface TechStackItem {
  title: string;
  logo: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessDetailedStep {
  title: string;
  duration: string;
  icon: string;
  description: string;
  deliverables: string[];
  keyActivities: string[];
}

export interface CaseStudy {
  title: string;
  description: string;
  result: string;
  videoUrl?: string;
  externalLink?: string;
}

export interface CaseStudyDetailedResult {
  metric: string;
  description: string;
}
export interface CaseStudyDetailed {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  image: string;
  imageAlt: string;
  results: CaseStudyDetailedResult[] | string[];
  technologies: string[];
  timeline?: string;
  teamSize?: string;
  keyOutcomes?: string[];
  metrics?: Record<string, string>;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  platform?: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  features: string[];
  downloads?: string;
  rating?: number;
  appStoreUrl?: string;
  playStoreUrl?: string;
  metrics?: {
    users: string;
    performance: string;
    uptime: string;
  };
  liveUrl?: string;
  caseStudyUrl?: string;
}

export interface MobileProject {
  id: number;
  title: string;
  category: string;
  platform: string;
  description: string;
  image: string;
  imageAlt: string;
  downloads: string;
  rating: number;
  appStoreUrl?: string;
  playStoreUrl?: string;
  technologies: string[];
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number | string;
  annualPrice: number | string;
  setup: number | string;
  popular: boolean;
  features: string[];
  limitations?: string[];
  idealFor: string;
}

export interface AddOn {
  name: string;
  description: string;
  price: number;
  icon: string;
}

export interface HeroData {
  title: string;
  description: string;
  heroImage: string;
  bgImages: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  bgImages: string[];
  icon: string;
  techStack: TechStackItem[];
  benefits: Benefit[];
  process?: ProcessStep[];
  processDetailed?: ProcessDetailedStep[];
  caseStudies?: CaseStudy[];
  caseStudiesDetailed?: CaseStudyDetailed[];
  projects?: Project[];
  testimonials?: Testimonial[] | null;
  pricingTiers?: PricingTier[];
  addOns?: AddOn[];
}

export interface ServicesData {
  webAppDevelopment: Service;
  mobileAppDevelopment: Service;
  techConsultation: Service;
  aiAgents: Service;
}
