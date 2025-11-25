import AuditAIToolClient from "@/components/pages/audit-ai-tool";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tool Audit | Invent Tomorrow",
  description:
    "Comprehensive audit for your AI tools and projects. Ensure compliance with security, ethics, and industry standards.",
  keywords: [
    "AI audit",
    "AI compliance",
    "AI ethics",
    "AI security",
    "AI tool assessment",
  ],
};

export default function AuditAIToolPage() {
  return <AuditAIToolClient />;
}
