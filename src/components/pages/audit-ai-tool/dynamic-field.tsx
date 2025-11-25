/**
 * Dynamic form field component
 * Renders different field types based on question configuration
 */

"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { AuditQuestion } from "@/lib/types/audit.types";
import { useFormContext } from "react-hook-form";

interface DynamicFieldProps {
  question: AuditQuestion;
  disabled?: boolean;
}

export function DynamicField({ question, disabled }: DynamicFieldProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={question.id}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className="text-base">
            {question.label}
            {question.required && (
              <span className="text-destructive ml-1">*</span>
            )}
          </FormLabel>

          {question.description && (
            <FormDescription>{question.description}</FormDescription>
          )}

          <FormControl>{renderField(question, field, disabled)}</FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function renderField(question: AuditQuestion, field: any, disabled?: boolean) {
  switch (question.type) {
    case "text":
    case "email":
      return (
        <Input
          type={question.type}
          placeholder={question.placeholder}
          {...field}
          disabled={disabled}
          className="transition-all duration-200 focus:ring-2 focus:ring-blue-600/20"
        />
      );

    case "number":
      return (
        <Input
          type="number"
          placeholder={question.placeholder}
          {...field}
          onChange={(e) => field.onChange(e.target.valueAsNumber)}
          disabled={disabled}
          className="transition-all duration-200 focus:ring-2 focus:ring-blue-600/20"
        />
      );

    case "textarea":
      return (
        <Textarea
          placeholder={question.placeholder}
          rows={4}
          {...field}
          disabled={disabled}
          className="transition-all duration-200 focus:ring-2 focus:ring-blue-600/20 resize-none"
        />
      );

    case "radio":
      return (
        <RadioGroup
          onValueChange={field.onChange}
          value={field.value}
          disabled={disabled}
          className="space-y-3"
        >
          {question.options?.map((option) => (
            <div
              key={option.value}
              className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-purple-600/50 hover:bg-purple-600/5 transition-all duration-200"
            >
              <RadioGroupItem
                value={option.value}
                id={`${question.id}-${option.value}`}
                disabled={disabled}
              />
              <Label
                htmlFor={`${question.id}-${option.value}`}
                className="flex-1 cursor-pointer font-normal"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      );

    case "checkbox":
      return (
        <div className="space-y-3">
          {question.options?.map((option) => (
            <div
              key={option.value}
              className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-purple-600/50 hover:bg-purple-600/5 transition-all duration-200"
            >
              <Checkbox
                id={`${question.id}-${option.value}`}
                checked={
                  Array.isArray(field.value)
                    ? field.value.includes(option.value)
                    : field.value === option.value
                }
                disabled={disabled}
                onCheckedChange={(checked) => {
                  const currentValue = Array.isArray(field.value)
                    ? field.value
                    : [];
                  if (checked) {
                    field.onChange([...currentValue, option.value]);
                  } else {
                    field.onChange(
                      currentValue.filter((val: string) => val !== option.value)
                    );
                  }
                }}
              />
              <Label
                htmlFor={`${question.id}-${option.value}`}
                className="flex-1 cursor-pointer font-normal"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      );

    case "select":
      return (
        <Select
          onValueChange={field.onChange}
          value={field.value}
          disabled={disabled}
        >
          <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-600/20">
            <SelectValue
              placeholder={question.placeholder || "Select an option"}
            />
          </SelectTrigger>
          <SelectContent>
            {question.options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );

    default:
      return (
        <Input
          placeholder={question.placeholder}
          {...field}
          disabled={disabled}
          className="transition-all duration-200 focus:ring-2 focus:ring-blue-600/20"
        />
      );
  }
}
