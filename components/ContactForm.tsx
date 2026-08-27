'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { GlowingBorderCard } from './GlowingBorderCard';

interface ContactFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isModal, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onClose) {
      setTimeout(onClose, 2000);
    }
  };

  return (
    <GlowingBorderCard glowOnHoverOnly={false} className="shadow-2xl">
      <div className="p-8 sm:p-10 space-y-6 bg-white dark:bg-slate-900 rounded-[calc(1.5rem-1.5px)] text-left">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-500">
            Direct Inquiry Form
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
            Request a Consultation or Delivery Review
          </h2>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Inquiry Received Successfully</span>
            </div>
            <p className="text-xs leading-relaxed">
              Thank you for reaching out. A lead systems architect will examine your specifications and reply with an initial recommendations memo within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Erik Lindqvist"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="erik@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                  Organization / Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Nordic Pay AB"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                  Primary Technical Requirement
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option>Legacy Monolith Modernisation</option>
                  <option>New Critical Web/Mobile Build</option>
                  <option>SRE & Infrastructure Pods</option>
                  <option>90-Minute Delivery Review</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                Describe your system, timeline, or technical bottleneck *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Provide context regarding current tech stack, concurrent throughput, migration goals, or blockers..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl active:scale-98"
            >
              <span>Submit Technical Inquiry</span>
              <Send className="w-3.5 h-3.5 text-sky-400 dark:text-sky-600" />
            </button>

            <p className="text-[11px] font-mono text-slate-400 text-center">
              Protected under strict confidentiality. We do not sell or share contact details.
            </p>
          </form>
        )}
      </div>
    </GlowingBorderCard>
  );
};
