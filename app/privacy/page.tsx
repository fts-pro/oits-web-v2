import React from 'react';
import type { Metadata } from 'next';
import { LEGAL_ENTITY_NAME, REGISTERED_ADDRESS, CONTACT_EMAIL } from '../../data/governedData';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data protection principles of OITS Dhaka Limited.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16 space-y-8 text-left">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
        Privacy Policy
      </h1>
      <p className="text-xs font-mono text-slate-400">
        Last updated: August 2026 | Effective for {LEGAL_ENTITY_NAME}
      </p>

      <div className="space-y-6 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">1. Data Controller Information</h2>
          <p>
            {LEGAL_ENTITY_NAME} ("OITS", "we", "our") with registered office at {REGISTERED_ADDRESS}, operates as the data controller for personal data collected through this website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">2. Information We Collect</h2>
          <p>
            We collect only information submitted directly by you via our Delivery Review booking forms or email inquiries (such as your name, business email, organization name, and technical project scope). We do not purchase data from third-party brokers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">3. Purpose and Legal Basis for Processing</h2>
          <p>
            We process your information exclusively to evaluate technical project feasibility, schedule architectural consultations, and respond to commercial inquiries.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">4. Data Retention & Zero AI Training</h2>
          <p>
            Client inquiry data and technical specifications submitted to OITS are never shared with public generative AI platforms or used for foundational model training.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">5. Contact & Data Subject Rights</h2>
          <p>
            To request data deletion, access, or portability, contact our Data Protection Officer at: <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-500 underline font-bold">{CONTACT_EMAIL}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
