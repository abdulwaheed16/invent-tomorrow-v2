// types/services.ts

import { Code2, Lightbulb, LucideIcon, Smartphone, Sparkles } from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Code2,
  Smartphone,
  Lightbulb,
};
// Base Service type from the provided data
export interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  hero_image: string;
  icon: keyof typeof iconMap;
  color: string;
  technologies: string[];
  benefits: Benefit[];
  process: ProcessStep[];
  deliverables: string[];
  created_date: string;
  updated_date: string;
  created_by_id: string;
  created_by: string;
  is_sample: string;

  // Optional properties that might be added
  stats?: Stat[];
  features?: Feature[];
  testimonials?: Testimonial[];
  case_studies?: CaseStudy[];
  faqs?: FAQ[];
}

// Benefit type (from the original data)
export interface Benefit {
  title: string;
  description: string;
  icon?: string; // Optional icon name
}

// Process step type (from the original data)
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

// Stats type (for StatsSection)
export interface Stat {
  value: string;
  label: string;
}

// Feature type (for FeaturesSection)
export interface Feature {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

// Testimonial type (for TestimonialsSection)
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

// Case Study type (for CaseStudiesSection)
export interface CaseStudy {
  title: string;
  description: string;
  result: string;
}

// FAQ type (for FAQSection)
export interface FAQ {
  question: string;
  answer: string;
}

// Icon mapping type
export type IconName =
  | "Sparkles"
  | "Code2"
  | "Smartphone"
  | "Lightbulb"
  | "Clock"
  | "MessageCircle"
  | "Link"
  | "TrendingUp"
  | "Zap"
  | "Monitor"
  | "Search"
  | "Shield"
  | "Settings"
  | "Layers"
  | "Gauge"
  | "WifiOff"
  | "Bell"
  | "Star"
  | "BarChart"
  | "Users"
  | "DollarSign"
  | "AlertTriangle"
  | "Map"
  | "CheckCircle"
  | "BookOpen"
  | "Check"
  | "MessageSquare"
  | "Network"
  | "Brain"
  | "Plug"
  | "GitBranch"
  | "BarChart3"
  | "Globe"
  | "Radio"
  | "Cloud"
  | "Code"
  | "LayoutDashboard"
  | "CreditCard"
  | "ShoppingCart"
  | "Share2"
  | "PieChart"
  | "FileSearch"
  | "GraduationCap"
  | "DraftingCompass"
  | "TestTube"
  | "Rocket"
  | "Flag"
  | "Quote"
  | "HelpCircle"
  | "ChevronDown"
  | "ArrowRight"
  | "PlayCircle"
  | "Package"
  | "TrendingUp"
  | "MessageCircle";

// Icon map type definition
export interface IconMap {
  [key: string]: LucideIcon;
}

// Component Props Types
export interface ServiceHeroProps {
  service: Service;
  Icon: LucideIcon;
}

export interface StatsSectionProps {
  stats: Stat[];
  color: string;
}

export interface FeaturesSectionProps {
  features: Feature[];
  color: string;
}

export interface TechnologiesSectionProps {
  technologies: string[];
  color: string;
}

export interface BenefitsSectionProps {
  benefits: Benefit[];
  color: string;
  Icon: LucideIcon;
}

export interface ProcessSectionProps {
  process: ProcessStep[];
  color: string;
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  color: string;
}

export interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  color: string;
}

export interface DeliverablesSectionProps {
  deliverables: string[];
  color: string;
}

export interface FAQSectionProps {
  faqs: FAQ[];
  color: string;
}

export interface CTASectionProps {
  color: string;
}

// Service Page Props
export interface ServicePageProps {
  serviceSlug: string;
}

// API Response Types (if needed)
export interface ServiceResponse {
  data: Service[];
  total: number;
  page: number;
  limit: number;
}

// Filter/Query Types
export interface ServiceFilter {
  slug?: string;
  category?: string;
  featured?: boolean;
}

// Navigation Types
export interface ServiceNavItem {
  title: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  description?: string;
}

// Form Types (for contact/consultation forms)
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export interface ConsultationForm {
  name: string;
  email: string;
  phone?: string;
  company: string;
  service: string;
  budget?: string;
  timeline?: string;
  requirements: string;
}

// Metadata Types
export interface ServiceMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

// Analytics Types
export interface ServiceAnalytics {
  views: number;
  inquiries: number;
  conversionRate: number;
  popularServices: string[];
}

// Configuration Types
export interface ServiceConfig {
  showStats: boolean;
  showFeatures: boolean;
  showTestimonials: boolean;
  showCaseStudies: boolean;
  showFAQ: boolean;
  primaryCTA: string;
  secondaryCTA: string;
}

// Export a union type of all possible icon names
export type AllIconNames = IconName;

// Export a type that includes all possible service properties
export type CompleteService = Service & {
  stats: Stat[];
  features: Feature[];
  testimonials: Testimonial[];
  case_studies: CaseStudy[];
  faqs: FAQ[];
};

// Export utility types
export type ServiceWithoutOptional = Omit<
  Service,
  "stats" | "features" | "testimonials" | "case_studies" | "faqs"
>;
export type ServiceOptionalFields = Pick<
  Service,
  "stats" | "features" | "testimonials" | "case_studies" | "faqs"
>;
