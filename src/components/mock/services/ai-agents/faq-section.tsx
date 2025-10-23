import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What types of AI agents can you develop for my business?",
      answer: `We develop a wide range of AI agents including conversational chatbots, process automation agents, predictive analytics agents, and specialized industry-specific solutions. Our agents can handle customer service, document processing, data analysis, lead qualification, appointment scheduling, and complex workflow automation. Each agent is custom-built to integrate seamlessly with your existing systems and business processes.`,
    },
    {
      question: "How long does it typically take to implement AI agents?",
      answer: `Implementation timelines vary based on complexity, but most projects follow our structured 8-10 week process:\n\n• Discovery & Analysis: 1-2 weeks\n• Design & Architecture: 1-2 weeks\n• Development & Training: 3-4 weeks\n• Deployment & Launch: 1-2 weeks\n• Optimization & Support: Ongoing\n\nSimpler implementations may be completed faster, while complex enterprise solutions with multiple integrations may require additional time.`,
    },
    {
      question: "What kind of ROI can I expect from AI agent implementation?",
      answer: `Our clients typically see significant ROI within 3-6 months. Common benefits include:\n\n• 60-85% reduction in operational costs\n• 40-90% improvement in processing times\n• 95%+ reduction in manual errors\n• 24/7 availability increasing customer satisfaction\n• Freed up human resources for strategic tasks\n\nSpecific ROI depends on your use case, but we provide detailed projections during the discovery phase and track actual performance post-deployment.`,
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: `Security and compliance are built into every AI agent we develop:\n\n• Enterprise-grade encryption for all data transmission and storage\n• GDPR, HIPAA, SOC 2, and industry-specific compliance\n• Regular security audits and penetration testing\n• Role-based access controls and audit trails\n• On-premise deployment options for sensitive data\n• Compliance with data residency requirements\n\nWe work closely with your security and compliance teams to ensure all requirements are met.`,
    },
    {
      question: "Can AI agents integrate with our existing software systems?",
      answer: `Yes, our AI agents are designed for seamless integration with existing systems including:\n\n• CRM platforms (Salesforce, HubSpot, Microsoft Dynamics)\n• ERP systems (SAP, Oracle, NetSuite)\n• Communication tools (Slack, Microsoft Teams, email)\n• Databases (SQL Server, PostgreSQL, MongoDB)\n• Cloud platforms (AWS, Azure, Google Cloud)\n• Custom APIs and legacy systems\n\nWe conduct thorough integration planning during the discovery phase to ensure smooth connectivity.`,
    },
    {
      question: "What ongoing support and maintenance do you provide?",
      answer: `We provide comprehensive ongoing support including:\n\n• 24/7 monitoring and alerting\n• Regular performance optimization and model retraining\n• Software updates and security patches\n• Technical support via phone, email, and chat\n• Monthly performance reports and analytics\n• Feature enhancements and system upgrades\n• Training for your team members\n• Dedicated account management for Enterprise clients\n\nAll plans include different levels of support, with Enterprise clients receiving priority assistance.`,
    },
    {
      question: "Do you provide training for our team to manage the AI agents?",
      answer: `Absolutely! We provide comprehensive training programs tailored to different user roles:\n\n• Administrator training for system management and configuration\n• End-user training for daily operations and interactions\n• Developer training for API usage and customizations\n• Executive dashboards and reporting training\n• Best practices workshops and ongoing education\n• Documentation and video tutorials\n• Regular training updates as new features are released\n\nTraining is included in all our packages, with additional sessions available as needed.`,
    },
    {
      question:
        "Can the AI agents be customized for our specific industry needs?",
      answer: `Yes, we specialize in creating industry-specific AI solutions. Our experience spans:\n\n• Healthcare: HIPAA-compliant patient triage and medical record processing\n• Finance: Regulatory compliance, fraud detection, and document processing\n• E-commerce: Customer service, inventory management, and personalization\n• Manufacturing: Quality control, predictive maintenance, and supply chain optimization\n• Legal: Contract analysis, document review, and case management\n• Education: Student support, administrative automation, and learning analytics\n\nWe understand industry-specific regulations, terminology, and workflows to deliver highly relevant solutions.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about AI agent implementation,
              costs, timelines, and ongoing support.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs?.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="morphic-card mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-surface/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq?.question}
                </h3>
                <div className="flex-shrink-0">
                  {/* Use the lucide icon component directly */}
                  {openFAQ === index ? (
                    <ChevronUp
                      size={20}
                      className="text-primary transition-transform duration-200"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="text-primary transition-transform duration-200"
                    />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-border">
                      <div className="pt-4">
                        {faq?.answer?.split("\n")?.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-muted-foreground leading-relaxed mb-3 last:mb-0"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <MessageCircle size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI experts are here to help you understand how AI agents can
              transform your business operations. Get personalized answers to
              your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-6 py-3 rounded-lg font-medium flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                Schedule a Call
              </button>
              <button className="btn-secondary px-6 py-3 rounded-lg font-medium flex items-center justify-center">
                <Mail size={20} className="mr-2" />
                Email Our Experts
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
