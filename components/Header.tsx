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
  Smartphone,
  Cloud,
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
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setHoveredMenu(null);
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

  const getNavIcon = (label: string) => {
    switch (label) {
      case 'Services': return <Layers className="w-3.5 h-3.5 text-sky-500" />;
      case 'Our Works': return <FolderKanban className="w-3.5 h-3.5 text-emerald-500" />;
      case 'How We Work': return <Cpu className="w-3.5 h-3.5 text-indigo-500" />;
      case 'About': return <Info className="w-3.5 h-3.5 text-amber-500" />;
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

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
          
          {/* Home Icon Only */}
          <Link
            href="/"
            aria-label="Home"
            className={`group relative p-2.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
              pathname === '/'
                ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10 ring-1 ring-sky-500/30'
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
              Home
            </span>
          </Link>

          {/* Dynamic Nav Items with Click-to-Parent & Hover-to-MegaMenu */}
          {NAV_ITEMS.map((item) => {
            const isServices = item.label === 'Services';
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

                  {/* Mega Menu Dropdown on Hover */}
                  {isHovered && (
                    <div className={`absolute top-full left-0 mt-1 p-3 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50 ${
                      isServices ? 'w-[540px] grid grid-cols-2 gap-2' : 'w-80 space-y-1'
                    }`}>
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="flex flex-col p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 text-left"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-slate-950 dark:text-white group-hover:text-sky-500 transition-colors">
                              {sub.label}
                            </span>
                            <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                          </div>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                            {sub.description}
                          </span>
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

        {/* Right Section: Vertical Divider + Contact + Theme Toggle + User Account + CTA */}
        <div className="hidden sm:flex items-center gap-2">
          
          {/* Vertical Divider */}
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1.5" />

          {/* 1. Contact Icon Only */}
          <Link
            href="/contact"
            aria-label="Contact & Delivery Review"
            className={`group relative p-2.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
              pathname === '/contact'
                ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10 ring-1 ring-sky-500/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Mail className="w-4 h-4 text-sky-500" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
              Contact & Inquiries
            </span>
          </Link>

          {/* 2. Theme Toggler */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* 3. User Account / Workspace Portal */}
          <Link
            href="/start"
            aria-label="Client Workspace Portal"
            className="group relative p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <UserCircle className="w-4 h-4" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
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

        {/* Mobile Header Bar */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <Link
            href="/contact"
            aria-label="Contact Us"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
          >
            <Mail className="w-4 h-4 text-sky-500" />
          </Link>

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

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl max-h-[85vh] overflow-y-auto space-y-4 animate-in slide-in-from-top-4 duration-200 text-left">
          <div className="space-y-1">
            <Link href="/" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Home className="w-4 h-4 text-sky-500" />
              <span>Home</span>
            </Link>
            
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3 pt-3">
              Services & Capabilities
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
              Our Works & Delivery
            </p>
            <Link href="/work" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <FolderKanban className="w-4 h-4 text-emerald-500" />
              <span>Case Studies & Systems</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3">
              How We Work
            </p>
            <Link href="/how-we-work" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Cpu className="w-4 h-4 text-indigo-500" />
              <span>Engagement Progression</span>
            </Link>
            <Link href="/ai" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>AI & Accountability</span>
            </Link>
            <Link href="/security" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Security & Trust</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3">
              Company
            </p>
            <Link href="/about" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Info className="w-4 h-4 text-slate-400" />
              <span>About OITS</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Mail className="w-4 h-4 text-sky-500" />
              <span>Contact & Direct Inquiries</span>
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
