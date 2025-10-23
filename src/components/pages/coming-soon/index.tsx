"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center justify-between p-4 pt-16 pb-8 
                    bg-gradient-to-br from-[#1644eb] to-[#0d1b3f] via-[#1a37c4]"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl flex-grow flex flex-col items-center justify-center w-full"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
          Coming Soon
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 mb-10">
          {` We’re almost ready to launch. Thanks for your patience!`}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="text-center pt-8 border-t border-white border-opacity-20 w-full max-w-lg"
      >
        <h4 className="text-lg font-semibold mb-3 text-gray-200">
          Questions? Contact Us!
        </h4>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-md">
          <Link
            href="mailto:contact@inventtomorrow.com"
            className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>abdulhaadi@inventtomorrow.io</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
