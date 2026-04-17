interface TimelineItem {
  yearRange: string;
  title: string;
  description?: string;
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-[72px] top-0 bottom-0 w-px bg-[var(--color-border)] hidden sm:block" />
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 sm:gap-6 items-start">
            <div className="shrink-0 w-[60px] text-sm font-medium text-[var(--color-text-tertiary)] pt-0.5 text-right">
              {item.yearRange}
            </div>
            <div className="hidden sm:flex shrink-0 items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-[var(--color-text-primary)] leading-snug">
                {item.title}
              </h4>
              {item.description && (
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-[var(--color-bg-alt)] text-[var(--color-text-tertiary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
