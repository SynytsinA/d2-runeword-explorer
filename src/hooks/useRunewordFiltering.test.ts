import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useRunewordFiltering } from "./useRunewordFiltering";
import { RUNEWORDS } from "@/constants/d2rData";

describe("useRunewordFiltering", () => {
  const mockRunewords = RUNEWORDS.slice(0, 5); // Use a subset for speed

  it("should categorize runewords based on owned runes", () => {
    // Ancient's Pledge (Ral Ort Tal)
    const ancientsPledge = RUNEWORDS.find(r => r.id === "ancients_pledge")!;
    const { result } = renderHook(() => useRunewordFiltering([ancientsPledge], ["ral", "ort", "tal"]));
    
    expect(result.current.categorizedRunewords.craftable).toHaveLength(1);
    expect(result.current.categorizedRunewords.almostReady).toHaveLength(0);
    expect(result.current.categorizedRunewords.unavailable).toHaveLength(0);
  });

  it("should mark as ALMOST_READY if missing exactly one rune", () => {
    const ancientsPledge = RUNEWORDS.find(r => r.id === "ancients_pledge")!;
    const { result } = renderHook(() => useRunewordFiltering([ancientsPledge], ["ral", "ort"]));
    
    expect(result.current.categorizedRunewords.craftable).toHaveLength(0);
    expect(result.current.categorizedRunewords.almostReady).toHaveLength(1);
    expect(result.current.categorizedRunewords.unavailable).toHaveLength(0);
  });

  it("should filter by search term", () => {
    const { result } = renderHook(() => useRunewordFiltering(mockRunewords, []));
    
    act(() => {
      result.current.setSearchTerm("enigma");
    });
    
    // Since we used slice(0,5), let's search for something we know is there
    const firstName = mockRunewords[0].name;
    
    act(() => {
      result.current.setSearchTerm(firstName);
    });
    
    const matched = result.current.categorizedRunewords.unavailable.filter(r => r.name === firstName);
    expect(matched).toHaveLength(1);
  });

  it("should perform exact matching for runes to avoid partial name bugs", () => {
    // Rhyme is Shael + Eth. Searching "El" should NOT match it.
    const rhyme = RUNEWORDS.find(r => r.id === "rhyme")!;
    const { result } = renderHook(() => useRunewordFiltering([rhyme], []));
    
    act(() => {
      result.current.setSearchTerm("El");
    });
    
    expect(result.current.categorizedRunewords.unavailable).toHaveLength(0);

    act(() => {
      result.current.setSearchTerm("Shael");
    });
    
    expect(result.current.categorizedRunewords.unavailable).toHaveLength(1);
  });
});
