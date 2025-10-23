import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, LucideIcon, PlayCircle } from "lucide-react";
import { Service } from "../../../../types/services.types";

interface Props {
  service: Service;
  Icon: LucideIcon;
}

export default function ServiceHero({ service, Icon }: Props) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Animated background gradients */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: service.color }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: service.color }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect mb-8 group hover:scale-105 transition-transform"
            >
              <Icon className="w-5 h-5" style={{ color: service.color }} />
              <span className="text-sm font-semibold tracking-wide">
                {service.title}
              </span>
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: service.color }}
              />
            </motion.div>

            {/* Heading with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              {service.tagline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={
                    i === service.tagline.split(" ").length - 2 ||
                    i === service.tagline.split(" ").length - 1
                      ? "gradient-text"
                      : ""
                  }
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 mb-10 leading-relaxed"
            >
              {service.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00D4FF] to-[#0066FF] hover:opacity-90 transition-all group text-base px-8 h-14"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5 backdrop-blur-sm text-base px-8 h-14 group"
              >
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Visual Element with floating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-square rounded-3xl glass-effect p-12 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${service.color}15 0%, transparent 100%)`,
              }}
            >
              <Icon
                className="w-full h-full max-w-sm max-h-sm opacity-30"
                style={{ color: service.color }}
              />
            </motion.div>

            {/* Floating decorative elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, i % 2 === 0 ? 10 : -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="absolute w-20 h-20 md:w-32 md:h-32 rounded-2xl glass-effect"
                style={{
                  background: `${service.color}20`,
                  top: `${20 + i * 25}%`,
                  right: i % 2 === 0 ? "-8%" : "auto",
                  left: i % 2 === 1 ? "-8%" : "auto",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
