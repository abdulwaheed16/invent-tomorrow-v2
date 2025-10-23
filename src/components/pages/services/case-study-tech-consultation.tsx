import { motion } from "framer-motion";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Download,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Type definitions
interface Result {
  metric: string;
  description: string;
}

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  image: string;
  imageAlt: string;
  results: Result[];
  technologies: string[];
  timeline: string;
  teamSize: string;
  keyOutcomes: string[];
}

interface CaseStudyShowcaseProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudyShowcase({
  caseStudies,
}: CaseStudyShowcaseProps) {
  const [activeCase, setActiveCase] = useState<number>(0);

  return (
    <section className="py-16 bg-surface">
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
              Proven Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real transformation results from our strategic technology
              consultation engagements across diverse industries and complex
              challenges.
            </p>
          </motion.div>

          {/* Case Study Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {caseStudies?.map((caseStudy: CaseStudy, index: number) => (
              <button
                key={caseStudy?.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCase === index
                    ? "bg-primary text-white shadow-lg"
                    : "bg-background text-muted-foreground hover:bg-muted hover:text-text-primary"
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{caseStudy?.title}</div>
                  <div className="text-xs opacity-80">
                    {caseStudy?.industry}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Case Study */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="morphic-card overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Case Study Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={caseStudies?.[activeCase]?.image}
                  alt={caseStudies?.[activeCase]?.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-90">
                    {caseStudies?.[activeCase]?.client}
                  </div>
                  <div className="text-lg font-semibold">
                    {caseStudies?.[activeCase]?.title}
                  </div>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="p-8 space-y-6">
                {/* Project Overview */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-text-primary">
                      {caseStudies?.[activeCase]?.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {caseStudies?.[activeCase]?.industry}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="ml-2 font-medium text-text-primary">
                        {caseStudies?.[activeCase]?.timeline}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Team Size:</span>
                      <span className="ml-2 font-medium text-text-primary">
                        {caseStudies?.[activeCase]?.teamSize}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                      <AlertCircle size={16} className="text-warning mr-2" />
                      Challenge
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {caseStudies?.[activeCase]?.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                      <Lightbulb size={16} className="text-success mr-2" />
                      Solution
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {caseStudies?.[activeCase]?.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies?.[activeCase]?.technologies?.map(
                      (tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-secondary/30 text-secondary-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="border-t border-border p-8">
              <h4 className="text-xl font-bold text-text-primary mb-6 text-center">
                Measurable Results
              </h4>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {caseStudies?.[activeCase]?.results?.map(
                  (result: Result, index: number) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {result?.metric}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {result?.description}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Key Outcomes */}
              <div>
                <h5 className="font-semibold text-text-primary mb-4">
                  Key Outcomes
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {caseStudies?.[activeCase]?.keyOutcomes?.map(
                    (outcome: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle
                          size={16}
                          className="text-success mt-0.5"
                        />
                        <span className="text-sm text-muted-foreground">
                          {outcome}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Ready to Transform Your Organization?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {`Join these successful organizations in their digital
                transformation journey. Let's discuss how we can help you
                achieve similar results.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center">
                  <Calendar size={20} className="mr-2" />
                  Schedule Case Study Review
                </button>
                <button className="px-8 py-3 border border-border text-text-primary rounded-lg font-medium hover:bg-muted transition-colors duration-300 flex items-center justify-center">
                  <Download size={20} className="mr-2" />
                  Download Full Case Studies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
