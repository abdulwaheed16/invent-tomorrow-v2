"use client";

import { AnimatedBackground } from "@/components/ui/animated-background";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

interface HighlightItem {
  icon?: React.ReactNode;
  text: string;
}

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  highlights?: HighlightItem[];
  themeColor?: string; // e.g., 'blue', 'indigo', 'green'
}

export default function CallToAction({
  title = `Let's Build an Extraordinary\nProduct Together.`,
  subtitle = "Ready to Transform Your Idea?",
  description = "Your startup deserves momentum, not delays. Schedule a call today and start building a product ready for users and investors.",
  buttonText = "Get in Touch with Our CEO",
  buttonLink = "https://calendly.com/abdulhaadi-businesschat/30min",
  highlights = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "No commitment required",
    },
    {
      icon: (
        <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
      ),
      text: "20-min call",
    },
    {
      icon: (
        <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
      ),
      text: "Instant insights",
    },
  ],
  themeColor = "blue",
}: CallToActionProps) {
  // Define theme colors
  const themeClasses = {
    blue: {
      bg: "bg-blue-600",
      text: "text-blue-100",
      buttonText: "text-blue-600",
      buttonBorder: "border-blue-600",
    },
    indigo: {
      bg: "bg-indigo-600",
      text: "text-indigo-100",
      buttonText: "text-indigo-600",
      buttonBorder: "border-indigo-600",
    },
    green: {
      bg: "bg-green-600",
      text: "text-green-100",
      buttonText: "text-green-600",
      buttonBorder: "border-green-600",
    },
  };

  const currentTheme =
    themeClasses[themeColor as keyof typeof themeClasses] || themeClasses.blue;

  return (
    <AnimatedSection
      animation="fadeUp"
      className="relative scroll-mt-24"
      id="contact"
    >
      <AnimatedBackground>
        <div
          className={`relative ${currentTheme.bg} text-white rounded-3xl p-6 md:p-12 lg:p-16 overflow-hidden`}
        >
          {/* Background Circles */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6">
            <AnimatedWrapper
              animation="fadeUp"
              className="text-center md:text-left py-8 md:mb-0"
            >
              {subtitle && (
                <p className="uppercase tracking-widest text-sm text-white/80 mb-4">
                  {subtitle}
                </p>
              )}
              <h2 className="mb-4 leading-tight font-bold text-3xl md:text-4xl">
                {title?.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
              <p
                className={`${currentTheme.text} max-w-2xl text-base md:text-lg`}
              >
                {description}
              </p>
            </AnimatedWrapper>

            {/* CTA Button */}
            <div className="flex flex-col justify-center items-center md:items-start space-y-6">
              <AnimatedWrapper animation="bounceIn" delay={0.2}>
                <Link
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`flex items-center gap-2 min-w-48 bg-white ${currentTheme.buttonText} border-2 border-white font-semibold py-1 px-5 rounded-md h-12 shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-colors cursor-pointer`}
                  >
                    {buttonText} →
                  </Button>
                </Link>
              </AnimatedWrapper>

              {/* Highlights Section */}
              {highlights.length > 0 && (
                <AnimatedWrapper animation="fadeUp" delay={0.4}>
                  <div className="flex flex-wrap md:flex-row items-center justify-center md:justify-start gap-4 text-white/90 text-md font-bold">
                    {highlights.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedWrapper>
              )}
            </div>
          </div>

          {/* Decorative SVG */}
          <div className="absolute top-20 right-0">
            <svg
              width="596"
              height="438"
              viewBox="0 0 596 438"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M440 220.473C318.526 220.473 220.053 318.946 220.053 440.42C220.053 561.893 318.526 660.367 440 660.367C561.473 660.367 659.947 561.893 659.947 440.42C659.947 318.946 561.473 220.473 440 220.473ZM0.105469 440.42C0.105469 197.473 197.053 0.525391 440 0.525391C682.947 0.525391 879.894 197.473 879.894 440.42C879.894 683.367 682.947 880.314 440 880.314C197.053 880.314 0.105469 683.367 0.105469 440.42Z"
                fill="url(#paint0_linear_0_568)"
                fillOpacity="0.1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_568"
                  x1="440"
                  y1="0.525391"
                  x2="440"
                  y2="880.314"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </AnimatedBackground>
    </AnimatedSection>
  );
}
