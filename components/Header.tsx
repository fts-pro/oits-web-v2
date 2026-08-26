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
  Info,
  Mail,
  UserCircle,
  Sun, 
  Moon,
  Globe,
  Smartphone,
  Cloud,
  Lock,
  ChevronRight
} from 'lucide-react';
import { NAV_ITEMS, PRIMARY_CTA } from '../data/governedData';
import { BrandLogo } from './BrandLogo';
import { useTheme } from './ThemeProvider';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const getNavIcon = (label: string) => {
    switch (label) {
      case 'Home': return <Home className="w-3.5 h-3.5" />;
      case 'Services': return <Layers className="w-3.5 h-3.5" />;
      case 'Work': return <FolderKanban className="w-3.5 h-3.5" />;
      case 'How We Work': return <Cpu className="w-3.5 h-3.5" />;
      case 'AI & Accountability': return <Sparkles className="w-3.5 h-3.5" />;
      case 'Security & Trust': return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'About': return <Info className="w-3.5 h-3.5" />;
      case 'Contact': return <Mail className="w-3.5 h-3.5" />;
      default: return null;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-[#070A13]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-md' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg shrink-0"
          aria-label="OITS Dhaka - Home"
        >
          <BrandLogo height={36} />
        </Link>

        {/* Desktop Navigation with Icons & Mega Menu */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          
          {/* Home Item */}
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
              pathname === '/'
                ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10'
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Home className="w-3.5 h-3.5 text-sky-500" />
            <span>Home</span>
          </Link>

          {/* Dynamic Nav Items */}
          {NAV_ITEMS.map((item) => {
            if (item.label === 'Services') {
              return (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    aria-expanded={isServicesOpen}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                      pathname.startsWith('/services')
                        ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-sky-500" />
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-sky-500' : 'text-slate-400'}`} />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[520px] p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 grid grid-cols-2 gap-3">
                      
                      {/* Left: Core Capabilities */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3">
                          Core Capabilities
                        </span>
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex flex-col p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-950 dark:text-white group-hover:text-sky-500 transition-colors">
                                {sub.label}
                              </span>
                              <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                              {sub.description}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Right: Technical Domains */}
                      <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          Engineering Domains
                        </span>
                        <div className="space-y-1 pt-1">
                          <Link href="/services/build" className="flex items-center gap-2 p-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                            <Smartphone className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                            <span>Frontend & Mobile Apps</span>
                          </Link>
                          <Link href="/services/modernise" className="flex items-center gap-2 p-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                            <Cloud className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>Cloud Architecture & SRE</span>
                          </Link>
                          <Link href="/ai" className="flex items-center gap-2 p-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span>AI & Agentic Systems</span>
                          </Link>
                          <Link href="/security" className="flex items-center gap-2 p-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                            <Lock className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                            <span>Zero-Trust Cybersecurity</span>
                          </Link>
                        </div>
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

        {/* Right Actions: Theme Toggle + User Account Portal + Conversion CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* User Account / Workspace Access Icon */}
          <Link
            href="/start"
            aria-label="Client Workspace Portal"
            className="group relative p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <UserCircle className="w-4 h-4" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md transition-opacity whitespace-nowrap pointer-events-none z-50">
              Workspace Portal
            </span>
          </Link>

          {/* Primary CTA with single-line button text & arrow */}
          <Link
            href={PRIMARY_CTA.href}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <span className="leading-none">{PRIMARY_CTA.label}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 text-sky-400 dark:text-sky-600" />
          </Link>
        </div>

        {/* Mobile Header Bar */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <Link
            href="/start"
            aria-label="Client Workspace Portal"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
          >
            <UserCircle className="w-5 h-5" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            className="p-2 rounded-xl text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer with Icons */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl max-h-[85vh] overflow-y-auto space-y-4 animate-in slide-in-from-top-4 duration-200 text-left">
          <div className="space-y-1">
            <Link href="/" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Home className="w-4 h-4 text-sky-500" />
              <span>Home</span>
            </Link>
            
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3 pt-3">
              Services & Architecture
            </p>
            <Link href="/services/modernise" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Layers className="w-4 h-4 text-sky-500" />
              <span>Modernise & Decouple</span>
            </Link>
            <Link href="/services/build" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Smartphone className="w-4 h-4 text-emerald-500" />
              <span>Build Critical Software</span>
            </Link>
            <Link href="/services/operate" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Cloud className="w-4 h-4 text-indigo-500" />
              <span>Operate & SRE Pods</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3">
              Company & Direct Access
            </p>
            <Link href="/work" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <FolderKanban className="w-4 h-4 text-slate-400" />
              <span>Work & Case Studies</span>
            </Link>
            <Link href="/how-we-work" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Cpu className="w-4 h-4 text-slate-400" />
              <span>How We Work</span>
            </Link>
            <Link href="/ai" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>AI & Governance</span>
            </Link>
            <Link href="/security" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Security & Compliance</span>
            </Link>
            <Link href="/about" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Info className="w-4 h-4 text-slate-400" />
              <span>About & Leadership</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Mail className="w-4 h-4 text-sky-500" />
              <span>Contact & Delivery Review</span>
            </Link>
          </div>

          <div className="pt-4">
            <Link
              href={PRIMARY_CTA.href}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-md"
            >
              <span>{PRIMARY_CTA.label}</span>
              <ArrowRight className="w-4 h-4 text-sky-400 dark:text-sky-600" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
