"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/20 to-purple-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 404 Illustration */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
          className="mb-8"
        >
          <div className="relative">
            {/* Main 404 Illustration */}
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1618477248225-c14f0c5a8aa5?w=800&h=600&fit=crop"
                alt="404 Not Found"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />

              {/* Overlay with 404 Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>

              {/* 404 Number */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                  className="text-8xl md:text-9xl font-bold text-white"
                >
                  404
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Search className="w-10 h-10 text-white" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-10 -left-10 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl">?</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.4}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            The page you're looking for seems to have vanished into the digital
            void. Don't worry, even the best explorers get lost sometimes!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          custom={0.6}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => router.push("/")}
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.8}
          className="mt-12"
        >
          <p className="text-slate-600 mb-4">Or you might be interested in:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/portfolio"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Portfolio
            </Link>
            <span className="text-slate-400">•</span>
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Services
            </Link>
            <span className="text-slate-400">•</span>
            <Link
              href="/tech-stack"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Tech Stack
            </Link>
            <span className="text-slate-400">•</span>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              About Us
            </Link>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 max-w-md mx-auto"
        >
          <p className="text-slate-700 text-sm">
            Still can't find what you're looking for?
            <Link
              href="mailto:info@inventtomorrow.com"
              className="text-blue-600 hover:text-blue-700 font-medium ml-1"
            >
              Contact our support team
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
