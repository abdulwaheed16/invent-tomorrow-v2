"use client";

import CallToAction from "@/components/call-to-action";
import HeroSectionPage from "@/components/hero-section-page";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioCategories } from "@/lib/data/portfolio-data";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PortfolioItem } from "../../../../types/portfolio.types";


interface PortfolioPageProps {
  portfolioItems: PortfolioItem[];
}

export default function PortfolioPageClient({portfolioItems}: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPortfolios =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white ">
      {/* ------------------------------------------------ */}
      {/* ------------------- HERO SECTION ---------------- */}
      {/* ------------------------------------------------ */}
      <HeroSectionPage>
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <AnimatedWrapper animation="fadeUp" delay={0.2}>
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
                  Discover how we&apos;ve helped businesses achieve their goals
                  through innovative solutions and exceptional results.
                </p>

                {/* CTA Button */}
                <Link href="#portfolio-grid">
                  <Button className="flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-slate-100 transition-colors">
                    Explore Success Stories
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </AnimatedWrapper>

              {/* Right Content - Image Showcase */}
              <AnimatedWrapper
                animation="fadeUp"
                delay={0.4}
                className="relative"
              >
                <div className="relative">
                  {/* Main featured project */}
                  <div className="relative z-20">
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
                  </div>

                  {/* Floating project cards */}
                  <AnimatedWrapper
                    animation="zoomIn"
                    delay={0.6}
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
                  </AnimatedWrapper>

                  <AnimatedWrapper
                    animation="zoomIn"
                    delay={0.8}
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
                  </AnimatedWrapper>

                  {/* Decorative elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </HeroSectionPage>

      <div className="container">
        {/* ------------------------------------------------ */}
        {/* --------------- PORTFOLIO GRID SECTION --------- */}
        {/* ------------------------------------------------ */}

        <div id="portfolio-grid" className="container py-16">
          {/* Category Filter */}
          <AnimatedSection animation="fadeUp" className="mb-12">
            <AnimatedWrapper animation="fadeUp" className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our <span className="text-blue-600">Work</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Browse our portfolio by category to find projects that match
                your interests
              </p>
            </AnimatedWrapper>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {portfolioCategories.map((category, index) => (
                <AnimatedWrapper
                  key={category.id}
                  animation="fadeUp"
                  delay={index * 0.1}
                  disabledOnMobile={true}
                >
                  <button
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                    data-testid={`filter-${category.id}`}
                  >
                    {category.name}
                  </button>
                </AnimatedWrapper>
              ))}
            </div>
          </AnimatedSection>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolios.map((portfolio, index) => (
              <AnimatedWrapper
                key={portfolio.id}
                animation="zoomIn"
                delay={index * 0.1}
                disabledOnMobile={true}
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
                        <div className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg">
                          View Project
                          <ArrowRight className="w-5 h-5" />
                        </div>
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
              </AnimatedWrapper>
            ))}
          </div>

          {/* No Results */}
          {filteredPortfolios.length === 0 && (
            <AnimatedWrapper animation="fadeUp" className="text-center py-20">
              <p className="text-2xl text-slate-500">
                No projects found in this category.
              </p>
            </AnimatedWrapper>
          )}
        </div>

        {/* ------------------------------------------------ */}
        {/* ------------------- CTA SECTION ----------------- */}
        {/* ------------------------------------------------ */}
        <CallToAction
          title={`Let's Build Your\nNext Success Story`}
          subtitle="Inspired by Our Work?"
          description="Ready to transform your idea into a reality? Our team is here to help you create a product that stands out in the market."
          buttonText="Discuss Your Project"
          buttonLink="https://calendly.com/abdulhaadi-businesschat/30min"
          highlights={[
            {
              icon: <Zap className="w-5 h-5" />,
              text: "Free initial consultation",
            },
            {
              icon: (
                <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
              ),
              text: "30-minute discovery call",
            },
            {
              icon: (
                <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
              ),
              text: "Custom project roadmap",
            },
          ]}
          themeColor="blue"
        />
      </div>
    </div>
  );
}
