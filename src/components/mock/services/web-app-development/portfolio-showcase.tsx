import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Download,
  ExternalLink,
  FileText,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// TypeScript interfaces
interface PortfolioMetrics {
  users: string;
  performance: string;
  uptime: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  features: string[];
  metrics: PortfolioMetrics;
  liveUrl: string;
  caseStudyUrl: string;
}

interface Filter {
  key: string;
  label: string;
  count: number;
}

interface PortfolioShowcaseProps {
  projects: Project[];
}

export default function PortfolioShowcase({
  projects,
}: PortfolioShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters: Filter[] = [
    { key: "all", label: "All Projects", count: projects?.length },
    {
      key: "ecommerce",
      label: "E-Commerce",
      count: projects?.filter((item) => item?.category === "ecommerce")?.length,
    },
    {
      key: "healthcare",
      label: "Healthcare",
      count: projects?.filter((item) => item?.category === "healthcare")
        ?.length,
    },
    {
      key: "fintech",
      label: "FinTech",
      count: projects?.filter((item) => item?.category === "fintech")?.length,
    },
    {
      key: "education",
      label: "Education",
      count: projects?.filter((item) => item?.category === "education")?.length,
    },
    {
      key: "productivity",
      label: "Productivity",
      count: projects?.filter((item) => item?.category === "productivity")
        ?.length,
    },
    {
      key: "realestate",
      label: "Real Estate",
      count: projects?.filter((item) => item?.category === "realestate")
        ?.length,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? projects
      : projects?.filter((item) => item?.category === activeFilter);

  return (
    <section className="py-20 bg-surface/50">
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
            Our Portfolio Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our successful web application projects across various
            industries, showcasing our expertise in delivering scalable and
            user-friendly solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters?.map((filter) => (
            <button
              key={filter?.key}
              onClick={() => setActiveFilter(filter?.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeFilter === filter?.key
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-muted-foreground hover:text-text-primary hover:bg-muted/50 border border-border"
              }`}
            >
              <span>{filter?.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === filter?.key
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {filter?.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems?.map((item, index) => (
            <motion.div
              key={item?.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="morphic-card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item?.imageAlt}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-xs font-medium text-text-primary capitalize">
                    {item?.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {item?.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item?.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {item?.technologies?.slice(0, 4)?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {item?.technologies?.length > 4 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{item?.technologies?.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-text-primary mb-2">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {item?.features
                      ?.slice(0, 4)
                      ?.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-1"
                        >
                          <CheckCircle
                            size={12}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span className="text-xs text-muted-foreground truncate">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-border">
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">
                      {item?.metrics?.users}
                    </div>
                    <div className="text-xs text-muted-foreground">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">
                      {item?.metrics?.performance}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Performance
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-primary">
                      {item?.metrics?.uptime}
                    </div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <FileText size={16} className="mr-2" />
                    Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {`Let's discuss how we can bring your web application idea to life
              with our proven development process and cutting-edge technology
              stack.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                <MessageCircle size={20} className="mr-2" />
                Discuss Your Project
              </Button>
              <Button variant="outline" size="lg">
                <Download size={20} className="mr-2" />
                Download Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
