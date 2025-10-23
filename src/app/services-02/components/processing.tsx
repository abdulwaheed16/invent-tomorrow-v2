// Updated processing.tsx component
import { AnimatePresence, motion } from "framer-motion";
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
import { useState } from "react";

// Type definitions
interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: keyof typeof iconMap; // Make icon optional
}

interface ProcessSectionProps {
  process: ProcessStep[];
  color: string;
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

export default function ProcessSection({
  process,
  color,
}: ProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
            {process.map((step: ProcessStep, index: number) => {
              const Icon = getIconForStep(step, index);
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  className="relative flex-1 glass-effect rounded-2xl overflow-hidden cursor-pointer p-8 flex flex-col justify-between"
                  onClick={() => setActiveIndex(index)}
                  animate={{ flex: isActive ? 4 : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{
                    border: `1px solid ${
                      isActive ? color : "rgba(255, 255, 255, 0.1)"
                    }`,
                  }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: `linear-gradient(to top, ${color}25, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className=" text-6xl font-bold"
                      style={{ color: `${color}40` }}
                    >
                      {step.step}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <AnimatePresence>
                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className={`w-14 h-14 rounded-xl flex items-center justify-center`}
                              style={{ background: `${color}20` }}
                            >
                              <Icon className="w-7 h-7" style={{ color }} />
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
                          <Icon
                            className="w-8 h-8 opacity-70"
                            style={{ color }}
                          />
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
            })}
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
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl"
                          style={{ background: `${color}20`, color: color }}
                        >
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
