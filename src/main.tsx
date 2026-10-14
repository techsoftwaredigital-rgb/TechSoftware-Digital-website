import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MotionPreferenceProvider } from './context/MotionPreferenceContext';
import { registerSW } from 'virtual:pwa-register';
import './index.css';

// Automatically register PWA service worker with auto-update
registerSW({ immediate: true });

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MotionPreferenceProvider>
        <App />
      </MotionPreferenceProvider>
    </React.StrictMode>
  );
}
