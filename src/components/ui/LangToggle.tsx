'use client';

import { useLang } from '@/lib/LanguageProvider';

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center border border-[var(--color-border)] rounded-sm overflow-hidden font-mono text-[11px] bg-[var(--color-surface)]"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`px-2 py-1 transition-colors ${
          lang === 'en'
            ? 'bg-[var(--color-ink)] text-[var(--color-terminal-green)]'
            : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]'
        }`}
      >
        EN
      </button>
      <span className="w-px h-4 bg-[var(--color-border)]" aria-hidden />
      <button
        type="button"
        onClick={() => setLang('ko')}
        aria-pressed={lang === 'ko'}
        className={`px-2 py-1 transition-colors ${
          lang === 'ko'
            ? 'bg-[var(--color-ink)] text-[var(--color-terminal-green)]'
            : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]'
        }`}
      >
        KO
      </button>
    </div>
  );
}
