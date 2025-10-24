"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Zap } from "lucide-react";
import CallToAction from "../home/call-to-action";

export default function CTAService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-center mt-16 w-full px-4 bg-gradient-to-r from-primary/5 to-accent/5 py-12"
    >
      <CallToAction
        title={`Let’s Build an Extraordinary\nProduct Together.`}
        description="Your startup deserves momentum, not delays. Schedule a call today and start building a product ready for users and investors."
        buttonText="Get in Touch with Our CEO"
        buttonLink="https://calendly.com/abdulhaadi-businesschat/30min"
        highlights={[
          { icon: <Zap size={18} />, text: "No commitment required" },
          { text: "20-min call" },
          { text: "Instant insights" },
        ]}
        themeColor="blue"
      />{" "}
      <div className=" p-8 max-w-2xl mx-auto">
        <MessageCircle size={48} className="text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-text-primary mb-4">
          Still Have Questions?
        </h3>
        <p className="text-muted-foreground mb-6">
          Our AI experts are here to help you understand how AI agents can
          transform your business operations. Get personalized answers to your
          specific questions.
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
  );
}
