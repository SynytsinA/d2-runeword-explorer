import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { DashboardClient } from "./DashboardClient";
import { RUNES, RUNEWORDS } from "@/constants/d2rData";

// Increase timeout for complex integration tests
vi.stubGlobal('localStorage', {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
});

describe("DashboardClient", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.localStorage.getItem = vi.fn().mockReturnValue(null);
  });

  it("should render the page title and initial state", () => {
    render(<DashboardClient runes={RUNES} runewords={RUNEWORDS} />);
    
    expect(screen.getByText("Runeword Explorer")).toBeInTheDocument();
    expect(screen.getByText(/NOT REACHABLE/i)).toBeInTheDocument();
  });

  it("should move a runeword to 'Craftable Now' when required runes are selected", async () => {
    // Ancient's Pledge needs Ral, Ort, Tal
    render(<DashboardClient runes={RUNES} runewords={RUNEWORDS} />);
    
    // Scope search to the inventory section to avoid matching runes inside RunewordCards
    const inventorySection = screen.getByText(/Select Runes in Your Inventory/i).closest('section')!;
    const { getByText } = within(inventorySection);
    
    const ralRune = getByText("Ral").parentElement!;
    const ortRune = getByText("Ort").parentElement!;
    const talRune = getByText("Tal").parentElement!;
    
    fireEvent.click(ralRune);
    fireEvent.click(ortRune);
    fireEvent.click(talRune);
    
    // Check if "Craftable Now" section appeared with the count
    expect(screen.getByText("Craftable Now")).toBeInTheDocument();
    expect(screen.getByText(/1 READY/i)).toBeInTheDocument();
  });

  it("should filter runewords when searching", () => {
    render(<DashboardClient runes={RUNES} runewords={RUNEWORDS} />);
    
    const searchInput = screen.getByPlaceholderText(/Search by runeword name/i);
    
    fireEvent.change(searchInput, { target: { value: "Enigma" } });
    
    // Should show results count
    expect(screen.getByText(/Found 1 results matching "Enigma"/i)).toBeInTheDocument();
    
    // Should show Enigma card
    expect(screen.getByText("Enigma")).toBeInTheDocument();
    
    // Should NOT show other runewords like "Ancient's Pledge"
    expect(screen.queryByText("Ancient's Pledge")).not.toBeInTheDocument();
  });

  it("should show and use the 'Clear Inventory' button", () => {
    render(<DashboardClient runes={RUNES} runewords={RUNEWORDS} />);
    
    // Scope search to the inventory section
    const inventorySection = screen.getByText(/Select Runes in Your Inventory/i).closest('section')!;
    const { getByText } = within(inventorySection);
    
    const elRune = getByText("El").parentElement!;
    fireEvent.click(elRune);
    
    const clearBtn = screen.getByText(/Clear Inventory/i);
    expect(clearBtn).toBeInTheDocument();
    
    fireEvent.click(clearBtn);
    
    // Clear button should disappear after clicking
    expect(screen.queryByText(/Clear Inventory/i)).not.toBeInTheDocument();
  });
});
