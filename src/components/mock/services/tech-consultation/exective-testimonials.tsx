import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Type definitions
interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  avatar: string;
  avatarAlt: string;
  testimonial: string;
  projectScope: string;
  results: string[];
  rating: number;
  projectDuration: string;
  teamSize: string;
}

const ExecutiveTestimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: "cto-fintech",
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      company: "FinanceFlow Solutions",
      industry: "FinTech",
      avatar: "https://images.unsplash.com/photo-1597621969117-1a305d3e0c68",
      avatarAlt:
        "Professional headshot of Asian woman with shoulder-length black hair in navy blazer",
      testimonial: `The strategic technology consultation from TechServices Pro was transformational for our organization. Their deep understanding of both technology and business strategy helped us navigate a complex digital transformation that resulted in 40% operational efficiency gains.\n\nWhat impressed me most was their ability to translate technical concepts into business value propositions that resonated with our board of directors. The roadmap they developed became our north star for the next three years.`,
      projectScope: "Cloud Migration & API Strategy",
      results: [
        "40% operational efficiency improvement",
        "$3.2M annual cost reduction",
        "99.9% system uptime achieved",
        "Successful SOC2 compliance",
      ],
      rating: 5,
      projectDuration: "6 months",
      teamSize: "Executive consultation + 8 specialists",
    },
    {
      id: "ceo-healthcare",
      name: "Dr. Michael Rodriguez",
      title: "Chief Executive Officer",
      company: "Regional Medical Network",
      industry: "Healthcare",
      avatar: "https://images.unsplash.com/photo-1666886573600-61c634663827",
      avatarAlt:
        "Professional headshot of Hispanic man with short dark hair in white medical coat and stethoscope",
      testimonial: `As a healthcare CEO, I needed technology guidance that understood both the clinical and business sides of our operation. TechServices Pro delivered exactly that. Their consultation helped us implement a unified patient data platform that improved care coordination across our 12 facilities.\n\nThe ROI was immediate - we saw a 25% reduction in duplicate tests and significantly improved patient satisfaction scores. Their expertise in healthcare compliance was invaluable.`,
      projectScope: "Healthcare Platform Integration",
      results: [
        "25% reduction in duplicate tests",
        "Improved patient satisfaction by 35%",
        "HIPAA compliance across all systems",
        "$2.8M annual savings realized",
      ],
      rating: 5,
      projectDuration: "8 months",
      teamSize: "C-suite advisory + 12 specialists",
    },
    {
      id: "cio-retail",
      name: "Jennifer Park",
      title: "Chief Information Officer",
      company: "Global Retail Corp",
      industry: "E-commerce",
      avatar: "https://images.unsplash.com/photo-1668049221564-862149a48e10",
      avatarAlt:
        "Professional headshot of Asian woman with long black hair in dark business suit",
      testimonial: `The technology strategy consultation exceeded our expectations. We were struggling with scalability issues during peak shopping seasons, and their architectural recommendations completely transformed our platform performance.\n\nTheir team didn't just provide recommendations - they stayed engaged throughout implementation, ensuring we achieved the projected outcomes. The platform now handles 5x our previous peak load without issues.`,
      projectScope: "E-commerce Platform Scaling",
      results: [
        "500% increase in peak load capacity",
        "60% improvement in page load times",
        "Zero downtime during Black Friday",
        "$8M additional revenue captured",
      ],
      rating: 5,
      projectDuration: "10 months",
      teamSize: "Strategic advisory + 15 engineers",
    },
    {
      id: "founder-startup",
      name: "Alex Thompson",
      title: "Founder & CEO",
      company: "InnovateAI Startup",
      industry: "AI/ML",
      avatar: "https://images.unsplash.com/photo-1652734789593-58bba762235b",
      avatarAlt:
        "Professional headshot of Caucasian man with brown hair and beard in casual blue shirt",
      testimonial: `As a first-time founder, I needed strategic technology guidance to build our AI platform the right way from the start. TechServices Pro provided invaluable consultation on architecture, scalability, and go-to-market technology strategy.\n\nTheir guidance helped us avoid costly technical debt and positioned us perfectly for our Series A funding. Investors were impressed with our technical foundation and strategic roadmap.`,
      projectScope: "AI Platform Architecture & Strategy",
      results: [
        "Successful Series A funding raised",
        "Scalable AI platform architecture",
        "Technical due diligence passed",
        "200% faster development velocity",
      ],
      rating: 5,
      projectDuration: "4 months",
      teamSize: "Founder mentorship + 6 specialists",
    },
  ];

  const nextTestimonial = (): void => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = (): void => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Executive Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from C-suite executives and business leaders who have
              experienced transformational results through our strategic
              technology consultation.
            </p>
          </motion.div>

          {/* Main Testimonial Display */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="morphic-card p-8 lg:p-12 mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Executive Profile */}
              <div className="lg:col-span-1">
                <div className="text-center lg:text-left">
                  <div className="w-24 h-24 mx-auto lg:mx-0 mb-4 overflow-hidden rounded-full">
                    <Image
                      src={testimonials?.[activeTestimonial]?.avatar}
                      alt={testimonials?.[activeTestimonial]?.avatarAlt}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {testimonials?.[activeTestimonial]?.name}
                  </h3>
                  <div className="text-primary font-medium mb-1">
                    {testimonials?.[activeTestimonial]?.title}
                  </div>
                  <div className="text-muted-foreground mb-2">
                    {testimonials?.[activeTestimonial]?.company}
                  </div>
                  <div className="inline-block px-3 py-1 bg-secondary/30 text-secondary-foreground text-sm rounded-full">
                    {testimonials?.[activeTestimonial]?.industry}
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start mt-4 space-x-1">
                    {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map(
                      (_, i: number) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-warning fill-current"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">
                        Project Scope:
                      </span>
                      <div className="font-medium text-text-primary">
                        {testimonials?.[activeTestimonial]?.projectScope}
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <div className="font-medium text-text-primary">
                        {testimonials?.[activeTestimonial]?.projectDuration}
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Team:</span>
                      <div className="font-medium text-text-primary">
                        {testimonials?.[activeTestimonial]?.teamSize}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Quote
                    size={48}
                    className="text-primary/20 absolute -top-4 -left-2"
                  />
                  <blockquote className="text-lg text-text-primary leading-relaxed pl-8">
                    {testimonials?.[activeTestimonial]?.testimonial
                      ?.split("\n")
                      ?.map((paragraph: string, index: number) => (
                        <p key={index} className={index > 0 ? "mt-4" : ""}>
                          {paragraph}
                        </p>
                      ))}
                  </blockquote>
                </div>

                {/* Results */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-text-primary mb-4">
                    Key Results Achieved
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {testimonials?.[activeTestimonial]?.results?.map(
                      (result: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <TrendingUp
                            size={16}
                            className="text-success mt-0.5"
                          />
                          <span className="text-muted-foreground text-sm">
                            {result}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="flex items-center space-x-2 px-6 py-3 bg-surface hover:bg-muted rounded-lg transition-colors duration-300"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Testimonial Indicators */}
            <div className="flex space-x-2">
              {testimonials?.map((_: Testimonial, index: number) => (
                <Button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center space-x-2 px-6 py-3 bg-surface hover:bg-muted rounded-lg transition-colors duration-300"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-muted-foreground">
                Join 500+ executives who have transformed their organizations
                with our strategic guidance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Executive Consultations
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$50M+</div>
                <div className="text-sm text-muted-foreground">
                  Cost Savings Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTestimonials;
