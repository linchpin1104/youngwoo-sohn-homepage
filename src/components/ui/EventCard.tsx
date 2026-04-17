import Image from 'next/image';

interface EventCardProps {
  title: string;
  date: string;
  imageSrc?: string;
  description?: string;
}

export default function EventCard({ title, date, imageSrc, description }: EventCardProps) {
  return (
    <div className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md overflow-hidden hover:border-[var(--color-border-strong)] transition-all duration-200">
      {/* Corner accent */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--color-accent)] z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[var(--color-accent)] z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="aspect-video overflow-hidden bg-[var(--color-bg-alt)] relative">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[var(--color-text-tertiary)]"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[11px] font-mono text-[var(--color-accent)]">
            {date}
          </div>
          <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
            event
          </span>
        </div>
        <h3 className="font-semibold text-[var(--color-text-primary)] leading-snug text-[15px]">
          {title}
        </h3>
        {description && (
          <p className="mt-1.5 text-sm text-[var(--color-text-secondary)] line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
