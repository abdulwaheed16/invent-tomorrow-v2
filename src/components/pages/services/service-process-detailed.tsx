"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  Layers,
  LucideIcon,
  Package,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Search,
  Layers,
  Code,
  Rocket,
  TrendingUp,
  Activity,
  ArrowRight,
  CheckCircle,
  Clock,
  Package,
  Sparkles,
  Target,
};

// Type definitions
interface ProcessStep {
  title: string;
  duration: string;
  icon: string;
  description: string;
  deliverables: string[];
  keyActivities: string[];
}

interface ServiceProcessDetailedProps {
  process: ProcessStep[];
}

export default function ServiceProcessDetailed({
  process,
}: ServiceProcessDetailedProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [previousIndex, setPreviousIndex] = useState<number>(0);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const handleAccordionClick = (index: number) => {
    if (isAnimating || activeIndex === index) return;

    setIsAnimating(true);
    setPreviousIndex(activeIndex);
    setActiveIndex(index);

    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  // Calculate content height for smooth transitions
  useEffect(() => {
    const updateContentHeight = () => {
      const activeElement = document.getElementById(
        `accordion-content-${activeIndex}`
      );
      if (activeElement) {
        setContentHeight(activeElement.scrollHeight);
      }
    };

    updateContentHeight();
    window.addEventListener("resize", updateContentHeight);
    return () => window.removeEventListener("resize", updateContentHeight);
  }, [activeIndex, process]);

  if (!process || process.length === 0) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* ------------------------------------------------ */}
      {/* --------------- PROCESS SECTION --------------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/30 via-indigo-800/20 to-purple-900/30"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <AnimatedWrapper animation="fadeUp" className="text-center mb-16">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-medium">
                Implementation Process
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our{" "}
                <span className="text-blue-200">Implementation Process</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                A structured approach to implementation that ensures successful
                deployment, measurable outcomes, and long-term success for your
                organization.
              </p>
            </AnimatedWrapper>

            {/* Large Screens: Horizontal Accordion */}
            <div className="hidden xl:block">
              <div className="flex h-[630px] gap-3">
                {process.map((phase: ProcessStep, index: number) => {
                  const Icon = iconMap[phase.icon] || Search;
                  const isActive = activeIndex === index;
                  const isPrevious = previousIndex === index;

                  return (
                    <AnimatedWrapper
                      key={index}
                      animation="zoomIn"
                      delay={index * 0.1}
                      disabledOnMobile={true}
                      className="relative group"
                    >
                      <div
                        className={`relative h-full bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                          isActive
                            ? "flex-[4] bg-white/20 border border-white/30 shadow-2xl"
                            : "flex-1 bg-white/5 border border-white/20 shadow-lg hover:bg-white/10 hover:border-white/30"
                        }`}
                        onClick={() => handleAccordionClick(index)}
                        style={{
                          zIndex: isActive ? 10 : 1,
                          transform: isActive ? "scale(1)" : "scale(0.98)",
                        }}
                      >
                        {/* Animated gradient overlay */}
                        <div
                          className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-30"
                          }`}
                          style={{
                            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`,
                          }}
                        />

                        {/* Content Container */}
                        <div className="flex flex-col h-full p-8">
                          {/* Main Content */}
                          <div className="flex-1 flex flex-col justify-center pb-3 overflow-hidden">
                            {/* Active Content */}
                            <div
                              className={`transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                                isActive
                                  ? "opacity-100 translate-y-0 scale-100"
                                  : "opacity-0 translate-y-8 scale-95 absolute"
                              }`}
                            >
                              {isActive && (
                                <div className="space-y-6">
                                  <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-300 hover:scale-105">
                                      <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                      <h3 className="text-3xl font-bold text-white">
                                        {phase.title}
                                      </h3>
                                      <span className="text-sm text-blue-200 font-medium">
                                        {phase.duration}
                                      </span>
                                    </div>
                                  </div>

                                  <p className="text-blue-100 leading-relaxed">
                                    {phase.description}
                                  </p>

                                  <div className="grid grid-cols-1 gap-6">
                                    <div>
                                      <h4 className="font-semibold text-white mb-3 flex items-center">
                                        <Package
                                          size={18}
                                          className="mr-2 text-blue-300"
                                        />
                                        Key Deliverables
                                      </h4>
                                      <ul className="space-y-2">
                                        {phase.deliverables.map(
                                          (deliverable, idx) => (
                                            <li
                                              key={idx}
                                              className="flex items-center text-sm text-blue-100 transition-all duration-300 hover:translate-x-1"
                                              style={{
                                                animationDelay: `${idx * 50}ms`,
                                              }}
                                            >
                                              <CheckCircle
                                                size={14}
                                                className="mr-2 text-green-400 flex-shrink-0 transition-transform duration-300 hover:scale-110"
                                              />
                                              {deliverable}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>

                                    <div>
                                      <h4 className="font-semibold text-white mb-3 flex items-center">
                                        <Activity
                                          size={18}
                                          className="mr-2 text-blue-300"
                                        />
                                        Key Activities
                                      </h4>
                                      <ul className="space-y-2">
                                        {phase.keyActivities.map(
                                          (activity, idx) => (
                                            <li
                                              key={idx}
                                              className="flex items-start text-sm text-blue-100 transition-all duration-300 hover:translate-x-1"
                                              style={{
                                                animationDelay: `${idx * 50 + 200}ms`,
                                              }}
                                            >
                                              <ArrowRight
                                                size={14}
                                                className="mr-2 mt-0.5 text-blue-400 flex-shrink-0 transition-transform duration-300 hover:scale-110"
                                              />
                                              <span>{activity}</span>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Inactive Content */}
                            <div
                              className={`transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                                isActive
                                  ? "opacity-0 scale-95 absolute"
                                  : "opacity-100 scale-100"
                              }`}
                            >
                              {!isActive && (
                                <div className="flex flex-col items-center justify-center gap-4 h-full">
                                  <Icon className="w-10 h-10 text-white/60 transition-all duration-300 group-hover:scale-110 group-hover:text-white/80" />
                                  <div
                                    style={{
                                      writingMode: "vertical-rl",
                                      textOrientation: "mixed",
                                      transform: "rotate(180deg)",
                                    }}
                                  >
                                    <h3 className="text-xl font-semibold text-white/60 whitespace-nowrap transition-colors duration-300 group-hover:text-white/80">
                                      {phase.title}
                                    </h3>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Bottom Section with Number */}
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                            <div className="text-5xl font-bold text-white/20 transition-all duration-300">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedWrapper>
                  );
                })}
              </div>
            </div>

            {/* Mid Screens: Alternating Cards with Timeline */}
            <div className="hidden md:block xl:hidden">
              <div className="relative">
                {/* Central Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white to-white/30 transform -translate-x-1/2"></div>

                <div className="space-y-12">
                  {process.map((phase: ProcessStep, index: number) => {
                    const Icon = iconMap[phase.icon] || Search;
                    const isActive = activeIndex === index;
                    const isEven = index % 2 === 0;

                    return (
                      <AnimatedWrapper
                        key={index}
                        animation={isEven ? "slideInLeft" : "slideInRight"}
                        delay={index * 0.1}
                        className="relative"
                      >
                        <div
                          className={`flex ${isEven ? "justify-start" : "justify-end"}`}
                        >
                          <div className={`w-5/12 `}>
                            <div
                              className={`bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-500 cursor-pointer ${
                                isActive ? "bg-white/20 shadow-xl" : ""
                              }`}
                              onClick={() => handleAccordionClick(index)}
                            >
                              <div className="flex items-center justify-start gap-3 mb-3">
                                <div
                                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-300 hover:scale-110 `}
                                >
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold text-white">
                                    {phase.title}
                                  </h3>
                                  <span className="text-xs text-blue-200 font-medium">
                                    {phase.duration}
                                  </span>
                                </div>
                              </div>

                              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                                {phase.description}
                              </p>

                              {/* Expandable Details */}
                              <div
                                id={`accordion-content-${index}`}
                                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                                  isActive
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                              >
                                <div className="pt-3 border-t border-white/10">
                                  <div className="grid grid-cols-1 gap-3">
                                    <div>
                                      <h4 className="font-semibold text-white mb-2 flex items-center text-sm">
                                        <Package
                                          size={14}
                                          className="mr-2 text-blue-300"
                                        />
                                        Key Deliverables
                                      </h4>
                                      <ul className="space-y-1">
                                        {phase.deliverables.map(
                                          (deliverable, idx) => (
                                            <li
                                              key={idx}
                                              className="flex items-center text-xs text-blue-100"
                                            >
                                              <CheckCircle
                                                size={10}
                                                className="mr-2 text-green-400 flex-shrink-0"
                                              />
                                              {deliverable}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>

                                    <div>
                                      <h4 className="font-semibold text-white mb-2 flex items-center text-sm">
                                        <Activity
                                          size={14}
                                          className="mr-2 text-blue-300"
                                        />
                                        Key Activities
                                      </h4>
                                      <ul className="space-y-1">
                                        {phase.keyActivities.map(
                                          (activity, idx) => (
                                            <li
                                              key={idx}
                                              className="flex items-start text-xs text-blue-100"
                                            >
                                              <ArrowRight
                                                size={10}
                                                className="mr-2 mt-0.5 text-blue-400 flex-shrink-0"
                                              />
                                              <span>{activity}</span>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between mt-4">
                                <div className="text-3xl font-bold text-white/20">
                                  {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="text-xs text-blue-200">
                                  {isActive
                                    ? "Click to collapse"
                                    : "Click to expand"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Timeline Node */}
                        <div className="absolute left-1/2 top-6 w-6 h-6 bg-white rounded-full border-4 border-blue-600 transform -translate-x-1/2 z-10">
                          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                        </div>
                      </AnimatedWrapper>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Small Screens: Vertical Stack with Side Line */}
            <div className="md:hidden">
              <div className="relative">
                {/* Side Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white to-white/30"></div>

                <div className="space-y-6 pl-12">
                  {process.map((phase: ProcessStep, index: number) => {
                    const Icon = iconMap[phase.icon] || Search;
                    const isActive = activeIndex === index;

                    return (
                      <AnimatedWrapper
                        key={index}
                        animation="slideInLeft"
                        delay={index * 0.1}
                        className="relative"
                      >
                        <div
                          className={`bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl hover:bg-white/20 transition-all duration-500 cursor-pointer ${
                            isActive ? "bg-white/20 shadow-xl" : ""
                          }`}
                          onClick={() => handleAccordionClick(index)}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-300 hover:scale-110">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white">
                                {phase.title}
                              </h3>
                              <span className="text-xs text-blue-200 font-medium">
                                {phase.duration}
                              </span>
                            </div>
                          </div>

                          <p className="text-blue-100 text-sm leading-relaxed mb-4">
                            {phase.description}
                          </p>

                          {/* Expandable Details */}
                          <div
                            id={`accordion-content-${index}`}
                            className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                              isActive
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="pt-3 border-t border-white/10">
                              <div className="grid grid-cols-1 gap-3">
                                <div>
                                  <h4 className="font-semibold text-white mb-2 flex items-center text-sm">
                                    <Package
                                      size={14}
                                      className="mr-2 text-blue-300"
                                    />
                                    Key Deliverables
                                  </h4>
                                  <ul className="space-y-1">
                                    {phase.deliverables.map(
                                      (deliverable, idx) => (
                                        <li
                                          key={idx}
                                          className="flex items-center text-xs text-blue-100"
                                        >
                                          <CheckCircle
                                            size={10}
                                            className="mr-2 text-green-400 flex-shrink-0"
                                          />
                                          {deliverable}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-white mb-2 flex items-center text-sm">
                                    <Activity
                                      size={14}
                                      className="mr-2 text-blue-300"
                                    />
                                    Key Activities
                                  </h4>
                                  <ul className="space-y-1">
                                    {phase.keyActivities.map(
                                      (activity, idx) => (
                                        <li
                                          key={idx}
                                          className="flex items-start text-xs text-blue-100"
                                        >
                                          <ArrowRight
                                            size={10}
                                            className="mr-2 mt-0.5 text-blue-400 flex-shrink-0"
                                          />
                                          <span>{activity}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="text-2xl font-bold text-white/20">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                            <div className="text-xs text-blue-200">
                              {isActive ? "Tap to collapse" : "Tap to expand"}
                            </div>
                          </div>
                        </div>

                        {/* Timeline Node */}
                        <div className="absolute left-0 top-6 w-4 h-4 bg-white rounded-full border-2 border-blue-600 transform -translate-x-1/2 z-10">
                          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                        </div>
                      </AnimatedWrapper>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Timeline Indicator */}
            <AnimatedWrapper
              animation="fadeUp"
              delay={0.5}
              className="text-center mt-16"
            >
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/30 transition-all duration-300 hover:bg-white/30">
                <Clock size={18} className="text-blue-300" />
                <span>
                  Average implementation time: 8-10 weeks for full deployment
                </span>
              </div>
            </AnimatedWrapper>

            {/* Process Flow Indicator */}
            <AnimatedWrapper animation="fadeUp" delay={0.6} className="mt-8">
              <div className="flex justify-center items-center gap-2">
                {process.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                      index === activeIndex
                        ? "w-8 bg-white shadow-lg shadow-white/30"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
