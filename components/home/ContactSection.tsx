import React from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ChambersMap } from "@/components/contact/ChambersMap";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#F7F5F0] py-16 sm:py-24 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="CONTACT OUR CHAMBERS"
              title="Reach Lexlead Legal Solutions"
              description="With our main office established in Padma Junction, Ernakulam (Kochi) and branch chambers in Vanchiyoor, Thiruvananthapuram, we provide strategic legal counsel across Kerala. Contact us to schedule an in-person or virtual consultation."
            />

            <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E8E1D5] space-y-5">
              {/* Chambers Locations */}
              <div className="space-y-4">
                {/* Ernakulam Main Office */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                        Ernakulam (Kochi)
                      </h3>
                      <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-[#C6A15B] text-[#10253D] font-bold">
                        Main Office
                      </span>
                    </div>
                    <p className="text-xs text-[#626B76] mt-1 leading-relaxed">
                      2nd Floor, T K Tower, Chittoor Rd, Padma Junction, Pullepady, Kochi, Ernakulam – 682035
                    </p>
                    <a
                      href="https://maps.google.com/?q=Lexlead+Legal+Solutions+TK+Tower+Chittoor+Rd+Padma+Junction+Pullepady+Kochi+Kerala+682035"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#B18A4A] hover:text-[#10253D] mt-1.5 font-medium"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Trivandrum Branch */}
                <div className="flex items-start gap-3.5 pt-3.5 border-t border-[#E8E1D5]/70">
                  <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                        Thiruvananthapuram
                      </h3>
                      <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#10253D] font-bold">
                        Branch Office
                      </span>
                    </div>
                    <p className="text-xs text-[#626B76] mt-1 leading-relaxed">
                      Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram – 695035
                    </p>
                    <a
                      href="https://maps.google.com/?q=Vinayaka+Building+Vanchiyoor+Thiruvananthapuram+Kerala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#B18A4A] hover:text-[#10253D] mt-1.5 font-medium"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E8E1D5]">
                <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                    Telephone Numbers
                  </h3>
                  <div className="flex flex-col gap-1.5 mt-1 text-sm font-medium text-[#10253D]">
                    <a href="tel:+914713161884" className="hover:text-[#B18A4A] inline-flex items-center gap-2">
                      <span>+91 471 316 1884</span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#B18A4A] bg-[#F7F5F0] px-1.5 py-0.5 rounded border border-[#E8E1D5]">
                        Office
                      </span>
                    </a>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#626B76]">
                      <a href="tel:7907224126" className="hover:text-[#B18A4A] text-sm text-[#10253D]">
                        +91 79072 24126
                      </a>
                      <span className="text-[#AAB4C3]">/</span>
                      <a href="tel:9567653357" className="hover:text-[#B18A4A] text-sm text-[#10253D]">
                        +91 95676 53357
                      </a>
                      <span className="text-[#AAB4C3]">/</span>
                      <a href="tel:9747395967" className="hover:text-[#B18A4A] text-sm text-[#10253D]">
                        +91 97473 95967
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E8E1D5]">
                <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                    Email Communications
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#10253D]">
                    <a href="mailto:info@lexleadlegal.in" className="hover:text-[#B18A4A]">
                      info@lexleadlegal.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E8E1D5]">
                <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#B18A4A]">
                    Chamber Schedule
                  </h3>
                  <p className="text-xs text-[#10253D] mt-1">
                    Monday to Friday: 9:30 AM – 6:30 PM IST
                  </p>
                  <p className="text-xs text-[#626B76] mt-0.5">
                    Saturday: By Prior Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded bg-white border border-[#E8E1D5] flex items-center gap-3 text-xs text-[#626B76]">
              <ShieldCheck className="w-4 h-4 text-[#B18A4A] shrink-0" />
              <span>
                All inquiries submitted to our office are maintained under strict professional confidentiality.
              </span>
            </div>
          </div>

          {/* Right Column: Dark Form Card as in Mockup */}
          <div className="lg:col-span-7">
            <ContactForm darkTheme={true} />
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-10 sm:mt-12">
          <ChambersMap height="h-[300px] sm:h-[360px]" />
        </div>
      </div>
    </section>
  );
};
