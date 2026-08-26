import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Globe, Lock } from 'lucide-react';
import { PRIMARY_CTA, CONTACT_EMAIL } from '../../data/governedData';

export const metadata: Metadata = {
  title: 'OITS för Svenska och Nordiska Företag | Ingenjörspartner',
  description: 'OITS är en ansvarstagande ingenjörspartner för nordiska företag som vill modernisera, bygga och drifta affärskritisk mjukvara. 4-5 timmars överlapp med CET och strikt GDPR-efterlevnad.',
};

export default function SwedenPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 sm:py-16 space-y-16 text-left">
      
      {/* Header in Swedish */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold">
          <Globe className="w-3.5 h-3.5" />
          <span>Nordic Hub / Sverige</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Ansvarstagande ingenjörskonst för svenska företag.
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          OITS hjälper svenska och nordiska teknikorganisationer att modernisera äldre system, bygga robusta webb- och mobilapplikationer samt drifta affärskritisk infrastruktur med namngivet senioransvar.
        </p>
      </div>

      {/* 4 Core Nordic Trust Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-sky-500 font-mono text-xs font-bold uppercase">
            <Clock className="w-4 h-4" />
            <span>4–5 Timmars Dagligt Överlapp (CET)</span>
          </div>
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">
            Direkt synkroniserad arbetstid med Stockholm
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Våra team arbetar med kontinuerligt överlapp under svensk kontorstid (09:00–14:00 CET), vilket möjliggör dagliga standups, snabb återkoppling i Slack och sprintplanering i realtid.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs font-bold uppercase">
            <Lock className="w-4 h-4" />
            <span>GDPR & EU Dataskyddsefterlevnad</span>
          </div>
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">
            Standard Contractual Clauses (SCC) & DPA
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Vi tillhandahåller färdiga personuppgiftsbiträdesavtal (DPA) och EU-godkända standardavtalsklausuler för att säkerställa full regelefterlevnad för nordiska kunder.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-purple-500 font-mono text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Namngivet Senioransvar</span>
          </div>
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">
            Inga anonyma utvecklare
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Varje sprint leds och godkänns av en namngiven chefsarkitekt. All källkod granskas manuellt före produktionsdriftsättning.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-amber-500 font-mono text-xs font-bold uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>Börja med 90 Minuters Granskning</span>
          </div>
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">
            Låg risk och stegvis leveransmodell
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Vi inleder alltid med en kostnadsfri 90-minuters arkitekturgranskning och en avgränsad 2-veckors pilot innan långsiktiga avtal ingås.
          </p>
        </div>
      </div>

      {/* CTA Box in Swedish */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-white">Boka en 90-minuters Delivery Review</h2>
          <p className="text-xs text-slate-300">Kostnadsfri och konfidentiell teknisk genomgång med vår chefsarkitekt.</p>
        </div>
        <Link
          href={PRIMARY_CTA.href}
          className="px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shrink-0"
        >
          Boka Genomgång Nu
        </Link>
      </div>

    </div>
  );
}
