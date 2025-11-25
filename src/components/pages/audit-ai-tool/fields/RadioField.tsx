"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { memo, useState } from "react";
import type { ControllerRenderProps } from "react-hook-form";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioFieldProps {
  field: ControllerRenderProps<any, any>;
  label: string;
  options: RadioOption[];
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  allowOther?: boolean;
}

function RadioFieldComponent({
  field,
  label,
  options,
  required,
  disabled,
  error,
  helperText,
  allowOther = false,
}: RadioFieldProps) {
  const [otherValue, setOtherValue] = useState("");
  const isOtherSelected =
    field.value === "other" || field.value?.startsWith("other:");

  const handleOtherInputChange = (value: string) => {
    setOtherValue(value);
    if (value.trim()) {
      field.onChange(`other:${value}`);
    } else {
      field.onChange("other");
    }
  };

  return (
    <div className="space-y-4">
      <Label className="text-base font-semibold text-slate-800">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <RadioGroup
        value={isOtherSelected ? "other" : field.value}
        onValueChange={(value) => {
          if (value === "other") {
            field.onChange("other");
            setOtherValue("");
          } else {
            field.onChange(value);
          }
        }}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${field.name}-error`
            : helperText
              ? `${field.name}-helper`
              : undefined
        }
        className="space-y-3"
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={cn(
              "flex items-center space-x-4 p-5 rounded-xl border-2 cursor-pointer group",
              "transition-all duration-200",
              "hover:border-purple-500 hover:shadow-md",
              "focus-within:ring-4 focus-within:ring-purple-500/20",
              field.value === option.value
                ? "border-[#0e0637] bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg"
                : "border-slate-200 bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
            )}
          >
            <RadioGroupItem
              value={option.value}
              id={`${field.name}-${option.value}`}
              className="w-5 h-5 border-2"
            />
            <Label
              htmlFor={`${field.name}-${option.value}`}
              className={cn(
                "flex-1 cursor-pointer text-base",
                field.value === option.value
                  ? "font-semibold text-[#0e0637]"
                  : "font-normal text-slate-700"
              )}
            >
              {option.label}
            </Label>
          </div>
        ))}

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
              <RadioGroupItem
                value="other"
                id={`${field.name}-other`}
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
      </RadioGroup>
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

export const RadioField = memo(RadioFieldComponent);
RadioField.displayName = "RadioField";
