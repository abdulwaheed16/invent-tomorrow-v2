import { motion } from "framer-motion";
import {
  Building,
  CheckCircle,
  FileText,
  Search,
  Target,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

// Type definitions
interface ConsultationService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  benefits: string[];
  deliverables: string[];
}

interface TimelineItem {
  label: string;
  value: string;
}

const ServiceBreakdown: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);

  const consultationServices: ConsultationService[] = [
    {
      id: "architecture-review",
      title: "Architecture Review & Assessment",
      description:
        "Comprehensive evaluation of your current technology architecture, identifying bottlenecks, security vulnerabilities, and optimization opportunities.",
      icon: Building,
      benefits: [
        "Performance optimization recommendations",
        "Security vulnerability assessment",
        "Scalability roadmap development",
        "Cost reduction strategies",
        "Technology debt analysis",
      ],
      deliverables: [
        "Detailed architecture assessment report",
        "Performance optimization plan",
        "Security enhancement recommendations",
        "Technology modernization roadmap",
      ],
    },
    {
      id: "technology-strategy",
      title: "Technology Strategy & Planning",
      description:
        "Strategic technology planning aligned with business objectives, helping you make informed decisions about technology investments and digital initiatives.",
      icon: Target,
      benefits: [
        "Business-aligned technology roadmap",
        "Investment prioritization framework",
        "Risk mitigation strategies",
        "Competitive advantage identification",
        "ROI optimization planning",
      ],
      deliverables: [
        "Strategic technology roadmap",
        "Investment priority matrix",
        "Risk assessment framework",
        "Technology governance guidelines",
      ],
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation Guidance",
      description:
        "End-to-end digital transformation consulting, from strategy development to implementation guidance, ensuring successful organizational change.",
      icon: Zap,
      benefits: [
        "Transformation strategy development",
        "Change management support",
        "Process optimization guidance",
        "Technology integration planning",
        "Success metrics definition",
      ],
      deliverables: [
        "Digital transformation strategy",
        "Implementation timeline",
        "Change management plan",
        "Success measurement framework",
      ],
    },
    {
      id: "vendor-evaluation",
      title: "Vendor & Technology Evaluation",
      description:
        "Objective evaluation of technology vendors, platforms, and solutions to help you make the best choices for your specific requirements.",
      icon: Search,
      benefits: [
        "Unbiased vendor comparisons",
        "Technical due diligence",
        "Cost-benefit analysis",
        "Integration assessment",
        "Contract negotiation support",
      ],
      deliverables: [
        "Vendor evaluation matrix",
        "Technical assessment reports",
        "Cost analysis comparison",
        "Implementation recommendations",
      ],
    },
  ];

  const timeline: TimelineItem[] = [
    { label: "Initial Assessment", value: "1-2 weeks" },
    { label: "Analysis & Planning", value: "2-3 weeks" },
    { label: "Report & Recommendations", value: "1 week" },
  ];

  const ActiveIcon = consultationServices[activeService].icon;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Comprehensive Consultation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic technology guidance across all aspects of your digital
              transformation journey, from architecture assessment to
              implementation planning.
            </p>
          </motion.div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {consultationServices?.map(
              (service: ConsultationService, index: number) => {
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={service?.id}
                    onClick={() => setActiveService(index)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeService === index
                        ? "bg-primary text-white shadow-lg"
                        : "bg-surface text-muted-foreground hover:bg-muted hover:text-text-primary"
                    }`}
                  >
                    <ServiceIcon
                      size={20}
                      //   color={activeService === index ? "white" : "currentColor"}
                    />
                    <span className="hidden sm:inline">{service?.title}</span>
                    <span className="sm:hidden">
                      {service?.title?.split(" ")?.[0]}
                    </span>
                  </button>
                );
              }
            )}
          </div>

          {/* Active Service Details */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="morphic-card p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <ActiveIcon size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">
                      {consultationServices?.[activeService]?.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {consultationServices?.[activeService]?.description}
                </p>

                {/* Key Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">
                    Key Benefits
                  </h4>
                  <div className="space-y-3">
                    {consultationServices?.[activeService]?.benefits?.map(
                      (benefit: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle
                            size={20}
                            className="text-success mt-0.5"
                          />
                          <span className="text-muted-foreground">
                            {benefit}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">
                    Key Deliverables
                  </h4>
                  <div className="space-y-4">
                    {consultationServices?.[activeService]?.deliverables?.map(
                      (deliverable: string, index: number) => (
                        <div
                          key={index}
                          className="bg-surface rounded-lg p-4 border-l-4 border-primary"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText size={20} className="text-primary" />
                            <span className="font-medium text-text-primary">
                              {deliverable}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4">
                    Typical Timeline
                  </h4>
                  <div className="space-y-3">
                    {timeline?.map((item: TimelineItem, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-muted-foreground">
                          {item?.label}
                        </span>
                        <span className="text-primary font-medium">
                          {item?.value}
                        </span>
                      </div>
                    ))}
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-text-primary">
                          Total Duration
                        </span>
                        <span className="text-primary">4-6 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBreakdown;
