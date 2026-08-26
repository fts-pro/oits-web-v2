import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ShieldCheck, AlertOctagon, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { ACCOUNTABILITY_MATRIX, PRIMARY_CTA } from '../../data/governedData';

export const metadata: Metadata = {
  title: 'AI & Engineering Governance',
  description: 'How OITS utilizes AI tools for developer acceleration while enforcing strict human oversight, client data isolation, and prohibited use policies.',
};

export default function AiPage() {
  const prohibitedUses = [
    'Submitting proprietary client source code, database dumps, or credentials to public LLM endpoints.',
    'Merging raw, un-reviewed AI-generated code directly into production branches.',
    'Relying on generative AI for cryptographic keys, security perimeter definitions, or compliance audits without human sign-off.',
    'Allowing AI models to write characterization tests without independent validation against production requirements.'
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 sm:py-16 space-y-16 text-left">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Applied AI Policy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          AI does more of the work. A named engineer still signs it off.
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          We embrace modern AI tools for developer velocity, boilerplate generation, and syntax discovery, while maintaining strict client data privacy and non-negotiable human accountability for every pull request.
        </p>
      </div>

      {/* Prohibited Uses Section */}
      <div className="p-8 sm:p-10 rounded-3xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 space-y-6">
        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-mono text-xs font-bold uppercase">
          <AlertOctagon className="w-4 h-4" />
          <span>Prohibited AI Uses & Client Data Protections</span>
        </div>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          The following practices are strictly banned across all OITS client engagements:
        </p>
        <div className="grid grid-cols-1 gap-3">
          {prohibitedUses.map((use, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/40 text-xs">
              <span className="text-red-500 font-bold font-mono">✕</span>
              <span className="text-slate-800 dark:text-slate-200 leading-relaxed">{use}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Accountability Matrix */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Where AI Accelerates vs. Where Humans Own Outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACCOUNTABILITY_MATRIX.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase text-sky-600 dark:text-sky-400">{item.area}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400"><strong className="text-slate-800 dark:text-slate-200">AI Role:</strong> {item.aiRole}</p>
              <p className="text-xs text-slate-800 dark:text-slate-200"><strong className="text-emerald-600 dark:text-emerald-400">Human Engineer Role:</strong> {item.humanEngineerRole}</p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                ✓ {item.guarantee}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Data Isolation */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Lock className="w-4 h-4 text-sky-400" />
          <span>Enterprise Zero-Data Retention SLA</span>
        </h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Where AI assistance is configured for private development (e.g. self-hosted models or enterprise API contracts), zero-data retention (ZDR) clauses are strictly enforced to guarantee client IP and code are never used to train public foundational models.
        </p>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-950 dark:text-white">Questions about our AI governance?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Book a 90-minute Delivery Review to discuss security standards.</p>
        </div>
        <Link
          href={PRIMARY_CTA.href}
          className="px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0"
        >
          {PRIMARY_CTA.label}
        </Link>
      </div>

    </div>
  );
}
