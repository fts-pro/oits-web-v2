'use client';

import React from 'react';

export interface BrandLogoProps {
  theme?: 'light' | 'dark' | 'auto';
  variant?: 'full' | 'icon';
  className?: string;
  height?: number | string;
  showText?: boolean;
}

/**
 * Official OITS Dhaka Brand Logo Component
 * - Light Mode: Deep Navy Blue (#1D2A68) circular emblem with crisp Dark (#0B0F19) wordmark
 * - Dark Mode: Monochrome Pure White (#FFFFFF) emblem and wordmark
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = 'auto',
  className = '',
  height = 36,
}) => {
  const pixelHeight = typeof height === 'number' ? `${height}px` : height;

  if (theme === 'light') {
    return (
      <div className={`inline-flex items-center select-none ${className}`} style={{ height: pixelHeight }}>
        <img
          src="/assets/images/oits_logo_light.svg"
          alt="OITS Dhaka"
          style={{ height: pixelHeight }}
          className="w-auto object-contain block"
        />
      </div>
    );
  }

  if (theme === 'dark') {
    return (
      <div className={`inline-flex items-center select-none ${className}`} style={{ height: pixelHeight }}>
        <img
          src="/assets/images/oits_logo_dark.svg"
          alt="OITS Dhaka"
          style={{ height: pixelHeight }}
          className="w-auto object-contain block"
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ height: pixelHeight }}
    >
      {/* Light mode logo: visible by default, hidden in .dark */}
      <img
        src="/assets/images/oits_logo_light.svg"
        alt="OITS Dhaka"
        style={{ height: pixelHeight }}
        className="w-auto object-contain block dark:hidden"
      />
      {/* Dark mode logo: hidden by default, visible in .dark */}
      <img
        src="/assets/images/oits_logo_dark.svg"
        alt="OITS Dhaka"
        style={{ height: pixelHeight }}
        className="w-auto object-contain hidden dark:block"
      />
    </div>
  );
};
