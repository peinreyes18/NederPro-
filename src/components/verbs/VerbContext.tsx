'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { VerbConjugation } from '@/content/verbs/types';

interface VerbContextValue {
  activeVerb: VerbConjugation | null;
  openVerb: (verb: VerbConjugation) => void;
  closeVerb: () => void;
}

const VerbCtx = createContext<VerbContextValue | null>(null);

export function VerbProvider({ children }: { children: ReactNode }) {
  const [activeVerb, setActiveVerb] = useState<VerbConjugation | null>(null);

  const openVerb = useCallback((verb: VerbConjugation) => {
    setActiveVerb(verb);
  }, []);

  const closeVerb = useCallback(() => {
    setActiveVerb(null);
  }, []);

  return (
    <VerbCtx.Provider value={{ activeVerb, openVerb, closeVerb }}>
      {children}
    </VerbCtx.Provider>
  );
}

export function useVerb(): VerbContextValue {
  const ctx = useContext(VerbCtx);
  if (!ctx) throw new Error('useVerb must be used inside <VerbProvider>');
  return ctx;
}
