import React from 'react';

export const CyberGridFloorBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Perspective Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[65%] cyber-plane-grid opacity-35" />
      
      {/* Light sweep horizontal beam */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent h-48 w-full animate-scanline pointer-events-none" />

      {/* Floating Holographic Ring Clusters */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full border border-cyan-500/10 animate-radar pointer-events-none">
        <div className="absolute inset-8 rounded-full border border-dashed border-blue-500/10" />
      </div>

      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full border border-indigo-500/10 animate-radar pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '18s' }}>
        <div className="absolute inset-10 rounded-full border border-dotted border-cyan-400/10" />
      </div>

      {/* Fade Gradients top & bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
    </div>
  );
};
