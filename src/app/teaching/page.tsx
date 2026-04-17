'use client';

import PageHero from '@/components/layout/PageHero';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import FadeIn from '@/components/motion/FadeIn';
import StaggerChildren from '@/components/motion/StaggerChildren';
import { staggerItem } from '@/components/motion/StaggerChildren';
import { motion } from 'framer-motion';
import { koreaUnivCourses, postechCourses, externalPrograms } from '@/data/courses';

// Group POSTECH courses by category
const postechGroups = postechCourses.reduce<Record<string, typeof postechCourses>>(
  (acc, course) => {
    if (!acc[course.category]) acc[course.category] = [];
    acc[course.category].push(course);
    return acc;
  },
  {}
);

export default function TeachingPage() {
  return (
    <>
      <PageHero
        path="/teaching"
        title="Teaching"
        subtitle="Courses, programs, and educational initiatives"
      />

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-16">
        {/* Current - Korea University */}
        <section>
          <FadeIn>
            <SectionHeading
              title="Current — Korea University"
              subtitle="Graduate courses at the Department of Future Science & Technology Business"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {koreaUnivCourses.map((course) => (
              <motion.div key={course.code} variants={staggerItem}>
                <Card variant="interactive" padding="md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <code className="text-xs font-mono text-[var(--color-text-tertiary)]">
                        {course.code}
                      </code>
                      <h4 className="mt-1 font-semibold text-[var(--color-text-primary)] leading-snug">
                        {course.title}
                      </h4>
                      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                        {course.semester} {course.year}
                      </p>
                    </div>
                    {course.active && (
                      <span className="shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Active
                      </span>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </StaggerChildren>
        </section>

        {/* Previous - POSTECH */}
        <section>
          <FadeIn>
            <SectionHeading
              title="Previous — POSTECH"
              subtitle="Courses taught during tenure at POSTECH (2012–2023)"
            />
          </FadeIn>
          <FadeIn>
            <Card variant="default" padding="md">
              <Accordion
                items={Object.entries(postechGroups).map(([category, courses]) => ({
                  title: `${category} (${courses.length})`,
                  content: (
                    <div className="space-y-3 pl-1">
                      {courses.map((course) => (
                        <div key={course.code} className="flex gap-3 items-start">
                          <code className="shrink-0 text-xs font-mono text-[var(--color-text-tertiary)] w-20">
                            {course.code}
                          </code>
                          <span className="text-sm text-[var(--color-text-primary)]">
                            {course.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  ),
                }))}
                defaultOpen={0}
              />
            </Card>
          </FadeIn>
        </section>

        {/* External Programs */}
        <section>
          <FadeIn>
            <SectionHeading
              title="External Programs & Partnerships"
              subtitle="Training programs and educational collaborations"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {externalPrograms.map((program) => (
              <motion.div key={program.name} variants={staggerItem}>
                <Card variant="interactive" padding="md" className="h-full">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                    {program.organization}
                  </div>
                  <h4 className="font-semibold text-[var(--color-text-primary)] leading-snug">
                    {program.name}
                  </h4>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                    {program.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </StaggerChildren>
        </section>
      </div>
    </>
  );
}
