'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { getRegionBySlug, JAPAN_REGIONS } from '@/data/regions';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  MapPin,
  Calendar,
  Train,
  Sparkles,
  BookOpen,
  Award,
  Utensils,
  CheckCircle2,
  Share2,
} from 'lucide-react';

export default function RegionDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || '';
  const region = getRegionBySlug(slug);

  const [activeTab, setActiveTab] = useState<'sanctuaries' | 'nature' | 'culinary' | 'practical'>('sanctuaries');
  const [copied, setCopied] = useState(false);

  if (!region) {
    return notFound();
  }

  // Find adjacent regions for next/prev navigation
  const currentIndex = JAPAN_REGIONS.findIndex((r) => r.id === region.id);
  const prevRegion = JAPAN_REGIONS[(currentIndex - 1 + JAPAN_REGIONS.length) % JAPAN_REGIONS.length];
  const nextRegion = JAPAN_REGIONS[(currentIndex + 1) % JAPAN_REGIONS.length];

  const openConciergeForRegion = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-japan-chat', {
          detail: {
            prompt: `Tell me about planning a trip to ${region.name} (${region.kanji}), including how to visit ${region.sanctuaries[0]?.name || 'key temples'} and what foods to try.`,
          },
        })
      );
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-[#dfe7e0] font-sans selection:bg-[#c83e2b] selection:text-white relative overflow-x-hidden">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at 70% 20%, ${region.colorAccent || '#c83e2b'} 0%, transparent 60%)`,
        }}
      />

      {/* Header Bar */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#05070a]/80 border-b border-[rgba(223,231,224,0.08)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/regions"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#aab4ad] hover:text-[#dfe7e0] transition"
            >
              <ArrowLeft className="w-4 h-4 text-[#c83e2b]" />
              <span className="hidden sm:inline">All Regions</span>
            </Link>
            <span className="text-[rgba(223,231,224,0.15)]">/</span>
            <span className="text-xs font-serif text-[#dfe7e0] tracking-wider">
              {region.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-full border border-[rgba(223,231,224,0.12)] text-[#aab4ad] hover:text-white hover:border-[#c83e2b] transition text-xs flex items-center gap-1.5"
              title="Share Region Link"
            >
              <Share2 className="w-3.5 h-3.5 text-[#c83e2b]" />
              <span className="text-[11px] font-mono">{copied ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={openConciergeForRegion}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c83e2b]/50 bg-[#c83e2b]/10 text-xs tracking-wider text-[#e8583c] hover:bg-[#c83e2b] hover:text-white transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask Concierge</span>
            </button>

            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-[rgba(223,231,224,0.08)] text-xs text-[#aab4ad] hover:text-white transition"
            >
              <span>3D Sanctuary</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        {/* Region Hero Title */}
        <div className="relative mb-12">
          {/* Faded Kanji in background */}
          <div className="absolute right-0 top-0 select-none pointer-events-none text-7xl sm:text-9xl font-serif text-[rgba(223,231,224,0.04)] leading-none -z-10">
            {region.kanji}
          </div>

          <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-[#e8583c] uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c83e2b]" />
            <span>Region Guide · {region.romaji}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#dfe7e0] tracking-tight mb-4 flex flex-wrap items-baseline gap-4">
            <span>{region.name}</span>
            <span className="text-2xl sm:text-3xl font-serif text-[#aab4ad]/50 font-normal">
              {region.kanji}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#b4bfb7] font-light max-w-3xl leading-relaxed mb-6">
            {region.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#78837c] font-light max-w-4xl leading-relaxed">
            {region.overview}
          </p>
        </div>

        {/* Key Statistics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#080d12] border border-[rgba(223,231,224,0.08)] mb-12">
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#78837c] mb-1">
              Prefectures Covered
            </span>
            <span className="text-xl sm:text-2xl font-serif font-light text-[#dfe7e0]">
              {region.keyStats.prefectures} {region.keyStats.prefectures === 1 ? 'Prefecture' : 'Prefectures'}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#78837c] mb-1">
              Best Season
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#b4bfb7]">
              {region.keyStats.bestSeason}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#78837c] mb-1">
              World Heritage
            </span>
            <span className="text-xs sm:text-sm text-[#b4bfb7] line-clamp-2">
              {region.keyStats.unescoSites}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#78837c] mb-1">
              Primary Gateway
            </span>
            <span className="text-xs sm:text-sm text-[#b4bfb7] line-clamp-2">
              {region.keyStats.gatewayTransit}
            </span>
          </div>
        </div>

        {/* Interactive Exploration Tabs */}
        <div className="flex border-b border-[rgba(223,231,224,0.08)] mb-10 overflow-x-auto no-scrollbar gap-2 sm:gap-6">
          <button
            onClick={() => setActiveTab('sanctuaries')}
            className={`pb-4 px-2 text-xs sm:text-sm uppercase tracking-widest font-medium transition whitespace-nowrap border-b-2 flex items-center gap-2 ${
              activeTab === 'sanctuaries'
                ? 'border-[#c83e2b] text-[#dfe7e0]'
                : 'border-transparent text-[#78837c] hover:text-[#aab4ad]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#c83e2b]" />
            <span>Sacred Sanctuaries ({region.sanctuaries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('nature')}
            className={`pb-4 px-2 text-xs sm:text-sm uppercase tracking-widest font-medium transition whitespace-nowrap border-b-2 flex items-center gap-2 ${
              activeTab === 'nature'
                ? 'border-[#c83e2b] text-[#dfe7e0]'
                : 'border-transparent text-[#78837c] hover:text-[#aab4ad]'
            }`}
          >
            <MapPin className="w-4 h-4 text-[#c83e2b]" />
            <span>Landscapes & Onsens ({region.naturalLandscapes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('culinary')}
            className={`pb-4 px-2 text-xs sm:text-sm uppercase tracking-widest font-medium transition whitespace-nowrap border-b-2 flex items-center gap-2 ${
              activeTab === 'culinary'
                ? 'border-[#c83e2b] text-[#dfe7e0]'
                : 'border-transparent text-[#78837c] hover:text-[#aab4ad]'
            }`}
          >
            <Utensils className="w-4 h-4 text-[#c83e2b]" />
            <span>Culinary & Crafts</span>
          </button>

          <button
            onClick={() => setActiveTab('practical')}
            className={`pb-4 px-2 text-xs sm:text-sm uppercase tracking-widest font-medium transition whitespace-nowrap border-b-2 flex items-center gap-2 ${
              activeTab === 'practical'
                ? 'border-[#c83e2b] text-[#dfe7e0]'
                : 'border-transparent text-[#78837c] hover:text-[#aab4ad]'
            }`}
          >
            <Train className="w-4 h-4 text-[#c83e2b]" />
            <span>Travel & Transit</span>
          </button>
        </div>

        {/* Tab 1: Sacred Sanctuaries */}
        {activeTab === 'sanctuaries' && (
          <div className="space-y-6">
            {region.sanctuaries.map((sanctuary, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#080d12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.18)] transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl sm:text-2xl font-serif text-[#dfe7e0]">
                      {sanctuary.name}
                    </span>
                    <span className="text-base font-serif text-[#78837c]">
                      {sanctuary.kanji}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#e8583c] tracking-wider">
                    {sanctuary.period}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#aab4ad] mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#c83e2b]" />
                  <span>{sanctuary.location}</span>
                </div>

                <p className="text-sm text-[#b4bfb7] leading-relaxed mb-4 font-light">
                  {sanctuary.description}
                </p>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-[rgba(223,231,224,0.05)] text-xs text-[#aab4ad] flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#c83e2b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#dfe7e0] font-medium">Cultural & Pilgrimage Insight: </strong>
                    {sanctuary.culturalNote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Natural Landscapes */}
        {activeTab === 'nature' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {region.naturalLandscapes.map((land, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080d12] border border-[rgba(223,231,224,0.08)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#e8583c] block mb-2">
                    {land.type}
                  </span>
                  <h3 className="text-xl font-serif text-[#dfe7e0] mb-2">
                    {land.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[#78837c] mb-4">
                    <MapPin className="w-3 h-3 text-[#c83e2b]" />
                    <span>{land.location}</span>
                  </div>
                  <p className="text-xs text-[#b4bfb7] leading-relaxed font-light">
                    {land.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Culinary & Crafts */}
        {activeTab === 'culinary' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Culinary Dishes */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif tracking-wider uppercase text-[#dfe7e0] pb-2 border-b border-[rgba(223,231,224,0.08)] flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#c83e2b]" />
                <span>Regional Gastronomy</span>
              </h3>
              {region.culinaryHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#080d12] border border-[rgba(223,231,224,0.06)]"
                >
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h4 className="text-base font-serif text-[#dfe7e0]">{item.dish}</h4>
                    <span className="text-xs font-serif text-[#78837c]">{item.japanese}</span>
                  </div>
                  <p className="text-xs text-[#aab4ad] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Living Crafts */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif tracking-wider uppercase text-[#dfe7e0] pb-2 border-b border-[rgba(223,231,224,0.08)] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#c83e2b]" />
                <span>Traditional Living Crafts</span>
              </h3>
              <div className="p-6 rounded-xl bg-[#080d12] border border-[rgba(223,231,224,0.06)] space-y-4">
                {region.craftsAndTraditions.map((craft, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#b4bfb7] font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c83e2b] mt-2 shrink-0" />
                    <span>{craft}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Practical Travel & Transit */}
        {activeTab === 'practical' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#080d12] border border-[rgba(223,231,224,0.08)]">
              <Train className="w-5 h-5 text-[#c83e2b] mb-4" />
              <h3 className="text-base font-serif text-[#dfe7e0] mb-2">Transit & Rail Passes</h3>
              <p className="text-xs text-[#aab4ad] leading-relaxed font-light">
                {region.travelTips.transport}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#080d12] border border-[rgba(223,231,224,0.08)]">
              <CheckCircle2 className="w-5 h-5 text-[#e8583c] mb-4" />
              <h3 className="text-base font-serif text-[#dfe7e0] mb-2">Regional Etiquette</h3>
              <p className="text-xs text-[#aab4ad] leading-relaxed font-light">
                {region.travelTips.etiquette}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#080d12] border border-[rgba(223,231,224,0.08)]">
              <Calendar className="w-5 h-5 text-[#dfe7e0] mb-4" />
              <h3 className="text-base font-serif text-[#dfe7e0] mb-2">Recommended Itinerary</h3>
              <p className="text-xs text-[#aab4ad] leading-relaxed font-light">
                {region.travelTips.recommendedStay}
              </p>
            </div>
          </div>
        )}

        {/* Call to Action for AI Concierge */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#0d1217] via-[#080d12] to-[#0d1217] border border-[#c83e2b]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#dfe7e0] mb-2">
              Have Questions About Visiting {region.name}?
            </h3>
            <p className="text-xs sm:text-sm text-[#aab4ad] max-w-xl font-light">
              Ask our live Japan Concierge for customized routes, temple opening hours, ryokan recommendations, or train transfer advice.
            </p>
          </div>
          <button
            onClick={openConciergeForRegion}
            className="px-6 py-3 rounded-full bg-[#c83e2b] hover:bg-[#e8583c] text-white text-xs tracking-widest uppercase font-medium shadow-[0_0_20px_rgba(200,62,43,0.4)] transition shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Chat With Concierge</span>
          </button>
        </div>

        {/* Adjacent Navigation */}
        <div className="mt-16 pt-8 border-t border-[rgba(223,231,224,0.08)] flex items-center justify-between">
          <Link
            href={`/regions/${prevRegion.slug}`}
            className="group flex flex-col items-start gap-1 text-left"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#78837c] flex items-center gap-1 group-hover:text-[#c83e2b] transition">
              <ArrowLeft className="w-3 h-3" /> Previous Region
            </span>
            <span className="text-sm sm:text-base font-serif text-[#dfe7e0] group-hover:text-white transition">
              {prevRegion.name} ({prevRegion.kanji})
            </span>
          </Link>

          <Link
            href="/regions"
            className="hidden sm:inline-flex px-4 py-2 rounded-full border border-[rgba(223,231,224,0.1)] text-xs text-[#aab4ad] hover:text-[#dfe7e0] hover:border-[#c83e2b] transition"
          >
            View All 8 Regions
          </Link>

          <Link
            href={`/regions/${nextRegion.slug}`}
            className="group flex flex-col items-end gap-1 text-right"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#78837c] flex items-center gap-1 group-hover:text-[#c83e2b] transition">
              Next Region <ArrowRight className="w-3 h-3" />
            </span>
            <span className="text-sm sm:text-base font-serif text-[#dfe7e0] group-hover:text-white transition">
              {nextRegion.name} ({nextRegion.kanji})
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
