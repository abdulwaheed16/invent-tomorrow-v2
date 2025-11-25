"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "./animations";

export default function WhyCompaniesSection() {
  const benefits = [
    {
      text: "output with the same",
      highlight: "Higher",
      suffix: "headcount",
    },
    {
      text: "accuracy,",
      highlight: "More",
      suffix: "less human error",
    },
    {
      text: "that execute tasks",
      highlight: "AI Agents",
      suffix: "end-to-end",
    },
    {
      text: "delivery across",
      highlight: "Faster",
      suffix: "departments",
    },
    {
      text: "designed around",
      highlight: "Software",
      suffix: "your workflows",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 w-full px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-600 tracking-wide">
                The Challenge
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-inter)]"
            >
              Why Companies Work With Us
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Most businesses don't have a{" "}
              <span className="text-gray-400 line-through">traffic</span>{" "}
              problem.{" "}
              <span className="font-bold text-gray-900 bg-yellow-50 px-2 py-1 rounded-md border-b-2 border-yellow-400">
                They have an operations problem.
              </span>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto"
            >
              Work expands · Tasks repeat · Teams get stretched · Progress slows
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg font-medium text-blue-600 max-w-2xl mx-auto"
            >
              We fix that by creating{" "}
              <span className="font-bold">reliable systems</span> that{" "}
              <span className="font-bold">support your team</span> and{" "}
              <span className="font-bold">improve output every day.</span>
            </motion.p>
          </motion.div>

          {/* Modern Benefits Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-inter)]">
                  What You'll Achieve
                </h3>
              </div>

              {/* Benefits List - Modern Clean Design */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div className="relative bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl px-5 py-4 border-l-4 border-blue-600 transition-all duration-300 hover:from-blue-50 hover:shadow-sm">
                      {/* Content */}
                      <div className="flex items-center gap-3">
                        {/* Checkmark Icon */}
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        {/* Text with Highlighted Keywords */}
                        <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                          <span className="font-bold text-gray-900">
                            {benefit.highlight}
                          </span>{" "}
                          {benefit.text}{" "}
                          <span className="font-bold text-gray-900">
                            {benefit.suffix}
                          </span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
