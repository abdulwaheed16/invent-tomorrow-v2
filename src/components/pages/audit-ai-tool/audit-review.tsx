"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { QuestionGroup, UserProjectInfo } from "@/lib/types/audit.types";
import { motion } from "framer-motion";
import { CheckCircle2, Edit, X } from "lucide-react";
import { memo } from "react";

interface AuditReviewProps {
  userInfo: UserProjectInfo;
  questionGroups: QuestionGroup[];
  responses: Record<string, string | string[] | boolean>;
  onConfirm: () => void;
  onEdit: (step: number) => void;
  onClose: () => void;
}

function AuditReviewComponent({
  userInfo,
  questionGroups,
  responses,
  onConfirm,
  onEdit,
  onClose,
}: AuditReviewProps) {
  const formatValue = (value: string | string[] | boolean): string => {
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (Array.isArray(value)) return value.join(", ");
    return value;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0e0637] to-purple-900 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Review Your Audit</h2>
            <p className="text-purple-200 mt-1">
              Please review your responses before submitting
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <ScrollArea className="h-[calc(90vh-200px)] p-6">
          <div className="space-y-8">
            {/* User Information */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#0e0637] border-b-2 border-purple-200 pb-2 flex-1">
                  Your Information
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(0)}
                  className="gap-2 text-purple-600 hover:text-purple-700"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm font-semibold text-slate-600">Name</p>
                  <p className="text-base font-medium text-slate-900 mt-1">
                    {userInfo.userName}
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm font-semibold text-slate-600">Email</p>
                  <p className="text-base font-medium text-slate-900 mt-1">
                    {userInfo.userEmail}
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 md:col-span-2">
                  <p className="text-sm font-semibold text-slate-600">
                    Project Name
                  </p>
                  <p className="text-base font-medium text-slate-900 mt-1">
                    {userInfo.projectName}
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 md:col-span-2">
                  <p className="text-sm font-semibold text-slate-600">
                    Project Description
                  </p>
                  <p className="text-base text-slate-900 mt-1">
                    {userInfo.projectDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Question Groups */}
            {questionGroups.map((group, groupIndex) => {
              // Get questions for this group
              const groupQuestions = group.questions || [];

              return (
                <div key={group.id} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#0e0637] border-b-2 border-purple-200 pb-2 flex-1">
                      {group.title}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(groupIndex + 1)}
                      className="gap-2 text-purple-600 hover:text-purple-700"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {groupQuestions.map((question) => {
                      const answer = responses[question.id];
                      return (
                        <div
                          key={question.id}
                          className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                        >
                          <p className="text-sm font-semibold text-slate-600">
                            {question.label}
                          </p>
                          <p className="text-base text-slate-900 mt-2">
                            {answer ? (
                              formatValue(answer)
                            ) : (
                              <span className="text-slate-400 italic">
                                Not answered
                              </span>
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="border-t border-slate-200 p-6 bg-slate-50 flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="gap-2 border-2"
          >
            <X className="w-4 h-4" />
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white shadow-lg"
          >
            <CheckCircle2 className="w-5 h-5" />
            Confirm & Submit Audit
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export const AuditReview = memo(AuditReviewComponent);
AuditReview.displayName = "AuditReview";
