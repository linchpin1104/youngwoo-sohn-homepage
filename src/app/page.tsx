'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/profile';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeIn from '@/components/motion/FadeIn';
import StaggerChildren from '@/components/motion/StaggerChildren';
import { staggerItem } from '@/components/motion/StaggerChildren';
import ActivityDashboard from '@/components/ui/ActivityDashboard';
import EventCard from '@/components/ui/EventCard';
import { events } from '@/data/events';
import { useLang } from '@/lib/LanguageProvider';

// Pick top 3 most recent events. Dates may be "YYYY" or "YYYY-MM-DD";
// normalize to a sortable string so ISO dates sort strictly after "YYYY".
function eventSortKey(d: string) {
  return d.length === 4 ? `${d}-01-01` : d;
}
const recentEvents = [...events]
  .sort((a, b) => (eventSortKey(a.date) < eventSortKey(b.date) ? 1 : -1))
  .slice(0, 3);

const domainColors: Record<string, string> = {
  ai: '#2563EB',
  quantum: '#7C3AED',
  mobility: '#059669',
  'bio-healthcare': '#D97706',
  'climate-tech': '#0891B2',
};

const areaSymbols = ['[01]', '[02]', '[03]', '[04]'];

export default function HomePage() {
  const { t } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" aria-hidden />
        <div className="relative py-16 md:py-24 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12">
              {/* Left: Terminal + identity */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="terminal-frame max-w-xl"
                >
                  <div className="terminal-bar">
                    <span className="terminal-dot" style={{ background: '#FF5F57' }} />
                    <span className="terminal-dot" style={{ background: '#FEBC2E' }} />
                    <span className="terminal-dot" style={{ background: '#28C840' }} />
                    <span className="ml-3 truncate">atcl@korea.ac.kr ~ %</span>
                  </div>
                  <div className="p-5 font-mono text-[13px] leading-relaxed">
                    <div className="text-[#8A8A8A]">$ {t('home.terminal.whoami')}</div>
                    <div className="text-[#E6E6E6]">youngwoo_sohn</div>
                    <div className="mt-2 text-[#8A8A8A]">$ {t('home.terminal.role')}</div>
                    <div className="text-[#E6E6E6]">{t('home.title')}</div>
                    <div className="text-[#A8A8A8]">{profile.department}</div>
                    <div className="text-[#A8A8A8]">{profile.university}</div>
                    <div className="mt-2 text-[#8A8A8A]">$ {t('home.terminal.lab')}</div>
                    <div className="text-[#39D353]">advanced_tech_commercialization_lab/</div>
                    <div className="mt-2 text-[#8A8A8A]">
                      $ <span className="cursor-blink text-[#E6E6E6]">_</span>
                    </div>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-8 text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.05]"
                >
                  {profile.name}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mt-5 flex flex-wrap gap-1.5"
                >
                  {profile.researchDomains.map((domain) => (
                    <span
                      key={domain.id}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-sm text-[11px] font-mono font-medium border"
                      style={{
                        borderColor: `${domainColors[domain.id]}55`,
                        backgroundColor: `${domainColors[domain.id]}0f`,
                        color: domainColors[domain.id],
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: domainColors[domain.id] }}
                      />
                      {domain.label.toLowerCase()}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <Link
                    href="/research"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[var(--color-ink)] text-white font-mono text-sm font-medium hover:bg-[var(--color-ink-soft)] transition-colors"
                  >
                    <span className="text-[var(--color-terminal-green)]">$</span> {t('home.button.viewResearch')}
                  </Link>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    aria-label={`Email ${profile.contact.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[var(--color-border-strong)] text-[var(--color-text-primary)] font-mono text-sm font-medium hover:bg-[var(--color-bg-alt)] transition-colors"
                  >
                    {t('home.button.contact')} →
                  </a>
                </motion.div>
              </div>

              {/* Right: portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mx-auto lg:ml-auto"
              >
                <div className="relative">
                  {/* Corner brackets */}
                  <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                  <span className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                  <span className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                  <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />

                  <div className="relative w-[17.5rem] h-[17.5rem] md:w-[19.5rem] md:h-[19.5rem] lg:w-[22rem] lg:h-[22rem] bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-md overflow-hidden">
                    <Image
                      src={profile.portraitUrl}
                      alt="Youngwoo Sohn portrait"
                      fill
                      priority
                      sizes="(min-width: 1024px) 352px, (min-width: 768px) 312px, 280px"
                      className="object-contain p-5"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[var(--color-text-tertiary)]">
                    <span>// {t('home.profile.version')}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terminal-green)] pulse-dot" />
                      {t('home.status.active')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Dashboard */}
      <section className="py-16 md:py-20 border-y border-[var(--color-border)] bg-[var(--color-bg-alt)]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-2">
                  {t('section.dashboard')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {t('dashboard.heading')}
                </h2>
                <p className="mt-2 text-[var(--color-text-secondary)] max-w-2xl">
                  {t('dashboard.sub')}
                </p>
              </div>
              <div className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
                {t('dashboard.tag')}
              </div>
            </div>
          </FadeIn>
          <ActivityDashboard />
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-8">
              <div className="text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-2">
                {t('section.about')}
              </div>
              <SectionHeading title={t('about.heading')} />
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn className="lg:col-span-2">
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                {profile.bio.map((paragraph, i) => {
                  // Auto-link atCL mention to the Korea University venture portal
                  const atclIdx = paragraph.indexOf('Advanced Technology Commercialization LAB');
                  if (atclIdx === -1) return <p key={i}>{paragraph}</p>;
                  const before = paragraph.slice(0, atclIdx);
                  const matchEnd = paragraph.indexOf(')', atclIdx);
                  const linkText = paragraph.slice(atclIdx, matchEnd + 1);
                  const after = paragraph.slice(matchEnd + 1);
                  return (
                    <p key={i}>
                      {before}
                      <a
                        href="https://venture.korea.ac.kr/venture/intro/intro.do"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-accent)] hover:underline underline-offset-2"
                      >
                        {linkText}
                      </a>
                      {after}
                    </p>
                  );
                })}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border border-[var(--color-border)] bg-[var(--color-surface)] rounded-md">
                <div className="px-4 py-3 border-b border-[var(--color-border)] font-mono text-xs text-[var(--color-text-tertiary)] flex items-center justify-between">
                  <span>{t('about.glanceFile')}</span>
                  <span className="text-[var(--color-terminal-green)]">●</span>
                </div>
                <dl className="p-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                      {t('about.label.education')}
                    </dt>
                    <dd className="font-medium text-[var(--color-text-primary)] mt-0.5">
                      M.S. Management Engineering, KAIST
                    </dd>
                    <dd className="font-medium text-[var(--color-text-primary)]">
                      Ph.D. Business Administration, KUBS
                    </dd>
                  </div>
                  <div className="pt-2 border-t border-dashed border-[var(--color-border)]">
                    <dt className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                      {t('about.label.current')}
                    </dt>
                    <dd className="font-medium text-[var(--color-text-primary)] mt-0.5">
                      Korea University
                    </dd>
                  </div>
                  <div className="pt-2 border-t border-dashed border-[var(--color-border)]">
                    <dt className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                      {t('about.label.previous')}
                    </dt>
                    <dd className="font-medium text-[var(--color-text-primary)] mt-0.5">
                      POSTECH (2012–2023)
                    </dd>
                  </div>
                  <div className="pt-2 border-t border-dashed border-[var(--color-border)]">
                    <dt className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                      {t('about.label.lab')}
                    </dt>
                    <dd className="mt-0.5">
                      <Link
                        href="/lab"
                        className="font-mono font-medium text-[var(--color-accent)] hover:underline"
                      >
                        ./atCL →
                      </Link>
                    </dd>
                  </div>
                  <div className="pt-2 border-t border-dashed border-[var(--color-border)]">
                    <dt className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                      {t('about.label.externalLinks')}
                    </dt>
                    <dd className="mt-1 flex flex-col gap-1">
                      {profile.externalLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                        >
                          <span className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)]">↗</span>
                          <span className="group-hover:underline underline-offset-2">{link.label}</span>
                        </a>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-8">
              <div className="text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-2">
                {t('section.researchAreas')}
              </div>
              <SectionHeading
                title={t('research.heading')}
                subtitle={t('research.sub')}
              />
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.researchAreas.map((area, i) => {
              const areaKey = (['area.commercialization', 'area.datamining', 'area.bmi', 'area.innovation'] as const)[i];
              return (
              <motion.div key={area.title} variants={staggerItem}>
                <div className="h-full border border-[var(--color-border)] bg-[var(--color-surface)] rounded-md hover:border-[var(--color-border-strong)] transition-colors">
                  <div className="px-5 py-3 border-b border-[var(--color-border)] flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                      {areaSymbols[i]}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--color-terminal-green)] uppercase tracking-wider">
                      {t('research.active')}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-3 leading-snug">
                      {t(areaKey)}
                    </h3>
                    <ul className="space-y-2">
                      {area.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex gap-2"
                        >
                          <span className="text-[var(--color-accent)] shrink-0 mt-1 font-mono text-xs">›</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Recent Events preview */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-2">
                  {t('section.events')}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {t('home.recentEvents.heading')}
                </h2>
                <p className="mt-2 text-[var(--color-text-secondary)] max-w-2xl">
                  {t('home.recentEvents.sub')}
                </p>
              </div>
              <Link
                href="/status-quo"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-mono text-sm font-medium hover:bg-[var(--color-bg-alt)] transition-colors"
              >
                <span className="text-[var(--color-accent)]">$</span>
                {t('home.recentEvents.viewAll')} →
              </Link>
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentEvents.map((event) => (
              <motion.div key={event.id} variants={staggerItem}>
                <EventCard
                  title={event.title}
                  date={event.date}
                  imageSrc={event.imageSrc}
                  description={event.description}
                />
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-16 md:py-20 bg-[var(--color-ink)] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dense opacity-10" aria-hidden style={{ backgroundImage: 'linear-gradient(to right, #2A2A2A 1px, transparent 1px), linear-gradient(to bottom, #2A2A2A 1px, transparent 1px)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-[11px] font-mono text-white/70 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terminal-green)] pulse-dot" />
              {t('cta.nowRecruiting')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t('cta.joinTitle')} <span className="text-[var(--color-terminal-green)]">atCL</span>.
            </h2>
            <p className="mt-5 text-white/70 max-w-2xl mx-auto leading-relaxed">
              {profile.recruitmentText}
            </p>
            <a
              href={`mailto:${profile.contact.email}`}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white text-[var(--color-ink)] font-mono font-semibold hover:bg-[var(--color-terminal-green)] hover:text-white transition-colors"
            >
              <span>→</span> {t('cta.getInTouch')}
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
