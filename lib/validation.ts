import { z } from "zod";

export const serviceTypes = [
  "Website Dev",
  "Landing Pages",
  "Business Sites",
  "E-commerce",
  "UI/UX",
  "Maintenance",
] as const;

export const budgetRanges = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "To be determined",
] as const;

export const timelineOptions = [
  "Immediately (< 2 weeks)",
  "1 - 2 months",
  "2 - 3 months",
  "Flexible",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name must not exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  company: z
    .string()
    .max(100, { message: "Company name must not exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .max(30, { message: "Phone/WhatsApp number must not exceed 30 characters." })
    .optional()
    .or(z.literal("")),
  serviceType: z.enum(serviceTypes, {
    message: "Please select a valid service type.",
  }),
  budget: z.enum(budgetRanges, {
    message: "Please select a budget range.",
  }),
  timeline: z.enum(timelineOptions, {
    message: "Please select an estimated timeline.",
  }),
  projectDetails: z
    .string()
    .min(10, { message: "Project details must be at least 10 characters." })
    .max(3000, { message: "Project details must not exceed 3000 characters." }),
  referenceSite: z
    .string()
    .url({ message: "Reference site must be a valid URL (e.g., https://example.com)." })
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
