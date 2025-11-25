"use server";

import type {
  SubmitAuditRequest,
  SubmitAuditResponse,
  SubmitUserInfoRequest,
  SubmitUserInfoResponse,
} from "@/lib/types/audit.types";
import { mockQuestionGroups } from "../mock/data/audit";

export async function submitUserInfo(
  data: SubmitUserInfoRequest
): Promise<SubmitUserInfoResponse> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Submitting user info:", data);
    // TODO: Replace with actual webhook call

    // const auditWebhookUrl = process.env.AUDIT_WEBHOOK_URL!;
    // if (!auditWebhookUrl) {
    //   throw new Error("AUDIT_WEBHOOK_URL is not defined");
    // }
    // const response = await fetch(auditWebhookUrl, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    // const result = await response.json();

    // console.log("Server response:", result);

    //
    return {
      success: true,
      questionGroups: mockQuestionGroups,
    };
  } catch (error) {
    console.error("Error submitting user info:", error);
    return {
      success: false,
      questionGroups: [],
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch audit questions",
    };
  }
}

export async function submitAuditResponses(
  data: SubmitAuditRequest
): Promise<SubmitAuditResponse> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Format the audit data for logging/webhook
    const auditSubmission = {
      timestamp: new Date().toISOString(),
      userInfo: {
        name: data.userProjectInfo.userName,
        email: data.userProjectInfo.userEmail,
      },
      projectInfo: {
        name: data.userProjectInfo.projectName,
        description: data.userProjectInfo.projectDescription,
        type: data.userProjectInfo.projectType,
      },
      responses: data.responses,
      totalQuestions: Object.keys(data.responses).length,
      metadata: {
        submittedAt: new Date().toISOString(),
        userAgent:
          typeof window !== "undefined" ? window.navigator.userAgent : "server",
      },
    };

    // Comprehensive logging for webhook preparation
    console.log("\n" + "=".repeat(80));
    console.log("📋 AUDIT SUBMISSION - READY FOR WEBHOOK");
    console.log("=".repeat(80));

    console.log("\n👤 USER INFORMATION:");
    console.log(JSON.stringify(auditSubmission.userInfo, null, 2));

    console.log("\n🚀 PROJECT INFORMATION:");
    console.log(JSON.stringify(auditSubmission.projectInfo, null, 2));

    console.log("\n📝 AUDIT RESPONSES:");
    console.log(`Total Questions Answered: ${auditSubmission.totalQuestions}`);
    console.log("\nDetailed Responses:");
    Object.entries(data.responses).forEach(([questionId, answer]) => {
      console.log(`  ${questionId}:`, answer);
    });

    console.log("\n📦 COMPLETE PAYLOAD (Ready for Webhook):");
    console.log(JSON.stringify(auditSubmission, null, 2));

    console.log("\n🔗 WEBHOOK INTEGRATION:");
    console.log(
      "To send this data to your webhook, uncomment the fetch call below:"
    );
    console.log(
      `POST ${process.env.AUDIT_SUBMIT_WEBHOOK_URL || "YOUR_WEBHOOK_URL"}`
    );
    console.log('Headers: { "Content-Type": "application/json" }');
    console.log("Body: auditSubmission (shown above)");

    console.log("\n" + "=".repeat(80) + "\n");

    // TODO: Replace with actual webhook call
    // const response = await fetch(process.env.AUDIT_SUBMIT_WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.WEBHOOK_API_KEY}` // if needed
    //   },
    //   body: JSON.stringify(auditSubmission),
    // });
    // const result = await response.json();
    // return result;

    // For now, simulate success
    return {
      success: true,
      auditId: `audit-${Date.now()}`,
      message:
        "Your audit has been submitted successfully! We will review it and get back to you soon.",
    };
  } catch (error) {
    console.error("❌ Error submitting audit:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit audit",
    };
  }
}
