import { useState, useEffect, useRef, useMemo } from "react";

interface UseInfiniteScrollOptions {
  pageSize?: number;
  threshold?: number;
}

/**
 * Hook to handle infinite scrolling for a list of items.
 * returns the sliced list and a ref to be placed on the sentinel element.
 */
export function useInfiniteScroll<T>(items: T[], { pageSize = 12, threshold = 0.5 }: UseInfiniteScrollOptions = {}) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [prevItemsLength, setPrevItemsLength] = useState(items.length);

  // Reset visible count when the source items change (e.g. search term changes)
  // We adjust state during render to avoid the useEffect cascade lint error
  if (items.length !== prevItemsLength) {
    setPrevItemsLength(items.length);
    setVisibleCount(pageSize);
  }

  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < items.length) {
          setVisibleCount((prev) => Math.min(prev + pageSize, items.length));
        }
      },
      { threshold }
    );

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [items.length, visibleCount, pageSize, threshold]);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);
  const hasMore = visibleCount < items.length;

  return {
    visibleItems,
    hasMore,
    sentinelRef,
  };
}
