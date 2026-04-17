// Aggregates activities (papers, projects, courses, events) into a unified
// time-series compatible with the GitHub-style contribution heatmap.

import type { ActivityDatum } from '@/components/ui/ContributionHeatmap';
import { events } from '@/data/events';
import { journalPapers, conferencePapers } from '@/data/publications';
import { projects } from '@/data/projects';
import { koreaUnivCourses } from '@/data/courses';

const MONTH_MAP: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
  Spring: 2, Summer: 5, Fall: 8, Winter: 11,
};

function monthToIndex(m?: string) {
  if (!m) return undefined;
  return MONTH_MAP[m];
}

function iso(d: Date) {
  return d.toISOString().slice(0, 10);
}

/** Generate a pseudo-random but deterministic day-of-month from an id */
function distDay(id: number, monthIdx: number, year: number) {
  const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();
  return ((id * 7 + monthIdx * 3) % daysInMonth) + 1;
}

/** Seeded day for year-only items — spreads across the year */
function seedDate(year: number, seed: number) {
  const monthIdx = seed % 12;
  const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();
  const day = ((seed * 11) % daysInMonth) + 1;
  return new Date(year, monthIdx, day);
}

export function buildActivityData(opts?: { endDate?: Date }): ActivityDatum[] {
  const out: ActivityDatum[] = [];
  const endDate = opts?.endDate ?? new Date();
  const startYear = endDate.getFullYear() - 1;

  // Events — specific dates (best signal)
  for (const ev of events) {
    // date can be "2024" or "2024-03-28"
    let date: Date;
    if (/^\d{4}$/.test(ev.date)) {
      date = seedDate(parseInt(ev.date), ev.id + 50);
    } else {
      date = new Date(ev.date);
    }
    if (isFinite(date.getTime())) {
      out.push({ date: iso(date), count: 1, kind: 'event', label: ev.title });
    }
  }

  // Journal papers — year + optional month
  for (const p of journalPapers) {
    const mIdx = monthToIndex(p.month);
    const monthIdx = mIdx ?? (p.id % 12);
    const day = distDay(p.id, monthIdx, p.year);
    out.push({
      date: iso(new Date(p.year, monthIdx, day)),
      count: 1,
      kind: 'paper',
      label: p.title,
    });
  }

  // Conference papers — parse date field
  for (const c of conferencePapers) {
    const parsed = new Date(c.date);
    let date: Date;
    if (isFinite(parsed.getTime())) {
      date = parsed;
    } else {
      const yearMatch = c.date.match(/\d{4}/);
      const year = yearMatch ? parseInt(yearMatch[0]) : 2023;
      date = seedDate(year, c.id + 100);
    }
    out.push({
      date: iso(date),
      count: 1,
      kind: 'paper',
      label: c.title,
    });
  }

  // Projects — one marker at start + occasional progress ticks per ongoing year
  for (const pr of projects) {
    const startDay = distDay(pr.id, pr.yearStart % 12, pr.yearStart);
    out.push({
      date: iso(new Date(pr.yearStart, (pr.id * 2) % 12, startDay)),
      count: 2,
      kind: 'project',
      label: pr.titleEn ?? pr.title,
    });
  }

  // Courses — mark at start of semester
  for (const c of koreaUnivCourses) {
    const semMonth = c.semester === 'Spring' ? 2 : c.semester === 'Fall' ? 8 : c.semester === 'Summer' ? 5 : 11;
    const day = (c.code.length * 3) % 28 + 1;
    out.push({
      date: iso(new Date(c.year, semMonth, day)),
      count: 1,
      kind: 'course',
      label: `${c.code} ${c.title}`,
    });
  }

  // Return all — the heatmap will window it by endDate
  return out;
}

/** Stats derived from data — for the dashboard cards */
export function buildStats() {
  return {
    papers: journalPapers.length + conferencePapers.length,
    journals: journalPapers.length,
    conferences: conferencePapers.length,
    projects: projects.length,
    ongoingProjects: projects.filter((p) => p.yearEnd === 'ongoing').length,
    courses: koreaUnivCourses.length,
    activeCourses: koreaUnivCourses.filter((c) => c.active).length,
    events: events.length,
  };
}

/** Recent activity for the timeline */
export interface TimelineItem {
  date: string;
  kind: 'paper' | 'project' | 'course' | 'event';
  title: string;
  meta?: string;
}

export function buildRecentTimeline(limit = 8): TimelineItem[] {
  const items: TimelineItem[] = [];

  for (const ev of events) {
    items.push({
      date: /^\d{4}$/.test(ev.date) ? `${ev.date}-06-15` : ev.date,
      kind: 'event',
      title: ev.title,
      meta: ev.description,
    });
  }

  for (const p of journalPapers) {
    const mIdx = monthToIndex(p.month) ?? 5;
    items.push({
      date: `${p.year}-${String(mIdx + 1).padStart(2, '0')}-15`,
      kind: 'paper',
      title: p.title,
      meta: p.journal,
    });
  }

  for (const pr of projects) {
    items.push({
      date: `${pr.yearStart}-01-01`,
      kind: 'project',
      title: pr.titleEn ?? pr.title,
      meta: pr.funder,
    });
  }

  for (const c of koreaUnivCourses) {
    const semMonth = c.semester === 'Spring' ? 3 : c.semester === 'Fall' ? 9 : 1;
    items.push({
      date: `${c.year}-${String(semMonth).padStart(2, '0')}-01`,
      kind: 'course',
      title: `${c.code} — ${c.title}`,
      meta: `${c.semester} ${c.year}`,
    });
  }

  items.sort((a, b) => (a.date < b.date ? 1 : -1));
  return items.slice(0, limit);
}
