import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RunesGrid } from "./RunesGrid";
import { RUNES } from "@/constants/d2rData";

describe("RunesGrid", () => {
  it("should render all runes", () => {
    const toggleMock = vi.fn();
    render(<RunesGrid runes={RUNES} ownedRuneIds={[]} toggleRuneOwnership={toggleMock} />);
    
    expect(screen.getByText("El")).toBeInTheDocument();
    expect(screen.getByText("Zod")).toBeInTheDocument();
  });

  it("should call toggleRuneOwnership when a rune is clicked", () => {
    const toggleMock = vi.fn();
    render(<RunesGrid runes={RUNES} ownedRuneIds={[]} toggleRuneOwnership={toggleMock} />);
    
    const elRune = screen.getByText("El").parentElement!;
    fireEvent.click(elRune);
    
    expect(toggleMock).toHaveBeenCalledWith("el");
  });

  it("should show owned status visually", () => {
    const toggleMock = vi.fn();
    render(
      <RunesGrid runes={RUNES} ownedRuneIds={["el"]} toggleRuneOwnership={toggleMock} />
    );
    
    const elRune = screen.getByText("El").parentElement!;
    expect(elRune.className).toContain("bg-amber-500/15");
  });
});
