import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GOVERNED_CASE_STUDIES, PRIMARY_CTA } from '../../data/governedData';
import { EvidenceBadge } from '../../components/governance/EvidenceBadge';
import { ClaimGuard } from '../../components/governance/ClaimGuard';

export const metadata: Metadata = {
  title: 'Work & Technical Case Studies',
  description: 'Explore evidence-governed case studies on legacy modernization, financial ledgers, encrypted telemedicine, and logistics dispatch engineering.',
};

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12 sm:py-16 space-y-16 text-left">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <span>Case Studies & Work</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Engineered for performance and verified by evidence.
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Every case study published here is backed by concrete engineering trade-offs, architecture notes, and explicit evidence tier labels.
        </p>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {GOVERNED_CASE_STUDIES.map((cs) => (
          <div 
            key={cs.slug}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 hover:border-sky-500/40 transition-colors shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-slate-500 uppercase">
                  {cs.clientSector}
                </span>
                <EvidenceBadge tier={cs.evidenceTier} />
              </div>

              <h2 className="text-2xl font-bold text-slate-950 dark:text-white leading-snug">
                {cs.title}
              </h2>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {cs.summary}
              </p>

              <div className="space-y-2 pt-2">
                {cs.governedResults.map((res) => (
                  <ClaimGuard key={res.id} claim={res} showMetadata={true} />
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {cs.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">
                Lead: {cs.leadEngineer.name}
              </span>
              <Link
                href={`/work/${cs.slug}`}
                className="font-bold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Full Technical Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Conversion Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-slate-950 dark:text-white">
            Have a similar architectural challenge?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Let our lead engineers review your system constraints in a 90-minute Delivery Review.
          </p>
        </div>
        <Link
          href={PRIMARY_CTA.href}
          className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0"
        >
          {PRIMARY_CTA.label}
        </Link>
      </div>

    </div>
  );
}
