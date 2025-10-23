import { motion } from "framer-motion";
import { CheckCircle, Download, Layout, MessageCircle } from "lucide-react";
import React from "react";

// --- Data Types ---
type Service = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
};

const ServiceBreakdown = () => {
  const services: Service[] = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Modern, responsive user interfaces built with React, Next.js, and cutting-edge CSS frameworks.",
      features: [
        "React 18 & Next.js Applications",
        "Responsive Design & Mobile-First",
        "Progressive Web Apps (PWA)",
        "Component-Based Architecture",
        "State Management (Redux/Zustand)",
        "Performance Optimization",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    // ... other services
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
            Comprehensive Web Development Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From frontend interfaces to backend infrastructure, we deliver
            complete web solutions that drive business growth and user
            engagement.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="morphic-card p-8 group hover:shadow-lg transition-all duration-300"
            >
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-text-primary mb-3 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Ready to Build Your Web Application?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {`Let's discuss your project requirements and create a custom
              solution that meets your business objectives and technical
              specifications.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Start Your Project</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download Brochure</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBreakdown;
