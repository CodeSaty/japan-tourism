'use client';

import React from 'react';

export interface LandingPageFrameProps {
  title: string;
  sourceUrl: string;
  className?: string;
}

export function LandingPageFrame({
  title,
  sourceUrl,
  className = '',
}: LandingPageFrameProps) {
  return (
    <iframe
      title={title}
      src={sourceUrl}
      className={`w-full h-full border-0 block bg-[#05070a] ${className}`}
      sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-downloads"
      allow="accelerometer; gyroscope; fullscreen"
      loading="eager"
    />
  );
}
