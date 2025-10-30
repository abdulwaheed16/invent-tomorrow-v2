"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Play, TrendingUp, X } from "lucide-react";
import { useState } from "react";

// Type definitions
interface CaseStudy {
  title: string;
  description: string;
  result: string;
  videoUrl?: string;
  externalLink?: string;
  inAppUrl?: string;
  tags?: string[];
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

// Video Modal Component
function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}) {
  // Extract Loom video ID from URL
  const getLoomEmbedUrl = (url: string) => {
    const match = url.match(/share\/([a-zA-Z0-9]+)/);
    if (match && match[1]) {
      return `https://www.loom.com/embed/${match[1]}`;
    }
    return url;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-4xl border-border/50 bg-card p-0 overflow-hidden">
            <DialogTitle className="sr-only">{title}</DialogTitle>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.5,
              }}
              className="relative"
            >
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                onClick={onClose}
                className="absolute -right-12 top-0 z-50 rounded-full bg-card p-2 text-foreground transition-all hover:bg-muted hover:rotate-90"
              >
                <X className="h-6 w-6" />
              </motion.button>

              <motion.div
                className="aspect-video w-full overflow-hidden rounded-lg bg-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <iframe
                  src={getLoomEmbedUrl(videoUrl)}
                  frameBorder="0"
                  allowFullScreen
                  className="h-full w-full"
                  title={title}
                />
              </motion.div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

// Case Study Card Component
function CaseStudyCard({
  study,
  index,
  onVideoClick,
}: {
  study: CaseStudy;
  index: number;
  onVideoClick: (url: string, title: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      whileHover={{
        y: -10,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17,
          duration: 0.4,
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="group relative bg-card/50 min-h-64 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-b-2 hover:border-b-primary/20 hover:shadow-[0_10px_40px_hsl(217_91%_60%/0.15)]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <motion.h3
                className="text-2xl font-bold text-foreground mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
              >
                {study.title}
              </motion.h3>
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp className="w-4 h-4" />
                {study.result}
              </motion.div>
            </div>
            <div className="flex gap-2">
              {study.videoUrl && (
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onVideoClick(study.videoUrl!, study.title)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                >
                  <Play className="h-5 w-5 ml-0.5" />
                </motion.button>
              )}
              {study.externalLink && (
                <motion.a
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={study.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
              )}
            </div>
          </div>

          <motion.p
            className="mb-4 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
          >
            {study.description}
          </motion.p>

          {study.tags && study.tags.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
            >
              {study.tags.map((tag, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.15 + 0.4 + idx * 0.05,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}

          {study.inAppUrl && (
            <motion.a
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
              whileHover={{ x: 5 }}
              href={study.inAppUrl}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300"
            >
              View Case Study
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </motion.a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

export default function CaseStudiesSection({
  caseStudies,
}: CaseStudiesSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  if (!caseStudies || caseStudies.length === 0) return null;

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="container mx-auto relative w-full overflow-hidden py-20 px-4">
      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 3,
                duration: 0.5,
              }}
            >
              <TrendingUp className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold">Case Studies</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Proven{" "}
            <motion.span
              className="text-color"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Results
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {`See how we've helped businesses transform`}
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.map((study: CaseStudy, index: number) => (
            <CaseStudyCard
              key={index}
              study={study}
              index={index}
              onVideoClick={(url, title) => setSelectedVideo({ url, title })}
            />
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
      />
    </section>
  );
}

// Export types for use in other components
export type { CaseStudiesSectionProps, CaseStudy };
