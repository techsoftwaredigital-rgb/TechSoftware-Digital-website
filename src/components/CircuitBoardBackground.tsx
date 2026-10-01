import React, { useEffect, useRef } from 'react';

export const CircuitBoardBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    interface CircuitLine {
      points: { x: number; y: number }[];
      progress: number;
      speed: number;
      color: string;
      length: number;
    }

    const circuits: CircuitLine[] = [];
    const count = 14;

    const generateCircuit = (): CircuitLine => {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const points = [{ x: startX, y: startY }];

      let currX = startX;
      let currY = startY;
      const segments = Math.floor(Math.random() * 3) + 2;

      for (let s = 0; s < segments; s++) {
        const goHorizontal = Math.random() > 0.5;
        const length = (Math.random() * 120 + 60) * (Math.random() > 0.5 ? 1 : -1);
        if (goHorizontal) {
          currX += length;
        } else {
          currY += length;
        }
        points.push({ x: currX, y: currY });
      }

      return {
        points,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        color: Math.random() > 0.4 ? '#06b6d4' : '#3b82f6',
        length: segments,
      };
    };

    for (let i = 0; i < count; i++) {
      circuits.push(generateCircuit());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint base tracks
      ctx.lineWidth = 1;
      for (const circuit of circuits) {
        ctx.beginPath();
        ctx.moveTo(circuit.points[0].x, circuit.points[0].y);
        for (let i = 1; i < circuit.points.length; i++) {
          ctx.lineTo(circuit.points[i].x, circuit.points[i].y);
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.stroke();

        // Draw terminal pads
        for (const pt of circuit.points) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
          ctx.fill();
        }

        // Draw traveling electrical current pulse
        circuit.progress += circuit.speed;
        if (circuit.progress > 1) {
          circuit.progress = 0;
        }

        // Calculate point on multi-segment path
        const totalSegments = circuit.points.length - 1;
        const segProgress = circuit.progress * totalSegments;
        const currentSegIndex = Math.min(Math.floor(segProgress), totalSegments - 1);
        const t = segProgress - currentSegIndex;

        const p0 = circuit.points[currentSegIndex];
        const p1 = circuit.points[currentSegIndex + 1];

        const pulseX = p0.x + (p1.x - p0.x) * t;
        const pulseY = p0.y + (p1.y - p0.y) * t;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = circuit.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = circuit.color;
        ctx.fill();
        ctx.shadowBlur = 0;
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-radial from-transparent to-[#030712]" />
    </div>
  );
};
