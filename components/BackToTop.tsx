'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-slate-900/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-slate-950 border border-slate-700/60 dark:border-slate-300/80 hover:border-sky-500 shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};
