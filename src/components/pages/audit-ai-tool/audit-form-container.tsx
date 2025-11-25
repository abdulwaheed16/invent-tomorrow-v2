/**
 * Main audit form container
 * Orchestrates the multi-step form flow
 * Optimized with custom hooks and memoization
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

import { useAuditForm } from "@/hooks/useAuditForm";
import { useFormNavigation } from "@/hooks/useFormNavigation";
import { useAuditStore } from "@/store";
import { AuditReview } from "./audit-review";
import { AuditSuccess } from "./audit-success";
import { FormNavigation } from "./form-navigation";
import { ProgressIndicator } from "./progress-indicator";
import { QuestionStep, type QuestionStepRef } from "./question-step";
import { UserInfoForm, UserInfoFormRef } from "./user-info-form";

function AuditFormContainerComponent() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [submittedAuditId, setSubmittedAuditId] = useState("");

  const userFormRef = useRef<UserInfoFormRef>(null);
  const questionFormRef = useRef<QuestionStepRef>(null);

  // Get store state
  const {
    questionGroups,
    totalSteps,
    isLoading,
    isSubmitting,
    userProjectInfo,
    responses,
    setCurrentStep,
  } = useAuditStore();

  // Custom hooks for business logic
  const {
    isPending,
    handleUserInfoSubmit,
    handleQuestionSubmit,
    handleFinalSubmit,
    handleStartAgain: resetForm,
  } = useAuditForm();

  const {
    currentStep,
    stepLabels,
    currentQuestionGroup,
    handleNext,
    handlePrevious,
    getDefaultValues,
  } = useFormNavigation({
    userFormRef,
    questionFormRef,
  });

  // Clear stale localStorage data on mount
  useEffect(() => {
    if (questionGroups.length === 0 && totalSteps > 1) {
      console.log("Clearing stale localStorage data...");
      resetForm();
    }
  }, []);

  // Debug logging
  useEffect(() => {
    console.log("Audit Form State:", {
      currentStep,
      totalSteps,
      questionGroupsCount: questionGroups.length,
    });
  }, [currentStep, totalSteps, questionGroups.length]);

  // Show review modal before final submission
  const handleShowReview = () => {
    // Log all responses to console
    console.log("\n" + "=".repeat(80));
    console.log("📋 FINAL AUDIT REVIEW - USER RESPONSES");
    console.log("=".repeat(80));

    console.log("\n👤 USER INFORMATION:");
    console.log(JSON.stringify(userProjectInfo, null, 2));

    console.log("\n📝 AUDIT RESPONSES:");
    console.log(`Total Questions Answered: ${Object.keys(responses).length}`);
    console.log("\nDetailed Responses:");
    Object.entries(responses).forEach(([questionId, answer]) => {
      console.log(`  ${questionId}:`, answer);
    });

    console.log("\n📦 COMPLETE AUDIT DATA:");
    console.log(
      JSON.stringify(
        {
          userInfo: userProjectInfo,
          responses,
          totalQuestions: Object.keys(responses).length,
          timestamp: new Date().toISOString(),
        },
        null,
        2
      )
    );

    console.log("\n" + "=".repeat(80) + "\n");

    setShowReview(true);
  };

  // Handle final submission with success state
  const handleSubmit = async () => {
    setShowReview(false);
    const result = await handleFinalSubmit();
    if (result.success) {
      setSubmittedAuditId(result.auditId || "");
      setShowSuccess(true);
    }
  };

  // Handle starting a new audit
  const handleStartAgain = () => {
    setShowSuccess(false);
    setSubmittedAuditId("");
    resetForm();
  };

  // Handle edit from review
  const handleEditStep = (step: number) => {
    setShowReview(false);
    setCurrentStep(step);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {showSuccess ? (
        <AuditSuccess
          auditId={submittedAuditId}
          onStartAgain={handleStartAgain}
        />
      ) : (
        <>
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
            stepLabels={stepLabels}
          />

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white border-2 border-purple-200 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {currentStep === 0 ? (
                  <UserInfoForm
                    ref={userFormRef}
                    defaultValues={getDefaultValues()}
                    onSubmit={handleUserInfoSubmit}
                    isLoading={isLoading || isPending}
                  />
                ) : currentQuestionGroup ? (
                  <QuestionStep
                    ref={questionFormRef}
                    questionGroup={currentQuestionGroup}
                    defaultValues={getDefaultValues()}
                    onSubmit={handleQuestionSubmit}
                    isLoading={isLoading || isPending}
                  />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          <FormNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleShowReview}
            isLoading={isLoading || isPending}
            isSubmitting={isSubmitting}
            canGoNext={true}
          />
        </>
      )}

      {/* Review Modal */}
      {showReview && userProjectInfo && (
        <AuditReview
          userInfo={userProjectInfo}
          questionGroups={questionGroups}
          responses={responses}
          onConfirm={handleSubmit}
          onEdit={handleEditStep}
          onClose={() => setShowReview(false)}
        />
      )}
    </div>
  );
}

// Export memoized component for better performance
export const AuditFormContainer = memo(AuditFormContainerComponent);
AuditFormContainer.displayName = "AuditFormContainer";
