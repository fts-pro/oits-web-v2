import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Users, 
  Award, 
  CheckCircle2, 
  Zap, 
  Lock, 
  Server, 
  Layout, 
  ArrowRight,
  Globe,
  Clock,
  Sparkles,
  Building
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  LEGAL_ENTITY_NAME, 
  REGISTERED_ADDRESS, 
  CONTACT_EMAIL, 
  PRIMARY_CTA, 
  TEAM_LEADS 
} from '../../data/governedData';
import { SectionWrapper } from '../../components/SectionWrapper';
import { AnimatedCard } from '../../components/AnimatedCard';
import { GlowingBorderCard } from '../../components/GlowingBorderCard';
import { MagneticButton } from '../../components/MagneticButton';

export const metadata: Metadata = {
  title: 'About Us & Architectural DNA | OITS Dhaka',
  description: 'Learn about OITS (OITS Dhaka Limited): our Swiss-modern engineering philosophy, architectural pillars, named leadership, and ISO/SOC2 alignment.',
};

export default function AboutPage() {
  const pillars = [
    {
      icon: <Server className="w-6 h-6 text-sky-500" />,
      title: 'Elastic Scalability',
      description: 'Distributed microservices, event-driven outboxes, and serverless infrastructure engineered to withstand 100x traffic spikes without performance degradation.',
      badge: 'Zero Bottlenecks'
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-500" />,
      title: 'Zero-Trust Security',
      description: 'Defense-in-depth security architecture with granular IAM policies, automated SAST/DAST scanning, and continuous vulnerability monitors.',
      badge: 'OWASP Verified'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'High-Throughput Cloud',
      description: 'Ultra-low latency database indexing, distributed memory caching, and multi-region cloud edge compute acceleration.',
      badge: '<50ms Latency'
    },
    {
      icon: <Layout className="w-6 h-6 text-indigo-500" />,
      title: 'Human-Centric UI/UX',
      description: 'Swiss-modern design systems built with pixel-perfect accessible typography, keyboard navigation, and seamless 60FPS fluid micro-interactions.',
      badge: 'WCAG AAA Ready'
    }
  ];

  const trustMilestones = [
    { label: 'Engineering Command Base', value: 'Dhaka HQ' },
    { label: 'Enterprise Systems Built', value: '150+' },
    { label: 'European CET Overlap', value: '4–5h Daily' },
    { label: 'Senior Code Review', value: '100%' }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden pt-12 text-left">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Architectural DNA & Engineering Principles</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
          Engineering digital systems with <span className="text-sky-500">uncompromising precision</span>.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          OITS operates at the intersection of rigorous computer science and Swiss-modern digital craftsmanship. We reject cookie-cutter templates to build high-availability platforms tailored for long-term operational velocity.
        </p>

        {/* Compliance Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
            ✓ ISO 27001 Aligned
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 font-semibold">
            ✓ SOC2 Type II Certified
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">
            ✓ OWASP ASVS Verified
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-semibold">
            ✓ GDPR Ready (DPA Default)
          </span>
        </div>
      </section>

      {/* 2. FOUR PILLARS GRID */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Core Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Four pillars of our engineering practice.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <AnimatedCard
              key={idx}
              delay={idx * 0.08}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 hover:border-sky-500/40 transition-colors shadow-sm hover-glow"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                {pillar.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. TRUST MILESTONES */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {trustMilestones.map((item, i) => (
            <div key={i} className="space-y-1">
              <p className="text-2xl sm:text-4xl font-mono font-extrabold text-slate-950 dark:text-white">
                {item.value}
              </p>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. NAMED ENGINEERING LEADERSHIP */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Accountable Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Meet the engineers leading your architecture.
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            No middle managers. Every system blueprint and release is directly supervised by senior technical directors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_LEADS.map((lead, idx) => (
            <AnimatedCard 
              key={lead.id}
              delay={idx * 0.1}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover-glow"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-bold text-base">
                {lead.name.charAt(0)}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {lead.name}
                </h3>
                <p className="text-xs font-mono text-sky-600 dark:text-sky-400">
                  {lead.role}
                </p>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {lead.bio}
              </p>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500">
                <strong>Specialization:</strong> {lead.specialization}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. NORDIC & GLOBAL DELIVERY BRIDGE */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>Nordic Client Hub & Swedish Portal</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Direct European Collaboration Window
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            We maintain synchronized 4–5 hour daily overlap with Central European Time (CET), enabling frictionless sprint standups, PR reviews, and direct architecture sessions for clients across Stockholm, London, Frankfurt, and Oslo.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/sv"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-950 text-xs font-bold hover:bg-slate-100 transition-all shadow-lg"
            >
              <span>Besök Svenska Sidan (Nordic Portal)</span>
              <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-all border border-slate-700"
            >
              <span>Contact Engineering Command</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. FINAL CONVERSION ACTION */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <GlowingBorderCard glowOnHoverOnly={false} className="shadow-2xl">
          <div className="p-8 sm:p-12 space-y-6 bg-slate-950 text-white rounded-[calc(1.5rem-1.5px)] text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              Accountable Next Step
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to review your technical roadmap?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Book a complimentary 90-minute Delivery Review. We will analyze your current architecture, code modularity, and database bottlenecks and supply an actionable recommendations memo.
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

              <span className="text-xs font-mono text-slate-400">
                Lead: Tanvir Hossain (Tech Director)
              </span>
            </div>
          </div>
        </GlowingBorderCard>
      </SectionWrapper>

    </div>
  );
}
