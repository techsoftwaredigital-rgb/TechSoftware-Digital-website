import React from 'react';

export const RadarTelemetryBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Concentric Telemetry Target Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20">
        <div className="absolute inset-0 rounded-full border border-cyan-500/30" />
        <div className="absolute inset-16 rounded-full border border-dashed border-cyan-400/20" />
        <div className="absolute inset-32 rounded-full border border-slate-700/40" />
        <div className="absolute inset-48 rounded-full border border-cyan-500/20" />

        {/* Crosshair Axes */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-500/15" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-500/15" />

        {/* Rotating Radar Sweep Cone */}
        <div className="absolute inset-0 rounded-full animate-radar origin-center">
          <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-400/15 to-transparent rounded-tl-full origin-bottom-right" />
        </div>
      </div>

      {/* Floating glowing telemetry nodes */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-60" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-60" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};
