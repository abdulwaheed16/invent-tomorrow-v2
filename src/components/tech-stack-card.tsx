"use client";
import { techLogos } from "@/utils/assets";
import { motion } from "framer-motion";
import Image from "next/image";

interface TechStackCardProps {
  tech?: {
    title: string;
    color?: string;
  };

  index?: number;
}
export default function TechStackCard({ tech, index = 0 }: TechStackCardProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{
        y: -5,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center border border-gray-200 hover:border-[#0066FF]/50 transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="w-20 h-20 rounded-full p-1 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ">
          <Image
            src={techLogos?.dockerLogo?.src ?? ""}
            alt={typeof tech === "object" ? tech?.title : tech ?? ""}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <p className="font-medium text-gray-800 text-sm text-center">
          {typeof tech === "object" ? tech?.title : tech}
        </p>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0066FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
}
