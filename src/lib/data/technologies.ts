// data/technologies.ts

import { images } from "@/utils/assets";
import { TechStackItem } from "../../../types/services";

// disable-next-line @typescript-eslint/no-explicit-any
const placeholderImage: string = images.placeholderImage.src;
const techLogos: { [key: string]: string } = {
  // Frontend
  react: placeholderImage,
  nextjs: placeholderImage,
  vue: placeholderImage,
  angular: placeholderImage,
  typescript: placeholderImage,
  javascript: placeholderImage,
  html: placeholderImage,
  css: placeholderImage,
  tailwind: placeholderImage,
  bootstrap: placeholderImage,

  // Backend
  nodejs: placeholderImage,
  express: placeholderImage,
  python: placeholderImage,
  django: placeholderImage,
  fastapi: placeholderImage,
  java: placeholderImage,
  php: placeholderImage,
  ruby: placeholderImage,
  go: placeholderImage,

  // Database
  mongodb: placeholderImage,
  postgresql: placeholderImage,
  mysql: placeholderImage,
  redis: placeholderImage,
  firebase: placeholderImage,
  supabase: placeholderImage,

  // Cloud & DevOps
  aws: placeholderImage,
  azure: placeholderImage,
  gcp: placeholderImage,
  docker: placeholderImage,
  kubernetes: placeholderImage,
  vercel: placeholderImage,
  heroku: placeholderImage,

  // AI & ML
  openai: placeholderImage,
  tensorflow: placeholderImage,
  pytorch: placeholderImage,
  langchain: placeholderImage,
  huggingface: placeholderImage,

  // Mobile
  reactnative: placeholderImage,
  flutter: placeholderImage,
  swift: placeholderImage,
  kotlin: placeholderImage,

  // Other
  graphql: placeholderImage,
  restapi: placeholderImage,
  webrtc: placeholderImage,
  socketio: placeholderImage,
  stripe: placeholderImage,
  elasticsearch: placeholderImage,
  apachekafka: placeholderImage,
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
    logo: techLogos[logoKey] || placeholderImage,
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
