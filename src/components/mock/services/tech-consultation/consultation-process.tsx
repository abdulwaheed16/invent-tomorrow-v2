import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building,
  Check,
  CheckSquare,
  ChevronDown,
  FileText,
  Headphones,
  LucideIcon,
  PenTool,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import React from "react";

// Type definitions
interface ProcessStep {
  phase: string;
  duration: string;
  icon: LucideIcon;
  color: string;
  activities: string[];
  deliverables: string[];
}

interface Methodology {
  name: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ConsultationProcess: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      phase: "Discovery & Assessment",
      duration: "1-2 weeks",
      icon: Search,
      color: "bg-blue-500",
      activities: [
        "Stakeholder interviews and requirements gathering",
        "Current state technology assessment",
        "Business process analysis and documentation",
        "Pain point identification and prioritization",
        "Competitive landscape analysis",
      ],
      deliverables: [
        "Current state assessment report",
        "Stakeholder requirements matrix",
        "Technology inventory documentation",
        "Gap analysis summary",
      ],
    },
    {
      phase: "Analysis & Strategy Development",
      duration: "2-3 weeks",
      icon: Target,
      color: "bg-purple-500",
      activities: [
        "Technology architecture review and optimization",
        "Strategic roadmap development and prioritization",
        "Risk assessment and mitigation planning",
        "Cost-benefit analysis for recommended solutions",
        "Implementation timeline and resource planning",
      ],
      deliverables: [
        "Strategic technology roadmap",
        "Architecture optimization plan",
        "Risk mitigation framework",
        "Investment priority matrix",
      ],
    },
    {
      phase: "Solution Design & Planning",
      duration: "1-2 weeks",
      icon: PenTool,
      color: "bg-green-500",
      activities: [
        "Detailed solution architecture design",
        "Implementation methodology selection",
        "Vendor evaluation and recommendation",
        "Change management strategy development",
        "Success metrics and KPI definition",
      ],
      deliverables: [
        "Solution architecture blueprint",
        "Implementation methodology guide",
        "Vendor recommendation report",
        "Change management plan",
      ],
    },
    {
      phase: "Implementation Guidance",
      duration: "4-12 weeks",
      icon: Settings,
      color: "bg-orange-500",
      activities: [
        "Project kickoff and team alignment",
        "Technical guidance and oversight",
        "Progress monitoring and course correction",
        "Quality assurance and testing support",
        "Knowledge transfer and training",
      ],
      deliverables: [
        "Implementation progress reports",
        "Technical guidance documentation",
        "Quality assurance checklists",
        "Training materials and sessions",
      ],
    },
    {
      phase: "Optimization & Support",
      duration: "Ongoing",
      icon: TrendingUp,
      color: "bg-indigo-500",
      activities: [
        "Performance monitoring and optimization",
        "Continuous improvement recommendations",
        "Technology updates and maintenance guidance",
        "Strategic advisory and future planning",
        "Success measurement and reporting",
      ],
      deliverables: [
        "Performance optimization reports",
        "Continuous improvement roadmap",
        "Technology update recommendations",
        "Success metrics dashboard",
      ],
    },
  ];

  const methodologies: Methodology[] = [
    {
      name: "Agile Consultation",
      description:
        "Iterative approach with regular feedback loops and adaptive planning",
      icon: Zap,
      benefits: [
        "Faster time to value",
        "Continuous stakeholder engagement",
        "Adaptive to changing requirements",
      ],
    },
    {
      name: "Enterprise Framework",
      description:
        "Structured approach using proven enterprise architecture methodologies",
      icon: Building,
      benefits: [
        "Comprehensive coverage",
        "Industry best practices",
        "Scalable solutions",
      ],
    },
    {
      name: "Lean Consulting",
      description: "Focused on eliminating waste and maximizing value delivery",
      icon: Target,
      benefits: [
        "Cost optimization",
        "Streamlined processes",
        "Quick wins identification",
      ],
    },
  ];

  const benefits: Benefit[] = [
    {
      title: "Structured Approach",
      description: "Proven methodology with clear phases and deliverables",
      icon: CheckSquare,
    },
    {
      title: "Stakeholder Alignment",
      description: "Regular communication and feedback throughout the process",
      icon: Users,
    },
    {
      title: "Measurable Outcomes",
      description: "Clear success metrics and progress tracking",
      icon: BarChart3,
    },
    {
      title: "Continuous Support",
      description: "Ongoing guidance and optimization recommendations",
      icon: Headphones,
    },
  ];

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
              Proven Consultation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures comprehensive analysis, strategic
              planning, and successful implementation of technology initiatives.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="mb-16">
            <div className="space-y-8">
              {processSteps?.map((step: ProcessStep, index: number) => (
                <motion.div
                  key={step?.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="morphic-card p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Phase Header */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div
                            className={`w-16 h-16 ${step?.color} rounded-xl flex items-center justify-center`}
                          >
                            <step.icon size={28} color="white" />
                          </div>
                          <div>
                            <div className="text-sm text-primary font-medium">
                              Phase {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-text-primary">
                              {step?.phase}
                            </h3>
                            <div className="text-sm text-muted-foreground">
                              Duration: {step?.duration}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Activities */}
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-text-primary mb-3">
                          Key Activities
                        </h4>
                        <div className="space-y-2">
                          {step?.activities?.map(
                            (activity: string, actIndex: number) => (
                              <div
                                key={actIndex}
                                className="flex items-start space-x-2"
                              >
                                <ArrowRight
                                  size={16}
                                  className="text-primary mt-0.5"
                                />
                                <span className="text-sm text-muted-foreground">
                                  {activity}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-text-primary mb-3">
                          Key Deliverables
                        </h4>
                        <div className="space-y-2">
                          {step?.deliverables?.map(
                            (deliverable: string, delIndex: number) => (
                              <div
                                key={delIndex}
                                className="flex items-start space-x-2"
                              >
                                <FileText
                                  size={16}
                                  className="text-success mt-0.5"
                                />
                                <span className="text-sm text-muted-foreground">
                                  {deliverable}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < processSteps?.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <div className="w-px h-8 bg-border"></div>
                      <ChevronDown
                        size={20}
                        className="text-primary -ml-2.5 bg-background"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Consultation Methodologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Consultation Methodologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {methodologies?.map((methodology: Methodology, index: number) => (
                <div
                  key={index}
                  className="morphic-card p-6 text-center group hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <methodology.icon size={28} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {methodology?.name}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {methodology?.description}
                  </p>
                  <div className="space-y-2">
                    {methodology?.benefits?.map(
                      (benefit: string, benefitIndex: number) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center justify-center space-x-2"
                        >
                          <Check size={14} className="text-success" />
                          <span className="text-xs text-muted-foreground">
                            {benefit}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Why Our Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits?.map((benefit: Benefit, index: number) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {benefit?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit?.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
