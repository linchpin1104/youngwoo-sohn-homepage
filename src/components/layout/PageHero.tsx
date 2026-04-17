'use client';

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  stats?: Stat[];
  /** e.g. "/research" — rendered in monospace terminal-style breadcrumb */
  path?: string;
}

export default function PageHero({ title, subtitle, stats, path }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" aria-hidden />
      <div className="relative py-14 md:py-18">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs text-[var(--color-text-tertiary)] mb-4 flex items-center gap-2"
          >
            <span className="text-[var(--color-accent)]">$</span>
            <span>cd ~{path ?? ''}</span>
            <span className="inline-flex items-center gap-1 ml-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terminal-green)] pulse-dot" />
              online
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(2rem,3.2vw,2.75rem)] font-bold tracking-tight text-[var(--color-text-primary)]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-base md:text-lg text-[var(--color-text-secondary)] max-w-3xl"
            >
              {subtitle}
            </motion.p>
          )}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 inline-grid grid-cols-2 sm:grid-cols-4 divide-x divide-[var(--color-border)] border border-[var(--color-border)] bg-[var(--color-surface)] rounded-md overflow-hidden max-w-3xl"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-5 py-3">
                  <div className="text-2xl font-bold font-mono text-[var(--color-text-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
