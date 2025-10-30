"use client";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function CTAService() {
  return (
    <AnimatedSection
      animation="fadeIn"
      className=" text-center mt-16 w-full px-4 bg-gradient-to-r from-primary/5 to-accent/5 py-12"
    >
      <div className="container p-8 max-w-2xl mx-auto">
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
          <Button className="group bg-gradient-to-r from-primary to-blue-600 text-white text-md h-12 min-w-48 w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center  transition-all duration-300 ease-in-out cursor-pointer">
            <span className="group-hover:scale-105 flex items-center gap-2 transition-all duration-300 ease-in-out cursor-pointer">
              {" "}
              <Phone size={20} className="mr-2" />
              Schedule a Call
            </span>
          </Button>
          {/* <Button
            variant="outline"
            className="hover:text-white  hover:bg-gradient-to-r from-primary to-blue-600 text-md h-14 min-w-48 px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <Mail size={20} className="mr-2" />
            Email Our Experts
          </Button> */}
        </div>
      </div>
    </AnimatedSection>
  );
}
