import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { MotionConfig } from 'motion/react';

type MotionMode = 'system' | 'reduced' | 'full';

interface MotionPreferenceContextType {
  prefersReducedMotion: boolean;
  motionMode: MotionMode;
  setMotionMode: (mode: MotionMode) => void;
  /**
   * Helper that returns reduced motion transition configurations
   * (e.g. zero duration or subtle opacity fade without spatial transform)
   */
  getAccessibleTransition: <T extends Record<string, any>>(transition?: T) => T;
}

const MotionPreferenceContext = createContext<MotionPreferenceContextType>({
  prefersReducedMotion: false,
  motionMode: 'system',
  setMotionMode: () => {},
  getAccessibleTransition: (t) => t || ({} as any),
});

export const MotionPreferenceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [systemReducedMotion, setSystemReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const [motionMode, setMotionMode] = useState<MotionMode>(() => {
    if (typeof window === 'undefined') return 'system';
    const saved = localStorage.getItem('ts_motion_mode') as MotionMode | null;
    return saved === 'reduced' || saved === 'full' ? saved : 'system';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => {
      setSystemReducedMotion(e.matches);
    };

    setSystemReducedMotion(mediaQuery.matches);

    // Modern and fallback listeners
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    } else {
      mediaQuery.addListener(onChange);
      return () => mediaQuery.removeListener(onChange);
    }
  }, []);

  const handleSetMotionMode = (mode: MotionMode) => {
    setMotionMode(mode);
    try {
      localStorage.setItem('ts_motion_mode', mode);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  };

  const prefersReducedMotion = useMemo(() => {
    if (motionMode === 'reduced') return true;
    if (motionMode === 'full') return false;
    return systemReducedMotion;
  }, [motionMode, systemReducedMotion]);

  const getAccessibleTransition = useMemo(() => {
    return <T extends Record<string, any>>(transition?: T): T => {
      if (prefersReducedMotion) {
        return {
          ...transition,
          duration: 0.01,
          delay: 0,
        } as unknown as T;
      }
      return (transition || {}) as T;
    };
  }, [prefersReducedMotion]);

  const contextValue = useMemo(
    () => ({
      prefersReducedMotion,
      motionMode,
      setMotionMode: handleSetMotionMode,
      getAccessibleTransition,
    }),
    [prefersReducedMotion, motionMode, getAccessibleTransition]
  );

  return (
    <MotionPreferenceContext.Provider value={contextValue}>
      {/* MotionConfig applies globally across all Motion components */}
      <MotionConfig reducedMotion={prefersReducedMotion ? 'always' : 'never'}>
        {children}
      </MotionConfig>
    </MotionPreferenceContext.Provider>
  );
};

export const useMotionPreference = () => {
  return useContext(MotionPreferenceContext);
};
