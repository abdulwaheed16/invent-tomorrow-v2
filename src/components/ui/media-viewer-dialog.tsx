"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./button";

interface MediaViewerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  media: Array<{ type: "image" | "video"; url: string; title?: string }>;
  initialIndex?: number;
}

export default function MediaViewerDialog({
  isOpen,
  onClose,
  media,
  initialIndex = 0,
}: MediaViewerDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Update currentIndex when initialIndex changes or dialog opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = media[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="lg:min-w-3xl xl:min-w-5xl w-full h-[90vh] p-0 bg-black/95 border-0">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            data-testid="close-media-viewer"
          >
            <X className="w-6 h-6 text-white" />
          </Button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-50 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
            {currentIndex + 1} / {media.length}
          </div>

          {/* Navigation Arrows */}
          {media.length > 1 && (
            <>
              <Button
                onClick={handlePrevious}
                className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                data-testid="prev-media"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </Button>
              <Button
                onClick={handleNext}
                className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                data-testid="next-media"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </Button>
            </>
          )}

          {/* Media Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center px-2 pt-2 pb-28"
            >
              {currentMedia.type === "video" ? (
                <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
                  <iframe
                    title={currentMedia.title || `Video ${currentIndex + 1}`}
                    src={currentMedia.url}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={currentMedia.url}
                    alt={currentMedia.title || `Media ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail Strip */}
          {media.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white/10 backdrop-blur-sm py-3 px-8 rounded-full max-w-[90%] overflow-x-auto">
              {media.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                    currentIndex === index
                      ? "ring-2 ring-white scale-110"
                      : "opacity-50 hover:opacity-100"
                  }`}
                  data-testid={`thumbnail-${index}`}
                >
                  {item.type === "video" ? (
                    <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <Image
                      src={item.url}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  )}
                </Button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
