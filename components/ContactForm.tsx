"use client";

import React, { useState } from "react";
import {
  contactFormSchema,
  serviceTypes,
  budgetRanges,
  timelineOptions,
  ContactFormData,
} from "@/lib/validation";
import { ArrowUpRight, CheckCircle, AlertCircle, Loader2, RefreshCw, Info, Check } from "lucide-react";

import { Magnetic } from "@/components/motion/Premium";
const MIN_DETAILS = 20;

// Choice fields start empty so visitors actively pick; validation enforces a choice.
type FormState = Omit<ContactFormData, "serviceType" | "budget" | "timeline"> & {
  serviceType: string;
  budget: string;
  timeline: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  serviceType: "",
  budget: "",
  timeline: "",
  projectDetails: "",
  referenceSite: "",
};

const inputClass = (hasError?: boolean) =>
  `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white font-sans placeholder:text-zinc-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 ${
    hasError ? "border-red-500/70 focus:border-red-500" : "border-white/10 hover:border-white/20 focus:border-accent"
  }`;

function Step({ index, title, hint, children }: { index: string; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/[0.08] pt-8 first:border-t-0 first:pt-0">
      <fieldset className="m-0 min-w-0 border-0 p-0">
        <legend className="block w-full p-0">
          <span className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Step {index} / 04
          </span>
          <span className="mt-2 block font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            {title}
          </span>
        </legend>
        {hint && <p className="mt-1 text-sm text-zinc-500 font-sans">{hint}</p>}
        <div className="mt-5">{children}</div>
      </fieldset>
    </div>
  );
}

function FieldLabel({ htmlFor, children, optional }: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
      {children}
      {optional ? <span className="text-zinc-600">Optional</span> : <span className="text-accent">*</span>}
    </label>
  );
}

