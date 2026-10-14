import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMotionPreference } from '../context/MotionPreferenceContext';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const { prefersReducedMotion } = useMotionPreference();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'glow' | 'branding' | 'complete'>('glow');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion or already saw intro in this session, complete immediately
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
        // Smoothly accelerate towards 100 in ~1.5s
        const step = Math.floor(Math.random() * 8) + 6;
        return Math.min(100, prev + step);
      });
    }, 55);

    const brandingTimer = setTimeout(() => {
      setPhase('branding');
    }, 350);

    const finishTimer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        try {
          sessionStorage.setItem('ts_seen_intro', 'true');
        } catch {
          // ignore storage error
        }
        onComplete();
      }, 450);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(brandingTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete, prefersReducedMotion]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      try {
        sessionStorage.setItem('ts_seen_intro', 'true');
      } catch {
        // ignore storage error
      }
      onComplete();
    }, 150);
  };

  return (
    <aside
      aria-label="Welcome Intro"
      className={`fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center p-6 select-none transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background digital grid & ambient radial glow */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none -translate-y-10 animate-pulse" />
      <div className="absolute w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none translate-y-16" />

      {/* Center Holographic Stage */}
      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
        
        {/* Animated Brand Emblem with Futuristic Light Sweep */}
        <div className="relative mb-6 group">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center p-0.5 shadow-2xl shadow-cyan-500/40 ring-1 ring-cyan-300/30 overflow-hidden">
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <span className="relative z-10 text-xl font-mono font-black text-black tracking-tight">TS</span>
          </div>
          {/* Subtle orbiting glow ring */}
          <div className="absolute -inset-2 rounded-3xl bg-cyan-400/20 blur-md pointer-events-none" />
        </div>

        {/* Heading: "Welcome to TechSoftware.digital" */}
        <div className="mb-2 transition-all duration-500 transform">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" />
            <span>Digital Systems Core</span>
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Welcome to TechSoftware<span className="text-cyan-400">.digital</span>
          </h1>
        </div>

        {/* Subtitle: "Your Digital World. One Tap Away." */}
        <div className="overflow-hidden mb-8 h-8 flex items-center justify-center">
          <p
            className={`text-sm sm:text-base font-mono tracking-wide text-slate-300 transition-all duration-700 ${
              phase === 'branding' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Your Digital World. One Tap Away.
          </p>
        </div>

        {/* Telemetry Progress Bar */}
        <div className="w-full max-w-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Optimizing Experience</span>
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
          className="mt-8 text-[11px] font-mono text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer py-1.5 px-3.5 rounded-lg hover:bg-slate-900/80 border border-transparent hover:border-slate-800"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};
