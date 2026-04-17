import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  color?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export default function Tag({ label, color, size = 'sm', className }: TagProps) {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        sizeClasses,
        className
      )}
      style={
        color
          ? { backgroundColor: `${color}15`, color }
          : undefined
      }
    >
      {!color && (
        <span className="bg-[var(--color-bg-alt)] text-[var(--color-text-secondary)] rounded-full inline-flex items-center px-2.5 py-0.5 text-xs font-medium">
          {label}
        </span>
      )}
      {color && label}
    </span>
  );
}
