'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import MemberCard from '@/components/ui/MemberCard';
import FadeIn from '@/components/motion/FadeIn';
import StaggerChildren from '@/components/motion/StaggerChildren';
import { staggerItem } from '@/components/motion/StaggerChildren';
import { profile } from '@/data/profile';
import { phdStudents, msStudents, collaborations } from '@/data/team';

const domainColors: Record<string, string> = {
  ai: '#3B82F6',
  quantum: '#8B5CF6',
  mobility: '#10B981',
  'bio-healthcare': '#F59E0B',
  'climate-tech': '#06B6D4',
};

export default function LabPage() {
  return (
    <>
      {/* Lab Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-bold text-[var(--color-accent)]">
              atCL
            </h1>
            <p className="mt-2 text-xl text-[var(--color-text-secondary)]">
              Advanced Technology Commercialization Lab
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-[var(--color-text-tertiary)] italic max-w-2xl mx-auto"
          >
            &ldquo;Lab-to-Market: Commercializing Advanced Technologies by Exchanging Talent&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {profile.researchDomains.map((domain) => (
              <span
                key={domain.id}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  borderColor: `${domainColors[domain.id]}40`,
                  backgroundColor: `${domainColors[domain.id]}10`,
                  color: domainColors[domain.id],
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: domainColors[domain.id] }}
                />
                {domain.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Research */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <SectionHeading title="Our Mission" />
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  The Advanced Technology Commercialization Lab focuses on technology
                  commercialization — the journey from research lab to marketplace. We
                  support the growth of Tech Startups and SMEs with emphasis on technology
                  commercialization.
                </p>
                <p>
                  Our support programs include Business Model provision, Test-Certification
                  & Verification, Creative Lab for Startup, and Open Technology
                  Commercialization Ecosystem. We partner with industry to commercialize
                  C5 field inventions (AI, Quantum, Mobility, Bio & Healthcare, Climate TECH).
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeading title="Research Areas" />
              <div className="space-y-3">
                {profile.researchAreas.map((area) => (
                  <Card key={area.title} variant="interactive" padding="sm">
                    <h4 className="font-medium text-sm text-[var(--color-text-primary)]">
                      {area.title}
                    </h4>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              title="Our Team"
              subtitle={`${phdStudents.length} Ph.D. students and ${msStudents.length} M.S. students`}
            />
          </FadeIn>

          {/* Ph.D. Students */}
          <div className="mb-12">
            <FadeIn>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                Ph.D. Students
              </h3>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {phdStudents.map((student) => (
                <motion.div key={student.name} variants={staggerItem}>
                  <MemberCard
                    name={student.name}
                    department={
                      student.department.includes('Science & Technology Studies')
                        ? 'S&T Studies'
                        : 'Future S&T Business'
                    }
                    degree="Ph.D."
                    year={String(student.year)}
                  />
                </motion.div>
              ))}
            </StaggerChildren>
          </div>

          {/* M.S. Students */}
          <div>
            <FadeIn>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                M.S. Students
              </h3>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {msStudents.map((student) => (
                <motion.div key={student.name} variants={staggerItem}>
                  <MemberCard
                    name={student.name}
                    department={
                      student.department.includes('Science & Technology Studies')
                        ? 'S&T Studies'
                        : 'Future S&T Business'
                    }
                    degree="M.S."
                    year={String(student.year)}
                  />
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center py-8 text-[var(--color-text-tertiary)] text-sm">
              <p>Our first graduates are on their way.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionHeading title="Collaborations" align="center" />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {collaborations.map((collab) => (
                <span
                  key={collab.organization}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {collab.organization}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
