import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertTriangle, HelpCircle, ShieldCheck } from 'lucide-react';
import { SERVICES_OUTCOMES, PRIMARY_CTA } from '../../../data/governedData';
import { ClaimGuard } from '../../../components/governance/ClaimGuard';

export const metadata: Metadata = {
  title: 'Build Critical Web & Mobile Applications',
  description: 'Greenfield development of mission-critical web, mobile, and cloud-native applications with strict domain modeling and 100% human sign-off.',
};

export default function BuildPage() {
  const service = SERVICES_OUTCOMES.build;

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 sm:py-16 space-y-16 text-left">
      
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <span>Service Capability</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          {service.title}: {service.tagline}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {service.problemStatement}
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-xl font-bold text-slate-950 dark:text-white">
          When this service is the right fit:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.targetSituations.map((sit, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
              <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></span>
              <span className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">{sit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">
            Engineering Approach
          </h2>
          <ul className="space-y-3">
            {service.approach.map((app, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-sky-500 shrink-0" />
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">
            Concrete Deliverables
          </h2>
          <ul className="space-y-3">
            {service.deliverables.map((del, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                <span>{del}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 space-y-4">
        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold uppercase">
          <AlertTriangle className="w-4 h-4" />
          <span>Explicit Scope Boundaries</span>
        </div>
        <ul className="space-y-2 text-xs text-slate-800 dark:text-slate-200">
          {service.exclusions.map((exc, i) => (
            <li key={i} className="flex items-start gap-2 font-mono">
              <span className="text-amber-500 font-bold">✕</span>
              <span>{exc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Audited Benchmarks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.governedProof.map((claim) => (
            <ClaimGuard key={claim.id} claim={claim} showMetadata={true} />
          ))}
        </div>
      </div>

      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Starting a new digital application?</h3>
          <p className="text-xs text-slate-300">Book a 90-minute Delivery Review to stress-test your specifications.</p>
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
