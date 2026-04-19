import { Runeword } from "@/types";
import { useState } from "react";
import { HighlightText } from "@/utils/searchHighlight";

interface RunewordCardProps {
  runeword: Runeword;
  ownedRuneIds: string[];
  status: "CRAFTABLE" | "ALMOST_READY" | "UNAVAILABLE";
  searchTerm?: string;
}

import { Button } from "@/components/ui/Button";

/**
 * Premium card displaying details for a specific runeword.
 * Includes highlighting for search matches and interactive expansion.
 */
export function RunewordCard({ runeword, ownedRuneIds, status, searchTerm = "" }: RunewordCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const requiredRunes = runeword.runes || [];
  
  const statusStyles = {
    CRAFTABLE: "bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.1)] ring-1 ring-emerald-500/20",
    ALMOST_READY: "bg-amber-950/10 border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.05)] ring-1 ring-amber-500/10",
    UNAVAILABLE: "bg-zinc-900/40 border-zinc-800/60 opacity-80",
  };

  const titleStyles = {
    CRAFTABLE: "text-emerald-300",
    ALMOST_READY: "text-amber-200",
    UNAVAILABLE: "text-zinc-400",
  };

  return (
    <div className={`group relative flex flex-col p-7 rounded-3xl border transition-all duration-700 hover:scale-[1.03] hover:-translate-y-1 ${statusStyles[status]} ${isExpanded ? 'z-50' : ''}`}>
      {/* Premium subtle glow overlay */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none ${
        status === 'CRAFTABLE' ? 'bg-gradient-to-br from-emerald-500/5 to-transparent' : 
        status === 'ALMOST_READY' ? 'bg-gradient-to-br from-amber-500/5 to-transparent' : ''
      }`} />

      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className={`text-2xl font-serif font-black tracking-wide drop-shadow-md lg:text-3xl transition-colors duration-500 ${titleStyles[status]}`}>
            <HighlightText text={runeword.name} searchTerm={searchTerm} />
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em]">Required Level</span>
            <span className="px-1.5 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 text-[10px] font-bold border border-zinc-700/50">
              {runeword.level}
            </span>
          </div>
        </div>
        {status === "CRAFTABLE" && (
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
          </div>
        )}
      </div>

      <div className="space-y-6 relative">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Rune Sequence</p>
            {status === "ALMOST_READY" && (
              <span className="text-[9px] text-amber-500 font-bold uppercase tracking-tighter animate-pulse">1 Rune Needed</span>
            )}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {requiredRunes.map((rune, idx) => {
              const isOwned = ownedRuneIds.includes(rune.rune.id);
              const isMissingInAlmostReady = status === "ALMOST_READY" && !isOwned;
              const isSearchingThisRune = searchTerm && rune.rune.name.toLowerCase() === searchTerm.toLowerCase().trim();
              
              return (
                <div 
                  key={rune.rune.id + idx} 
                  className={`px-3 py-1.5 rounded-xl border text-[12px] font-bold transition-all duration-500 shadow-sm ${
                    isSearchingThisRune
                      ? 'ring-2 ring-amber-400 bg-amber-400/20 border-amber-400 text-amber-100 shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                      : isOwned 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                        : isMissingInAlmostReady
                          ? 'bg-amber-500/5 border-amber-500/60 text-amber-500 ring-2 ring-amber-500/20 scale-110 mx-1'
                          : 'bg-zinc-800/40 border-zinc-700/50 text-zinc-600'
                  }`}
                >
                  {rune.rune.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Base Items</p>
          <div className="flex flex-wrap gap-1.5">
            {runeword.baseItemTypes?.map((type, idx) => (
              <span key={type.baseItemType.id + idx} className="text-[10px] text-zinc-500 bg-zinc-900/50 px-2.5 py-1 rounded-full border border-zinc-800/80 transition-colors group-hover:border-zinc-700">
                {type.baseItemType.name}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="pt-4 mt-2 border-t border-zinc-800/50 group-hover:opacity-100 transition-all duration-500">
          <div className="space-y-1.5">
            {!isExpanded ? (
              <>
                {runeword.stats.slice(0, 3).map((stat, idx) => (
                  <p key={idx} className="text-[10px] text-zinc-400 leading-relaxed italic line-clamp-1">
                    • {stat}
                  </p>
                ))}
                {runeword.stats.length > 3 && (
                  <Button 
                    onClick={() => setIsExpanded(true)}
                    variant="ghost"
                    size="sm"
                    className="text-amber-500 hover:text-amber-400 p-0 h-auto justify-start mt-1 text-[9px] font-bold tracking-tight uppercase"
                  >
                    +{runeword.stats.length - 3} more powerful attributes — View All
                  </Button>
                )}
              </>
            ) : (
              <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                {runeword.stats.map((stat, idx) => (
                  <p key={idx} className="text-[10px] text-zinc-300 leading-relaxed italic border-b border-zinc-800/30 pb-1 last:border-0">
                    • {stat}
                  </p>
                ))}
                <Button 
                  onClick={() => setIsExpanded(false)}
                  variant="ghost"
                  size="sm"
                  className="text-zinc-500 hover:text-zinc-300 p-0 h-auto justify-start mt-2 text-[9px] font-bold tracking-tight uppercase"
                >
                  Show Less
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
