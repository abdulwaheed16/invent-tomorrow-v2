// components/ui/animated-wrapper.tsx
"use client";

import { animationVariants } from "@/lib/animations/variants";
import { motion, MotionProps } from "framer-motion";
import { JSX, useEffect, useState } from "react";

interface AnimatedWrapperProps extends MotionProps {
  children: React.ReactNode;
  animation?: keyof typeof animationVariants;
  delay?: number;
  threshold?: number;
  once?: boolean;
  disabledOnMobile?: boolean;
  mobileBreakpoint?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedWrapper({
  children,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,
  once = true,
  disabledOnMobile = false,
  mobileBreakpoint = 768,
  className = "",
  as = "div",
  ...motionProps
}: AnimatedWrapperProps) {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < mobileBreakpoint;
      setIsDisabled(disabledOnMobile && mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [disabledOnMobile, mobileBreakpoint]);

  const MotionComponent = motion[as as keyof typeof motion] as React.FC<
    MotionProps | any
  >;

  if (isDisabled) {
    // Return the component without animation if disabled
    return <div className={className}>{children}</div>;
  }

  const computedVariants = {
    hidden: animationVariants[animation].hidden,
    visible: animationVariants[animation].visible(delay),
  };

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={computedVariants as any}
      custom={delay}
      className={className}
      {...motionProps}
    >
      {children}
    </MotionComponent>
  );
}
