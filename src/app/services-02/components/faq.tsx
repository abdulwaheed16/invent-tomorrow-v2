import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

// Type definitions
interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  color: string;
}

export default function FAQSection({ faqs, color }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <HelpCircle className="w-5 h-5" style={{ color: color }} />
            <span className="text-sm font-semibold">
              Frequently Asked Questions
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our service
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq: FAQ, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect rounded-2xl overflow-hidden hover:border-[#0066FF]/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold pr-8 group-hover:text-[#00D4FF] transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    className="w-6 h-6 transition-colors"
                    style={{ color: openIndex === index ? color : "#666" }}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export types for use in other components
export type { FAQ, FAQSectionProps };
