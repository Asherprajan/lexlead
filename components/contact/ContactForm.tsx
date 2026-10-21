"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
  privacyConsent: boolean;
  website_field_check?: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  practiceArea?: string;
  message?: string;
  privacyConsent?: string;
}

export const ContactForm: React.FC<{ defaultPracticeArea?: string }> = ({
  defaultPracticeArea = "",
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: defaultPracticeArea,
    message: "",
    privacyConsent: false,
    website_field_check: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+0-9\s\-()]{8,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (8–20 digits).";
    }

    if (!formData.practiceArea) {
      newErrors.practiceArea = "Please select the legal practice area.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please provide an initial outline of at least 10 characters.";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "You must acknowledge the disclaimer and privacy terms.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(
          data.error || "Unable to send consultation request. Please try calling our chambers."
        );
        return;
      }

      setStatus("success");
      setReferenceId(data.referenceId || "CONFIRMED");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection interrupted. Please verify your connection or call our desk."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      practiceArea: "",
      message: "",
      privacyConsent: false,
      website_field_check: "",
    });
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
    setReferenceId("");
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.04] border border-[#C6A15B]/40 text-center space-y-6 backdrop-blur-xl animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 flex items-center justify-center mx-auto text-[#DFBF7D]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#DFBF7D] font-semibold">
            Enquiry Dispatched
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#F7F5F0]">
            Thank You, {formData.fullName}.
          </h3>
          <p className="text-sm text-[#AAB4C3] max-w-md mx-auto leading-relaxed">
            Your preliminary consultation request has been lodged under reference:{" "}
            <span className="font-mono text-[#DFBF7D] font-semibold">{referenceId}</span>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#0B1728]/60 border border-white/10 text-xs text-left space-y-2 text-[#AAB4C3]">
          <div className="flex items-center gap-2 text-[#F7F5F0] font-medium">
            <Lock className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Next Steps from Chambers:</span>
          </div>
          <p>
            1. An advocate will review the practice domain ({formData.practiceArea}) and check for conflict of interest.
          </p>
          <p>
            2. We will reach out to you via email or phone within 1 business day to schedule a chamber appointment or virtual conference.
          </p>
        </div>

        <Button variant="outline" size="sm" onClick={handleReset}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/12 backdrop-blur-xl shadow-2xl space-y-5"
      noValidate
    >
      <div className="border-b border-white/[0.08] pb-4 mb-2">
        <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#F7F5F0]">
          Request a Confidential Consultation
        </h3>
        <p className="text-xs sm:text-sm text-[#AAB4C3] mt-1">
          Share your legal requirements. Initial reviews are handled under professional advocate discretion.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-medium">Request Could Not Be Sent</p>
            <p className="text-xs text-red-300">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Honeypot field (hidden from users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_field_check">Leave this field empty</label>
        <input
          id="website_field_check"
          type="text"
          name="website_field_check"
          value={formData.website_field_check}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-medium text-[#F7F5F0] mb-1.5">
          Full Name <span className="text-[#C6A15B]">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Adv. K. Raman / Sarah Joseph"
          className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          required
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-xs text-red-400">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Grid: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#F7F5F0] mb-1.5">
            Email Address <span className="text-[#C6A15B]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@domain.com"
            className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-[#F7F5F0] mb-1.5">
            Phone Number <span className="text-[#C6A15B]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98470 00000"
            className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            required
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-400">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Practice Area Dropdown */}
      <div>
        <label htmlFor="practiceArea" className="block text-xs font-medium text-[#F7F5F0] mb-1.5">
          Practice Area of Interest <span className="text-[#C6A15B]">*</span>
        </label>
        <select
          id="practiceArea"
          name="practiceArea"
          value={formData.practiceArea}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl glass-input text-sm bg-[#10253D] text-[#F7F5F0]"
          aria-invalid={!!errors.practiceArea}
          aria-describedby={errors.practiceArea ? "practiceArea-error" : undefined}
          required
        >
          <option value="" disabled className="bg-[#0B1728] text-gray-400">
            Select an area of law...
          </option>
          <option value="Civil Litigation" className="bg-[#0B1728]">Civil Litigation & Dispute Resolution</option>
          <option value="Criminal Law" className="bg-[#0B1728]">Criminal Law & Bail Defense</option>
          <option value="Family & Matrimonial Matters" className="bg-[#0B1728]">Family & Matrimonial Matters</option>
          <option value="Property & Real Estate" className="bg-[#0B1728]">Property & Real Estate Law</option>
          <option value="Corporate & Commercial Law" className="bg-[#0B1728]">Corporate & Commercial Law</option>
          <option value="Contract & Documentation Support" className="bg-[#0B1728]">Contract & Documentation Support</option>
          <option value="General Legal Advisory" className="bg-[#0B1728]">General Legal Advisory</option>
        </select>
        {errors.practiceArea && (
          <p id="practiceArea-error" className="mt-1 text-xs text-red-400">
            {errors.practiceArea}
          </p>
        )}
      </div>

      {/* Brief Enquiry */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#F7F5F0] mb-1.5">
          Brief Outline of Your Matter <span className="text-[#C6A15B]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe the general nature of your query. Do not disclose confidential or privileged documents here."
          className="w-full px-4 py-2.5 rounded-xl glass-input text-sm resize-none"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        <div className="flex items-center justify-between mt-1 text-[11px] text-[#AAB4C3]/70">
          <span>Confidential initial overview</span>
          <span>{formData.message.length} / 1500</span>
        </div>
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy & Legal Disclaimer Acknowledgement */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#C6A15B] focus:ring-[#C6A15B]/50 accent-[#C6A15B]"
            required
          />
          <span className="text-xs text-[#AAB4C3] leading-relaxed">
            I understand that submitting this enquiry does not establish an advocate-client relationship. I agree to the{" "}
            <a href="/privacy" className="text-[#DFBF7D] underline hover:text-[#F7F5F0]">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-[#DFBF7D] underline hover:text-[#F7F5F0]">
              Bar Council Compliance Terms
            </a>
            .
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="mt-1 text-xs text-red-400 pl-7">{errors.privacyConsent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center"
          disabled={status === "submitting"}
          icon={
            status === "submitting" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )
          }
        >
          {status === "submitting" ? "Transmitting Enquiry..." : "Submit Consultation Request"}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] text-[#AAB4C3]/60 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
        <span>SSL Encrypted Transmission • Zero Commercial Solicitation</span>
      </div>
    </form>
  );
};
