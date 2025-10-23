"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
    Activity,
    ArrowRight,
    CheckCircle,
    Clock,
    Code,
    Layers,
    LucideIcon,
    Package,
    Rocket,
    Search,
    TrendingUp,
} from "lucide-react";
import { useState } from "react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Search,
  Layers,
  Code,
  Rocket,
  TrendingUp,
  Activity,
  ArrowRight,
  CheckCircle,
  Clock,
  Package,
};

// Type definitions
interface ProcessStep {
  title: string;
  duration: string;
  icon: string;
  description: string;
  deliverables: string[];
  keyActivities: string[];
}

interface ServiceProcessDetailedProps {
  process: ProcessStep[];
}

export default function ServiceProcessDetailed({
  process,
}: ServiceProcessDetailedProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleAccordionClick = (index: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex(index);

    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  if (!process || process.length === 0) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Our <span className="gradient-text">Implementation Process</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to AI agent implementation that ensures
              successful deployment, measurable outcomes, and long-term success
              for your organization.
            </p>
          </motion.div>

          {/* Desktop: Horizontal Accordion */}
          <div className="hidden lg:block">
            <div className="flex h-[600px] gap-4">
              {process.map((phase: ProcessStep, index: number) => {
                const Icon = iconMap[phase.icon] || Search;
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    className="relative flex-1 morphic-card rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => handleAccordionClick(index)}
                    animate={{
                      flex: isActive ? 4 : 1,
                      x: isActive ? 0 : index < activeIndex ? -10 : 10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    whileHover={{ y: -5 }}
                    style={{
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{
                        duration: 0.4,
                        delay: isActive ? 0.2 : 0,
                      }}
                    />

                    <div className="relative h-full p-8 flex flex-col justify-between">
                      {/* Phase Number */}
                      <div className="text-6xl font-bold text-primary/20">
                        {index + 1}
                      </div>

                      {/* Content Container */}
                      <div className="flex-1 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                          {isActive ? (
                            <motion.div
                              key={`content-${index}`}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                              }}
                              className="h-full"
                            >
                              <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                  className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/20"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.1, duration: 0.2 }}
                                >
                                  <Icon className="w-7 h-7 text-primary" />
                                </motion.div>
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2, duration: 0.3 }}
                                >
                                  <h3 className="text-3xl font-bold text-text-primary">
                                    {phase.title}
                                  </h3>
                                  <span className="text-sm text-primary font-medium">
                                    {phase.duration}
                                  </span>
                                </motion.div>
                              </div>

                              <motion.p
                                className="text-muted-foreground leading-relaxed mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                              >
                                {phase.description}
                              </motion.p>

                              <motion.div
                                className="grid grid-cols-1 gap-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                              >
                                <div>
                                  <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                                    <Package
                                      size={16}
                                      className="mr-2 text-primary"
                                    />
                                    Key Deliverables
                                  </h4>
                                  <ul className="space-y-2">
                                    {phase.deliverables.map(
                                      (deliverable, idx) => (
                                        <motion.li
                                          key={idx}
                                          className="flex items-center text-sm text-muted-foreground"
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            delay: 0.5 + idx * 0.05,
                                            duration: 0.2,
                                          }}
                                        >
                                          <CheckCircle
                                            size={14}
                                            className="mr-2 text-success flex-shrink-0"
                                          />
                                          {deliverable}
                                        </motion.li>
                                      )
                                    )}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                                    <Activity
                                      size={16}
                                      className="mr-2 text-primary"
                                    />
                                    Key Activities
                                  </h4>
                                  <ul className="space-y-2">
                                    {phase.keyActivities.map(
                                      (activity, idx) => (
                                        <motion.li
                                          key={idx}
                                          className="flex items-start text-sm text-muted-foreground"
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            delay: 0.6 + idx * 0.05,
                                            duration: 0.2,
                                          }}
                                        >
                                          <ArrowRight
                                            size={14}
                                            className="mr-2 mt-0.5 text-primary flex-shrink-0"
                                          />
                                          <span>{activity}</span>
                                        </motion.li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </motion.div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key={`collapsed-${index}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex flex-col items-center justify-center gap-4 h-full"
                            >
                              <Icon className="w-8 h-8 text-primary/70" />
                              <div className="writing-mode-vertical-rl text-orientation-mixed transform-rotate-180">
                                <h3 className="text-xl font-semibold text-text-primary/70 whitespace-nowrap">
                                  {phase.title}
                                </h3>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="relative lg:hidden">
            {/* Connection line for mobile */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30 opacity-30 -translate-x-1/2" />

            <div className="space-y-12">
              {process.map((phase: ProcessStep, index: number) => {
                const Icon = iconMap[phase.icon] || Search;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="pl-12 md:pl-0"
                  >
                    <div className="flex items-center gap-8">
                      <div className="hidden md:block w-1/2" />
                      <div className="flex-1 morphic-card rounded-2xl p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/20">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-text-primary">
                              {phase.title}
                            </h3>
                            <span className="text-sm text-primary font-medium">
                              {phase.duration}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {phase.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                              <Package
                                size={16}
                                className="mr-2 text-primary"
                              />
                              Key Deliverables
                            </h4>
                            <ul className="space-y-2">
                              {phase.deliverables.map((deliverable, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center text-sm text-muted-foreground"
                                >
                                  <CheckCircle
                                    size={14}
                                    className="mr-2 text-success flex-shrink-0"
                                  />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                              <Activity
                                size={16}
                                className="mr-2 text-primary"
                              />
                              Key Activities
                            </h4>
                            <ul className="space-y-2">
                              {phase.keyActivities.map((activity, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-sm text-muted-foreground"
                                >
                                  <ArrowRight
                                    size={14}
                                    className="mr-2 mt-0.5 text-primary flex-shrink-0"
                                  />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Timeline Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full text-sm font-medium">
              <Clock size={16} />
              <span>
                Average implementation time: 8-10 weeks for full deployment
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
