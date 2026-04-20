import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HighlightText } from "./searchHighlight";

describe("HighlightText Utility", () => {
  it("should return the original text ifsearchTerm is empty", () => {
    const { container } = render(<HighlightText text="Breath of the Dying" searchTerm="" />);
    expect(container.textContent).toBe("Breath of the Dying");
    expect(container.querySelector("span")).toBeNull();
  });

  it("should highlight a single matching word", () => {
    const { container } = render(<HighlightText text="Breath of the Dying" searchTerm="Breath" />);
    const highlight = container.querySelector("span");
    expect(highlight).toBeDefined();
    expect(highlight?.textContent).toBe("Breath");
    expect(highlight?.className).toContain("text-amber-400");
  });

  it("should be case-insensitive", () => {
    const { container } = render(<HighlightText text="Enigma" searchTerm="enigma" />);
    const highlight = container.querySelector("span");
    expect(highlight?.textContent).toBe("Enigma");
  });

  it("should highlight multiple occurrences", () => {
    const { container } = render(<HighlightText text="Amn Ral Amn" searchTerm="Amn" />);
    const highlights = container.querySelectorAll("span");
    expect(highlights).toHaveLength(2);
    expect(highlights[0].textContent).toBe("Amn");
    expect(highlights[1].textContent).toBe("Amn");
  });

  it("should handle special regex characters safely", () => {
    // Ancient's Pledge contains a single quote which isn't a special regex char, 
    // but things like "." or "*" are.
    const { container } = render(<HighlightText text="Test (with parens)" searchTerm="(with parens)" />);
    const highlight = container.querySelector("span");
    expect(highlight?.textContent).toBe("(with parens)");
  });

  it("should return the original text if no match is found", () => {
    const { container } = render(<HighlightText text="Infinity" searchTerm="Zod" />);
    expect(container.textContent).toBe("Infinity");
    expect(container.querySelector("span")).toBeNull();
  });
});
