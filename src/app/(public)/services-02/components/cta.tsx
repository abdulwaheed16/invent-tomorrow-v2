import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

// Type definitions
interface CTASectionProps {
  color: string;
}

export default function CTASection({ color }: CTASectionProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.8]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute w-64 h-64 rounded-full blur-3xl"
              style={{
                background: color,
                top: `${20 + i * 30}%`,
                left: `${10 + i * 40}%`,
              }}
            />
          ))}

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Ready to Get <span className="gradient-text">Started?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
             {`Let's discuss how we can transform your vision into reality.
              Schedule a free consultation today.`}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00D4FF] to-[#0066FF] hover:opacity-90 transition-all group text-base px-8 h-14"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5 backdrop-blur-sm text-base px-8 h-14"
              >
                View Pricing
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Free Consultation
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                No Commitment Required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Quick Response
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Export types for use in other components
export type { CTASectionProps };
