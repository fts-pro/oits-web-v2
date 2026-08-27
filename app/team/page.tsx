import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TEAM_LEADS, PRIMARY_CTA } from '../../data/governedData';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Leadership & Lead Architects',
  description: 'Meet the senior engineering leads and architects who design, lead, and sign off on OITS client deliverables.',
};

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 sm:py-16 space-y-16 text-left">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <span>Engineering Leadership</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Named engineers with direct accountability.
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          We do not deploy anonymous junior offshore developers. Our projects are spearheaded by verified technical leaders who actively write code and conduct architecture reviews.
        </p>
      </div>

      {/* Team Leads Roster */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_LEADS.map((lead) => (
          <div 
            key={lead.id}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-bold text-xl">
                {lead.name.charAt(0)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                    {lead.name}
                  </h2>
                  {lead.verified && (
                    <span title="Verified Engineering Profile">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    </span>
                  )}
                </div>
                <p className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold">
                  {lead.role}
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {lead.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500">
              <strong className="text-slate-800 dark:text-slate-200">Focus:</strong> {lead.specialization}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Work directly with our senior leads.</h3>
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
