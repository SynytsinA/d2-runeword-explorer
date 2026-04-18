import React from "react";

interface HighlightTextProps {
  text: string;
  searchTerm: string;
}

/**
 * Highlights matches of the search term within the given text.
 * Uses consistent amber styling from the design system.
 */
export function HighlightText({ text, searchTerm }: HighlightTextProps) {
  if (!searchTerm || !searchTerm.trim()) return <>{text}</>;
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <span key={i} className="text-amber-400 bg-amber-400/10 rounded-sm px-0.5">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
