import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { useMotionPreference } from '../context/MotionPreferenceContext';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const { prefersReducedMotion } = useMotionPreference();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'particles' | 'branding' | 'complete'>('particles');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion or already saw intro, complete immediately
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const hasSeenIntro = sessionStorage.getItem('ts_seen_intro');
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smoothly accelerate towards 100
        const step = Math.floor(Math.random() * 8) + 5;
        return Math.min(100, prev + step);
      });
    }, 60);

    const brandingTimer = setTimeout(() => {
      setPhase('branding');
    }, 450);

    const finishTimer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        sessionStorage.setItem('ts_seen_intro', 'true');
        onComplete();
      }, 500);
    }, 1900);

    return () => {
      clearInterval(interval);
      clearTimeout(brandingTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      sessionStorage.setItem('ts_seen_intro', 'true');
      onComplete();
    }, 200);
  };

  return (
    <aside
      aria-label="System Initializing"
      className={`fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center p-6 select-none transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background digital grid & ambient radial glow */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none -translate-y-10" />

      {/* Center Holographic Stage */}
      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-3 mb-6 transition-all duration-500 transform">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center p-0.5 shadow-xl shadow-cyan-500/30">
            <span className="text-sm font-mono font-black text-black">TS</span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
            TechSoftware<span className="text-cyan-400">.digital</span>
          </span>
        </div>

        {/* Cinematic Subtitle */}
        <div className="overflow-hidden mb-8 h-8 flex items-center justify-center">
          <p
            className={`text-xs sm:text-sm font-mono tracking-widest text-slate-300 uppercase transition-all duration-700 ${
              phase === 'branding' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Build The Future. Digitally.
          </p>
        </div>

        {/* Progress Bar & Telemetry Status */}
        <div className="w-full max-w-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Initializing Runtime Core</span>
            </div>
            <span className="text-cyan-300 font-bold tabular-nums">{progress}%</span>
          </div>

          <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip button for zero-delay UX */}
        <button
          onClick={handleSkip}
          className="mt-8 text-[11px] font-mono text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer py-1 px-3 rounded hover:bg-slate-900/60"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};
