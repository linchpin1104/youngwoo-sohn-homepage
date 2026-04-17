'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translate, type Lang } from './i18n';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: Parameters<typeof translate>[1], params?: Parameters<typeof translate>[2]) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'atCL:lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to English; read stored preference on mount to avoid SSR/CSR mismatch.
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === 'en' || stored === 'ko') setLangState(stored);
    } catch {
      // ignore
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback<LanguageContextValue['t']>(
    (key, params) => translate(lang, key, params),
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
