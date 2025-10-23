import { motion } from "framer-motion";
import { Briefcase, Clock, LucideIcon, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Type definitions
interface Result {
  metric: string;
  improvement: string;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  avatarAlt: string;
  rating: number;
  testimonial: string;
  project: string;
  results: Result[];
  technologies: string[];
  projectDuration: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

// Icon component with proper typing
const Icon: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 16,
  className = "",
}) => {
  const iconMap: Record<string, LucideIcon> = {
    Star,
    TrendingUp,
    Briefcase,
    Clock,
  };

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <div className={`w-${size} h-${size} ${className}`} />;
  }

  return <IconComponent size={size} className={className} />;
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className = "",
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CTO, TechStart Solutions",
      company: "TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1677594333284-68463516a828",
      avatarAlt:
        "Professional headshot of Asian woman with shoulder-length black hair wearing navy blazer in modern office setting",
      rating: 5,
      testimonial: `The team delivered an exceptional e-commerce platform that exceeded our expectations. The React-based frontend is incredibly fast and the Node.js backend handles our growing user base seamlessly. Our conversion rates increased by 40% after launch.`,
      project: "E-Commerce Platform",
      results: [
        { metric: "Conversion Rate", improvement: "+40%" },
        { metric: "Page Load Time", improvement: "-60%" },
        { metric: "User Engagement", improvement: "+85%" },
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      projectDuration: "3 months",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Founder & CEO, HealthTech Pro",
      company: "HealthTech Pro",
      avatar: "https://images.unsplash.com/photo-1678282955795-200c1e18bc7d",
      avatarAlt:
        "Professional headshot of Hispanic man with short black hair wearing dark suit and tie in corporate environment",
      rating: 5,
      testimonial: `Outstanding work on our healthcare management system. The team understood our complex requirements and delivered a HIPAA-compliant solution with excellent user experience. The telemedicine features have been game-changing for our practice.`,
      project: "Healthcare Management System",
      results: [
        { metric: "Patient Satisfaction", improvement: "+95%" },
        { metric: "Administrative Efficiency", improvement: "+70%" },
        { metric: "Appointment No-shows", improvement: "-45%" },
      ],
      technologies: ["Next.js", "Express", "MongoDB", "Socket.io"],
      projectDuration: "4 months",
    },
    {
      id: 3,
      name: "Emily Johnson",
      position: "VP of Technology, FinanceFlow",
      company: "FinanceFlow",
      avatar: "https://images.unsplash.com/photo-1628595556262-4cffd053a4bf",
      avatarAlt:
        "Professional headshot of blonde woman in business attire with confident smile in modern financial office setting",
      rating: 5,
      testimonial: `The financial dashboard they built handles real-time data processing flawlessly. The performance optimization and security measures implemented are top-notch. Our clients love the intuitive interface and comprehensive analytics features.`,
      project: "Financial Analytics Dashboard",
      results: [
        { metric: "Data Processing Speed", improvement: "+300%" },
        { metric: "User Retention", improvement: "+65%" },
        { metric: "Security Incidents", improvement: "-100%" },
      ],
      technologies: ["React", "Python", "Redis", "WebSocket"],
      projectDuration: "5 months",
    },
    {
      id: 4,
      name: "David Park",
      position: "Head of Digital Learning, EduTech Global",
      company: "EduTech Global",
      avatar: "https://images.unsplash.com/photo-1698072556534-40ec6e337311",
      avatarAlt:
        "Professional headshot of Asian man with glasses wearing casual button-down shirt in educational technology office",
      rating: 5,
      testimonial: `Incredible learning management system that transformed our online education delivery. The interactive features and progress tracking capabilities have significantly improved student engagement and completion rates. Highly recommended!`,
      project: "Learning Management System",
      results: [
        { metric: "Course Completion", improvement: "+120%" },
        { metric: "Student Engagement", improvement: "+90%" },
        { metric: "Platform Usage", improvement: "+150%" },
      ],
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS S3"],
      projectDuration: "6 months",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our clients about their experience working with us and the
            measurable results achieved through our web development solutions.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="morphic-card p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div>
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, index) => (
                    <Icon
                      key={index}
                      name="Star"
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                  {currentTestimonial.testimonial}
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.avatarAlt}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {currentTestimonial.position}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Briefcase"
                        size={16}
                        className="text-primary"
                      />
                      <span className="text-muted-foreground">Project:</span>
                      <span className="font-medium text-foreground">
                        {currentTestimonial.project}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium text-foreground">
                        {currentTestimonial.projectDuration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results & Technologies */}
              <div className="space-y-8">
                {/* Results */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Icon
                      name="TrendingUp"
                      size={20}
                      className="mr-2 text-primary"
                    />
                    Measurable Results
                  </h4>
                  <div className="space-y-3">
                    {currentTestimonial.results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <span className="text-muted-foreground">
                          {result.metric}
                        </span>
                        <span className="text-lg font-bold text-green-600">
                          {result.improvement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Code" size={20} className="mr-2 text-primary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentTestimonial.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeTestimonial
                  ? "bg-primary scale-125"
                  : "bg-muted hover:bg-muted-foreground/50"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`morphic-card p-6 cursor-pointer transition-all duration-200 ${
                index === activeTestimonial
                  ? "ring-2 ring-primary shadow-lg"
                  : "hover:shadow-md"
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.avatarAlt}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Icon
                    key={starIndex}
                    name="Star"
                    size={14}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-3">
                {testimonial.testimonial}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
