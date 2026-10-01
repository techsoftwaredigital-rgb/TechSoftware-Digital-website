import React from 'react';

export const EnergyConduitBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Ambient glowing conduits */}
      <svg
        className="w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="conduitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Conduit line 1 */}
        <path
          d="M 50 100 Q 300 200 600 150 T 1150 250"
          fill="none"
          stroke="url(#conduitGrad)"
          strokeWidth="1.5"
          filter="url(#glowFilter)"
          strokeDasharray="8 12"
          className="animate-pulse"
        />

        {/* Conduit line 2 */}
        <path
          d="M 100 700 Q 400 550 700 650 T 1100 500"
          fill="none"
          stroke="url(#conduitGrad)"
          strokeWidth="1.5"
          filter="url(#glowFilter)"
          strokeDasharray="6 10"
        />
      </svg>

      {/* Floating luminous energy orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float-drift" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-float-drift"
        style={{ animationDelay: '3s' }}
      />
    </div>
  );
};
