import { motion } from "framer-motion";
import {
  Calendar,
  FileSearch,
  LucideIcon,
  MessageCircle,
  Presentation,
  Search,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

// Type definitions
interface PackagePrice {
  monthly: number;
  annual: number;
}

interface ServicePackage {
  id: string;
  name: string;
  description: string;
  type: "one-time" | "subscription" | "program";
  price: PackagePrice;
  duration: string;
  icon: LucideIcon;
  color: string;
  popular: boolean;
  features: string[];
  deliverables: string[];
  idealFor: string;
}

interface AddOn {
  name: string;
  description: string;
  price: number;
  icon: LucideIcon;
}

const ServicePackages: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  const packages: ServicePackage[] = [
    {
      id: "strategic-assessment",
      name: "Strategic Assessment",
      description:
        "Comprehensive one-time technology and business alignment evaluation",
      type: "one-time",
      price: { monthly: 15000, annual: 15000 },
      duration: "4-6 weeks",
      icon: Search,
      color: "bg-blue-500",
      popular: false,
      features: [
        "Current state technology assessment",
        "Business process analysis",
        "Gap analysis and recommendations",
        "Strategic roadmap development",
        "Executive presentation and workshop",
        "Detailed assessment report",
        "30-day follow-up consultation",
        "Priority email support",
      ],
      deliverables: [
        "Technology Assessment Report (50+ pages)",
        "Strategic Roadmap Document",
        "Executive Summary Presentation",
        "Implementation Priority Matrix",
      ],
      idealFor:
        "Organizations seeking initial strategic direction and technology evaluation",
    },
    {
      id: "ongoing-advisory",
      name: "Ongoing Advisory",
      description:
        "Continuous strategic technology guidance and implementation support",
      type: "subscription",
      price: { monthly: 8500, annual: 85000 },
      duration: "Monthly retainer",
      icon: Users,
      color: "bg-primary",
      popular: true,
      features: [
        "Monthly strategic consultation sessions",
        "Quarterly technology reviews",
        "Architecture and design guidance",
        "Vendor evaluation support",
        "Implementation oversight",
        "Team mentoring and training",
        "Priority phone and email support",
        "Access to technology frameworks",
      ],
      deliverables: [
        "Monthly Progress Reports",
        "Quarterly Strategic Reviews",
        "Architecture Guidelines",
        "Best Practices Documentation",
      ],
      idealFor:
        "Growing companies needing continuous strategic technology leadership",
    },
    {
      id: "transformation-program",
      name: "Transformation Program",
      description:
        "End-to-end digital transformation with dedicated team and full support",
      type: "program",
      price: { monthly: 25000, annual: 250000 },
      duration: "6-18 months",
      icon: Zap,
      color: "bg-purple-500",
      popular: false,
      features: [
        "Dedicated transformation team",
        "Weekly progress reviews",
        "Full implementation support",
        "Change management guidance",
        "Training and knowledge transfer",
        "Risk mitigation and quality assurance",
        "24/7 support during critical phases",
        "Post-implementation optimization",
      ],
      deliverables: [
        "Transformation Strategy Document",
        "Weekly Progress Reports",
        "Implementation Playbooks",
        "Training Materials and Sessions",
        "Success Metrics Dashboard",
      ],
      idealFor:
        "Enterprises undertaking major digital transformation initiatives",
    },
  ];

  const addOns: AddOn[] = [
    {
      name: "Executive Workshop",
      description: "On-site executive alignment and strategy workshop",
      price: 5000,
      icon: Presentation,
    },
    {
      name: "Technical Due Diligence",
      description: "Comprehensive technical assessment for M&A or investments",
      price: 12000,
      icon: FileSearch,
    },
    {
      name: "Vendor Selection Support",
      description: "End-to-end vendor evaluation and selection process",
      price: 8000,
      icon: FileSearch,
    },
    {
      name: "Compliance Assessment",
      description: "Security and regulatory compliance evaluation",
      price: 10000,
      icon: Shield,
    },
  ];

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 bg-surface">
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
              Consultation Service Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {`Choose the consultation approach that best fits your organization's needs, 
              from one-time assessments to comprehensive transformation programs.`}
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-background rounded-lg p-1 border border-border">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-text-primary"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  billingCycle === "annual"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-text-primary"
                }`}
              >
                Annual
                <span className="ml-1 text-xs bg-success text-white px-2 py-0.5 rounded-full">
                  Save 15%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Service Packages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages?.map((pkg: ServicePackage, index: number) => (
              <motion.div
                key={pkg?.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`morphic-card p-8 relative ${
                  pkg?.popular ? "ring-2 ring-primary shadow-xl" : ""
                }`}
              >
                {pkg?.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 ${pkg?.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <pkg.icon size={28} color="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {pkg?.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg?.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-text-primary">
                      {formatPrice(pkg?.price?.[billingCycle])}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {pkg?.type === "one-time"
                        ? "One-time fee"
                        : pkg?.type === "subscription"
                        ? `per ${billingCycle === "monthly" ? "month" : "year"}`
                        : "Program fee"}
                    </div>
                    <div className="text-xs text-primary font-medium mt-1">
                      {pkg?.duration}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-text-primary">
                    {`What's Included:`}
                  </h4>
                  <div className="space-y-3">
                    {pkg?.features?.map(
                      (feature: string, featureIndex: number) => (
                        <div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center mt-0.5">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-text-primary">
                    Key Deliverables:
                  </h4>
                  <div className="space-y-2">
                    {pkg?.deliverables?.map(
                      (deliverable: string, delIndex: number) => (
                        <div
                          key={delIndex}
                          className="flex items-start space-x-2"
                        >
                          <FileSearch
                            size={14}
                            className="text-primary mt-0.5"
                          />
                          <span className="text-xs text-muted-foreground">
                            {deliverable}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="bg-secondary/20 rounded-lg p-4 mb-6">
                  <h5 className="font-medium text-text-primary text-sm mb-2">
                    Ideal For:
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    {pkg?.idealFor}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                    pkg?.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "border border-border text-text-primary hover:bg-muted"
                  }`}
                >
                  {pkg?.type === "one-time"
                    ? "Start Assessment"
                    : pkg?.type === "subscription"
                    ? "Begin Advisory"
                    : "Launch Program"}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns?.map((addon: AddOn, index: number) => (
                <div
                  key={index}
                  className="morphic-card p-6 text-center group hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <addon.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {addon?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {addon?.description}
                  </p>
                  <div className="text-2xl font-bold text-primary mb-4">
                    {formatPrice(addon?.price)}
                  </div>
                  <button className="w-full py-2 border border-border text-text-primary rounded-lg font-medium hover:bg-muted transition-colors duration-300">
                    Add Service
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Custom Consultation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Need a Custom Consultation Package?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {`Every organization has unique challenges. Let's discuss a tailored
              consultation approach that perfectly fits your specific needs and
              objectives.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center">
                <Calendar size={20} className="mr-2" />
                Schedule Custom Consultation
              </button>
              <button className="px-8 py-3 border border-border text-text-primary rounded-lg font-medium hover:bg-muted transition-colors duration-300 flex items-center justify-center">
                <MessageCircle size={20} className="mr-2" />
                Discuss Requirements
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
