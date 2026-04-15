import { Rune } from "@/types";

interface RunesGridProps {
    runes: Rune[];
    ownedRuneIds: string[];
    toggleRuneOwnership: (id: string) => void;
}

/**
 * Grid display for all runes in the game.
 * Allows users to toggle their current inventory state.
 */
export function RunesGrid({ runes, ownedRuneIds, toggleRuneOwnership }: RunesGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11 gap-3">
      {runes.map((rune) => {
        const isOwned = ownedRuneIds.includes(rune.id);
        return (
          <button
            key={rune.id}
            onClick={() => toggleRuneOwnership(rune.id)}
            className={`group relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 border active:scale-95 ${
              isOwned
                ? 'bg-amber-500/15 border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/20'
                : 'bg-zinc-800/20 border-zinc-700/30 hover:border-zinc-500/50 hover:bg-zinc-800/40 opacity-50 hover:opacity-100'
            }`}
          >
            <span className={`text-base font-bold tracking-tight transition-all duration-300 ${
              isOwned ? 'text-amber-300 scale-110' : 'text-zinc-600 group-hover:text-zinc-400'
            }`}>
              {rune.name}
            </span>
            <span className={`text-[9px] mt-1 font-mono tracking-tighter uppercase transition-colors duration-300 ${
              isOwned ? 'text-amber-600/80' : 'text-zinc-700 group-hover:text-zinc-600'
            }`}>
              {rune.id === 'hel' ? 'Req -15%' : `Lvl ${rune.requiredLevel}`}
            </span>
            
            {/* Status dot */}
            <div className={`absolute top-1.5 right-1.5 w-1 h-1 rounded-full transition-all duration-500 ${
              isOwned 
                ? 'bg-amber-400 opacity-100 scale-100 shadow-[0_0_8px_rgba(245,158,11,1)]' 
                : 'bg-white/0 opacity-0 scale-0'
            }`} />
          </button>
        );
      })}
    </div>
  );
}
