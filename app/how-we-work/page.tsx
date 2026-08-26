import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Users, ShieldCheck, Zap } from 'lucide-react';
import { ENGAGEMENT_PROGRESSION, ACCOUNTABILITY_MATRIX, PRIMARY_CTA } from '../../data/governedData';

export const metadata: Metadata = {
  title: 'How We Work | Delivery Model & Progression',
  description: 'Learn how OITS executes software projects: low-risk 90-minute Delivery Reviews, 2-week validation pilots, agile milestones, and human sign-off.',
};

export default function HowWeWorkPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 sm:py-16 space-y-16 text-left">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <span>Delivery Governance</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Accountable engineering with zero guesswork.
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          We operate with transparent milestones, direct lead-engineer communication, and strict delivery progression designed to reduce client risk from day one.
        </p>
      </div>

      {/* Engagement Timeline Progression */}
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-sky-500 font-bold">Step-by-Step Engagement</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
            From initial review to scalable operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGAGEMENT_PROGRESSION.map((step) => (
            <div 
              key={step.step}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black font-mono text-slate-200 dark:text-slate-800">
                  {step.step}
                </span>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold">
                  {step.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                {step.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* First Four Weeks Timeline */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-sky-400 font-bold">First 4 Weeks In Practice</span>
          <h2 className="text-2xl font-bold text-white">
            What working together looks like in month one
          </h2>
        </div>

        <div className="space-y-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-4">
            <span className="font-mono text-sky-400 font-bold shrink-0">Days 1–3</span>
            <div>
              <strong className="text-white block mb-0.5">Architecture & Dependency Deep Dive</strong>
              <p className="text-slate-400">Review repository access, environment configurations, CI/CD pipelines, and security constraints.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-4">
            <span className="font-mono text-sky-400 font-bold shrink-0">Days 4–10</span>
            <div>
              <strong className="text-white block mb-0.5">Tracer-Bullet Slice Implementation</strong>
              <p className="text-slate-400">Implement one end-to-end module (e.g. database query refactor, authentication flow, or API decoupling) to prove sprint cadence.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-4">
            <span className="font-mono text-sky-400 font-bold shrink-0">Days 11–14</span>
            <div>
              <strong className="text-white block mb-0.5">First Sprint Demo & Review</strong>
              <p className="text-slate-400">Runnable demo in isolated staging environment with complete performance benchmarks and test pass reports.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-4">
            <span className="font-mono text-sky-400 font-bold shrink-0">Weeks 3–4</span>
            <div>
              <strong className="text-white block mb-0.5">Full Velocity Cadence</strong>
              <p className="text-slate-400">Bi-weekly milestone deliveries, daily asynchronous Slack updates, and bi-weekly sprint retrospectives.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Human Accountability Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Our Four Guarantees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACCOUNTABILITY_MATRIX.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase text-sky-600 dark:text-sky-400">{item.area}</h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{item.humanEngineerRole}</p>
              <div className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                ✓ {item.guarantee}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-950 dark:text-white">Start with step 01 today.</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">Book your 90-minute Delivery Review with a lead engineer.</p>
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
