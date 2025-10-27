export const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  },
  fadeUp: {
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
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  },
  slideInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  },
  slideInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      rotate: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  },
  flipIn: {
    hidden: { opacity: 0, rotateY: -90 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      rotateY: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  },
};
