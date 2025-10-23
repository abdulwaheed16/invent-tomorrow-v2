import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  Calendar,
  CheckCircle,
  Clock,
  LucideIcon,
  RefreshCw,
  Shield,
} from "lucide-react";
import React, { useState } from "react";

// Type definitions
// interface Feature {
//   metric: string;
//   improvement: string;
// }

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  duration: string;
  popular: boolean;
  features: string[];
  technologies: string[];
  deliveryTime: string;
  revisions: string;
  support: string;
}

interface PricingPlans {
  project: PricingPlan[];
  hourly: PricingPlan[];
}

interface PricingSectionProps {
  className?: string;
}

// Icon component with proper typing
const Icon: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 16,
  className = "",
}) => {
  const iconMap: Record<string, LucideIcon> = {
    ArrowRight,
    Calendar,
    Calculator,
    CheckCircle,
    Shield,
    RefreshCw,
    Clock,
  };

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <div className={`w-${size} h-${size} ${className}`} />;
  }

  return <IconComponent size={size} className={className} />;
};

const PricingSection: React.FC<PricingSectionProps> = ({ className = "" }) => {
  const [billingCycle, setBillingCycle] = useState<"project" | "hourly">(
    "project"
  );

  const pricingPlans: PricingPlans = {
    project: [
      {
        name: "Startup Package",
        description:
          "Perfect for small businesses and startups looking to establish their online presence",
        price: "$15,000",
        duration: "2-3 months",
        popular: false,
        features: [
          "Custom React Frontend (5-8 pages)",
          "Responsive Design & Mobile Optimization",
          "Basic Backend API (Node.js/Express)",
          "Database Setup (PostgreSQL/MongoDB)",
          "User Authentication System",
          "Contact Forms & Basic Integrations",
          "SEO Optimization & Meta Tags",
          "SSL Certificate & Security Setup",
          "Basic Analytics Integration",
          "3 Months Post-Launch Support",
          "Source Code & Documentation",
          "Deployment to Cloud Platform",
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "AWS/Vercel"],
        deliveryTime: "8-12 weeks",
        revisions: "3 rounds",
        support: "3 months",
      },
      {
        name: "Business Package",
        description:
          "Comprehensive solution for growing businesses with advanced features and integrations",
        price: "$35,000",
        duration: "3-4 months",
        popular: true,
        features: [
          "Advanced React/Next.js Application (10-15 pages)",
          "Custom UI/UX Design & Branding",
          "Full-Stack Development (Frontend + Backend)",
          "Advanced Database Design & Optimization",
          "User Management & Role-Based Access",
          "Payment Gateway Integration (Stripe/PayPal)",
          "Third-Party API Integrations",
          "Real-time Features (WebSocket/Socket.io)",
          "Advanced Analytics & Reporting",
          "Admin Dashboard & Content Management",
          "Performance Optimization & Caching",
          "Comprehensive Testing & QA",
          "6 Months Post-Launch Support",
          "Training & Documentation",
        ],
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
        deliveryTime: "12-16 weeks",
        revisions: "5 rounds",
        support: "6 months",
      },
      {
        name: "Enterprise Package",
        description:
          "Full-scale enterprise solution with advanced architecture and comprehensive features",
        price: "$75,000",
        duration: "4-6 months",
        popular: false,
        features: [
          "Large-Scale React/Next.js Application (20+ pages)",
          "Custom Design System & Component Library",
          "Microservices Architecture",
          "Advanced Database Design & Scaling",
          "Multi-tenant Architecture Support",
          "Advanced Security & Compliance (GDPR/HIPAA)",
          "Multiple Payment Gateways & Billing",
          "Advanced Integrations (CRM/ERP/APIs)",
          "Real-time Collaboration Features",
          "Advanced Analytics & Business Intelligence",
          "Custom Admin Panel & Reporting",
          "Load Testing & Performance Optimization",
          "CI/CD Pipeline & DevOps Setup",
          "Comprehensive Documentation & Training",
          "12 Months Post-Launch Support",
          "Dedicated Project Manager",
        ],
        technologies: [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Kubernetes",
          "AWS",
        ],
        deliveryTime: "16-24 weeks",
        revisions: "Unlimited",
        support: "12 months",
      },
    ],
    hourly: [
      {
        name: "Frontend Development",
        description: "React/Next.js frontend development with modern UI/UX",
        price: "$85",
        duration: "per hour",
        popular: false,
        features: [
          "React 18 & Next.js Development",
          "Responsive Design Implementation",
          "Component-Based Architecture",
          "State Management (Redux/Zustand)",
          "Performance Optimization",
          "Cross-Browser Compatibility",
          "Accessibility Implementation",
          "Testing & Quality Assurance",
        ],
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        deliveryTime: "Flexible",
        revisions: "As needed",
        support: "During development",
      },
      {
        name: "Full-Stack Development",
        description: "Complete frontend and backend development services",
        price: "$120",
        duration: "per hour",
        popular: true,
        features: [
          "Frontend & Backend Development",
          "Database Design & Implementation",
          "API Development & Integration",
          "Authentication & Authorization",
          "Real-time Features Implementation",
          "Third-Party Service Integration",
          "Performance & Security Optimization",
          "Testing & Documentation",
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
        deliveryTime: "Flexible",
        revisions: "As needed",
        support: "During development",
      },
      {
        name: "Technical Consultation",
        description:
          "Expert guidance on architecture, technology choices, and best practices",
        price: "$150",
        duration: "per hour",
        popular: false,
        features: [
          "Architecture Planning & Review",
          "Technology Stack Recommendations",
          "Code Review & Optimization",
          "Performance Analysis & Improvement",
          "Security Assessment & Recommendations",
          "Scalability Planning",
          "Best Practices Implementation",
          "Team Training & Mentoring",
        ],
        technologies: ["Various based on project needs"],
        deliveryTime: "Immediate",
        revisions: "N/A",
        support: "Ongoing consultation",
      },
    ],
  };

  const currentPlans = pricingPlans[billingCycle];

  return (
    <section className={`py-20 bg-surface/50 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect package for your web development needs. All
            packages include source code, documentation, and post-launch
            support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-card rounded-xl p-1 shadow-sm border">
            <button
              onClick={() => setBillingCycle("project")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === "project"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setBillingCycle("hourly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === "hourly"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Hourly Rates
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative morphic-card p-8 ${
                plan.popular
                  ? "ring-2 ring-primary shadow-xl scale-105"
                  : "hover:shadow-lg"
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {billingCycle === "project" ? "" : plan.duration}
                  </span>
                </div>
                {billingCycle === "project" && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.duration} timeline
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plan Details */}
              <div className="mb-8 space-y-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Delivery Time:
                    </span>
                    <span className="font-medium text-foreground">
                      {plan.deliveryTime}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Revisions:</span>
                    <span className="font-medium text-foreground">
                      {plan.revisions}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Support:</span>
                    <span className="font-medium text-foreground">
                      {plan.support}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Technologies Included
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {plan.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                size="lg"
              >
                {billingCycle === "project" ? "Start Project" : "Get Started"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique. Contact us for a personalized quote based
              on your specific requirements, timeline, and budget
              considerations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="flex items-center justify-center">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Get Custom Quote
              </Button>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-green-500" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="RefreshCw" size={16} className="text-blue-500" />
              <span>Unlimited Revisions (Enterprise)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-orange-500" />
              <span>On-Time Delivery Promise</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
