'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Home,
  Layers,
  FolderKanban,
  Cpu,
  Sparkles,
  ShieldCheck,
  Compass,
  Mail,
  UserCircle,
  Sun, 
  Moon,
  Smartphone,
  Cloud,
  ChevronRight,
  Search,
  Clock,
  Code2,
  Building2,
  CheckCircle2,
  Users,
  Quote,
  Zap,
  Lock,
  Server,
  Briefcase
} from 'lucide-react';
import { NAV_ITEMS, PRIMARY_CTA } from '../data/governedData';
import { BrandLogo } from './BrandLogo';
import { useTheme } from './ThemeProvider';
import { CommandPalette } from './CommandPalette';

interface MegaMenuCategory {
  title: string;
  icon: React.ReactNode;
  items: {
    label: string;
    href: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

interface MegaMenuConfig {
  width: string;
  gridCols: string;
  footerNote: string;
  footerHref: string;
  footerLabel: string;
  categories: MegaMenuCategory[];
}

const MEGA_MENUS: Record<string, MegaMenuConfig> = {
  'Services': {
    width: 'w-[min(740px,calc(100vw-2.5rem))]',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    footerNote: 'Continuous reliability engineering & zero-downtime migrations',
    footerHref: '/services/modernise',
    footerLabel: 'Explore all service outcomes',
    categories: [
      {
        title: 'Modernise & Decouple',
        icon: <Layers className="w-3.5 h-3.5 text-sky-400" />,
        items: [
          {
            label: 'Modernise & Decouple',
            href: '/services/modernise',
            description: 'Legacy refactoring, database partitioning & monolith decoupling.',
            icon: <Layers className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
          },
          {
            label: 'Digital Transformation',
            href: '/services/modernise',
            description: 'Cloud migration strategy & technical debt elimination.',
            icon: <Sparkles className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
          }
        ]
      },
      {
        title: 'Greenfield & Build',
        icon: <Smartphone className="w-3.5 h-3.5 text-emerald-400" />,
        items: [
          {
            label: 'Build Critical Applications',
            href: '/services/build',
            description: 'Industrial-grade web applications & native mobile apps.',
            icon: <Smartphone className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
          },
          {
            label: 'On-Demand Dev Support',
            href: '/services/build',
            description: 'Senior engineer staff augmentation & sprint acceleration.',
            icon: <Code2 className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
          }
        ]
      },
      {
        title: 'Operate & SRE',
        icon: <Cloud className="w-3.5 h-3.5 text-indigo-400" />,
        items: [
          {
            label: 'Operate & SRE Pods',
            href: '/services/operate',
            description: 'Embedded reliability engineering & p99 latency SLAs.',
            icon: <Cloud className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(129,140,248,0.6)]" />
          },
          {
            label: '24/7 Monitoring & SecOps',
            href: '/services/operate',
            description: 'Continuous uptime observability & automated incident response.',
            icon: <Clock className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.6)]" />
          }
        ]
      }
    ]
  },
  'Our Works': {
    width: 'w-[min(580px,calc(100vw-2.5rem))]',
    gridCols: 'grid-cols-1 sm:grid-cols-2',
    footerNote: 'Audited benchmark metrics & production case studies',
    footerHref: '/work',
    footerLabel: 'View all case studies',
    categories: [
      {
        title: 'Delivered Case Studies',
        icon: <FolderKanban className="w-3.5 h-3.5 text-emerald-400" />,
        items: [
          {
            label: 'Ledger Modernisation',
            href: '/work/ledger-modernisation',
            description: '4.2x throughput increase on financial core ledger.',
            icon: <FolderKanban className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
          },
          {
            label: 'Telehealth Platform',
            href: '/work/telehealth-platform',
            description: 'HIPAA-compliant high-concurrency video consultations.',
            icon: <FolderKanban className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
          }
        ]
      },
      {
        title: 'High-Density Architectures',
        icon: <Cpu className="w-3.5 h-3.5 text-indigo-400" />,
        items: [
          {
            label: 'Logistics Dispatch Engine',
            href: '/work/logistics-dispatch-engine',
            description: 'Sub-second routing handling 120k daily dispatches.',
            icon: <Cpu className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(129,140,248,0.6)]" />
          },
          {
            label: 'Enterprise Solutions',
            href: '/work',
            description: 'Distributed architectures & benchmark results.',
            icon: <Briefcase className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
          }
        ]
      }
    ]
  },
  'How We Work': {
    width: 'w-[min(580px,calc(100vw-2.5rem))]',
    gridCols: 'grid-cols-1 sm:grid-cols-2',
    footerNote: 'Senior human sign-off on every production pull request',
    footerHref: '/how-we-work',
    footerLabel: 'Review delivery governance',
    categories: [
      {
        title: 'Delivery Progression',
        icon: <Cpu className="w-3.5 h-3.5 text-indigo-400" />,
        items: [
          {
            label: 'Engagement Progression',
            href: '/how-we-work',
            description: 'Low-risk 4-step progression from 90-min review to full scale.',
            icon: <ArrowRight className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
          },
          {
            label: 'Agile Workflow & Sprints',
            href: '/how-we-work#agile-workflow',
            description: '2-week sprint cadences, automated CI/CD & live demos.',
            icon: <Clock className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
          }
        ]
      },
      {
        title: 'Governance & Trust',
        icon: <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />,
        items: [
          {
            label: 'AI & Accountability',
            href: '/ai',
            description: 'AI code acceleration governed by named senior human sign-off.',
            icon: <Sparkles className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
          },
          {
            label: 'Security & Trust Pack',
            href: '/security',
            description: 'Zero-trust perimeters, ISO/SOC2 alignment & vendor pack.',
            icon: <ShieldCheck className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.6)]" />
          }
        ]
      }
    ]
  },
  'About Us': {
    width: 'w-[min(740px,calc(100vw-2.5rem))]',
    gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    footerNote: 'Engineering precision & direct European CET overlap window',
    footerHref: '/about',
    footerLabel: 'Read full studio story',
    categories: [
      {
        title: 'Identity & Foundations',
        icon: <Building2 className="w-3.5 h-3.5 text-sky-400" />,
        items: [
          {
            label: 'Know OITS',
            href: '/about#know-oits',
            description: 'Dhaka command base, Nordic bridge & engineering DNA.',
            icon: <Building2 className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
          },
          {
            label: 'Why Us & 4 Pillars',
            href: '/about#why-us',
            description: 'Zero-debt architecture & senior lead ownership.',
            icon: <CheckCircle2 className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
          }
        ]
      },
      {
        title: 'Philosophy & Policy',
        icon: <Compass className="w-3.5 h-3.5 text-amber-400" />,
        items: [
          {
            label: 'Mission & Vision',
            href: '/about#mission-vision',
            description: 'Swiss-modern craftsmanship and software velocity.',
            icon: <Compass className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
          },
          {
            label: 'Policies & Compliance',
            href: '/about#policies',
            description: 'ISO 27001, SOC2 Type II, OWASP ASVS & GDPR DPA.',
            icon: <ShieldCheck className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.6)]" />
          }
        ]
      },
      {
        title: 'Team & Feedback',
        icon: <Users className="w-3.5 h-3.5 text-indigo-400" />,
        items: [
          {
            label: 'Our Team & Leadership',
            href: '/team',
            description: 'Named senior technical directors & architects.',
            icon: <Users className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(129,140,248,0.6)]" />
          },
          {
            label: 'Client Testimonials',
            href: '/about#testimonials',
            description: 'Audited feedback from CTOs and engineering directors.',
            icon: <Quote className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
          }
        ]
      }
    ]
  }
};

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setHoveredMenu(null);
    setIsSearchOpen(false);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredMenu(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 180);
  };

  const toggleMobileSection = (label: string) => {
    setMobileExpandedSection(prev => prev === label ? null : label);
  };

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Glowing Luminous Icons for Parent Nav Items
  const getNavIcon = (label: string) => {
    switch (label) {
      case 'Services': 
        return <Layers className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />;
      case 'Our Works': 
        return <FolderKanban className="w-3.5 h-3.5 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]" />;
      case 'How We Work': 
        return <Cpu className="w-3.5 h-3.5 text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.7)]" />;
      case 'About Us': 
        return <Compass className="w-3.5 h-3.5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]" />;
      default: 
        return null;
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/98 dark:bg-[#070A13]/98 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-md' 
          : 'bg-transparent py-4 sm:py-5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg shrink-0"
            aria-label="OITS Dhaka - Home"
          >
            <BrandLogo height={36} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            
            {/* Glowing Home Icon Only */}
            <Link
              href="/"
              aria-label="Home"
              className={`group relative p-2.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                pathname === '/'
                  ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10 ring-1 ring-sky-500/30'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <Home className="w-4 h-4 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg font-mono">
                Home
              </span>
            </Link>

            {/* Dynamic Nav Items with Multi-Column Categorized v2 Mega-Menu */}
            {NAV_ITEMS.map((item) => {
              const megaConfig = MEGA_MENUS[item.label];
              const isHovered = hoveredMenu === item.label;
              const isCurrentActive = pathname === item.href || (item.children && item.children.some(c => pathname === c.href));

              if (megaConfig) {
                return (
                  <div 
                    key={item.label} 
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                        isHovered || isCurrentActive
                          ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10'
                          : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      {getNavIcon(item.label)}
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isHovered ? 'rotate-180 text-sky-500' : 'text-slate-400'}`} />
                    </Link>

                    {/* Categorized Multi-Column v2 Mega Menu (Centered to Header Container) */}
                    {isHovered && (
                      <div 
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 ${megaConfig.width} max-w-[calc(100vw-2.5rem)] p-5 sm:p-6 bg-white/98 dark:bg-[#081226]/98 backdrop-blur-2xl border border-slate-200 dark:border-sky-500/30 rounded-3xl shadow-2xl shadow-black/20 animate-in fade-in-0 zoom-in-95 duration-200 z-50`}
                      >
                        <div className={`grid ${megaConfig.gridCols} gap-6 text-left`}>
                          {megaConfig.categories.map((cat, idx) => (
                            <div key={idx} className="space-y-3">
                              {/* Category Header */}
                              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                                {cat.icon}
                                <span>{cat.title}</span>
                              </div>

                              {/* Category Items */}
                              <div className="space-y-1.5">
                                {cat.items.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-[#0E2042] transition-colors group/item block border border-transparent hover:border-slate-200 dark:hover:border-sky-500/30"
                                  >
                                    <div className="flex items-center justify-between gap-1">
                                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover/item:text-sky-500 transition-colors">
                                        {sub.label}
                                      </p>
                                      <ChevronRight className="w-3 h-3 text-slate-400 group-hover/item:translate-x-0.5 transition-transform shrink-0" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 font-normal leading-snug">
                                      {sub.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Mega Menu Footer Bar */}
                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                            {megaConfig.footerNote}
                          </span>
                          <Link
                            href={megaConfig.footerHref}
                            className="text-sky-600 dark:text-sky-400 hover:underline font-bold flex items-center gap-1 text-[11px] group"
                          >
                            <span>{megaConfig.footerLabel}</span>
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {getNavIcon(item.label)}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Divider + Search + Contact + Theme Toggle + User Account + CTA */}
          <div className="hidden lg:flex items-center gap-1.5">
            
            {/* Vertical Divider */}
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1.5" />

            {/* 0. Glowing Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              type="button"
              aria-label="Global Search (Ctrl+K)"
              className="group relative p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <Search className="w-4 h-4 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg font-mono">
                Search (Ctrl+K)
              </span>
            </button>

            {/* 1. Glowing Contact Icon Only */}
            <Link
              href="/contact"
              aria-label="Contact & Delivery Review"
              className={`group relative p-2.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                pathname === '/contact'
                  ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10 ring-1 ring-sky-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <Mail className="w-4 h-4 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg font-mono">
                Contact & Inquiries
              </span>
            </Link>

            {/* 2. Glowing Theme Toggler */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
              )}
            </button>

            {/* 3. Glowing User Account / Workspace Portal */}
            <Link
              href="/start"
              aria-label="Client Workspace Portal"
              className="group relative p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <UserCircle className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg font-mono">
                Workspace Portal
              </span>
            </Link>

            {/* Primary CTA (Single-line Button Text + Arrow) */}
            <Link
              href={PRIMARY_CTA.href}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ml-1"
            >
              <span className="leading-none">{PRIMARY_CTA.label}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 text-sky-400 dark:text-sky-600" />
            </Link>
          </div>

          {/* Mobile Header Bar Icons (Following v2 Responsive Layout) */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              type="button"
              aria-label="Search"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              <Search className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]" />
            </button>

            <Link
              href="/contact"
              aria-label="Contact Us"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              <Mail className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]" />
            </Link>

            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle Theme"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer (Full-Height v2 Architectural Drawer) */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 z-[100] bg-white/98 dark:bg-[#070A13]/98 backdrop-blur-2xl border-t border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-y-auto text-left animate-in slide-in-from-top-2 duration-200 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile site navigation"
          >
            <div className="space-y-3">
              <Link 
                href="/" 
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 min-h-[44px]"
              >
                <Home className="w-5 h-5 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]" />
                <span>Home</span>
              </Link>
              
              {NAV_ITEMS.map((item) => {
                const megaConfig = MEGA_MENUS[item.label];
                const isExpanded = mobileExpandedSection === item.label;

                if (megaConfig) {
                  return (
                    <div key={item.label} className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
                      <button
                        type="button"
                        onClick={() => toggleMobileSection(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors min-h-[44px]"
                      >
                        <div className="flex items-center gap-3">
                          {getNavIcon(item.label)}
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-sky-400' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="pl-4 pr-2 py-2 space-y-3 animate-in slide-in-from-top-2 duration-150">
                          {megaConfig.categories.map((cat, idx) => (
                            <div key={idx} className="space-y-1.5">
                              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5 pt-1">
                                {cat.icon}
                                <span>{cat.title}</span>
                              </p>
                              {cat.items.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 min-h-[40px]"
                                >
                                  <div className="flex items-center gap-2">
                                    {sub.icon}
                                    <span>{sub.label}</span>
                                  </div>
                                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 min-h-[44px]"
                  >
                    {getNavIcon(item.label)}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Drawer Footer Actions (v2 Production Footer) */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <Link
                href={PRIMARY_CTA.href}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-98"
              >
                <span>{PRIMARY_CTA.label}</span>
                <ArrowRight className="w-4 h-4 text-sky-400 dark:text-sky-600" />
              </Link>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>status: 99.99% Uptime</span>
                </span>
                <span>v2.4 Production</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Command & Search Palette Modal */}
      <CommandPalette 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};
