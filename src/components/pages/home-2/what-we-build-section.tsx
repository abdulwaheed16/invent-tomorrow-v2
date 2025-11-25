"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Code2,
  Cog,
  LucideIcon,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { fadeInUp, scaleIn, staggerContainer } from "./animations";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  bgImage: string;
}

export default function WhatWeBuildSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "Automations",
      description:
        "Replace repetitive tasks with intelligent workflows for emails, reporting, scheduling, and processing.",
      icon: Zap,
      bgImage: "/images/web-development-hero-2.png",
    },
    {
      title: "AI Agents",
      description:
        "Agents that think, act, and complete tasks just like a team member but faster.",
      icon: Users,
      bgImage: "/images/ai-agents-hero-2.png",
    },
    {
      title: "Internal Tools",
      description:
        "Give your team one place to work instead of multiple tabs and subscriptions.",
      icon: BarChart3,
      bgImage: "/images/cloud-service-hero.png",
    },
    {
      title: "Custom AI Apps",
      description:
        "Your process, our engineering, your own proprietary software.",
      icon: Code2,
      bgImage: "/images/mobile-development-hero-2.png",
    },
    {
      title: "Staff Augmentation",
      description: "Senior engineers who ship and augment your team.",
      icon: Briefcase,
      bgImage: "/images/tech-consultation-hero.png",
    },
    {
      title: "Tech Consulting",
      description:
        "We map your workflows, find the leaks, and build the systems that fix them.",
      icon: Cog,
      bgImage: "/images/data-engineering-hero.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
              <Cog className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Our Services
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              What We Build
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Designed using your actual workflows, not assumptions
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -10 }}
                  className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background Image - Shows on Hover */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.bgImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/85 to-blue-700/75" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    {/* Icon with scale animation */}
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg transition-all duration-300 ${
                          isHovered
                            ? "bg-white/20 backdrop-blur-sm"
                            : "bg-blue-600"
                        }`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Title and Description */}
                    <div>
                      <h3
                        className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                          isHovered ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`leading-relaxed mb-4 transition-colors duration-300 ${
                          isHovered ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {service.description}
                      </p>

                      {/* Hover Arrow */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -10,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center text-white font-semibold"
                      >
                        <span className="mr-2">Learn more</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Animated Bottom Accent */}
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 origin-left"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <Link
              href="https://calendly.com/abdulhaadi-businesschat/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:bg-blue-700 transition-colors"
              >
                <span>See How Much Time We Can Save You</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
