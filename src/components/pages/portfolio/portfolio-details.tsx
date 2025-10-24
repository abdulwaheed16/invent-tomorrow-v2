"use client";

import TechStackCard from "@/components/tech-stack-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import MediaViewerDialog from "@/components/ui/media-viewer-dialog";
import { getRelatedPortfolios } from "@/lib/data/portfolio-data";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  ExternalLink,
  Lightbulb,
  Maximize2,
  Play,
  Quote,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PortfolioItem } from "../../../../types/portfolio.types";

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

export function PortfolioDetailContent({
  portfolio,
}: {
  portfolio: PortfolioItem;
}) {
  const [isMediaViewerOpen, setIsMediaViewerOpen] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [mainCarouselApi, setMainCarouselApi] = useState<CarouselApi>();
  const [thumbCarouselApi, setThumbCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const relatedProjects = getRelatedPortfolios(
    portfolio.id,
    portfolio.category
  );

  // Prepare media array (video first, then images)
  const allMedia = [
    ...(portfolio.videoUrl
      ? [
          {
            type: "video" as const,
            url: portfolio.videoUrl,
            title: portfolio.title,
          },
        ]
      : []),
    ...portfolio.images.map((img) => ({
      type: "image" as const,
      url: typeof img === "string" ? img : img.src,
      title: portfolio.title,
    })),
  ];

  const openMediaViewer = (index: number) => {
    setSelectedMediaIndex(index);
    setIsMediaViewerOpen(true);
  };

  useEffect(() => {
    if (!mainCarouselApi) {
      return;
    }

    setCurrent(mainCarouselApi.selectedScrollSnap() + 1);

    mainCarouselApi.on("select", () => {
      setCurrent(mainCarouselApi.selectedScrollSnap() + 1);
    });
  }, [mainCarouselApi]);

  useEffect(() => {
    if (!thumbCarouselApi || !mainCarouselApi) {
      return;
    }

    const syncCarousels = () => {
      const selected = mainCarouselApi.selectedScrollSnap();
      thumbCarouselApi.scrollTo(selected);
    };

    mainCarouselApi.on("select", syncCarousels);
  }, [thumbCarouselApi, mainCarouselApi]);

  const handleThumbClick = (index: number) => {
    if (mainCarouselApi) {
      mainCarouselApi.scrollTo(index);
    }
  };

  // Get appropriate icon for each stat
  const getStatIcon = (label: string) => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes("user") || lowerLabel.includes("customer")) {
      return Users;
    }
    if (
      lowerLabel.includes("time") ||
      lowerLabel.includes("hour") ||
      lowerLabel.includes("speed")
    ) {
      return Clock;
    }
    if (
      lowerLabel.includes("growth") ||
      lowerLabel.includes("increase") ||
      lowerLabel.includes("revenue")
    ) {
      return TrendingUp;
    }
    if (lowerLabel.includes("award") || lowerLabel.includes("recognition")) {
      return Award;
    }
    if (lowerLabel.includes("goal") || lowerLabel.includes("target")) {
      return Target;
    }
    return Zap;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container pt-24 pb-8">
        <Link href="/portfolio">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
            data-testid="back-to-portfolio"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title & Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-600 px-4 py-2">
              {portfolio.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {portfolio.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {portfolio.description}
            </p>

            {/* Project Meta Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-medium">Client:</span>
                <span>{portfolio.client}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-medium">Year:</span>
                <span>{portfolio.year}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-medium">Duration:</span>
                <span>{portfolio.duration}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {portfolio.liveUrl && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={portfolio.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                    data-testid="view-live-site"
                  >
                    View Live Site
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </motion.div>
              )}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://calendly.com/abdulhaadi-businesschat/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                data-testid="discuss-project"
              >
                Discuss Similar Project
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Media Carousel */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.4}
            className="relative"
          >
            {/* Main Media Carousel */}
            <div className="relative">
              <Carousel
                setApi={setMainCarouselApi}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {allMedia.map((media, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[400px] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
                        {media.type === "video" ? (
                          <div
                            className="relative h-full cursor-pointer"
                            onClick={() => openMediaViewer(index)}
                            data-testid={`video-main-${index}`}
                          >
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                              <div className="relative">
                                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30" />
                                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border-4 border-white/30">
                                  <Play className="w-12 h-12 text-white fill-white" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                              <Play className="w-4 h-4 fill-white" />
                              Watch Demo
                            </div>
                          </div>
                        ) : (
                          <div
                            className="relative h-full cursor-pointer"
                            onClick={() => openMediaViewer(index)}
                            data-testid={`image-main-${index}`}
                          >
                            <Image
                              src={media.url}
                              alt={`${portfolio.title} - Media ${index + 1}`}
                              height={600}
                              width={600}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        )}

                        {/* Media Viewer Button - Center of Main Display */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openMediaViewer(index);
                          }}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all hover:scale-110"
                          data-testid={`main-media-viewer-${index}`}
                        >
                          <Maximize2 className="w-6 h-6" />
                        </button>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-black/50 hover:bg-black/70 border-none text-white" />
                <CarouselNext className="right-4 bg-black/50 hover:bg-black/70 border-none text-white" />
              </Carousel>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                {allMedia.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all ${
                      current === index + 1 ? "w-8 bg-white" : "w-1 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Carousel */}
            {allMedia.length > 1 && (
              <div className="mt-4">
                <Carousel
                  setApi={setThumbCarouselApi}
                  className="w-full"
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                >
                  <CarouselContent className="px-4 py-2">
                    {allMedia.map((media, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-2 basis-1/4 md:basis-1/5 lg:basis-1/6"
                      >
                        <div
                          onClick={() => handleThumbClick(index)}
                          className={`relative h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                            current === index + 1
                              ? "ring-2 ring-blue-600 scale-105"
                              : "opacity-70 hover:opacity-100"
                          }`}
                          data-testid={`thumbnail-${index}`}
                        >
                          {media.type === "video" ? (
                            <div className="relative h-full">
                              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                                <Play className="w-6 h-6 text-white fill-white" />
                              </div>
                              <div className="absolute top-1 left-1 bg-red-600 text-white px-1 py-0.5 rounded text-xs font-semibold">
                                Video
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={media.url}
                              alt={`${portfolio.title} - Thumbnail ${
                                index + 1
                              }`}
                              height={600}
                              width={600}
                              className="object-cover w-full h-full"
                            />
                          )}

                          {/* Media Viewer Button - Corner of Thumbnail */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openMediaViewer(index);
                            }}
                            className="absolute bottom-1 right-1 bg-black/70 hover:bg-black/90 text-white p-1 rounded transition-all hover:scale-110"
                            data-testid={`thumbnail-viewer-${index}`}
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution - Enhanced with Background */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              From <span className="text-red-500">Challenge</span> to{" "}
              <span className="text-green-600">Solution</span>
            </motion.h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              How we transformed obstacles into opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl transform rotate-1" />
                <Card className="relative h-full p-8 border-0 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14  rounded-full flex items-center justify-center ring ring-gray-100 text-red-500 shadow-lg">
                      <Target className="w-7 h-7 " />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      The Challenge
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {portfolio.challenge}
                  </p>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.4}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl transform -rotate-1" />
                <Card className="relative h-full p-8 border-0 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 ring ring-gray-100 rounded-full flex items-center justify-center text-green-500 shadow-lg">
                      <Lightbulb className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Our Solution
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {portfolio.solution}
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="relative py-16 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Results & <span className="text-blue-600">Impact</span>
            </h3>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
              Tangible outcomes that demonstrate the value we delivered
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {portfolio.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12  rounded-full flex items-center justify-center text-green-500 ring ring-green-500 shadow-md flex-shrink-0">
                      <CheckCircle className="w-6 h-6 " />
                    </div>
                    <p className="text-slate-700 font-medium text-lg leading-relaxed">
                      {result}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Used - Enhanced with Background */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Technologies <span className="text-blue-600">We Used</span>
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Industry-leading tools and frameworks powering this solution
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {portfolio.technologies.map((tech, index) => (
                <TechStackCard key={index} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Enhanced with Graphical Pattern */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-600 rounded-full filter blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Features <span className="text-blue-600">Delivered</span>
            </h3>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
              Innovative functionalities that set this project apart
            </p>

            {/* Graphical Feature Flow */}
            <div className="relative mt-8">
              {/* Connection Lines Background */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 200H200M300 200H400M500 200H600M700 200H800"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                <path
                  d="M100 100H200M300 100H400M500 100H600M700 100H800"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                <path
                  d="M100 300H200M300 300H400M500 300H600M700 300H800"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
              </svg>

              {/* Feature Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10">
                {portfolio.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative"
                  >
                    {/* Connection Lines */}
                    {index < portfolio.features.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                    )}

                    {/* Feature Node */}
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 relative">
                      <div className="flex flex-col items-center">
                        {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-md mb-3">
                          <Sparkles className="w-6 h-6" />
                        </div> */}
                        <p className="text-slate-700 font-medium text-center text-sm leading-relaxed">
                          {feature}
                        </p>
                      </div>

                      {/* Node Number */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial - Enhanced with Background */}
      {portfolio.testimonial && (
        <section className="relative py-16 overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20" />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-12 relative overflow-hidden shadow-xl">
                <Quote className="absolute top-8 left-8 w-16 h-16 text-blue-200" />
                <div className="relative z-10">
                  <p className="text-2xl text-slate-800 mb-8 leading-relaxed italic">
                    {portfolio.testimonial.quote}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {portfolio.testimonial.author.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 text-lg">
                        {portfolio.testimonial.author}
                      </p>
                      <p className="text-slate-600">
                        {portfolio.testimonial.role}
                      </p>
                      <p className="text-slate-500 text-sm">
                        {portfolio.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects - Enhanced with Background */}
      {relatedProjects.length > 0 && (
        <section className="relative py-16 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-600 rounded-full filter blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Related <span className="text-blue-600">Projects</span>
                </h3>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  Explore more of our work in similar categories
                </p>
              </div>

              {/* Projects Carousel */}
              <div className="relative">
                <Carousel
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent className="-ml-4">
                    {relatedProjects.map((project, index) => (
                      <CarouselItem
                        key={project.id}
                        className="pl-4 md:basis-1/2 lg:basis-1/3"
                      >
                        <Link href={`/portfolio/${project.slug}`}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="h-full group"
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/50">
                              <div className="relative h-48 overflow-hidden">
                                <Image
                                  src={project.images[0]}
                                  alt={project.title}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* View Project Button - Appears on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-slate-900">
                                    View Project
                                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                                  </div>
                                </div>
                              </div>
                              <div className="p-6">
                                <Badge className="mb-2 bg-blue-100 text-blue-600">
                                  {project.category}
                                </Badge>
                                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                  {project.title}
                                </h4>
                                <p className="text-slate-600 text-sm line-clamp-2">
                                  {project.description}
                                </p>

                                {/* Project Meta */}
                                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                                  <span>{project.year}</span>
                                  <span>•</span>
                                  <span>{project.duration}</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-slate-200 text-slate-700 shadow-lg" />
                  <CarouselNext className="right-2 bg-white/90 hover:bg-white border-slate-200 text-slate-700 shadow-lg" />
                </Carousel>
              </div>

              {/* View All Projects Button */}
              <div className="text-center mt-12">
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Projects
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA - Enhanced with Background */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Want Similar Results for Your Project?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help you achieve exceptional
                  results like this.
                </p>
                <Link
                  href="https://calendly.com/abdulhaadi-businesschat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-slate-100 transition-colors"
                    data-testid="cta-lets-talk"
                  >
                    Let&apos;s Talk About Your Project
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Viewer Dialog */}
      <MediaViewerDialog
        isOpen={isMediaViewerOpen}
        onClose={() => setIsMediaViewerOpen(false)}
        media={allMedia}
        initialIndex={selectedMediaIndex}
      />
    </div>
  );
}

//  {/* Stats Section */}
//   {portfolio.stats && (
//     <section className="relative py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl" />
//       </div>

//       <div className="container relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <div className="text-center mb-8">
//             <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
//               Project <span className="text-blue-600">Impact</span>
//             </h3>
//             <p className="text-slate-600">
//               Key metrics that demonstrate our success
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//             {portfolio.stats.map((stat, index) => {
//               const Icon = getStatIcon(stat.label);
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   whileHover={{ y: -5, scale: 1.05 }}
//                   className="text-center"
//                 >
//                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
//                     {/* Icon */}
//                     <div className="relative mb-4 inline-flex">
//                       <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur-lg opacity-20" />
//                       <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl text-white shadow-md">
//                         <Icon className="w-6 h-6" />
//                       </div>
//                     </div>

//                     {/* Stat Value */}
//                     <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                       {stat.value}
//                     </h4>

//                     {/* Stat Label */}
//                     <p className="text-slate-700 font-medium text-sm leading-relaxed">
//                       {stat.label}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )}
