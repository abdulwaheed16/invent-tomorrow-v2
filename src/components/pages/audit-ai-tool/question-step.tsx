"use client";

import { Form } from "@/components/ui/form";
import type { QuestionGroup } from "@/lib/types/audit.types";
import { createDynamicFormSchema } from "@/lib/validations/audit";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { DynamicField } from "./dynamic-field";

interface QuestionStepProps {
  questionGroup: QuestionGroup;
  defaultValues?: Record<string, any>;
  onSubmit: (data: Record<string, any>) => void;
  isLoading?: boolean;
}

export interface QuestionStepRef {
  submit: () => void;
}

export const QuestionStep = forwardRef<QuestionStepRef, QuestionStepProps>(
  ({ questionGroup, defaultValues = {}, onSubmit, isLoading }, ref) => {
    const schema = createDynamicFormSchema(questionGroup.questions);

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues,
    });

    const handleSubmit = (data: Record<string, any>) => {
      onSubmit(data);
    };

    // Expose submit method to parent
    useImperativeHandle(ref, () => ({
      submit: () => {
        form.handleSubmit(handleSubmit)();
      },
    }));

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Group header */}
            <div className="space-y-3 mb-8">
              <h2 className="text-2xl font-bold text-[#0e0637] border-b-2 border-purple-200 pb-3">
                {questionGroup.title}
              </h2>
              {questionGroup.description && (
                <p className="text-base text-slate-600">
                  {questionGroup.description}
                </p>
              )}
            </div>

            {/* Questions */}
            <div className="space-y-6">
              {questionGroup.questions.map((question, index) => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-7 bg-gradient-to-br from-white to-purple-50/30 border-2 border-purple-100 rounded-2xl hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                >
                  <DynamicField question={question} disabled={isLoading} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </form>
      </Form>
    );
  }
);

QuestionStep.displayName = "QuestionStep";
