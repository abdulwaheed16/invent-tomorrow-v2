"use client";

import HeroSectionPage from "@/components/hero-section-page";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { type BlogPost } from "@/lib/data/blog-data";
import { motion } from "framer-motion";
import { ArrowRight, Grid3X3, List, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

const categories = [
  "All",
  "Technology",
  "Design",
  "Development",
  "Business",
  "AI & ML",

  "Mobile",
];

const sortOptions = [
  { value: "latest", label: "Latest First" },
  { value: "popular", label: "Most Popular" },
  { value: "trending", label: "Trending" },
];

interface BlogPageProps {
  blogPosts: BlogPost[];
}

export default function BlogPageClient({ blogPosts }: BlogPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort posts
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.views - a.views;
        case "trending":
          return b.likes - a.likes;
        default:
          return (
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
          );
      }
    });

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, sortBy, searchTerm]);

  // List View Card Component
  const ListCard = ({ post, index }: { post: BlogPost; index: number }) => (
    <AnimatedWrapper
      key={post.id}
      animation="slideInLeft"
      delay={index * 0.05}
      disabledOnMobile={true}
    >
      <Link href={`/blogs/${post.slug}`}>
        <motion.div className="group cursor-pointer">
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-500 p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 pr-6">
              <div className="relative h-56 md:h-full rounded-xl overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-blue-100 text-blue-600">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-slate-500">
                    {new Date(post.publishDate).toLocaleDateString()}
                  </span>
                  <span className="text-sm text-slate-500">•</span>
                  <span className="text-sm text-slate-500">
                    {post.readTime} min read
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-sm text-slate-700 font-medium">
                        {post.author.name}
                      </span>
                      <div className="text-xs text-slate-500">
                        {post.views} views
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    Read More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Link>
    </AnimatedWrapper>
  );

  // Grid View Card Component
  const GridCard = ({ post, index }: { post: BlogPost; index: number }) => (
    <AnimatedWrapper
      key={post.id}
      animation="zoomIn"
      delay={index * 0.1}
      disabledOnMobile={true}
    >
      <Link href={`/blogs/${post.slug}`}>
        <motion.div whileHover={{ y: -8 }} className="h-full">
          <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm border border-white/20 p-0">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-blue-100 text-blue-600">
                  {post.category}
                </Badge>
                <span className="text-sm text-slate-500">
                  {new Date(post.publishDate).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {post.author.name.charAt(0)}
                  </div>
                  <span className="text-sm text-slate-700 font-medium">
                    {post.author.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span>{post.readTime} min</span>
                  <span>•</span>
                  <span>{post.views} views</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Link>
    </AnimatedWrapper>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSectionPage>
        <div className="container relative z-10">
          <AnimatedWrapper
            animation="fadeUp"
            delay={0.2}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 rounded-full px-6 py-2 text-sm font-medium">
              Our Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Insights & <span className="text-blue-200">Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest trends, technologies, and best
              practices in the digital world.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md text-white placeholder-white/60 focus:border-white/50 focus:outline-none transition-all shadow-xl"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-white text-blue-600 shadow-lg"
                      : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Controls Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              {/* Sort Dropdown */}
              {/* <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 transition-all"
                >
                  <Filter className="w-4 h-4" />
                  {sortOptions.find((option) => option.value === sortBy)?.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 bg-white/90 backdrop-blur-md rounded-lg shadow-xl border border-white/30 py-2 z-50 min-w-[200px]">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 transition-colors"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div> */}

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    viewMode === "list"
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <List className="w-4 h-4" />
                  List
                </button>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </HeroSectionPage>

      {/* Blog Posts */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <AnimatedWrapper animation="fadeUp" className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-600 px-4 py-2 text-sm font-medium">
              {filteredPosts.length} Articles Found
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Our <span className="text-blue-600">Insights</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our latest insights and expert opinions on technology and
              innovation
            </p>
          </AnimatedWrapper>

          {/* Posts Container */}
          {filteredPosts.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {filteredPosts.map((post, index) =>
                viewMode === "grid" ? (
                  <GridCard key={post.id} post={post} index={index} />
                ) : (
                  <ListCard key={post.id} post={post} index={index} />
                )
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}
