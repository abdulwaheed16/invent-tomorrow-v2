"use client";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBackground } from "./ui/animated-background";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
}

export default function HeroSectionPage({
  children,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden",
        className
      )}
    >
      <AnimatedBackground disabledOnMobile={true}>
        {children}
      </AnimatedBackground>
    </section>
  );
}
