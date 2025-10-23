import { motion } from "framer-motion";
import {
  Award,
  Banknote,
  BarChart3,
  Brain,
  Building,
  CheckCircle,
  Cloud,
  Code,
  Dot,
  GraduationCap,
  Heart,
  LucideIcon,
  Settings,
  Shield,
  ShoppingCart,
  Zap,
} from "lucide-react";
import React from "react";

// Type definitions
interface ExpertiseArea {
  category: string;
  icon: LucideIcon;
  color: string;
  specializations: string[];
}

interface IndustryExperience {
  industry: string;
  icon: LucideIcon;
  projects: string;
  highlights: string[];
}

interface Framework {
  name: string;
  description: string;
}

const ExpertiseAreas: React.FC = () => {
  const expertiseAreas: ExpertiseArea[] = [
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      color: "bg-blue-500",
      specializations: [
        "AWS, Azure, Google Cloud architecture",
        "Kubernetes and containerization",
        "Microservices design patterns",
        "DevOps and CI/CD implementation",
        "Infrastructure as Code (IaC)",
        "Cloud cost optimization",
      ],
    },
    {
      category: "Enterprise Architecture",
      icon: Building,
      color: "bg-purple-500",
      specializations: [
        "System integration strategies",
        "API design and management",
        "Data architecture planning",
        "Legacy system modernization",
        "Scalability and performance",
        "Security architecture review",
      ],
    },
    {
      category: "Digital Transformation",
      icon: Zap,
      color: "bg-orange-500",
      specializations: [
        "Digital strategy development",
        "Process automation design",
        "Technology adoption planning",
        "Change management guidance",
        "Innovation framework setup",
        "Digital culture transformation",
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "bg-green-500",
      specializations: [
        "AI strategy and roadmap",
        "ML model architecture",
        "Data pipeline design",
        "AI ethics and governance",
        "Automation opportunity analysis",
        "AI tool evaluation and selection",
      ],
    },
    {
      category: "Cybersecurity",
      icon: Shield,
      color: "bg-red-500",
      specializations: [
        "Security framework development",
        "Risk assessment and mitigation",
        "Compliance strategy (SOC2, GDPR)",
        "Zero-trust architecture",
        "Incident response planning",
        "Security tool evaluation",
      ],
    },
    {
      category: "Data & Analytics",
      icon: BarChart3,
      color: "bg-indigo-500",
      specializations: [
        "Data strategy and governance",
        "Analytics platform selection",
        "Business intelligence setup",
        "Data warehouse architecture",
        "Real-time analytics design",
        "Data privacy and compliance",
      ],
    },
  ];

  const industryExperience: IndustryExperience[] = [
    {
      industry: "Financial Services",
      icon: Banknote,
      projects: "150+",
      highlights: [
        "Regulatory compliance",
        "High-frequency trading systems",
        "Risk management platforms",
      ],
    },
    {
      industry: "Healthcare & Life Sciences",
      icon: Heart,
      projects: "120+",
      highlights: [
        "HIPAA compliance",
        "Electronic health records",
        "Telemedicine platforms",
      ],
    },
    {
      industry: "E-commerce & Retail",
      icon: ShoppingCart,
      projects: "200+",
      highlights: [
        "Omnichannel experiences",
        "Inventory management",
        "Customer analytics",
      ],
    },
    {
      industry: "Manufacturing & IoT",
      icon: Settings,
      projects: "80+",
      highlights: [
        "Industrial IoT",
        "Supply chain optimization",
        "Predictive maintenance",
      ],
    },
    {
      industry: "SaaS & Technology",
      icon: Code,
      projects: "300+",
      highlights: [
        "Multi-tenant architecture",
        "API platforms",
        "Developer tools",
      ],
    },
    {
      industry: "Education & EdTech",
      icon: GraduationCap,
      projects: "90+",
      highlights: [
        "Learning management systems",
        "Student analytics",
        "Remote learning platforms",
      ],
    },
  ];

  const frameworks: Framework[] = [
    { name: "TOGAF", description: "Enterprise Architecture" },
    { name: "COBIT", description: "IT Governance" },
    { name: "ITIL", description: "Service Management" },
    { name: "Agile/SAFe", description: "Delivery Framework" },
    { name: "NIST", description: "Cybersecurity" },
    { name: "ISO 27001", description: "Security Standards" },
    { name: "DevOps", description: "Development Operations" },
    { name: "Lean Six Sigma", description: "Process Optimization" },
  ];

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
              Deep Technical Expertise Across Domains
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our consultation team brings extensive experience across multiple
              technology domains and industry verticals to provide comprehensive
              strategic guidance.
            </p>
          </motion.div>

          {/* Technical Expertise */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Technical Specializations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas?.map((area: ExpertiseArea, index: number) => (
                <motion.div
                  key={area?.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="morphic-card p-6 group hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 ${area?.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon size={24} color="white" />
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary">
                      {area?.category}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {area?.specializations?.map(
                      (spec: string, specIndex: number) => (
                        <div
                          key={specIndex}
                          className="flex items-start space-x-2"
                        >
                          <Dot size={16} className="text-primary mt-1" />
                          <span className="text-sm text-muted-foreground">
                            {spec}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industry Experience */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Industry Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryExperience?.map(
                (industry: IndustryExperience, index: number) => (
                  <motion.div
                    key={industry?.industry}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="morphic-card p-6 group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <industry.icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary">
                            {industry?.industry}
                          </h4>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {industry?.projects}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Projects
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {industry?.highlights?.map(
                        (highlight: string, highlightIndex: number) => (
                          <div
                            key={highlightIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle size={14} className="text-success" />
                            <span className="text-sm text-muted-foreground">
                              {highlight}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Frameworks & Methodologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Strategic Frameworks & Methodologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {frameworks?.map((framework: Framework, index: number) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Award size={24} className="text-primary" />
                  </div>
                  <div className="font-semibold text-text-primary text-sm">
                    {framework?.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {framework?.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;
