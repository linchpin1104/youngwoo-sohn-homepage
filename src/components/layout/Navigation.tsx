'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib/LanguageProvider';

const navItems = [
  { href: '/', key: 'nav.home' as const },
  { href: '/research', key: 'nav.research' as const },
  { href: '/teaching', key: 'nav.teaching' as const },
  { href: '/lab', key: 'nav.lab' as const },
  { href: '/status-quo', key: 'nav.status' as const },
];

export default function Navigation() {
  const pathname = usePathname();
  const { t } = useLang();

  return (
    <nav className="flex items-center gap-0.5 font-mono text-[13px]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={`px-3 py-1.5 rounded-sm transition-colors ${
              isActive
                ? 'text-[var(--color-text-primary)] bg-[var(--color-bg-alt)] border border-[var(--color-border-strong)]'
                : 'text-[var(--color-text-secondary)] border border-transparent hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-alt)]'
            }`}
          >
            {isActive && <span className="text-[var(--color-accent)] mr-1">›</span>}
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
}
