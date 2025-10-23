import ServiceBenefits from "@/components/pages/services/benefits";
import CaseStudiesSection from "@/components/pages/services/case-studies";
import CTAService from "@/components/pages/services/cta-service";
import { servicesData } from "@/components/pages/services/data";
import FAQSection from "@/components/pages/services/faqs";
import ServiceHero from "@/components/pages/services/service-hero";
import ServiceProcessDetailed from "@/components/pages/services/service-process-detailed";
import TechStack from "@/components/pages/services/tech-stack";
import Testimonials from "@/components/pages/services/testimonials";

export default function AiAgentsServicePage() {
  const service = servicesData.aiAgents;

  const heroData = {
    title: service.title,
    description: service.description,
    heroImage: service.heroImage,
    bgImages: service.bgImages,
  };

  const techStack = service.techStack;
  const benefits = service.benefits;
  // const serviceProcess = service.process;
  const serviceProcessDetailed = service.processDetailed;
  const caseStudies = service.caseStudies;
  const testimonials = service.testimonials;

  const techStackData = [
    // AI/ML
    { title: "OpenAI", category: "AI/ML", color: "#412991", icon: null },
    { title: "LangChain", category: "AI/ML", color: "#1C3C6C", icon: null },
    { title: "LlamaIndex", category: "AI/ML", color: "#FF6B35", icon: null },
    { title: "TensorFlow", category: "AI/ML", color: "#FF6F00", icon: null },

    // Cloud
    { title: "AWS", category: "Cloud", color: "#FF9900", icon: null },

    // Database
    { title: "MongoDB", category: "Database", color: "#47A248", icon: null },
    { title: "PostgreSQL", category: "Database", color: "#4169E1", icon: null },
    { title: "Redis", category: "Database", color: "#DC382D", icon: null },

    // DevOps
    { title: "Docker", category: "DevOps", color: "#2496ED", icon: null },
    { title: "Kubernetes", category: "DevOps", color: "#326CE5", icon: null },

    // Frontend
    { title: "React", category: "Frontend", color: "#61DAFB", icon: null },
    { title: "Next.js", category: "Frontend", color: "#000000", icon: null },
    { title: "Vue.js", category: "Frontend", color: "#4FC08D", icon: null },

    // Backend
    { title: "Node.js", category: "Backend", color: "#339933", icon: null },
    { title: "Python", category: "Backend", color: "#3776AB", icon: null },

    // API
    { title: "GraphQL", category: "API", color: "#E10098", icon: null },
  ];

  return (
    <>
      {/* --- Banner */}
      <ServiceHero heroData={heroData} />

      {/* Tech Stack */}
      {
        techStack && techStack.length > 0 && (
          <TechStack techStack={techStackData} />
        )
        // <TechStack techStack={techStack} />
      }

      {/* Key Benefits */}
      {benefits && benefits.length > 0 && (
        <ServiceBenefits benefits={benefits} />
      )}

      {/* Our Process */}
      {/* <ServiceProcess process={serviceProcess} /> */}
      {serviceProcessDetailed && (
        <ServiceProcessDetailed process={serviceProcessDetailed} />
      )}

      {/* Case Studies */}
      {caseStudies && caseStudies.length > 0 && (
        <CaseStudiesSection caseStudies={caseStudies} />
      )}

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <Testimonials testimonials={testimonials} />
      )}

      {/* Pricing Plans */}

      {/* FAQs */}
      <FAQSection />

      {/* Related Services */}

      {/* CTA */}
      <CTAService />
    </>
  );
}
