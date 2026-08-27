'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Delivery Review',
    question: 'What happens during the 90-minute Delivery Review?',
    answer: 'The session is led directly by our Lead Systems Architect. We examine your system constraints, database bottlenecks, architecture diagrams, or roadmap blockers. You receive a concrete recommendations memo detailing decoupling options, risk mitigation steps, and milestone estimates—with zero sales pitch.'
  },
  {
    id: 'faq-2',
    category: 'Architecture',
    question: 'How do you guarantee zero downtime during legacy migrations?',
    answer: 'We utilize the Strangler Fig and Outbox architectural patterns. Legacy pathways continue operating unchanged while new event-driven modules run in parallel shadow verification. Traffic is incrementally migrated using canary routing only after regression tests pass with 100% data consistency.'
  },
  {
    id: 'faq-3',
    category: 'Governance & IP',
    question: 'Who owns the intellectual property and code repository?',
    answer: 'You retain 100% exclusive intellectual property ownership of all source code, architectural schemas, automated test suites, and deployment scripts from day one. Everything is pushed directly to your organization’s private Git repositories.'
  },
  {
    id: 'faq-4',
    category: 'Collaboration',
    question: 'How do you coordinate with European (CET) and global teams?',
    answer: 'We provide 4 to 5 hours of synchronized daily overlap with European business hours (09:00–14:00 CET) for daily standups, live sprint reviews, and direct Slack/Teams collaboration, combined with structured asynchronous handovers for US time zones.'
  },
  {
    id: 'faq-5',
    category: 'AI & Security',
    question: 'How do you enforce security and data isolation when using AI?',
    answer: 'We enforce a strict Zero-Data Retention policy and prohibit submitting client proprietary code or credentials to public LLMs. AI assists with syntax boilerplate and test generation, but every single line of code merged into production is reviewed, secured, and signed off by a named senior engineer.'
  }
];

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 text-left">
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all ${
              isOpen
                ? 'bg-white dark:bg-slate-900 border-sky-500/40 shadow-sm'
                : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
              className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {faq.category}
                </span>
                <span className="text-sm font-bold text-slate-950 dark:text-white">
                  {faq.question}
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-500' : ''}`} />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1 animate-in fade-in duration-150">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
