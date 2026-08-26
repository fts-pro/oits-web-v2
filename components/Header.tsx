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
  Activity,
  Calendar
} from 'lucide-react';
import { NAV_ITEMS, PRIMARY_CTA } from '../data/governedData';
import { BrandLogo } from './BrandLogo';
import { useTheme } from './ThemeProvider';
import { CommandPalette } from './CommandPalette';

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

  // Specific Glowing Icons for Mega-Menu Sub Items
  const getSubItemIcon = (label: string) => {
    switch (label) {
      case 'Modernise & Decouple':
        return <Layers className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />;
      case 'Build Critical Applications':
        return <Smartphone className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />;
      case 'Operate & SRE Pods':
        return <Cloud className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(129,140,248,0.6)]" />;
      case 'On-Demand Dev Support':
        return <Code2 className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />;
      case '24/7 Monitoring & Maintenance':
        return <Clock className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.6)]" />;
      case 'Digital Transformation Services':
        return <Sparkles className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />;
      
      case 'Case Studies & Delivered Systems':
        return <FolderKanban className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />;
      case 'Enterprise Solutions & Architecture':
        return <Cpu className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(129,140,248,0.6)]" />;

      case 'Engagement Model & Progression':
        return <ArrowRight className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />;
      case 'Agile Workflow & Sprints':
        return <Clock className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />;
      case 'AI & Accountability':
        return <Sparkles className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />;
      case 'Security & Trust':
        return <ShieldCheck className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.6)]" />;

      case 'Know OITS':
        return <Building2 className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />;
      case 'Why Us':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />;
      case 'Mission & Vision':
        return <Compass className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />;
      case 'Our Policies & Compliance':
        return <ShieldCheck className="w-4 h-4 text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.6)]" />;
      case 'Our Team & Leadership':
        return <Users className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(129,140,248,0.6)]" />;
      case 'Client Testimonials':
        return <Quote className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />;

      default:
        return <Sparkles className="w-4 h-4 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />;
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-[#070A13]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-md' 
          : 'bg-transparent py-4 sm:py-5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          
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

            {/* Dynamic Nav Items with Click-to-Parent & Hover-to-MegaMenu */}
            {NAV_ITEMS.map((item) => {
              const isTwoColumn = item.label === 'Services' || item.label === 'About Us';
              const hasChildren = !!item.children;
              const isHovered = hoveredMenu === item.label;
              const isCurrentActive = pathname === item.href || (item.children && item.children.some(c => pathname === c.href));

              if (hasChildren) {
                return (
                  <div 
                    key={item.label} 
                    className="relative"
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

                    {/* Mega Menu Dropdown on Hover with Glowing Icons */}
                    {isHovered && (
                      <div className={`absolute top-full left-0 mt-1 p-3.5 rounded-3xl bg-white dark:bg-[#071126] border border-slate-200 dark:border-sky-500/30 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50 ${
                        isTwoColumn ? 'w-[560px] grid grid-cols-2 gap-2.5' : 'w-84 space-y-1.5'
                      }`}>
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-[#0E2042] transition-all group border border-transparent hover:border-slate-200 dark:hover:border-sky-500/30 text-left"
                          >
                            <div className="p-2 rounded-xl bg-slate-100 dark:bg-[#0A1633] group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                              {getSubItemIcon(sub.label)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <span className="text-xs font-bold text-slate-950 dark:text-white group-hover:text-sky-500 transition-colors">
                                  {sub.label}
                                </span>
                                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-300 mt-0.5 leading-snug line-clamp-2">
                                {sub.description}
                              </p>
                            </div>
                          </Link>
                        ))}
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
            className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-50 bg-[#070A13]/95 backdrop-blur-2xl border-t border-slate-800 p-6 flex flex-col justify-between overflow-y-auto text-left animate-in slide-in-from-top-3 duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile site navigation"
          >
            <div className="space-y-3">
              <Link 
                href="/" 
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold text-white hover:bg-slate-800/60 min-h-[44px]"
              >
                <Home className="w-5 h-5 text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]" />
                <span>Home</span>
              </Link>
              
              {NAV_ITEMS.map((item) => {
                const hasChildren = !!item.children;
                const isExpanded = mobileExpandedSection === item.label;

                if (hasChildren) {
                  return (
                    <div key={item.label} className="border-b border-slate-800/80 pb-2">
                      <button
                        type="button"
                        onClick={() => toggleMobileSection(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold text-white hover:bg-slate-800/60 transition-colors min-h-[44px]"
                      >
                        <div className="flex items-center gap-3">
                          {getNavIcon(item.label)}
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-sky-400' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="pl-4 pr-2 py-2 space-y-2 animate-in slide-in-from-top-2 duration-150">
                          {item.children?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 min-h-[44px]"
                            >
                              <div className="flex items-center gap-2.5">
                                {getSubItemIcon(sub.label)}
                                <span>{sub.label}</span>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                            </Link>
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
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold text-white hover:bg-slate-800/60 min-h-[44px]"
                  >
                    {getNavIcon(item.label)}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Drawer Footer Actions (v2 Production Footer) */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <Link
                href={PRIMARY_CTA.href}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-98"
              >
                <span>{PRIMARY_CTA.label}</span>
                <ArrowRight className="w-4 h-4 text-sky-600" />
              </Link>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
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
