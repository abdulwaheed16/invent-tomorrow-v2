"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to implement an AI agent?",
    answer:
      "Typical implementation takes 6-8 weeks from discovery to launch, depending on complexity and integration requirements.",
  },
  {
    question: "Can the AI agent integrate with our existing systems?",
    answer:
      "Yes! Our AI agents are designed to integrate seamlessly with most modern SaaS platforms, CRMs, and databases through APIs and webhooks.",
  },
  {
    question: "What kind of training data do you need?",
    answer:
      "We work with your existing documentation, support tickets, and knowledge base. We can also help you structure new training data if needed.",
  },
  {
    question: "How do you ensure the AI responses are accurate?",
    answer:
      "We implement multiple validation layers, human-in-the-loop review processes, and continuous monitoring to ensure high accuracy and reliability.",
  },
  {
    question: "What's the ongoing maintenance like?",
    answer:
      "We provide ongoing monitoring, performance optimization, and model updates. Most clients need minimal hands-on maintenance after the initial setup.",
  },
];
export default function FAQs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="max-w-4xl mx-auto space-y-4"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <AccordionItem
              value={`faq-${index}`}
              className="border-2 border-border rounded-xl px-6 bg-card/50 backdrop-blur-sm shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left hover:no-underline py-6">
                <div className="flex items-start gap-3 w-full">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">Q</span>
                  </div>
                  <span className="pr-4">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6 pl-11">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">A</span>
                  </div>
                  <p className="pt-1">{faq.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.section>
  );
}
