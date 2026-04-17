interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-semibold text-[var(--color-text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-[var(--color-text-secondary)]">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-px bg-[var(--color-border)] ${
          align === 'center' ? 'w-16 mx-auto' : 'w-12'
        }`}
      />
    </div>
  );
}
