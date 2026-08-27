'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck,
  AlertTriangle,
  FileCheck
} from 'lucide-react';
import { PRIMARY_CTA, ServiceOutcome } from '../data/governedData';

interface ServiceModalProps {
  service: ServiceOutcome | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 text-left shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Capability Architecture Deep-Dive</span>
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {service.title}
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Problem Statement */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Context & Friction:</span>
          <p>{service.problemStatement}</p>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Governed Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Target Situations vs Scope Exclusions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <div className="space-y-2 text-xs">
            <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Target Situations</span>
            </span>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
              {service.targetSituations.map((sit, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>{sit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 text-xs">
            <span className="font-mono font-bold text-amber-600 dark:text-amber-400 uppercase text-[11px] flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              <span>Explicit Exclusions</span>
            </span>
            <ul className="space-y-1.5 text-slate-500 dark:text-slate-400">
              {service.exclusions.map((exc, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-500 font-bold">✕</span>
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Model: <strong className="text-slate-900 dark:text-white">{service.deliveryModel}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={PRIMARY_CTA.href}
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md active:scale-95 group"
            >
              <span>{PRIMARY_CTA.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-sky-400 dark:text-sky-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
