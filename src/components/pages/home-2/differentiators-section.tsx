"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target, Users } from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from "./animations";

export default function DifferentiatorsSection() {
  const beliefs = [
    {
      icon: Lightbulb,
      text: "Clear, practical solutions grounded in real results",
    },
    {
      icon: Rocket,
      text: "Streamlined builds designed for speed and efficiency",
    },
    {
      icon: Target,
      text: "Features that serve a purpose and strengthen your operations",
    },
    {
      icon: Users,
      text: "A dedicated team that communicates clearly and delivers consistently",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              What Makes Us Different
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-2xl text-gray-600">
              We believe in
            </motion.p>
          </motion.div>

          {/* Beliefs Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="text-xl font-semibold text-gray-900 leading-relaxed pt-2">
                      {belief.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Decorative quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-6 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold italic">
                We don't just build software. We build systems that work.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
