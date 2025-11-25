/**
 * Enhanced Textarea Field Component
 * Optimized with better UI/UX and accessibility
 */

"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { memo } from "react";
import type { ControllerRenderProps } from "react-hook-form";

interface TextareaFieldProps {
  field: ControllerRenderProps<any, any>;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  maxLength?: number;
}

function TextareaFieldComponent({
  field,
  label,
  placeholder,
  rows = 4,
  required,
  disabled,
  error,
  helperText,
  maxLength,
}: TextareaFieldProps) {
  const currentLength = field.value?.length || 0;
  const showCounter = maxLength && maxLength > 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label
          htmlFor={field.name}
          className="text-base font-semibold text-slate-800"
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
        {showCounter && (
          <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
      <Textarea
        {...field}
        id={field.name}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${field.name}-error`
            : helperText
              ? `${field.name}-helper`
              : undefined
        }
        className={cn(
          "text-base transition-all duration-200 resize-none",
          "bg-white border-2 border-slate-200 p-4",
          "focus:ring-4 focus:ring-purple-500/20 focus:border-purple-600",
          "hover:border-purple-400/60 hover:shadow-sm",
          "placeholder:text-slate-400",
          error && "border-destructive focus:ring-destructive/20"
        )}
      />
      {helperText && !error && (
        <p
          id={`${field.name}-helper`}
          className="text-xs text-muted-foreground"
        >
          {helperText}
        </p>
      )}
      {error && (
        <p id={`${field.name}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export const TextareaField = memo(TextareaFieldComponent);
TextareaField.displayName = "TextareaField";
