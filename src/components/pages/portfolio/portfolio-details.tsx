"use client";

import CallToAction from "@/components/call-to-action";
import HeroSectionPage from "@/components/hero-section-page";
import TechStackCard from "@/components/tech-stack-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Lightbulb,
  Maximize2,
  Play,
  Quote,
  Target,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PortfolioItem } from "../../../lib/types/portfolio.types";

export function PortfolioDetailContent({
  portfolio,
}: {
  portfolio: PortfolioItem;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <div className="min-h-screen bg-white">
      {/* ------------------------------------------------- */}
      {/*  HERO SECTION                                     */}
      {/* ------------------------------------------------- */}
      <HeroSectionPage>
        <div className="container">
          <AnimatedWrapper animation="fadeUp" delay={0.1} className="max-w-4xl">
            <Link href="/portfolio" className="cursor-pointer">
              <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium">
                <ArrowLeft className="w-5 h-5" />
                Back to Portfolio
              </div>
            </Link>
          </AnimatedWrapper>
        </div>
        <div className="container pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title & Info */}
          <AnimatedWrapper animation="fadeUp" delay={0.2}>
            <Badge className="mb-4 bg-white/20 text-white border-white/30 px-4 py-2">
              {portfolio.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {portfolio.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {portfolio.description}
            </p>

            {/* Project Meta Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/80">
                <span className="font-medium">Client:</span>
                <span>{portfolio.client}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="font-medium">Year:</span>
                <span>{portfolio.year}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="font-medium">Duration:</span>
                <span>{portfolio.duration}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {portfolio.liveUrl && (
                <AnimatedWrapper animation="bounceIn" delay={0.4}>
                  <Link
                    href={portfolio.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
                    data-testid="view-live-site"
                  >
                    View Live Site
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </AnimatedWrapper>
              )}
              <AnimatedWrapper animation="bounceIn" delay={0.5}>
                <Link
                  href="https://calendly.com/abdulhaadi-businesschat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  data-testid="discuss-project"
                >
                  Discuss Similar Project
                </Link>
              </AnimatedWrapper>
            </div>
          </AnimatedWrapper>

          {/* Right: Media Carousel */}
          <AnimatedWrapper animation="fadeUp" delay={0.3}>
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
                <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/30 border-none size-10 text-white" />
                <CarouselNext className="right-4 bg-white/20 hover:bg-white/30 border-none size-10 text-white" />
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
                        className="pl-2 basis-1/4 md:basis-1/5 lg:basis-1/4"
                      >
                        <div
                          onClick={() => handleThumbClick(index)}
                          className={`relative h-20 rounded-lg overflow-hidden ring-1 ring-white/50 cursor-pointer transition-all ${
                            current === index + 1
                              ? "ring-2 ring-white scale-105"
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
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              openMediaViewer(index);
                            }}
                            className="absolute bottom-1 right-1 bg-black/70 hover:bg-black/90 text-white p-1 rounded transition-all hover:scale-110 size-6"
                            data-testid={`thumbnail-viewer-${index}`}
                          >
                            <Maximize2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            )}
          </AnimatedWrapper>
        </div>
      </HeroSectionPage>

      {/* ------------------------------------------------- */}
      {/* CHALLENGE & SOLUTION SECTION                      */}
      {/* ------------------------------------------------- */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-16 overflow-hidden"
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container relative z-10">
          <AnimatedWrapper animation="fadeUp" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From <span className="text-red-500">Challenge</span> to{" "}
              <span className="text-green-600">Solution</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              How we transformed obstacles into opportunities
            </p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedWrapper animation="slideInLeft" disabledOnMobile={true}>
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
            </AnimatedWrapper>

            <AnimatedWrapper animation="slideInRight" disabledOnMobile={true}>
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
            </AnimatedWrapper>
          </div>
        </div>
      </AnimatedSection>

      {/* ------------------------------------------------- */}
      {/*  KEY RESULTS SECTION                              */}
      {/* ------------------------------------------------- */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-16 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden"
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container relative z-10">
          <AnimatedWrapper animation="fadeUp" className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Results & <span className="text-blue-600">Impact</span>
            </h3>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
              Tangible outcomes that demonstrate the value we delivered
            </p>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.results.map((result, index) => (
              <AnimatedWrapper
                key={index}
                animation="slideInLeft"
                delay={index * 0.1}
                disabledOnMobile={true}
                className="group"
              >
                <div
                  className={`relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 transition-all duration-300 cursor-pointer overflow-hidden ${
                    hoveredIndex === index
                      ? "transform scale-105 shadow-2xl bg-white/95"
                      : hoveredIndex !== null
                        ? "opacity-60"
                        : "hover:shadow-xl"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Subtle Pattern Overlay */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : ""
                    }`}
                  >
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/30 rounded-full" />
                    <div className="absolute top-8 left-8 w-1 h-1 bg-indigo-400/30 rounded-full" />
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-blue-400/30 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-1 h-1 bg-indigo-400/30 rounded-full" />
                  </div>

                  <div className="flex items-center gap-4 relative z-10">
                    {/* Animated Icon Container */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-green-500 shadow-md flex-shrink-0 transition-all duration-300 ${
                        hoveredIndex === index
                          ? "bg-green-100 ring-4 ring-green-500/30 transform rotate-12"
                          : "bg-white ring-2 ring-green-500"
                      }`}
                    >
                      <CheckCircle
                        className={`w-6 h-6 transition-all duration-300 ${
                          hoveredIndex === index ? "text-green-600" : ""
                        }`}
                      />
                    </div>

                    {/* Result Text */}
                    <p
                      className={`text-slate-700 font-medium text-lg leading-relaxed transition-all duration-300 ${
                        hoveredIndex === index ? "text-slate-900" : ""
                      }`}
                    >
                      {result}
                    </p>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ------------------------------------------------- */}
      {/*  TECHNOLOGIES USED SECTION                        */}
      {/* ------------------------------------------------- */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-16 overflow-hidden"
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30" />
        </div>

        <div className="container relative z-10">
          <AnimatedWrapper animation="fadeUp" className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Technologies <span className="text-blue-600">We Used</span>
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Industry-leading tools and frameworks powering this solution
            </p>
          </AnimatedWrapper>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {portfolio.technologies.map((tech, index) => (
                <AnimatedWrapper
                  key={index}
                  animation="zoomIn"
                  delay={index * 0.05}
                  disabledOnMobile={true}
                >
                  <TechStackCard tech={tech} index={index} />
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ------------------------------------------------- */}
      {/* ---------------- KEY FEATURES SECTION ----------- */}
      {/* ------------------------------------------------- */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-16 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
      >
        {/* Multi-layer Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-600/5 rounded-full filter blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container relative z-10">
          <AnimatedWrapper animation="fadeUp" className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Features <span className="text-blue-600">Delivered</span>
            </h3>
            <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
              Innovative functionalities that set this project apart
            </p>
          </AnimatedWrapper>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {portfolio.features.map((feature, index) => (
              <AnimatedWrapper
                key={index}
                animation="zoomIn"
                delay={index * 0.1}
                disabledOnMobile={true}
                className="group"
              >
                <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-tl-4xl rounded-br-4xl sm:rounded-tl-full sm:rounded-br-full shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Feature Number - More Attractive */}
                  <div className="absolute top-4 left-10 text-5xl font-bold text-slate-200 select-none transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110 group-hover:rotate-3">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Decorative Circle Behind Number */}
                  <div className="absolute top-2 left-8 w-16 h-16 bg-blue-500/10 rounded-full blur-xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150" />

                  {/* Feature Content */}
                  <div className="flex flex-col items-center justify-center h-full relative z-10">
                    <p className="text-slate-700 font-normal text-center text-md leading-relaxed transition-all duration-300 group-hover:text-slate-800 group-hover:scale-105">
                      {feature}
                    </p>
                  </div>

                  {/* Decorative Element at Bottom Right */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150" />
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ------------------------------------------------- */}
      {/* TESTIMONIAL SECTION                               */}
      {/* ------------------------------------------------- */}

      {portfolio.testimonial && (
        <AnimatedSection animation="fadeUp" className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <AnimatedWrapper animation="slideInRight" delay={0.2}>
                <div className="text-center">
                  {/* Quote Icon */}
                  <Quote className="w-16 h-16 text-blue-200 mx-auto mb-8" />

                  {/* Testimonial Quote */}
                  <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-12 max-w-4xl mx-auto text-slate-800">
                    {portfolio.testimonial.quote}
                  </blockquote>

                  {/* Author Information */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {portfolio.testimonial.author.charAt(0)}
                    </div>

                    <div>
                      <div className="font-semibold text-lg text-slate-900">
                        {portfolio.testimonial.author}
                      </div>
                      <div className="text-slate-600">
                        {portfolio.testimonial.role}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {portfolio.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* ------------------------------------------------- */}
      {/* -------------- RELATED PROJECTS SECTION --------- */}
      {/* ------------------------------------------------- */}
      {relatedProjects.length > 0 && (
        <AnimatedSection
          animation="fadeUp"
          className="relative py-16 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-600 rounded-full filter blur-3xl" />
          </div>

          <div className="container relative z-10">
            <AnimatedWrapper animation="fadeUp" className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Related <span className="text-blue-600">Projects</span>
              </h3>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Explore more of our work in similar categories
              </p>
            </AnimatedWrapper>

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
                      <AnimatedWrapper
                        key={project.id}
                        animation="zoomIn"
                        delay={index * 0.1}
                        disabledOnMobile={true}
                      >
                        <Link href={`/portfolio/${project.slug}`}>
                          <div className="h-full group">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/50">
                              <div className="relative h-64 overflow-hidden">
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
                                  <div className="bg-white/90 backdrop-blur-sm  px-4 py-2 rounded-full font-medium text-slate-900 cursor-pointer">
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
                          </div>
                        </Link>
                      </AnimatedWrapper>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="left-2 bg-white/90 hover:bg-white border-slate-200 rounded-lg size-12  text-slate-700 shadow-lg"
                  disabled={relatedProjects.length <= 1}
                />
                <CarouselNext className="right-2 bg-white/90 hover:bg-white border-slate-200 rounded-lg size-12  text-slate-700 shadow-lg" />
              </Carousel>
            </div>

            {/* View All Projects Button */}
            <div className="text-center my-12">
              <AnimatedWrapper animation="bounceIn" delay={0.2}>
                <Link href="/portfolio">
                  <Button className="inline-flex items-center gap-2 bg-blue-600 text-white h-12 w-48 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors cursor-pointer">
                    View All Projects
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </Link>
              </AnimatedWrapper>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* ------------------------------------------------- */}
      {/* ------------------- CTA SECTION ----------------- */}
      {/* ------------------------------------------------- */}
      <div className="container">
        <CallToAction
          title={`Want Similar Results\nfor Your Project?`}
          subtitle="Project Inquiry"
          description="Let's discuss how we can help you achieve exceptional results like this. Our team is ready to bring your vision to life with the same expertise and dedication."
          buttonText="Let's Talk About Your Project"
          highlights={[
            {
              icon: <Zap className="w-5 h-5" />,
              text: "Free project consultation",
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
              text: "Custom solution roadmap",
            },
          ]}
          themeColor="blue"
        />
      </div>

      {/* ------------------------------------------------- */}
      {/* -------------- MEDIA VIEWER DIALOG -------------- */}
      {/* ------------------------------------------------- */}
      <MediaViewerDialog
        isOpen={isMediaViewerOpen}
        onClose={() => setIsMediaViewerOpen(false)}
        media={allMedia}
        initialIndex={selectedMediaIndex}
      />
    </div>
  );
}
