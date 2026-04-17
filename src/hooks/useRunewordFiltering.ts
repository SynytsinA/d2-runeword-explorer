import { useState, useMemo } from "react";
import { Runeword } from "@/types";

/**
 * Hook for managing runeword search and categorization logic.
 */
export function useRunewordFiltering(runewords: Runeword[], ownedRuneIds: string[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const categorizedRunewords = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    
    const filteredRunewords = runewords.filter((rw) => {
      if (!term) return true;
      const matchesName = rw.name.toLowerCase().includes(term);
      const matchesRune = rw.runes.some((r) => r.rune.name.toLowerCase() === term);
      return matchesName || matchesRune;
    });

    const craftable: Runeword[] = [];
    const almostReady: Runeword[] = [];
    const unavailable: Runeword[] = [];

    filteredRunewords.forEach((rw) => {
      const requiredIds = rw.runes.map((r) => r.rune.id);
      const missingIds = requiredIds.filter((id) => !ownedRuneIds.includes(id));

      if (missingIds.length === 0) {
        craftable.push(rw);
      } else if (missingIds.length === 1) {
        almostReady.push(rw);
      } else {
        unavailable.push(rw);
      }
    });

    const sortByRuneCount = (a: Runeword, b: Runeword) => a.runes.length - b.runes.length;

    return {
      craftable: craftable.sort(sortByRuneCount),
      almostReady: almostReady.sort(sortByRuneCount),
      unavailable: unavailable.sort(sortByRuneCount),
    };
  }, [runewords, ownedRuneIds, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    categorizedRunewords,
  };
}
