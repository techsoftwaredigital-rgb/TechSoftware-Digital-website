import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass';
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;

    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 text-black shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:brightness-105';
      case 'secondary':
        return 'bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-cyan-400/50 shadow-md shadow-black/40';
      case 'glass':
        return 'glass-panel text-cyan-300 hover:text-white border-cyan-500/30 hover:border-cyan-400/60 shadow-md shadow-cyan-950/30';
      default:
        return 'bg-cyan-400 text-black';
    }
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.2s ease, background-color 0.2s ease',
      }}
      className={`relative group button-light-sweep overflow-hidden px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm tracking-wide uppercase font-display active:scale-[0.97] transition-all cursor-pointer inline-flex items-center justify-center gap-2 ${getVariantStyles()} ${className}`}
      {...props}
    >
      {/* Dynamic glow aura */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
