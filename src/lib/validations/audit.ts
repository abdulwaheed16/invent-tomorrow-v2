import { z } from "zod";

// User and project information schema (Step 1)
export const userProjectInfoSchema = z.object({
  userName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  userEmail: z.string().email("Please enter a valid email address"),
  projectName: z
    .string()
    .min(3, "Project name must be at least 3 characters")
    .max(200, "Project name must be less than 200 characters"),
  projectDescription: z
    .string()
    .min(10, "Please provide a description of at least 10 characters")
    .max(1000, "Description must be less than 1000 characters"),
  projectType: z.string().optional(),
});

export type UserProjectInfoFormData = z.infer<typeof userProjectInfoSchema>;

// Dynamic question validation
export const createQuestionSchema = (
  type: string,
  required: boolean = false,
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  }
) => {
  switch (type) {
    case "text":
    case "textarea":
      let schema = z.string();
      if (validation?.min) {
        schema = schema.min(
          validation.min,
          validation.message || `Minimum ${validation.min} characters required`
        );
      }
      if (validation?.max) {
        schema = schema.max(
          validation.max,
          validation.message || `Maximum ${validation.max} characters allowed`
        );
      }
      if (validation?.pattern) {
        schema = schema.regex(
          new RegExp(validation.pattern),
          validation.message || "Invalid format"
        );
      }
      return required ? schema : schema.optional();

    case "email":
      return required
        ? z.string().email("Please enter a valid email")
        : z.string().email().optional();

    case "number":
      let numSchema = z.coerce.number();
      if (validation?.min !== undefined) {
        numSchema = numSchema.min(
          validation.min,
          validation.message || `Minimum value is ${validation.min}`
        );
      }
      if (validation?.max !== undefined) {
        numSchema = numSchema.max(
          validation.max,
          validation.message || `Maximum value is ${validation.max}`
        );
      }
      return required ? numSchema : numSchema.optional();

    case "radio":
    case "select":
      return required
        ? z.string().min(1, "Please select an option")
        : z.string().optional();

    case "checkbox":
      return z.union([z.string(), z.array(z.string())]).optional();

    default:
      return z.string().optional();
  }
};

// Helper to create dynamic form schema from question groups
export const createDynamicFormSchema = (
  questions: Array<{
    id: string;
    type: string;
    required?: boolean;
    validation?: {
      min?: number;
      max?: number;
      pattern?: string;
      message?: string;
    };
  }>
) => {
  const schemaShape: Record<string, z.ZodTypeAny> = {};

  questions.forEach((question) => {
    schemaShape[question.id] = createQuestionSchema(
      question.type,
      question.required,
      question.validation
    );
  });

  return z.object(schemaShape);
};
