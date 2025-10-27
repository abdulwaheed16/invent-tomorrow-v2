import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Type definitions
interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  color: string;
}

interface StatCardProps {
  stat: Stat;
  color: string;
  index: number;
}

export default function StatsSection({ stats, color }: StatsSectionProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332]/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat: Stat, index: number) => (
            <StatCard key={index} stat={stat} color={color} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, color, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      const targetValue = parseInt(stat.value.replace(/[^0-9]/g, ""));
      if (!isNaN(targetValue)) {
        let start = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetValue) {
            setCount(targetValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="text-center group"
    >
      <motion.div
        animate={isInView ? { scale: [1, 1.2, 1] } : {}}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-2 gradient-text group-hover:scale-110 transition-transform"
      >
        {stat.value.includes("%") || stat.value.includes("+")
          ? stat.value
          : count > 0
          ? `${count}+`
          : stat.value}
      </motion.div>
      <div className="text-gray-400 font-medium">{stat.label}</div>
      <motion.div
        animate={isInView ? { scaleX: [0, 1] } : {}}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
        className="h-1 w-16 mx-auto mt-3 rounded-full origin-left"
        style={{ background: color }}
      />
    </motion.div>
  );
}

// Export types for use in other components
export type { Stat, StatCardProps, StatsSectionProps };
