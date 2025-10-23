"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface TechStack {
  title: string;
  category: string;
  color: string;
  icon: React.ReactNode;
}

interface TechStackProps {
  techStack: TechStack[];
}

// Dummy icon components - updated for light theme
const CloudIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 10H17.5C17.2 7.2 14.8 5 12 5C9.5 5 7.3 6.8 6.8 9.2C4.6 9.6 3 11.5 3 13.8C3 16.1 4.9 18 7.2 18H18C20.2 18 22 16.2 22 14C22 11.8 20.2 10 18 10Z"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 18L22 12L16 6"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6L2 12L8 18"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#333333" strokeWidth="2" />
    <path
      d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BrainIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 2C5.91 2 3 4.91 3 8.5C3 10.18 3.65 11.71 4.69 12.81C4.25 13.57 4 14.47 4 15.43C4 18.48 6.52 21 9.57 21C10.46 21 11.3 20.79 12.04 20.41C12.78 20.79 13.62 21 14.51 21C17.56 21 20.08 18.48 20.08 15.43C20.08 14.47 19.83 13.57 19.39 12.81C20.43 11.71 21.08 10.18 21.08 8.5C21.08 4.91 18.17 2 14.58 2C13.23 2 11.98 2.44 11 3.19C10.02 2.44 8.77 2 7.42 2H9.5Z"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContainerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12L12 2L2 12L12 22L22 12Z"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V12"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 12L2 12"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const APIIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8L12 12L16 16"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8L12 12L8 16"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getIconForCategory = (category: string) => {
  switch (category) {
    case "AI/ML":
      return <BrainIcon />;
    case "Cloud":
      return <CloudIcon />;
    case "Database":
      return <DatabaseIcon />;
    case "DevOps":
      return <ContainerIcon />;
    case "Frontend":
    case "Backend":
      return <CodeIcon />;
    case "API":
      return <APIIcon />;
    default:
      return <CodeIcon />;
  }
};

export default function TechStack({ techStack }: TechStackProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  if (!techStack) return null;

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(techStack.map((tech) => tech.category))),
  ];

  // Filter tech stack based on active category
  const filteredTechStack =
    activeCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Side Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/5"
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-[#0066FF] text-white shadow-md"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor:
                          activeCategory === category
                            ? "rgba(255, 255, 255, 0.2)"
                            : category === "All"
                            ? "#f0f4ff"
                            : techStack.find((t) => t.category === category)
                                ?.color + "20" || "#f0f4ff",
                      }}
                    >
                      {category === "All" ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 6H20M4 12H20M4 18H20"
                            stroke={
                              activeCategory === category ? "white" : "#333333"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <div
                          style={{
                            filter:
                              activeCategory === category
                                ? "none"
                                : "brightness(0.8)",
                          }}
                        ></div>
                      )}
                    </div>
                    <span className="font-medium">{category}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-4/5"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: tech.color + "20" }}
                    >
                      <div style={{ filter: "brightness(0.8)" }}>
                        {getIconForCategory(tech.category)}
                      </div>
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
      </div>
    </section>
  );
}
