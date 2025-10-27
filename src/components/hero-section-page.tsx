"use client";
import { ReactNode } from "react";

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
}

export default function HeroSectionPage({ children }: HeroSectionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
      <AnimatedBackground disabledOnMobile={true}>
        {children}
      </AnimatedBackground>
    </section>
  );
}
