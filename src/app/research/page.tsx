'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import TabGroup from '@/components/ui/TabGroup';
import PublicationItem from '@/components/ui/PublicationItem';
import Timeline from '@/components/ui/Timeline';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/motion/FadeIn';
import { journalPapers, conferencePapers, bookChapters } from '@/data/publications';
import { projects } from '@/data/projects';

const tabs = [
  { id: 'journal', label: 'Journal Papers' },
  { id: 'conference', label: 'Conference Papers' },
  { id: 'books', label: 'Books' },
  { id: 'projects', label: 'Projects' },
];

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState('journal');

  const timelineItems = projects.map((p) => ({
    yearRange: p.yearEnd === 'ongoing' ? `${p.yearStart}–` : p.yearEnd ? `${p.yearStart}–${p.yearEnd}` : `${p.yearStart}`,
    title: p.titleEn || p.title,
    description: p.titleEn ? p.title : undefined,
    tags: [p.funder, ...(p.role ? [p.role] : [])],
  }));

  return (
    <>
      <PageHero
        path="/research"
        title="Research"
        subtitle="Publications, conference presentations, and funded projects"
        stats={[
          { value: `${journalPapers.length}+`, label: 'Journal Papers' },
          { value: `${conferencePapers.length}+`, label: 'Conference Papers' },
          { value: `${projects.length}+`, label: 'Funded Projects' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="sticky top-16 bg-[var(--color-bg)] z-10 pb-4">
          <TabGroup tabs={tabs} onTabChange={setActiveTab} />
        </div>

        {/* Journal Papers */}
        <section id="journal" className="pt-8">
          <FadeIn>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
              Journal Papers
            </h2>
            <div>
              {journalPapers.map((paper, index) => (
                <PublicationItem
                  key={paper.id}
                  number={index + 1}
                  title={paper.title}
                  venue={paper.journal}
                  volumeIssue={
                    paper.volume
                      ? `Vol. ${paper.volume}${paper.issue ? `, No. ${paper.issue}` : ''}`
                      : undefined
                  }
                  year={paper.year}
                  status={paper.status}
                  type="journal"
                />
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Conference Papers */}
        <section id="conference" className="pt-12">
          <FadeIn>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
              Conference Papers
            </h2>
            <div>
              {conferencePapers.map((paper, index) => (
                <PublicationItem
                  key={paper.id}
                  number={index + 1}
                  title={paper.title}
                  venue={paper.venue}
                  year={paper.date}
                  status={paper.note}
                  type="conference"
                />
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Books */}
        <section id="books" className="pt-12">
          <FadeIn>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
              Book Chapters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {bookChapters.map((book) => (
                <Card key={book.id} variant="interactive" padding="md">
                  <div className="text-2xl mb-3">📕</div>
                  <h4 className="font-semibold text-[var(--color-text-primary)] leading-snug">
                    {book.title}
                  </h4>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                    {book.publisher}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
                    {book.year}
                  </p>
                  {book.description && (
                    <p className="mt-2 text-xs text-[var(--color-text-tertiary)] italic">
                      {book.description}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Projects */}
        <section id="projects" className="pt-12">
          <FadeIn>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
              Selected Projects
            </h2>
            <Timeline items={timelineItems} />
          </FadeIn>
        </section>
      </div>
    </>
  );
}
