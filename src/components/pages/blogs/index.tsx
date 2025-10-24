"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getAllBlogPosts, type BlogPost } from "@/lib/data/blog-data";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  Search,
  User,
} from "lucide-react";
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
  "Web3",
  "Mobile",
];

const sortOptions = [
  { value: "latest", label: "Latest First" },
  { value: "popular", label: "Most Popular" },
  { value: "trending", label: "Trending" },
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const allPosts = getAllBlogPosts();
    setPosts(allPosts);
    setFeaturedPost(allPosts.find((post) => post.featured) || allPosts[0]);
    setFilteredPosts(allPosts);
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-600 px-4 py-2">
              Our Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Insights & <span className="text-blue-600">Innovation</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest trends, technologies, and best
              practices in the digital world.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:outline-none transition-colors bg-white/80 backdrop-blur-sm shadow-lg"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-blue-50 border border-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-center">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 hover:bg-blue-50 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  {sortOptions.find((option) => option.value === sortBy)?.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="text-center mb-8">
              <Badge className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Featured Article
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900">
                Editor&apos;s <span className="text-blue-600">Pick</span>
              </h2>
            </div>

            <Link href={`/blogs/${featuredPost.slug}`}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
                      <Image
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <Badge className="mb-4 w-fit bg-blue-100 text-blue-600">
                        {featuredPost.category}
                      </Badge>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(
                            featuredPost.publishDate
                          ).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime} min read
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold">
                        Read More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Link>
          </motion.div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="container pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Latest <span className="text-blue-600">Articles</span>
            </h2>
            <p className="text-slate-600">
              Discover our latest insights and expert opinions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blogs/${post.slug}`}>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {post.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            Featured
                          </Badge>
                        </div>
                      )}
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
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
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
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
