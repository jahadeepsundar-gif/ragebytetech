import { Resend } from "resend";
import { ContactFormData } from "./validation";

const resendApiKey = process.env.RESEND_API_KEY;
const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "hello@ragebyte.tech";
const senderEmail = process.env.CONTACT_SENDER_EMAIL || "RageByte Enquiries <onboarding@resend.dev>";

export const isEmailServiceConfigured = Boolean(
  resendApiKey && resendApiKey.trim() !== "" && !resendApiKey.includes("placeholder")
);

const resendClient = isEmailServiceConfigured ? new Resend(resendApiKey) : null;

export async function sendContactEmail(data: ContactFormData): Promise<{
  success: boolean;
  messageId?: string;
  isConfigured: boolean;
  error?: string;
}> {
  if (!isEmailServiceConfigured || !resendClient) {
    console.warn(
      "[RageByte Email Service] RESEND_API_KEY is not configured in environment variables. Enquiry received but email dispatch is paused."
    );
    return {
      success: false,
      isConfigured: false,
      error: "Email delivery service is pending configuration. Please set RESEND_API_KEY.",
    };
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #111; background-color: #f9f9fb; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; padding: 32px; }
          .header { border-bottom: 2px solid #F42C1D; padding-bottom: 16px; margin-bottom: 24px; }
          .badge { display: inline-block; background: #070709; color: #F42C1D; font-size: 12px; font-weight: bold; padding: 4px 8px; border-radius: 4px; }
          .field { margin-bottom: 16px; }
          .field-label { font-size: 12px; text-transform: uppercase; color: #6b7280; font-weight: 600; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #111827; }
          .details-box { background: #f3f4f6; border-radius: 6px; padding: 16px; white-space: pre-wrap; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">RAGEBYTE NEW ENQUIRY</span>
            <h2 style="margin: 8px 0 0 0; color: #090a0f;">New Project Enquiry from ${escapeHtml(data.name)}</h2>
          </div>
          
          <div class="field">
            <div class="field-label">Client Name</div>
            <div class="field-value">${escapeHtml(data.name)}</div>
          </div>

          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
          </div>

          ${data.company ? `
          <div class="field">
            <div class="field-label">Company / Organization</div>
            <div class="field-value">${escapeHtml(data.company)}</div>
          </div>
          ` : ""}

          ${data.phone ? `
          <div class="field">
            <div class="field-label">Phone / WhatsApp</div>
            <div class="field-value">${escapeHtml(data.phone)}</div>
          </div>
          ` : ""}

          <div class="field">
            <div class="field-label">Requested Service</div>
            <div class="field-value"><strong>${escapeHtml(data.serviceType)}</strong></div>
          </div>

          <div class="field">
            <div class="field-label">Budget Range</div>
            <div class="field-value">${escapeHtml(data.budget)}</div>
          </div>

          <div class="field">
            <div class="field-label">Desired Timeline</div>
            <div class="field-value">${escapeHtml(data.timeline)}</div>
          </div>

          ${data.referenceSite ? `
          <div class="field">
            <div class="field-label">Reference Site</div>
            <div class="field-value"><a href="${escapeHtml(data.referenceSite)}" target="_blank">${escapeHtml(data.referenceSite)}</a></div>
          </div>
          ` : ""}

          <div class="field">
            <div class="field-label">Project Details</div>
            <div class="details-box">${escapeHtml(data.projectDetails)}</div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const result = await resendClient.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: data.email,
      subject: `[RageByte Enquiry] ${data.serviceType} - ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: htmlContent,
    });

    if (result.error) {
      return {
        success: false,
        isConfigured: true,
        error: result.error.message,
      };
    }

    return {
      success: true,
      isConfigured: true,
      messageId: result.data?.id,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unexpected email delivery failure";
    return {
      success: false,
      isConfigured: true,
      error: errorMsg,
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
