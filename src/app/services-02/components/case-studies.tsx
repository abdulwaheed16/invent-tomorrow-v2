import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

// Type definitions
interface CaseStudy {
  title: string;
  description: string;
  result: string;
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  color: string;
}

export default function CaseStudiesSection({
  caseStudies,
  color,
}: CaseStudiesSectionProps) {
  if (!caseStudies || caseStudies.length === 0) return null;

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6"
          >
            <TrendingUp className="w-5 h-5" style={{ color: color }} />
            <span className="text-sm font-semibold">Case Studies</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D4FF]">
              Results
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            {`See how we've helped businesses transform`}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study: CaseStudy, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative group overflow-hidden hover:border-[#0066FF]/50 transition-all"
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${color}10 0%, transparent 100%)`,
                }}
              />

              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 font-bold text-2xl"
                  style={{ background: `${color}20`, color: color }}
                >
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00D4FF] transition-colors">
                  {study.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mb-6"
                  style={{ background: `${color}20`, color: color }}
                >
                  <TrendingUp className="w-4 h-4" />
                  {study.result}
                </div>

                <Button
                  variant="ghost"
                  className="text-[#00D4FF] hover:text-[#00D4FF] hover:bg-[#00D4FF]/10 group/btn"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export types for use in other components
export type { CaseStudiesSectionProps, CaseStudy };
