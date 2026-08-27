import React from 'react';

interface GlowingBorderCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  glowOnHoverOnly?: boolean;
}

export const GlowingBorderCard: React.FC<GlowingBorderCardProps> = ({
  children,
  className = '',
  innerClassName = '',
  glowOnHoverOnly = false,
}) => {
  return (
    <div
      className={`group relative rounded-3xl p-[1.5px] overflow-hidden transition-all duration-300 ${
        glowOnHoverOnly ? 'hover:scale-[1.01]' : ''
      } ${className}`}
    >
      {/* Animated Conic Glow Layer */}
      <div
        className={`absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#38bdf8_320deg,#10b981_360deg)] ${
          glowOnHoverOnly
            ? 'opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-300'
            : 'animate-spin-slow opacity-100'
        }`}
      />

      {/* Card Content Surface */}
      <div
        className={`relative rounded-[calc(1.5rem-1.5px)] z-10 bg-white dark:bg-slate-900 h-full w-full ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};
