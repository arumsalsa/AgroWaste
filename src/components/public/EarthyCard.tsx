"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, MapPin, LucideIcon } from "lucide-react";

export interface EarthyCardProps {
  href?: string;
  title: string;
  description?: string | null;
  badgeText?: string;
  badgeDotColorClass?: string; // e.g. "bg-land-accent" or "bg-sem-green"
  locationText?: string;
  rating?: number | string;
  imageUrl?: string | null;
  imageFallbackIcon?: LucideIcon;
  price?: string | number;
  unit?: string;
  ctaText?: string; // Text for bottom arrow CTA (e.g. "Lihat Detail")
  onCtaClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ctaLoading?: boolean;
  ctaSuccess?: boolean;
  ctaError?: boolean;
  ctaIcon?: LucideIcon;
  ctaSuccessIcon?: LucideIcon;
  ctaErrorIcon?: LucideIcon;
  decorativeIcon?: LucideIcon;
  className?: string;
}

export default function EarthyCard({
  href,
  title,
  description,
  badgeText,
  badgeDotColorClass = "bg-land-accent",
  locationText,
  rating,
  imageUrl,
  imageFallbackIcon: FallbackIcon,
  price,
  unit,
  ctaText,
  onCtaClick,
  ctaLoading = false,
  ctaSuccess = false,
  ctaError = false,
  ctaIcon: CtaIcon,
  ctaSuccessIcon: CtaSuccessIcon,
  ctaErrorIcon: CtaErrorIcon,
  decorativeIcon: DecorativeIcon,
  className = "",
}: EarthyCardProps) {
  const wrapperClass = `w-full bg-land-bg rounded-2xl p-4 border border-land-cream shadow-clay hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-clay-hover hover:border-land-accent/30 transition-all duration-300 flex flex-col group relative overflow-hidden cursor-pointer z-10 ${className}`;

  const inner = (<>
      {/* Decorative large translucent background line-art icon */}
      {DecorativeIcon && (
        <DecorativeIcon
          strokeWidth={1}
          className="absolute -bottom-4 -right-4 w-28 h-28 text-land-accent/8 pointer-events-none transition-transform duration-700 ease-out group-hover:rotate-12 group-hover:scale-105 z-0"
        />
      )}

      {/* Image container */}
      <div className="w-full h-56 rounded-xl overflow-hidden relative mb-4 bg-land-warm flex items-center justify-center border border-land-cream/40 shrink-0 z-10">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}

        {FallbackIcon && (
          <FallbackIcon className="w-16 h-16 text-land-secondary/20 relative z-10" />
        )}

        {/* Badges overlay on image */}
        {badgeText && (
          <div className="absolute top-3 left-3 bg-land-bg/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-land-ink border border-land-cream/30 shadow-sm flex items-center gap-1.5 z-20">
            <span className={`w-1.5 h-1.5 rounded-full ${badgeDotColorClass} shrink-0`} />
            <span>{badgeText}</span>
          </div>
        )}

        {rating && Number(rating) > 0 && (
          <div className="absolute top-3 right-3 bg-land-bg/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-land-ink border border-land-cream/30 shadow-sm flex items-center gap-1 z-20">
            <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
            <span className="font-tabular">{Number(rating).toFixed(1)}</span>
          </div>
        )}

        {locationText && (
          <div className="absolute bottom-3 left-3 bg-land-bg/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-land-ink border border-land-cream/30 shadow-sm flex items-center gap-1.5 z-20">
            <MapPin className="w-3.5 h-3.5 text-land-accent" />
            <span>{locationText}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 relative z-10">
        <h3 className="font-land-heading text-lg md:text-xl font-bold text-land-ink mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>
        
        {description && (
          <p className="text-land-muted text-sm mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}

        {/* Bottom / Action area */}
        <div className="mt-auto pt-4 border-t border-land-cream/30 flex items-end justify-between">
          {price && (
            <div>
              <div className="text-lg md:text-xl font-bold text-land-accent font-tabular leading-none mb-1">
                {price}
              </div>
              {unit && (
                <div className="text-xs font-bold text-land-muted">{unit}</div>
              )}
            </div>
          )}

          {/* Secondary Action (e.g. Add to Cart) */}
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              disabled={ctaLoading}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed z-20 ${
                ctaSuccess
                  ? "bg-land-accent text-white"
                  : ctaError
                  ? "bg-red-100 text-red-600"
                  : "bg-land-warm text-land-ink hover:bg-land-accent hover:text-white"
              }`}
            >
              {ctaSuccess ? (
                CtaSuccessIcon ? <CtaSuccessIcon className="w-5 h-5" /> : <span>✓</span>
              ) : ctaError ? (
                CtaErrorIcon ? <CtaErrorIcon className="w-5 h-5" /> : <span>✗</span>
              ) : (
                CtaIcon ? (
                  <CtaIcon className={`w-5 h-5 ${ctaLoading ? "animate-pulse" : ""}`} />
                ) : (
                  <span>+</span>
                )
              )}
            </button>
          ) : null}
        </div>

        {/* Arrow CTA text Link (slides to the right when hovered) */}
        {ctaText && (
          <div className="mt-4 flex items-center gap-1.5 text-sm font-bold text-land-accent transition-colors group-hover:text-land-accent-hover">
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        )}
      </div>
    </>);

  if (href) {
    return <Link href={href} className={wrapperClass}>{inner}</Link>;
  }
  return <div className={wrapperClass}>{inner}</div>;
}
