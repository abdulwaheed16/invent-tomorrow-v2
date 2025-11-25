/**
 * Enhanced Select Field Component
 * Optimized with better UI/UX and accessibility
 */

"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { memo } from "react";
import type { ControllerRenderProps } from "react-hook-form";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldProps {
  field: ControllerRenderProps<any, any>;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
}

function SelectFieldComponent({
  field,
  label,
  options,
  placeholder = "Select an option",
  required,
  disabled,
  error,
  helperText,
}: SelectFieldProps) {
  return (
    <div className="space-y-3">
      <Label
        htmlFor={field.name}
        className="text-base font-semibold text-slate-800"
      >
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Select
        value={field.value}
        onValueChange={field.onChange}
        disabled={disabled}
      >
        <SelectTrigger
          id={field.name}
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
            error && "border-destructive focus:ring-destructive/20"
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="focus:bg-purple-600/10 text-base py-3"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
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

export const SelectField = memo(SelectFieldComponent);
SelectField.displayName = "SelectField";
