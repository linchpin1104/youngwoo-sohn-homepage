'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LanguageProvider';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[var(--color-ink)] text-white/90 mt-auto border-t border-[var(--color-ink-border)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">
              {t('footer.contact')}
            </h3>
            <div className="space-y-1.5 text-sm font-mono">
              <a
                href="mailto:ywsohn@korea.ac.kr"
                className="block text-white/80 hover:text-[var(--color-terminal-green)] transition-colors"
              >
                ywsohn@korea.ac.kr
              </a>
              <a
                href="tel:+82232904422"
                className="block text-white/60 hover:text-white/80 transition-colors"
              >
                +82-2-3290-4422
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">
              {t('footer.address')}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              145, Anam-ro, Seongbuk-gu,
              <br />
              Seoul 02841, South Korea
              <br />
              <span className="text-white/50">Korea University</span>
            </p>
          </div>

          {/* External Links */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">
              {t('footer.external')}
            </h3>
            <div className="space-y-1.5 text-sm font-mono">
              <a
                href="https://www.researchgate.net/profile/Youngwoo-Sohn"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-white/80 hover:text-[var(--color-terminal-green)] transition-colors"
              >
                <span className="text-white/40 group-hover:text-[var(--color-terminal-green)]">↗</span>
                ResearchGate
              </a>
              <a
                href="http://ywsohn.korea.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-white/80 hover:text-[var(--color-terminal-green)] transition-colors"
              >
                <span className="text-white/40 group-hover:text-[var(--color-terminal-green)]">↗</span>
                Faculty Page
              </a>
              <a
                href="https://venture.korea.ac.kr/venture/intro/intro.do"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-white/80 hover:text-[var(--color-terminal-green)] transition-colors"
              >
                <span className="text-white/40 group-hover:text-[var(--color-terminal-green)]">↗</span>
                atCL @ Venture Portal
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[11px] text-white/30">
            © {new Date().getFullYear()} youngwoo.sohn — atCL / Korea University
          </p>
          <nav className="flex gap-4 font-mono text-[11px] text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">{t('nav.home')}</Link>
            <Link href="/research" className="hover:text-white/70 transition-colors">{t('nav.research')}</Link>
            <Link href="/teaching" className="hover:text-white/70 transition-colors">{t('nav.teaching')}</Link>
            <Link href="/lab" className="hover:text-white/70 transition-colors">{t('nav.lab')}</Link>
            <Link href="/status-quo" className="hover:text-white/70 transition-colors">{t('nav.status')}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
