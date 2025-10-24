"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

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

interface HighlightItem {
  icon?: React.ReactNode;
  text: string;
}

interface CallToActionProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  highlights?: HighlightItem[];
  themeColor?: string; // e.g., 'blue', 'indigo', 'green'
}

export default function CallToAction({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  highlights = [],
  themeColor = "blue",
}: CallToActionProps) {
  const themeClasses = {
    bg: `bg-${themeColor}-600`,
    text: `text-${themeColor}-100`,
    buttonText: `text-${themeColor}-600`,
    buttonBorder: `border-${themeColor}-600`,
  };

  return (
    <section className="relative scroll-mt-24" id="contact">
      <div
        className={`relative ${themeClasses.bg} text-white rounded-3xl p-6 md:p-12 lg:p-16 overflow-hidden`}
      >
        {/* Background Circles */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6">
          <div className="text-center md:text-left py-8 md:mb-0">
            {subtitle && (
              <motion.p
                className="uppercase tracking-widest text-sm text-white/80"
                variants={fadeUp}
              >
                {subtitle}
              </motion.p>
            )}
            <h2 className="mb-4 leading-tight font-bold text-3xl md:text-4xl">
              {title.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <p
              className={`${themeClasses.text} max-w-2xl text-base md:text-lg`}
            >
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col justify-center items-center md:items-start space-y-6">
            <motion.div variants={fadeUp}>
              <Link
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 bg-white ${themeClasses.buttonText} border-2 border-white font-semibold py-1 px-5 rounded-md h-12 shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-colors cursor-pointer`}
                >
                  {buttonText} →
                </motion.button>
              </Link>
            </motion.div>

            {/* Highlights Section */}
            {highlights.length > 0 && (
              <div className="flex flex-wrap md:flex-row items-center justify-center md:justify-start gap-4 text-blue-100 text-md font-bold">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 text-white/90"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
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
    </section>
  );
}
