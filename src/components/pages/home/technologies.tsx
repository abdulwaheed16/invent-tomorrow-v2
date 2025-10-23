"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { homeData } from "@/lib/data/home-data";
import { motion } from "framer-motion";
import * as React from "react";
import { TechCard } from "./tech-card";

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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.6 },
  },
};

export default function TechnologiesSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <h3 className="text-[#244695] text-2xl sm:text-3xl font-semibold mb-4">
            Technology Stack
          </h3>
          <p className="text-gray-600 text-lg">
            Tools and technologies powering our projects
          </p>
        </motion.div>

        {isMobile ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-sm mx-auto"
            >
              <CarouselContent>
                {homeData.technologies.map((item, index: number) => (
                  <CarouselItem key={index} className="basis-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <TechCard
                        icon={item?.icon}
                        title={item?.title}
                        description={item?.description}
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {homeData.technologies.map((item, index: number) => (
              <motion.div key={index} variants={fadeUp} custom={index * 0.1}>
                <TechCard
                  icon={item?.icon}
                  title={item?.title}
                  description={item?.description}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
