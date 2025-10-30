import ServiceBenefits from "@/components/pages/services/benefits";
import CaseStudiesSection from "@/components/pages/services/case-studies";
import CTAService from "@/components/pages/services/cta-service";
import { servicesData } from "@/components/pages/services/data";
import FAQSection from "@/components/pages/services/faqs";
import ServiceHero from "@/components/pages/services/service-hero";
import ServiceProcessDetailed from "@/components/pages/services/service-process-detailed";
import TechStack from "@/components/pages/services/tech-stack";
import Testimonials from "@/components/pages/services/testimonials";
import { HeroData } from "../../../../../types/services";

export default function AiAgentsServicePageClient() {
  const service = servicesData.aiAgents;

  const heroData: HeroData = {
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

  return (
    <>
      {/* --- Banner */}
      <ServiceHero heroData={heroData} />

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && <TechStack techStack={techStack} />}

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
