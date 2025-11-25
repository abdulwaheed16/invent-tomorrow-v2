"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "./animations";

// Animated counter component
function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function ROISection() {
  return (
    <section id="roi" className="py-20 bg-white">
      <div className="w-full px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4"
            >
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Case Study
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              The ROI Model
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Automation isn't a cost — it's a multiplier
            </motion.p>
          </motion.div>

          {/* Case Study Card */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-6">
                <h3 className="text-2xl font-bold text-white">
                  Real-World Case Study
                </h3>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  {/* The Problem */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                    whileHover={{ y: -5 }}
                    className="relative"
                  >
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                    <div className="pl-6">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"
                        >
                          <TrendingUp className="w-6 h-6 text-blue-600" />
                        </motion.div>
                        <h4 className="text-2xl font-bold text-gray-900">
                          The Problem
                        </h4>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        They used to record videos of buildings and manually
                        extract defects, categorize them, write descriptions
                        about those defects, and save all the data into an Excel
                        sheet.
                      </p>
                    </div>
                  </motion.div>

                  {/* The Automation */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInRight}
                    whileHover={{ y: -5 }}
                    className="relative"
                  >
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                    <div className="pl-6">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"
                        >
                          <Zap className="w-6 h-6 text-blue-600" />
                        </motion.div>
                        <h4 className="text-2xl font-bold text-gray-900">
                          The Automation
                        </h4>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        We built a workflow that reads transcriptions, extracts
                        data, processes images, and generates a ready-to-use
                        Excel file automatically.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* The Result */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl -z-10" />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-gray-900">
                        The Result
                      </h4>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <motion.div
                        variants={staggerItem}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                          >
                            <Clock className="w-5 h-5 text-blue-600" />
                          </motion.div>
                          <div>
                            <div className="text-3xl font-bold text-blue-600">
                              <AnimatedCounter end={1.5} suffix=" hrs" />
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 font-medium">
                          saved per day
                        </p>
                      </motion.div>

                      <motion.div
                        variants={staggerItem}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                          >
                            <Clock className="w-5 h-5 text-blue-600" />
                          </motion.div>
                          <div>
                            <div className="text-3xl font-bold text-blue-600">
                              <AnimatedCounter
                                end={390}
                                prefix="~"
                                suffix=" hrs"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 font-medium">
                          saved per year
                        </p>
                      </motion.div>

                      <motion.div
                        variants={staggerItem}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
                          >
                            <DollarSign className="w-5 h-5 text-blue-600" />
                          </motion.div>
                          <div>
                            <div className="text-3xl font-bold text-blue-600">
                              <AnimatedCounter
                                end={15}
                                prefix="$"
                                suffix="K–$25K+"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 font-medium">
                          annual savings
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* The Bottom Line */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="mt-12 text-center"
                >
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-5 rounded-2xl shadow-xl">
                    <ArrowRight className="w-6 h-6" />
                    <div className="text-left">
                      <p className="text-sm font-semibold uppercase tracking-wide mb-1">
                        The Bottom Line
                      </p>
                      <p className="text-lg font-bold">
                        Most automations pay for themselves and produce
                        compounding savings every year after
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
