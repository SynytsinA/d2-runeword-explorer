import { describe, it, expect } from "vitest";
import { RUNES, RUNEWORDS } from "./d2rData";

describe("D2R Data Structure", () => {
  it("should have 33 runes", () => {
    expect(RUNES).toHaveLength(33);
    expect(RUNES[0].name).toBe("El");
    expect(RUNES[32].name).toBe("Zod");
  });

  it("should have correctly structured runeword data", () => {
    const enigma = RUNEWORDS.find(rw => rw.id === "enigma");
    expect(enigma).toBeDefined();
    expect(enigma?.name).toBe("Enigma");
    expect(enigma?.runes).toHaveLength(3);
    expect(enigma?.runes[0].rune.name).toBe("Jah");
    expect(enigma?.runes[1].rune.name).toBe("Ith");
    expect(enigma?.runes[2].rune.name).toBe("Ber");
  });

  it("should not have any missing runes in runeword recipes", () => {
    RUNEWORDS.forEach(rw => {
      rw.runes.forEach(r => {
        const found = RUNES.find(rune => rune.id === r.rune.id);
        expect(found, `Rune ${r.rune.id} in runeword ${rw.id} should exist in RUNES`).toBeDefined();
      });
    });
  });
});
