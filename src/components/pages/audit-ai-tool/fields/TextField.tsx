"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { memo } from "react";
import type { ControllerRenderProps } from "react-hook-form";

interface TextFieldProps {
  field: ControllerRenderProps<any, any>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "number";
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
}

function TextFieldComponent({
  field,
  label,
  placeholder,
  type = "text",
  required,
  disabled,
  error,
  helperText,
}: TextFieldProps) {
  return (
    <div className="space-y-3">
      <Label
        htmlFor={field.name}
        className="text-base font-semibold text-slate-800"
      >
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
        {...field}
        id={field.name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${field.name}-error`
            : helperText
              ? `${field.name}-helper`
              : undefined
        }
        className={cn(
          "h-12 text-base transition-all duration-200",
          "bg-white border-2 border-slate-200",
          "focus:ring-4 focus:ring-purple-500/20 focus:border-purple-600",
          "hover:border-purple-400/60 hover:shadow-sm",
          "placeholder:text-slate-400",
          error && "border-destructive focus:ring-destructive/20"
        )}
      />
      {helperText && !error && (
        <p id={`${field.name}-helper`} className="text-sm text-slate-600">
          {helperText}
        </p>
      )}
      {error && (
        <p
          id={`${field.name}-error`}
          className="text-sm font-medium text-destructive flex items-center gap-1"
        >
          <span className="text-base">⚠</span> {error}
        </p>
      )}
    </div>
  );
}

export const TextField = memo(TextFieldComponent);
TextField.displayName = "TextField";
