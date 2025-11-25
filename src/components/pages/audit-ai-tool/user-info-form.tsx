/**
 * User and project information form (Step 1)
 */

"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { UserProjectInfo } from "@/lib/types/audit.types";
import {
  userProjectInfoSchema,
  type UserProjectInfoFormData,
} from "@/lib/validations/audit";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";

interface UserInfoFormProps {
  defaultValues?: Partial<UserProjectInfo>;
  onSubmit: (data: UserProjectInfo) => void;
  isLoading?: boolean;
}

export interface UserInfoFormRef {
  submit: () => void;
}

export const UserInfoForm = forwardRef<UserInfoFormRef, UserInfoFormProps>(
  ({ defaultValues, onSubmit, isLoading }, ref) => {
    const form = useForm<UserProjectInfoFormData>({
      resolver: zodResolver(userProjectInfoSchema),
      defaultValues: {
        userName: defaultValues?.userName || "",
        userEmail: defaultValues?.userEmail || "",
        projectName: defaultValues?.projectName || "",
        projectDescription: defaultValues?.projectDescription || "",
        projectType: defaultValues?.projectType || "",
      },
    });

    const handleSubmit = (data: UserProjectInfoFormData) => {
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
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* User Information Section */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-[#0e0637] border-b-2 border-purple-200 pb-3">
                Your Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold text-slate-800">
                        Your Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          disabled={isLoading}
                          className="h-12 text-base border-2 border-slate-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-600 hover:border-purple-400/60"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="userEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold text-slate-800">
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          disabled={isLoading}
                          className="h-12 text-base border-2 border-slate-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-600 hover:border-purple-400/60"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Project Information Section */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-[#0e0637] border-b-2 border-purple-200 pb-3">
                Project Information
              </h3>

              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold text-slate-800">
                      Project/Tool Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="My AI Assistant"
                        {...field}
                        disabled={isLoading}
                        className="h-12 text-base border-2 focus:ring-4 focus:ring-purple-500/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold text-slate-800">
                      Project Description *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your AI tool or project, its purpose, target audience, and key features..."
                        rows={5}
                        {...field}
                        disabled={isLoading}
                        className="h-12 text-base border-2 focus:ring-4 focus:ring-purple-500/20 resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>
        </form>
      </Form>
    );
  }
);

UserInfoForm.displayName = "UserInfoForm";
