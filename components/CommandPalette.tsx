'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  X, 
  Layers, 
  FolderKanban, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Info, 
  Mail, 
  Globe, 
  ArrowRight,
  Code2,
  FileText,
  Clock,
  CheckCircle2,
  Lock,
  Smartphone,
  Cloud
} from 'lucide-react';

export interface SearchResultItem {
  id: string;
  title: string;
  category: 'Services' | 'Works' | 'Methodology' | 'Company' | 'Locations';
  href: string;
  description: string;
  keywords: string[];
  icon: React.ReactNode;
}

const SEARCH_DATABASE: SearchResultItem[] = [
  // Services
  {
    id: 'srv-modernise',
    title: 'Modernise & Decouple',
    category: 'Services',
    href: '/services/modernise',
    description: 'Legacy refactoring, database partitioning, monolith decoupling & strangler fig migrations.',
    keywords: ['modernise', 'legacy', 'refactoring', 'database', 'decoupling', 'strangler', 'monolith'],
    icon: <Layers className="w-4 h-4 text-sky-500" />
  },
  {
    id: 'srv-build',
    title: 'Build Critical Applications',
    category: 'Services',
    href: '/services/build',
    description: 'Industrial-grade web applications, multi-tenant SaaS platforms & cross-platform mobile.',
    keywords: ['build', 'web', 'saas', 'mobile', 'frontend', 'backend', 'nextjs', 'react'],
    icon: <Smartphone className="w-4 h-4 text-emerald-500" />
  },
  {
    id: 'srv-operate',
    title: 'Operate & SRE Pods',
    category: 'Services',
    href: '/services/operate',
    description: 'Embedded reliability engineering, automated rollbacks, p99 latency SLAs & 24/7 SecOps.',
    keywords: ['operate', 'sre', 'devops', 'monitoring', 'uptime', 'sla', 'cloud', 'kubernetes'],
    icon: <Cloud className="w-4 h-4 text-indigo-500" />
  },
  {
    id: 'srv-dev-support',
    title: 'On-Demand Dev Support',
    category: 'Services',
    href: '/services/build',
    description: 'Senior engineer staff augmentation, agile velocity acceleration & technical debt cleanup.',
    keywords: ['support', 'staff', 'augmentation', 'agile', 'senior', 'developers', 'sprint'],
    icon: <Code2 className="w-4 h-4 text-amber-500" />
  },
  {
    id: 'srv-monitoring',
    title: '24/7 Monitoring & Maintenance',
    category: 'Services',
    href: '/services/operate',
    description: 'Continuous observability, automated incident response, patch management & security monitors.',
    keywords: ['monitoring', 'maintenance', 'secops', 'observability', 'patch', 'incident'],
    icon: <Clock className="w-4 h-4 text-purple-500" />
  },
  {
    id: 'srv-digital-transformation',
    title: 'Digital Transformation Services',
    category: 'Services',
    href: '/services/modernise',
    description: 'Cloud migration strategy, legacy decoupling roadmap & technical debt elimination advisory.',
    keywords: ['digital', 'transformation', 'advisory', 'cloud', 'strategy', 'roadmap'],
    icon: <Sparkles className="w-4 h-4 text-sky-400" />
  },

  // Works
  {
    id: 'work-ledger',
    title: 'Ledger Modernisation Case Study',
    category: 'Works',
    href: '/work/ledger-modernisation',
    description: '4.2x throughput increase and zero data loss on financial core ledger refactoring.',
    keywords: ['ledger', 'fintech', 'banking', 'payments', 'database', 'case study'],
    icon: <FolderKanban className="w-4 h-4 text-emerald-500" />
  },
  {
    id: 'work-telehealth',
    title: 'Telehealth Platform Case Study',
    category: 'Works',
    href: '/work/telehealth-platform',
    description: 'HIPAA-compliant high-concurrency video consultations and real-time medical charting.',
    keywords: ['telehealth', 'health', 'hipaa', 'video', 'webrtc', 'case study'],
    icon: <FolderKanban className="w-4 h-4 text-emerald-500" />
  },
  {
    id: 'work-logistics',
    title: 'Logistics Dispatch Engine Case Study',
    category: 'Works',
    href: '/work/logistics-dispatch-engine',
    description: 'Sub-second real-time route optimization handling 120k daily parcel dispatches.',
    keywords: ['logistics', 'dispatch', 'routing', 'maps', 'real-time', 'case study'],
    icon: <FolderKanban className="w-4 h-4 text-emerald-500" />
  },

  // Methodology
  {
    id: 'meth-how-we-work',
    title: 'Engagement Model & Progression',
    category: 'Methodology',
    href: '/how-we-work',
    description: 'Low-risk 4-step progression from 90-minute delivery review to full-scale operations.',
    keywords: ['how we work', 'engagement', 'progression', 'model', 'review', 'pilot'],
    icon: <Cpu className="w-4 h-4 text-indigo-500" />
  },
  {
    id: 'meth-agile-workflow',
    title: 'Agile Workflow & Sprints',
    category: 'Methodology',
    href: '/how-we-work#agile-workflow',
    description: '2-week sprint cadences, automated CI/CD safety nets, and live demo verification.',
    keywords: ['agile', 'sprint', 'workflow', 'cicd', 'demo', 'scrum', 'kanban'],
    icon: <Clock className="w-4 h-4 text-sky-500" />
  },
  {
    id: 'meth-ai-accountability',
    title: 'AI & Accountability',
    category: 'Methodology',
    href: '/ai',
    description: 'AI code acceleration governed by named senior human engineering sign-off.',
    keywords: ['ai', 'accountability', 'llm', 'copilot', 'governance', 'signoff', 'human'],
    icon: <Sparkles className="w-4 h-4 text-amber-500" />
  },
  {
    id: 'meth-security-trust',
    title: 'Security & Trust Framework',
    category: 'Methodology',
    href: '/security',
    description: 'Zero-trust perimeters, ISO 27001, SOC2 Type II compliance & vendor security pack.',
    keywords: ['security', 'trust', 'iso27001', 'soc2', 'owasp', 'encryption', 'gdpr'],
    icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />
  },

  // Company
  {
    id: 'comp-know-oits',
    title: 'Know OITS (About Us)',
    category: 'Company',
    href: '/about#know-oits',
    description: 'Swiss-modern engineering philosophy, Dhaka command base & Nordic client bridge.',
    keywords: ['about', 'know oits', 'company', 'dhaka', 'history', 'swiss'],
    icon: <Info className="w-4 h-4 text-amber-500" />
  },
  {
    id: 'comp-why-us',
    title: 'Why Us & Core Pillars',
    category: 'Company',
    href: '/about#why-us',
    description: 'Zero-debt architecture, 4 core foundation pillars & senior lead ownership.',
    keywords: ['why us', 'pillars', 'reasons', 'differentiation', 'senior'],
    icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />
  },
  {
    id: 'comp-mission-vision',
    title: 'Mission & Vision',
    category: 'Company',
    href: '/about#mission-vision',
    description: 'Engineering digital systems with uncompromising precision and long-term velocity.',
    keywords: ['mission', 'vision', 'philosophy', 'values', 'goals'],
    icon: <Sparkles className="w-4 h-4 text-sky-500" />
  },
  {
    id: 'comp-team',
    title: 'Our Team & Leadership',
    category: 'Company',
    href: '/team',
    description: 'Named senior technical directors, lead architects, and systems engineers.',
    keywords: ['team', 'leadership', 'tanvir', 'architects', 'engineers', 'leads'],
    icon: <Info className="w-4 h-4 text-purple-500" />
  },
  {
    id: 'comp-contact',
    title: 'Contact Us & Direct Coordinates',
    category: 'Company',
    href: '/contact',
    description: 'Direct studio phone numbers, email, Dhanmondi HQ address & Google Map location.',
    keywords: ['contact', 'email', 'phone', 'location', 'address', 'map', 'dhaka'],
    icon: <Mail className="w-4 h-4 text-sky-500" />
  },

  // Locations
  {
    id: 'loc-dhaka',
    title: 'Dhaka HQ (Command & Delivery Hub)',
    category: 'Locations',
    href: '/contact',
    description: 'Engineering command center in Dhanmondi, Dhaka. Primary engineering operations base.',
    keywords: ['dhaka', 'bangladesh', 'hq', 'office', 'command'],
    icon: <Globe className="w-4 h-4 text-emerald-500" />
  },
  {
    id: 'loc-stockholm',
    title: 'Stockholm Hub (Nordic Portal)',
    category: 'Locations',
    href: '/sv',
    description: 'Synchronized 4–5h daily CET overlap for European sprint standups and GDPR compliance.',
    keywords: ['stockholm', 'sweden', 'nordic', 'svenska', 'cet', 'europe'],
    icon: <Globe className="w-4 h-4 text-sky-500" />
  }
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter items based on query
  const filteredItems = query.trim() === ''
    ? SEARCH_DATABASE.slice(0, 8)
    : SEARCH_DATABASE.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.includes(q))
        );
      });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex].href);
      }
    }
  };

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Global Search and Command Palette"
    >
      <div 
        className="w-full max-w-2xl rounded-3xl bg-white dark:bg-[#071126] border border-slate-200 dark:border-sky-500/30 shadow-2xl overflow-hidden text-left animate-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#0A1633]/80">
          <Search className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, case studies, agile workflow, policies, hubs..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 text-[10px] font-mono font-bold bg-slate-200 dark:bg-[#0E2042] text-slate-600 dark:text-sky-300 rounded-md border border-slate-300 dark:border-sky-500/20">
              ESC
            </kbd>
          )}
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-10 text-center space-y-2">
              <Search className="w-8 h-8 text-slate-400 mx-auto opacity-50" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                No matching results found
              </p>
              <p className="text-xs text-slate-400">
                Try searching for "modernise", "sprint", "iso", "dhaka", or "telehealth"
              </p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.href)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3.5 rounded-2xl flex items-start gap-3.5 cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#E3EFFC] dark:bg-[#0F2248] border border-sky-500/40 shadow-sm'
                      : 'hover:bg-slate-50 dark:hover:bg-[#0A1836] border border-transparent'
                  }`}
                >
                  <div className={`p-2 rounded-xl mt-0.5 shrink-0 ${
                    isSelected 
                      ? 'bg-white dark:bg-[#163063] shadow-xs' 
                      : 'bg-slate-100 dark:bg-[#0D1C3D]'
                  }`}>
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0 space-y-0.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#0E2042] text-slate-600 dark:text-sky-300 shrink-0 border border-slate-200 dark:border-sky-500/20">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 leading-normal">
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight className={`w-4 h-4 mt-2 shrink-0 transition-transform ${
                    isSelected 
                      ? 'text-sky-600 dark:text-sky-400 translate-x-0.5' 
                      : 'text-slate-300 dark:text-slate-700 opacity-0'
                  }`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer Quick Navigation Hints */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#09142E] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#0E2042] text-slate-700 dark:text-sky-300 text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#0E2042] text-slate-700 dark:text-sky-300 text-[10px]">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-[#0E2042] text-slate-700 dark:text-sky-300 text-[10px]">↵</kbd>
              <span>Open</span>
            </span>
          </div>

          <span>{filteredItems.length} destinations</span>
        </div>

      </div>
    </div>
  );
};
