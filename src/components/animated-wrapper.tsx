"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}

const defaultVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function AnimatedWrapper({
  children,
  variants = defaultVariants,
  className,
}: AnimatedWrapperProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
