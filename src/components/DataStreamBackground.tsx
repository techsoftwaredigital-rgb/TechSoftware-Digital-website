import React, { useEffect, useRef } from 'react';

export const DataStreamBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const chars = '01ABCDEF01248TSDEVCLOUD';
    const fontSize = 12;
    const columns = Math.floor(width / 28);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const render = () => {
      // Semi-transparent clear to produce gentle trail
      ctx.fillStyle = 'rgba(3, 7, 18, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 28;
        const y = drops[i] * fontSize;

        // Head of stream is brighter cyan, body is soft dark blue
        ctx.fillStyle = '#67e8f9';
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#06b6d4';
        ctx.fillText(text, x, y);

        // Body character
        if (y > fontSize * 2) {
          ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
          ctx.shadowBlur = 0;
          ctx.fillText(
            chars[Math.floor(Math.random() * chars.length)],
            x,
            y - fontSize * 2
          );
        }

        if (y > height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i] += 0.45;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-20">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
    </div>
  );
};
