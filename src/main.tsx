import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MotionPreferenceProvider } from './context/MotionPreferenceContext';
import './index.css';

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
