/**
 * Success message component shown after audit submission
 */

"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Home, RotateCcw } from "lucide-react";
import Link from "next/link";

interface AuditSuccessProps {
  auditId?: string;
  onStartAgain: () => void;
}

export function AuditSuccess({ auditId, onStartAgain }: AuditSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-gradient-to-br from-white to-purple-50/30 border border-purple-200/50 rounded-2xl p-8 md:p-12 shadow-lg">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-4 mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Audit Submitted Successfully!
          </h2>

          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Thank you for completing the AI tool audit. We've received your
            submission and will review it shortly.
          </p>

          {auditId && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-lg">
              <FileText className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">
                Audit ID: <code className="font-mono">{auditId}</code>
              </span>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={onStartAgain}
            size="lg"
            className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5" />
            Start New Audit
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
          >
            <Link href="/">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 pt-6 border-t border-purple-200/50"
        >
          <p className="text-sm text-center text-muted-foreground">
            You will receive an email with the audit results within 2-3 business
            days.
            <br />
            If you have any questions, please contact us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              support@example.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
