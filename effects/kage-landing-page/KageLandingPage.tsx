'use client';

import React from 'react';
import { LandingPageFrame } from '@/src/shaders/landing-pages/LandingPages';

export function KageLandingPage() {
  return (
    <LandingPageFrame
      title="Kage"
      sourceUrl="/landing-pages/kage.html"
      className="kage-host-frame"
    />
  );
}

export default KageLandingPage;
