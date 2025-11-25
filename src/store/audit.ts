import {
  AuditFormState,
  QuestionGroup,
  UserProjectInfo,
} from "@/lib/types/audit.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuditStore extends AuditFormState {
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  setUserProjectInfo: (info: UserProjectInfo) => void;
  setQuestionGroups: (groups: QuestionGroup[]) => void;
  setResponse: (questionId: string, value: string | string[] | boolean) => void;
  setResponses: (
    responses: Record<string, string | string[] | boolean>
  ) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState: AuditFormState = {
  currentStep: 0,
  totalSteps: 2,
  userProjectInfo: null,
  questionGroups: [],
  responses: {},
  isSubmitting: false,
  isLoading: false,
  error: null,
};

export const useAuditStore = create<AuditStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setCurrentStep: (step: number) => {
        const { totalSteps } = get();
        if (step >= 0 && step < totalSteps) {
          set({ currentStep: step });
        }
      },

      nextStep: () => {
        const { currentStep, totalSteps } = get();
        if (currentStep < totalSteps - 1) {
          set({ currentStep: currentStep + 1 });
        }
      },

      previousStep: () => {
        const { currentStep } = get();
        if (currentStep > 0) {
          set({ currentStep: currentStep - 1 });
        }
      },

      setUserProjectInfo: (info: UserProjectInfo) => {
        set({ userProjectInfo: info });
      },

      setQuestionGroups: (groups: QuestionGroup[]) => {
        // Total steps = 1 (user info) + number of question groups
        set({
          questionGroups: groups,
          totalSteps: 1 + groups.length,
        });
      },

      setResponse: (questionId: string, value: string | string[] | boolean) => {
        set((state) => ({
          responses: {
            ...state.responses,
            [questionId]: value,
          },
        }));
      },

      setResponses: (
        responses: Record<string, string | string[] | boolean>
      ) => {
        set({ responses });
      },

      setIsSubmitting: (isSubmitting: boolean) => {
        set({ isSubmitting });
      },

      setIsLoading: (isLoading: boolean) => {
        set({ isLoading });
      },

      setError: (error: string | null) => {
        set({ error });
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "audit-form-storage",
      storage: createJSONStorage(() => localStorage),
      // Only persist certain fields
      partialize: (state) => ({
        currentStep: state.currentStep,
        userProjectInfo: state.userProjectInfo,
        questionGroups: state.questionGroups,
        responses: state.responses,
        totalSteps: state.totalSteps,
      }),
    }
  )
);
