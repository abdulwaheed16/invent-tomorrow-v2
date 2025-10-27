"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, Bug, Home, Mail, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log error to monitoring service in production
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-50/20 to-orange-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Error Illustration */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
          className="mb-8"
        >
          <div className="relative">
            {/* Main Error Illustration */}
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1581291518857-4e27d48309a5?w=800&h=600&fit=crop"
                alt="Error Illustration"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />

              {/* Overlay with Error Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 via-transparent to-transparent rounded-2xl"></div>

              {/* Error Icon */}
              <motion.div
                variants={pulseAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Bug className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-8 -left-8 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl">!</span>
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
            Something Went Wrong
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">
            We're sorry, but something unexpected happened. Our team has been
            notified and is working to fix this issue.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg max-w-2xl mx-auto text-left">
              <p className="text-sm font-mono text-red-800 mb-2">
                <strong>Error:</strong> {error.message}
              </p>
              {error.digest && (
                <p className="text-xs font-mono text-red-600">
                  <strong>Digest:</strong> {error.digest}
                </p>
              )}
            </div>
          )}
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
            onClick={reset}
            className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
            onClick={() => router.push("/")}
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Button>
        </motion.div>

        {/* Helpful Actions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.8}
          className="mt-12"
        >
          <p className="text-slate-600 mb-4">While you wait, you can:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/portfolio"
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Browse Portfolio
            </Link>
            <span className="text-slate-400">•</span>
            <Link
              href="/services"
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              View Services
            </Link>
            <span className="text-slate-400">•</span>
            <Link
              href="/tech-stack"
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Explore Tech Stack
            </Link>
          </div>
        </motion.div>

        {/* Report Error */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-red-200 max-w-md mx-auto"
        >
          <p className="text-slate-700 text-sm mb-3">
            If this problem persists, please help us by reporting it.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            asChild
          >
            <a href="mailto:support@inventtomorrow.com?subject=Error Report&body=Error encountered: ${encodeURIComponent(error.message)}">
              <Mail className="w-4 h-4 mr-2" />
              Report Error
            </a>
          </Button>
        </motion.div>

        {/* Auto Refresh Notice */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1.2}
          className="mt-6 text-center"
        >
          <p className="text-xs text-slate-500">
            This page will automatically refresh in 30 seconds
          </p>
        </motion.div>
      </div>
    </div>
  );
}
