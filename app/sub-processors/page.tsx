import React from 'react';
import type { Metadata } from 'next';
import { LEGAL_ENTITY_NAME } from '../../data/governedData';

export const metadata: Metadata = {
  title: 'Sub-processors Registry',
  description: 'Public sub-processor registry and cloud infrastructure providers used by OITS Dhaka Limited.',
};

export default function SubProcessorsPage() {
  const subProcessors = [
    {
      name: 'Vercel Inc.',
      activity: 'Edge static hosting and web application deployment infrastructure.',
      location: 'United States / Global Edge Network',
      dpaStatus: 'DPA & Standard Contractual Clauses in place'
    },
    {
      name: 'GitHub (Microsoft Corp.)',
      activity: 'Encrypted source code repository hosting and CI/CD pipelines.',
      location: 'United States / EU Regions',
      dpaStatus: 'Enterprise DPA executed'
    },
    {
      name: 'Google Workspace',
      activity: 'Corporate encrypted email and commercial client communication.',
      location: 'Global / EU data residency options',
      dpaStatus: 'Google Cloud DPA executed'
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16 space-y-8 text-left">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
        Sub-processor Transparency Register
      </h1>
      <p className="text-xs font-mono text-slate-400">
        Maintained in accordance with GDPR Article 28 | Effective for {LEGAL_ENTITY_NAME}
      </p>

      <div className="space-y-6 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
        <p>
          To deliver reliable software engineering services and host our public digital surfaces, {LEGAL_ENTITY_NAME} engages the following third-party infrastructure and sub-processors:
        </p>

        <div className="space-y-4 pt-2">
          {subProcessors.map((sp, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-950 dark:text-white">{sp.name}</h2>
                <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase">● Active</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">{sp.activity}</p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span><strong>Region:</strong> {sp.location}</span>
                <span className="text-sky-600 dark:text-sky-400"><strong>Status:</strong> {sp.dpaStatus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
