"use client";
import { motion, useInView, Variants } from "framer-motion";
import { Check, Code2, Lightbulb, Smartphone, Sparkles } from "lucide-react";
import React, { useRef } from "react";

// Type definitions
interface Benefit {
  title: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
  serviceIcon?: string; // Changed to string instead of LucideIcon
}

// Icon mapping
const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Code2,
  Lightbulb,
  Smartphone,
  Sparkles,
  Default: Check,
};

export default function BenefitsSection({
  benefits,
  serviceIcon,
}: BenefitsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  if (!benefits || benefits.length === 0) return null;

  // Get the icon component based on the serviceIcon name
  const IconComponent = iconMap[serviceIcon || ""] || iconMap.Default;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
    },
  };

  const numBenefits = benefits.length;
  const orbitRadius = 320; // Radius of the card orbit
  const cardWidth = 256;
  const cardHeight = 180;
  const centralCircleRadius = 112;

  // Calculate positions for benefit cards in a circular pattern
  const calculateCardPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const cardCenterX = orbitRadius * Math.cos(angle);
    const cardCenterY = orbitRadius * Math.sin(angle);

    // Calculate line start and end points
    const startX = centralCircleRadius * Math.cos(angle);
    const startY = centralCircleRadius * Math.sin(angle);
    const endX = cardCenterX;
    const endY = cardCenterY;

    return { cardCenterX, cardCenterY, startX, startY, endX, endY };
  };

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-background/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Why choose our service
          </p>
        </motion.div>

        {/* Desktop - Radial Layout */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:flex items-center justify-center relative h-[800px]"
        >
          {/* Central Element */}
          <motion.div className="absolute z-10" variants={itemVariants}>
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              style={{ filter: `blur(40px)` }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="w-56 h-56 rounded-full glass-effect flex items-center justify-center relative">
              <div className="w-48 h-48 rounded-full flex items-center justify-center bg-primary/10">
                <IconComponent className="w-24 h-24 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Lines and Benefit Cards */}
          <div className="absolute inset-0">
            {benefits.map((_: Benefit, index: number) => {
              const { startX, startY, endX, endY } = calculateCardPosition(
                index,
                numBenefits
              );

              return (
                <svg
                  key={index}
                  className="absolute w-full h-full"
                  style={{ pointerEvents: "none" }}
                >
                  <motion.line
                    x1={`calc(50% + ${startX}px)`}
                    y1={`calc(50% + ${startY}px)`}
                    x2={`calc(50% + ${endX}px)`}
                    y2={`calc(50% + ${endY}px)`}
                    stroke="currentColor"
                    strokeOpacity="0.2"
                    className="text-primary"
                    variants={lineVariants}
                  />
                </svg>
              );
            })}
          </div>

          {benefits.map((benefit: Benefit, index: number) => {
            const { cardCenterX, cardCenterY } = calculateCardPosition(
              index,
              numBenefits
            );

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className="absolute"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  left: `calc(50% + ${cardCenterX}px)`,
                  top: `calc(50% + ${cardCenterY}px)`,
                  x: "-50%",
                  y: "-50%",
                }}
                whileHover={{
                  y: `calc(-50% - 10px)`,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="glass-effect rounded-2xl p-6 text-center h-full flex flex-col justify-center items-center card-hover">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Check className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile - Stacked Layout */}
        <div className="space-y-6 md:hidden">
          {benefits.map((benefit: Benefit, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-effect rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/20 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 5 }}
                >
                  <Check className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:hidden">
          {benefits.map((benefit: Benefit, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-effect rounded-2xl p-8 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/20 group-hover:scale-110 transition-transform">
                <Check className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export types for use in other components
export type { Benefit, BenefitsProps };
