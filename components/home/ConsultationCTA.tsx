"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Sparkles,
  ShieldCheck,
  FileSearch,
  Clock,
  Scale,
  CheckCircle2,
  Lock,
  Loader2,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const ConsultationCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    practiceArea: "Property and Real Estate Law",
    preferredChambers: "Ernakulam (Kochi)",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [referenceId, setReferenceId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const payload = {
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: `client-${formData.phone.replace(/[^0-9]/g, "")}@consultation.lexleadlegal.in`,
        practiceArea: formData.practiceArea,
        preferredChambers: formData.preferredChambers,
        message: `Priority Free 15-Minute Case Assessment requested via Homepage CTA for ${formData.practiceArea} at ${formData.preferredChambers} chambers.`,
        privacyConsent: true,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setReferenceId(data.referenceId || `LEX-${Date.now().toString(36).toUpperCase()}`);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Unable to submit assessment request. Please call our chambers directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network connection issue. Please dial +91 79072 24126 for direct chamber assistance.");
    }
  };

  return (
    <section className="relative bg-[#0B1728] text-white py-16 sm:py-24 border-y border-[#C6A15B]/30 overflow-hidden">
      {/* Subtle Luxury Radial Glow */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#1A365D]/40 rounded-full blur-3xl pointer-events-none translate-y-1/3"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authority & 4-Pillar Scrutiny Value */}
          <div className="lg:col-span-7 space-y-7">
            {/* Prestige Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10253D] border border-[#C6A15B]/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#C6A15B]">
                PRIORITY CASE INTAKE • ERNAKULAM & TRIVANDRUM
              </span>
            </div>

            {/* Editorial Luxury Headline */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Speak Directly With Our Advocates.{" "}
              <span className="italic font-normal text-[#C6A15B] block sm:inline">
                Free 15-Minute
              </span>{" "}
              Case Assessment.
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#AAB4C3] max-w-2xl leading-relaxed">
              Before filing in court, responding to adverse notices, or signing agreements, get a confidential statutory appraisal from our practicing advocates in Kochi and Trivandrum. Zero financial obligation.
            </p>

            {/* 4 Deliverables (2x2 Luxury Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {[
                {
                  icon: FileSearch,
                  title: "Document Scrutiny",
                  desc: "Evaluation of summons, police notice, FIR, or property deeds.",
                },
                {
                  icon: Clock,
                  title: "Limitation Deadlines",
                  desc: "Clear check on statutory deadlines to prevent legal forfeiture.",
                },
                {
                  icon: Scale,
                  title: "Action Roadmap",
                  desc: "Honest appraisal of whether court action or settlement is optimal.",
                },
                {
                  icon: ShieldCheck,
                  title: "Fee Transparency",
                  desc: "Clear, upfront estimate before any formal engagement is signed.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-sm bg-white/5 border border-white/10 hover:border-[#C6A15B]/40 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded bg-[#C6A15B]/15 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#8C98A9] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Reassurances */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#AAB4C3]">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Protected by Attorney-Client Privilege</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Zero Financial Obligation</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Same-Day Callback</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Instant Evaluation Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-[#10253D] p-6 sm:p-8 rounded-sm shadow-2xl border-2 border-[#C6A15B] relative">
              {/* Gold Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B18A4A] via-[#C6A15B] to-[#B18A4A]" />

              {status === "success" ? (
                /* Success Card */
                <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#C6A15B]/15 border-2 border-[#C6A15B] flex items-center justify-center mx-auto text-[#B18A4A]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-[#B18A4A] font-bold">
                      ASSESSMENT REQUEST CONFIRMED
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-medium text-[#10253D]">
                      Thank You, {formData.fullName}.
                    </h3>
                    <p className="text-xs text-[#626B76] max-w-xs mx-auto leading-relaxed">
                      Your priority brief is logged under Reference:{" "}
                      <strong className="font-mono text-[#10253D] text-sm block mt-1">
                        {referenceId}
                      </strong>
                    </p>
                  </div>

                  <div className="p-3.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-left text-xs text-[#626B76] space-y-1">
                    <p>
                      • <strong>Chambers:</strong> {formData.preferredChambers}
                    </p>
                    <p>
                      • <strong>Practice Area:</strong> {formData.practiceArea}
                    </p>
                    <p>• An advocate will call you confidentially within 24 hours.</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href={`https://wa.me/917907224126?text=${encodeURIComponent(
                        `Hello Lexlead Legal Solutions, I submitted Assessment Request [${referenceId}] regarding ${formData.practiceArea} for ${formData.fullName}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-sm bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <span>Connect on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="tel:7907224126"
                      className="w-full py-2.5 px-4 rounded-sm bg-[#10253D] hover:bg-[#1A365D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>Call Direct: +91 79072 24126</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Interactive Intake Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B18A4A] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>CONFIDENTIAL INTAKE DESK</span>
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-medium text-[#10253D] mt-1">
                      Book Your Free 15-Min Assessment
                    </h3>
                    <p className="text-xs text-[#626B76] mt-0.5">
                      Receive an initial review of your facts from practicing advocates.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Matter Category */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-[#10253D] block">
                      Legal Domain *
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-sm bg-[#F7F5F0] border border-[#E8E1D5] text-[#10253D] focus:outline-none focus:border-[#C6A15B] transition-colors"
                    >
                      <option value="Property and Real Estate Law">Property Due Diligence / Land Dispute</option>
                      <option value="Criminal Law">Anticipatory Bail / Criminal Defense (BNSS)</option>
                      <option value="Corporate and Commercial Law">Cyber Crime / Bank Account Freeze (Lien Removal)</option>
                      <option value="Constitutional and High Court Practice">Kerala High Court Writ / Appeal (Art 226)</option>
                      <option value="Family and Matrimonial Law">Mutual Consent Divorce / Family Court</option>
                      <option value="Civil Litigation">Civil Suit / Caveat / Cheque Bounce (Sec 138)</option>
                      <option value="Corporate and Commercial Law">NCLT Kochi Corporate Insolvency (IBC)</option>
                      <option value="General Chamber Consultation">Other Legal Matters</option>
                    </select>
                  </div>

                  {/* Preferred Chambers Location */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-[#10253D] block">
                      Preferred Chambers *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredChambers: "Ernakulam (Kochi)" })}
                        className={`py-2 px-2.5 rounded-sm text-[11px] font-semibold border transition-all text-center ${
                          formData.preferredChambers === "Ernakulam (Kochi)"
                            ? "bg-[#10253D] text-white border-[#10253D] shadow-xs"
                            : "bg-[#F7F5F0] text-[#626B76] border-[#E8E1D5] hover:border-[#C6A15B]"
                        }`}
                      >
                        Ernakulam (Kochi)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredChambers: "Thiruvananthapuram" })}
                        className={`py-2 px-2.5 rounded-sm text-[11px] font-semibold border transition-all text-center ${
                          formData.preferredChambers === "Thiruvananthapuram"
                            ? "bg-[#10253D] text-white border-[#10253D] shadow-xs"
                            : "bg-[#F7F5F0] text-[#626B76] border-[#E8E1D5] hover:border-[#C6A15B]"
                        }`}
                      >
                        Thiruvananthapuram
                      </button>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-[#10253D] block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Adv. / Sri / Smt. Your Name"
                      className="w-full px-3 py-2 text-xs rounded-sm bg-[#F7F5F0] border border-[#E8E1D5] text-[#10253D] focus:outline-none focus:border-[#C6A15B] placeholder-[#8C98A9]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-[#10253D] block">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-xs rounded-sm bg-[#F7F5F0] border border-[#E8E1D5] text-[#10253D] focus:outline-none focus:border-[#C6A15B] placeholder-[#8C98A9]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 px-4 rounded-sm bg-[#10253D] hover:bg-[#1A365D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C6A15B]" />
                        <span>Logging Case Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Claim Free Case Assessment</span>
                        <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                      </>
                    )}
                  </button>

                  {/* Quick Direct Call & WhatsApp row */}
                  <div className="pt-2 border-t border-[#F0EBE0] flex items-center justify-between text-[11px] text-[#626B76]">
                    <span>Prefer direct call?</span>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://wa.me/917907224126?text=Hello%20Lexlead%20Legal%20Solutions%2C%20I%20would%20like%20to%20request%20a%20Free%2015-Minute%20Case%20Assessment."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#10253D] font-semibold hover:text-[#B18A4A] inline-flex items-center gap-1"
                      >
                        <span>WhatsApp</span>
                        <ExternalLink className="w-3 h-3 text-[#25D366]" />
                      </a>
                      <span>•</span>
                      <a
                        href="tel:7907224126"
                        className="text-[#10253D] font-semibold hover:text-[#B18A4A] inline-flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-[#B18A4A]" />
                        <span>79072 24126</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bar Council Compliance Footer Line */}
        <p className="text-center text-[10px] text-[#8C98A9]/80 mt-12 max-w-3xl mx-auto leading-relaxed">
          In compliance with Bar Council of India Rule 36: An initial preliminary assessment does not create an advocate-client relationship. Formal representation commences only upon chamber verification, conflict check, and execution of formal vakalath / retainer engagement.
        </p>
      </div>
    </section>
  );
};
