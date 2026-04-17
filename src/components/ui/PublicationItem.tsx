interface PublicationItemProps {
  number?: number;
  title: string;
  venue: string;
  year: number | string;
  volumeIssue?: string;
  status?: string;
  type?: 'journal' | 'conference' | 'book';
}

export default function PublicationItem({
  number,
  title,
  venue,
  year,
  volumeIssue,
  status,
}: PublicationItemProps) {
  return (
    <div className="py-4 border-b border-[var(--color-border)] last:border-b-0">
      <div className="flex gap-3">
        {number !== undefined && (
          <span className="shrink-0 text-sm font-medium text-[var(--color-text-tertiary)] w-8 text-right pt-0.5">
            {number}.
          </span>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-[var(--color-text-primary)] leading-snug">
            {title}
          </h4>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <span className="italic text-[var(--color-text-secondary)]">
              {venue}
            </span>
            {volumeIssue && (
              <span className="text-[var(--color-text-tertiary)]">
                {volumeIssue}
              </span>
            )}
            <span className="text-[var(--color-text-tertiary)]">{year}</span>
            {status && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                {status}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
