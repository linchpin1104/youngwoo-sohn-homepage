'use client';

import { motion } from 'framer-motion';
import ContributionHeatmap from './ContributionHeatmap';
import { buildActivityData, buildStats, buildRecentTimeline } from '@/lib/activity';
import { useLang } from '@/lib/LanguageProvider';

const KIND_META: Record<string, { label: string; color: string; symbol: string }> = {
  paper: { label: 'paper', color: 'var(--color-ai)', symbol: '◆' },
  project: { label: 'project', color: 'var(--color-accent)', symbol: '▲' },
  course: { label: 'course', color: 'var(--color-bio)', symbol: '●' },
  event: { label: 'event', color: 'var(--color-quantum)', symbol: '■' },
};

const KIND_LABEL_KEY: Record<string, 'dashboard.stat.papers' | 'dashboard.stat.projects' | 'dashboard.stat.courses' | 'dashboard.stat.events'> = {
  paper: 'dashboard.stat.papers',
  project: 'dashboard.stat.projects',
  course: 'dashboard.stat.courses',
  event: 'dashboard.stat.events',
};

function fmtDate(iso: string) {
  const d = new Date(iso);
  if (!isFinite(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function ActivityDashboard() {
  const { t, lang } = useLang();
  const heatmapData = buildActivityData();
  const stats = buildStats();
  const timeline = buildRecentTimeline(8);

  // Anchor heatmap to the most recent activity so sparse historical data is visible
  const latestTs = heatmapData.reduce((max, d) => {
    const t = new Date(d.date).getTime();
    return t > max ? t : max;
  }, 0);
  const heatmapEnd = latestTs > 0 ? new Date(latestTs) : undefined;

  const statCards = [
    {
      label: t('dashboard.stat.papers'),
      value: stats.papers,
      sub: t('dashboard.stat.journals_conf', { j: stats.journals, c: stats.conferences }),
    },
    {
      label: t('dashboard.stat.projects'),
      value: stats.projects,
      sub: t('dashboard.stat.ongoing', { n: stats.ongoingProjects }),
    },
    {
      label: t('dashboard.stat.courses'),
      value: stats.courses,
      sub: t('dashboard.stat.active', { n: stats.activeCourses }),
    },
    {
      label: t('dashboard.stat.events'),
      value: stats.events,
      sub: t('dashboard.stat.recentActivity'),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stat cards — minimal, no color bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)] border border-[var(--color-border)] bg-[var(--color-surface)] rounded-md overflow-hidden">
        {statCards.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="p-4"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
                {s.value}
              </span>
              <span className="text-[11px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
                {s.label}
              </span>
            </div>
            <div className="mt-1 text-[11px] font-mono text-[var(--color-text-tertiary)]">
              {s.sub}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="border border-[var(--color-border)] bg-[var(--color-surface)] rounded-md p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-terminal-green)] pulse-dot" />
            <h3 className="text-sm font-mono font-semibold text-[var(--color-text-primary)]">
              {t('dashboard.contribution_log')}
            </h3>
            <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
              {heatmapEnd
                ? t('dashboard.contribution.through', {
                    date: heatmapEnd.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
                      month: 'short',
                      year: 'numeric',
                    }),
                  })
                : '— last 52 weeks'}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--color-text-tertiary)]">
            {(['paper', 'project', 'course', 'event'] as const).map((k) => (
              <span key={k} className="inline-flex items-center gap-1">
                <span style={{ color: KIND_META[k].color }}>{KIND_META[k].symbol}</span>
                {t(KIND_LABEL_KEY[k])}
              </span>
            ))}
          </div>
        </div>
        <ContributionHeatmap data={heatmapData} endDate={heatmapEnd} />
      </motion.div>

      {/* Recent timeline */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="border border-[var(--color-border)] bg-[var(--color-surface)] rounded-md"
      >
        <div className="px-5 py-3 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-text-tertiary)] font-mono text-sm">$</span>
            <h3 className="text-sm font-mono font-semibold text-[var(--color-text-primary)]">
              {t('dashboard.timeline.title')}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">
            {t('dashboard.timeline.entries', { n: timeline.length })}
          </span>
        </div>
        <ul className="divide-y divide-[var(--color-border)]">
          {timeline.map((item, i) => {
            const meta = KIND_META[item.kind];
            return (
              <li
                key={i}
                className="flex items-start gap-3 px-5 py-3 hover:bg-[var(--color-bg-alt)] transition-colors"
              >
                <span className="font-mono text-xs text-[var(--color-text-tertiary)] shrink-0 mt-0.5 w-24">
                  {fmtDate(item.date)}
                </span>
                <span
                  className="shrink-0 mt-0.5 text-xs"
                  style={{ color: meta.color }}
                  aria-hidden
                >
                  {meta.symbol}
                </span>
                <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider shrink-0 mt-1 w-16">
                  {t(KIND_LABEL_KEY[item.kind])}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-[var(--color-text-primary)] leading-snug">
                    {item.title}
                  </div>
                  {item.meta && (
                    <div className="text-xs text-[var(--color-text-tertiary)] mt-0.5 truncate">
                      {item.meta}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
