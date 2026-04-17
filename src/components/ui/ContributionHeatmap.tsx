'use client';

import { useMemo } from 'react';
import { useLang } from '@/lib/LanguageProvider';

export interface ActivityDatum {
  date: string; // YYYY-MM-DD
  count: number;
  kind?: 'paper' | 'project' | 'course' | 'event' | 'other';
  label?: string;
}

interface Props {
  data: ActivityDatum[];
  /** Number of past weeks to show (default 52) */
  weeks?: number;
  /** End date — defaults to today */
  endDate?: Date;
}

const LEVELS = [0, 1, 2, 3, 4] as const;

function heatLevel(count: number): number {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}

function startOfWeek(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  x.setDate(x.getDate() - x.getDay()); // Sunday
  return x;
}

function fmtISO(d: Date) {
  return d.toISOString().slice(0, 10);
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function ContributionHeatmap({ data, weeks = 52, endDate }: Props) {
  const { t } = useLang();
  const { weekCols, total, monthMarkers } = useMemo(() => {
    const end = endDate ? new Date(endDate) : new Date();
    const endWeekStart = startOfWeek(end);

    // Build map of date -> count
    const map = new Map<string, number>();
    for (const d of data) {
      map.set(d.date, (map.get(d.date) ?? 0) + d.count);
    }

    const cols: { weekStart: Date; days: { date: Date; count: number }[] }[] = [];
    let total = 0;
    for (let w = weeks - 1; w >= 0; w--) {
      const weekStart = new Date(endWeekStart);
      weekStart.setDate(endWeekStart.getDate() - w * 7);
      const days: { date: Date; count: number }[] = [];
      for (let day = 0; day < 7; day++) {
        const d = new Date(weekStart);
        d.setDate(weekStart.getDate() + day);
        const count = map.get(fmtISO(d)) ?? 0;
        total += count;
        days.push({ date: d, count });
      }
      cols.push({ weekStart, days });
    }

    // Month markers: first week of each month
    const markers: { colIdx: number; label: string }[] = [];
    let prevMonth = -1;
    cols.forEach((col, i) => {
      const m = col.weekStart.getMonth();
      if (m !== prevMonth) {
        markers.push({ colIdx: i, label: MONTHS[m] });
        prevMonth = m;
      }
    });

    return { weekCols: cols, total, monthMarkers: markers };
  }, [data, weeks, endDate]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-mono text-[var(--color-text-secondary)]">
          <span className="text-[var(--color-text-primary)] font-semibold">{total}</span>{' '}
          {t('dashboard.contribution.totalSuffix')}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--color-text-tertiary)]">
          <span>Less</span>
          {LEVELS.map((lv) => (
            <span key={lv} className={`heat-cell heat-${lv}`} />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block">
          {/* Month labels */}
          <div className="flex gap-[3px] ml-7 mb-1 text-[10px] font-mono text-[var(--color-text-tertiary)] h-3">
            {weekCols.map((_, i) => {
              const marker = monthMarkers.find((m) => m.colIdx === i);
              return (
                <div key={i} className="w-[11px] shrink-0">
                  {marker ? <span>{marker.label}</span> : null}
                </div>
              );
            })}
          </div>

          <div className="flex gap-[3px]">
            {/* Day labels */}
            <div className="flex flex-col gap-[3px] mr-2 text-[10px] font-mono text-[var(--color-text-tertiary)] h-[calc(11px*7+3px*6)]">
              <div className="h-[11px]" />
              <div className="h-[11px]">Mon</div>
              <div className="h-[11px]" />
              <div className="h-[11px]">Wed</div>
              <div className="h-[11px]" />
              <div className="h-[11px]">Fri</div>
              <div className="h-[11px]" />
            </div>

            {weekCols.map((col, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {col.days.map((day, j) => {
                  const level = heatLevel(day.count);
                  return (
                    <div
                      key={j}
                      className={`heat-cell heat-${level}`}
                      title={`${fmtISO(day.date)} — ${day.count} activity${day.count === 1 ? '' : 'ies'}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
