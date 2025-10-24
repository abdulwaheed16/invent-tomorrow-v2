// data/technologies.ts

import { images } from "@/utils/assets";
import { TechStackItem } from "../../../types/services";

// Create dummy logos for technologies
const techLogos: { [key: string]: any } = {
  // Frontend
  react: images.placeholderImage,
  nextjs: images.placeholderImage,
  vue: images.placeholderImage,
  angular: images.placeholderImage,
  typescript: images.placeholderImage,
  javascript: images.placeholderImage,
  html: images.placeholderImage,
  css: images.placeholderImage,
  tailwind: images.placeholderImage,
  bootstrap: images.placeholderImage,

  // Backend
  nodejs: images.placeholderImage,
  express: images.placeholderImage,
  python: images.placeholderImage,
  django: images.placeholderImage,
  fastapi: images.placeholderImage,
  java: images.placeholderImage,
  php: images.placeholderImage,
  ruby: images.placeholderImage,
  go: images.placeholderImage,

  // Database
  mongodb: images.placeholderImage,
  postgresql: images.placeholderImage,
  mysql: images.placeholderImage,
  redis: images.placeholderImage,
  firebase: images.placeholderImage,
  supabase: images.placeholderImage,

  // Cloud & DevOps
  aws: images.placeholderImage,
  azure: images.placeholderImage,
  gcp: images.placeholderImage,
  docker: images.placeholderImage,
  kubernetes: images.placeholderImage,
  vercel: images.placeholderImage,
  heroku: images.placeholderImage,

  // AI & ML
  openai: images.placeholderImage,
  tensorflow: images.placeholderImage,
  pytorch: images.placeholderImage,
  langchain: images.placeholderImage,
  huggingface: images.placeholderImage,

  // Mobile
  reactnative: images.placeholderImage,
  flutter: images.placeholderImage,
  swift: images.placeholderImage,
  kotlin: images.placeholderImage,

  // Other
  graphql: images.placeholderImage,
  restapi: images.placeholderImage,
  webrtc: images.placeholderImage,
  socketio: images.placeholderImage,
  stripe: images.placeholderImage,
  elasticsearch: images.placeholderImage,
  apachekafka: images.placeholderImage,
};

// Create tech stack items
export const createTechStackItem = (tech: string): TechStackItem => {
  const logoKey = tech
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\./g, "")
    .replace(/\+/g, "");
  return {
    title: tech,
    logo: techLogos[logoKey] || images.placeholderImage,
  };
};

// Predefined tech stacks for common categories
export const techStacks = {
  ai: [
    createTechStackItem("OpenAI GPT-4"),
    createTechStackItem("Python"),
    createTechStackItem("TensorFlow"),
    createTechStackItem("LangChain"),
    createTechStackItem("FastAPI"),
  ],
  web: [
    createTechStackItem("React"),
    createTechStackItem("Next.js"),
    createTechStackItem("TypeScript"),
    createTechStackItem("Node.js"),
    createTechStackItem("PostgreSQL"),
  ],
  mobile: [
    createTechStackItem("React Native"),
    createTechStackItem("TypeScript"),
    createTechStackItem("Node.js"),
    createTechStackItem("MongoDB"),
    createTechStackItem("Firebase"),
  ],
  ecommerce: [
    createTechStackItem("Next.js"),
    createTechStackItem("React"),
    createTechStackItem("TypeScript"),
    createTechStackItem("Node.js"),
    createTechStackItem("PostgreSQL"),
    createTechStackItem("Stripe"),
  ],
  enterprise: [
    createTechStackItem("React"),
    createTechStackItem("TypeScript"),
    createTechStackItem("Node.js"),
    createTechStackItem("Python"),
    createTechStackItem("Apache Kafka"),
    createTechStackItem("Docker"),
    createTechStackItem("Kubernetes"),
  ],
};
