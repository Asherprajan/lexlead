import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

interface ChambersMapProps {
  className?: string;
  height?: string;
  showDetails?: boolean;
}

export const ChambersMap: React.FC<ChambersMapProps> = ({
  className = "",
  height = "h-[320px] sm:h-[380px] lg:h-[420px]",
  showDetails = true,
}) => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.029208334732!2d76.9357891!3d8.4965408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb26d11045cd%3A0x998f1cb32e2f6110!2s!5e0!3m2!1sen!2sin!4v1792669001255!5m2!1sen!2sin";

  const directionsUrl =
    "https://maps.google.com/?q=Vinayaka+Building+V+V+Road+Opp+Rainbow+Apartments+Vanchiyoor+Thiruvananthapuram+Kerala+695035";

  return (
    <div
      className={`relative rounded-sm overflow-hidden border border-[#E8E1D5] bg-[#EFECE6] shadow-sm ${className}`}
    >
      {/* Map Iframe */}
      <div className={`w-full ${height}`}>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Lexlead Legal Solutions Chambers Location Map"
          className="w-full h-full grayscale-[15%] contrast-[105%]"
        />
      </div>

      {/* Floating Info Badge / Overlay */}
      {showDetails && (
        <div className="p-4 sm:p-5 bg-white border-t border-[#E8E1D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#F7F5F0] border border-[#E8E1D5] text-[#B18A4A] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#10253D] uppercase tracking-wider">
                Chambers Location
              </p>
              <p className="text-xs text-[#626B76] mt-0.5">
                Ground Floor, Vinayaka Building, V V Road, Opp. Rainbow Apartments, Vanchiyoor, Thiruvananthapuram
              </p>
            </div>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#10253D] bg-[#F7F5F0] hover:bg-[#C59B51] hover:text-white border border-[#CBD5E1] hover:border-[#C59B51] transition-colors shrink-0"
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
