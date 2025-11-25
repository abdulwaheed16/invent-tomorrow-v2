"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  Calculator,
  GraduationCap,
  HardHat,
  Heart,
  Megaphone,
  Scale,
  ShoppingCart,
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "./animations";

export default function IndustriesSection() {
  const industries = [
    { name: "Real Estate & Property Management", icon: Building2 },
    { name: "Healthcare & Clinics", icon: Heart },
    { name: "Construction & Logistics", icon: HardHat },
    { name: "Educational Companies", icon: GraduationCap },
    { name: "Legal & Professional Services", icon: Scale },
    { name: "E-commerce & Retail", icon: ShoppingCart },
    { name: "Education & Training", icon: BookOpen },
    { name: "Marketing Agencies", icon: Megaphone },
    { name: "Finance & Accounting", icon: Calculator },
  ];

  return (
    <section
      id="industries"
      className="py-20 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.12, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Industries We Work With
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Delivering tailored solutions across diverse sectors
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerItem}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      {/* Icon with scale animation only */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      {/* Industry Name */}
                      <h3 className="text-lg font-semibold text-white leading-snug">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
