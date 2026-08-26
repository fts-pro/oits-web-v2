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
  Sun, 
  Moon
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
      setIsScrolled(window.scrollY > 20);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-[#070A13]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-sm' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
          aria-label="OITS Dhaka - Home"
        >
          <BrandLogo height={36} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {/* Home Link with Icon */}
          <Link
            href="/"
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
              pathname === '/'
                ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10'
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {NAV_ITEMS.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    aria-expanded={isServicesOpen}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                      pathname.startsWith('/services')
                        ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-sky-500' : 'text-slate-400'}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl animate-in fade-in duration-150">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="flex flex-col p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                        >
                          <span className="text-xs font-bold text-slate-950 dark:text-white group-hover:text-sky-500 transition-colors">
                            {sub.label}
                          </span>
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
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                  isActive
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Theme toggle + Primary Conversion CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            href={PRIMARY_CTA.href}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <span className="leading-none">{PRIMARY_CTA.label}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 text-sky-400 dark:text-sky-600" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

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

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl max-h-[85vh] overflow-y-auto space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3 pt-2">Services</p>
            <Link href="/services/modernise" className="block px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              Modernise & Decouple
            </Link>
            <Link href="/services/build" className="block px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              Build Critical Software
            </Link>
            <Link href="/services/operate" className="block px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              Operate & SRE Pods
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3">Company & Proof</p>
            <Link href="/work" className="block px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              Work & Case Studies
            </Link>
            <Link href="/how-we-work" className="block px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              How We Work
            </Link>
            <Link href="/ai" className="block px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              AI & Governance
            </Link>
            <Link href="/security" className="block px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              Security & Compliance
            </Link>
            <Link href="/about" className="block px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-500">
              About & Leadership
            </Link>
          </div>

          <div className="pt-4">
            <Link
              href={PRIMARY_CTA.href}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md"
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
