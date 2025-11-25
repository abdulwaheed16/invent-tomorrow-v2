/**
 * Enhanced Checkbox Field Component with Other Option
 * Supports multi-select with custom "Other" input
 */

"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { memo, useState } from "react";
import type { ControllerRenderProps } from "react-hook-form";

interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxFieldProps {
  field: ControllerRenderProps<any, any>;
  label: string;
  options: CheckboxOption[];
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  allowOther?: boolean;
}

function CheckboxFieldComponent({
  field,
  label,
  options,
  required,
  disabled,
  error,
  helperText,
  allowOther = false,
}: CheckboxFieldProps) {
  const [otherValue, setOtherValue] = useState("");
  const selectedValues = Array.isArray(field.value) ? field.value : [];
  const isOtherSelected = selectedValues.some(
    (v: string) => v === "other" || v.startsWith("other:")
  );

  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      field.onChange([...selectedValues, optionValue]);
    } else {
      // If unchecking "other", also clear the other value
      if (optionValue === "other") {
        setOtherValue("");
      }
      field.onChange(
        selectedValues.filter(
          (v: string) => v !== optionValue && !v.startsWith("other:")
        )
      );
    }
  };

  const handleOtherInputChange = (value: string) => {
    setOtherValue(value);
    // Update the field value to include the custom text
    const withoutOther = selectedValues.filter(
      (v: string) => v !== "other" && !v.startsWith("other:")
    );
    if (value.trim()) {
      field.onChange([...withoutOther, `other:${value}`]);
    } else {
      field.onChange([...withoutOther, "other"]);
    }
  };

  return (
    <div className="space-y-4">
      <Label className="text-base font-semibold text-slate-800">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <div
        className="space-y-3"
        role="group"
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${field.name}-error`
            : helperText
              ? `${field.name}-helper`
              : undefined
        }
      >
        {options.map((option) => {
          const isChecked = selectedValues.includes(option.value);
          return (
            <div
              key={option.value}
              className={cn(
                "flex items-center space-x-4 p-5 rounded-xl border-2 cursor-pointer group",
                "transition-all duration-200",
                "hover:border-purple-500 hover:shadow-md",
                "focus-within:ring-4 focus-within:ring-purple-500/20",
                isChecked
                  ? "border-[#0e0637] bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg"
                  : "border-slate-200 bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
              )}
            >
              <Checkbox
                id={`${field.name}-${option.value}`}
                checked={isChecked}
                onCheckedChange={(checked) =>
                  handleChange(option.value, checked as boolean)
                }
                disabled={disabled}
                className="w-5 h-5 border-2"
              />
              <Label
                htmlFor={`${field.name}-${option.value}`}
                className={cn(
                  "flex-1 cursor-pointer text-base",
                  isChecked
                    ? "font-semibold text-[#0e0637]"
                    : "font-normal text-slate-700"
                )}
              >
                {option.label}
              </Label>
            </div>
          );
        })}

        {/* Other option with input field */}
        {allowOther && (
          <div className="space-y-3">
            <div
              className={cn(
                "flex items-center space-x-4 p-5 rounded-xl border-2 cursor-pointer group",
                "transition-all duration-200",
                "hover:border-purple-500 hover:shadow-md",
                "focus-within:ring-4 focus-within:ring-purple-500/20",
                isOtherSelected
                  ? "border-[#0e0637] bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg"
                  : "border-slate-200 bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
              )}
            >
              <Checkbox
                id={`${field.name}-other`}
                checked={isOtherSelected}
                onCheckedChange={(checked) =>
                  handleChange("other", checked as boolean)
                }
                disabled={disabled}
                className="w-5 h-5 border-2"
              />
              <Label
                htmlFor={`${field.name}-other`}
                className={cn(
                  "flex-1 cursor-pointer text-base",
                  isOtherSelected
                    ? "font-semibold text-[#0e0637]"
                    : "font-normal text-slate-700"
                )}
              >
                Other
              </Label>
            </div>

            {/* Show input field when Other is selected */}
            {isOtherSelected && (
              <Input
                placeholder="Please specify..."
                value={otherValue}
                onChange={(e) => handleOtherInputChange(e.target.value)}
                disabled={disabled}
                className="ml-9 h-12 text-base border-2 border-purple-300 focus:border-purple-600"
              />
            )}
          </div>
        )}
      </div>
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

export const CheckboxField = memo(CheckboxFieldComponent);
CheckboxField.displayName = "CheckboxField";
