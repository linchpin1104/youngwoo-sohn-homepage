export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function getDomainColor(domain: string): string {
  const colors: Record<string, string> = {
    ai: 'var(--color-ai)',
    quantum: 'var(--color-quantum)',
    mobility: 'var(--color-mobility)',
    bio: 'var(--color-bio)',
    climate: 'var(--color-climate)',
  };
  return colors[domain.toLowerCase()] || 'var(--color-accent)';
}
