import React from 'react';

export const CyberNebulaBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Dynamic Animated Cyber Nebula Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-purple-600/15 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />

      {/* Orbiting Tech Particles */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[500px] h-[500px] rounded-full border border-cyan-400/20 animate-radar" style={{ animationDuration: '24s' }}>
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400 -mt-1.5 ml-1/2" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <div className="w-[720px] h-[720px] rounded-full border border-indigo-400/15 animate-radar" style={{ animationDuration: '36s', animationDirection: 'reverse' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400 mt-1/2 -ml-1.5" />
        </div>
      </div>
    </div>
  );
};
