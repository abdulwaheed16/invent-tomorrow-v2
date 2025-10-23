import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoModalProps) {
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
