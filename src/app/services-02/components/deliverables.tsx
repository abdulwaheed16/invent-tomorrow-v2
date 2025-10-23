import { motion } from "framer-motion";
import { Package } from "lucide-react";

// Type definitions
interface DeliverablesSectionProps {
  deliverables: string[];
  color: string;
}

export default function DeliverablesSection({
  deliverables,
  color,
}: DeliverablesSectionProps) {
  if (!deliverables || deliverables.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a2332]/30 to-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {`What You'll`} <span className="gradient-text">Receive</span>
          </h2>
          <p className="text-gray-400 text-lg">Comprehensive deliverables</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {deliverables.map((item: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex items-center gap-4 glass-effect rounded-xl p-5 hover:border-[#0066FF]/50 transition-all group"
            >
              <Package
                className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ color: color }}
              />
              <span className="font-medium group-hover:text-[#00D4FF] transition-colors">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export types for use in other components
export type { DeliverablesSectionProps };
