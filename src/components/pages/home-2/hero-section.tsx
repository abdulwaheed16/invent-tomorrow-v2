"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer, staggerItem } from "./animations";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700">
      {/* Animated blob backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            y: y1,
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-white rounded-full blur-3xl"
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            y: y2,
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-blue-300 rounded-full blur-3xl"
        />

        {/* Blob 3 */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl"
          style={{
            borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
          }}
        />

        {/* Enhanced Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.08)_2px,transparent_2px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Content Container - Center Aligned */}
      <div className="relative z-10 w-full px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span className="text-sm font-semibold">
                AI-Powered Automation
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              We build scalable AI systems
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                that helps in daily operations
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Remove manual work, eliminate bottlenecks, and let your team
              operate faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            >
              <Link
                href="https://calendly.com/abdulhaadi-businesschat/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:bg-blue-50 transition-colors w-full sm:w-auto justify-center"
                >
                  <span>Book Free Audit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="#services" className="cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors w-full sm:w-auto justify-center"
                >
                  <span>View Services</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators - Graphical */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap items-center justify-center gap-8 text-blue-100"
            >
              {/* <motion.div
                variants={staggerItem}
                className="flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    20+ Projects
                  </p>
                  <p className="text-xs text-blue-200">
                    Successfully Delivered
                  </p>
                </div>
              </motion.div> */}

              <motion.div
                variants={staggerItem}
                className="flex items-center gap-3"
              >
                <div className="w-auto px-6 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-400">
                    100%
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Satisfaction
                  </p>
                  <p className="text-xs text-blue-200">Client Rating</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 md:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
