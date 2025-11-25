"use client";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { images } from "@/lib/utils/assets";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const services = [
  {
    title: "Web Development",
    description:
      "We create custom web applications tailored to your business needs. Our team builds responsive, scalable, and secure web solutions using cutting-edge technologies to deliver exceptional user experiences.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    ),
    image: images.webDevHero1.src,
  },
  {
    title: "AI Agents",
    description:
      "Harness the power of artificial intelligence with our intelligent automation solutions. We develop custom AI agents that streamline workflows, enhance decision-making, and transform your business operations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    image: images.aiAgentHero1.src,
  },
  {
    title: "Mobile Apps",
    description:
      "We design and develop native and cross-platform mobile applications for iOS and Android. Our apps deliver seamless performance, intuitive interfaces, and engaging user experiences across all devices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    image: images.mobileHero1.src,
  },
  {
    title: "Tech Consultation",
    description:
      "Our expert consultants provide strategic guidance to help you navigate complex technology decisions. We assess your current infrastructure, identify opportunities, and develop roadmaps for digital transformation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    ),
    image: images.techConsultationHero.src,
  },
];

export default function ServicesOverview() {
  return (
    <AnimatedSection animation="fadeUp" className="py-16">
      <AnimatedWrapper animation="fadeUp" className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
        <p className="text-xl text-slate-600">
          Comprehensive technology solutions for modern businesses
        </p>
      </AnimatedWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <AnimatedWrapper
            key={index}
            animation="fadeUp"
            delay={index * 0.1}
            disabledOnMobile={true}
          >
            <Card className="group relative overflow-hidden h-80 md:h-96 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Default state */}
              <div className="p-8 h-full flex flex-col justify-between transition-opacity duration-500 group-hover:opacity-0">
                <div className="text-blue-600 mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Hover state with background image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-bold mb-3 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    {service.title}
                  </h3>
                  <p className="text-lg mb-6 leading-relaxed transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4 delay-75">
                    {service.description}
                  </p>
                  <div className="flex gap-4 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4 delay-100">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Button>
                    {/* <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-medium py-3 px-6 rounded-lg transition-all">
                      View Portfolio
                    </button> */}
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
    </AnimatedSection>
  );
}
