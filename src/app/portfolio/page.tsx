"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolioCategories, portfolioItems } from "@/lib/data/portfolio-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPortfolios =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 overflow-hidden">
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
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.2}
              >
                <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-medium backdrop-blur-sm">
                  Our Portfolio
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="block">Our</span>
                  <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                    Success Stories
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
                  Discover how we've helped businesses achieve their goals
                  through innovative solutions and exceptional results.
                </p>

                {/* CTA Button */}
                <Link href="#portfolio-grid">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-slate-100 transition-colors"
                  >
                    Explore Success Stories
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Right Content - Image Showcase */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.4}
                className="relative"
              >
                <div className="relative">
                  {/* Main featured project */}
                  <motion.div whileHover={{ y: -5 }} className="relative z-20">
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={
                          portfolioItems[0]?.images[0] ||
                          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
                        }
                        alt="Featured Project"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <Badge className="mb-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          Featured
                        </Badge>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {portfolioItems[0]?.title || "HealthTech Innovations"}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {portfolioItems[0]?.client || "Healthcare Industry"}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating project cards */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute -top-6 -right-6 z-10 rounded-xl"
                  >
                    <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={
                          portfolioItems[1]?.images[0] ||
                          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop"
                        }
                        alt="Project 2"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full rounded-xl overflow-hidden"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute -bottom-6 -left-6 z-10"
                  >
                    <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={
                          portfolioItems[2]?.images[0] ||
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop"
                        }
                        alt="Project 3"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full rounded-xl overflow-hidden"
                      />
                    </div>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      </section>

      <div id="portfolio-grid" className="container py-16">
        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-blue-600">Work</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Browse our portfolio by category to find projects that match your
              interests
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {portfolioCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                data-testid={`filter-${category.id}`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${portfolio.slug}`}>
                <Card className="group relative p-0 overflow-hidden bg-white border border-slate-200 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-600/30 cursor-pointer">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <Image
                      src={portfolio.images[0]}
                      alt={portfolio.title}
                      width={600}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg"
                      >
                        View Project
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">
                        {portfolio.category}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {portfolio.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      {portfolio.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span className="font-medium">{portfolio.client}</span>
                      <span>{portfolio.year}</span>
                    </div>

                    {/* Technologies with logos */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {portfolio.technologies.slice(0, 3).map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1 text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
                        >
                          <Image
                            src={tech.logo}
                            alt={tech.title}
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain"
                          />
                          <span>{tech.title}</span>
                        </div>
                      ))}
                      {portfolio.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                          +{portfolio.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPortfolios.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-slate-500">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-20 relative"
        >
          <section className="relative scroll-mt-24" id="contact">
            <div className="relative bg-blue-600 text-white rounded-3xl p-6 md:p-12 lg:p-16 overflow-hidden">
              {/* Background circles for visual effect */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6">
                <div className="text-center md:text-left py-8 md:mb-0">
                  <h2 className=" mb-4 leading-tight">
                    {`Let's Build an Extraordinary`} <br />
                    Product Together.
                  </h2>
                  <p className=" text-blue-100 max-w-2xl">
                    Your startup deserves momentum, not delays. <br />
                    Schedule a call today and start building a product ready for
                    users and investors.
                  </p>
                </div>

                <div className="flex flex-col  justify-center items-center md:items-start space-y-6 ">
                  <motion.div variants={fadeUp}>
                    <Link
                      href="https://calendly.com/abdulhaadi-businesschat/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-white text-blue-600 border-2  border-white   font-semibold py-1 px-5 rounded-md h-12 shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-colors cursor-pointer"
                      >
                        Get in Touch with Our CEO →
                      </motion.button>
                    </Link>
                  </motion.div>
                  <div className="flex flex-col md:flex-row items-center space-x-4 text-blue-100 text-md font-bold">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                      <span>No commitment required</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-md size-2 rounded-full bg-white"></span>
                      <span>20-min call</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-md size-2 rounded-full bg-white"></span>
                      <span>Instant insights</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 right-0 ">
                <svg
                  width="596"
                  height="438"
                  viewBox="0 0 596 438"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M440 220.473C318.526 220.473 220.053 318.946 220.053 440.42C220.053 561.893 318.526 660.367 440 660.367C561.473 660.367 659.947 561.893 659.947 440.42C659.947 318.946 561.473 220.473 440 220.473ZM0.105469 440.42C0.105469 197.473 197.053 0.525391 440 0.525391C682.947 0.525391 879.894 197.473 879.894 440.42C879.894 683.367 682.947 880.314 440 880.314C197.053 880.314 0.105469 683.367 0.105469 440.42Z"
                    fill="url(#paint0_linear_0_568)"
                    fill-opacity="0.1"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_568"
                      x1="440"
                      y1="0.525391"
                      x2="440"
                      y2="880.314"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </section>
        </motion.section>
      </div>
    </div>
  );
}