function ChoiceGroup({
  label,
  options,
  value,
  onSelect,
  error,
  columns = "grid-cols-2 sm:grid-cols-3",
}: {
  label: string;
  options: readonly string[];
  value: string;
  onSelect: (value: string) => void;
  error?: string;
  columns?: string;
}) {
  return (
    <div>
      <div role="group" aria-label={label} className={`grid gap-2.5 ${columns}`}>
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(option)}
              className={`press group flex min-h-[48px] items-center justify-between gap-2 sm:gap-3 rounded-xl border px-3.5 sm:px-4 py-3 text-left font-mono text-[11px] sm:text-xs uppercase tracking-normal sm:tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                selected
                  ? "border-accent bg-accent/10 text-white"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white"
              }`}
            >
              <span>{option}</span>
              <span
                aria-hidden="true"
                className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border transition-colors ${
                  selected ? "border-accent bg-accent text-background" : "border-white/20"
                }`}
              >
                {selected && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
              </span>
            </button>
          );
        })}
      </div>
      {error && <p className="mt-2 text-xs text-red-400 font-mono">{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    configured?: boolean;
  }>({ type: null, message: "" });

  const clearError = (field: keyof ContactFormData) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearError(name as keyof ContactFormData);
  };

  const handleSelectField = (field: "serviceType" | "budget" | "timeline", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    clearError(field);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    // 1. Client-side validation
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const flattened = validation.error.flatten().fieldErrors;
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const [key, msgs] of Object.entries(flattened)) {
        if (msgs && msgs.length > 0) fieldErrors[key as keyof ContactFormData] = msgs[0];
      }
      setErrors(fieldErrors);
      setSubmitStatus({ type: "error", message: "A few details are missing. Please check the highlighted fields." });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // 2. Send to /api/contact
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
            serverFieldErrors[key as keyof ContactFormData] = Array.isArray(val) ? val[0] : String(val);
          });
          setErrors(serverFieldErrors);
        }
        setSubmitStatus({
          type: "error",
          message: data.error || "We couldn't send your enquiry. Please check the highlighted fields.",
        });
        return;
      }

      // 3. Success
      setSubmitStatus({
        type: "success",
        message: "Thanks for reaching out. We've received your project details.",
        configured: data.configured !== false,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error.";
      setSubmitStatus({ type: "error", message: `We couldn't reach the server (${msg}). Please try again.` });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(EMPTY_FORM);
    setErrors({});
    setSubmitStatus({ type: null, message: "" });
  };

  // Success confirmation
  if (submitStatus.type === "success") {
    return (
      <div role="status" className="py-6 sm:py-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent">
          <CheckCircle className="h-7 w-7" />
        </div>
        <span className="mt-6 block font-mono text-[11px] uppercase tracking-widest text-accent">Enquiry received</span>
        <h3 className="mt-2 font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
          We&apos;ll be in touch
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm sm:text-base leading-relaxed text-zinc-400 font-sans">
          {submitStatus.message} We reply within 24 hours on working days.
        </p>

        {submitStatus.configured === false && process.env.NODE_ENV !== "production" && (
          <div className="mx-auto mt-8 flex max-w-lg items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left text-xs text-zinc-400">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <div>
              <strong className="font-mono text-white">Development note:</strong> email delivery is not configured. Set{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-accent">RESEND_API_KEY</code> and{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-accent">CONTACT_RECEIVER_EMAIL</code> to
              receive enquiries by email.
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleReset}
          className="btn-sweep mt-10 inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          <span>Send another enquiry</span>
        </button>
      </div>
    );
  }

  const detailsLength = formData.projectDetails.length;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      {submitStatus.type === "error" && (
        <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300 font-sans">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{submitStatus.message}</span>
        </div>
      )}

      <Step index="01" title="What do you need?" hint="Pick the service closest to your project.">
        <ChoiceGroup
          label="Service"
          options={serviceTypes}
          value={formData.serviceType}
          onSelect={(v) => handleSelectField("serviceType", v)}
          error={errors.serviceType}
        />
      </Step>

      <Step index="02" title="About you">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              className={inputClass(Boolean(errors.name))}
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.name}</p>}
          </div>

          <div>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              className={inputClass(Boolean(errors.email))}
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.email}</p>}
          </div>

          <div>
            <FieldLabel htmlFor="company" optional>
              Business / brand
            </FieldLabel>
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              placeholder="Business or brand name"
              className={inputClass()}
            />
          </div>

          <div>
            <FieldLabel htmlFor="phone" optional>
              Phone / WhatsApp
            </FieldLabel>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={inputClass(Boolean(errors.phone))}
            />
            {errors.phone && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.phone}</p>}
          </div>
        </div>
      </Step>

      <Step index="03" title="Budget & timeline" hint="A rough idea is fine. It helps us suggest the right scope.">
        <div className="space-y-7">
          <div>
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-wider text-zinc-400">
              Budget <span className="text-accent">*</span>
            </span>
            <ChoiceGroup
              label="Budget"
              options={budgetRanges}
              value={formData.budget}
              onSelect={(v) => handleSelectField("budget", v)}
              error={errors.budget}
              columns="grid-cols-2 sm:grid-cols-3"
            />
          </div>
          <div>
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-wider text-zinc-400">
              Timeline <span className="text-accent">*</span>
            </span>
            <ChoiceGroup
              label="Timeline"
              options={timelineOptions}
              value={formData.timeline}
              onSelect={(v) => handleSelectField("timeline", v)}
              error={errors.timeline}
              columns="grid-cols-2"
            />
          </div>
        </div>
      </Step>

      <Step index="04" title="Project details">
        <div className="space-y-5">
          <div>
            <FieldLabel htmlFor="projectDetails">Tell us about your project</FieldLabel>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={5}
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="What are you building, who is it for, and what should the website help you achieve?"
              aria-invalid={Boolean(errors.projectDetails)}
              aria-describedby="projectDetails-hint"
              className={`${inputClass(Boolean(errors.projectDetails))} resize-y`}
            />
            <div id="projectDetails-hint" className="mt-1.5 flex items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
              <span>
                {errors.projectDetails ? (
                  <span className="text-red-400">{errors.projectDetails}</span>
                ) : (
                  `At least ${MIN_DETAILS} characters`
                )}
              </span>
              <span className={detailsLength >= MIN_DETAILS ? "text-zinc-400" : undefined}>
                {detailsLength} / {MIN_DETAILS}+
              </span>
            </div>
          </div>

          <div>
            <FieldLabel htmlFor="referenceSite" optional>
              Reference website or Figma link
            </FieldLabel>
            <input
              type="url"
              id="referenceSite"
              name="referenceSite"
              inputMode="url"
              value={formData.referenceSite}
              onChange={handleChange}
              placeholder="https://"
              aria-invalid={Boolean(errors.referenceSite)}
              className={inputClass(Boolean(errors.referenceSite))}
            />
            {errors.referenceSite && <p className="mt-1.5 text-xs text-red-400 font-mono">{errors.referenceSite}</p>}
          </div>
        </div>
      </Step>

      {/* Submit */}
      <div className="flex flex-col-reverse items-stretch gap-4 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center font-mono text-[11px] uppercase tracking-wider text-zinc-500 sm:text-left">
          We reply within 24 hours on working days
        </p>
        <Magnetic className="w-full sm:w-auto">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl border border-accent bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-background shadow-[0_0_24px_-4px_rgba(17,17,17,0.158)] transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
        </Magnetic>
      </div>
    </form>
  );
}

export default ContactForm;
