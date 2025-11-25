/**
 * Custom hook for form navigation logic
 * Handles step navigation and form submission triggers
 */

"use client";

import { useCallback, useMemo, type RefObject } from "react";
import type { QuestionStepRef } from "@/components/pages/audit-ai-tool/question-step";
import type { UserInfoFormRef } from "@/components/pages/audit-ai-tool/user-info-form";
import type { QuestionGroup } from "@/lib/types/audit.types";
import { useAuditStore } from "../store";

interface UseFormNavigationProps {
  userFormRef: RefObject<UserInfoFormRef | null>;
  questionFormRef: RefObject<QuestionStepRef | null>;
}

interface UseFormNavigationReturn {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
  currentQuestionGroup: QuestionGroup | undefined;
  hasNext: boolean;
  hasPrevious: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
  getDefaultValues: () => Record<string, any>;
}

export function useFormNavigation({
  userFormRef,
  questionFormRef,
}: UseFormNavigationProps): UseFormNavigationReturn {
  const {
    currentStep,
    totalSteps,
    userProjectInfo,
    questionGroups,
    responses,
    previousStep,
  } = useAuditStore();

  // Generate step labels (memoized)
  const stepLabels = useMemo(
    () => [
      "Your Info",
      ...questionGroups.map((group) => group.title.split(" ")[0]),
    ],
    [questionGroups]
  );

  // Get current question group (memoized)
  const currentQuestionGroup = useMemo(
    () => questionGroups[currentStep - 1],
    [questionGroups, currentStep]
  );

  // Check if can navigate
  const hasNext = currentStep < totalSteps - 1;
  const hasPrevious = currentStep > 0;

  // Handle next button click (memoized)
  const handleNext = useCallback(() => {
    if (currentStep === 0) {
      // Trigger user info form submission via ref
      userFormRef.current?.submit();
    } else {
      // Trigger question form submission via ref
      questionFormRef.current?.submit();
    }
  }, [currentStep, userFormRef, questionFormRef]);

  // Handle previous button click (memoized)
  const handlePrevious = useCallback(() => {
    previousStep();
  }, [previousStep]);

  // Get default values for current step (memoized)
  const getDefaultValues = useCallback(() => {
    if (currentStep === 0) {
      return userProjectInfo || {};
    }

    if (currentQuestionGroup) {
      const defaults: Record<string, any> = {};
      currentQuestionGroup.questions.forEach((q: any) => {
        if (responses[q.id] !== undefined) {
          defaults[q.id] = responses[q.id];
        }
      });
      return defaults;
    }

    return {};
  }, [currentStep, userProjectInfo, currentQuestionGroup, responses]);

  return {
    currentStep,
    totalSteps,
    stepLabels,
    currentQuestionGroup,
    hasNext,
    hasPrevious,
    handleNext,
    handlePrevious,
    getDefaultValues,
  };
}
