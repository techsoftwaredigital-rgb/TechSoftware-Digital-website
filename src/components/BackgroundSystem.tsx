import React, { useEffect, useRef } from 'react';
import { useMotionPreference } from '../context/MotionPreferenceContext';

export const BackgroundSystem: React.FC = () => {
  const { prefersReducedMotion } = useMotionPreference();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Direct Transform Scroll Progress without React re-renders
    let scrollRafId: number = 0;
    const handleScroll = () => {
      if (scrollRafId) return;
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = 0;
        if (!progressBarRef.current) return;
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
          const ratio = Math.min(1, Math.max(0, window.scrollY / totalScroll));
          progressBarRef.current.style.transform = `scaleX(${ratio})`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. High-Efficiency Ambient Particle Canvas
    const canvas = canvasRef.current;
    if (!canvas) {
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollRafId) cancelAnimationFrame(scrollRafId);
      };
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) {
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollRafId) cancelAnimationFrame(scrollRafId);
      };
    }

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 18 : 34;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.4 + 0.6,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animationId: number = 0;
    let isDocVisible = !document.hidden;
    const maxDist = isMobile ? 75 : 110;
    const maxDistSq = maxDist * maxDist;

    const render = () => {
      if (!isDocVisible) {
        animationId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting digital lines with squared-distance filter
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDist) * 0.07;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw and move particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(render);
      }
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (prefersReducedMotion) {
        render();
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const handleVisibility = () => {
      isDocVisible = !document.hidden;
      if (isDocVisible && !animationId && !prefersReducedMotion) {
        render();
      } else if (!isDocVisible && animationId) {
        cancelAnimationFrame(animationId);
        animationId = 0;
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top illuminated scroll progress line with GPU-accelerated transform */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-slate-900/60 pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 shadow-sm shadow-cyan-400/80 will-change-transform"
          style={{
            transform: 'scaleX(0)',
            transformOrigin: 'left center',
          }}
        />
      </div>

      {/* Layer 1: Dark Obsidian Gradient Backdrop */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Layer 2: Subtle Ambient Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30" />

      {/* Layer 3: Floating Interactive Ambient Particles & Constellation Lines Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />

      {/* Layer 4: Soft Diffused Luminous Radial Blobs (Optimized GPU rendering) */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-950/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-indigo-950/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-blue-950/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Layer 5: Soft Vignette border for cinematic depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#030712_95%)] opacity-85" />
    </div>
  );
};
