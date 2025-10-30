"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getRelatedBlogPosts, type BlogPost } from "@/lib/data/blog-data";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronLeft,
  Clock,
  Eye,
  Hash,
  Heart,
  Menu,
  MessageCircle,
  Share2,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

interface HeadingNode {
  id: string;
  level: number;
  text: string;
  children: HeadingNode[];
}

// Custom scrollbar styles
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #2563eb, #7c3aed);
  }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #3b82f6 #8b5cf6 transparent;
  }
`;

// Skeleton Loading Component
function BlogDetailSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{scrollbarStyles}</style>
      {/* Back Button */}
      <div className="container pt-24 pb-8">
        <div className="flex items-center gap-2">
          <Skeleton className="w-5 h-5" />
          <Skeleton className="w-32 h-6" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Skeleton className="w-full h-full" />
      </section>

      {/* Article Content */}
      <section className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="p-8 md:p-12">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Skeleton key={i} className="w-full h-4" />
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-4">
                <Skeleton className="w-full h-6 mb-3" />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="w-full h-5" />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Function to extract headings from HTML content
function extractHeadings(htmlContent: string): HeadingNode[] {
  if (typeof window === "undefined") return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const headingElements = Array.from(
    doc.querySelectorAll("h1, h2, h3, h4, h5, h6")
  );

  const headings: HeadingNode[] = [];
  const stack: HeadingNode[] = [];

  headingElements.forEach((element) => {
    const level = parseInt(element.tagName.substring(1));
    const text = element.textContent || "";
    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

    const heading: HeadingNode = {
      id,
      level,
      text,
      children: [],
    };

    // Find the appropriate parent in the stack
    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length === 0) {
      headings.push(heading);
    } else {
      stack[stack.length - 1].children.push(heading);
    }

    stack.push(heading);
  });

  return headings;
}

// Custom hook to handle smooth scrolling
function useSmoothScroll() {
  const scrollToHeading = (headingId: string) => {
    // First, ensure the heading element exists
    let element = document.getElementById(headingId);

    // If not found, try to find it by text content
    if (!element) {
      const allHeadings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      allHeadings.forEach((heading) => {
        const text = heading.textContent || "";
        const generatedId = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        if (generatedId === headingId) {
          element = heading as HTMLElement;
          // Add the ID if it doesn't exist
          if (!element.id) {
            element.id = headingId;
          }
        }
      });
    }

    if (element) {
      // Add the ID if it doesn't exist
      if (!element.id) {
        element.id = headingId;
      }

      // Calculate offset for sticky header
      const offset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Highlight the section briefly
      element.classList.add("ring-2", "ring-blue-500", "ring-offset-2");
      setTimeout(() => {
        element?.classList.remove("ring-2", "ring-blue-500", "ring-offset-2");
      }, 2000);
    }
  };

  return { scrollToHeading };
}

// Component to render headings as clickable items
function TableOfContentsItem({
  heading,
  level = 0,
  onHeadingClick,
  isActive,
}: {
  heading: HeadingNode;
  level?: number;
  onHeadingClick: (id: string) => void;
  isActive: boolean;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHeadingClick(heading.id);
  };

  return (
    <div key={heading.id} className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={handleClick}
        className={`w-full text-left py-2 px-2 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 rounded-md ${
          level === 0
            ? "font-semibold text-sm"
            : level === 1
            ? "font-medium text-xs pl-3"
            : "text-xs pl-6"
        } ${
          isActive
            ? "text-blue-600 bg-blue-50 shadow-sm"
            : "text-slate-600 hover:bg-slate-50"
        }`}
      >
        {level === 0 && (
          <span
            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
              isActive ? "bg-blue-600" : "bg-slate-400"
            }`}
          />
        )}
        {level === 1 && (
          <span
            className={`w-1 h-1 rounded-full flex-shrink-0 ml-1 ${
              isActive ? "bg-blue-500" : "bg-blue-300"
            }`}
          />
        )}
        {level === 2 && (
          <span
            className={`w-0.5 h-0.5 rounded-full flex-shrink-0 ml-2 ${
              isActive ? "bg-slate-600" : "bg-slate-300"
            }`}
          />
        )}
        <span className="truncate">{heading.text}</span>
      </button>
      {heading.children.length > 0 && (
        <div className="ml-1">
          {heading.children.map((child) => (
            <TableOfContentsItem
              key={child.id}
              heading={child}
              level={level + 1}
              onHeadingClick={onHeadingClick}
              isActive={isActive}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function BlogDetailContent({ post }: { post: BlogPost }) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  const [headings, setHeadings] = useState<HeadingNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarContainerRef = useRef<HTMLDivElement>(null);
  const { scrollToHeading } = useSmoothScroll();

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate sidebar height
  useEffect(() => {
    const updateSidebarHeight = () => {
      if (sidebarContainerRef.current && !isMobile) {
        const rect = sidebarContainerRef.current.getBoundingClientRect();
        setSidebarHeight(rect.height);
      }
    };

    updateSidebarHeight();
    window.addEventListener("resize", updateSidebarHeight);

    return () => window.removeEventListener("resize", updateSidebarHeight);
  }, [isMobile]);

  // Simulate loading with sleep function
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && post.content && typeof window !== "undefined") {
      const extractedHeadings = extractHeadings(post.content);
      setHeadings(extractedHeadings);

      // Add IDs to headings in the content
      setTimeout(() => {
        const contentElement = contentRef.current;
        if (contentElement) {
          const headingElements = contentElement.querySelectorAll(
            "h1, h2, h3, h4, h5, h6"
          );
          headingElements.forEach((element) => {
            const text = element.textContent || "";
            const id = text
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]/g, "");
            if (!element.id) {
              element.id = id;
            }
          });
        }
      }, 100);
    }
  }, [isLoading, post.content]);

  useEffect(() => {
    const related = getRelatedBlogPosts(post.id, post.category);
    setRelatedPosts(related);
  }, [post.id, post.category]);

  // Track active heading on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const headingElements = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6"
      );
      let current = "";

      headingElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          current = element.id || "";
        }
      });

      setActiveHeading(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  // Process content to add better styling
  const processContent = (html: string) => {
    if (typeof window === "undefined") return html;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Style headings
    doc.querySelectorAll("h1").forEach((h) => {
      h.className =
        "text-3xl md:text-4xl font-bold text-slate-900 mb-6 mt-8 first:mt-0";
    });

    doc.querySelectorAll("h2").forEach((h) => {
      h.className = "text-2xl md:text-3xl font-bold text-slate-900 mb-4 mt-8";
    });

    doc.querySelectorAll("h3").forEach((h) => {
      h.className =
        "text-xl md:text-2xl font-semibold text-slate-900 mb-3 mt-6";
    });

    // Style paragraphs
    doc.querySelectorAll("p").forEach((p) => {
      p.className = "text-slate-700 leading-relaxed mb-4 text-justify";
    });

    // Style lists
    doc.querySelectorAll("ul, ol").forEach((list) => {
      list.className = "my-4 ml-6 space-y-2";
    });

    doc.querySelectorAll("li").forEach((li) => {
      li.className = "text-slate-700 leading-relaxed";
    });

    // Style blockquotes
    doc.querySelectorAll("blockquote").forEach((blockquote) => {
      blockquote.className =
        "border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50 italic text-slate-700";
    });

    // Style code blocks
    doc.querySelectorAll("pre").forEach((pre) => {
      pre.className = "bg-slate-100 p-4 rounded-lg overflow-x-auto my-6";
    });

    doc.querySelectorAll("code").forEach((code) => {
      if (!code.parentElement?.tagName.includes("PRE")) {
        code.className =
          "bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-800";
      }
    });

    return doc.body.innerHTML;
  };

  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>
        {scrollbarStyles}
      </style>
      {/* Back Button */}
      <div className="container pt-24 pb-8">
        <Link href="/blog">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-medium relative z-10"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </motion.button>
        </Link>
      </div>

      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative container h-full flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
            className="max-w-4xl text-white"
          >
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 border border-white/30">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author and Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg font-bold border border-white/30">
                  {post.author.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">{post.author.name}</p>
                  <p className="text-sm text-white/80">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="hidden sm:inline">
                  {new Date(post.publishDate).toLocaleDateString()}
                </span>
                <span className="sm:hidden">
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} min</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>{post.views}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60"
          >
            <ChevronLeft className="w-8 h-8 rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Article Content with Right Sidebar */}
      <section className="container py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.6}
              >
                <div className="prose prose-lg max-w-none">
                  {/* Article Body */}
                  <Card className="p-6 md:p-8 lg:p-12 shadow-lg">
                    <div
                      ref={contentRef}
                      className="blog-content"
                      dangerouslySetInnerHTML={{
                        __html: processContent(post.content),
                      }}
                    />

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="pt-8 border-t border-slate-200">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <Hash className="w-4 h-4" />
                          Tags
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors text-xs"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>

                  {/* Engagement Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes} Likes</span>
                      </button>
                      <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments} Comments</span>
                      </button>
                    </div>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <div
                ref={sidebarContainerRef}
                className={`${!isMobile ? "lg:sticky lg:top-24" : ""}`}
                style={!isMobile ? { height: `${sidebarHeight}px` } : {}}
              >
                {/* Mobile Sidebar Toggle */}
                {isMobile && (
                  <div className="mb-4">
                    <Button
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg w-full justify-center text-sm"
                    >
                      {isSidebarOpen ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Menu className="w-4 h-4" />
                      )}
                      {isSidebarOpen ? "Hide" : "Show"} Contents
                    </Button>
                  </div>
                )}

                {/* Sidebar Content */}
                <div
                  ref={sidebarRef}
                  className={`${
                    isMobile ? (isSidebarOpen ? "block" : "hidden") : "block"
                  } ${
                    !isMobile
                      ? "overflow-y-auto max-h-[calc(100vh-120px)] custom-scrollbar"
                      : ""
                  }`}
                >
                  {/* Table of Contents */}
                  <Card className="p-3 md:p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg mb-4">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 mb-3">
                      Contents
                    </h3>
                    {headings.length > 0 ? (
                      <div className="space-y-0 max-h-80 overflow-y-auto custom-scrollbar pr-1">
                        {headings.map((heading) => (
                          <TableOfContentsItem
                            key={heading.id}
                            heading={heading}
                            onHeadingClick={scrollToHeading}
                            isActive={activeHeading === heading.id}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-600 text-xs">
                        No headings found
                      </p>
                    )}
                  </Card>

                  {/* Author Card */}
                  <Card className="p-3 md:p-4 bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 mb-3">
                      Author
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {post.author.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-slate-600">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Passionate about sharing insights on{" "}
                      {post.category.toLowerCase()} and helping others learn and
                      grow.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Related <span className="text-blue-600">Articles</span>
              </h2>
              <p className="text-slate-600">
                Discover more content similar to this article
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <Badge className="mb-3 bg-blue-100 text-blue-600">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {relatedPost.author.name.charAt(0)}
                            </div>
                            <span className="text-sm text-slate-700 hidden sm:inline">
                              {relatedPost.author.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                            Read More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Card className="p-8 md:p-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Enjoyed This Article?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights and updates
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-slate-900 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
