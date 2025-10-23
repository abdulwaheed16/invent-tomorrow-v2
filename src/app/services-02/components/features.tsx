import { motion, useInView } from "framer-motion";
import {
    BarChart3,
    Bell,
    Brain,
    Check,
    Cloud,
    Code,
    CreditCard,
    FileSearch,
    Gauge,
    GitBranch,
    Globe,
    GraduationCap,
    LayoutDashboard,
    LucideIcon,
    Map,
    MessageSquare,
    Network,
    PieChart,
    Plug,
    Radio,
    Share2,
    Shield,
    ShoppingCart,
    Smartphone,
    WifiOff,
} from "lucide-react";
import { useRef } from "react";

// Type definitions
interface Feature {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

interface FeaturesSectionProps {
  features: Feature[];
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
  color: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Network,
  Brain,
  Plug,
  GitBranch,
  BarChart3,
  Globe,
  Radio,
  Cloud,
  Code,
  LayoutDashboard,
  CreditCard,
  Smartphone,
  WifiOff,
  Bell,
  ShoppingCart,
  Share2,
  PieChart,
  FileSearch,
  Shield,
  Map,
  GraduationCap,
  Gauge,
  Check,
};

export default function FeaturesSection({
  features,
  color,
}: FeaturesSectionProps) {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `${color}30` }}
        />
      </div>

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
              Features & Capabilities
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You <span className="gradient-text">Need</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to exceed expectations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature: Feature, index: number) => (
            <FeatureCard
              key={index}
              feature={feature}
              color={color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, color, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = iconMap[feature.icon] || Check;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-effect rounded-2xl p-8 hover:border-[#0066FF]/50 transition-all group relative overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}10 0%, transparent 100%)`,
        }}
      />

      <div className="relative">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: `${color}20` }}
        >
          <Icon className="w-8 h-8" style={{ color: color }} />
        </motion.div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-[#00D4FF] transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

// Export types for use in other components
export type { Feature, FeatureCardProps, FeaturesSectionProps };
