"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface TechStack {
  title: string;
  color?: string;
}

interface TechStackProps {
  techStack: TechStack[];
}

// Simple icon component for all tech items
const TechIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="#333333"
      strokeWidth="2"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TechStack({ techStack }: TechStackProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  if (!techStack) return null;

  // Define categories inside the component
  const categories = ["All", "Frontend", "Backend", "AI/ML", "DevOps"];

  // Filter tech stack based on active category
  const filteredTechStack =
    activeCategory === "All"
      ? techStack
      : techStack.filter((tech) => {
          // For now, randomly assign categories since data doesn't have them
          const randomCategories = ["Frontend", "Backend", "AI/ML", "DevOps"];
          const randomCategory =
            randomCategories[tech.title.length % randomCategories.length];
          return randomCategory === activeCategory;
        });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Technologies <span className="text-[#0066FF]">We Use</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Industry-leading tools and frameworks to build cutting-edge
            solutions
          </p>
        </motion.div>

        {/* Horizontal Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#0066FF] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Line below navigation */}
          <div className="relative">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            {/* <motion.div
              className="absolute top-0 left-0 h-0.5 bg-[#0066FF] transition-all duration-300"
              initial={false}
              animate={{
                width: "100%",
                left: `${
                  (categories.indexOf(activeCategory) / categories.length) * 100
                }%`,
              }}
              style={{
                width: `${100 / categories.length}%`,
                left: `${
                  (categories.indexOf(activeCategory) / categories.length) * 100
                }%`,
              }}
            /> */}
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredTechStack?.map((tech: TechStack, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center border border-gray-200 hover:border-[#0066FF]/50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 bg-[#0066FF]/10">
                    <TechIcon />
                  </div>
                  <p className="font-medium text-gray-800 text-sm text-center">
                    {tech?.title}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0066FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
