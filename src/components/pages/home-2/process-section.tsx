"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  LucideIcon,
  Rocket,
  Search,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "./animations";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      step: 1,
      title: "Discover the Bottlenecks",
      description:
        "We document every workflow, find the wasted time, and identify high-leverage automation opportunities.",
      icon: Search,
      details: [
        "Comprehensive workflow analysis",
        "Time-waste identification",
        "Automation opportunity mapping",
        "ROI potential assessment",
      ],
    },
    {
      step: 2,
      title: "Engineer the System",
      description:
        "We build automations, AI agents, and integrations tailored to your business requirements.",
      icon: Settings,
      details: [
        "Custom automation development",
        "AI agent implementation",
        "System integration",
        "Quality assurance testing",
      ],
    },
    {
      step: 3,
      title: "Deploy & Scale",
      description:
        "We ship production-ready systems that remove work from your team.",
      icon: Rocket,
      details: [
        "Production deployment",
        "Team training & onboarding",
        "Performance monitoring",
        "Continuous optimization",
      ],
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="w-full px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4"
            >
              <Settings className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                How We Work
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Process
            </motion.h2>
          </motion.div>

          {/* Ultra Smooth Horizontal Accordion */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={index}
                  layout
                  initial={false}
                  animate={{
                    flex: isActive ? "2 1 0%" : "1 1 0%",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onClick={() => setActiveStep(index)}
                  className={`relative rounded-3xl overflow-hidden shadow-xl transition-all ${
                    isActive
                      ? "bg-gradient-to-br from-blue-600 to-blue-500"
                      : "bg-white border-2 border-gray-200 hover:border-blue-300"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <div className="relative h-full min-h-[420px] p-8 flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                            isActive
                              ? "bg-white/20 backdrop-blur-sm"
                              : "bg-blue-600"
                          }`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div
                          className={`text-5xl font-bold ${
                            isActive ? "text-white/30" : "text-blue-600/20"
                          }`}
                        >
                          0{step.step}
                        </div>
                      </div>

                      <h3
                        className={`text-2xl font-bold mb-4 ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`text-base leading-relaxed ${
                          isActive ? "text-blue-50" : "text-gray-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Expanded Content - Ultra Smooth */}
                    <AnimatePresence initial={false} mode="wait">
                      {isActive && (
                        <motion.div
                          key={`details-${index}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            opacity: { duration: 0.3, ease: "easeInOut" },
                            height: {
                              duration: 0.5,
                              ease: [0.25, 0.1, 0.25, 1],
                            },
                          }}
                          className="mt-6 overflow-hidden"
                        >
                          <div className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  delay: 0.2 + idx * 0.05,
                                  duration: 0.3,
                                  ease: "easeOut",
                                }}
                                className="flex items-center gap-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                                <span className="text-white text-sm font-medium">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Click Indicator */}
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 text-sm text-blue-600 font-semibold flex items-center gap-2 flex-shrink-0"
                      >
                        <span>Click to expand</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </motion.div>
                    )}
                  </div>

                  {/* Active Indicator */}
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`absolute bottom-0 left-0 right-0 h-1 origin-left ${
                      isActive ? "bg-white" : "bg-blue-600"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Outcome */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-5 rounded-2xl shadow-xl">
              <p className="text-xl font-bold">
                Outcome - predictable output, higher margins, and fewer fires
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
