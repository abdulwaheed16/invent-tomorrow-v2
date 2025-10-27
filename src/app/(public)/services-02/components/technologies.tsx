import { motion } from "framer-motion";

interface TechnologiesSectionProps {
  technologies: string[];
  color: string;
}

export default function TechnologiesSection({
  technologies,
  color,
}: TechnologiesSectionProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies <span className="gradient-text">We Use</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Industry-leading tools and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 text-center hover:border-[#0066FF]/50 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center font-bold text-2xl"
                style={{ background: `${color}20`, color: color }}
              >
                {tech.charAt(0)}
              </div>
              <p className="font-medium group-hover:text-[#00D4FF] transition-colors">
                {tech}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
