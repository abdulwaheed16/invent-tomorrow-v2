"use client";

import CTASection from "./cta-section";
import DifferentiatorsSection from "./differentiators-section";
import HeroSection from "./hero-section";
import IndustriesSection from "./industries-section";
import ProcessSection from "./process-section";
import ROISection from "./roi-section";
import TiltedDivider from "./tilted-divider";
import WhatWeBuildSection from "./what-we-build-section";
import WhyCompaniesSection from "./why-companies-section";

export default function Home2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Floating Stats */}
      <HeroSection />

      {/* Why Companies Work With Us */}
      <WhyCompaniesSection />

      {/* Tilted Divider */}
      <TiltedDivider
        topColor="#ffffff"
        bottomColor="rgb(249, 250, 251)"
        angle="left"
      />

      {/* What We Build */}
      <WhatWeBuildSection />

      {/* Tilted Divider */}
      <TiltedDivider topColor="#ffffff" bottomColor="#ffffff" angle="right" />

      {/* Our Process */}
      <ProcessSection />

      {/* Tilted Divider */}
      <TiltedDivider
        topColor="#ffffff"
        bottomColor="rgb(37, 99, 235)"
        angle="left"
      />

      {/* What Makes Us Different */}
      <DifferentiatorsSection />

      {/* Tilted Divider */}
      <TiltedDivider
        // topColor="rgb(30, 64, 175)"
        // bottomColor="rgb(37, 99, 235)"
        angle="right"
      />

      {/* Industries We Work With */}
      <IndustriesSection />

      {/* Tilted Divider */}
      <TiltedDivider
        topColor="rgb(30, 64, 175)"
        bottomColor="rgb(249, 250, 251)"
        angle="left"
      />

      {/* ROI Model */}
      <ROISection />

      {/* Tilted Divider */}
      <TiltedDivider
        topColor="#ffffff"
        bottomColor="rgb(37, 99, 235)"
        angle="left"
      />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
