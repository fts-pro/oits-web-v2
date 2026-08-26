import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, Layers } from 'lucide-react';
import { GOVERNED_CASE_STUDIES, PRIMARY_CTA } from '../../../data/governedData';
import { EvidenceBadge } from '../../../components/governance/EvidenceBadge';
import { ClaimGuard } from '../../../components/governance/ClaimGuard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GOVERNED_CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = GOVERNED_CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return { title: 'Case Study Not Found' };

  return {
    title: `${cs.title} | Case Study`,
    description: cs.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = GOVERNED_CASE_STUDIES.find((c) => c.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16 space-y-12 text-left">
      
      {/* Back Link */}
      <Link 
        href="/work"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to all case studies</span>
      </Link>

      {/* Case Study Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono uppercase text-slate-500 font-bold">{cs.clientSector}</span>
          <EvidenceBadge tier={cs.evidenceTier} />
          {cs.permissionReference && (
            <span className="text-[10px] font-mono text-slate-400">
              Ref: {cs.permissionReference}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
          {cs.title}
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {cs.summary}
        </p>

        <div className="pt-4 flex flex-wrap gap-2">
          {cs.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Technical Narrative Sections */}
      <div className="space-y-10">
        
        {/* Context & Constraint */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h2 className="text-xs font-mono uppercase font-bold text-sky-500">Business & System Context</h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {cs.context}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h2 className="text-xs font-mono uppercase font-bold text-amber-500">Key Engineering Constraint</h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {cs.constraint}
            </p>
          </div>
        </div>

        {/* Engineering Approach */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Architectural Approach & Implementation
          </h2>
          <div className="space-y-3">
            {cs.approach.map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800">
                <span className="w-5 h-5 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                  0{i + 1}
                </span>
                <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trade-Offs & Architecture Notes */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <h2 className="text-sm font-mono uppercase font-bold text-sky-400">
            Explicit Technical Trade-Offs
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            {cs.tradeOffs}
          </p>
          <div className="pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
            <strong>Architecture Stack:</strong> {cs.architectureNotes}
          </div>
        </div>

        {/* Governed Results */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Audited & Measured Results
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {cs.governedResults.map((res) => (
              <ClaimGuard key={res.id} claim={res} showMetadata={true} />
            ))}
          </div>
        </div>

        {/* Lead Engineer Ownership */}
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Signed Off By Lead Engineer</span>
            <p className="text-sm font-bold text-slate-950 dark:text-white">{cs.leadEngineer.name}</p>
            <p className="text-xs font-mono text-sky-600 dark:text-sky-400">{cs.leadEngineer.role}</p>
          </div>
          <Link
            href="/team"
            className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-500"
          >
            View Profile →
          </Link>
        </div>

      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-left">
          <h3 className="text-lg font-bold text-white">Need similar architectural expertise?</h3>
          <p className="text-xs text-slate-300">Book a 90-minute Delivery Review with our senior team.</p>
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
