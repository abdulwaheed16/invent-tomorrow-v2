"use client";
import { motion } from "framer-motion";
import DevelopmentProcess from "./development-process";
import FAQSection from "./faq-section";
import HeroSection from "./hero-section";
import PortfolioShowcase from "./portfolio-showcase";
import PricingSection from "./pricing-section";
import ServiceBreakdown from "./service-breakdown";
import TechnologyStack from "./technology-stack";
import TestimonialsSection from "./testimonials";

const WebAppDevelopmentService = () => {
  const projects = [
    {
      id: 1,
      title: "ECommerce Platform",
      category: "ecommerce",
      description:
        "Modern e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1649424221016-58857288854e",
      imageAlt:
        "Modern e-commerce website interface showing product catalog with shopping cart and payment features on desktop screen",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Multi-vendor Support",
        "Real-time Analytics",
        "Mobile App",
        "Payment Gateway",
      ],
      metrics: {
        users: "50K+",
        performance: "98%",
        uptime: "99.9%",
      },
      liveUrl: "https://demo-ecommerce.com",
      caseStudyUrl: "/case-study/ecommerce-platform",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "healthcare",
      description:
        "Comprehensive healthcare platform for patient management, appointment scheduling, and telemedicine consultations.",
      image: "https://images.unsplash.com/photo-1687168644714-3343aa9b5af8",
      imageAlt:
        "Healthcare management dashboard displaying patient records, appointment calendar, and medical analytics on modern interface",
      technologies: ["Next.js", "Express", "MongoDB", "Socket.io", "Docker"],
      features: [
        "Patient Portal",
        "Video Consultations",
        "Electronic Records",
        "Appointment System",
      ],
      metrics: {
        users: "25K+",
        performance: "96%",
        uptime: "99.8%",
      },
      liveUrl: "https://demo-healthcare.com",
      caseStudyUrl: "/case-study/healthcare-system",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "fintech",
      description:
        "Real-time financial analytics platform with portfolio tracking, market data, and automated trading features.",
      image: "https://images.unsplash.com/photo-1651129525259-a283dc1a66a6",
      imageAlt:
        "Financial dashboard showing stock market charts, portfolio performance graphs, and trading interface with real-time data visualization",
      technologies: ["React", "Python", "Redis", "WebSocket", "Kubernetes"],
      features: [
        "Real-time Data",
        "Portfolio Analytics",
        "Risk Management",
        "API Integration",
      ],
      metrics: {
        users: "15K+",
        performance: "99%",
        uptime: "99.9%",
      },
      liveUrl: "https://demo-fintech.com",
      caseStudyUrl: "/case-study/financial-dashboard",
    },
    {
      id: 4,
      title: "Learning Management System",
      category: "education",
      description:
        "Interactive e-learning platform with course management, progress tracking, and collaborative learning tools.",
      image: "https://images.unsplash.com/photo-1600642413339-d64b35bd2ca2",
      imageAlt:
        "Online learning platform interface showing course catalog, video player, progress tracking, and student collaboration features",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS S3", "Vercel"],
      features: [
        "Course Builder",
        "Progress Tracking",
        "Interactive Quizzes",
        "Certification",
      ],
      metrics: {
        users: "100K+",
        performance: "97%",
        uptime: "99.7%",
      },
      liveUrl: "https://demo-lms.com",
      caseStudyUrl: "/case-study/learning-management",
    },
    {
      id: 5,
      title: "Project Management Tool",
      category: "productivity",
      description:
        "Collaborative project management platform with task tracking, team communication, and resource planning.",
      image: "https://images.unsplash.com/photo-1588511986632-592db3d6c81f",
      imageAlt:
        "Project management dashboard displaying kanban boards, task assignments, team collaboration tools, and project timeline visualization",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Docker"],
      features: [
        "Kanban Boards",
        "Time Tracking",
        "Team Chat",
        "Resource Planning",
      ],
      metrics: {
        users: "30K+",
        performance: "95%",
        uptime: "99.6%",
      },
      liveUrl: "https://demo-pm.com",
      caseStudyUrl: "/case-study/project-management",
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "realestate",
      description:
        "Comprehensive real estate marketplace with property listings, virtual tours, and mortgage calculators.",
      image: "https://images.unsplash.com/photo-1657696489779-e9acbc0419a4",
      imageAlt:
        "Real estate website showing property listings with high-quality photos, search filters, virtual tour options, and mortgage calculator tools",
      technologies: ["Next.js", "Express", "PostgreSQL", "Mapbox", "AWS"],
      features: [
        "Property Search",
        "Virtual Tours",
        "Mortgage Calculator",
        "Agent Portal",
      ],
      metrics: {
        users: "75K+",
        performance: "94%",
        uptime: "99.5%",
      },
      liveUrl: "https://demo-realestate.com",
      caseStudyUrl: "/case-study/real-estate-platform",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Breadcrumb */}
      <div className="pt-16">{/* <Breadcrumb /> */}</div>
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="breathing-layout"
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Service Breakdown */}
        <ServiceBreakdown />

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Development Process */}
        <DevelopmentProcess />

        {/* Portfolio Showcase */}
        <PortfolioShowcase projects={projects} />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Pricing */}
        <PricingSection />

        {/* FAQ */}
        <FAQSection />
      </motion.main>
    </div>
  );
};

export default WebAppDevelopmentService;
