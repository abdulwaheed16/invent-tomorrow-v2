import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  videoUrl?: string;
  projectLink?: string;
  githubLink?: string;
  tags?: string[];
  onClick?: () => void;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  videoUrl,
  projectLink,
  githubLink,
  tags,
  onClick,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="group relative bg-card/50 min-h-64 overflow-hidden backdrop-blur-sm transition-all hover:border-b-2 hover:border-b-primary/20  hover:shadow-[0_0_30px_hsl(217_91%_60%/0.2)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="relative p-6">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <div className="flex gap-2">
              {videoUrl && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClick}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Play className="h-5 w-5" />
                </motion.button>
              )}
              {projectLink && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
              )}
              {githubLink && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              )}
            </div>
          </div>

          <p className="mb-4 text-muted-foreground leading-relaxed">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
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
        </div>
      </Card>
    </motion.div>
  );
}
