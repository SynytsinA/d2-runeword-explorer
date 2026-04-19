import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RunewordCard } from "./RunewordCard";
import { RUNEWORDS } from "@/constants/d2rData";

describe("RunewordCard", () => {
  const enigma = RUNEWORDS.find(r => r.id === "enigma")!;

  it("should render runeword name and required runes", () => {
    render(<RunewordCard runeword={enigma} ownedRuneIds={[]} status="UNAVAILABLE" />);
    
    expect(screen.getByText("Enigma")).toBeInTheDocument();
    expect(screen.getByText("Jah")).toBeInTheDocument();
    expect(screen.getByText("Ith")).toBeInTheDocument();
    expect(screen.getByText("Ber")).toBeInTheDocument();
  });

  it("should highlight missing runes in ALMOST_READY state", () => {
    // Missing Ber
    render(<RunewordCard runeword={enigma} ownedRuneIds={["jah", "ith"]} status="ALMOST_READY" />);
    
    expect(screen.getByText("1 Rune Needed")).toBeInTheDocument();
  });

  it("should expand to show all stats when clicking the 'View All' button", () => {
    render(<RunewordCard runeword={enigma} ownedRuneIds={[]} status="UNAVAILABLE" />);
    
    const viewAllBtn = screen.getByText(/View All/i);
    fireEvent.click(viewAllBtn);
    
    // Check if the "Show Less" button appeared
    expect(screen.getByText(/Show Less/i)).toBeInTheDocument();
  });
});
