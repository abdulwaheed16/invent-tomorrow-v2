export type FieldType =
  | "text"
  | "textarea"
  | "radio"
  | "checkbox"
  | "select"
  | "number"
  | "email";

// Option for radio, checkbox, and select fields
export interface FieldOption {
  label: string;
  value: string;
}

// Dynamic form field definition
export interface AuditQuestion {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: FieldOption[];
  description?: string;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

// Group of questions for a single step
export interface QuestionGroup {
  id: string;
  title: string;
  description?: string;
  questions: AuditQuestion[];
}

// User and project information (Step 1)
export interface UserProjectInfo {
  userName: string;
  userEmail: string;
  projectName: string;
  projectDescription: string;
  projectType?: string;
}

// Response to a single question
export interface QuestionResponse {
  questionId: string;
  value: string | string[] | boolean;
}

// Complete audit form state
export interface AuditFormState {
  currentStep: number;
  totalSteps: number;
  userProjectInfo: UserProjectInfo | null;
  questionGroups: QuestionGroup[];
  responses: Record<string, string | string[] | boolean>;
  isSubmitting: boolean;
  isLoading: boolean;
  error: string | null;
}

// Webhook request/response types
export interface SubmitUserInfoRequest {
  userName: string;
  userEmail: string;
  projectName: string;
  projectDescription: string;
  projectType?: string;
}

export interface SubmitUserInfoResponse {
  success: boolean;
  questionGroups: QuestionGroup[];
  error?: string;
}

export interface SubmitAuditRequest {
  userProjectInfo: UserProjectInfo;
  responses: Record<string, string | string[] | boolean>;
}

export interface SubmitAuditResponse {
  success: boolean;
  auditId?: string;
  message?: string;
  error?: string;
}
