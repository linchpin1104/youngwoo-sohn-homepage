'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import LangToggle from '@/components/ui/LangToggle';
import { profile } from '@/data/profile';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border)]'
            : 'bg-[var(--color-bg)]/30 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-mono text-sm text-[var(--color-text-primary)]"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 border border-[var(--color-border-strong)] rounded-sm bg-[var(--color-ink)] text-[var(--color-terminal-green)] text-[10px] font-bold tracking-tighter">
              YS
            </span>
            <span className="font-semibold">
              youngwoo<span className="text-[var(--color-text-tertiary)]">.sohn</span>
            </span>
            <span className="hidden sm:inline text-[10px] text-[var(--color-text-tertiary)] border border-[var(--color-border)] px-1.5 py-0.5 rounded-sm">
              atCL
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-3">
            <Navigation />
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Email Youngwoo Sohn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[var(--color-border-strong)] bg-[var(--color-ink)] text-[var(--color-terminal-green)] hover:text-white hover:bg-[var(--color-ink-soft)] font-mono text-[13px] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              mail
            </a>
            <LangToggle />
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
