import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(120, "Email must not exceed 120 characters"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number with area code")
    .max(20, "Phone number is too long")
    .regex(/^[+0-9\s\-()]+$/, "Phone number contains invalid characters"),
  practiceArea: z
    .string()
    .min(1, "Please select an area of practice"),
  message: z
    .string()
    .min(10, "Please provide an initial outline of at least 10 characters")
    .max(1500, "Message should not exceed 1500 characters"),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, "You must acknowledge the disclaimer and privacy terms"),
  website_field_check: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
