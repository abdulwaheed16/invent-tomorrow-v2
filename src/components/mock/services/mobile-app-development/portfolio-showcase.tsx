import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BookOpen,
  Check,
  CheckSquare,
  Coffee,
  DollarSign,
  Download,
  ExternalLink,
  Grid3X3,
  Heart,
  MessageCircle,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// TypeScript interfaces
interface Project {
  id: number;
  title: string;
  category: string;
  platform: string;
  description: string;
  image: string;
  imageAlt: string;
  downloads: string;
  rating: number;
  appStoreUrl: string;
  playStoreUrl: string;
  technologies: string[];
  features: string[];
}

interface Category {
  key: string;
  label: string;
  icon: React.ElementType;
}

interface PortfolioShowcaseProps {
  projects: Project[];
}

export default function PortfolioShowcase({
  projects,
}: PortfolioShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories: Category[] = [
    { key: "all", label: "All Apps", icon: Grid3X3 },
    { key: "health", label: "Health & Fitness", icon: Heart },
    { key: "ecommerce", label: "E-commerce", icon: ShoppingCart },
    { key: "education", label: "Education", icon: BookOpen },
    { key: "productivity", label: "Productivity", icon: CheckSquare },
    { key: "food", label: "Food & Delivery", icon: Coffee },
    { key: "finance", label: "Finance", icon: DollarSign },
  ];

  const filteredApps =
    selectedCategory === "all"
      ? projects
      : projects?.filter((app) => app?.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Our Mobile App Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our successful mobile applications across various
              industries. Each app showcases our expertise in creating engaging
              user experiences and robust functionality.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.key}
              onClick={() => setSelectedCategory(category?.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category?.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <category.icon size={16} />
              <span className="text-sm">{category?.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredApps?.map((app, index) => (
            <motion.div
              key={app?.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="morphic-card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* App Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={app?.image}
                  alt={app?.imageAlt}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Platform Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 text-text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {app?.platform}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-background/90 px-2 py-1 rounded-full">
                  <Star size={12} className="text-yellow-500 fill-current" />
                  <span className="text-xs font-medium text-text-primary">
                    {app?.rating}
                  </span>
                </div>
              </div>

              {/* App Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {app?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {app?.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {app?.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-text-primary">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {app?.features
                      ?.slice(0, 4)
                      ?.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-1"
                        >
                          <Check
                            size={12}
                            className="text-success flex-shrink-0"
                          />
                          <span className="text-xs text-muted-foreground truncate">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Stats & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Download size={14} className="text-muted-foreground" />
                      <span className="text-sm font-medium text-text-primary">
                        {app?.downloads}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <ExternalLink size={14} />
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Build Your Mobile App?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {`Join our portfolio of successful mobile applications. Let's
              discuss your project and create an app that stands out in the app
              stores.`}
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
