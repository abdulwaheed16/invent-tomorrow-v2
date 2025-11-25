// components/ui/animated-section.tsx
"use client";

import { animationVariants } from "@/lib/animations/variants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: keyof typeof animationVariants;
  delay?: number;
  threshold?: number;
  once?: boolean;
  disabledOnMobile?: boolean;
  mobileBreakpoint?: number;
  className?: string;
  id?: string;
}

export function AnimatedSection({
  children,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,
  once = true,
  disabledOnMobile = false,
  mobileBreakpoint = 768,
  className = "",
  id,
}: AnimatedSectionProps) {
  //   const [isMobile, setIsMobile] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < mobileBreakpoint;
      //   setIsMobile(mobile);
      setIsDisabled(disabledOnMobile && mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [disabledOnMobile, mobileBreakpoint]);

  if (isDisabled) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  const computedVariants = {
    hidden: animationVariants[animation].hidden,
    visible: animationVariants[animation].visible(delay),
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={computedVariants as any}
      className={cn(className, "px-0")}
    >
      {children}
    </motion.section>
  );
}
