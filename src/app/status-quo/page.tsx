'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import EventCard from '@/components/ui/EventCard';
import FadeIn from '@/components/motion/FadeIn';
import StaggerChildren from '@/components/motion/StaggerChildren';
import { staggerItem } from '@/components/motion/StaggerChildren';
import { events } from '@/data/events';
import { profile } from '@/data/profile';
import ActivityDashboard from '@/components/ui/ActivityDashboard';
import { useLang } from '@/lib/LanguageProvider';

export default function StatusQuoPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        path="/status"
        title={t('status.title')}
        subtitle={t('status.sub')}
        stats={[
          { value: `${events.length}`, label: t('status.stat.events') },
          { value: '2024', label: t('status.stat.latest') },
          { value: '4', label: t('status.stat.countries') },
          { value: '10+', label: t('status.stat.partners') },
        ]}
      />

      {/* Activity snapshot */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-2">
                  {t('section.liveSnapshot')}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {t('status.activitySnapshot')}
                </h2>
              </div>
              <div className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
                [ atCL / activity ]
              </div>
            </div>
          </FadeIn>
          <ActivityDashboard />
        </div>
      </section>

      {/* Events grid */}
      <section className="py-12 md:py-16 border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-8">
              <div className="text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase mb-2">
                {t('section.events')}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                {t('status.eventGallery')}
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event) => (
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

      {/* Affiliation */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-mono text-xs text-[var(--color-text-tertiary)]">
            {t('status.affiliatedWith')}
          </div>
          <Image
            src={profile.universityLogoUrl}
            alt="Korea University"
            width={240}
            height={60}
            className="object-contain opacity-80"
          />
          <div className="font-mono text-xs text-[var(--color-text-tertiary)]">
            145 Anam-ro, Seongbuk-gu, Seoul
          </div>
        </div>
      </section>
    </>
  );
}
