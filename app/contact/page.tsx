import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Phone, 
  Building,
  MessageSquare,
  Globe,
  ExternalLink,
  Award
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  PRIMARY_CTA, 
  CONTACT_EMAIL, 
  CONTACT_PHONE,
  CONTACT_PHONE_NORDIC,
  REGISTERED_ADDRESS, 
  TEAM_LEADS 
} from '../../data/governedData';
import { SectionWrapper } from '../../components/SectionWrapper';
import { ContactForm } from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Direct Engineering Access & Delivery Review | OITS',
  description: 'Book a 90-minute technical delivery review or contact our senior engineering team directly. Phone, email, studio location, and full-width interactive map.',
};

export default function ContactPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24 overflow-hidden pt-12 text-left">
      
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
          No commission-driven sales intermediaries. Tell us what is blocking your roadmap, and a named technical director will reply within 24 business hours.
        </p>
      </section>

      {/* 2. CONTACT DETAILS & INQUIRY FORM */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office, Phone & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                Direct Engineering Coordinates
              </h2>

              <div className="space-y-4 text-xs">
                {/* HQ Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      Engineering Command Base (Dhaka HQ)
                    </strong>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {REGISTERED_ADDRESS}
                    </p>
                  </div>
                </div>

                {/* Direct Phone Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      Telephone & Direct Lines
                    </strong>
                    <p className="text-slate-700 dark:text-slate-300 font-mono">
                      Dhaka HQ: <a href={`tel:${CONTACT_PHONE}`} className="hover:text-sky-500 font-semibold">{CONTACT_PHONE}</a>
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 font-mono">
                      Nordic Desk: <a href={`tel:${CONTACT_PHONE_NORDIC}`} className="hover:text-sky-500 font-semibold">{CONTACT_PHONE_NORDIC}</a>
                    </p>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      Direct Email Inquiries
                    </strong>
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-sky-600 dark:text-sky-400 hover:underline font-mono font-medium block mt-0.5"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">
                      Working Hours & European Overlap
                    </strong>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Sun – Thu: 09:00 – 18:00 (GMT+6)<br />
                      Synchronized CET Overlap: 08:00 – 13:00 CET<br />
                      24/7 On-Call SecOps for Active Enterprise SLAs
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>NDA executed by default before reviewing codebases.</span>
              </div>
            </div>

            {/* Named Lead Responders */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
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

          {/* Right Column: Contact Form Component (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </SectionWrapper>

      {/* 3. FULL-WIDTH DEDICATED GOOGLE MAPS ROW */}
      <SectionWrapper className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sky-500" />
            <h3 className="text-sm font-bold text-slate-950 dark:text-white">
              Studio Location & Geographic Coordinates
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Dhanmondi, Dhaka 1209, Bangladesh (23.8103° N, 90.4125° E)
          </span>
        </div>

        {/* Full-width Map Frame */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 h-[380px] sm:h-[450px] w-full relative">
          <iframe
            title="OITS Dhaka Studio Location Map"
            src="https://maps.google.com/maps?q=Dhanmondi%20Dhaka%20Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-500 w-full h-full"
          />
        </div>
      </SectionWrapper>

    </div>
  );
}
