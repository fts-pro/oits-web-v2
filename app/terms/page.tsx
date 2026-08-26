import React from 'react';
import type { Metadata } from 'next';
import { LEGAL_ENTITY_NAME, REGISTERED_ADDRESS } from '../../data/governedData';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service and engagement terms of OITS Dhaka Limited.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16 space-y-8 text-left">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
        Terms of Service
      </h1>
      <p className="text-xs font-mono text-slate-400">
        Last updated: August 2026 | Effective for {LEGAL_ENTITY_NAME}
      </p>

      <div className="space-y-6 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">1. Agreement to Terms</h2>
          <p>
            By accessing or using the marketing website of {LEGAL_ENTITY_NAME}, you agree to be bound by these terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">2. Commercial Consultations & Delivery Reviews</h2>
          <p>
            Delivery Reviews and initial architectural consultations provided by OITS are advisory sessions. Specific engineering deliverables, warranties, and SLAs are governed by formal Master Services Agreements (MSAs) and Statements of Work (SOWs) executed separately with clients.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">3. Intellectual Property</h2>
          <p>
            All custom software engineering, scripts, designs, and architectural deliverables created for contracted clients become 100% the intellectual property of the client upon payment of agreed milestone invoices.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws applicable to {LEGAL_ENTITY_NAME} at its registered seat in {REGISTERED_ADDRESS}.
          </p>
        </section>
      </div>
    </div>
  );
}
