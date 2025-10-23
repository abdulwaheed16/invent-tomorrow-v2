"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { homeData } from "@/lib/data/home-data";
import ProjectCard from "./project-card";
import VideoModal from "./video-model";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.6 },
  },
};

export default function ProjectsSection() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <section className="relative w-full overflow-hidden py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-4 text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A showcase of innovative solutions in AI, automation, and full-stack
            development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2"
        >
          {homeData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index * 0.1}
            >
              <ProjectCard
                {...project}
                index={index}
                onClick={
                  project.videoUrl
                    ? () =>
                        setSelectedVideo({
                          url: project.videoUrl!,
                          title: project.title,
                        })
                    : undefined
                }
              />
            </motion.div>
          ))}
        </motion.div>
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