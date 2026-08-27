'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_NAME, LEGAL_ENTITY_NAME, REGISTERED_ADDRESS, CONTACT_EMAIL, PRIMARY_CTA } from '../data/governedData';
import { ArrowRight, ShieldCheck, Mail, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative z-10 bg-white dark:bg-[#05070D] border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 py-16 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Top Section: CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white mb-16 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-slate-800 shadow-2xl">
          <div className="max-w-xl space-y-2 relative z-10 text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sky-400">
              Low-Risk Starting Point
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to modernise or unblock your delivery?
            </h3>
            <p className="text-sm text-slate-300">
              Book a 90-minute architecture and roadmap review with a named senior engineer. No sales pitch, no obligation.
            </p>
          </div>

          <Link
            href={PRIMARY_CTA.href}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg active:scale-95 shrink-0"
          >
            <span>{PRIMARY_CTA.label}</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </Link>
        </div>

        {/* Newsletter Subscription Row */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-lg">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-500">
              Architecture Dispatches
            </span>
            <h4 className="text-lg font-bold text-slate-950 dark:text-white">
              Subscribe to technical insights & system teardowns.
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Bi-weekly engineering memos covering legacy decoupling, cloud SRE, and verifiable AI controls. Zero fluff.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Subscribed! You will receive our next architecture brief.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@company.com"
                className="w-full sm:w-72 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5 text-sky-400 dark:text-sky-600" />
              </button>
            </form>
          )}
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80 text-left">
          
          {/* Col 1 & 2: Entity Information */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/" className="inline-block" aria-label="OITS Dhaka - Home">
                <BrandLogo height={36} />
              </Link>

              <a
                href="https://oitsdhaka.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-200/80 dark:border-sky-800/80 text-sky-700 dark:text-sky-300 text-[10px] font-mono font-medium hover:border-sky-300 dark:hover:border-sky-700 hover:bg-sky-100/70 transition-colors shadow-xs shrink-0"
              >
                <Globe className="w-3 h-3 text-sky-500" />
                <span>oitsdhaka.com</span>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-200/80 dark:border-sky-800/80 text-sky-700 dark:text-sky-300 text-[10px] font-mono font-medium hover:border-sky-300 dark:hover:border-sky-700 hover:bg-sky-100/70 transition-colors shadow-xs shrink-0"
              >
                <Mail className="w-3 h-3 text-sky-500" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Accountable engineering partner for organizations modernising, building, and operating business-critical software.
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400" />
                <span>{REGISTERED_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-sky-500 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span>Legal Entity: {LEGAL_ENTITY_NAME}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 dark:text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/modernise" className="hover:text-sky-500 transition-colors">
                  Modernise & Decouple
                </Link>
              </li>
              <li>
                <Link href="/services/build" className="hover:text-sky-500 transition-colors">
                  Build Critical Apps
                </Link>
              </li>
              <li>
                <Link href="/services/operate" className="hover:text-sky-500 transition-colors">
                  Operate & SRE Pods
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-sky-500 transition-colors">
                  Engagement Progression
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Proof */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 dark:text-white">
              Trust & Proof
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/work" className="hover:text-sky-500 transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/ai" className="hover:text-sky-500 transition-colors">
                  AI & Human Controls
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-sky-500 transition-colors">
                  Security Practices & Pack
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-500 transition-colors">
                  About & Principles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-500 transition-colors font-semibold text-sky-600 dark:text-sky-400">
                  Contact & Delivery Review
                </Link>
              </li>
              <li>
                <Link href="/sv" className="hover:text-sky-500 transition-colors font-semibold text-sky-600 dark:text-sky-400">
                  Svenska (Nordic Hub)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Governance & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 dark:text-white">
              Governance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-sky-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-sky-500 transition-colors">
                  Cookie Practices
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-sky-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sub-processors" className="hover:text-sky-500 transition-colors">
                  Sub-processor Register
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} {LEGAL_ENTITY_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Evidence-governed publishing</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
