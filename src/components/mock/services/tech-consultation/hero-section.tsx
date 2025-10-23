import { motion } from "framer-motion";
import { Calendar, FileText, Target, TrendingUp, Users } from "lucide-react";
import React from "react";

// Type definitions
interface Metric {
  value: string;
  label: string;
}

const HeroSection: React.FC = () => {
  const metrics: Metric[] = [
    { value: "500+", label: "Strategic Projects" },
    { value: "98%", label: "Success Rate" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Users size={24} color="white" />
                  </div>
                  <span className="text-primary font-semibold text-lg">
                    Strategic Technology Advisory
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                  Transform Your Business with
                  <span className="text-primary">
                    {" "}
                    Expert Tech Consultation
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Navigate digital transformation with confidence. Our strategic
                  technology consultation services help CTOs and executives make
                  informed decisions, optimize architecture, and accelerate
                  business growth through technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center">
                  <Calendar size={20} className="mr-2" />
                  Schedule Strategic Session
                </button>
                <button className="px-8 py-3 border border-border text-text-primary rounded-lg font-medium hover:bg-muted transition-colors duration-300 flex items-center justify-center">
                  <FileText size={20} className="mr-2" />
                  Download Framework Guide
                </button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {metrics?.map((metric: Metric, index: number) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {metric?.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric?.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-text-primary">
                      Strategic Assessment
                    </h3>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
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
                      <span className="text-muted-foreground">
                        Architecture Review Complete
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
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
                      <span className="text-muted-foreground">
                        Technology Stack Analysis
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-warning flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">
                        Digital Transformation Roadmap
                      </span>
                    </div>
                  </div>

                  <div className="bg-secondary/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-primary">
                        Project Progress
                      </span>
                      <span className="text-sm text-primary">75%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp size={24} color="white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-success rounded-full flex items-center justify-center shadow-lg">
                <Target size={20} color="white" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
