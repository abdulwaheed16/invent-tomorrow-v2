import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  FileText,
  Headphones,
  MessageCircle,
  Users,
} from "lucide-react";
import React, { useState } from "react";

// --- Data Types ---
type FAQ = {
  question: string;
  answer: string;
};

type QuickLink = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  link: string;
};

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What technologies do you use for web development?",
      answer: `We specialize in modern JavaScript frameworks and libraries including React 18, Next.js 14, Node.js, and TypeScript. For databases, we work with PostgreSQL, MongoDB, and Redis. Our cloud infrastructure primarily uses AWS, with deployment on platforms like Vercel and Netlify. We also implement CI/CD pipelines using GitHub Actions and Docker for containerization.`,
    },
    {
      question: "How long does it typically take to develop a web application?",
      answer: `Project timelines vary based on complexity and requirements. A simple business website takes 2-3 months, while a complex web application with advanced features can take 4-6 months. We provide detailed project timelines during the planning phase, with regular milestone updates throughout development. Our agile approach allows for flexibility while maintaining delivery commitments.`,
    },
    // ... other FAQs
  ];

  const quickLinks: QuickLink[] = [
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Detailed technical specifications and API documentation",
      link: "/documentation",
    },
    {
      icon: Users,
      title: "Client Portal",
      description: "Access project updates, timelines, and communication",
      link: "/client-portal",
    },
    {
      icon: Headphones,
      title: "Support Center",
      description: "24/7 technical support and maintenance services",
      link: "/support",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our web development services,
            process, and technical capabilities.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="morphic-card overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-200 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={20} className="text-muted-foreground" />
                  </div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <div className="border-t border-border pt-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our technical experts are here to help. Schedule a consultation to
              discuss your specific requirements and get personalized answers to
              your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Contact Our Experts</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Schedule Call</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {quickLinks.map((item, index) => (
            <div
              key={index}
              className="morphic-card p-6 text-center hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {item.description}
              </p>
              <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center justify-center space-x-1 mx-auto">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
