import React, { useEffect, useRef, useState } from 'react';
import { useMotionPreference } from '../context/MotionPreferenceContext';

export const BackgroundSystem: React.FC = () => {
  const { prefersReducedMotion } = useMotionPreference();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress handler
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Particle canvas background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 65;

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
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.45 + 0.1,
      });
    }

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting digital lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = isMobile ? 90 : 130;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
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
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

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
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top illuminated scroll progress line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-slate-900/60">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-500 shadow-sm shadow-cyan-400/80 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Layer 1: Dark Obsidian Gradient Backdrop */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Layer 2: Subtle Ambient Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30" />

      {/* Layer 3: Floating Interactive Ambient Particles & Constellation Lines Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />

      {/* Layer 4: Soft Diffused Luminous Radial Blobs */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] bg-indigo-950/15 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] bg-blue-950/15 rounded-full blur-[130px]" />

      {/* Layer 5: Soft Vignette border for cinematic depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#030712_95%)] opacity-85" />
    </div>
  );
};
