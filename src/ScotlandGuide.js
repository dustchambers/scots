import React from 'react';
import InvernessSection from './InvernessSection';
import MallaigSection from './MallaigSection';
import SkyeSection from './SkyeSection';
import BalmoralSection from './BalmoralSection';
import InvergarrySection from './InvergarrySection';

export default function ScotlandGuide() {
  return (
    <div className="guide-container">
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
