import React, { useState } from 'react';
import InvernessSection from './InvernessSection';
import SkyeSection from './SkyeSection';
import BalmoralSection from './BalmoralSection';
import MallaigSection from './MallaigSection';
import InvergarrySection from './InvergarrySection';
import './index.css';

export default function ScotlandGuide() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`guide-container ${darkMode ? 'dark' : ''}`}>
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1>🏴 Scotland Off-the-Beaten-Path Guide</h1>
      <p>Explore hidden hikes, pubs, ruins, and scenic routes by region.</p>

      <InvernessSection />
      <MallaigSection />
      <SkyeSection />
      <BalmoralSection />
      <InvergarrySection />
    </div>
  );
}
