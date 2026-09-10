"use client";

import React, { useState } from "react";
import {
  contactFormSchema,
  serviceTypes,
  budgetRanges,
  timelineOptions,
  ContactFormData,
} from "@/lib/validation";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  RefreshCw,
  Info,
  Clock,
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "Website Dev",
    budget: "$2,500 - $5,000",
    timeline: "1 - 2 months",
    projectDetails: "",
    referenceSite: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "info" | null;
    message: string;
    configured?: boolean;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    // 1. Client-Side Zod Validation
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const flattened = validation.error.flatten().fieldErrors;
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const [key, msgs] of Object.entries(flattened)) {
        if (msgs && msgs.length > 0) {
          fieldErrors[key as keyof ContactFormData] = msgs[0];
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // 2. Dispatch to /api/contact Route Handler
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.fieldErrors) {
          const serverFieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
          Object.entries(data.fieldErrors).forEach(([key, val]) => {
            serverFieldErrors[key as keyof ContactFormData] = Array.isArray(val)
              ? val[0]
              : String(val);
          });
          setErrors(serverFieldErrors);
        }
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit enquiry. Please check highlighted form fields.",
        });
        setIsSubmitting(false);
        return;
      }

      // 3. Handle Successful Submission
      setSubmitStatus({
        type: "success",
        message: data.message || "Your project enquiry has been successfully delivered.",
        configured: data.configured !== false,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again.";
      setSubmitStatus({
        type: "error",
        message: `Network communication error: ${msg}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      serviceType: "Website Dev",
      budget: "$2,500 - $5,000",
      timeline: "1 - 2 months",
      projectDetails: "",
      referenceSite: "",
    });
    setErrors({});
    setSubmitStatus({ type: null, message: "" });
  };

  // Success Confirmation Card
  if (submitStatus.type === "success") {
    return (
      <div className="rounded-3xl border border-accent/40 bg-surface/90 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 h-48 w-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-accent shadow-[0_0_24px_rgba(0,245,160,0.3)]">
          <CheckCircle className="h-8 w-8" />
        </div>

        <h3 className="mt-6 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Enquiry Received
        </h3>

        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          {submitStatus.message} A senior engineer will review your architecture specifications and reply within 24 business hours.
        </p>

        {submitStatus.configured === false && (
          <div className="mt-8 rounded-2xl border border-surface-border bg-background/80 p-5 text-xs text-muted-foreground text-left max-w-lg mx-auto flex items-start gap-3.5">
            <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground font-mono">Development Note:</strong> The contact submission pipeline has completed end-to-end Zod validation. To route emails directly to your active team mailbox, configure{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-accent">
                RESEND_API_KEY
              </code>{" "}
              and{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-accent">
                CONTACT_RECEIVER_EMAIL
              </code>{" "}
              in your environment variables.
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface px-6 py-3 text-xs font-mono font-semibold text-foreground hover:bg-surface-elevated hover:border-accent/40 transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5 text-accent" />
            <span>Submit Another Project Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* General Error Alert */}
      {submitStatus.type === "error" && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-xs text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <span>{submitStatus.message}</span>
        </div>
      )}

      {/* Field Group 1: Service Type Segmented Pills */}
      <div>
        <label className="block font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-3">
          1. Select Primary Service Discipline <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {serviceTypes.map((type) => {
            const isSelected = formData.serviceType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => handleSelectField("serviceType", type)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-mono transition-all border text-left ${
                  isSelected
                    ? "bg-accent/15 border-accent text-accent font-bold shadow-[0_0_16px_rgba(0,245,160,0.15)]"
                    : "bg-surface/80 border-surface-border text-muted-foreground hover:border-surface-border-hover hover:text-foreground"
                }`}
              >
                <span>{type}</span>
                {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
              </button>
            );
          })}
        </div>
        {errors.serviceType && (
          <p className="mt-2 text-xs text-red-400 font-mono">{errors.serviceType}</p>
        )}
      </div>

      {/* Field Group 2: Contact Information */}
      <div className="pt-2">
        <span className="block font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-4">
          2. Contact Credentials
        </span>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-mono font-medium text-foreground mb-1.5">
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Mercer"
              aria-invalid={Boolean(errors.name)}
              className={`w-full rounded-xl border bg-background/80 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all focus:outline-none ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-surface-border focus:border-accent focus:ring-1 focus:ring-accent/40"
              }`}
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-mono font-medium text-foreground mb-1.5">
              Work Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              aria-invalid={Boolean(errors.email)}
              className={`w-full rounded-xl border bg-background/80 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all focus:outline-none ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-surface-border focus:border-accent focus:ring-1 focus:ring-accent/40"
              }`}
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-xs font-mono font-medium text-foreground mb-1.5">
              Company / Project Entity <span className="text-muted-foreground font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              className="w-full rounded-xl border border-surface-border bg-background/80 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
            />
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label htmlFor="phone" className="block text-xs font-mono font-medium text-foreground mb-1.5">
              Phone / WhatsApp <span className="text-muted-foreground font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full rounded-xl border border-surface-border bg-background/80 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
            />
          </div>
        </div>
      </div>

      {/* Field Group 3: Budget & Timeline Selectors */}
      <div className="pt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Selector */}
        <div>
          <label className="block font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            3. Estimated Budget Tier <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {budgetRanges.map((range) => {
              const isSelected = formData.budget === range;
              return (
                <button
                  key={range}
                  type="button"
                  onClick={() => handleSelectField("budget", range)}
                  className={`rounded-xl px-3 py-3 text-xs font-mono text-center transition-all border ${
                    isSelected
                      ? "bg-accent/15 border-accent text-accent font-bold shadow-[0_0_12px_rgba(0,245,160,0.12)]"
                      : "bg-surface/80 border-surface-border text-muted-foreground hover:border-surface-border-hover hover:text-foreground"
                  }`}
                >
                  {range}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Selector */}
        <div>
          <label className="block font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            4. Target Delivery Cadence <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {timelineOptions.map((opt) => {
              const isSelected = formData.timeline === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleSelectField("timeline", opt)}
                  className={`rounded-xl px-3 py-3 text-xs font-mono text-center transition-all border ${
                    isSelected
                      ? "bg-accent/15 border-accent text-accent font-bold shadow-[0_0_12px_rgba(0,245,160,0.12)]"
                      : "bg-surface/80 border-surface-border text-muted-foreground hover:border-surface-border-hover hover:text-foreground"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Field Group 4: Project Details & References */}
      <div className="pt-2">
        <label htmlFor="projectDetails" className="block font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-2">
          5. Project Scope &amp; Technical Requirements <span className="text-red-400">*</span>
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows={5}
          value={formData.projectDetails}
          onChange={handleChange}
          placeholder="Briefly describe what you're building, target audience, preferred integrations (e.g. Shopify, Stripe, Supabase), and key deadlines..."
          aria-invalid={Boolean(errors.projectDetails)}
          className={`w-full rounded-2xl border bg-background/80 p-4 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all focus:outline-none ${
            errors.projectDetails
              ? "border-red-500 focus:border-red-500"
              : "border-surface-border focus:border-accent focus:ring-1 focus:ring-accent/40"
          }`}
        />
        <div className="mt-1.5 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <span>{errors.projectDetails ? <span className="text-red-400">{errors.projectDetails}</span> : "Minimum 20 characters required"}</span>
          <span>{formData.projectDetails.length} characters</span>
        </div>
      </div>

      {/* Optional Reference Link */}
      <div>
        <label htmlFor="referenceSite" className="block text-xs font-mono font-medium text-foreground mb-1.5">
          Reference URL or Figma Link <span className="text-muted-foreground font-normal">(Optional)</span>
        </label>
        <input
          type="url"
          id="referenceSite"
          name="referenceSite"
          value={formData.referenceSite}
          onChange={handleChange}
          placeholder="https://example.com or Figma file link"
          className="w-full rounded-xl border border-surface-border bg-background/80 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40"
        />
      </div>

      {/* Submit Action Bar */}
      <div className="pt-4 border-t border-surface-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Clock className="h-3.5 w-3.5 text-accent" />
          <span>Responses sent within 24 business hours</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-background shadow-[0_0_24px_rgba(0,245,160,0.35)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_36px_rgba(0,245,160,0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Transmitting Architecture Spec...</span>
            </>
          ) : (
            <>
              <span>Dispatch Project Enquiry</span>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
