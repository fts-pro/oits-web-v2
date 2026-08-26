import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Building,
  MessageSquare
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  PRIMARY_CTA, 
  CONTACT_EMAIL, 
  REGISTERED_ADDRESS, 
  TEAM_LEADS 
} from '../../data/governedData';
import { SectionWrapper } from '../../components/SectionWrapper';
import { ContactForm } from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Direct Engineering Access & Delivery Review | OITS',
  description: 'Book a 90-minute technical delivery review or contact our senior engineering team directly. NDA by default, zero sales spam.',
};

export default function ContactPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24 overflow-hidden pt-12">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Senior Engineer Access</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Direct communication with the engineers building your systems.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          No commission-driven sales intermediaries. Tell us what is blocking your delivery, and a named technical director will reply within 24 business hours.
        </p>
      </section>

      {/* 2. CONTACT CHANNELS & INQUIRY FORM */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office & Operational Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                Global Operations & Delivery Hubs
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      Engineering Command Center (Dhaka HQ)
                    </strong>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {REGISTERED_ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      European CET Working Window
                    </strong>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      4–5 Hours Daily Synchronized Sprint Standups & Architecture Overlap (08:00–13:00 CET).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      Direct Engineering Inquiries
                    </strong>
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-sky-600 dark:text-sky-400 hover:underline font-mono"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>NDA executed before reviewing client codebases.</span>
              </div>
            </div>

            {/* Google Maps Location Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-900 space-y-2 p-3">
              <div className="flex items-center justify-between px-2 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>HQ Coordinates (Dhaka, Bangladesh)</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">23.8103° N, 90.4125° E</span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200/80 dark:border-slate-800">
                <iframe
                  title="OITS Dhaka HQ Location Map"
                  src="https://maps.google.com/maps?q=Dhanmondi%20Dhaka%20Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-500"
                />
              </div>
            </div>

            {/* Named Lead Responders */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Primary Review Lead
              </span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-bold text-sm">
                  {TEAM_LEADS[0].name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">{TEAM_LEADS[0].name}</h3>
                  <p className="text-[11px] font-mono text-sky-500">{TEAM_LEADS[0].role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct oversight on delivery scope, risk mitigation memos, and architectural review bookings.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form Component */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </SectionWrapper>

    </div>
  );
}
