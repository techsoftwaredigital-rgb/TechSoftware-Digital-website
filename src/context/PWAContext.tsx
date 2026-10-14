import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export type PlatformType = 'ios' | 'android' | 'chrome-desktop' | 'safari-mac' | 'other';

interface PWAContextType {
  isInstallable: boolean;
  isInstalled: boolean;
  platform: PlatformType;
  isIOS: boolean;
  isAndroid: boolean;
  showPopup: boolean;
  showGuide: boolean;
  toastMessage: string | null;
  setShowPopup: (show: boolean) => void;
  setShowGuide: (show: boolean) => void;
  dismissPopup: () => void;
  promptInstall: () => Promise<boolean>;
  openInstallFlow: () => void;
}

const PWAContext = createContext<PWAContextType | null>(null);

const DISMISS_KEY = 'ts_pwa_popup_dismissed_at';
const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export const PWAProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [platform, setPlatform] = useState<PlatformType>('other');

  // Platform and Standalone Detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect standalone mode
    const checkStandalone = () => {
      const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
        document.referrer.includes('android-app://');
      setIsInstalled(isStandalone);
      return isStandalone;
    };

    const standaloneNow = checkStandalone();

    // Detect User Agent
    const ua = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(ua);
    const isAndroidDevice = /android/.test(ua);
    const isMacSafari = /macintosh/.test(ua) && /safari/.test(ua) && !/chrome/.test(ua);
    const isDesktopChromeOrEdge = (/chrome/.test(ua) || /edg/.test(ua)) && !isIOSDevice && !isAndroidDevice;

    if (isIOSDevice) {
      setPlatform('ios');
    } else if (isAndroidDevice) {
      setPlatform('android');
    } else if (isDesktopChromeOrEdge) {
      setPlatform('chrome-desktop');
    } else if (isMacSafari) {
      setPlatform('safari-mac');
    } else {
      setPlatform('other');
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setShowPopup(false);
      showToast('App installed successfully! Enjoy TechSoftware.digital.');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Initial eligibility check for auto-showing popup
    if (!standaloneNow) {
      try {
        const lastDismissed = localStorage.getItem(DISMISS_KEY);
        const shouldShow =
          !lastDismissed || Date.now() - parseInt(lastDismissed, 10) > DISMISS_COOLDOWN_MS;

        if (shouldShow) {
          // Delay popup display slightly so user experiences the page smoothly
          const timer = setTimeout(() => {
            setShowPopup(true);
          }, 3200);
          return () => {
            clearTimeout(timer);
            window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
            window.removeEventListener('appinstalled', handleAppInstalled);
          };
        }
      } catch {
        // Storage access issues fallback
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  }, []);

  const dismissPopup = useCallback(() => {
    setShowPopup(false);
    try {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    } catch {
      // ignore
    }
  }, []);

  const promptInstall = useCallback(async (): Promise<boolean> => {
    if (isInstalled) {
      showToast('App already installed and ready on your device.');
      return true;
    }

    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          setIsInstalled(true);
          setDeferredPrompt(null);
          setShowPopup(false);
          showToast('Thank you for installing TechSoftware.digital!');
          return true;
        } else {
          dismissPopup();
          return false;
        }
      } catch (err) {
        console.warn('Install prompt error:', err);
        setShowGuide(true);
        return false;
      }
    } else {
      // Fallback to guided instructions modal for iOS or browsers without direct prompt
      setShowGuide(true);
      return false;
    }
  }, [deferredPrompt, isInstalled, dismissPopup, showToast]);

  const openInstallFlow = useCallback(() => {
    if (isInstalled) {
      showToast('App already installed and ready on your device.');
      return;
    }
    if (deferredPrompt) {
      promptInstall();
    } else {
      setShowGuide(true);
    }
  }, [isInstalled, deferredPrompt, promptInstall, showToast]);

  return (
    <PWAContext.Provider
      value={{
        isInstallable: !!deferredPrompt,
        isInstalled,
        platform,
        isIOS: platform === 'ios',
        isAndroid: platform === 'android',
        showPopup,
        showGuide,
        toastMessage,
        setShowPopup,
        setShowGuide,
        dismissPopup,
        promptInstall,
        openInstallFlow,
      }}
    >
      {children}
    </PWAContext.Provider>
  );
};

export function usePWA() {
  const context = useContext(PWAContext);
  if (!context) {
    throw new Error('usePWA must be used within a PWAProvider');
  }
  return context;
}
