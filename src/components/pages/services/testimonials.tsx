"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  heading?: string;
}

export default function Testimonials({
  testimonials,
  heading = "What Our Clients Say",
}: TestimonialsCarouselProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-card">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-semibold mb-16 text-center"
          >
            {heading}
          </motion.h2>
        )}

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
              data-testid={`testimonial-${currentIndex}`}
            >
              <Quote className="w-16 h-16 text-primary mx-auto mb-8 opacity-50" />

              <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-12 max-w-4xl mx-auto">
                {testimonials[currentIndex].quote}
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                  />
                  <AvatarFallback>
                    {testimonials[currentIndex].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <div className="font-semibold text-lg">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role} at{" "}
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border"
                  }`}
                  data-testid={`testimonial-dot-${index}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
