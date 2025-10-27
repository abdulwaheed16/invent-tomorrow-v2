// app/tech-stack/page.tsx
"use client";

import TechStackCard from "@/components/tech-stack-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { techLogos } from "@/utils/assets";
import { motion } from "framer-motion";
import { Filter, Grid, List, Search, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Tech stack data
const techStackData = [
  // Frontend
  { title: "React", category: "Frontend", color: "#61DAFB" },
  { title: "Next.js", category: "Frontend", color: "#000000" },
  { title: "Vue.js", category: "Frontend", color: "#4FC08D" },
  { title: "Angular", category: "Frontend", color: "#DD0031" },
  { title: "TypeScript", category: "Frontend", color: "#3178C6" },
  { title: "JavaScript", category: "Frontend", color: "#F7DF1E" },
  { title: "HTML5", category: "Frontend", color: "#E34F26" },
  { title: "CSS3", category: "Frontend", color: "#1572B6" },
  { title: "Tailwind CSS", category: "Frontend", color: "#06B6D4" },
  { title: "Sass", category: "Frontend", color: "#CC6699" },

  // Backend
  { title: "Node.js", category: "Backend", color: "#339933" },
  { title: "Python", category: "Backend", color: "#3776AB" },
  { title: "Java", category: "Backend", color: "#007396" },
  { title: "PHP", category: "Backend", color: "#777BB4" },
  { title: "Ruby", category: "Backend", color: "#CC342D" },
  { title: "Go", category: "Backend", color: "#00ADD8" },
  { title: "C#", category: "Backend", color: "#239120" },
  { title: "Express.js", category: "Backend", color: "#000000" },
  { title: "Django", category: "Backend", color: "#092E20" },
  { title: "Laravel", category: "Backend", color: "#FF2D20" },

  // Database
  { title: "PostgreSQL", category: "Database", color: "#4169E1" },
  { title: "MongoDB", category: "Database", color: "#47A248" },
  { title: "MySQL", category: "Database", color: "#4479A1" },
  { title: "Redis", category: "Database", color: "#DC382D" },
  { title: "Firebase", category: "Database", color: "#FFCA28" },
  { title: "Supabase", category: "Database", color: "#3ECF8E" },
  { title: "SQLite", category: "Database", color: "#003B57" },
  { title: "Elasticsearch", category: "Database", color: "#005571" },

  // Cloud & DevOps
  { title: "AWS", category: "Cloud & DevOps", color: "#FF9900" },
  { title: "Google Cloud", category: "Cloud & DevOps", color: "#4285F4" },
  { title: "Azure", category: "Cloud & DevOps", color: "#0078D4" },
  { title: "Docker", category: "Cloud & DevOps", color: "#2496ED" },
  { title: "Kubernetes", category: "Cloud & DevOps", color: "#326CE5" },
  { title: "Vercel", category: "Cloud & DevOps", color: "#000000" },
  { title: "Heroku", category: "Cloud & DevOps", color: "#430098" },
  { title: "GitHub Actions", category: "Cloud & DevOps", color: "#2088FF" },
  { title: "Jenkins", category: "Cloud & DevOps", color: "#D24939" },
  { title: "Terraform", category: "Cloud & DevOps", color: "#623CE4" },

  // Mobile
  { title: "React Native", category: "Mobile", color: "#61DAFB" },
  { title: "Flutter", category: "Mobile", color: "#02569B" },
  { title: "Swift", category: "Mobile", color: "#FA7343" },
  { title: "Kotlin", category: "Mobile", color: "#7F52FF" },
  { title: "Ionic", category: "Mobile", color: "#3880FF" },
  { title: "Xamarin", category: "Mobile", color: "#3498DB" },

  // AI/ML
  { title: "TensorFlow", category: "AI/ML", color: "#FF6F00" },
  { title: "PyTorch", category: "AI/ML", color: "#EE4C2C" },
  { title: "OpenAI", category: "AI/ML", color: "#412991" },
  { title: "LangChain", category: "AI/ML", color: "#1C3C6C" },
  { title: "Hugging Face", category: "AI/ML", color: "#FFD21E" },
  { title: "Scikit-learn", category: "AI/ML", color: "#F7931E" },
  { title: "Keras", category: "AI/ML", color: "#D00000" },

  // Testing
  { title: "Jest", category: "Testing", color: "#C21325" },
  { title: "Cypress", category: "Testing", color: "#17202C" },
  { title: "Mocha", category: "Testing", color: "#8D6748" },
  { title: "Playwright", category: "Testing", color: "#2EAD33" },
  { title: "Testing Library", category: "Testing", color: "#E33332" },

  // Tools & Others
  { title: "Git", category: "Tools & Others", color: "#F05032" },
  { title: "GitHub", category: "Tools & Others", color: "#181717" },
  { title: "Figma", category: "Tools & Others", color: "#F24E1E" },
  { title: "VS Code", category: "Tools & Others", color: "#007ACC" },
  { title: "Webpack", category: "Tools & Others", color: "#8DD6F9" },
  { title: "Vite", category: "Tools & Others", color: "#646CFF" },
  { title: "GraphQL", category: "Tools & Others", color: "#E10098" },
  { title: "REST API", category: "Tools & Others", color: "#2596BE" },
  { title: "WebRTC", category: "Tools & Others", color: "#333333" },
  { title: "Socket.io", category: "Tools & Others", color: "#010101" },
];

// Get unique categories
const categories = Array.from(
  new Set(techStackData.map((tech) => tech.category))
);

export default function TechStackPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filteredTech, setFilteredTech] = useState(techStackData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter tech stack based on search and category
  useEffect(() => {
    let filtered = techStackData;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((tech) => tech.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter((tech) =>
        tech.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTech(filtered);
  }, [searchTerm, selectedCategory]);

  // Get category count
  const getCategoryCount = (category: string) => {
    if (category === "All") return techStackData.length;
    return techStackData.filter((tech) => tech.category === category).length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 overflow-hidden">
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

        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.2}
            >
              <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-medium backdrop-blur-sm">
                Our Tech Stack
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Technologies{" "}
                <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  We Master
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
                Explore our comprehensive technology stack that powers
                innovative solutions across various domains.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-80"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className={`${isFilterOpen ? "block" : "hidden md:block"}`}>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Categories</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFilterOpen(false)}
                className="md:hidden"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === "All" ? "default" : "outline"}
                className="cursor-pointer px-3 py-1"
                onClick={() => setSelectedCategory("All")}
              >
                All ({getCategoryCount("All")})
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className="cursor-pointer px-3 py-1"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({getCategoryCount(category)})
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredTech.length}</span>{" "}
            technologies
            {selectedCategory !== "All" && (
              <>
                {" "}
                in <span className="font-semibold">{selectedCategory}</span>
              </>
            )}
            {searchTerm && (
              <>
                {" "}
                matching <span className="font-semibold">"{searchTerm}"</span>
              </>
            )}
          </p>
        </div>
      </section>

      {/* Tech Stack Grid/List */}
      <section className="container pb-16">
        {filteredTech.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={
              viewMode === "grid"
                ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                : "space-y-4"
            }
          >
            {filteredTech.map((tech, index) => (
              <motion.div
                key={`${tech.title}-${index}`}
                variants={fadeInUp}
                custom={index * 0.05}
              >
                {viewMode === "grid" ? (
                  <TechStackCard tech={tech} index={index} />
                ) : (
                  <Card className="p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full p-1 flex items-center justify-center bg-gray-50 flex-shrink-0">
                        <Image
                          src={techLogos?.dockerLogo?.src}
                          alt={tech.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">
                          {tech.title}
                        </h3>
                        <p className="text-sm text-gray-500">{tech.category}</p>
                      </div>
                      <Badge variant="outline">{tech.category}</Badge>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No technologies found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria to find what you're
                looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can leverage these technologies to build your
              next project.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <a
                href="https://calendly.com/abdulhaadi-businesschat/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
