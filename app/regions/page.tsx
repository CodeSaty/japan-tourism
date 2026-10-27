'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { JAPAN_REGIONS } from '@/data/regions';
import { Search, MapPin, Compass, ArrowRight, Home, Sparkles } from 'lucide-react';

export default function RegionsIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRegions = JAPAN_REGIONS.filter((region) => {
    const matchesSearch =
      region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      region.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      region.provinces.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      region.sanctuaries.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSearch;
  });

  const openConciergePrompt = (prompt: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-japan-chat', { detail: { prompt } }));
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-[#dfe7e0] font-sans selection:bg-[#c83e2b] selection:text-white relative overflow-x-hidden">
      {/* Background radial gradient glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(200,62,43,0.12),transparent_70%)]" />

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#05070a]/80 border-b border-[rgba(223,231,224,0.08)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group text-[#dfe7e0] transition hover:text-white"
          >
            <div className="w-8 h-8 rounded-full bg-[#c83e2b] flex items-center justify-center text-white shadow-[0_0_15px_rgba(200,62,43,0.4)]">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                <path d="M3 6h18M5 10h14M8 6v14M16 6v14" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase">JAPAN</span>
              <span className="text-[9px] tracking-[0.3em] text-[#78837c] uppercase">Regional Heritage</span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => openConciergePrompt('Help me plan an itinerary across Japan’s regions')}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(223,231,224,0.12)] text-xs tracking-wider text-[#aab4ad] hover:text-[#dfe7e0] hover:border-[#c83e2b] bg-white/[0.02] transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#e8583c]" />
              <span>Ask Concierge</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-[rgba(223,231,224,0.1)] text-xs tracking-wider uppercase text-[#dfe7e0] transition"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">3D Sanctuary</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,62,43,0.3)] bg-[#c83e2b]/10 text-[#e8583c] text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c83e2b] animate-ping" />
            Official Regional Atlas · 八地方と四十七都道府県
          </div>

          <h1 className="text-4xl sm:text-6xl font-normal font-serif tracking-tight leading-[1.1] mb-6">
            The Eight Sacred Realms <br />
            <span className="text-[#aab4ad] italic font-light">of Japan’s 47 Provinces.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9aa5a0] leading-relaxed mb-10 font-light">
            Journey beyond the conventional routes. Explore the deep cultural roots, ancient pilgrimage circuits,
            mountain sanctuaries, and living culinary arts across all eight historic regions of Japan.
          </p>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#78837c] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by province, city, or temple (e.g. Kyoto, Nikko, Hokkaido, Yamadera)..."
                className="w-full pl-11 pr-4 py-3 bg-[#0a0f14] border border-[rgba(223,231,224,0.12)] rounded-xl text-sm text-[#dfe7e0] placeholder-[#5a6460] focus:outline-none focus:border-[#c83e2b] focus:ring-1 focus:ring-[#c83e2b] transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#78837c] hover:text-[#dfe7e0] px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Cards Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[rgba(223,231,224,0.08)]">
          <span className="text-xs uppercase tracking-[0.2em] text-[#78837c]">
            Showing {filteredRegions.length} of {JAPAN_REGIONS.length} Regions
          </span>
          <span className="text-xs text-[#aab4ad] font-mono">
            47 Prefectures Represented
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRegions.map((region, index) => (
            <Link
              key={region.id}
              href={`/regions/${region.slug}`}
              className="group relative flex flex-col bg-[#080d12] border border-[rgba(223,231,224,0.08)] hover:border-[#c83e2b]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(200,62,43,0.1)] hover:-translate-y-1"
            >
              {/* Card Header with Kanji & Index */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-[#78837c] tracking-widest">
                  0{index + 1}
                </span>
                <span className="text-2xl font-serif text-[#dfe7e0]/30 group-hover:text-[#e8583c]/60 transition">
                  {region.kanji}
                </span>
              </div>

              {/* Title & Tagline */}
              <h2 className="text-2xl font-serif font-normal text-[#dfe7e0] group-hover:text-white transition flex items-center justify-between mb-2">
                <span>{region.name}</span>
                <ArrowRight className="w-4 h-4 text-[#78837c] group-hover:text-[#e8583c] group-hover:translate-x-1 transition duration-300" />
              </h2>

              <p className="text-xs text-[#aab4ad] leading-relaxed mb-6 font-light">
                {region.tagline}
              </p>

              {/* Prefectures Covered */}
              <div className="mb-6 p-3 rounded-xl bg-white/[0.02] border border-[rgba(223,231,224,0.05)]">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#78837c] mb-1.5">
                  <MapPin className="w-3 h-3 text-[#c83e2b]" />
                  <span>Provinces & Cities</span>
                </div>
                <p className="text-xs text-[#b4bfb7] line-clamp-2">
                  {region.provinces.join(', ')}
                </p>
              </div>

              {/* Highlights Chips */}
              <div className="mt-auto pt-4 border-t border-[rgba(223,231,224,0.06)] flex items-center justify-between text-xs text-[#78837c]">
                <span className="truncate max-w-[190px]">
                  {region.sanctuaries[0]?.name || 'Sacred Heritage'}
                </span>
                <span className="text-[#c83e2b] group-hover:text-[#e8583c] font-medium tracking-wider uppercase text-[11px] flex items-center gap-1 transition">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredRegions.length === 0 && (
          <div className="py-20 text-center rounded-2xl border border-dashed border-[rgba(223,231,224,0.1)]">
            <Compass className="w-10 h-10 text-[#78837c] mx-auto mb-4" />
            <h3 className="text-lg font-serif text-[#dfe7e0] mb-2">No Regions Found</h3>
            <p className="text-sm text-[#78837c] max-w-md mx-auto mb-6">
              No regional matches found for &quot;{searchQuery}&quot;. Try searching for major hubs like Tokyo, Kyoto, Sapporo, or ask our concierge.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 rounded-full border border-[rgba(223,231,224,0.15)] text-xs tracking-wider uppercase hover:bg-white/5 transition"
            >
              Reset Search
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(223,231,224,0.08)] py-12 px-6 bg-[#040608]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#78837c]">
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-[#dfe7e0] transition">3D Sanctuary</Link>
            <span>·</span>
            <span>Japan Regional Travel Guide</span>
            <span>·</span>
            <span>JNTO Grounded</span>
          </div>

          <div>
            <span>Official tourism intelligence for all 47 Japanese prefectures</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
