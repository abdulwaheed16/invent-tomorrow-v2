import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  FileText,
  GitBranch,
  Globe,
  LucideIcon,
  Monitor,
  Package,
  Palette,
  Server,
  Settings,
  Shield,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

// Type definitions
// interface TechFeature {
//   metric: string;
//   improvement: string;
// }

interface Technology {
  name: string;
  description: string;
  icon: string;
  popularity: number;
  features: string[];
}

interface TechCategory {
  title: string;
  description: string;
  technologies: Technology[];
}

interface TechCategories {
  frontend: TechCategory;
  backend: TechCategory;
  cloud: TechCategory;
}

interface Category {
  key: string;
  label: string;
  icon: string;
}

interface TechnologyStackProps {
  className?: string;
}

// Icon component with proper typing
const Icon: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 16,
  className = "",
}) => {
  const iconMap: Record<string, LucideIcon> = {
    Monitor,
    Server,
    Cloud,
    Zap,
    Shield,
    Palette,
    Globe,
    Database,
    FileText,
    Package,
    Settings,
    GitBranch,
  };

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <div className={`w-${size} h-${size} ${className}`} />;
  }

  return <IconComponent size={size} className={className} />;
};

const TechnologyStack: React.FC<TechnologyStackProps> = ({
  className = "",
}) => {
  const [activeCategory, setActiveCategory] = useState<
    "frontend" | "backend" | "cloud"
  >("frontend");

  const techCategories: TechCategories = {
    frontend: {
      title: "Frontend Technologies",
      description:
        "Modern frameworks and libraries for exceptional user experiences",
      technologies: [
        {
          name: "React 18",
          description:
            "Latest React with concurrent features and improved performance",
          icon: "Zap",
          popularity: 95,
          features: [
            "Hooks",
            "Concurrent Mode",
            "Suspense",
            "Server Components",
          ],
        },
        {
          name: "Next.js 14",
          description:
            "Full-stack React framework with App Router and server actions",
          icon: "Globe",
          popularity: 90,
          features: [
            "App Router",
            "Server Actions",
            "Edge Runtime",
            "Image Optimization",
          ],
        },
        {
          name: "TypeScript",
          description: "Type-safe JavaScript for better development experience",
          icon: "Shield",
          popularity: 88,
          features: [
            "Type Safety",
            "IntelliSense",
            "Refactoring",
            "Error Prevention",
          ],
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development",
          icon: "Palette",
          popularity: 85,
          features: [
            "Utility Classes",
            "Responsive Design",
            "Dark Mode",
            "Custom Themes",
          ],
        },
      ],
    },
    backend: {
      title: "Backend Technologies",
      description: "Robust server-side solutions and database management",
      technologies: [
        {
          name: "Node.js",
          description:
            "JavaScript runtime for scalable server-side applications",
          icon: "Server",
          popularity: 92,
          features: [
            "Event-Driven",
            "Non-Blocking I/O",
            "NPM Ecosystem",
            "Cross-Platform",
          ],
        },
        {
          name: "Express.js",
          description: "Fast, unopinionated web framework for Node.js",
          icon: "Zap",
          popularity: 89,
          features: [
            "Middleware",
            "Routing",
            "Template Engines",
            "Error Handling",
          ],
        },
        {
          name: "PostgreSQL",
          description: "Advanced open-source relational database system",
          icon: "Database",
          popularity: 87,
          features: [
            "ACID Compliance",
            "JSON Support",
            "Full-Text Search",
            "Extensibility",
          ],
        },
        {
          name: "MongoDB",
          description: "NoSQL document database for flexible data storage",
          icon: "FileText",
          popularity: 84,
          features: [
            "Document Store",
            "Horizontal Scaling",
            "Aggregation",
            "GridFS",
          ],
        },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      description: "Modern deployment and infrastructure management solutions",
      technologies: [
        {
          name: "AWS",
          description: "Comprehensive cloud computing platform and services",
          icon: "Cloud",
          popularity: 94,
          features: ["EC2", "S3", "Lambda", "RDS", "CloudFront", "API Gateway"],
        },
        {
          name: "Docker",
          description: "Containerization platform for consistent deployments",
          icon: "Package",
          popularity: 91,
          features: [
            "Containerization",
            "Image Management",
            "Multi-Stage Builds",
            "Compose",
          ],
        },
        {
          name: "Kubernetes",
          description: "Container orchestration for scalable applications",
          icon: "Settings",
          popularity: 86,
          features: [
            "Auto-Scaling",
            "Load Balancing",
            "Service Discovery",
            "Rolling Updates",
          ],
        },
        {
          name: "GitHub Actions",
          description: "CI/CD platform for automated workflows",
          icon: "GitBranch",
          popularity: 88,
          features: [
            "Workflow Automation",
            "Matrix Builds",
            "Secrets Management",
            "Marketplace",
          ],
        },
      ],
    },
  };

  const categories: Category[] = [
    { key: "frontend", label: "Frontend", icon: "Monitor" },
    { key: "backend", label: "Backend", icon: "Server" },
    { key: "cloud", label: "Cloud & DevOps", icon: "Cloud" },
  ];

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
            Our Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to build
            scalable, maintainable, and high-performance web applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="bg-card rounded-xl p-2 shadow-sm border inline-flex">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() =>
                  setActiveCategory(
                    category.key as "frontend" | "backend" | "cloud"
                  )
                }
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon name={category.icon} size={18} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Technology Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              {techCategories[activeCategory].title}
            </h3>
            <p className="text-muted-foreground">
              {techCategories[activeCategory].description}
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories[activeCategory].technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="morphic-card p-6 group hover:shadow-lg transition-all duration-300"
              >
                {/* Tech Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon
                        name={tech.icon}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {tech.name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${tech.popularity}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {tech.popularity}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {tech.description}
                </p>

                {/* Features */}
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-2">
                    Key Features
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Technologies Mastered" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "24/7", label: "Technical Support" },
            { number: "5 Years", label: "Average Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
