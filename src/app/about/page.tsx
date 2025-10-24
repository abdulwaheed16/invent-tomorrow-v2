"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  certifications,
  companyValues,
  services,
  teamMembers,
  technologies,
} from "@/lib/data/about-data";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Linkedin,
  Mail,
  Target,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-medium">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Building Tomorrow&apos;s
              <br />
              Technology Today
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              We&apos;re a team of passionate innovators, developers, and
              designers committed to transforming ambitious ideas into
              exceptional digital products.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        {/* Mission & Vision Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-blue-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions
                  that drive growth, efficiency, and innovation. We believe
                  every company deserves access to world-class software
                  development, regardless of size or budget.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-blue-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To become the world&apos;s most trusted technology partner for
                  startups and enterprises, recognized for delivering
                  exceptional quality, innovation, and measurable business
                  impact across every project we undertake.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-slate-600">
              Trusted by businesses worldwide to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-white border-2 hover:border-blue-600 hover:shadow-lg transition-all">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Company Values - Modern Design */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-blue-100 text-blue-600 px-4 py-2 text-sm font-medium">
                Our Philosophy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Values That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Drive Us
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                These core principles aren't just words on a wall—they're the
                foundation of every decision we make and every solution we
                create.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="relative h-full p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <div className="text-4xl text-blue-600">
                          {value.icon}
                        </div>
                      </div>
                      {/* Decorative Element */}
                      {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-800 rounded-full opacity-60"></div> */}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {value.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.4 }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to work with a team that shares your values?
                </h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our approach can help you achieve your
                  goals.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                  asChild
                >
                  <Link
                    href="https://calendly.com/abdulhaadi-businesschat/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Company Timeline */}
        {/* <section className="py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600">
              From humble beginnings to industry leaders
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200" />

              {companyTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  <div className="absolute left-5 top-2 w-7 h-7 bg-blue-600 rounded-full border-4 border-white shadow-lg" />

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-blue-600 text-white text-lg px-4 py-1">
                        {item.year}
                      </Badge>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Team Section - Simplified Design with Single Blob */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
          </div>

          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-blue-100 text-blue-600 px-4 py-2 text-sm font-medium">
                Our Team
              </Badge>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-10 h-10 text-blue-600" />
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Meet Our Team
                </h2>
              </div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The talented people behind our success who bring expertise and
                passion to every project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Card with Single Blob Background */}
                  <Card className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0">
                    {/* Single Blob Background for All Cards */}
                    <div className="absolute inset-0 opacity-10">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 400 400"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="blobGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M150,50 Q250,50 300,150 T250,300 Q150,350 50,300 T0,150 Q50,50 150,50"
                          fill="url(#blobGradient)"
                        />
                      </svg>
                    </div>

                    {/* Team Member Image - Inside the Card */}
                    <div className="relative pt-8 pb-6">
                      <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={member.image}
                          alt={member.name}
                          layout="fill"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Team Member Info */}
                    <div className="text-center px-6 pb-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-slate-600 leading-relaxed text-sm mb-4">
                        {member.bio}
                      </p>

                      {/* Decorative Elements */}
                      <div className="flex justify-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>

                      {/* View Profile Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        View Profile
                      </Button>
                    </div>

                    {/* Social Links - Simple Appear on Hover */}
                    <div className="absolute top-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.linkedin && (
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                          data-testid={`linkedin-${member.id}`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      )}
                      {member.twitter && (
                        <Link
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 hover:text-white transition-colors"
                          data-testid={`twitter-${member.id}`}
                        >
                          <Twitter className="w-5 h-5" />
                        </Link>
                      )}
                      <Link
                        href={`mailto:${member.name
                          .toLowerCase()
                          .replace(" ", ".")}@inventtomorrow.com`}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-600 hover:text-white transition-colors"
                        data-testid={`email-${member.id}`}
                      >
                        <Mail className="w-5 h-5" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.4 }}
              className="mt-20 text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 800 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="ctaPattern"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="20" cy="20" r="2" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ctaPattern)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Want to join our talented team?
                  </h3>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                    We're always looking for passionate people who share our
                    values.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:scale-105 transition-transform"
                    asChild
                  >
                    <a href="/careers">View Open Positions</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive technology solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl hover:border-blue-600 transition-all group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-slate-600">
              Industry-leading tools and frameworks we master
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge className="px-6 py-3 text-base bg-slate-900 text-white hover:bg-blue-600">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Card className="p-12 bg-gradient-to-br from-slate-50 to-white border-2">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Certifications & Accreditations
                </h2>
                <p className="text-lg text-slate-600">
                  Recognized expertise and industry standards
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-600 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-slate-700 font-medium">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Card className="p-12 md:p-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how our team can help bring your vision to
                  life with cutting-edge technology and exceptional execution.
                </p>
                <Link
                  href="https://calendly.com/abdulhaadi-businesschat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 mx-auto bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-slate-100 transition-colors"
                    data-testid="cta-get-in-touch"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
