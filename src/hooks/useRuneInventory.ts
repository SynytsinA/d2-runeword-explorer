import { useState, useEffect } from "react";

const STORAGE_KEY = "d2-owned-runes";

/**
 * Hook to manage the user's rune inventory with localStorage persistence.
 * Addresses lint warning: initializes state via functional initializer to avoid useEffect cascades.
 */
export function useRuneInventory() {
  const [ownedRuneIds, setOwnedRuneIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to parse stored runes", e);
      return [];
    }
  });

  // Persist changes to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedRuneIds));
  }, [ownedRuneIds]);

  const toggleRuneOwnership = (runeId: string) => {
    setOwnedRuneIds((prev) => {
      return prev.includes(runeId)
        ? prev.filter((id) => id !== runeId)
        : [...prev, runeId];
    });
  };

  const clearRuneInventory = () => {
    setOwnedRuneIds([]);
  };

  return {
    ownedRuneIds,
    toggleRuneOwnership,
    clearRuneInventory,
  };
}
