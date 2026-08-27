import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileCheck, Lock, CheckCircle2, Download, ArrowRight, ExternalLink } from 'lucide-react';
import { SECURITY_PRACTICES, PRIMARY_CTA, CONTACT_EMAIL } from '../../data/governedData';

export const metadata: Metadata = {
  title: 'Security Posture & Procurement Pack',
  description: 'Review OITS verified security practices, repository controls, dependency hygiene, and download our standard enterprise procurement pack.',
};

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 sm:py-16 space-y-16 text-left">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Security & Compliance</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Precise security practices, not vague claims.
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          We maintain rigorous operational standards across access control, data residency, and continuous dependency auditing, ready for enterprise vendor security evaluations.
        </p>
      </div>

      {/* Security Practices Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Audited Operational Practices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECURITY_PRACTICES.map((sec) => (
            <div key={sec.id} className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">{sec.category}</span>
                <span className="text-[11px] font-mono text-emerald-500 font-bold uppercase">● {sec.verificationStatus}</span>
              </div>
              <h3 className="text-base font-bold text-slate-950 dark:text-white">
                {sec.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {sec.description}
              </p>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 flex justify-between">
                <span>Audited: {sec.lastAudited}</span>
                <span>Owner: {sec.owner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Procurement Security Pack Download */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-sky-400 font-bold">Enterprise Vendor Review</span>
          <h2 className="text-2xl font-bold text-white">
            Pre-Filled Security & Procurement Pack
          </h2>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Fast-track your internal compliance review. Our standard pack includes our completed CAIQ/SIG lite questionnaire, Data Processing Addendum (DPA), Standard Contractual Clauses (SCCs), and Sub-processor register.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1 text-xs">
            <strong className="text-white block">Vendor Questionnaire (SIG)</strong>
            <span className="text-slate-400 text-[11px]">Completed vendor evaluation sheet.</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1 text-xs">
            <strong className="text-white block">Data Processing Addendum</strong>
            <span className="text-slate-400 text-[11px]">EU GDPR-compliant DPA template.</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1 text-xs">
            <strong className="text-white block">Sub-processor Registry</strong>
            <span className="text-slate-400 text-[11px]">Transparent cloud hosting registry.</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <span className="text-slate-400">Request formal encrypted procurement zip package:</span>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Request%20OITS%20Security%20and%20Procurement%20Pack`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-100 transition-all self-start sm:self-auto"
          >
            <span>Request Security Pack via Email</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky-600" />
          </a>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-950 dark:text-white">Have specific compliance mandates?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Discuss your infrastructure and regulatory constraints with our technical leads.</p>
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
