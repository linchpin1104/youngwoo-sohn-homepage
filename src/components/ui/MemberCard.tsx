interface MemberCardProps {
  name: string;
  department: string;
  degree: 'Ph.D.' | 'M.S.';
  year: string;
}

// Minimal tech-style avatar: a monospace bracket glyph + hash-based hue accent.
// No initials. Shape alternates between four neutral glyphs deterministically by name.
const GLYPHS = ['◆', '▲', '■', '●'];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export default function MemberCard({ name, department, degree, year }: MemberCardProps) {
  const glyph = GLYPHS[hash(name) % GLYPHS.length];
  const isPhD = degree === 'Ph.D.';

  return (
    <div className="group flex items-center gap-3 px-3 py-2.5 rounded-sm border border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors">
      <div
        className={`shrink-0 w-9 h-9 rounded-sm flex items-center justify-center border font-mono text-sm ${
          isPhD
            ? 'border-[var(--color-border-strong)] bg-[var(--color-ink)] text-[var(--color-terminal-green)]'
            : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)]'
        }`}
        aria-hidden
      >
        {glyph}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-medium text-sm text-[var(--color-text-primary)] truncate">
          {name}
        </div>
        <div className="font-mono text-[11px] text-[var(--color-text-tertiary)] truncate">
          <span className="text-[var(--color-accent)]">{degree}</span>
          <span className="mx-1">·</span>
          {year}
          <span className="mx-1">·</span>
          {department}
        </div>
      </div>
    </div>
  );
}
