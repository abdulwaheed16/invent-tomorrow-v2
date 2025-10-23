import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckSquare,
  Clock,
  Code,
  FileText,
  MessageCircle,
  Package,
  Palette,
  Rocket,
  Search,
  Settings,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import React from "react";

// --- Data Types ---
type Activity = string;
type Deliverable = string;
type Benefit = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

type ProcessStep = {
  phase: string;
  duration: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  description: string;
  activities: Activity[];
  deliverables: Deliverable[];
};

const DevelopmentProcess = () => {
  const processSteps: ProcessStep[] = [
    {
      phase: "Discovery & Planning",
      duration: "1-2 weeks",
      icon: Search,
      color: "bg-blue-500",
      description:
        "Understanding your requirements, target audience, and business objectives to create a comprehensive project roadmap.",
      activities: [
        "Stakeholder interviews and requirement gathering",
        "Technical feasibility analysis and architecture planning",
        "User research and persona development",
        "Project timeline and milestone definition",
        "Technology stack selection and justification",
      ],
      deliverables: [
        "Project Specification Document",
        "Technical Architecture",
        "Project Timeline",
        "Resource Allocation Plan",
      ],
    },
    {
      phase: "Design & Prototyping",
      duration: "2-3 weeks",
      icon: Palette,
      color: "bg-purple-500",
      description:
        "Creating intuitive user experiences and visual designs that align with your brand and user expectations.",
      activities: [
        "Wireframing and user flow mapping",
        "UI/UX design and visual identity creation",
        "Interactive prototype development",
        "Design system and component library setup",
        "Accessibility and responsive design planning",
      ],
      deliverables: [
        "Wireframes & Mockups",
        "Interactive Prototype",
        "Design System",
        "Style Guide",
      ],
    },
    {
      phase: "Development & Integration",
      duration: "4-8 weeks",
      icon: Code,
      color: "bg-green-500",
      description:
        "Building your application with clean, scalable code and integrating all necessary features and third-party services.",
      activities: [
        "Frontend development with React/Next.js",
        "Backend API development and database setup",
        "Third-party service integrations",
        "Authentication and security implementation",
        "Performance optimization and code review",
      ],
      deliverables: [
        "Frontend Application",
        "Backend APIs",
        "Database Schema",
        "Integration Documentation",
      ],
    },
    {
      phase: "Testing & Quality Assurance",
      duration: "1-2 weeks",
      icon: Shield,
      color: "bg-orange-500",
      description:
        "Comprehensive testing to ensure your application is bug-free, secure, and performs optimally across all devices.",
      activities: [
        "Unit testing and integration testing",
        "Cross-browser and device compatibility testing",
        "Performance and load testing",
        "Security vulnerability assessment",
        "User acceptance testing coordination",
      ],
      deliverables: [
        "Test Reports",
        "Performance Metrics",
        "Security Audit",
        "Bug Fix Documentation",
      ],
    },
    {
      phase: "Deployment & Launch",
      duration: "1 week",
      icon: Rocket,
      color: "bg-red-500",
      description:
        "Deploying your application to production with proper monitoring, analytics, and support systems in place.",
      activities: [
        "Production environment setup and configuration",
        "CI/CD pipeline implementation",
        "Monitoring and analytics integration",
        "DNS configuration and SSL certificate setup",
        "Go-live support and initial monitoring",
      ],
      deliverables: [
        "Live Application",
        "Deployment Guide",
        "Monitoring Dashboard",
        "Launch Report",
      ],
    },
    {
      phase: "Maintenance & Support",
      duration: "Ongoing",
      icon: Settings,
      color: "bg-indigo-500",
      description:
        "Continuous support, updates, and enhancements to keep your application running smoothly and up-to-date.",
      activities: [
        "Regular security updates and patches",
        "Performance monitoring and optimization",
        "Feature enhancements and new functionality",
        "Technical support and issue resolution",
        "Backup management and disaster recovery",
      ],
      deliverables: [
        "Monthly Reports",
        "Update Releases",
        "Support Documentation",
        "Performance Analytics",
      ],
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: Target,
      title: "Clear Milestones",
      description:
        "Well-defined phases with specific deliverables and success criteria",
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description:
        "Regular updates, progress reports, and stakeholder involvement",
    },
    {
      icon: Zap,
      title: "Agile Methodology",
      description:
        "Flexible approach that adapts to changing requirements and feedback",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from
            concept to launch, with clear milestones and transparent
            communication throughout.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps?.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-primary rounded-full hidden lg:block"></div>

                {/* Content Card */}
                <div className="lg:ml-20">
                  <div className="morphic-card p-8 hover:shadow-lg transition-all duration-300">
                    {/* Step Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <div
                          className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center`}
                        >
                          <step.icon size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text-primary">
                            {step.phase}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock
                              size={16}
                              className="text-muted-foreground"
                            />
                            <span className="text-sm text-muted-foreground">
                              {step.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Activities and Deliverables */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Activities */}
                      <div>
                        <h4 className="text-sm font-medium text-text-primary mb-3 uppercase tracking-wide flex items-center">
                          <CheckSquare
                            size={16}
                            className="mr-2 text-primary"
                          />
                          Key Activities
                        </h4>
                        <ul className="space-y-2">
                          {step.activities.map((activity, activityIndex) => (
                            <li
                              key={activityIndex}
                              className="flex items-start space-x-2"
                            >
                              <ArrowRight
                                size={14}
                                className="text-muted-foreground mt-0.5 flex-shrink-0"
                              />
                              <span className="text-sm text-muted-foreground">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-sm font-medium text-text-primary mb-3 uppercase tracking-wide flex items-center">
                          <Package size={16} className="mr-2 text-primary" />
                          Deliverables
                        </h4>
                        <div className="space-y-2">
                          {step.deliverables.map(
                            (deliverable, deliverableIndex) => (
                              <div
                                key={deliverableIndex}
                                className="flex items-center space-x-2"
                              >
                                <FileText
                                  size={14}
                                  className="text-primary flex-shrink-0"
                                />
                                <span className="text-sm text-text-primary font-medium">
                                  {deliverable}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
            Why Our Process Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
