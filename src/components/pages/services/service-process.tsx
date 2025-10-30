"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Check,
  Code,
  DraftingCompass,
  Flag,
  Lightbulb,
  LucideIcon,
  Rocket,
  TestTube,
} from "lucide-react";
import React, { useCallback, useState } from "react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: keyof typeof iconMap;
}

interface ProcessSectionProps {
  process: ProcessStep[];
}

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  DraftingCompass,
  Code,
  TestTube,
  Rocket,
  Flag,
  Default: Check,
};

// Helper function to get icon based on step index if icon is not provided
const getIconForStep = (step: ProcessStep, index: number): LucideIcon => {
  if (step.icon && iconMap[step.icon]) {
    return iconMap[step.icon];
  }

  // Fallback icons based on step index
  const fallbackIcons = [
    "Lightbulb",
    "DraftingCompass",
    "Code",
    "TestTube",
    "Rocket",
    "Flag",
  ];

  const iconKey = fallbackIcons[
    index % fallbackIcons.length
  ] as keyof typeof iconMap;
  return iconMap[iconKey] || iconMap.Default;
};

// Memoized step component to prevent unnecessary re-renders
const ProcessStepItem = React.memo(
  ({
    step,
    index,
    isActive,
    isContentVisible,
    onClick,
  }: {
    step: ProcessStep;
    index: number;
    isActive: boolean;
    isContentVisible: boolean;
    onClick: () => void;
  }) => {
    const Icon = getIconForStep(step, index);

    return (
      <div
        className={`relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer p-8 flex flex-col justify-between transition-all duration-300 ${
          isActive ? "flex-4 border-2 border-blue-500/50 shadow-xl" : "flex-1 border border-white/20 shadow-lg hover:shadow-xl"
        }`}
        onClick={onClick}
      >
        {/* Active state gradient overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `linear-gradient(to top, rgba(59, 130, 246, 0.15), transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <div className="text-6xl font-bold text-blue-600/30">{step.step}</div>
        </div>

        <div className="relative z-10">
          {isContentVisible ? (
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-blue-100">
                <Icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{step.title}</h3>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <Icon className="w-8 h-8 opacity-70 text-blue-600" />
              <div
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}
              >
                <h3 className="text-xl font-semibold opacity-70 whitespace-nowrap text-slate-700">
                  {step.title}
                </h3>
              </div>
            </div>
          )}
          <p className="text-slate-600 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    );
  }
);

ProcessStepItem.displayName = "ProcessStepItem";

export default function ServiceProcess({ process }: ProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [contentVisibleIndex, setContentVisibleIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleStepClick = useCallback(
    (index: number) => {
      if (isTransitioning || index === activeIndex) return;

      setIsTransitioning(true);

      // Hide content immediately
      setContentVisibleIndex(-1);

      // Change active accordion
      setActiveIndex(index);

      // Show content after a short delay to allow the accordion to start expanding
      setTimeout(() => {
        setContentVisibleIndex(index);
        setIsTransitioning(false);
      }, 300);
    },
    [activeIndex, isTransitioning]
  );

  if (!process || process.length === 0) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* ------------------------------------------------ */}
      {/* --------------- PROCESS SECTION --------------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection animation="fadeUp" className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <AnimatedWrapper animation="fadeUp" className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-600 px-4 py-2 text-sm font-medium">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How We <span className="text-blue-600">Deliver Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our proven methodology ensures exceptional results every time
            </p>
          </AnimatedWrapper>

          {/* Desktop: Horizontal Accordion */}
          <div className="hidden lg:block">
            <div className="flex h-[450px] gap-4">
              {process.map((step: ProcessStep, index: number) => (
                <AnimatedWrapper
                  key={index}
                  animation="zoomIn"
                  delay={index * 0.1}
                  disabledOnMobile={true}
                >
                  <ProcessStepItem
                    step={step}
                    index={index}
                    isActive={activeIndex === index}
                    isContentVisible={contentVisibleIndex === index}
                    onClick={() => handleStepClick(index)}
                  />
                </AnimatedWrapper>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="relative lg:hidden">
            {/* Connection line for mobile */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-400 opacity-30 -translate-x-1/2" />

            <div className="space-y-12">
              {process.map((step: ProcessStep, index: number) => (
                <AnimatedWrapper
                  key={index}
                  animation="slideInLeft"
                  delay={index * 0.1}
                  disabledOnMobile={true}
                  className="pl-12 md:pl-0"
                >
                  <div className="flex items-center gap-8">
                    <div className="hidden md:block w-1/2" />
                    <div className="flex-1">
                      <Card className="p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl bg-blue-100 text-blue-600">
                            {step.step}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </Card>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

// Export types for use in other components
export type { ProcessSectionProps, ProcessStep };
