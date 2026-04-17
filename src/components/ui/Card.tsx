import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'interactive';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const variantMap = {
  default: 'bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl',
  elevated: 'bg-[var(--color-surface)] rounded-xl shadow-sm',
  interactive:
    'bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-border-hover)] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200',
};

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className,
}: CardProps) {
  return (
    <div className={cn(variantMap[variant], paddingMap[padding], className)}>
      {children}
    </div>
  );
}
