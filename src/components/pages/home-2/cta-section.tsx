"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer, staggerItem } from "./animations";

export default function CTASection() {
  const highlights = [
    { icon: Clock, text: "20 minutes" },
    { icon: CheckCircle2, text: "Zero pressure" },
    { icon: Sparkles, text: "High clarity" },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            {/* Main Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Start solving problems with
              <br />
              <span className="text-blue-200">Better Systems</span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Let us audit your workflows and show you exactly where automation
              will produce reliable returns.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="mb-8">
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
                  className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:bg-blue-50 transition-colors"
                >
                  <span>Book a Free Workflow Audit</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-center gap-2 text-blue-100"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-lg font-medium">
                      {highlight.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20"
            >
              <p className="text-lg font-semibold">
                Join 20+ companies already automating their workflows
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 md:h-32"
        >
          <path
            d="M0,0 C300,80 600,80 900,40 L1200,0 L1200,120 L0,120 Z"
            fill="white"
            opacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
}
