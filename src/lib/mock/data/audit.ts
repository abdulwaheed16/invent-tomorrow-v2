import type { QuestionGroup } from "@/lib/types/audit.types";

export const mockQuestionGroups: QuestionGroup[] = [
  {
    id: "group-1",
    title: "AI Model & Technology",
    description:
      "Tell us about the AI technology and models used in your project",
    questions: [
      {
        id: "ai-model-type",
        label: "What type of AI model are you using?",
        type: "select",
        required: true,
        options: [
          { label: "Large Language Model (LLM)", value: "llm" },
          { label: "Computer Vision", value: "computer-vision" },
          { label: "Natural Language Processing (NLP)", value: "nlp" },
          { label: "Recommendation System", value: "recommendation" },
          { label: "Predictive Analytics", value: "predictive" },
          { label: "Other", value: "other" },
        ],
        description: "Select the primary AI technology category",
      },
      {
        id: "model-provider",
        label: "Which AI model provider are you using?",
        type: "checkbox",
        required: false,
        options: [
          { label: "OpenAI (GPT-4, GPT-3.5)", value: "openai" },
          { label: "Anthropic (Claude)", value: "anthropic" },
          { label: "Google (Gemini, PaLM)", value: "google" },
          { label: "Meta (Llama)", value: "meta" },
          { label: "Custom/Self-hosted", value: "custom" },
          { label: "Other", value: "other" },
        ],
        description: "Select all that apply",
      },
      {
        id: "model-details",
        label: "Provide details about your AI model implementation",
        type: "textarea",
        required: true,
        placeholder:
          "Describe the specific models, versions, and how they are integrated...",
        validation: {
          min: 50,
          max: 1000,
          message: "Please provide between 50 and 1000 characters",
        },
      },
    ],
  },
  {
    id: "group-2",
    title: "Data & Privacy",
    description: "Information about data handling and privacy measures",
    questions: [
      {
        id: "data-collection",
        label: "What types of data does your AI tool collect?",
        type: "checkbox",
        required: true,
        options: [
          {
            label: "Personal Information (Name, Email, etc.)",
            value: "personal",
          },
          { label: "User-generated Content", value: "user-content" },
          { label: "Behavioral Data", value: "behavioral" },
          { label: "Biometric Data", value: "biometric" },
          { label: "Location Data", value: "location" },
          { label: "No data collection", value: "none" },
        ],
      },
      {
        id: "data-storage",
        label: "Where is user data stored?",
        type: "radio",
        required: true,
        options: [
          { label: "Cloud (AWS, Azure, GCP)", value: "cloud" },
          { label: "On-premise servers", value: "on-premise" },
          { label: "Hybrid (Cloud + On-premise)", value: "hybrid" },
          { label: "Third-party services", value: "third-party" },
          { label: "No data storage", value: "none" },
        ],
      },
      {
        id: "data-encryption",
        label: "Is data encrypted at rest and in transit?",
        type: "radio",
        required: true,
        options: [
          { label: "Yes, both at rest and in transit", value: "both" },
          { label: "Only in transit", value: "transit" },
          { label: "Only at rest", value: "rest" },
          { label: "No encryption", value: "none" },
        ],
      },
      {
        id: "privacy-policy",
        label: "Describe your privacy policy and data retention practices",
        type: "textarea",
        required: true,
        placeholder:
          "Explain how long data is retained, user rights, and privacy measures...",
        validation: {
          min: 30,
          max: 800,
        },
      },
    ],
  },
  {
    id: "group-3",
    title: "Ethics & Bias",
    description: "Ethical considerations and bias mitigation strategies",
    questions: [
      {
        id: "bias-testing",
        label: "Have you tested your AI model for bias?",
        type: "radio",
        required: true,
        options: [
          {
            label: "Yes, comprehensive testing conducted",
            value: "comprehensive",
          },
          { label: "Yes, basic testing conducted", value: "basic" },
          { label: "Testing in progress", value: "in-progress" },
          { label: "No testing conducted", value: "no" },
        ],
      },
      {
        id: "bias-mitigation",
        label: "What bias mitigation strategies are you using?",
        type: "checkbox",
        required: false,
        options: [
          { label: "Diverse training data", value: "diverse-data" },
          { label: "Regular model audits", value: "audits" },
          { label: "Fairness constraints", value: "fairness" },
          { label: "Human oversight", value: "human-oversight" },
          { label: "Continuous monitoring", value: "monitoring" },
          { label: "None implemented", value: "none" },
        ],
      },
      {
        id: "ethical-guidelines",
        label: "Describe the ethical guidelines your team follows",
        type: "textarea",
        required: true,
        placeholder:
          "Explain your ethical framework, review processes, and accountability measures...",
        validation: {
          min: 40,
          max: 800,
        },
      },
    ],
  },
  {
    id: "group-4",
    title: "Security & Compliance",
    description: "Security measures and regulatory compliance",
    questions: [
      {
        id: "security-measures",
        label: "What security measures are implemented?",
        type: "checkbox",
        required: true,
        options: [
          { label: "Authentication & Authorization", value: "auth" },
          { label: "API Rate Limiting", value: "rate-limiting" },
          { label: "Input Validation & Sanitization", value: "validation" },
          { label: "Regular Security Audits", value: "audits" },
          { label: "Penetration Testing", value: "pen-testing" },
          { label: "DDoS Protection", value: "ddos" },
        ],
      },
      {
        id: "compliance",
        label: "Which compliance standards do you follow?",
        type: "checkbox",
        required: false,
        options: [
          { label: "GDPR (EU)", value: "gdpr" },
          { label: "CCPA (California)", value: "ccpa" },
          { label: "HIPAA (Healthcare)", value: "hipaa" },
          { label: "SOC 2", value: "soc2" },
          { label: "ISO 27001", value: "iso27001" },
          { label: "None", value: "none" },
        ],
      },
      {
        id: "incident-response",
        label: "Describe your incident response plan",
        type: "textarea",
        required: true,
        placeholder:
          "Explain how you handle security incidents, data breaches, and user notifications...",
        validation: {
          min: 30,
          max: 700,
        },
      },
    ],
  },
  {
    id: "group-5",
    title: "Transparency & Documentation",
    description: "How you communicate AI capabilities and limitations",
    questions: [
      {
        id: "user-disclosure",
        label: "Do you disclose to users that they are interacting with AI?",
        type: "radio",
        required: true,
        options: [
          { label: "Yes, prominently displayed", value: "prominent" },
          { label: "Yes, mentioned in documentation", value: "documentation" },
          { label: "Partially disclosed", value: "partial" },
          { label: "No disclosure", value: "no" },
        ],
      },
      {
        id: "limitations-communicated",
        label: "How do you communicate AI limitations to users?",
        type: "checkbox",
        required: true,
        options: [
          { label: "In-app warnings/disclaimers", value: "in-app" },
          { label: "Documentation/Help center", value: "docs" },
          { label: "Terms of Service", value: "tos" },
          { label: "User onboarding", value: "onboarding" },
          { label: "Not communicated", value: "none" },
        ],
      },
      {
        id: "documentation-quality",
        label: "Describe your documentation and transparency practices",
        type: "textarea",
        required: true,
        placeholder:
          "Explain how you document AI behavior, limitations, and provide user support...",
        validation: {
          min: 40,
          max: 700,
        },
      },
    ],
  },
];
