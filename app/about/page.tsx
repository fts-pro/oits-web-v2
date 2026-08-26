import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_NAME, LEGAL_ENTITY_NAME, REGISTERED_ADDRESS, CONTACT_EMAIL, PRIMARY_CTA, TEAM_LEADS } from '../../data/governedData';
import { ShieldCheck, MapPin, Mail, Globe, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Engineering Principles',
  description: 'Learn about OITS (OITS Dhaka Limited): our mission, Swiss-modern engineering philosophy, and commitment to accountable delivery.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 sm:py-16 space-y-16 text-left">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <span>About OITS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Accountable engineering for business-critical software.
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          OITS operates as an elite technical partner rather than a transactional agency. We help scaling organizations modernise, build, and operate resilient systems with verified senior leadership.
        </p>
      </div>

      {/* Engineering Principles */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Core Engineering Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-xs font-mono text-sky-500 font-bold uppercase">Principle 01</span>
            <h3 className="text-base font-bold text-slate-950 dark:text-white">Evidence Over Hype</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We do not make unsupported claims or publish simulated metrics. Every architecture proposal is grounded in audited benchmarks and realistic trade-offs.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-xs font-mono text-emerald-500 font-bold uppercase">Principle 02</span>
            <h3 className="text-base font-bold text-slate-950 dark:text-white">Direct Lead Ownership</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every sprint, pull request, and deployment is led by a named senior engineer. You communicate directly with the builders, not account management layers.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-xs font-mono text-purple-500 font-bold uppercase">Principle 03</span>
            <h3 className="text-base font-bold text-slate-950 dark:text-white">Start Small, Earn Scale</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We never lock clients into large un-scoped retainers. We begin with a 90-minute review, prove velocity in a 2-week pilot, and scale only when value is demonstrated.
            </p>
          </div>
        </div>
      </div>

      {/* Authoritative Legal Entity & Office */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-xl font-bold text-slate-950 dark:text-white">
          Corporate & Legal Transparency
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 dark:text-slate-300">
          <div className="space-y-2">
            <p><strong>Public Brand:</strong> {COMPANY_NAME}</p>
            <p><strong>Registered Legal Entity:</strong> {LEGAL_ENTITY_NAME}</p>
            <p><strong>Primary Domain:</strong> oitsdhaka.com</p>
          </div>
          <div className="space-y-2">
            <p><strong>Registered Address:</strong> {REGISTERED_ADDRESS}</p>
            <p><strong>Official Contact:</strong> {CONTACT_EMAIL}</p>
            <p><strong>Governing Jurisdiction:</strong> Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Let’s discuss your technical roadmap.</h3>
          <p className="text-xs text-slate-300">Book a 90-minute Delivery Review with our Technical Director.</p>
        </div>
        <Link
          href={PRIMARY_CTA.href}
          className="px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shrink-0"
        >
          {PRIMARY_CTA.label}
        </Link>
      </div>

    </div>
  );
}
