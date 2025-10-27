"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  disabledOnMobile?: boolean;
  mobileBreakpoint?: number;
  className?: string;
}

// ----------------------- ANIMATED BACKGROUND FOR THE HERO SECTIONS OF PAGES ONLY ------------------------------

export function AnimatedBackground({
  children,
  disabledOnMobile = true,
  mobileBreakpoint = 768,
  className = "",
}: AnimatedBackgroundProps) {
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

  if (isDisabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>
      {children}
    </div>
  );
}
