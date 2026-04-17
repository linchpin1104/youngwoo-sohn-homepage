'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/LanguageProvider';
import LangToggle from '@/components/ui/LangToggle';

const navItems = [
  { href: '/', key: 'nav.home' as const },
  { href: '/research', key: 'nav.research' as const },
  { href: '/teaching', key: 'nav.teaching' as const },
  { href: '/lab', key: 'nav.lab' as const },
  { href: '/status-quo', key: 'nav.status' as const },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { t } = useLang();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-72 bg-[var(--color-bg)] border-l border-[var(--color-border)] shadow-xl z-50 p-6"
          >
            <div className="flex items-center justify-between">
              <LangToggle />
              <button
                onClick={onClose}
                className="p-2"
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1 font-mono text-[15px]">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block px-3 py-2.5 rounded-sm transition-colors ${
                        isActive
                          ? 'text-[var(--color-text-primary)] bg-[var(--color-bg-alt)] border border-[var(--color-border-strong)]'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-alt)] border border-transparent'
                      }`}
                    >
                      {isActive && <span className="text-[var(--color-accent)] mr-1">›</span>}
                      {t(item.key)}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="absolute bottom-8 left-6 right-6 font-mono text-xs text-[var(--color-text-tertiary)] space-y-1">
              <a href="mailto:ywsohn@korea.ac.kr" className="block hover:text-[var(--color-accent)]">
                ↗ ywsohn@korea.ac.kr
              </a>
              <a href="tel:+82232904422" className="block hover:text-[var(--color-accent)]">
                ↗ +82-2-3290-4422
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
