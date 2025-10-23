"use client";
import Breadcrumb from "../breadcrumb";
import ConsultationProcess from "./consultation-process";
import ExecutiveTestimonials from "./exective-testimonials";
import ExpertiseAreas from "./expertise-areas";
import FAQSection from "./faq-section";
import HeroSection from "./hero-section";
import ServiceBreakdown from "./service-breakdown";
import ServicePackages from "./service-packages";

export default function TechConsultationService() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Helme>
        <title>
          Tech Consultation Services - Strategic Technology Advisory |
          TechServices Pro
        </title>
        <meta
          name="description"
          content="Expert technology consultation services for digital transformation, architecture review, and strategic planning. Trusted by 500+ executives for measurable business outcomes."
        />
        <meta
          name="keywords"
          content="technology consultation, digital transformation, CTO advisory, architecture review, technology strategy"
        />
        <meta
          property="og:title"
          content="Tech Consultation Services - Strategic Technology Advisory"
        />
        <meta
          property="og:description"
          content="Transform your business with expert technology consultation. Strategic guidance from experienced CTOs and architects."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/tech-consultation-detail"
        />
        <meta property="og:site_name" content="TechServices Pro" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tech Consultation Services - Strategic Technology Advisory"
        />
        <meta
          name="twitter:description"
          content="Expert technology consultation services for digital transformation, architecture review, and strategic planning."
        />
        <link rel="canonical" href="/tech-consultation-detail" />
      </Helme> */}

      <div className="pt-16">
        <Breadcrumb />
      </div>

      <main className="breathing-layout">
        <HeroSection />
        <ServiceBreakdown />
        <ExpertiseAreas />
        <ConsultationProcess />
        {/* <CaseStudyShowcase /> */}
        <ExecutiveTestimonials />
        <ServicePackages />
        <FAQSection />
      </main>
    </div>
  );
}
