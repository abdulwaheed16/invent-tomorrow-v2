/**
 * Form navigation controls
 * Previous, Next, and Submit buttons with loading states
 */

"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Loader2, Send } from "lucide-react";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isLoading?: boolean;
  isSubmitting?: boolean;
  canGoNext?: boolean;
  className?: string;
}

export function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
  isLoading = false,
  isSubmitting = false,
  canGoNext = true,
  className,
}: FormNavigationProps) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      {/* Previous button */}
      <Button
        type="button"
        variant="outline"
        onClick={onPrevious}
        disabled={isFirstStep || isLoading || isSubmitting}
        className="gap-2 transition-all duration-200 hover:bg-slate-100"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </Button>

      {/* Step indicator */}
      <div className="text-sm text-muted-foreground font-medium">
        Step {currentStep + 1} of {totalSteps}
      </div>

      {/* Next/Submit button */}
      {isLastStep ? (
        <Button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting || isLoading}
          className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all duration-200"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit Audit</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      ) : (
        <Button
          type="button"
          onClick={onNext}
          disabled={!canGoNext || isLoading || isSubmitting}
          className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all duration-200"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
