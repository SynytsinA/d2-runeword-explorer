import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { useRuneInventory } from "./useRuneInventory";

describe("useRuneInventory", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it("should initialize with an empty inventory", () => {
    const { result } = renderHook(() => useRuneInventory());
    expect(result.current.ownedRuneIds).toEqual([]);
  });

  it("should toggle rune ownership and persist to localStorage", () => {
    const { result } = renderHook(() => useRuneInventory());
    
    act(() => {
      result.current.toggleRuneOwnership("ber");
    });
    
    expect(result.current.ownedRuneIds).toContain("ber");
    const stored = JSON.parse(window.localStorage.getItem("d2-owned-runes") || "[]");
    expect(stored).toContain("ber");

    act(() => {
      result.current.toggleRuneOwnership("ber");
    });
    
    expect(result.current.ownedRuneIds).not.toContain("ber");
  });

  it("should clear inventory", () => {
    const { result } = renderHook(() => useRuneInventory());
    
    act(() => {
      result.current.toggleRuneOwnership("jah");
      result.current.toggleRuneOwnership("ber");
    });
    
    expect(result.current.ownedRuneIds).toHaveLength(2);

    act(() => {
      result.current.clearRuneInventory();
    });
    
    expect(result.current.ownedRuneIds).toEqual([]);
    expect(window.localStorage.getItem("d2-owned-runes")).toBe("[]");
  });
});
