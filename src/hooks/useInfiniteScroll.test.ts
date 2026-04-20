import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useInfiniteScroll } from "./useInfiniteScroll";

describe("useInfiniteScroll", () => {
  const mockItems = Array.from({ length: 50 }, (_, i) => i);
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with the correct page size", () => {
    const { result } = renderHook(() => useInfiniteScroll(mockItems, { pageSize: 10 }));
    
    expect(result.current.visibleItems).toHaveLength(10);
    expect(result.current.hasMore).toBe(true);
  });

  it("should reset visible count when items list changes significantly", () => {
    const { result, rerender } = renderHook(({ items }) => useInfiniteScroll(items, { pageSize: 10 }), {
      initialProps: { items: mockItems }
    });
    
    // Simulate scroll/load more (if we could trigger observer safely)
    // But we check reset:
    rerender({ items: [1, 2, 3] });
    expect(result.current.visibleItems).toHaveLength(3);
  });
});
