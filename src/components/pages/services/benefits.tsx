"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Code2, Lightbulb, Smartphone, Sparkles } from "lucide-react";
import React from "react";

// Type definitions
interface Benefit {
  title: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
  serviceIcon?: string; // Changed to string instead of LucideIcon
}

// Icon mapping
const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Code2,
  Lightbulb,
  Smartphone,
  Sparkles,
  Default: Check,
};

export default function BenefitsSection({
  benefits,
  serviceIcon,
}: BenefitsProps) {
  if (!benefits || benefits.length === 0) return null;

  // Get the icon component based on the serviceIcon name
  const IconComponent = iconMap[serviceIcon || ""] || iconMap.Default;

  const numBenefits = benefits.length;
  const orbitRadius = 320; // Radius of the card orbit
  const cardWidth = 256;
  const cardHeight = 180;
  const centralCircleRadius = 112;

  // Calculate positions for benefit cards in a circular pattern
  const calculateCardPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const cardCenterX = orbitRadius * Math.cos(angle);
    const cardCenterY = orbitRadius * Math.sin(angle);

    // Calculate line start and end points
    const startX = centralCircleRadius * Math.cos(angle);
    const startY = centralCircleRadius * Math.sin(angle);
    const endX = cardCenterX;
    const endY = cardCenterY;

    return { cardCenterX, cardCenterY, startX, startY, endX, endY };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ------------------------------------------------ */}
      {/* --------------- BENEFITS SECTION ------------- */}
      {/* ------------------------------------------------ */}
      <AnimatedSection
        animation="fadeUp"
        className="relative py-24 bg-gradient-to-b from-transparent to-slate-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <AnimatedWrapper animation="fadeUp" className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-600 px-4 py-2 text-sm font-medium">
              Key Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Our <span className="text-color">Service</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover the advantages that set our solutions apart
            </p>
          </AnimatedWrapper>

          {/* Desktop - Radial Layout */}
          <div className="hidden lg:flex items-center justify-center relative h-[800px]">
            {/* Central Element */}
            <AnimatedWrapper
              animation="zoomIn"
              delay={0.2}
              className="absolute z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl"></div>
                <div className="w-56 h-56 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center relative">
                  <div className="w-48 h-48 rounded-full flex items-center justify-center bg-blue-50">
                    <IconComponent className="w-24 h-24 text-blue-600" />
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Lines and Benefit Cards */}
            <div className="absolute inset-0">
              {benefits.map((_: Benefit, index: number) => {
                const { startX, startY, endX, endY } = calculateCardPosition(
                  index,
                  numBenefits
                );

                return (
                  <svg
                    key={index}
                    className="absolute w-full h-full"
                    style={{ pointerEvents: "none" }}
                  >
                    <line
                      x1={`calc(50% + ${startX}px)`}
                      y1={`calc(50% + ${startY}px)`}
                      x2={`calc(50% + ${endX}px)`}
                      y2={`calc(50% + ${endY}px)`}
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      className="text-blue-600"
                    />
                  </svg>
                );
              })}
            </div>

            {benefits.map((benefit: Benefit, index: number) => {
              const { cardCenterX, cardCenterY } = calculateCardPosition(
                index,
                numBenefits
              );

              return (
                <AnimatedWrapper
                  key={index}
                  animation="zoomIn"
                  delay={0.3 + index * 0.1}
                  className="absolute group"
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    left: `calc(50% + ${cardCenterX}px)`,
                    top: `calc(50% + ${cardCenterY}px)`,
                    x: "-50%",
                    y: "-50%",
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center h-full flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-100 group-hover:scale-110 transition-transform">
                      <Check className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedWrapper>
              );
            })}
          </div>

          {/* Mobile - Stacked Layout */}
          <div className="space-y-6 md:hidden">
            {benefits.map((benefit: Benefit, index: number) => (
              <AnimatedWrapper
                key={index}
                animation="slideInLeft"
                delay={index * 0.1}
                disabledOnMobile={true}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-100 group-hover:scale-110 transition-transform">
                      <Check className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>

          {/* Tablet - Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 lg:hidden">
            {benefits.map((benefit: Benefit, index: number) => (
              <AnimatedWrapper
                key={index}
                animation="zoomIn"
                delay={index * 0.1}
                disabledOnMobile={true}
              >
                <Card className="p-8 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-100 group-hover:scale-110 transition-transform">
                    <Check className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

// Export types for use in other components
export type { Benefit, BenefitsProps };
