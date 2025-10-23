"use client";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  Check,
  Code,
  DraftingCompass,
  Flag,
  Lightbulb,
  LucideIcon,
  Rocket,
  TestTube,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: keyof typeof iconMap;
}

interface ProcessSectionProps {
  process: ProcessStep[];
}

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  DraftingCompass,
  Code,
  TestTube,
  Rocket,
  Flag,
  Default: Check,
};

// Helper function to get icon based on step index if icon is not provided
const getIconForStep = (step: ProcessStep, index: number): LucideIcon => {
  if (step.icon && iconMap[step.icon]) {
    return iconMap[step.icon];
  }

  // Fallback icons based on step index
  const fallbackIcons = [
    "Lightbulb",
    "DraftingCompass",
    "Code",
    "TestTube",
    "Rocket",
    "Flag",
  ];

  const iconKey = fallbackIcons[
    index % fallbackIcons.length
  ] as keyof typeof iconMap;
  return iconMap[iconKey] || iconMap.Default;
};

// Memoized step component to prevent unnecessary re-renders
const ProcessStepItem = React.memo(
  ({
    step,
    index,
    isActive,
    isContentVisible,
    onClick,
  }: {
    step: ProcessStep;
    index: number;
    isActive: boolean;
    isContentVisible: boolean;
    onClick: () => void;
  }) => {
    const Icon = getIconForStep(step, index);
    const controls = useAnimation();

    useEffect(() => {
      if (isActive) {
        controls.start({
          flex: 4,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        });
      } else {
        controls.start({
          flex: 1,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        });
      }
    }, [isActive, controls]);

    return (
      <motion.div
        className="relative glass-effect rounded-2xl overflow-hidden cursor-pointer p-8 flex flex-col justify-between"
        onClick={onClick}
        animate={controls}
        style={{
          border: `1px solid ${
            isActive ? "rgba(0, 102, 255, 0.5)" : "rgba(255, 255, 255, 0.1)"
          }`,
        }}
        whileHover={{ y: -10 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: `linear-gradient(to top, rgba(0, 102, 255, 0.15), transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <div className="text-6xl font-bold text-primary/30">{step.step}</div>
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {isContentVisible ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/20">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <Icon className="w-8 h-8 opacity-70 text-primary" />
                <div
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                  }}
                >
                  <h3 className="text-xl font-semibold opacity-70 whitespace-nowrap">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }
);

ProcessStepItem.displayName = "ProcessStepItem";

export default function ServiceProcess({ process }: ProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [contentVisibleIndex, setContentVisibleIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleStepClick = useCallback(
    (index: number) => {
      if (isTransitioning || index === activeIndex) return;

      setIsTransitioning(true);

      // Hide content immediately
      setContentVisibleIndex(-1);

      // Change active accordion
      setActiveIndex(index);

      // Show content after a short delay to allow the accordion to start expanding
      setTimeout(() => {
        setContentVisibleIndex(index);
        setIsTransitioning(false);
      }, 300);
    },
    [activeIndex, isTransitioning]
  );

  if (!process || process.length === 0) return null;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 text-lg">How we deliver excellence</p>
        </motion.div>

        {/* Desktop: Horizontal Accordion */}
        <div className="hidden lg:block">
          <motion.div className="flex h-[450px] gap-4">
            {process.map((step: ProcessStep, index: number) => (
              <ProcessStepItem
                key={index}
                step={step}
                index={index}
                isActive={activeIndex === index}
                isContentVisible={contentVisibleIndex === index}
                onClick={() => handleStepClick(index)}
              />
            ))}
          </motion.div>
        </div>

        {/* Mobile: Vertical Stack (Original Layout) */}
        <div className="relative lg:hidden">
          {/* Connection line for mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066FF] to-[#00D4FF] opacity-30 -translate-x-1/2" />

          <div className="space-y-12">
            {process.map((step: ProcessStep, index: number) => {
              // const Icon = getIconForStep(step, index);

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
                    <div className="flex-1 glass-effect rounded-2xl p-8 hover:border-[#0066FF]/50 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl bg-primary/20 text-primary">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Export types for use in other components
export type { ProcessSectionProps, ProcessStep };
