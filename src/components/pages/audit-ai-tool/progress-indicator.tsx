/**
 * Modern Chevron-Based Progress Indicator
 * Professional design matching user sketch
 */

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { memo } from "react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

function ProgressIndicatorComponent({
  currentStep,
  totalSteps,
  stepLabels,
}: ProgressIndicatorProps) {
  const displayStep = currentStep + 1;
  const progress = (displayStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-8">
      {/* Progress bar with counter */}
      <div className="relative">
        <div className="h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        <div className="absolute -top-1 -right-2 bg-white px-3 py-1 rounded-full shadow-md border-2 border-purple-600">
          <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {displayStep}/{totalSteps}
          </span>
        </div>
      </div>

      {/* Chevron-based step indicators */}
      <div className="relative flex items-center justify-center">
        <div className="flex items-center gap-0">
          {stepLabels.map((label, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isUpcoming = index > currentStep;
            const displayNumber = index + 1;

            return (
              <div key={index} className="relative flex items-center">
                {/* Chevron step box */}
                <motion.div
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                  style={{ zIndex: stepLabels.length - index }}
                >
                  {/* Main chevron shape */}
                  <div
                    className={cn(
                      "relative h-16 flex items-center justify-center transition-all duration-300",
                      "px-6 pr-8",
                      index === 0 ? "pl-6 rounded-l-lg" : "pl-8",
                      index === stepLabels.length - 1 && "pr-6 rounded-r-lg",
                      isCompleted &&
                        "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg",
                      isCurrent &&
                        "bg-gradient-to-r from-[#0e0637] to-purple-900 text-white shadow-2xl ring-2 ring-purple-400 ring-offset-2",
                      isUpcoming && "bg-slate-200 text-slate-400"
                    )}
                    style={{
                      clipPath:
                        index === stepLabels.length - 1
                          ? undefined
                          : "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)",
                      marginLeft: index === 0 ? 0 : "-20px",
                    }}
                  >
                    {/* Content */}
                    <div className="flex items-center gap-3 relative z-10">
                      {/* Circle with number/check */}
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300",
                          "border-2",
                          isCompleted &&
                            "bg-white border-white text-purple-600",
                          isCurrent && "bg-white border-white text-[#0e0637]",
                          isUpcoming &&
                            "bg-white border-slate-300 text-slate-400"
                        )}
                      >
                        {isCompleted ? (
                          <Check className="w-5 h-5" strokeWidth={3} />
                        ) : (
                          <span>{displayNumber}</span>
                        )}
                      </div>

                      {/* Label */}
                      <span
                        className={cn(
                          "font-semibold text-sm whitespace-nowrap transition-all duration-300",
                          (isCompleted || isCurrent) && "text-white",
                          isUpcoming && "text-slate-500"
                        )}
                      >
                        {label}
                      </span>
                    </div>

                    {/* Pulse animation for current step */}
                    {isCurrent && (
                      <motion.div
                        className="absolute inset-0 bg-purple-400/30 rounded-lg"
                        animate={{
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)",
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile view - simplified */}
      <div className="lg:hidden text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200 shadow-sm">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center font-bold border-2",
              "bg-gradient-to-r from-[#0e0637] to-purple-900 border-purple-600 text-white shadow-lg"
            )}
          >
            {displayStep}
          </div>
          <div className="text-left">
            <p className="text-lg font-bold text-[#0e0637]">
              {stepLabels[currentStep]}
            </p>
            <p className="text-sm text-slate-600">
              Step {displayStep} of {totalSteps}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ProgressIndicator = memo(ProgressIndicatorComponent);
ProgressIndicator.displayName = "ProgressIndicator";
