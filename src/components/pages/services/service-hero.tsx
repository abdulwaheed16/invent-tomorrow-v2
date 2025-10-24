"use client";
import BookCallButton from "@/components/ui/buttons/book-call-button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroData } from "../../../../types/services";

interface ServiceHeroProps {
  heroData: HeroData;
}

export default function ServiceHero({ heroData }: ServiceHeroProps) {
  const { title, description, bgImages } = heroData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {bgImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
            scale: currentImageIndex === index ? 1 : 1.1,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={image ?? ""}
            alt={`Background image ${index + 1} | Invent Tomorrow | ${title}`}
            layout="fill"
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <BookCallButton />
            {/* <Button
              size="lg"
              variant="outline"
              data-testid="button-learn-more"
              onClick={() => console.log("Learn More clicked")}
            >
              Learn More
            </Button> */}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </div>
  );
}
