/**
 * Custom hook for audit form submission logic
 * Extracts business logic from the container component
 */

"use client";

import { submitAuditResponses, submitUserInfo } from "@/lib/actions/audit";
import type { UserProjectInfo } from "@/lib/types/audit.types";
import { useAuditStore } from "@/store";
import { useTransition } from "react";
import { toast } from "sonner";

interface UseAuditFormReturn {
  isPending: boolean;
  handleUserInfoSubmit: (data: UserProjectInfo) => void;
  handleQuestionSubmit: (data: Record<string, any>) => void;
  handleFinalSubmit: () => Promise<{ success: boolean; auditId?: string }>;
  handleStartAgain: () => void;
}

export function useAuditForm(): UseAuditFormReturn {
  const [isPending, startTransition] = useTransition();

  const {
    userProjectInfo,
    responses,
    setUserProjectInfo,
    setQuestionGroups,
    setResponse,
    nextStep,
    setIsLoading,
    setIsSubmitting,
    reset,
  } = useAuditStore();

  // Handle user info submission
  const handleUserInfoSubmit = (data: UserProjectInfo) => {
    console.log("Submitting user info:", data);
    startTransition(async () => {
      setIsLoading(true);

      try {
        const result = await submitUserInfo(data);
        console.log("Server response:", result);

        if (result.success && result.questionGroups) {
          console.log(
            "Setting question groups:",
            result.questionGroups.length,
            "groups"
          );
          setUserProjectInfo(data);
          setQuestionGroups(result.questionGroups);

          // Small delay to ensure state is updated
          setTimeout(() => {
            nextStep();
            toast.success(
              "Information saved! Let's continue with the audit questions."
            );
          }, 100);
        } else {
          toast.error(result.error || "Failed to load audit questions");
        }
      } catch (error) {
        console.error("Error submitting user info:", error);
        toast.error("An error occurred. Please try again.");
      } finally {
        setIsLoading(false);
      }
    });
  };

  // Handle question step submission
  const handleQuestionSubmit = (data: Record<string, any>) => {
    // Save responses to store
    Object.entries(data).forEach(([key, value]) => {
      setResponse(key, value);
    });

    nextStep();
    toast.success("Progress saved!");
  };

  // Handle final audit submission
  const handleFinalSubmit = async (): Promise<{
    success: boolean;
    auditId?: string;
  }> => {
    if (!userProjectInfo) {
      toast.error("User information is missing");
      return { success: false };
    }

    return new Promise((resolve) => {
      startTransition(async () => {
        setIsSubmitting(true);

        try {
          const result = await submitAuditResponses({
            userProjectInfo,
            responses,
          });

          if (result.success) {
            toast.success(result.message || "Audit submitted successfully!");
            resolve({ success: true, auditId: result.auditId });
          } else {
            toast.error(result.error || "Failed to submit audit");
            resolve({ success: false });
          }
        } catch (error) {
          console.error("Error submitting audit:", error);
          toast.error("An error occurred. Please try again.");
          resolve({ success: false });
        } finally {
          setIsSubmitting(false);
        }
      });
    });
  };

  // Handle starting a new audit
  const handleStartAgain = () => {
    reset();
  };

  return {
    isPending,
    handleUserInfoSubmit,
    handleQuestionSubmit,
    handleFinalSubmit,
    handleStartAgain,
  };
}
