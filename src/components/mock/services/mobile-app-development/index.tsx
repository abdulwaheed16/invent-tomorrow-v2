"use client";

import FAQSection from "@/components/mock/services/ai-agents/faq-section";
import PricingSection from "@/components/mock/services/ai-agents/pricing-section";
import TestimonialsSection from "@/components/mock/services/ai-agents/testimonials-section";
import DevelopmentProcess from "@/components/mock/services/mobile-app-development/development-process";
import MobileHeroSection from "@/components/mock/services/mobile-app-development/hero-section";
import PlatformShowcase from "@/components/mock/services/mobile-app-development/platform-showcase";
import Breadcrumb from "../breadcrumb";
import PortfolioShowcase from "./portfolio-showcase";

export function MobileAppDevelopmentService() {
  const projects = [
    {
      id: 1,
      title: "FitTracker Pro",
      category: "health",
      platform: "iOS & Android",
      description:
        "Comprehensive fitness tracking app with AI-powered workout recommendations and social features.",
      image: "https://images.unsplash.com/photo-1663236752016-07d0b8f11207",
      imageAlt:
        "Smartphone displaying colorful fitness tracking app interface with workout metrics and progress charts",
      downloads: "500K+",
      rating: 4.8,
      appStoreUrl: "#",
      playStoreUrl: "#",
      technologies: ["React Native", "Firebase", "AI/ML"],
      features: [
        "Real-time workout tracking",
        "AI workout recommendations",
        "Social fitness challenges",
        "Nutrition planning",
      ],
    },
    {
      id: 2,
      title: "ShopEasy",
      category: "ecommerce",
      platform: "iOS & Android",
      description:
        "Modern e-commerce platform with AR try-on features and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1732258357096-457077a92429",
      imageAlt:
        "Mobile phone showing modern e-commerce app with product listings and shopping cart interface",
      downloads: "1M+",
      rating: 4.9,
      appStoreUrl: "#",
      playStoreUrl: "#",
      technologies: ["Flutter", "Stripe", "ARKit"],
      features: [
        "AR product visualization",
        "One-click checkout",
        "Inventory management",
        "Push notifications",
      ],
    },
    {
      id: 3,
      title: "EduLearn",
      category: "education",
      platform: "iOS & Android",
      description:
        "Interactive learning platform with gamification elements and progress tracking for students.",
      image: "https://images.unsplash.com/photo-1639506059943-7b96b14f1b3e",
      imageAlt:
        "Tablet displaying educational app with colorful learning modules and student progress dashboard",
      downloads: "750K+",
      rating: 4.7,
      appStoreUrl: "#",
      playStoreUrl: "#",
      technologies: ["React Native", "GraphQL", "AWS"],
      features: [
        "Interactive lessons",
        "Progress tracking",
        "Gamification system",
        "Offline content",
      ],
    },
    {
      id: 4,
      title: "TaskMaster",
      category: "productivity",
      platform: "iOS & Android",
      description:
        "Advanced project management and team collaboration tool with real-time synchronization.",
      image: "https://images.unsplash.com/photo-1670082365491-ca8a39ee4b61",
      imageAlt:
        "Smartphone showing productivity app with task lists, calendar view, and team collaboration features",
      downloads: "300K+",
      rating: 4.6,
      appStoreUrl: "#",
      playStoreUrl: "#",
      technologies: ["Native iOS", "Native Android", "WebSocket"],
      features: [
        "Real-time collaboration",
        "Task automation",
        "Time tracking",
        "Analytics dashboard",
      ],
    },
    {
      id: 5,
      title: "FoodieDelight",
      category: "food",
      platform: "iOS & Android",
      description:
        "Food delivery app with AI-powered recommendations and real-time order tracking.",
      image: "https://images.unsplash.com/photo-1540597526190-9a0701828762",
      imageAlt:
        "Mobile device displaying food delivery app with restaurant listings and meal photos",
      downloads: "2M+",
      rating: 4.8,
      appStoreUrl: "#",
      playStoreUrl: "#",
      technologies: ["React Native", "Node.js", "MongoDB"],
      features: [
        "AI recommendations",
        "Real-time tracking",
        "Multiple payment options",
        "Restaurant management",
      ],
    },
    {
      id: 6,
      title: "WealthBuilder",
      category: "finance",
      platform: "iOS & Android",
      description:
        "Personal finance management app with investment tracking and financial planning tools.",
      image: "https://images.unsplash.com/photo-1727641514660-da94e8cd379b",
      imageAlt:
        "Smartphone displaying financial app with investment charts, portfolio overview, and market data",
      downloads: "400K+",
      rating: 4.9,
      appStoreUrl: "#",
      playStoreUrl: "#",
      technologies: ["Flutter", "Plaid API", "Chart.js"],
      features: [
        "Investment tracking",
        "Budget planning",
        "Market analysis",
        "Security features",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* <Helmet>
        <title>Mobile App Development Services - iOS & Android | TechServices Pro</title>
        <meta 
          name="description" 
          content="Expert mobile app development for iOS and Android. Native and cross-platform solutions with React Native, Flutter. Transform your ideas into successful mobile applications." 
        />
        <meta name="keywords" content="mobile app development, iOS development, Android development, React Native, Flutter, cross-platform apps" />
        <meta property="og:title" content="Mobile App Development Services - iOS & Android | TechServices Pro" />
        <meta property="og:description" content="Expert mobile app development for iOS and Android. Native and cross-platform solutions with React Native, Flutter." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/mobile-app-development-detail" />
      </Helmet> */}

      <div className="pt-16">
        <Breadcrumb />
        <main>
          <MobileHeroSection />
          <PlatformShowcase />
          <DevelopmentProcess />
          <PortfolioShowcase projects={projects} />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
        </main>
      </div>
    </div>
  );
}
