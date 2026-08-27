import React from 'react';
import type { Metadata } from 'next';
import { LEGAL_ENTITY_NAME } from '../../data/governedData';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie usage and tracking policy for OITS.',
};

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl py-12 sm:py-16 space-y-8 text-left">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
        Cookie Policy
      </h1>
      <p className="text-xs font-mono text-slate-400">
        Last updated: August 2026 | Effective for {LEGAL_ENTITY_NAME}
      </p>

      <div className="space-y-6 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">1. Essential Storage Only</h2>
          <p>
            This website utilizes minimal essential browser storage (localStorage) solely to store your preferred dark/light theme preference. We do not use intrusive cross-site ad retargeting cookies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">2. Analytical Telemetry</h2>
          <p>
            If aggregated web traffic analytics are enabled, telemetry is processed in an anonymized fashion without recording personally identifiable information or keystrokes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-950 dark:text-white uppercase font-mono">3. Managing Preferences</h2>
          <p>
            You can clear your local storage and cookies at any time through your browser settings without affecting the core readability of this website.
          </p>
        </section>
      </div>
    </div>
  );
}
