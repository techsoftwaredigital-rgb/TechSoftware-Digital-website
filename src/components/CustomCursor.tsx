import React, { useEffect, useRef, useState } from 'react';
import { useMotionPreference } from '../context/MotionPreferenceContext';

export const CustomCursor: React.FC = () => {
  const { prefersReducedMotion } = useMotionPreference();
  const [cursorState, setCursorState] = useState<'default' | 'button' | 'link' | 'card'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

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
    let animationFrameId: number = 0;
    let visible = false;
    let currentState: 'default' | 'button' | 'link' | 'card' = 'default';

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!visible) {
        visible = true;
        setIsVisible(true);
      }

      // Direct DOM transform for zero-latency sharp central dot (NO React re-render)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // Determine interactive target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      let newState: 'default' | 'button' | 'link' | 'card' = 'default';
      if (target.closest('button, [role="button"], input[type="submit"]')) {
        newState = 'button';
      } else if (target.closest('a')) {
        newState = 'link';
      } else if (target.closest('.glass-panel, .tech-card, [data-interactive-card="true"]')) {
        newState = 'card';
      }

      if (newState !== currentState) {
        currentState = newState;
        setCursorState(newState);
      }
    };

    const onMouseLeave = () => {
      visible = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      visible = true;
      setIsVisible(true);
    };

    // Smooth trailing ring lerp loop using direct DOM transform
    const render = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

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
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  if (isTouchDevice || prefersReducedMotion || !isVisible) {
    return null;
  }

  const isExpanded = cursorState === 'button' || cursorState === 'link';
  const isCard = cursorState === 'card';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Central Sharp Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-cyan-400 will-change-transform shadow-xs shadow-cyan-400/80 transition-opacity duration-150"
        style={{
          opacity: isExpanded ? 0 : 1,
        }}
      />

      {/* Trailing Outer Futuristic Targeting Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full border will-change-transform transition-all duration-150 flex items-center justify-center ${
          isExpanded
            ? 'w-12 h-12 -ml-6 -mt-6 border-cyan-400/80 bg-cyan-500/15 shadow-lg shadow-cyan-500/30'
            : isCard
            ? 'w-10 h-10 -ml-5 -mt-5 border-blue-400/60 bg-blue-500/10'
            : 'w-8 h-8 -ml-4 -mt-4 border-cyan-400/40 bg-transparent'
        }`}
      >
        {/* Subtle center reticle crosshair marks for cyber aesthetic */}
        {isExpanded && (
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        )}
      </div>
    </div>
  );
};
