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
  Building,
  Quote,
  Star,
  FileText,
  Target,
  Compass
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
  title: 'About Us | Know OITS, Why Us, Mission & Vision, Policies & Team',
  description: 'Know OITS: Swiss-modern engineering philosophy, architectural pillars, ISO/SOC2 policies, named technical leadership, and client testimonials.',
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

  const testimonials = [
    {
      quote: "OITS refactored our legacy monolithic dispatch engine into partitioned microservices with zero downtime. Their senior leads took full architectural ownership.",
      author: "Chief Technology Officer",
      company: "Nordic Logistics Group (Stockholm)",
      metric: "99.99% Uptime Maintained"
    },
    {
      quote: "The 90-minute review highlighted three critical database locks that had slowed our roadmap for months. Within 2 sprints, our transaction throughput was 4.2x higher.",
      author: "VP of Product Engineering",
      company: "FinTech Payments Platform (London)",
      metric: "4.2x Throughput Boost"
    },
    {
      quote: "Their adherence to ISO 27001 and GDPR DPA governance made security audits painless for our hospital networks.",
      author: "Director of Health Informatics",
      company: "Telehealth Systems Provider",
      metric: "SOC2 & ISO Compliant"
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden pt-12 text-left">
      
      {/* 1. HERO & KNOW OITS SECTION */}
      <section id="know-oits" className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Know OITS & Architectural DNA</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
          Engineering digital systems with <span className="text-sky-500">uncompromising precision</span>.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          OITS (OITS Dhaka Limited) operates at the intersection of rigorous computer science and Swiss-modern digital craftsmanship. We reject cookie-cutter templates to build high-availability platforms tailored for long-term operational velocity.
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

      {/* 2. WHY US / FOUR PILLARS */}
      <SectionWrapper id="why-us" className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Why Choose OITS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Four foundational pillars of zero-debt engineering.
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

      {/* 3. MISSION & VISION */}
      <SectionWrapper id="mission-vision" className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-500 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              To eliminate technical stagnation and unaccountable software outsourcing by pairing rigorous distributed systems engineering with Swiss-modern craftsmanship and senior human accountability.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              To be the trusted engineering partner for enterprises modernising business-critical infrastructure, guaranteeing zero-downtime migrations, transparent sprint velocity, and audit-ready codebases.
            </p>
          </div>

        </div>
      </SectionWrapper>

      {/* 4. TRUST MILESTONES */}
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

      {/* 5. POLICIES & COMPLIANCE */}
      <SectionWrapper id="policies" className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Governance & Security Policies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Enterprise policy framework & audit readiness.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <FileText className="w-4 h-4 text-sky-500" />
              <span>Data Protection & GDPR</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Standard Data Processing Agreements (DPA) signed by default. EU Standard Contractual Clauses (SCC) and zero customer data retention on dev machines.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Code Review & SAST/DAST</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              100% human senior engineer review gate on all PRs. Automated static security scans and secret leak detection integrated into CI/CD pipelines.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
              <Lock className="w-4 h-4 text-purple-500" />
              <span>Zero-Trust Infrastructure</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Hardware-backed 2FA/MFA on all internal tooling, ephemeral developer access tokens, and complete audit logging on production deployments.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. NAMED ENGINEERING LEADERSHIP */}
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

      {/* 7. CLIENT TESTIMONIALS */}
      <SectionWrapper id="testimonials" className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-500">
            Audited Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            What technical directors say about our delivery.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 shadow-sm hover-glow"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-950 dark:text-white block">
                  {t.author}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {t.company}
                </span>
                <span className="text-[10px] font-mono text-emerald-500 font-bold block pt-1">
                  ✓ {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 8. FINAL CONVERSION ACTION */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <GlowingBorderCard glowOnHoverOnly={false} className="shadow-2xl">
          <div className="p-8 sm:p-12 space-y-6 bg-white dark:bg-slate-950 text-slate-950 dark:text-white rounded-[calc(1.5rem-1.5px)] border border-slate-200 dark:border-slate-800 text-left shadow-sm">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Accountable Next Step
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              Ready to review your technical roadmap?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Book a complimentary 90-minute Delivery Review. We will analyze your current architecture, code modularity, and database bottlenecks and supply an actionable recommendations memo.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <MagneticButton strength={0.35}>
                <Link
                  href={PRIMARY_CTA.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl active:scale-95 group"
                >
                  <span>{PRIMARY_CTA.label}</span>
                  <ArrowRight className="w-4 h-4 text-sky-400 dark:text-sky-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Lead: Tanvir Hossain (Tech Director)
              </span>
            </div>
          </div>
        </GlowingBorderCard>
      </SectionWrapper>

    </div>
  );
}
