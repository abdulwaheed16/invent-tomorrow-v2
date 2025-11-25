/**
 * Audit AI Tool Page
 * Modern, professional design with hero section
 */

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Lock,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AuditFormContainer } from "./audit-form-container";

export default function AuditAIToolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0e0637] via-purple-900 to-purple-800 text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>AI-Powered Audit Analysis</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Comprehensive AI Tool
                <br />
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Audit & Assessment
                </span>
              </h1>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
                Evaluate your AI systems for compliance, ethics, security, and
                transparency with our comprehensive audit framework
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
            >
              {[
                {
                  icon: Shield,
                  title: "Security First",
                  description: "Comprehensive security assessment",
                },
                {
                  icon: FileCheck,
                  title: "Compliance Ready",
                  description: "Meet regulatory requirements",
                },
                {
                  icon: Target,
                  title: "Best Practices",
                  description: "Industry-standard guidelines",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-purple-300 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-purple-200">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-purple-200 mt-8"
            >
              <ArrowRight className="w-5 h-5 animate-bounce" />
              <span className="text-sm font-medium">
                Scroll down to start your audit
              </span>
            </motion.div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="rgb(248 250 252)"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0637] mb-4">
              Start Your AI Audit
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete our comprehensive questionnaire to receive a detailed
              assessment of your AI tool's compliance and best practices
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AuditFormContainer />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 bg-gradient-to-br from-purple-50 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0637] mb-4">
              Why Audit Your AI Tool?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Build Trust",
                description:
                  "Demonstrate transparency and accountability to your users",
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                icon: Lock,
                title: "Ensure Security",
                description:
                  "Identify and address potential security vulnerabilities",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: TrendingUp,
                title: "Improve Quality",
                description:
                  "Get actionable insights to enhance your AI system",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: Zap,
                title: "Stay Compliant",
                description:
                  "Meet regulatory requirements and industry standards",
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 ${benefit.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
