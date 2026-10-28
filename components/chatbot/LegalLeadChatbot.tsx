"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  Phone,
  Scale,
  ShieldCheck,
  Building2,
  Clock,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  Sparkles,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickOptions?: { label: string; action: string }[];
  isSuccessCard?: boolean;
  referenceId?: string;
  leadData?: {
    name: string;
    phone: string;
    practiceArea: string;
    chambers: string;
  };
}

const INITIAL_QUICK_OPTIONS = [
  { label: "🏛️ Property Title / Dispute", action: "domain:Property and Real Estate Law" },
  { label: "⚖️ Anticipatory Bail / Criminal", action: "domain:Criminal Law" },
  { label: "💳 Cyber Police Bank Freeze", action: "domain:Cyber Crime & Bank Freeze" },
  { label: "📜 High Court Writ / Appeal", action: "domain:High Court & Writ Practice" },
  { label: "🤝 Divorce / Family Court", action: "domain:Family and Matrimonial Law" },
  { label: "🏢 NCLT / Cheque Bounce / Corporate", action: "domain:Corporate and Commercial Law" },
  { label: "📍 Chambers Address & Contact", action: "faq:address" },
];

export function LegalLeadChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lead qualification state
  const [leadState, setLeadState] = useState<{
    step: "idle" | "awaiting_chambers" | "awaiting_details" | "awaiting_contact" | "completed";
    practiceArea: string;
    chambers: string;
    matterDetails: string;
    fullName: string;
    phone: string;
    email: string;
  }>({
    step: "idle",
    practiceArea: "",
    chambers: "Ernakulam (Kochi)",
    matterDetails: "",
    fullName: "",
    phone: "",
    email: "",
  });

  const [contactInputs, setContactInputs] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Greetings. I am the Lexlead Legal Assistant for our Ernakulam (Kochi) and Thiruvananthapuram chambers.\n\nHow may our advocates assist your legal matter today? Please select an area below or type your question:",
      timestamp: "Just now",
      quickOptions: INITIAL_QUICK_OPTIONS,
    },
  ]);

  // Show gentle invitation badge after 2.5 seconds if user hasn't opened yet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted && !isOpen) {
        setShowNotificationBadge(true);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [hasInteracted, isOpen]);

  // Auto scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasInteracted(true);
    setShowNotificationBadge(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Process user selecting a quick chip or typing a message
  const handleAction = async (action: string, label: string) => {
    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: label,
      timestamp: "Just now",
    };
    setMessages((prev) => [...prev, userMsg]);

    if (action.startsWith("domain:")) {
      const domain = action.replace("domain:", "");
      setLeadState((prev) => ({
        ...prev,
        practiceArea: domain,
        step: "awaiting_chambers",
      }));

      let proceduralNote = "";
      if (domain.includes("Cyber")) {
        proceduralNote = "Under Kerala High Court rulings (Dr. Sajeer v. RBI), bank account freezes must be restricted solely to the disputed lien amount. Our advocates regularly file defreezing applications before High Court & Magistrates.";
      } else if (domain.includes("Criminal")) {
        proceduralNote = "For anticipatory bail under Section 482 BNSS or FIR quashing under Section 528 BNSS, our advocates appear before the Kerala High Court and Sessions Courts daily.";
      } else if (domain.includes("Property")) {
        proceduralNote = "We conduct comprehensive 30-year Encumbrance Certificate (EC) verification, title scrutiny, wetland act checks, and handle partition/injunction suits.";
      } else if (domain.includes("Family")) {
        proceduralNote = "We provide compassionate, discreet counsel for mutual consent divorce (Section 13B), child custody, and maintenance under Supreme Court Rajnesh v. Neha guidelines.";
      } else if (domain.includes("Corporate")) {
        proceduralNote = "We represent corporate creditors and companies before NCLT Kochi Bench (Section 7 & 9 IBC) and handle Section 138 NI Act cheque recovery.";
      } else {
        proceduralNote = "Our chambers represent clients in civil litigation, writ petitions under Article 226, and appellate practice.";
      }

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: `${proceduralNote}\n\nWhich of our chambers is most convenient for your consultation?`,
            timestamp: "Just now",
            quickOptions: [
              { label: "📍 Ernakulam (Kochi) Chambers", action: "chambers:Ernakulam (Kochi)" },
              { label: "📍 Thiruvananthapuram Chambers", action: "chambers:Thiruvananthapuram" },
              { label: "🌐 Virtual / NRI Consultation", action: "chambers:Virtual / NRI" },
            ],
          },
        ]);
      }, 500);
      return;
    }

    if (action.startsWith("chambers:")) {
      const chambers = action.replace("chambers:", "");
      setLeadState((prev) => ({
        ...prev,
        chambers,
        step: "awaiting_details",
      }));

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: `Selected: ${chambers} Chambers.\n\nPlease provide a brief 1-2 sentence outline of your matter (or any upcoming court date / notice received), or select an option below:`,
            timestamp: "Just now",
            quickOptions: [
              { label: "🚨 Urgent Court Notice / Summons received", action: "detail:Urgent court notice received requiring immediate counsel" },
              { label: "📑 Need document review / legal opinion", action: "detail:Requires legal document scrutiny and advisory opinion" },
              { label: "🤝 Need to schedule chamber appointment", action: "detail:Seeking in-person advocate chamber consultation" },
            ],
          },
        ]);
      }, 500);
      return;
    }

    if (action.startsWith("detail:")) {
      const detail = action.replace("detail:", "");
      setLeadState((prev) => ({
        ...prev,
        matterDetails: detail,
        step: "awaiting_contact",
      }));

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: `Understood. To arrange an initial evaluation with a designated advocate from our ${leadState.chambers} chambers, please enter your contact details below:`,
            timestamp: "Just now",
          },
        ]);
      }, 500);
      return;
    }

    if (action.startsWith("faq:")) {
      const topic = action.replace("faq:", "");
      let response = "";
      if (topic === "address") {
        response = "🏛️ **Chambers Registry Locations:**\n\n• **Main Office (Ernakulam / Kochi):**\n2nd Floor, T K Tower, Chittoor Rd, Padma Junction, Pullepady, Kochi – 682035.\n(Direct connectivity to Kerala High Court & Ernakulam North/South)\n\n• **Branch Chambers (Thiruvananthapuram):**\nGround Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram – 695035.\n(Immediate walking distance to Vanchiyoor Court Complex)\n\nOffice Hours: Mon–Fri 9:30 AM – 6:30 PM | Sat 10:00 AM – 2:00 PM.";
      }

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: response,
            timestamp: "Just now",
            quickOptions: [
              { label: "Book a Consultation", action: "domain:General Chamber Consultation" },
              { label: "Call Kochi Chambers", action: "call:kochi" },
              { label: "Call Trivandrum Chambers", action: "call:tvm" },
            ],
          },
        ]);
      }, 500);
      return;
    }

    if (action === "call:kochi") {
      window.location.href = "tel:7907224126";
      return;
    }

    if (action === "call:tvm") {
      window.location.href = "tel:04713161884";
      return;
    }

    if (action === "restart") {
      setLeadState({
        step: "idle",
        practiceArea: "",
        chambers: "Ernakulam (Kochi)",
        matterDetails: "",
        fullName: "",
        phone: "",
        email: "",
      });
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "Let's start over. What legal matter can we assist you with in Kerala?",
          timestamp: "Just now",
          quickOptions: INITIAL_QUICK_OPTIONS,
        },
      ]);
      return;
    }
  };

  // Handle free-form user message input
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const query = inputValue.trim();
    setInputValue("");

    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Just now",
    };
    setMessages((prev) => [...prev, userMsg]);

    // If currently awaiting matter details in lead flow
    if (leadState.step === "awaiting_details") {
      setLeadState((prev) => ({
        ...prev,
        matterDetails: query,
        step: "awaiting_contact",
      }));
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: "bot",
            text: `Thank you for sharing the summary. To have our advocates review your matter and contact you confidentially, please provide your contact details below:`,
            timestamp: "Just now",
          },
        ]);
      }, 500);
      return;
    }

    // Natural Language FAQ matcher
    const lower = query.toLowerCase();
    let reply = "";
    let options: { label: string; action: string }[] | undefined;

    if (lower.includes("office") || lower.includes("address") || lower.includes("location") || lower.includes("where")) {
      reply = "Our principal chambers are located at **Padma Junction, Ernakulam (Kochi)** and our branch chambers are at **Vanchiyoor, Thiruvananthapuram** (near the District & Sessions Court complex). Consultations are available both in-person and virtually.";
      options = [
        { label: "Book Consultation", action: "domain:General Chamber Consultation" },
        { label: "View Chambers Address", action: "faq:address" },
      ];
    } else if (lower.includes("fee") || lower.includes("cost") || lower.includes("charge") || lower.includes("price")) {
      reply = "In compliance with Bar Council of India standards, legal fees depend strictly on the forum (High Court, Trial Court, NCLT), nature of proceedings, and complexity of documentation. We conduct a preliminary assessment and provide a transparent, upfront engagement estimate with zero hidden costs.";
      options = [
        { label: "Request Fee Assessment", action: "domain:General Chamber Consultation" },
      ];
    } else if (lower.includes("bail") || lower.includes("arrest") || lower.includes("fir") || lower.includes("police") || lower.includes("criminal")) {
      reply = "For urgent criminal defense, anticipatory bail under Section 482 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) or FIR quashing, our criminal litigation team moves petitions promptly before the Sessions Court and Kerala High Court.";
      options = [
        { label: "Consult on Criminal / Bail", action: "domain:Criminal Law" },
        { label: "Call Emergency Defense", action: "call:kochi" },
      ];
    } else if (lower.includes("bank") || lower.includes("freeze") || lower.includes("cyber") || lower.includes("p2p") || lower.includes("1930")) {
      reply = "Under the Kerala High Court judgment in *Dr. Sajeer v. RBI (2024)*, cyber police cannot freeze an entire account; debit restrictions must be confined strictly to the disputed lien amount. We regularly file defreezing petitions before the High Court.";
      options = [
        { label: "Unfreeze Bank Account", action: "domain:Cyber Crime & Bank Freeze" },
      ];
    } else if (lower.includes("property") || lower.includes("land") || lower.includes("ec") || lower.includes("title")) {
      reply = "Our property lawyers conduct exhaustive 30-year Encumbrance Certificate (EC) verification, prior deeds scrutiny, Pokkuvaravu mutation checks, and Kerala Wetland Act clearance.";
      options = [
        { label: "Verify Property Title", action: "domain:Property and Real Estate Law" },
      ];
    } else if (lower.includes("phone") || lower.includes("number") || lower.includes("contact")) {
      reply = "You can reach our chambers directly at:\n• Kochi: +91 79072 24126 / +91 95676 53357\n• Thiruvananthapuram: +91 471 316 1884\n• Email: lexleadlegal@gmail.com";
      options = [
        { label: "Call Kochi", action: "call:kochi" },
        { label: "Call Trivandrum", action: "call:tvm" },
      ];
    } else {
      reply = `Thank you for your inquiry regarding "${query}". Our advocates at Ernakulam and Thiruvananthapuram can evaluate your facts and advise the next legal steps. Would you like to schedule a confidential preliminary consultation?`;
      options = [
        { label: "Yes, Schedule Consultation", action: "domain:General Consultation" },
        { label: "View Chambers Contact", action: "faq:address" },
      ];
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: reply,
          timestamp: "Just now",
          quickOptions: options,
        },
      ]);
    }, 450);
  };

  // Submit Lead form to backend /api/contact
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInputs.fullName || !contactInputs.phone) return;

    setIsSubmitting(true);

    try {
      const payload = {
        fullName: contactInputs.fullName,
        phone: contactInputs.phone,
        email: contactInputs.email || `client-${contactInputs.phone.replace(/[^0-9]/g, "")}@consultation.lexleadlegal.in`,
        practiceArea: leadState.practiceArea || "General Chamber Consultation",
        preferredChambers: leadState.chambers || "Ernakulam (Kochi)",
        message: leadState.matterDetails || "Consultation requested via Lexlead Chatbot Assistant.",
        privacyConsent: true,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        const refId = result.referenceId || `LEX-${Date.now().toString(36).toUpperCase()}`;

        setLeadState((prev) => ({ ...prev, step: "completed" }));

        setMessages((prev) => [
          ...prev,
          {
            id: `bot-success-${Date.now()}`,
            sender: "bot",
            text: `✅ Consultation Request Logged Successfully!\n\n**Reference:** ${refId}\n**Client:** ${contactInputs.fullName}\n**Phone:** ${contactInputs.phone}\n**Chambers:** ${leadState.chambers}\n**Practice Area:** ${leadState.practiceArea || "General Consultation"}\n\nOur chamber registry has dispatched your brief to a designated advocate. You will receive a confidential call within one business day.`,
            timestamp: "Just now",
            isSuccessCard: true,
            referenceId: refId,
            leadData: {
              name: contactInputs.fullName,
              phone: contactInputs.phone,
              practiceArea: leadState.practiceArea || "General Consultation",
              chambers: leadState.chambers,
            },
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-error-${Date.now()}`,
            sender: "bot",
            text: `⚠️ ${result.error || "Unable to submit enquiry at this moment."} Please call our chambers directly at +91 79072 24126 for immediate assistance.`,
            timestamp: "Just now",
            quickOptions: [
              { label: "Call Kochi Chambers", action: "call:kochi" },
              { label: "Call Trivandrum Chambers", action: "call:tvm" },
            ],
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-error-${Date.now()}`,
          sender: "bot",
          text: "⚠️ Network connectivity issue. Please reach our chambers directly by phone at +91 79072 24126 or +91 471 316 1884.",
          timestamp: "Just now",
        },
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button: Positioned above MobileConversionBar on mobile with iOS safe area clearance */}
      <div className="fixed bottom-[84px] sm:bottom-6 right-3 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3">
        {/* Subtle Welcome Tooltip Badge */}
        {showNotificationBadge && !isOpen && (
          <div
            onClick={handleOpen}
            className="hidden sm:flex items-center gap-2.5 bg-[#10253D] text-white py-2.5 px-4 rounded-full shadow-xl border border-[#C6A15B]/40 cursor-pointer hover:border-[#C6A15B] transition-all animate-fade-in group"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-medium text-[#F7F5F0]">
              Need legal guidance in Kerala? <strong className="text-[#C6A15B] font-semibold">Consult Assistant</strong>
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowNotificationBadge(false);
              }}
              className="text-white/60 hover:text-white ml-1"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Floating Chat Trigger Button */}
        <button
          onClick={() => (isOpen ? handleClose() : handleOpen())}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#10253D] hover:bg-[#1A365D] text-white shadow-2xl border-2 border-[#C6A15B] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#C6A15B]/30"
          aria-label={isOpen ? "Close Legal Assistant" : "Open Legal Assistant"}
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#C6A15B] transition-transform group-hover:rotate-90 duration-200" />
          ) : (
            <>
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#C6A15B] group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C6A15B] text-[#10253D] rounded-full text-[10px] font-bold flex items-center justify-center shadow-md">
                1
              </span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-[88px] sm:bottom-24 right-2 sm:right-6 z-50 w-[95vw] sm:w-[410px] max-w-[420px] h-[550px] sm:h-[600px] max-h-[80vh] sm:max-h-[85vh] bg-[#F7F5F0] rounded-sm shadow-2xl border border-[#E8E1D5] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Chat Header */}
          <div className="bg-[#10253D] text-white p-4 flex items-center justify-between border-b border-[#C6A15B]/40 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1A365D] border border-[#C6A15B]/60 flex items-center justify-center text-[#C6A15B]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif-luxury text-base font-semibold text-white tracking-wide">
                    Lexlead Legal Assistant
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block" title="Online" />
                </div>
                <p className="text-[10px] text-[#AAB4C3]">
                  Ernakulam & Thiruvananthapuram Chambers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href="tel:7907224126"
                className="p-1.5 rounded hover:bg-white/10 text-[#C6A15B] transition-colors"
                title="Direct Emergency Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={handleClose}
                className="p-1.5 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Close Chatbot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bar Council of India Compliance Banner */}
          <div className="bg-[#0B1728] px-3.5 py-1.5 text-[9px] text-[#AAB4C3] border-b border-[#C6A15B]/20 flex items-center gap-1.5 shrink-0">
            <ShieldCheck className="w-3 h-3 text-[#C6A15B] shrink-0" />
            <span>Advocates Act & BCI Rule 36: Strictly informational & scheduling.</span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-sm p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#10253D] text-white rounded-br-none"
                      : "bg-white text-[#10253D] border border-[#E8E1D5] rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Render Success Card with WhatsApp and Call Actions */}
                  {msg.isSuccessCard && msg.leadData && (
                    <div className="mt-3 pt-3 border-t border-[#E8E1D5] space-y-2">
                      <a
                        href={`https://wa.me/917907224126?text=${encodeURIComponent(
                          `Hello Lexlead Legal Solutions, I submitted enquiry [${msg.referenceId}] regarding ${msg.leadData.practiceArea} for ${msg.leadData.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 rounded bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Message on WhatsApp</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href="tel:7907224126"
                        className="w-full py-2 px-3 rounded bg-[#10253D] hover:bg-[#1A365D] text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#C6A15B]"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Direct Call: +91 79072 24126</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Quick Option Chips */}
                {msg.quickOptions && msg.quickOptions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.quickOptions.map((opt) => (
                      <button
                        key={opt.action}
                        onClick={() => handleAction(opt.action, opt.label)}
                        className="text-[11px] px-2.5 py-1.5 rounded-sm bg-white hover:bg-[#10253D] text-[#10253D] hover:text-white border border-[#E8E1D5] hover:border-[#10253D] font-medium transition-all shadow-xs text-left"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[9px] text-[#AAB4C3] mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Embedded Lead Form when step is awaiting_contact */}
            {leadState.step === "awaiting_contact" && (
              <form
                onSubmit={handleLeadSubmit}
                className="bg-white p-4 rounded-sm border-2 border-[#C6A15B] shadow-md space-y-3 animate-in fade-in duration-300"
              >
                <div className="flex items-center justify-between pb-1 border-b border-[#F0EBE0]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B18A4A]">
                    SCHEDULE ADVOCATE CONSULTATION
                  </span>
                  <span className="text-[10px] text-[#626B76]">Step 3 of 3</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#10253D] block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInputs.fullName}
                    onChange={(e) =>
                      setContactInputs({ ...contactInputs, fullName: e.target.value })
                    }
                    placeholder="Advocate will address you by name"
                    className="w-full px-3 py-1.5 text-xs rounded bg-[#F7F5F0] border border-[#E8E1D5] focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#10253D] block">
                    Phone Number (with WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactInputs.phone}
                    onChange={(e) =>
                      setContactInputs({ ...contactInputs, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-1.5 text-xs rounded bg-[#F7F5F0] border border-[#E8E1D5] focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#10253D] block">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={contactInputs.email}
                    onChange={(e) =>
                      setContactInputs({ ...contactInputs, email: e.target.value })
                    }
                    placeholder="For chamber confirmation copy"
                    className="w-full px-3 py-1.5 text-xs rounded bg-[#F7F5F0] border border-[#E8E1D5] focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded bg-[#10253D] hover:bg-[#1A365D] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </>
                  )}
                </button>

                <p className="text-[9px] text-[#8C98A9] text-center leading-tight">
                  Confidential. Covered by attorney-client preliminary privilege.
                </p>
              </form>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Bar */}
          <div className="p-3 bg-white border-t border-[#E8E1D5] shrink-0">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question or matter details..."
                className="flex-1 px-3 py-2 text-xs rounded-sm bg-[#F7F5F0] border border-[#E8E1D5] focus:outline-none focus:border-[#C6A15B] text-[#10253D] placeholder-[#8C98A9]"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-8 h-8 rounded bg-[#10253D] hover:bg-[#1A365D] text-[#C6A15B] disabled:opacity-40 flex items-center justify-center transition-colors shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-[#8C98A9] mt-2 pt-1 border-t border-[#F0EBE0]">
              <button
                onClick={() => handleAction("restart", "Restart Assistant")}
                className="hover:text-[#10253D] underline"
              >
                Restart Chat
              </button>
              <div className="flex items-center gap-2">
                <a href="tel:7907224126" className="text-[#B18A4A] font-semibold hover:underline">
                  Kochi: 79072 24126
                </a>
                <span>•</span>
                <a href="tel:04713161884" className="text-[#B18A4A] font-semibold hover:underline">
                  TVM: 0471 316 1884
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
