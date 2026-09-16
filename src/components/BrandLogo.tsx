import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  type?: 'emblem' | 'full';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  type = 'emblem',
  className = '',
}) => {
  const isLight = variant === 'light';

  // Dimension configurations
  const emblemSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  const fullLogoSizes = {
    sm: 'h-10 max-w-[150px]',
    md: 'h-12 sm:h-14 max-w-[200px]',
    lg: 'h-16 sm:h-20 max-w-[260px]',
    xl: 'h-24 sm:h-28 max-w-[340px]',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base font-extrabold',
    md: 'text-base sm:text-lg font-extrabold',
    lg: 'text-xl sm:text-2xl font-black',
    xl: 'text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs',
    xl: 'text-xs sm:text-sm',
  };

  // If user requests full logo banner
  if (type === 'full') {
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <img
          src="/fusena-logo.svg"
          alt="Logo Resmi CV. FUSENA JAYA"
          className={`${fullLogoSizes[size]} object-contain drop-shadow-sm`}
          referrerPolicy="no-referrer"
        />
        {showSubtitle && (
          <p
            className={`${subSizes[size]} font-semibold tracking-wider uppercase mt-1.5 whitespace-nowrap ${
              isLight ? 'text-emerald-300' : 'text-emerald-700'
            }`}
          >
            Biro Perjalanan Wisata &amp; Event Organizer
          </p>
        )}
      </div>
    );
  }

  // Default: Official emblem + Crisp typography
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Vector Emblem with tropical tree, golden sun, mountain, and ocean wave */}
      <div
        className={`${emblemSizes[size]} flex-shrink-0 flex items-center justify-center p-1 rounded-2xl transition-transform hover:scale-105 ${
          isLight
            ? 'bg-slate-900/60 border border-slate-700/60 shadow-inner'
            : 'bg-white border border-slate-200/80 shadow-sm'
        }`}
      >
        <img
          src="/fusena-emblem.svg"
          alt="Lambang CV. FUSENA JAYA"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`${titleSizes[size]} tracking-tight leading-tight ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
          >
            CV. FUSENA JAYA
          </span>
        </div>
        {showSubtitle && (
          <p
            className={`${subSizes[size]} font-semibold tracking-wide whitespace-nowrap ${
              isLight ? 'text-emerald-300' : 'text-emerald-700'
            }`}
          >
            — Biro Perjalanan Wisata &amp; Event Organizer —
          </p>
        )}
      </div>
    </div>
  );
};
