'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Cpu, 
  Zap, 
  FileCheck, 
  Users, 
  Clock, 
  Sparkles,
  Lock,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  TAGLINE, 
  PRIMARY_CTA, 
  BUYER_PROBLEMS, 
  SERVICES_OUTCOMES, 
  GOVERNED_CASE_STUDIES, 
  ACCOUNTABILITY_MATRIX, 
  ENGAGEMENT_PROGRESSION, 
  SECURITY_PRACTICES, 
  TEAM_LEADS 
} from '../data/governedData';
import { EvidenceBadge } from '../components/governance/EvidenceBadge';
import { ClaimGuard } from '../components/governance/ClaimGuard';
import { Marquee } from '../components/Marquee';
import { FAQAccordion } from '../components/FAQAccordion';
import { SectionWrapper } from '../components/SectionWrapper';
import { AnimatedCard } from '../components/AnimatedCard';
import { GlobalReach } from '../components/GlobalReach';
import { GlowingBorderCard } from '../components/GlowingBorderCard';
import { ParticleBackground } from '../components/ParticleBackground';
import { MagneticButton } from '../components/MagneticButton';
import { ServiceModal } from '../components/ServiceModal';
import { ServiceOutcome } from '../data/governedData';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<ServiceOutcome | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: ServiceOutcome) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 overflow-hidden">
        {/* Dynamic Atmospheric Particle Background */}
        <ParticleBackground />

        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center relative z-10 space-y-8">
          
          {/* Top Position Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 text-[11px] font-mono font-semibold tracking-wide text-slate-800 dark:text-slate-200 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            <span>Accountable Engineering Partner</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
            We build and modernise the software your business runs on.
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            OITS helps engineering and product leaders <strong className="text-slate-950 dark:text-white font-semibold">Modernise</strong> legacy bottlenecks, <strong className="text-slate-950 dark:text-white font-semibold">Build</strong> mission-critical applications, and <strong className="text-slate-950 dark:text-white font-semibold">Operate</strong> with named senior engineer accountability.
          </p>

          {/* Primary & Secondary Conversion Actions with Magnetic Spring Physics */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <MagneticButton strength={0.35}>
              <Link
                href={PRIMARY_CTA.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl active:scale-95 group"
              >
                <span>{PRIMARY_CTA.label}</span>
                <ArrowRight className="w-4 h-4 text-sky-400 dark:text-sky-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                <span>Explore Governed Work</span>
              </Link>
            </MagneticButton>
          </div>

          {/* Subtext Trust Anchor */}
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {PRIMARY_CTA.subtext}
          </p>

        </div>
      </section>

      {/* Marquee Capabilities Ticker */}
      <Marquee />

      {/* 2. PROOF BAND */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 dark:text-white">
                Engineering Evidence & Benchmark Baseline
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Every metric rendered on this site is governed by strict audit logs and explicit evidence tiers.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <EvidenceBadge tier="validated-pilot" />
              <EvidenceBadge tier="internal-benchmark" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <AnimatedCard delay={0.1} className="space-y-1 text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">72%</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Batch Processing Latency Reduction</p>
              <p className="text-[11px] text-slate-500 font-mono">Validated during financial ledger partitioning pilot</p>
            </AnimatedCard>
            <AnimatedCard delay={0.2} className="space-y-1 text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">99.4%</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Video Call Reliability in Low-Bandwidth</p>
              <p className="text-[11px] text-slate-500 font-mono">Simulated under 3% packet loss in mobile network lab</p>
            </AnimatedCard>
            <AnimatedCard delay={0.3} className="space-y-1 text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">100%</span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Senior Human Code Sign-Off</p>
              <p className="text-[11px] text-slate-500 font-mono">Zero un-reviewed or raw AI boilerplate in production</p>
            </AnimatedCard>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. BUYER PROBLEM SECTION */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="max-w-2xl text-left space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Friction We Solve
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Software delivery fails when accountability is outsourced.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUYER_PROBLEMS.map((prob, idx) => (
            <AnimatedCard 
              key={prob.id}
              delay={idx * 0.1}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-left space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm hover-glow"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-sm">
                !
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                {prob.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {prob.problem}
              </p>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 leading-relaxed">
                  <strong>OITS Approach:</strong> {prob.resolution}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. SERVICE OUTCOMES (MODERNISE, BUILD, OPERATE) */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Three clear ways we deliver value.
            </h2>
          </div>
          <Link 
            href="/services/modernise"
            className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1 self-start md:self-auto"
          >
            <span>Compare all service frameworks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {Object.values(SERVICES_OUTCOMES).map((service) => (
            <GlowingBorderCard key={service.id} glowOnHoverOnly={true} className="hover-glow cursor-pointer">
              <div 
                onClick={() => openServiceModal(service)}
                className="p-8 flex flex-col justify-between h-full space-y-6 border border-slate-200/80 dark:border-slate-800/80 rounded-[calc(1.5rem-1.5px)] group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white group-hover:text-sky-500 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Service
                    </span>
                  </div>

                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-mono uppercase text-slate-400 font-bold">Key Deliverables:</p>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                      {service.deliverables.slice(0, 3).map((del, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-500" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-950 dark:text-white group-hover:text-sky-500 transition-colors inline-flex items-center gap-1.5">
                    <span>Deep Dive Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 font-semibold">
                    Interactive Spec →
                  </span>
                </div>
              </div>
            </GlowingBorderCard>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. AI GOVERNANCE & ACCOUNTABILITY */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-8 text-left shadow-2xl">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Applied AI & Governance</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              AI does more of the work. A named engineer still signs it off.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We leverage modern AI tools to accelerate development velocity while enforcing non-negotiable human accountability across every production pull request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {ACCOUNTABILITY_MATRIX.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.08} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 hover-glow">
                <h3 className="text-xs font-mono font-bold uppercase text-sky-400">
                  {item.area}
                </h3>
                <div className="space-y-2 text-xs">
                  <p className="text-slate-400">
                    <strong className="text-slate-300">AI Acceleration:</strong> {item.aiRole}
                  </p>
                  <p className="text-slate-200">
                    <strong className="text-emerald-400">Human Sign-off:</strong> {item.humanEngineerRole}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                    ✓ {item.guarantee}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-800 text-xs text-slate-400">
            <span>Read our formal AI safety and client data isolation policies.</span>
            <Link href="/ai" className="text-sky-400 hover:underline font-bold inline-flex items-center gap-1">
              <span>View AI Safety Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. SELECTED GOVERNED WORK */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
              Technical Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Governed case studies with verifiable outcomes.
            </h2>
          </div>
          <Link 
            href="/work"
            className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1 self-start md:self-auto"
          >
            <span>View all case studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {GOVERNED_CASE_STUDIES.map((cs, idx) => (
            <AnimatedCard 
              key={cs.slug}
              delay={idx * 0.12}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm hover-glow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    {cs.clientSector}
                  </span>
                  <EvidenceBadge tier={cs.evidenceTier} />
                </div>

                <h3 className="text-xl font-bold text-slate-950 dark:text-white leading-snug">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cs.summary}
                </p>

                <div className="space-y-2 pt-2">
                  {cs.governedResults.slice(0, 1).map((res) => (
                    <ClaimGuard key={res.id} claim={res} />
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">
                  Lead: {cs.leadEngineer.name}
                </span>
                <Link
                  href={`/work/${cs.slug}`}
                  className="font-bold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* 7. SECURITY & PROCUREMENT TRUST */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
                Security & Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Verifiable security practices. Ready for vendor procurement.
              </h2>
            </div>
            <Link
              href="/security"
              className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1 self-start md:self-auto"
            >
              <span>Download Procurement Security Pack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_PRACTICES.map((sec, idx) => (
              <AnimatedCard key={sec.id} delay={idx * 0.08} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-sm hover-glow">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">{sec.category}</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase">● {sec.verificationStatus}</span>
                </div>
                <h3 className="text-xs font-bold text-slate-950 dark:text-white leading-snug">
                  {sec.title}
                </h3>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {sec.description}
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[10px] font-mono text-slate-400">
                  Audited: {sec.lastAudited} | Owner: {sec.owner}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. PEOPLE & LEADERSHIP */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="max-w-2xl text-left space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Named Engineering Leads
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Direct access to the engineers building your software.
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            No middle account managers. You collaborate directly with experienced technical leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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
                <strong>Focus:</strong> {lead.specialization}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* 8.5 GLOBAL DELIVERY ARCHITECTURE & AMCHARTS GLOBE */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <GlobalReach />
      </SectionWrapper>

      {/* 9. ENGAGEMENT MODEL */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="max-w-2xl text-left space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Engagement Progression
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Start small. Keep going only if it works.
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            A low-risk progression designed to demonstrate velocity and technical depth before long-term commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {ENGAGEMENT_PROGRESSION.map((step, idx) => (
            <AnimatedCard 
              key={step.step}
              delay={idx * 0.09}
              className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 shadow-sm hover-glow ${
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

      {/* 9.5 FAQ SECTION */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-8">
        <div className="max-w-2xl text-left space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Clarity on our engagement and delivery model.
          </h2>
        </div>

        <FAQAccordion />
      </SectionWrapper>

      {/* 10. FINAL CONVERSION: BOOK A DELIVERY REVIEW */}
      <SectionWrapper id="start" className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <GlowingBorderCard glowOnHoverOnly={false} className="shadow-2xl">
          <div className="p-8 sm:p-12 space-y-8 text-left relative overflow-hidden bg-slate-950 text-white rounded-[calc(1.5rem-1.5px)]">
            <div className="max-w-xl space-y-3 relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Primary Conversion
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Tell us what’s blocking your roadmap.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Book a complimentary 90-minute Delivery Review with one of our lead architects. We will examine your codebase, system bottlenecks, or technical specifications and provide an actionable recommendations memo.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
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
                Named Lead Responder: Tanvir Hossain (Tech Director)
              </span>
            </div>

            <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-400 font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict NDA by default. No unsolicited sales calls. Zero data sharing.</span>
            </div>
          </div>
        </GlowingBorderCard>
      </SectionWrapper>

      {/* Deep-Dive Technical Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedService(null);
        }}
      />

    </div>
  );
}
