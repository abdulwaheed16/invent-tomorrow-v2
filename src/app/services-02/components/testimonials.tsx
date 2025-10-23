import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// Type definitions
interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  color: string;
}

export default function TestimonialsSection({
  testimonials,
  color,
}: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2332]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
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
            className="inline-block px-4 py-2 rounded-full glass-effect mb-6"
          >
            <span className="text-sm font-semibold" style={{ color: color }}>
              Client Success Stories
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real results from real partnerships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-effect rounded-2xl p-8 relative group hover:border-[#0066FF]/50 transition-all"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16" style={{ color: color }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "fill-current" : ""
                    }`}
                    style={{ color: color }}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ background: `${color}30`, color: color }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export types for use in other components
export type { Testimonial, TestimonialsSectionProps };
