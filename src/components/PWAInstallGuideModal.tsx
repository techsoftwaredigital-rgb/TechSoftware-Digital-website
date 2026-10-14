import React, { useState } from 'react';
import { X, Share2, PlusSquare, MoreVertical, Monitor, Smartphone, Check, ArrowRight } from 'lucide-react';
import { usePWA, PlatformType } from '../context/PWAContext';

export const PWAInstallGuideModal: React.FC = () => {
  const { showGuide, setShowGuide, platform } = usePWA();
  const [activeTab, setActiveTab] = useState<PlatformType>(() => {
    if (platform === 'ios') return 'ios';
    if (platform === 'android') return 'android';
    if (platform === 'chrome-desktop') return 'chrome-desktop';
    return 'ios';
  });

  if (!showGuide) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg p-6 sm:p-7 rounded-2xl glass-panel border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden transform animate-in zoom-in-95 duration-200"
        style={{
          background: 'linear-gradient(135deg, rgba(3, 7, 18, 0.98) 0%, rgba(15, 23, 42, 0.98) 100%)',
        }}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setShowGuide(false)}
          aria-label="Close guide"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-5 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Installation Guide</span>
          </div>
          <h2 id="pwa-guide-title" className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
            How to Install TechSoftware<span className="text-cyan-400">.digital</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Follow these simple steps to install the web app directly to your home screen or desktop.
          </p>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex p-1 bg-slate-900/90 rounded-xl border border-slate-800 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('ios')}
            className={`flex-1 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'ios'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>iPhone / iPad</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('android')}
            className={`flex-1 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'android'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Android</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('chrome-desktop')}
            className={`flex-1 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'chrome-desktop'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'ios' && (
          <div className="space-y-3.5 mb-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                1
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  Tap the Share button <Share2 className="w-3.5 h-3.5 text-cyan-400 inline" />
                </p>
                <p className="text-slate-400 text-xs">
                  Located in the bottom navigation bar of Safari (or top bar on iPad).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                2
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  Select "Add to Home Screen" <PlusSquare className="w-3.5 h-3.5 text-cyan-400 inline" />
                </p>
                <p className="text-slate-400 text-xs">
                  Scroll down the share sheet actions and tap <strong>Add to Home Screen</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                3
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-white">Tap "Add"</p>
                <p className="text-slate-400 text-xs">
                  Confirm in the top-right corner. The TechSoftware app icon will now appear on your home screen.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'android' && (
          <div className="space-y-3.5 mb-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                1
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  Tap Chrome Menu <MoreVertical className="w-3.5 h-3.5 text-cyan-400 inline" />
                </p>
                <p className="text-slate-400 text-xs">Tap the three vertical dots in the top-right corner of Chrome.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                2
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-white">Tap "Install app" or "Add to Home screen"</p>
                <p className="text-slate-400 text-xs">Select either option from the browser menu list.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                3
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-white">Confirm Installation</p>
                <p className="text-slate-400 text-xs">Tap "Install" to place the application on your home screen.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chrome-desktop' && (
          <div className="space-y-3.5 mb-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                1
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-white">Look at the Browser Address Bar</p>
                <p className="text-slate-400 text-xs">
                  In Google Chrome, Microsoft Edge, or Brave, look at the right end of the URL address bar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                2
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-white">Click the "Install" icon</p>
                <p className="text-slate-400 text-xs">
                  Click the computer screen icon with a down arrow, or click browser Menu &rarr; "Install
                  TechSoftware.digital".
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                3
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-white">Launch as Standalone Window</p>
                <p className="text-slate-400 text-xs">The app will launch in its own native desktop window.</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer Button */}
        <button
          onClick={() => setShowGuide(false)}
          type="button"
          className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Check className="w-4 h-4" />
          <span>Got It</span>
        </button>
      </div>
    </div>
  );
};
