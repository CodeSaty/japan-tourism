'use client';

import dynamic from 'next/dynamic';
import '@/effects/kage-landing-page/styles.css';

const KageLandingPage = dynamic(
  () => import('@/effects/kage-landing-page/KageLandingPage').then((mod) => mod.KageLandingPage),
  {
    ssr: false,
    loading: () => (
      <div className="w-screen h-screen bg-[#05070a] flex items-center justify-center text-[#aab4ad] text-xs tracking-[0.2em] uppercase">
        Loading Kage Sanctuary...
      </div>
    ),
  }
);

export default function HomePage() {
  return (
    <main className="effect-frame">
      <KageLandingPage />
    </main>
  );
}
