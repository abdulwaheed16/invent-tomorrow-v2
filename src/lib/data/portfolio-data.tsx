// data/portfolio.ts

import { images } from "@/utils/assets";
import {
  PortfolioCategory,
  PortfolioItem,
} from "../../../types/portfolio.types";
import { TechStackItem } from "../../../types/services";
import { createTechStackItem, techStacks } from "./technologies";

export const portfolioCategories: PortfolioCategory[] = [
  { id: "all", name: "All", count: 6 },
  { id: "ai-solutions", name: "AI Solutions", count: 2 },
  { id: "web-development", name: "Web Development", count: 2 },
  { id: "mobile-apps", name: "Mobile Apps", count: 1 },
  { id: "ecommerce", name: "E-commerce", count: 1 },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "SmartHealth - AI-Powered Healthcare Platform",
    slug: "smarthealth-ai-healthcare-platform",
    category: "AI Solutions",
    client: "HealthTech Innovations",
    year: "2024",
    duration: "4 months",
    description:
      "A comprehensive AI-powered healthcare platform that connects patients with doctors, provides AI-driven diagnosis assistance, and manages electronic health records seamlessly.",
    challenge:
      "HealthTech Innovations needed a scalable platform to handle thousands of concurrent users while maintaining HIPAA compliance and providing real-time AI diagnostics. The existing system was slow, lacked modern features, and couldn't integrate with their AI models.",
    solution:
      "We built a modern, cloud-native healthcare platform using React, Node.js, and integrated OpenAI GPT-4 for preliminary diagnosis assistance. The system includes real-time video consultations, secure EHR management, appointment scheduling, and AI-powered symptom checker.",
    results: [
      "Reduced patient wait times by 65%",
      "Increased doctor efficiency by 40%",
      "Processed 50,000+ consultations in first 3 months",
      "Achieved 98% patient satisfaction rate",
      "Reduced operational costs by 35%",
    ],
    technologies: [
      ...techStacks.ai,
      createTechStackItem("MongoDB"),
      createTechStackItem("AWS"),
      createTechStackItem("WebRTC"),
      createTechStackItem("Stripe"),
      createTechStackItem("Socket.io"),
    ],
    features: [
      "AI-powered symptom checker",
      "Real-time video consultations",
      "Electronic Health Records (EHR)",
      "Appointment scheduling system",
      "Prescription management",
      "Payment integration",
      "Multi-language support",
      "Mobile responsive design",
      "HIPAA compliant security",
    ],
    images: [
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://smarthealth-demo.com",
    testimonial: {
      quote:
        "The team delivered an exceptional platform that exceeded our expectations. The AI integration is seamless, and our patients love the user experience.",
      author: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      company: "HealthTech Innovations",
    },
    stats: [
      { label: "Active Users", value: "50,000+" },
      { label: "Consultations", value: "100,000+" },
      { label: "Patient Satisfaction", value: "98%" },
      { label: "Response Time", value: "<2 sec" },
    ],
  },
  {
    id: "2",
    title: "EcoMarket - Sustainable E-commerce Platform",
    slug: "ecomarket-sustainable-ecommerce",
    category: "E-commerce",
    client: "Green Solutions Co.",
    year: "2024",
    duration: "3 months",
    description:
      "An eco-friendly e-commerce platform featuring sustainable products, carbon footprint tracking, and a unique rewards program for environmentally conscious consumers.",
    challenge:
      "Green Solutions needed a modern e-commerce platform that not only sells products but also educates customers about sustainability and tracks the environmental impact of their purchases.",
    solution:
      "We developed a full-featured e-commerce platform with integrated carbon footprint calculator, sustainability scoring for products, and a gamified rewards system. The platform includes AI-powered product recommendations based on eco-preferences.",
    results: [
      "Generated $2M+ in revenue within 6 months",
      "Achieved 85% customer retention rate",
      "Reduced cart abandonment by 45%",
      "10,000+ active members in rewards program",
      "Average order value increased by 60%",
    ],
    technologies: [
      ...techStacks.ecommerce,
      createTechStackItem("Redis"),
      createTechStackItem("Elasticsearch"),
    ],
    features: [
      "Product catalog with 10,000+ items",
      "Carbon footprint calculator",
      "Sustainability scoring system",
      "AI product recommendations",
      "Rewards & loyalty program",
      "Multi-vendor marketplace",
      "Advanced search & filters",
      "One-click checkout",
      "Inventory management system",
    ],
    images: [
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://ecomarket-demo.com",
    testimonial: {
      quote:
        "This platform transformed our business. The sustainability features resonate with our customers, and the technical execution is flawless.",
      author: "Michael Chen",
      role: "CEO",
      company: "Green Solutions Co.",
    },
    stats: [
      { label: "Monthly Revenue", value: "$350K+" },
      { label: "Products Listed", value: "10,000+" },
      { label: "Conversion Rate", value: "4.8%" },
      { label: "CO2 Saved", value: "50 tons" },
    ],
  },
  {
    id: "3",
    title: "FitTrack Pro - Fitness & Nutrition Mobile App",
    slug: "fittrack-pro-fitness-app",
    category: "Mobile Apps",
    client: "FitLife Studios",
    year: "2023",
    duration: "5 months",
    description:
      "A comprehensive fitness and nutrition tracking app with AI-powered workout plans, meal recommendations, and social features to keep users motivated.",
    challenge:
      "FitLife Studios wanted to create an all-in-one fitness app that could compete with market leaders while offering unique AI-driven personalization and community features.",
    solution:
      "We built native iOS and Android apps with real-time workout tracking, AI meal planning, progress analytics, and social networking features. The app integrates with wearables and uses computer vision for exercise form correction.",
    results: [
      "Downloaded 100,000+ times in first 3 months",
      "4.8-star rating on both app stores",
      "70% daily active user rate",
      "Featured by Apple & Google Play",
      "$500K+ in subscription revenue",
    ],
    technologies: [
      ...techStacks.mobile,
      createTechStackItem("TensorFlow"),
      createTechStackItem("AWS"),
      createTechStackItem("HealthKit"),
      createTechStackItem("Google Fit"),
    ],
    features: [
      "AI-powered workout plans",
      "Meal planning & tracking",
      "Exercise form correction (CV)",
      "Progress analytics & reports",
      "Social feed & challenges",
      "Wearable device integration",
      "Video workout library",
      "Personal trainer matching",
      "In-app purchases & subscriptions",
    ],
    images: [
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://fittrackpro-demo.com",
    testimonial: {
      quote:
        "The app exceeded all our expectations. The AI features are incredibly accurate, and our users are more engaged than ever.",
      author: "Jessica Rodriguez",
      role: "Founder & CEO",
      company: "FitLife Studios",
    },
    stats: [
      { label: "App Downloads", value: "100K+" },
      { label: "Daily Active Users", value: "70K+" },
      { label: "Avg. Rating", value: "4.8/5" },
      { label: "Workout Completed", value: "1M+" },
    ],
  },
  {
    id: "4",
    title: "LegalAI - AI-Powered Legal Document Assistant",
    slug: "legalai-document-assistant",
    category: "AI Solutions",
    client: "LawTech Partners",
    year: "2024",
    duration: "6 months",
    description:
      "An intelligent legal document analysis and generation platform that helps lawyers and legal teams work more efficiently with AI-powered contract review and drafting.",
    challenge:
      "Law firms were spending countless hours on document review and contract drafting. LawTech Partners needed an AI solution that could understand legal context and assist lawyers without replacing human judgment.",
    solution:
      "We developed an enterprise-grade AI platform using GPT-4 and custom-trained legal models. The system can analyze contracts, identify risks, suggest clauses, and draft documents while maintaining human oversight.",
    results: [
      "Reduced document review time by 75%",
      "Saved law firms 1,000+ hours monthly",
      "Improved contract accuracy by 40%",
      "Deployed across 50+ law firms",
      "ROI achieved in 3 months",
    ],
    technologies: [
      ...techStacks.ai,
      createTechStackItem("FastAPI"),
      createTechStackItem("PostgreSQL"),
      createTechStackItem("Elasticsearch"),
      createTechStackItem("Docker"),
      createTechStackItem("Kubernetes"),
    ],
    features: [
      "AI contract review & analysis",
      "Risk identification & scoring",
      "Clause library & suggestions",
      "Document comparison",
      "Automated drafting",
      "Multi-language support",
      "Collaboration tools",
      "Audit trail & version control",
      "Enterprise security & compliance",
    ],
    images: [
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://legalai-demo.com",
    testimonial: {
      quote:
        "LegalAI has revolutionized how our firm operates. What used to take days now takes hours, and the accuracy is remarkable.",
      author: "Robert Williams",
      role: "Senior Partner",
      company: "LawTech Partners",
    },
    stats: [
      { label: "Time Saved", value: "75%" },
      { label: "Documents Analyzed", value: "50,000+" },
      { label: "Law Firms", value: "50+" },
      { label: "Accuracy Rate", value: "96%" },
    ],
  },
  {
    id: "5",
    title: "CloudSync - Enterprise Data Management Platform",
    slug: "cloudsync-enterprise-platform",
    category: "Web Development",
    client: "DataTech Solutions",
    year: "2023",
    duration: "8 months",
    description:
      "A robust enterprise data management and synchronization platform that enables seamless data flow across multiple cloud services and on-premise systems.",
    challenge:
      "Large enterprises struggled with data silos across different departments and cloud providers. DataTech needed a unified platform that could sync, transform, and manage data in real-time.",
    solution:
      "We built a scalable microservices architecture with real-time data pipelines, automated transformations, and a unified dashboard. The platform supports multi-cloud environments and handles millions of records daily.",
    results: [
      "Processing 10M+ records daily",
      "99.99% uptime achieved",
      "Reduced data sync time by 80%",
      "Deployed at 20+ Fortune 500 companies",
      "Saved $5M+ in operational costs",
    ],
    technologies: [
      ...techStacks.enterprise,
      createTechStackItem("Redis"),
      createTechStackItem("PostgreSQL"),
      createTechStackItem("AWS"),
    ],
    features: [
      "Real-time data synchronization",
      "Multi-cloud support",
      "Automated data transformations",
      "Visual data pipeline builder",
      "Advanced monitoring & alerts",
      "Role-based access control",
      "API management",
      "Data quality checks",
      "Compliance reporting",
    ],
    images: [
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://cloudsync-demo.com",
    testimonial: {
      quote:
        "CloudSync transformed our data infrastructure. The platform is incredibly powerful yet easy to use. Highly recommended!",
      author: "David Park",
      role: "CTO",
      company: "DataTech Solutions",
    },
    stats: [
      { label: "Records Processed", value: "10M+/day" },
      { label: "Uptime", value: "99.99%" },
      { label: "Enterprise Clients", value: "20+" },
      { label: "Cost Savings", value: "$5M+" },
    ],
  },
  {
    id: "6",
    title: "EduLearn - Online Learning Management System",
    slug: "edulearn-learning-management",
    category: "Web Development",
    client: "Education First",
    year: "2024",
    duration: "5 months",
    description:
      "A comprehensive learning management system with live classes, interactive courses, AI-powered assessments, and student analytics for educational institutions.",
    challenge:
      "Educational institutions needed a modern LMS that could support hybrid learning, provide detailed analytics, and keep students engaged with interactive content.",
    solution:
      "We created a feature-rich LMS with live streaming capabilities, interactive course builder, AI-powered grading, and comprehensive analytics dashboard. The platform supports thousands of concurrent users.",
    results: [
      "Supporting 50,000+ students",
      "1,000+ courses published",
      "95% student satisfaction rate",
      "Improved learning outcomes by 45%",
      "Deployed in 100+ schools",
    ],
    technologies: [
      ...techStacks.web,
      createTechStackItem("MongoDB"),
      createTechStackItem("WebRTC"),
      createTechStackItem("AWS"),
      createTechStackItem("Socket.io"),
      createTechStackItem("OpenAI"),
    ],
    features: [
      "Live video classes",
      "Interactive course builder",
      "AI-powered assessments",
      "Student progress analytics",
      "Discussion forums",
      "Assignment management",
      "Gradebook & reporting",
      "Certificate generation",
      "Mobile apps (iOS & Android)",
    ],
    images: [
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
      images.placeholderImage,
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://edulearn-demo.com",
    testimonial: {
      quote:
        "EduLearn has revolutionized our teaching methodology. Both teachers and students love the platform's intuitive design and powerful features.",
      author: "Dr. Emily Thompson",
      role: "Dean of Technology",
      company: "Education First",
    },
    stats: [
      { label: "Active Students", value: "50,000+" },
      { label: "Courses", value: "1,000+" },
      { label: "Schools", value: "100+" },
      { label: "Satisfaction", value: "95%" },
    ],
  },
];

// Helper function to get portfolio item by slug
export const getPortfolioBySlug = (slug: string): PortfolioItem | undefined => {
  return portfolioItems.find((item) => item.slug === slug);
};

// Helper function to get related portfolios
export const getRelatedPortfolios = (
  currentId: string,
  category: string,
  limit: number = 3
): PortfolioItem[] => {
  return portfolioItems
    .filter((item) => item.id !== currentId && item.category === category)
    .slice(0, limit);
};

// Helper function to get portfolios by category
export const getPortfoliosByCategory = (category: string): PortfolioItem[] => {
  if (category === "all") return portfolioItems;
  return portfolioItems.filter(
    (item) => item.category.toLowerCase().replace(/\s+/g, "-") === category
  );
};

// Helper function to get all unique technologies from portfolios
export const getAllTechnologies = (): TechStackItem[] => {
  const allTechs = portfolioItems.flatMap((item) => item.technologies);
  const uniqueTechs = Array.from(
    new Map(allTechs.map((tech) => [tech.title, tech])).values()
  );
  return uniqueTechs;
};
