"use client";
import FAQSection from "@/components/mock/services/ai-agents/faq-section";
import HeroSection from "@/components/mock/services/ai-agents/hero-section";
import PortfolioShowcase from "@/components/mock/services/ai-agents/portfolio-showcase";
import PricingSection from "@/components/mock/services/ai-agents/pricing-section";
import ProcessTimeline from "@/components/mock/services/ai-agents/process-timeline";
import ServiceBreakdown from "@/components/mock/services/ai-agents/services-breakdown";
import TechnologyStack from "@/components/mock/services/ai-agents/technology-stack";
import TestimonialsSection from "@/components/mock/services/ai-agents/testimonials-section";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const AIAgentsServiceDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Helmet>
        <title>
          AI Agents Service - Intelligent Business Automation | TechServices Pro
        </title>
        <meta
          name="description"
          content="Transform your business with intelligent AI agents. Automate customer service, document processing, and workflows with our custom AI solutions. Get 60-85% cost reduction and 24/7 automation."
        />
        <meta
          name="keywords"
          content="AI agents, business automation, artificial intelligence, chatbots, process automation, machine learning, AI development"
        />
        <meta
          property="og:title"
          content="AI Agents Service - Intelligent Business Automation"
        />
        <meta
          property="og:description"
          content="Custom AI agents for business automation, customer service, and workflow optimization. Proven ROI and enterprise-grade security."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/ai-agents-service-detail" />
      </Helmet> */}

      <div className="pt-16">
        <Breadcrumb />
        <HeroSection />
        <ServiceBreakdown />
        <TechnologyStack />
        <ProcessTimeline />
        <PortfolioShowcase />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default AIAgentsServiceDetail;
