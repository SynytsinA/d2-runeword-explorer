"use client";

import { useState, useEffect } from "react";

import { RunesGrid } from "../RunesGrid";
import { RunewordCard } from "../RunewordCard";
import { Rune, Runeword } from "@/types";
import { useRuneInventory } from "@/hooks/useRuneInventory";
import { useRunewordFiltering } from "@/hooks/useRunewordFiltering";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

import { Button } from "@/components/ui/Button";

interface DashboardClientProps {
  runes: Rune[];
  runewords: Runeword[];
}

/**
 * Main dashboard view for the Runeword Tracker.
 * Manages inventory state and runeword filtering via custom hooks.
 * Addresses unescaped entity lint errors.
 */
export function DashboardClient({ runes, runewords }: DashboardClientProps) {
  const { ownedRuneIds, toggleRuneOwnership, clearRuneInventory } = useRuneInventory();
  const { searchTerm, setSearchTerm, categorizedRunewords } = useRunewordFiltering(runewords, ownedRuneIds);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Implement infinite scroll for the long "Unavailable" section
  const {
    visibleItems: visibleUnavailable,
    hasMore: hasMoreUnavailable,
    sentinelRef
  } = useInfiniteScroll(categorizedRunewords.unavailable, { pageSize: 12 });

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-zinc-100 p-4 md:p-8 lg:p-12 font-sans selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="space-y-6 max-w-3xl mx-auto text-center">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-500 to-amber-700 tracking-tight leading-tight">
              Runeword Explorer
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600" />
              <span className="text-[10px] font-mono font-bold text-amber-500/80 uppercase tracking-widest px-3 py-1 rounded-full border border-amber-900/30 bg-amber-950/20 backdrop-blur-sm">
                v3.1.2 &mdash; Reign of the Warlock
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600" />
            </div>
          </div>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            Optimize your D2R crafting efficiency. This explorer monitors your rune collection, automatically highlighting available runewords and identifying missing components at a glance. Streamline your farming strategy and master the forge.
          </p>
        </header>

        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-900/20 to-zinc-900/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 pointer-events-none" />
          <div className="relative bg-zinc-900/40 backdrop-blur-xl rounded-[2rem] p-8 border border-zinc-800/50 shadow-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h2 className="text-xl font-serif font-bold text-amber-100/90 flex items-center gap-3">
                <span className="w-8 h-px bg-amber-500/50" />
                Select Runes in Your Inventory
                <span className="w-8 h-px bg-amber-500/50" />
              </h2>
              {ownedRuneIds.length > 0 && (
                <Button
                  onClick={clearRuneInventory}
                  variant="secondary"
                  size="sm"
                  className="group/btn"
                >
                  <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:rotate-180 duration-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear Inventory
                </Button>
              )}
            </div>
            <RunesGrid runes={runes} ownedRuneIds={ownedRuneIds} toggleRuneOwnership={toggleRuneOwnership} />
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="relative max-w-2xl mx-auto w-full">
          <div className="relative group/search">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-900/20 rounded-2xl blur opacity-20 group-hover/search:opacity-40 transition duration-500 pointer-events-none" />
            <div className="relative bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-2 shadow-xl flex items-center gap-3">
              <div className="pl-4 text-zinc-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by runeword name or rune (e.g. Enigma, Ber)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-zinc-200 placeholder:text-zinc-600 text-sm sm:text-lg py-2"
              />
              {searchTerm && (
                <Button
                  onClick={() => setSearchTerm("")}
                  variant="ghost"
                  size="sm"
                  title="Clear search"
                  className="mr-1 sm:mr-2 shrink-0 px-2 sm:px-3"
                >
                  <svg className="w-4 h-4 sm:w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              )}
            </div>
          </div>

          {searchTerm && (
            <div className="mt-4 flex justify-center">
              <p className="text-zinc-500 text-sm italic">
                Found {categorizedRunewords.craftable.length + categorizedRunewords.almostReady.length + categorizedRunewords.unavailable.length} results matching &quot;{searchTerm}&quot;
              </p>
            </div>
          )}
        </section>

        <section className="space-y-16 pb-20">
          {/* Craftable Section */}
          {categorizedRunewords.craftable.length > 0 && (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-serif font-bold text-emerald-400 tracking-wide">
                  Craftable Now
                </h3>
                <div className="flex-1 h-px bg-emerald-900/30" />
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20">
                  {categorizedRunewords.craftable.length} READY
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedRunewords.craftable.map((rw) => (
                  <RunewordCard
                    key={rw.id}
                    runeword={rw}
                    ownedRuneIds={ownedRuneIds}
                    status="CRAFTABLE"
                    searchTerm={searchTerm}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Almost Ready Section */}
          {categorizedRunewords.almostReady.length > 0 && (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-serif font-bold text-amber-400 tracking-wide">
                  Almost Ready
                </h3>
                <div className="flex-1 h-px bg-amber-900/30" />
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/20">
                  {categorizedRunewords.almostReady.length} NEARLY THERE
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedRunewords.almostReady.map((rw) => (
                  <RunewordCard
                    key={rw.id}
                    runeword={rw}
                    ownedRuneIds={ownedRuneIds}
                    status="ALMOST_READY"
                    searchTerm={searchTerm}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Unavailable Section with Infinite Scroll */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-serif font-semibold text-zinc-500 tracking-wide">
                Unavailable
              </h3>
              <div className="flex-1 h-px bg-zinc-800/30" />
              <span className="px-3 py-1 rounded-full bg-zinc-800/20 text-zinc-500 text-xs font-bold border border-zinc-800/50">
                {categorizedRunewords.unavailable.length} NOT REACHABLE
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleUnavailable.map((rw) => (
                <RunewordCard
                  key={rw.id}
                  runeword={rw}
                  ownedRuneIds={ownedRuneIds}
                  status="UNAVAILABLE"
                  searchTerm={searchTerm}
                />
              ))}
            </div>

            {/* Sentinel for Infinite Scroll */}
            <div ref={sentinelRef} className="h-20 flex items-center justify-center pt-8">
              {hasMoreUnavailable && (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" />
                  </div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    Unlocking more secrets...
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-zinc-900/80 backdrop-blur-md border border-amber-500/30 text-amber-500 rounded-full shadow-2xl shadow-amber-900/40 hover:bg-amber-500 hover:text-zinc-900 hover:border-amber-400 transition-all duration-500 z-50 group transform ${
          showScrollTop ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
}
