'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Lock, 
  ArrowRight,
  Clock,
  UserCheck
} from 'lucide-react';
import { CONTACT_EMAIL, LEGAL_ENTITY_NAME } from '../../data/governedData';

export default function StartPage() {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    systemType: 'Legacy Monolith Modernisation',
    challengeDescription: '',
    ndaRequired: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail.trim())) {
      errs.workEmail = 'Please provide a valid work email address';
    }
    if (!formData.challengeDescription.trim()) {
      errs.challengeDescription = 'Please briefly summarize your system challenge or roadmap bottleneck';
    } else if (formData.challengeDescription.trim().length < 15) {
      errs.challengeDescription = 'Please provide at least a couple sentences of context (min 15 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Direct mailto fallback / API submit dispatch
      const subject = encodeURIComponent(`[Delivery Review Request] ${formData.company || formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Work Email: ${formData.workEmail}\n` +
        `Company: ${formData.company}\n` +
        `Challenge Area: ${formData.systemType}\n` +
        `NDA Requested: ${formData.ndaRequired ? 'Yes' : 'No'}\n\n` +
        `Description:\n${formData.challengeDescription}`
      );

      // Open email client or record inquiry
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      
      setIsSubmitted(true);
    } catch (err: any) {
      setSubmissionError('Unable to open mail client automatically. Please email info@oitsdhaka.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16 space-y-12 text-left">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>Primary Conversion</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Book a 90-Minute Delivery Review.
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          A focused, confidential technical session with our Lead Systems Architect to analyze your codebase, bottlenecks, or greenfield scope. Zero sales fluff.
        </p>
      </div>

      {/* Main Grid: Form + Trust Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Form Column (2 Cols) */}
        <div className="lg:col-span-2">
          {isSubmitted ? (
            <div className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Delivery Review Initiated
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your email client was triggered with your review request. Tanvir Hossain (Technical Director) will confirm your session within 1 business day.
              </p>
              <div className="pt-4 border-t border-emerald-500/20 text-xs font-mono text-slate-600 dark:text-slate-400">
                Direct inquiry backup: <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-bold">{CONTACT_EMAIL}</a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
              
              {submissionError && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{submissionError}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                    {errors.workEmail && <p className="text-[11px] text-red-500 mt-1">{errors.workEmail}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. FinTech Corp"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Primary Area of Focus
                  </label>
                  <select
                    value={formData.systemType}
                    onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Legacy Monolith Modernisation">Modernise: Monolith Decoupling / Legacy Refactoring</option>
                    <option value="Greenfield Critical Application">Build: Greenfield Web / Mobile Engineering</option>
                    <option value="SRE & Reliability Operations">Operate: SRE & Reliability Operations</option>
                    <option value="Architecture & AI Governance">AI Governance & Architecture Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    What is currently blocking your delivery? *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.challengeDescription}
                    onChange={(e) => setFormData({ ...formData, challengeDescription: e.target.value })}
                    placeholder="Briefly describe your database locks, legacy migration constraints, deployment cadence issues, or timeline targets..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                  {errors.challengeDescription && <p className="text-[11px] text-red-500 mt-1">{errors.challengeDescription}</p>}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="nda"
                    checked={formData.ndaRequired}
                    onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                    className="w-4 h-4 rounded text-sky-500 focus:ring-sky-500"
                  />
                  <label htmlFor="nda" className="text-xs text-slate-700 dark:text-slate-300 select-none">
                    Send standard mutual NDA prior to our session
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-md active:scale-98"
              >
                <span>{isSubmitting ? 'Preparing Review...' : 'Book Delivery Review (90 Mins)'}</span>
                <ArrowRight className="w-4 h-4 text-sky-400 dark:text-sky-600" />
              </button>

              <p className="text-[10px] text-slate-400 font-mono text-center">
                We respect your privacy. No marketing newsletters, no third-party data broker sharing.
              </p>
            </form>
          )}
        </div>

        {/* Trust Sidebar (1 Col) */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-xs font-mono uppercase font-bold text-sky-500">
              Session Format & Agenda
            </h3>
            <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>00–20m:</strong> Deep-dive into your system bottlenecks & roadmap goals.</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>20–60m:</strong> Architectural review & potential decoupling patterns.</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>60–90m:</strong> Concrete delivery roadmap and risk-reduction recommendations.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold text-slate-950 dark:text-white">Named Lead Responder</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Every request is reviewed directly by <strong>Tanvir Hossain</strong>, Technical Director at {LEGAL_ENTITY_NAME}.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-bold text-white">Confidentiality Guarantee</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              All architectural notes and conversations are strictly confidential and governed by non-disclosure agreements.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
