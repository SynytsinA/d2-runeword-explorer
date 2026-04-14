export interface RunewordRune {
  rune: {
    id: string;
    name: string;
  };
  order: number;
}

export interface RunewordBaseItemType {
  baseItemType: {
    id: string;
    name: string;
  };
}

export interface Runeword {
  id: string;
  name: string;
  level: number;
  stats: string[];
  runes: RunewordRune[];
  baseItemTypes: RunewordBaseItemType[];
}
