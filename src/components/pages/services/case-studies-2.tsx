import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Code,
  ExternalLink,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const PortfolioShowcase = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      title: "E-commerce Customer Service Automation",
      client: "RetailMax Corporation",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
      imageAlt:
        "Modern e-commerce office with multiple computer screens showing customer service dashboards and analytics",
      challenge:
        "RetailMax was struggling with high customer service costs and long response times, handling over 10,000 daily inquiries across multiple channels.",
      solution:
        "Implemented intelligent conversational AI agents with natural language processing, integrated with their existing CRM and order management systems.",
      results: [
        "85% reduction in response time",
        "60% decrease in support costs",
        "95% customer satisfaction rate",
        "24/7 multilingual support coverage",
      ],
      technologies: ["OpenAI GPT-4", "Python", "AWS Lambda", "Dialogflow"],
      metrics: {
        "Response Time": "< 30 seconds",
        "Resolution Rate": "78% first contact",
        "Cost Savings": "$2.4M annually",
        Languages: "12 supported",
      },
    },
    {
      title: "Financial Document Processing Automation",
      client: "SecureBank Financial",
      industry: "Banking & Finance",
      image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
      imageAlt:
        "Professional banking office with financial analysts working on document processing systems and data analysis screens",
      challenge:
        "Manual processing of loan applications and financial documents was creating bottlenecks, taking 5-7 days per application with high error rates.",
      solution:
        "Deployed AI agents for document intelligence, automated data extraction, risk assessment, and compliance checking with human oversight for complex cases.",
      results: [
        "90% faster document processing",
        "95% reduction in manual errors",
        "70% improvement in approval times",
        "Enhanced regulatory compliance",
      ],
      technologies: [
        "Azure Cognitive Services",
        "TensorFlow",
        "Docker",
        "MongoDB",
      ],
      metrics: {
        "Processing Time": "2-4 hours",
        "Accuracy Rate": "99.2%",
        "Applications/Day": "500+",
        "Compliance Score": "100%",
      },
    },
    {
      title: "Healthcare Patient Triage System",
      client: "MediCare Health Network",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1710562750592-3be59a9fde45",
      imageAlt:
        "Modern hospital reception area with digital triage kiosks and healthcare professionals using tablet devices",
      challenge:
        "Emergency department overcrowding and inefficient patient triage leading to longer wait times and suboptimal resource allocation.",
      solution:
        "Created AI-powered triage agents that assess patient symptoms, prioritize cases, and optimize resource allocation while maintaining HIPAA compliance.",
      results: [
        "40% reduction in wait times",
        "25% improvement in resource utilization",
        "Enhanced patient satisfaction",
        "Better clinical outcomes",
      ],
      technologies: [
        "IBM Watson Health",
        "FHIR APIs",
        "Kubernetes",
        "PostgreSQL",
      ],
      metrics: {
        "Triage Accuracy": "94%",
        "Wait Time": "15 min avg",
        "Patient Throughput": "+35%",
        Satisfaction: "4.8/5",
      },
    },
  ];

  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Success Stories & Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world implementations that demonstrate the transformative
              power of AI agents across different industries and use cases.
            </p>
          </motion.div>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies?.map((study, index) => (
            <Button
              key={index}
              variant={selectedCase === index ? "default" : "outline"}
              onClick={() => setSelectedCase(index)}
              className="flex-shrink-0"
            >
              {study?.client}
            </Button>
          ))}
        </div>

        {/* Selected Case Study */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="morphic-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={caseStudies?.[selectedCase]?.image}
                  alt={caseStudies?.[selectedCase]?.imageAlt}
                  height={400}
                  width={600}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="px-3 py-1 bg-primary rounded-full text-sm font-medium">
                    {caseStudies?.[selectedCase]?.industry}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {caseStudies?.[selectedCase]?.title}
                </h3>
                <p className="text-primary font-medium mb-6">
                  {caseStudies?.[selectedCase]?.client}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                      <AlertCircle size={16} className="mr-2 text-warning" />
                      Challenge
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {caseStudies?.[selectedCase]?.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                      <Lightbulb size={16} className="mr-2 text-primary" />
                      Solution
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {caseStudies?.[selectedCase]?.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                      <TrendingUp size={16} className="mr-2 text-success" />
                      Key Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {caseStudies?.[selectedCase]?.results?.map(
                        (result, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <CheckCircle
                              size={14}
                              className="mr-2 text-success flex-shrink-0"
                            />
                            {result}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="border-t border-border p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(caseStudies?.[selectedCase]?.metrics)?.map(
                  ([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-muted-foreground">{key}</div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="border-t border-border p-8">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Code size={16} className="mr-2 text-primary" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {caseStudies?.[selectedCase]?.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary/30 text-secondary-foreground text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            <ExternalLink size={20} className="mr-2" />
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
