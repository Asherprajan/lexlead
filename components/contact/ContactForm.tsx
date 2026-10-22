"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Lock } from "lucide-react";
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

export const ContactForm: React.FC<{ defaultPracticeArea?: string; darkTheme?: boolean }> = ({
  defaultPracticeArea = "",
  darkTheme = true,
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
      newErrors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+0-9\s\-()]{8,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.practiceArea) {
      newErrors.practiceArea = "Please select a practice area.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please provide an outline of at least 10 characters.";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "Please acknowledge the privacy and legal terms.";
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
          data.error || "Unable to send consultation request. Please call our chambers directly."
        );
        return;
      }

      setStatus("success");
      setReferenceId(data.referenceId || "CONFIRMED");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection interrupted. Please check your connection or call our desk."
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

  const inputClass = darkTheme
    ? "w-full px-3.5 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors"
    : "w-full px-3.5 py-2.5 rounded bg-white border border-[#E8E1D5] text-[#10253D] placeholder-[#626B76]/60 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors";

  if (status === "success") {
    return (
      <div
        className={`p-6 sm:p-8 rounded-sm text-center space-y-5 ${
          darkTheme ? "bg-[#10253D] text-white border border-[#C6A15B]/40" : "bg-white border border-[#E8E1D5]"
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B] flex items-center justify-center mx-auto text-[#C6A15B]">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <div className="space-y-1.5">
          <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
            Enquiry Received
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium">
            Thank You, {formData.fullName}.
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-sm mx-auto">
            Your consultation request is registered under reference:{" "}
            <span className="font-mono text-[#C6A15B] font-semibold">{referenceId}</span>.
          </p>
        </div>

        <div className="p-3.5 rounded bg-black/30 border border-white/10 text-xs text-left space-y-1.5 text-white/80">
          <div className="flex items-center gap-1.5 text-white font-medium">
            <Lock className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Chambers Follow-Up:</span>
          </div>
          <p>• An advocate will review your query regarding {formData.practiceArea}.</p>
          <p>• Our office will contact you via phone or email within 1 business day.</p>
        </div>

        <Button variant="outline" size="sm" onClick={handleReset} className={darkTheme ? "text-white border-white/40 hover:bg-white/10" : ""}>
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-8 rounded-sm space-y-4 shadow-xl ${
        darkTheme ? "bg-[#10253D] text-white border border-white/10" : "bg-white text-[#10253D] border border-[#E8E1D5]"
      }`}
      noValidate
    >
      <div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C6A15B]">
          GET IN TOUCH
        </span>
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium mt-1">
          Request a Consultation
        </h3>
        <p className={`text-xs mt-1 ${darkTheme ? "text-white/70" : "text-[#626B76]"}`}>
          Share a few details and we will get back to you.
        </p>
      </div>

      {status === "error" && (
        <div className="p-3 rounded bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_field_check">Leave empty</label>
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

      {/* Grid: Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-medium mb-1">
            Full Name <span className="text-[#C6A15B]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Adv. K. Raman"
            className={inputClass}
            required
          />
          {errors.fullName && <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium mb-1">
            Email Address <span className="text-[#C6A15B]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@domain.com"
            className={inputClass}
            required
          />
          {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
        </div>
      </div>

      {/* Grid: Phone & Practice Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium mb-1">
            Phone Number <span className="text-[#C6A15B]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98470 00000"
            className={inputClass}
            required
          />
          {errors.phone && <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="practiceArea" className="block text-xs font-medium mb-1">
            Select Practice Area <span className="text-[#C6A15B]">*</span>
          </label>
          <select
            id="practiceArea"
            name="practiceArea"
            value={formData.practiceArea}
            onChange={handleChange}
            className={`${inputClass} ${darkTheme ? "bg-[#0B1728]" : "bg-white"}`}
            required
          >
            <option value="" disabled className="text-gray-400">
              Select Area...
            </option>
            <option value="Civil Litigation">Civil Litigation</option>
            <option value="Criminal Law">Criminal Law</option>
            <option value="Family and Matrimonial Law">Family and Matrimonial Law</option>
            <option value="Property and Real Estate">Property and Real Estate</option>
            <option value="Corporate and Commercial Law">Corporate and Commercial Law</option>
            <option value="Contract and Documentation Support">Contract and Documentation</option>
            <option value="General Legal Advisory">General Legal Advisory</option>
          </select>
          {errors.practiceArea && <p className="mt-1 text-[11px] text-red-400">{errors.practiceArea}</p>}
        </div>
      </div>

      {/* Message Outline */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium mb-1">
          Brief Enquiry <span className="text-[#C6A15B]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly outline your query. Please avoid sharing confidential documents through this initial form."
          className={`${inputClass} resize-none`}
          required
        />
        {errors.message && <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>}
      </div>

      {/* Privacy Consent */}
      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-1 w-3.5 h-3.5 rounded border-[#E8E1D5] accent-[#C6A15B]"
            required
          />
          <span className={`text-[11px] leading-tight ${darkTheme ? "text-white/70" : "text-[#626B76]"}`}>
            I acknowledge that submitting this form does not establish an advocate-client relationship and agree to the{" "}
            <a href="/privacy-policy" className="text-[#C6A15B] underline hover:text-white">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="mt-1 text-[11px] text-red-400 pl-6">{errors.privacyConsent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
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
              <ArrowRight className="w-4 h-4" />
            )
          }
        >
          {status === "submitting" ? "Transmitting..." : "Send Enquiry"}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/50 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
        <span>Confidential Preliminary Intake • Advocates Act Compliant</span>
      </div>
    </form>
  );
};
