import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  GitBranch, 
  Layers,
  Terminal,
  Activity,
  Sparkles
} from 'lucide-react';
import { ENGAGEMENT_PROGRESSION, ACCOUNTABILITY_MATRIX, PRIMARY_CTA } from '../../data/governedData';
import { SectionWrapper } from '../../components/SectionWrapper';
import { AnimatedCard } from '../../components/AnimatedCard';
import { GlowingBorderCard } from '../../components/GlowingBorderCard';
import { MagneticButton } from '../../components/MagneticButton';

export const metadata: Metadata = {
  title: 'How We Work | Agile Workflow, Delivery Progression & Governance | OITS',
  description: 'Explore our 2-week agile sprint cadences, automated CI/CD pipelines, 4-step engagement progression, and human-verified engineering sign-offs.',
};

export default function HowWeWorkPage() {
  const agileSteps = [
    {
      step: '01',
      title: 'Spec & Architectural Alignment',
      description: 'Zero ambiguity backlog refinement. Every story has explicit acceptance criteria, performance baselines, and boundary exclusions.',
      tag: 'Sprint Planning'
    },
    {
      step: '02',
      title: 'Tracer-Bullet Implementation',
      description: 'Engineers build vertical end-to-end slices connecting the database to the frontend, proving integration feasibility in days.',
      tag: 'Continuous Delivery'
    },
    {
      step: '03',
      title: 'Automated CI/CD & Test Safety Net',
      description: 'Unit, integration, and characterization regression tests run on every pull request. Automated SAST/DAST security scans.',
      tag: 'Zero-Debt Gate'
    },
    {
      step: '04',
      title: 'Senior Human Sign-Off & Demo',
      description: 'Named senior technical lead reviews the code diff. Live runnable staging environment demo presented to client stakeholders.',
      tag: 'Human Review'
    },
    {
      step: '05',
      title: 'Canary Rollout & Live Telemetry',
      description: 'Zero-downtime blue/green or canary deployment with automated rollback triggers based on p99 latency and error rate metrics.',
      tag: 'SRE Monitoring'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden pt-12 text-left">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <Cpu className="w-3.5 h-3.5" />
          <span>Delivery Governance & Agile Framework</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
          Accountable engineering with <span className="text-sky-500">zero guesswork</span>.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          We operate with transparent milestones, direct lead-engineer communication, and strict delivery progression designed to eliminate technical debt from day one.
        </p>
      </section>

      {/* 2. AGILE WORKFLOW SECTION */}
      <SectionWrapper id="agile-workflow" className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Sprint Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            2-Week Agile Sprint Cadence & CI/CD Delivery
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Our agile workflow is engineered for predictable velocity, continuous integration, and transparent stakeholder demos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {agileSteps.map((s, idx) => (
            <AnimatedCard
              key={s.step}
              delay={idx * 0.08}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 shadow-sm hover-glow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-extrabold text-sky-500">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. ENGAGEMENT PROGRESSION (LOW-RISK 4 STEPS) */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Step-by-Step Progression
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            From initial review to scalable operations.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {ENGAGEMENT_PROGRESSION.map((step, idx) => (
            <AnimatedCard 
              key={step.step}
              delay={idx * 0.09}
              className={`p-8 rounded-3xl border flex flex-col justify-between space-y-4 shadow-sm hover-glow ${
                step.step === '01' 
                  ? 'bg-sky-500/10 border-sky-500/30' 
                  : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-extrabold text-sky-500">
                  STEP {step.step}
                </span>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  {step.duration}
                </span>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {step.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. FIRST 4 WEEKS TIMELINE */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-sky-400 font-bold">
              Month One Onboarding Cadence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What working together looks like in practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs pt-4">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="font-mono text-sky-400 font-bold block text-sm">Days 1–3</span>
              <strong className="text-white block">Architecture & Spec Alignment</strong>
              <p className="text-slate-400 leading-relaxed">Review repo access, environment variables, CI/CD pipelines, and security constraints.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="font-mono text-sky-400 font-bold block text-sm">Days 4–10</span>
              <strong className="text-white block">Tracer-Bullet Slice</strong>
              <p className="text-slate-400 leading-relaxed">Implement one end-to-end slice (query refactor, auth flow, or API decoupling) to prove sprint cadence.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="font-mono text-sky-400 font-bold block text-sm">Days 11–14</span>
              <strong className="text-white block">First Staging Demo</strong>
              <p className="text-slate-400 leading-relaxed">Live demo in isolated staging environment with complete benchmark metrics and regression test reports.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="font-mono text-sky-400 font-bold block text-sm">Weeks 3–4</span>
              <strong className="text-white block">Full Velocity Cadence</strong>
              <p className="text-slate-400 leading-relaxed">Synchronized standups, 2-week sprint planning, automated zero-downtime releases, and continuous SRE monitoring.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. PRIMARY ACTION */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <GlowingBorderCard glowOnHoverOnly={false} className="shadow-2xl">
          <div className="p-8 sm:p-12 space-y-6 bg-slate-950 text-white rounded-[calc(1.5rem-1.5px)] text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              Low-Risk Starting Point
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Start with a 90-minute Delivery Review.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Examine your codebase, review architecture bottlenecks, and receive an actionable recommendations memo from a named senior engineer.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <MagneticButton strength={0.35}>
                <Link
                  href={PRIMARY_CTA.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all shadow-xl active:scale-95 group"
                >
                  <span>{PRIMARY_CTA.label}</span>
                  <ArrowRight className="w-4 h-4 text-sky-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </GlowingBorderCard>
      </SectionWrapper>

    </div>
  );
}
