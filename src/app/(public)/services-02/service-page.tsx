import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  LucideIcon,
  Smartphone,
  Sparkles,
} from "lucide-react";

// Import service components with correct paths
import BenefitsSection from "./components/benefits";
import CaseStudiesSection from "./components/case-studies";
import CTASection from "./components/cta";
import DeliverablesSection from "./components/deliverables";
import FAQSection from "./components/faq";
import ProcessSection from "./components/processing";
import ServiceHero from "./components/services-hero";
import TechnologiesSection from "./components/technologies";
import TestimonialsSection from "./components/testimonials";

// Import static service data
import { services } from "./data";

// Import types
import { JSX } from "react";
import {
  Benefit,
  CaseStudy,
  FAQ,
  ProcessStep,
  Service,
  Testimonial,
} from "./types";

// Icon mapping for different services
const serviceIcons: Record<string, LucideIcon> = {
  Sparkles,
  Code2,
  Smartphone,
  Lightbulb,
};

// Sample data for sections that might not be in the original data
// const sampleStats: Stat[] = [
//   { value: "95%", label: "Client Satisfaction" },
//   { value: "50+", label: "AI Agents Deployed" },
//   { value: "24/7", label: "Automation Support" },
//   { value: "40%", label: "Cost Reduction" },
// ];

// const sampleFeatures: Feature[] = [
//   {
//     title: "Natural Language Processing",
//     description:
//       "Advanced NLP capabilities that understand context, intent, and nuance in human language.",
//     icon: "MessageSquare",
//   },
//   {
//     title: "Multi-Channel Integration",
//     description:
//       "Seamlessly connect with your existing tools, platforms, and communication channels.",
//     icon: "Network",
//   },
//   {
//     title: "Real-Time Learning",
//     description:
//       "AI agents that continuously improve from interactions and adapt to your business needs.",
//     icon: "Brain",
//   },
//   {
//     title: "Custom Workflows",
//     description:
//       "Tailored automation solutions designed specifically for your unique business processes.",
//     icon: "GitBranch",
//   },
//   {
//     title: "Enterprise Security",
//     description:
//       "Bank-level encryption and compliance with industry standards for data protection.",
//     icon: "Shield",
//   },
//   {
//     title: "Analytics Dashboard",
//     description:
//       "Comprehensive insights and performance metrics to optimize your AI operations.",
//     icon: "BarChart3",
//   },
// ];

const sampleTestimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "The AI agents have transformed our customer service. Response times are down 80% and satisfaction is at an all-time high.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, StartupXYZ",
    content: `Incredible automation capabilities. We've reduced manual work by 60% and our team can focus on strategic initiatives.`,
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, GlobalCo",
    content: `The custom AI solutions have streamlined our entire workflow. It's like having an extra team that never sleeps.`,
    rating: 5,
  },
];

const sampleCaseStudies: CaseStudy[] = [
  {
    title: "E-commerce Automation",
    description:
      "How a leading online retailer reduced customer service costs by 45% while improving response times.",
    result: "45% Cost Reduction",
  },
  {
    title: "Healthcare AI Assistant",
    description:
      "Implementation of AI agents for patient scheduling and follow-up, reducing no-shows by 30%.",
    result: "30% Fewer No-Shows",
  },
];

const sampleFAQs: FAQ[] = [
  {
    question: "How long does it take to implement an AI agent?",
    answer:
      "Implementation timelines vary based on complexity. Simple agents can be deployed in 2-4 weeks, while enterprise solutions typically take 6-12 weeks.",
  },
  {
    question: "Can the AI agents integrate with our existing systems?",
    answer:
      "Yes, our AI agents are designed to integrate seamlessly with your existing CRM, ERP, communication platforms, and custom APIs.",
  },
  {
    question: "What kind of support do you provide after deployment?",
    answer:
      "We offer 24/7 monitoring, regular updates, performance optimization, and dedicated support to ensure your AI agents continue to perform at their best.",
  },
];

// Main service component
interface ServicePageProps {
  serviceSlug: string;
}

export default function ServicePage({
  serviceSlug,
}: ServicePageProps): JSX.Element {
  // Find the service from static data
  const service: Service | undefined = services.find(
    (s) => s.slug === serviceSlug
  );

  // If service not found, you could show a 404 or redirect
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Service Not Found
          </h2>
          <p className="text-gray-400">
            {`The service you're looking for doesn't exist.`}
          </p>
        </div>
      </div>
    );
  }

  // Get the appropriate icon for this service
  const ServiceIcon = serviceIcons[String(service?.icon)] || Sparkles;

  // Use service data or fall back to sample data
  // const stats: Stat[] = (service as Service).stats || sampleStats;
  // const features: Feature[] = (service as Service).features || sampleFeatures;
  const technologies: string[] = service.technologies || [];
  const benefits: Benefit[] = service.benefits || [];
  const process: ProcessStep[] = service.process || [];
  const caseStudies: CaseStudy[] =
    (service as Service).case_studies || sampleCaseStudies;
  const testimonials: Testimonial[] =
    (service as Service).testimonials || sampleTestimonials;
  const deliverables: string[] = service.deliverables || [];
  const faqs: FAQ[] = (service as Service).faqs || sampleFAQs;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section - Always show */}
      <ServiceHero service={service} Icon={ServiceIcon} />

      {/* Stats Section */}

      {/* Technologies Section */}
      {technologies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <TechnologiesSection
            technologies={technologies}
            color={service.color}
          />
        </motion.div>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <BenefitsSection
            benefits={benefits.map((b) => ({ ...b, icon: b.icon ?? "" }))}
            color={service.color}
            Icon={ServiceIcon}
          />
        </motion.div>
      )}

      {/* Process Section */}
      {process.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ProcessSection process={process} color={service.color} />
        </motion.div>
      )}

      {/* Case Studies Section */}
      {caseStudies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <CaseStudiesSection caseStudies={caseStudies} color={service.color} />
        </motion.div>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <TestimonialsSection
            testimonials={testimonials}
            color={service.color}
          />
        </motion.div>
      )}

      {/* Deliverables Section */}
      {deliverables.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <DeliverablesSection
            deliverables={deliverables}
            color={service.color}
          />
        </motion.div>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <FAQSection faqs={faqs} color={service.color} />
        </motion.div>
      )}

      {/* CTA Section - Always show */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <CTASection color={service.color} />
      </motion.div>
    </motion.div>
  );
}
