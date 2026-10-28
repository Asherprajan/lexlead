"use client";

import React, { useState } from "react";
import { MapPin, Navigation, ExternalLink, Building2 } from "lucide-react";

export type BranchId = "kochi" | "trivandrum";

export interface BranchInfo {
  id: BranchId;
  name: string;
  tag: string;
  address: string;
  fullAddress: string;
  mapSrc: string;
  directionsUrl: string;
}

export const BRANCHES: Record<BranchId, BranchInfo> = {
  kochi: {
    id: "kochi",
    name: "Ernakulam (Kochi)",
    tag: "Main Office",
    address: "2nd Floor, T K Tower, Chittoor Rd, Padma Junction, Pullepady",
    fullAddress:
      "2nd Floor, T K Tower, Chittoor Rd, Padma Junction, Pullepady, Kochi, Ernakulam, Kerala – 682035",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31435.443681939414!2d76.26398062468832!3d9.981255856918327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08130003e5dd09%3A0x7a558883a44f82c4!2sLexlead%20Legal%20Solutions!5e0!3m2!1sen!2sin!4v1793193810076!5m2!1sen!2sin",
    directionsUrl:
      "https://maps.google.com/?q=Lexlead+Legal+Solutions+TK+Tower+Chittoor+Rd+Padma+Junction+Pullepady+Kochi+Kerala+682035",
  },
  trivandrum: {
    id: "trivandrum",
    name: "Thiruvananthapuram",
    tag: "Branch Office",
    address: "Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor",
    fullAddress:
      "Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram, Kerala – 695035",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.029208334732!2d76.9357891!3d8.4965408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb26d11045cd%3A0x998f1cb32e2f6110!2s!5e0!3m2!1sen!2sin!4v1792669001255!5m2!1sen!2sin",
    directionsUrl:
      "https://maps.google.com/?q=Vinayaka+Building+V+V+Road+Opp+Rainbow+Apartments+Vanchiyoor+Thiruvananthapuram+Kerala+695035",
  },
};

interface ChambersMapProps {
  className?: string;
  height?: string;
  showDetails?: boolean;
  defaultBranch?: BranchId;
}

export const ChambersMap: React.FC<ChambersMapProps> = ({
  className = "",
  height = "h-[320px] sm:h-[380px] lg:h-[420px]",
  showDetails = true,
  defaultBranch = "kochi",
}) => {
  const [activeBranch, setActiveBranch] = useState<BranchId>(defaultBranch);
  const current = BRANCHES[activeBranch];

  return (
    <div
      className={`relative rounded-sm overflow-hidden border border-[#E8E1D5] bg-[#EFECE6] shadow-sm ${className}`}
    >
      {/* Branch Tabs Header */}
      <div className="bg-[#10253D] px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b border-white/10">
        <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>Select Chambers Location</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {(Object.keys(BRANCHES) as BranchId[]).map((key) => {
            const b = BRANCHES[key];
            const isActive = activeBranch === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveBranch(key)}
                className={`text-xs px-3 py-1.5 rounded transition-all font-medium flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-[#C6A15B] text-[#10253D] font-semibold shadow-sm"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                }`}
              >
                <MapPin className={`w-3 h-3 ${isActive ? "text-[#10253D]" : "text-[#C6A15B]"}`} />
                <span>{b.name}</span>
                <span
                  className={`text-[9px] uppercase tracking-wider px-1 py-0.2 rounded font-semibold ${
                    isActive ? "bg-[#10253D]/15 text-[#10253D]" : "bg-black/30 text-white/70"
                  }`}
                >
                  {b.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Iframe */}
      <div className={`w-full ${height} relative`}>
        <iframe
          key={current.id}
          src={current.mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title={`Lexlead Legal Solutions — ${current.name} (${current.tag})`}
          className="w-full h-full grayscale-[10%] contrast-[105%]"
        />
      </div>

      {/* Floating Info Badge / Overlay */}
      {showDetails && (
        <div className="p-4 sm:p-5 bg-white border-t border-[#E8E1D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5 rounded">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold text-[#10253D] uppercase tracking-wider">
                  {current.name} Chambers
                </p>
                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] font-semibold">
                  {current.tag}
                </span>
              </div>
              <p className="text-xs text-[#626B76] mt-1">
                {current.fullAddress}
              </p>
            </div>
          </div>

          <a
            href={current.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#10253D] bg-[#F7F5F0] hover:bg-[#C59B51] hover:text-white border border-[#CBD5E1] hover:border-[#C59B51] transition-colors shrink-0 rounded-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
          </a>
        </div>
      )}
    </div>
  );
};
