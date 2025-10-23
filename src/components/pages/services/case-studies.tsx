"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl border-border/50 bg-card p-0">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative"
        >
          <button
            onClick={onClose}
            className="absolute -right-12 top-0 z-50 rounded-full bg-card p-2 text-foreground transition-colors hover:bg-muted"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <iframe
              src={getLoomEmbedUrl(videoUrl)}
              frameBorder="0"
              allowFullScreen
              className="h-full w-full"
              title={title}
            />
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="group relative bg-card/50 min-h-64 overflow-hidden backdrop-blur-sm transition-all hover:border-b-2 hover:border-b-primary/20 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.2)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="relative p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {study.title}
              </h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <TrendingUp className="w-4 h-4" />
                {study.result}
              </div>
            </div>
            <div className="flex gap-2">
              {study.videoUrl && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onVideoClick(study.videoUrl!, study.title)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Play className="h-5 w-5" />
                </motion.button>
              )}
              {study.externalLink && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={study.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
              )}
            </div>
          </div>

          <p className="mb-4 text-muted-foreground leading-relaxed">
            {study.description}
          </p>

          {study.tags && study.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {study.inAppUrl && (
            <motion.a
              whileHover={{ x: 5 }}
              href={study.inAppUrl}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
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

  return (
    <section className="container mx-auto relative w-full overflow-hidden py-20 px-4">
      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6"
          >
            <TrendingUp className="w-5 h-5 text-primary" />
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

        {/* Case Studies Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {caseStudies.map((study: CaseStudy, index: number) => (
            <CaseStudyCard
              key={index}
              study={study}
              index={index}
              onVideoClick={(url, title) => setSelectedVideo({ url, title })}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}

// Export types for use in other components
export type { CaseStudiesSectionProps, CaseStudy };
