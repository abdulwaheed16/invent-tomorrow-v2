"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "../utils/assets";

export default function LoadingScreen() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white overflow-hidden"
      id="app-loader"
    >
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        // rotate: [0, 360, 0],
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.7, 1],
        }}
        className="relative flex items-center justify-center"
      >
        <div className="h-24 w-24 bg-white/10 rounded-full shadow-xl flex items-center justify-center text-4xl font-bold text-indigo-700">
          <Image
            src={images.inventTomorrowLogoShort?.src}
            alt="Invent Tomorrow Logo"
            height={80}
            width={150}
            className="h-14 w-auto"
          />
        </div>
        {/* Pulse ring */}
        <motion.div
          className="absolute h-24 w-24 rounded-full border-4 border-white/40"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Text animation */}
      <motion.h1
        className="mt-8 text-2xl md:text-3xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        InventTomorrow
      </motion.h1>

      {/* Loading dots */}
      {/* <motion.div
        className="mt-3 flex space-x-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              repeat: Infinity,
            },
          },
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-3 w-3 bg-white rounded-full"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: [0, 1, 0],
                transition: {
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              },
            }}
          />
        ))}
      </motion.div> */}
    </div>
  );
}
