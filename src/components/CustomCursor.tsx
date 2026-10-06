import React, { useEffect, useState } from 'react';
import { useMotionPreference } from '../context/MotionPreferenceContext';

export const CustomCursor: React.FC = () => {
  const { prefersReducedMotion } = useMotionPreference();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'button' | 'link' | 'card'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover and pointer (i.e. mouse, not touch screen)
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Determine interactive target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const button = target.closest('button, [role="button"], input[type="submit"]');
      const link = target.closest('a');
      const card = target.closest('.glass-panel, .tech-card, [data-interactive-card="true"]');

      if (button) {
        setCursorState('button');
      } else if (link) {
        setCursorState('link');
      } else if (card) {
        setCursorState('card');
      } else {
        setCursorState('default');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth trailing ring lerp loop
    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || prefersReducedMotion || !isVisible) {
    return null;
  }

  // Sizing and styling based on hover state
  const isExpanded = cursorState === 'button' || cursorState === 'link';
  const isCard = cursorState === 'card';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Central Sharp Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-xs shadow-cyan-400/80"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isExpanded ? 0 : 1})`,
        }}
      />

      {/* Trailing Fluid Luminous Ring */}
      <div
        className={`fixed rounded-full -translate-x-1/2 -translate-y-1/2 border transition-all duration-200 ease-out ${
          isExpanded
            ? 'w-12 h-12 border-cyan-400 bg-cyan-400/15 backdrop-blur-[1px] shadow-lg shadow-cyan-500/25 scale-100'
            : isCard
            ? 'w-10 h-10 border-cyan-400/50 bg-cyan-500/5'
            : 'w-7 h-7 border-cyan-500/40 bg-transparent'
        }`}
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
