import React from "react";
import { MapPin, Mail, Phone, Clock, ExternalLink, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlassPanel } from "@/components/ui/GlassPanel";

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#DFBF7D]/10 dark:bg-[#183354]/30 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#C6A15B]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Chambers Information & Office Hours */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="Reach Our Chambers"
              title="Direct Access to Considered Legal Counsel."
              description="Whether addressing an urgent contentious dispute or structuring a transaction, our chambers in Thiruvananthapuram provide measured legal evaluation."
            />

            {/* Contact Details Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <GlassPanel variant="subtle" className="p-5 border border-black/10 dark:border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[#C6A15B]/30 text-[#92703B] dark:text-[#DFBF7D] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#92703B] dark:text-[#DFBF7D]">
                    Chambers Location
                  </h3>
                  <p className="text-sm font-medium text-[#10253D] dark:text-[#F7F5F0] mt-1">
                    Lexlead Legal Solutions — Advocates
                  </p>
                  <p className="text-xs text-[#4A586E] dark:text-[#AAB4C3] mt-0.5 leading-relaxed">
                    Court Road / Vanchiyoor, Thiruvananthapuram, Kerala, India — 695035
                  </p>
                  <a
                    href="https://maps.google.com/?q=Vanchiyoor+Thiruvananthapuram+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#92703B] dark:text-[#DFBF7D] hover:text-[#10253D] dark:hover:text-[#F7F5F0] mt-2 transition-colors font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </GlassPanel>

              {/* Communication Card */}
              <GlassPanel variant="subtle" className="p-5 border border-black/10 dark:border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[#C6A15B]/30 text-[#92703B] dark:text-[#DFBF7D] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#92703B] dark:text-[#DFBF7D]">
                    Electronic Communication
                  </h3>
                  <p className="text-sm font-medium text-[#10253D] dark:text-[#F7F5F0] mt-1">
                    <a href="mailto:office@lexlead.in" className="hover:text-[#92703B] dark:hover:text-[#DFBF7D] transition-colors">
                      office@lexlead.in
                    </a>
                  </p>
                  <p className="text-xs text-[#4A586E] dark:text-[#AAB4C3] mt-0.5">
                    For preliminary documentation & formal case instructions
                  </p>
                </div>
              </GlassPanel>

              {/* Consultation Desk Card */}
              <GlassPanel variant="subtle" className="p-5 border border-black/10 dark:border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[#C6A15B]/30 text-[#92703B] dark:text-[#DFBF7D] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#92703B] dark:text-[#DFBF7D]">
                    Chambers Registry
                  </h3>
                  <p className="text-sm font-medium text-[#10253D] dark:text-[#F7F5F0] mt-1">
                    +91 (0) 471 Consultation Desk
                  </p>
                  <p className="text-xs text-[#4A586E] dark:text-[#AAB4C3] mt-0.5">
                    Monday to Friday, 9:30 AM to 6:30 PM IST
                  </p>
                </div>
              </GlassPanel>

              {/* Operating Hours Card */}
              <GlassPanel variant="subtle" className="p-5 border border-black/10 dark:border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-[#C6A15B]/30 text-[#92703B] dark:text-[#DFBF7D] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#92703B] dark:text-[#DFBF7D]">
                    Chamber Hours
                  </h3>
                  <p className="text-xs text-[#10253D] dark:text-[#F7F5F0] mt-1">
                    <strong>Monday – Friday:</strong> 9:30 AM – 6:30 PM
                  </p>
                  <p className="text-xs text-[#4A586E] dark:text-[#AAB4C3] mt-0.5">
                    <strong>Saturday:</strong> By Prior Chamber Appointment
                  </p>
                  <p className="text-xs text-[#4A586E] dark:text-[#AAB4C3]">
                    <strong>Sunday:</strong> Closed (Emergency Court Filings only)
                  </p>
                </div>
              </GlassPanel>
            </div>

            {/* Confidentiality Notice */}
            <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.08] flex items-center gap-3 text-xs text-[#4A586E] dark:text-[#AAB4C3]">
              <Shield className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span>
                All inquiries submitted to our chambers are treated with strict confidentiality under advocate ethical obligations.
              </span>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
