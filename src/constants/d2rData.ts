import { Rune, Runeword } from "@/types";

export const RUNES: Rune[] = [
  { id: "el", name: "El", requiredLevel: 11 },
  { id: "eld", name: "Eld", requiredLevel: 11 },
  { id: "tir", name: "Tir", requiredLevel: 13 },
  { id: "nef", name: "Nef", requiredLevel: 13 },
  { id: "eth", name: "Eth", requiredLevel: 15 },
  { id: "ith", name: "Ith", requiredLevel: 15 },
  { id: "tal", name: "Tal", requiredLevel: 17 },
  { id: "ral", name: "Ral", requiredLevel: 19 },
  { id: "ort", name: "Ort", requiredLevel: 21 },
  { id: "thul", name: "Thul", requiredLevel: 23 },
  { id: "amn", name: "Amn", requiredLevel: 25 },
  { id: "sol", name: "Sol", requiredLevel: 27 },
  { id: "shael", name: "Shael", requiredLevel: 29 },
  { id: "dol", name: "Dol", requiredLevel: 31 },
  { id: "hel", name: "Hel", requiredLevel: 1 },
  { id: "io", name: "Io", requiredLevel: 35 },
  { id: "lum", name: "Lum", requiredLevel: 37 },
  { id: "ko", name: "Ko", requiredLevel: 39 },
  { id: "fal", name: "Fal", requiredLevel: 41 },
  { id: "lem", name: "Lem", requiredLevel: 43 },
  { id: "pul", name: "Pul", requiredLevel: 45 },
  { id: "um", name: "Um", requiredLevel: 47 },
  { id: "mal", name: "Mal", requiredLevel: 49 },
  { id: "ist", name: "Ist", requiredLevel: 51 },
  { id: "gul", name: "Gul", requiredLevel: 53 },
  { id: "vex", name: "Vex", requiredLevel: 55 },
  { id: "ohm", name: "Ohm", requiredLevel: 57 },
  { id: "lo", name: "Lo", requiredLevel: 59 },
  { id: "sur", name: "Sur", requiredLevel: 61 },
  { id: "ber", name: "Ber", requiredLevel: 63 },
  { id: "jah", name: "Jah", requiredLevel: 65 },
  { id: "cham", name: "Cham", requiredLevel: 67 },
  { id: "zod", name: "Zod", requiredLevel: 69 },
];

const getRune = (id: string) => {
  const rune = RUNES.find(r => r.id === id);
  if (!rune) throw new Error(`Rune ${id} not found`);
  return { id: rune.id, name: rune.name };
};

export const RUNEWORDS: Runeword[] = [
  {
    id: "ancients_pledge",
    name: "Ancient's Pledge",
    level: 21,
    stats: ["+50% Enhanced Defense", "Cold Resist +43%", "Lightning Resist +48%", "Fire Resist +48%", "Poison Resist +48%", "10% Damage Taken Goes To Mana"],
    runes: [
      { rune: getRune("ral"), order: 1 },
      { rune: getRune("ort"), order: 2 },
      { rune: getRune("tal"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "shield", name: "3 Socket Shields" } }]
  },
  {
    id: "authority",
    name: "Authority",
    level: 29,
    stats: ["+2 To Warlock Skills", "+20% Faster Hit Recovery", "40-60% Enhanced Defense", "+15-25 To Life", "+10 To Strength", "Cold Resist +20%", "Lightning Resist +20%", "5% Chance To Cast Level 5 Psychic Ward When Struck"],
    runes: [
      { rune: getRune("hel"), order: 1 },
      { rune: getRune("shael"), order: 2 },
      { rune: getRune("ral"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "beast",
    name: "Beast",
    level: 63,
    stats: ["Level 9 Fanaticism Aura When Equipped", "+40% Increased Attack Speed", "+240-270% Enhanced Damage", "20% Chance of Crushing Blow", "25% Chance of Open Wounds", "+3 To Werebear", "+3 To Lycanthropy", "Prevent Monster Heal", "+25-40 To Strength", "+10 To Energy", "+2 To Mana After Each Kill", "Level 13 Summon Grizzly (5 Charges)"],
    runes: [
      { rune: getRune("ber"), order: 1 },
      { rune: getRune("tir"), order: 2 },
      { rune: getRune("um"), order: 3 },
      { rune: getRune("mal"), order: 4 },
      { rune: getRune("lum"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "axe_mace_hammer", name: "5 Socket Axes/Maces/Hammers" } }]
  },
  {
    id: "black",
    name: "Black",
    level: 35,
    stats: ["+15% Increased Attack Speed", "+120% Enhanced Damage", "+200 To Attack Rating", "Adds 3-14 Cold Damage (3 sec)", "40% Chance of Crushing Blow", "Knockback", "+10 To Vitality", "Magic Damage Reduced By 2", "Level 4 Corpse Explosion (12 Charges)"],
    runes: [
      { rune: getRune("thul"), order: 1 },
      { rune: getRune("io"), order: 2 },
      { rune: getRune("nef"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "club_mace_hammer", name: "3 Socket Clubs/Maces/Hammers" } }]
  },
  {
    id: "bone",
    name: "Bone",
    level: 47,
    stats: ["15% Chance To Cast Level 10 Bone Armor When Struck", "15% Chance To Cast Level 10 Bone Spear On Striking", "+2 To Necromancer Skill Levels", "+100-150 To Mana", "All Resistances +30", "Damage Reduced By 7"],
    runes: [
      { rune: getRune("sol"), order: 1 },
      { rune: getRune("um"), order: 2 },
      { rune: getRune("um"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "bramble",
    name: "Bramble",
    level: 61,
    stats: ["Level 15-21 Thorns Aura When Equipped", "+50% Faster Hit Recovery", "+25-50% To Poison Skill Damage", "+300 Defense", "Increase Maximum Mana 5%", "Regenerate Mana 15%", "+5% To Maximum Cold Resist", "Fire Resist +30%", "Poison Resist +100%", "+13 Life After Each Kill", "Level 13 Spirit of Barbs (33 Charges)"],
    runes: [
      { rune: getRune("ral"), order: 1 },
      { rune: getRune("ohm"), order: 2 },
      { rune: getRune("sur"), order: 3 },
      { rune: getRune("eth"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "4 Socket Body Armor" } }]
  },
  {
    id: "brand",
    name: "Brand",
    level: 65,
    stats: ["35% Chance To Cast Level 14 Amplify Damage When Struck", "100% Chance To Cast Level 15 Bone Spear On Striking", "Fires Explosive Arrows or Bolts (Level 15)", "+260-340% Enhanced Damage", "Ignore Target's Defense", "20% Bonus To Attack Rating", "+280-330% Damage To Demons", "20% Deadly Strike", "Prevent Monster Heal", "Knockback"],
    runes: [
      { rune: getRune("jah"), order: 1 },
      { rune: getRune("lo"), order: 2 },
      { rune: getRune("mal"), order: 3 },
      { rune: getRune("gul"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "missile_weapon", name: "4 Socket Missile Weapons" } }]
  },
  {
    id: "botd",
    name: "Breath of the Dying",
    level: 69,
    stats: ["50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy", "Indestructible", "+60% Increased Attack Speed", "+350-400% Enhanced Damage", "+200% Damage To Undead", "+50 To Attack Rating Against Undead", "-25% Target Defense", "7% Mana Stolen Per Hit", "12-15% Life Stolen Per Hit", "Prevent Monster Heal", "+30 To All Attributes", "+1 To Light Radius"],
    runes: [
      { rune: getRune("vex"), order: 1 },
      { rune: getRune("hel"), order: 2 },
      { rune: getRune("el"), order: 3 },
      { rune: getRune("eld"), order: 4 },
      { rune: getRune("zod"), order: 5 },
      { rune: getRune("eth"), order: 6 },
    ],
    baseItemTypes: [{ baseItemType: { id: "weapon", name: "6 Socket Weapons" } }]
  },
  {
    id: "bulwark",
    name: "Bulwark",
    level: 35,
    stats: ["+20% Faster Hit Recovery", "4-6% Life Stolen Per Hit", "+75-100% Enhanced Defense", "+10 To Vitality", "Increase Maximum Life 5%", "Replenish Life +30", "Damage Reduced By 7", "Physical Damage Reduced By 10-15%"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("io"), order: 2 },
      { rune: getRune("sol"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "cta",
    name: "Call to Arms",
    level: 57,
    stats: ["+1 To All Skills", "+40% Increased Attack Speed", "+250-290% Enhanced Damage", "Adds 5-30 Fire Damage", "7% Life Stolen Per Hit", "+2-6 To Battle Command", "+1-6 To Battle Orders", "+1-4 To Battle Cry", "Prevent Monster Heal", "Replenish Life +12", "30% Better Chance of Getting Magic Items"],
    runes: [
      { rune: getRune("amn"), order: 1 },
      { rune: getRune("ral"), order: 2 },
      { rune: getRune("mal"), order: 3 },
      { rune: getRune("ist"), order: 4 },
      { rune: getRune("ohm"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "weapon", name: "5 Socket Weapons" } }]
  },
  {
    id: "coh",
    name: "Chains of Honor",
    level: 63,
    stats: ["+2 To All Skills", "+200% Damage To Demons", "+100% Damage To Undead", "8% Life Stolen Per Hit", "+70% Enhanced Defense", "+20 To Strength", "Replenish Life +7", "All Resistances +65", "Damage Reduced By 8%", "25% Better Chance of Getting Magic Items"],
    runes: [
      { rune: getRune("dol"), order: 1 },
      { rune: getRune("um"), order: 2 },
      { rune: getRune("ber"), order: 3 },
      { rune: getRune("ist"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "4 Socket Body Armor" } }]
  },
  {
    id: "chaos",
    name: "Chaos",
    level: 57,
    stats: ["9% Chance To Cast Level 11 Frozen Orb On Striking", "11% Chance To Cast Level 9 Charged Bolt On Striking", "+35% Increased Attack Speed", "+290-340% Enhanced Damage", "Adds 216-471 Magic Damage", "25% Chance of Open Wounds", "+1 To Whirlwind", "+10 To Strength", "+15 Life After Each Kill"],
    runes: [
      { rune: getRune("fal"), order: 1 },
      { rune: getRune("ohm"), order: 2 },
      { rune: getRune("um"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "claw", name: "3 Socket Claws" } }]
  },
  {
    id: "coven",
    name: "Coven",
    level: 51,
    stats: ["+1 To All Skills", "+20% Faster Cast Rate", "30-50% Enhanced Defense", "+10 To Energy", "Increase Maximum Mana 10%", "Fire Resist +30%", "5% Chance To Cast Level 10 Sigil: Lethargy When Struck", "25% Better Chance of Getting Magic Items"],
    runes: [
      { rune: getRune("ist"), order: 1 },
      { rune: getRune("ral"), order: 2 },
      { rune: getRune("io"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "crescent_moon",
    name: "Crescent Moon",
    level: 47,
    stats: ["10% Chance To Cast Level 17 Chain Lightning On Striking", "7% Chance To Cast Level 13 Static Field On Striking", "+20% Increased Attack Speed", "+180-220% Enhanced Damage", "Ignore Target's Defense", "-35% To Enemy Lightning Resistance", "25% Chance of Open Wounds", "+2 To Mana After Each Kill", "Level 18 Summon Spirit Wolf (30 Charges)"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("um"), order: 2 },
      { rune: getRune("tir"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_axe_polearm", name: "3 Socket Swords/Axes/Polearms" } }]
  },
  {
    id: "cure",
    name: "Cure",
    level: 35,
    stats: ["Level 1 Cleansing Aura When Equipped", "+20% Faster Hit Recovery", "+75-100% Enhanced Defense", "+10 To Vitality", "Increase Maximum Life 5%", "Poison Resist +40-60%", "Poison Length Reduced By 50%"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("io"), order: 2 },
      { rune: getRune("tal"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "death",
    name: "Death",
    level: 55,
    stats: ["100% Chance To Cast Level 44 Chain Lightning When You Die", "25% Chance To Cast Level 18 Glacial Spike On Attack", "Indestructible", "+300-385% Enhanced Damage", "20% Bonus To Attack Rating", "+50 To Attack Rating", "Adds 1-50 Lightning Damage", "7% Mana Stolen Per Hit", "50% Chance of Crushing Blow", "+(0.5 Per Character Level) 0.5-49.5% Deadly Strike (Based On Character Level)", "Level 22 Blood Golem (15 Charges)"],
    runes: [
      { rune: getRune("hel"), order: 1 },
      { rune: getRune("el"), order: 2 },
      { rune: getRune("vex"), order: 3 },
      { rune: getRune("ort"), order: 4 },
      { rune: getRune("gul"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_axe", name: "5 Socket Swords/Axes" } }]
  },
  {
    id: "delirium",
    name: "Delirium",
    level: 51,
    stats: ["1% Chance To Cast Level 50 Delirium When Struck", "6% Chance To Cast Level 14 Mind Blast When Struck", "14% Chance To Cast Level 13 Terror When Struck", "11% Chance To Cast Level 18 Confuse On Striking", "+2 To All Skills", "+261 Defense", "+10 To Vitality", "50% Extra Gold From Monsters", "25% Better Chance of Getting Magic Items", "Level 17 Attract (60 Charges)"],
    runes: [
      { rune: getRune("lem"), order: 1 },
      { rune: getRune("ist"), order: 2 },
      { rune: getRune("io"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "destruction",
    name: "Destruction",
    level: 65,
    stats: ["23% Chance To Cast Level 12 Volcano On Striking", "5% Chance To Cast Level 23 Boulder On Striking", "100% Chance To Cast Level 45 Meteor When You Die", "15% Chance To Cast Level 22 Nova On Striking", "+350% Enhanced Damage", "Ignore Target's Defense", "Adds 100-180 Magic Damage", "Adds 17-62 Fire Damage", "7% Mana Stolen Per Hit", "20% Chance of Crushing Blow", "20% Deadly Strike", "Prevent Monster Heal", "+10 To Dexterity"],
    runes: [
      { rune: getRune("vex"), order: 1 },
      { rune: getRune("lo"), order: 2 },
      { rune: getRune("ber"), order: 3 },
      { rune: getRune("jah"), order: 4 },
      { rune: getRune("ko"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "polearm_sword", name: "5 Socket Polearms/Swords" } }]
  },
  {
    id: "doom",
    name: "Doom",
    level: 67,
    stats: ["5% Chance To Cast Level 18 Volcano On Striking", "Level 12 Holy Freeze Aura When Equipped", "+2 To All Skills", "+45% Increased Attack Speed", "+330-370% Enhanced Damage", "-(40-60)% To Enemy Cold Resistance", "20% Deadly Strike", "25% Chance of Open Wounds", "Prevent Monster Heal", "Freezes Target +3", "+10 To Vitality"],
    runes: [
      { rune: getRune("hel"), order: 1 },
      { rune: getRune("ohm"), order: 2 },
      { rune: getRune("um"), order: 3 },
      { rune: getRune("lo"), order: 4 },
      { rune: getRune("cham"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "axe_mace_polearm", name: "5 Socket Axes/Maces/Polearms" } }]
  },
  {
    id: "dragon",
    name: "Dragon",
    level: 61,
    stats: ["20% Chance to Cast Level 18 Venom When Struck", "12% Chance to Cast Level 15 Hydra on Striking", "Level 14 Holy Fire Aura When Equipped", "+360 Defense", "+230 Defense vs. Missile", "+3-5 To All Attributes", "+0.375-37.125 To Strength (Based on Character Level)", "Increase Maximum Mana 5%", "+5% To Maximum Lightning Resist", "Damage Reduced by 7"],
    runes: [
      { rune: getRune("sur"), order: 1 },
      { rune: getRune("lo"), order: 2 },
      { rune: getRune("sol"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor_shield", name: "3 Socket Body Armor/Shields" } }]
  },
  {
    id: "dream",
    name: "Dream",
    level: 65,
    stats: ["10% Chance To Cast Level 15 Confuse When Struck", "Level 15 Holy Shock Aura When Equipped", "+20-30% Faster Hit Recovery", "+30% Enhanced Defense", "+150-220 Defense", "+10 To Vitality", "Increase Maximum Life 5% (Helm) or +50 Life (Shield)", "+0.625-61.875 To Mana (Based On Character Level)", "All Resistances +5-20", "12-25% Better Chance of Getting Magic Items"],
    runes: [
      { rune: getRune("io"), order: 1 },
      { rune: getRune("jah"), order: 2 },
      { rune: getRune("pul"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm_shield", name: "3 Socket Helms/Shields" } }]
  },
  {
    id: "duress",
    name: "Duress",
    level: 47,
    stats: ["+40% Faster Hit Recovery", "+10-20% Enhanced Damage", "Adds 37-133 Cold Damage 2 sec. Duration", "15% Chance of Crushing Blow", "33% Chance of Open Wounds", "+150-200% Enhanced Defense", "-20% Slower Stamina Drain", "Cold Resist +45%", "Lightning Resist +15%", "Fire Resist +15%", "Poison Resist +15%"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("um"), order: 2 },
      { rune: getRune("thul"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "edge",
    name: "Edge",
    level: 25,
    stats: ["Level 15 Thorns Aura When Equipped", "+35% Increased Attack Speed", "+320-380% Damage To Demons", "+280% Damage To Undead", "+75 Poison Damage Over 5 Seconds", "7% Life Stolen Per Hit", "Prevent Monster Heal", "+5-10 To All Attributes", "+2 To Mana After Each Kill", "Reduces All Vendor Prices 15%"],
    runes: [
      { rune: getRune("tir"), order: 1 },
      { rune: getRune("tal"), order: 2 },
      { rune: getRune("amn"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "missile_weapon", name: "3 Socket Missile Weapons" } }]
  },
  {
    id: "enigma",
    name: "Enigma",
    level: 65,
    stats: ["+2 To All Skills", "+45% Faster Run/Walk", "+1 To Teleport", "+750-775 Defense", "+(0.75 Per Character Level) +0-74 To Strength (Based On Character Level)", "Increase Maximum Life 5%", "Damage Reduced By 8%", "+14 Life After Each Kill", "15% Damage Taken Goes To Mana", "+(1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)"],
    runes: [
      { rune: getRune("jah"), order: 1 },
      { rune: getRune("ith"), order: 2 },
      { rune: getRune("ber"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "enlightenment",
    name: "Enlightenment",
    level: 45,
    stats: ["5% Chance To Cast Level 15 Blaze When Struck", "5% Chance To Cast level 15 Fire Ball On Striking", "+2 To Sorceress Skill Levels", "+1 To Warmth", "+30% Enhanced Defense", "Fire Resist +30%", "Damage Reduced By 7"],
    runes: [
      { rune: getRune("pul"), order: 1 },
      { rune: getRune("ral"), order: 2 },
      { rune: getRune("sol"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "eternity",
    name: "Eternity",
    level: 63,
    stats: ["Indestructible", "+270-310% Enhanced Damage", "+9 To Minimum Damage", "7% Life Stolen Per Hit", "20% Chance of Crushing Blow", "Hit Causes Monster To Flee 33%", "Regenerate Mana 16%", "Replenish Life +16", "Cannot Be Frozen", "30% Better Chance of Getting Magic Items", "Level 8 Revive (88 Charges)"],
    runes: [
      { rune: getRune("amn"), order: 1 },
      { rune: getRune("ber"), order: 2 },
      { rune: getRune("ist"), order: 3 },
      { rune: getRune("sol"), order: 4 },
      { rune: getRune("sur"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "weapon", name: "5 Socket Weapons" } }]
  },
  {
    id: "exile",
    name: "Exile",
    level: 57,
    stats: ["15% Chance To Cast Level 5 Life Tap On Striking", "Level 13-16 Defiance Aura When Equipped", "+2 To Offensive Auras (Paladin Only)", "+30% Faster Block Rate", "Freezes Target", "+220-260% Enhanced Defense", "Replenish Life +7", "+5% To Maximum Cold Resist", "+5% To Maximum Fire Resist", "25% Better Chance of Getting Magic Items", "Repairs 1 Durability every 4 seconds"],
    runes: [
      { rune: getRune("vex"), order: 1 },
      { rune: getRune("ohm"), order: 2 },
      { rune: getRune("ist"), order: 3 },
      { rune: getRune("dol"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "shield", name: "4 Socket Paladin Shields" } }]
  },
  {
    id: "faith",
    name: "Faith",
    level: 65,
    stats: ["Level 12-15 Fanaticism Aura When Equipped", "+1-2 To All Skills", "+330% Enhanced Damage", "Ignore Target's Defense", "300% Bonus To Attack Rating", "+75% Damage To Undead", "+50 To Attack Rating Against Undead", "+120 Fire Damage", "All Resistances +15", "10% Reanimate As: Returned", "75% Extra Gold From Monsters"],
    runes: [
      { rune: getRune("ohm"), order: 1 },
      { rune: getRune("jah"), order: 2 },
      { rune: getRune("lem"), order: 3 },
      { rune: getRune("eld"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "missile_weapon", name: "4 Socket Missile Weapons" } }]
  },
  {
    id: "famine",
    name: "Famine",
    level: 65,
    stats: ["+30% Increased Attack Speed", "+320-370% Enhanced Damage", "Ignore Target's Defense", "Adds 180-200 Magic Damage", "Adds 50-200 Fire Damage", "Adds 51-250 Lightning Damage", "Adds 50-150 Cold Damage", "12% Life Stolen Per Hit", "Prevent Monster Heal"],
    runes: [
      { rune: getRune("fal"), order: 1 },
      { rune: getRune("ohm"), order: 2 },
      { rune: getRune("ort"), order: 3 },
      { rune: getRune("jah"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "axe_hammer", name: "4 Socket Axes/Hammers" } }]
  },
  {
    id: "flickering_flame",
    name: "Flickering Flame",
    level: 55,
    stats: ["Level 4-8 Resist Fire Aura When Equipped", "+3 To Fire Skills", "-10-15% To Enemy Fire Resistance", "+30% Enhanced Defense", "+30 Defense vs. Missile", "+50-75 To Mana", "Half Freeze Duration", "+5% To Maximum Fire Resist", "Poison Length Reduced By 50%"],
    runes: [
      { rune: getRune("nef"), order: 1 },
      { rune: getRune("pul"), order: 2 },
      { rune: getRune("vex"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "fortitude",
    name: "Fortitude",
    level: 59,
    stats: ["20% Chance To Cast Level 15 Chilling Armor when Struck", "+25% Faster Cast Rate", "+300% Enhanced Damage", "+200% Enhanced Defense", "+15 Defense", "+(1-1.5)-(99-148.5) To Life (Based on Character Level)", "Replenish Life +7", "+5% To Maximum Lightning Resist", "All Resistances +25-30", "Damage Reduced By 7", "12% Damage Taken Goes To Mana", "+1 To Light Radius"],
    runes: [
      { rune: getRune("el"), order: 1 },
      { rune: getRune("sol"), order: 2 },
      { rune: getRune("dol"), order: 3 },
      { rune: getRune("lo"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor_weapon", name: "4 Socket Body Armor/Weapons" } }]
  },
  {
    id: "fury",
    name: "Fury",
    level: 65,
    stats: ["+40% Increased Attack Speed", "+209% Enhanced Damage", "Ignore Target's Defense", "-25% Target Defense", "20% Bonus To Attack Rating", "6% Life Stolen Per Hit", "33% Deadly Strike", "66% Chance Of Open Wounds", "+5 To Frenzy (Barbarian Only)", "Prevent Monster Heal"],
    runes: [
      { rune: getRune("jah"), order: 1 },
      { rune: getRune("gul"), order: 2 },
      { rune: getRune("eth"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "melee_weapon", name: "3 Socket Melee Weapons" } }]
  },
  {
    id: "gloom",
    name: "Gloom",
    level: 47,
    stats: ["15% Chance To Cast Level 3 Dim Vision When Struck", "+10% Faster Hit Recovery", "+200-260% Enhanced Defense", "+10 To Strength", "All Resistances +45", "Half Freeze Duration", "5% Damage Taken Goes To Mana", "-3 To Light Radius"],
    runes: [
      { rune: getRune("fal"), order: 1 },
      { rune: getRune("um"), order: 2 },
      { rune: getRune("pul"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "grief",
    name: "Grief",
    level: 59,
    stats: ["35% Chance To Cast Level 15 Venom On Striking", "+30-40% Increased Attack Speed", "Damage +340-400", "Ignore Target's Defense", "-25% Target Defense", "+(1.875 Per Character Level) 1.875-185.625% Damage To Demons (Based On Character Level)", "Adds 5-30 Fire Damage", "-20-25% To Enemy Poison Resistance", "20% Deadly Strike", "Prevent Monster Heal", "+2 To Life After Each Kill", "+5-15 Lafter Each Kill"],
    runes: [
      { rune: getRune("eth"), order: 1 },
      { rune: getRune("tir"), order: 2 },
      { rune: getRune("lo"), order: 3 },
      { rune: getRune("mal"), order: 4 },
      { rune: getRune("ral"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_axe", name: "5 Socket Swords/Axes" } }]
  },
  {
    id: "ground",
    name: "Ground",
    level: 35,
    stats: ["+20% Faster Hit Recovery", "+75-100% Enhanced Defense", "+10 To Vitality", "Increase Maximum Life 5%", "Lightning Resist +40-60%", "+5% To Maximum Lightning Resist"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("io"), order: 2 },
      { rune: getRune("ort"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "hoj",
    name: "Hand of Justice",
    level: 67,
    stats: ["100% Chance To Cast Level 36 Blaze When You Level Up", "100% Chance To Cast Level 48 Meteor When You Die", "Level 16 Holy Fire Aura When Equipped", "+33% Increased Attack Speed", "+280-330% Enhanced Damage", "Ignore Target's Defense", "7% Life Stolen Per Hit", "-(20)% To Enemy Fire Resistance", "20% Deadly Strike", "Hit Blinds Target", "Freezes Target +3"],
    runes: [
      { rune: getRune("sur"), order: 1 },
      { rune: getRune("cham"), order: 2 },
      { rune: getRune("amn"), order: 3 },
      { rune: getRune("lo"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "weapon", name: "4 Socket Weapons" } }]
  },
  {
    id: "harmony",
    name: "Harmony",
    level: 39,
    stats: ["Level 10 Vigor Aura When Equipped", "+200-275% Enhanced Damage", "+9 To Minimum Damage", "+9 To Maximum Damage", "Adds 55-160 Lightning Damage", "Adds 55-160 Fire Damage", "Adds 55-160 Cold Damage", "+2-6 To Valkyrie", "+10 To Dexterity", "Regenerate Mana 20%", "+2 To Mana After Each Kill", "+2 To Light Radius", "Level 20 Revive (25 Charges)"],
    runes: [
      { rune: getRune("tir"), order: 1 },
      { rune: getRune("ith"), order: 2 },
      { rune: getRune("sol"), order: 3 },
      { rune: getRune("ko"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "missile_weapon", name: "4 Socket Missile Weapons" } }]
  },
  {
    id: "hoto",
    name: "Heart of the Oak",
    level: 55,
    stats: ["+3 To All Skills", "+40% Faster Cast Rate", "+75% Damage To Demons", "+100 To Attack Rating Against Demons", "Adds 3-14 Cold Damage, 3 sec. Duration", "7% Mana Stolen Per Hit", "+10 To Dexterity", "Replenish Life +20", "Increase Maximum Mana 15%", "All Resistances +30-40", "Level 4 Oak Sage (25 Charges)", "Level 14 Raven (60 Charges)"],
    runes: [
      { rune: getRune("ko"), order: 1 },
      { rune: getRune("vex"), order: 2 },
      { rune: getRune("pul"), order: 3 },
      { rune: getRune("thul"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "mace_staff", name: "4 Socket Maces/Staves" } }]
  },
  {
    id: "hearth",
    name: "Hearth",
    level: 35,
    stats: ["+20% Faster Hit Recovery", "+75-100% Enhanced Defense", "+10 To Vitality", "Increase Maximum Life 5%", "Cold Resist +40-60%", "+5% To Maximum Cold Resist", "Cannot Be Frozen"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("io"), order: 2 },
      { rune: getRune("thul"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "holy_thunder",
    name: "Holy Thunder",
    level: 21,
    stats: ["+60% Enhanced Damage", "-25% Target Defense", "Adds 5-30 Fire Damage", "Adds 21-110 Lightning Damage", "+75 Poison Damage over 5 seconds", "+3 To Holy Shock (Paladin Only)", "+5% To Maximum Lightning Resist", "Lightning Resist +60%", "Level 7 Chain Lightning (60 Charges)"],
    runes: [
      { rune: getRune("eth"), order: 1 },
      { rune: getRune("ral"), order: 2 },
      { rune: getRune("ort"), order: 3 },
      { rune: getRune("tal"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "scepter", name: "4 Socket Scepters" } }]
  },
  {
    id: "honor",
    name: "Honor",
    level: 27,
    stats: ["+160% Enhanced Damage", "+9 To Minimum Damage", "+9 To Maximum Damage", "25% Deadly Strike", "+250 To Attack Rating", "+1 To All Skills", "7% Life Stolen Per Hit", "Replenish Life +10", "+10 To Strength", "+1 To Light Radius"],
    runes: [
      { rune: getRune("amn"), order: 1 },
      { rune: getRune("el"), order: 2 },
      { rune: getRune("ith"), order: 3 },
      { rune: getRune("tir"), order: 4 },
      { rune: getRune("sol"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "melee_weapon", name: "5 Socket Melee Weapons" } }]
  },
  {
    id: "hustle_weapon",
    name: "Hustle (Weapon)",
    level: 39,
    stats: ["5% Chance To Cast Level 1 Burst of Speed On Striking", "+30% Increased Attack Speed", "+100-120% Enhanced Damage", "+40% Damage To Undead", "+60 To Attack Rating Against Undead", "+10 To Dexterity"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("ko"), order: 2 },
      { rune: getRune("eld"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "weapon", name: "3 Socket Weapons" } }]
  },
  {
    id: "hustle_armor",
    name: "Hustle (Armor)",
    level: 39,
    stats: ["+65% Faster Run/Walk", "+40% Increased Attack Speed", "+20% Faster Hit Recovery", "+6 To Evade", "+10 To Dexterity", "50% Slower Stamina Drain", "+All Resistances +10"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("ko"), order: 2 },
      { rune: getRune("eld"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "ice",
    name: "Ice",
    level: 65,
    stats: ["100% Chance To Cast Level 40 Blizzard When You Level Up", "25% Chance To Cast Level 22 Frost Nova On Striking", "Level 18 Holy Freeze Aura When Equipped", "+20% Increased Attack Speed", "+140-210% Enhanced Damage", "Ignore Target's Defense", "+25-30% To Cold Skill Damage", "-(20)% To Enemy Cold Resistance", "7% Life Stolen Per Hit", "20% Deadly Strike", "3.125-309.375 Extra Gold From Monsters (Based On Character Level)"],
    runes: [
      { rune: getRune("amn"), order: 1 },
      { rune: getRune("shael"), order: 2 },
      { rune: getRune("jah"), order: 3 },
      { rune: getRune("lo"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "missile_weapon", name: "4 Socket Missile Weapons" } }]
  },
  {
    id: "infinity",
    name: "Infinity",
    level: 63,
    stats: ["50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy", "Level 12 Conviction Aura When Equipped", "+35% Faster Run/Walk", "+255-325% Enhanced Damage", "-(45-55)% To Enemy Lightning Resistance", "40% Chance of Crushing Blow", "Prevent Monster Heal", "0.5-49.5 To Vitality (Based on Character Level)", "30% Better Chance of Getting Magic Items", "Level 21 Cyclone Armor (30 Charges)"],
    runes: [
      { rune: getRune("ber"), order: 1 },
      { rune: getRune("mal"), order: 2 },
      { rune: getRune("ber"), order: 3 },
      { rune: getRune("ist"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "polearm_spear", name: "4 Socket Polearms/Spears" } }]
  },
  {
    id: "insight",
    name: "Insight",
    level: 27,
    stats: ["Level 12-17 Meditation Aura When Equipped", "+35% Faster Cast Rate", "+200-260% Enhanced Damage", "+9 To Minimum Damage", "180-250% Bonus To Attack Rating", "Adds 5-30 Fire Damage", "+75 Poison Damage Over 5 Seconds", "+1-6 To Critical Strike", "+5 To All Attributes", "+2 To Life After Each Kill", "23% Better Chance of Getting Magic Items"],
    runes: [
      { rune: getRune("ral"), order: 1 },
      { rune: getRune("tir"), order: 2 },
      { rune: getRune("tal"), order: 3 },
      { rune: getRune("sol"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "polearm_staff_bow", name: "4 Socket Polearms/Staves/Missile Weapons" } }]
  },
  {
    id: "kings_grace",
    name: "King's Grace",
    level: 25,
    stats: ["+100% Enhanced Damage", "+100% Damage To Demons", "+100% Damage To Undead", "+50 To Attack Rating", "+100 To Attack Rating Against Demons", "+100 To Attack Rating Against Undead", "Adds 5-30 Fire Damage", "Adds 3-14 Cold Damage (3 sec)", "7% Life Stolen Per Hit"],
    runes: [
      { rune: getRune("amn"), order: 1 },
      { rune: getRune("ral"), order: 2 },
      { rune: getRune("thul"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_scepter", name: "3 Socket Swords/Scepters" } }]
  },
  {
    id: "kingslayer",
    name: "Kingslayer",
    level: 53,
    stats: ["+30% Increased Attack Speed", "+230-270% Enhanced Damage", "-25% Target Defense", "20% Bonus To Attack Rating", "33% Chance of Crushing Blow", "50% Chance of Open Wounds", "+1 To Vengeance", "Prevent Monster Heal", "+10 To Strength", "40% Extra Gold From Monsters"],
    runes: [
      { rune: getRune("mal"), order: 1 },
      { rune: getRune("um"), order: 2 },
      { rune: getRune("gul"), order: 3 },
      { rune: getRune("fal"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_axe", name: "4 Socket Swords/Axes" } }]
  },
  {
    id: "last_wish",
    name: "Last Wish",
    level: 65,
    stats: ["6% Chance To Cast Level 11 Fade When Struck", "10% Chance To Cast Level 18 Life Tap On Striking", "20% Chance To Cast Level 20 Charged Bolt On Striking", "Level 17 Might Aura When Equipped", "+330-375% Enhanced Damage", "Ignore Target's Defense", "60-70% Chance of Crushing Blow", "Prevent Monster Heal", "Hit Blinds Target", "+(0.5 Per Character Level) 0.5-49.5% Better Chance of Getting Magic Items (Based On Character Level)"],
    runes: [
      { rune: getRune("jah"), order: 1 },
      { rune: getRune("mal"), order: 2 },
      { rune: getRune("jah"), order: 3 },
      { rune: getRune("sur"), order: 4 },
      { rune: getRune("jah"), order: 5 },
      { rune: getRune("ber"), order: 6 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_hammer_axe", name: "6 Socket Swords/Hammers/Axes" } }]
  },
  {
    id: "lawbringer",
    name: "Lawbringer",
    level: 43,
    stats: ["20% Chance To Cast Level 15 Decrepify On Striking", "Level 16-18 Sanctuary Aura When Equipped", "-50% Target Defense", "Adds 150-210 Fire Damage", "Adds 130-180 Cold Damage", "7% Life Stolen Per Hit", "Slain Monsters Rest In Peace", "+200-250 Defense Vs. Missile", "+10 To Dexterity", "75% Extra Gold From Monsters"],
    runes: [
      { rune: getRune("amn"), order: 1 },
      { rune: getRune("lem"), order: 2 },
      { rune: getRune("ko"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_hammer_scepter", name: "3 Socket Swords/Hammers/Scepters" } }]
  },
  {
    id: "leaf",
    name: "Leaf",
    level: 19,
    stats: ["Adds 5-30 Fire Damage", "+3 To Fire Skills", "+3 To Fire Bolt (Sorceress Only)", "+3 To Inferno (Sorceress Only)", "+3 To Warmth (Sorceress Only)", "+2 To Mana After Each Kill", "+(2 Per Character Level) +2-198 To Defense (Based On Character Level)", "Cold Resist +33%"],
    runes: [
      { rune: getRune("tir"), order: 1 },
      { rune: getRune("ral"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "staff", name: "2 Socket Staves" } }]
  },
  {
    id: "lionheart",
    name: "Lionheart",
    level: 41,
    stats: ["+20% Enhanced Damage", "+25 To Strength", "+15 To Dexterity", "+20 To Vitality", "+10 To Energy", "+50 To Life", "All Resistances +30", "Requirements -15%"],
    runes: [
      { rune: getRune("hel"), order: 1 },
      { rune: getRune("lum"), order: 2 },
      { rune: getRune("fal"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "lore",
    name: "Lore",
    level: 27,
    stats: ["+1 To All Skill Levels", "+10 To Energy", "+2 To Light Radius", "Lightning Resist +30%", "Damage Reduced By 7", "+2 To Mana After Each Kill"],
    runes: [
      { rune: getRune("ort"), order: 1 },
      { rune: getRune("sol"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "2 Socket Helms" } }]
  },
  {
    id: "malice",
    name: "Malice",
    level: 15,
    stats: ["+33% Enhanced Damage", "+9 To Maximum Damage", "100% Chance Of Open Wounds", "-25% Target Defense", "-100 To Monster Defense Per Hit", "Prevent Monster Heal", "+50 To Attack Rating", "Drain Life -5"],
    runes: [
      { rune: getRune("ith"), order: 1 },
      { rune: getRune("el"), order: 2 },
      { rune: getRune("eth"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "melee_weapon", name: "3 Socket Melee Weapons" } }]
  },
  {
    id: "melody",
    name: "Melody",
    level: 39,
    stats: ["+50% Enhanced Damage", "+300% Damage To Undead", "+3 To Bow and Crossbow Skills (Amazon Only)", "+3 To Dodge (Amazon Only)", "+3 To Slow Missiles (Amazon Only)", "+3 To Strafe (Amazon Only)", "+10 To Dexterity", "Knockback"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("ko"), order: 2 },
      { rune: getRune("nef"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "missile_weapon", name: "3 Socket Missile Weapons" } }]
  },
  {
    id: "memory",
    name: "Memory",
    level: 37,
    stats: ["+3 To Sorceress Skill Levels", "+33% Faster Cast Rate", "Increase Maximum Mana 20%", "+3 To Energy Shield (Sorceress Only)", "+2 To Static Field (Sorceress Only)", "+10 To Energy", "+10 To Vitality", "+9 To Minimum Damage", "-25% Target Defense", "Magic Damage Reduced By 7", "+50% Enhanced Defense"],
    runes: [
      { rune: getRune("lum"), order: 1 },
      { rune: getRune("io"), order: 2 },
      { rune: getRune("sol"), order: 3 },
      { rune: getRune("eth"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "staff", name: "4 Socket Staves" } }]
  },
  {
    id: "metamorphosis",
    name: "Metamorphosis",
    level: 67,
    stats: ["Werewolf strikes grant Mark of the Wolf for 180 seconds", "Mark of the Wolf: +30% Bonus to Attack Rating, Increase Maximum Life 40%", "Werebear strikes grant Mark of the Bear for 180 seconds", "Mark of the Bear: +25% Attack Speed, +25% Crushing Blow, Physical Damage Reduced by 20%", "+2 To Shape Shifting Skills (Druid Only)", "+50-80% Enhanced Defense", "+10 To Strength", "+10 To Vitality", "All Resistances +10", "Cannot Be Frozen"],
    runes: [
      { rune: getRune("io"), order: 1 },
      { rune: getRune("cham"), order: 2 },
      { rune: getRune("fal"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "pelt", name: "3 Socket Druid Pelts" } }]
  },
  {
    id: "mist",
    name: "Mist",
    level: 67,
    stats: ["Level 8-12 Concentration Aura When Equipped", "+3 To All Skills", "+20% Increased Attack Speed", "+100% Piercing Attack", "+325-375% Enhanced Damage", "+9 To Maximum Damage", "20% Bonus To Attack Rating", "Adds 3-14 Cold Damage (3 sec)", "All Resistances +40", "Freezes Target +3", "+24 To Vitality"],
    runes: [
      { rune: getRune("cham"), order: 1 },
      { rune: getRune("shael"), order: 2 },
      { rune: getRune("gul"), order: 3 },
      { rune: getRune("thul"), order: 4 },
      { rune: getRune("ith"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "missile_weapon", name: "5 Socket Missile Weapons" } }]
  },
  {
    id: "mosaic",
    name: "Mosaic",
    level: 53,
    stats: ["+50% Chance For Martial Arts Finishing Moves To Not Consume Charges", "When A Finishing Move Is Executed This Way, It Now Refreshes The Expiration Timer Of The Skills' Charges", "+2 To Martial Arts (Assassin Only)", "+20% Increased Attack Speed", "+200-250% Enhanced Damage", "+20% Bonus To Attack Rating", "Adds 3-14 Cold Damage", "Prevent Monster Heal"],
    runes: [
      { rune: getRune("mal"), order: 1 },
      { rune: getRune("gul"), order: 2 },
      { rune: getRune("amn"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "claw", name: "3 Socket Claws" } }]
  },
  {
    id: "myth",
    name: "Myth",
    level: 25,
    stats: ["3% Chance To Cast Level 1 Howl When Struck", "10% Chance To Cast Level 1 Taunt On Striking", "+2 To Barbarian Skill Levels", "+30 Defense Vs. Missile", "Replenish Life +10", "Attacker Takes Damage of 14", "Requirements -15%"],
    runes: [
      { rune: getRune("hel"), order: 1 },
      { rune: getRune("amn"), order: 2 },
      { rune: getRune("nef"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "nadir",
    name: "Nadir",
    level: 13,
    stats: ["+50% Enhanced Defense", "+10 Defense", "+30 Defense vs. Missile", "Level 13 Cloak of Shadows (9 Charges)", "+2 To Mana After Each Kill", "-33% Extra Gold From Monsters", "-3 To Light Radius"],
    runes: [
      { rune: getRune("nef"), order: 1 },
      { rune: getRune("tir"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "2 Socket Helms" } }]
  },
  {
    id: "oath",
    name: "Oath",
    level: 49,
    stats: ["30% Chance To Cast Level 20 Bone Spirit On Striking", "Indestructible", "+50% Increased Attack Speed", "+210-340% Enhanced Damage", "+75% Damage To Undead", "+100 To Attack Rating Against Undead", "Prevent Monster Heal", "+10 To Energy", "Magic Absorb +10-15", "Level 16 Heart of Wolverine (20 Charges)", "Level 17 Iron Golem (14 Charges)"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("pul"), order: 2 },
      { rune: getRune("mal"), order: 3 },
      { rune: getRune("lum"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_axe_mace", name: "4 Socket Swords/Axes/Maces" } }]
  },
  {
    id: "obedience",
    name: "Obedience",
    level: 41,
    stats: ["30% Chance To Cast Level 21 Enchant When You Kill An Enemy", "+40% Faster Hit Recovery", "+370% Enhanced Damage", "-25% Target Defense", "Adds 3-14 Cold Damage (3 sec)", "-25% To Enemy Fire Resistance", "40% Chance of Crushing Blow", "+200-300 Defense", "+10 To Strength", "+10 To Dexterity", "All Resistances +20-30", "Requirements -20%"],
    runes: [
      { rune: getRune("hel"), order: 1 },
      { rune: getRune("ko"), order: 2 },
      { rune: getRune("thul"), order: 3 },
      { rune: getRune("eth"), order: 4 },
      { rune: getRune("fal"), order: 5 },
    ],
    baseItemTypes: [{ baseItemType: { id: "polearm_spear", name: "5 Socket Polearms/Spears" } }]
  },
  {
    id: "obsession",
    name: "Obsession",
    level: 69,
    stats: ["Indestructible", "24% Chance To Cast Level 10 Weaken When Struck", "+4 To All Skills", "+65% Faster Cast Rate", "+60% Faster Hit Recovery", "Push Back", "+10 To Vitality", "+10 To Energy", "Increase Maximum Life 15-25%", "Regenerate Mana 15-30%", "All Resistances +60-70", "75% Extra Gold From Monsters", "30% Better Chance of Getting Magic Items"],
    runes: [
      { rune: getRune("zod"), order: 1 },
      { rune: getRune("ist"), order: 2 },
      { rune: getRune("lem"), order: 3 },
      { rune: getRune("lum"), order: 4 },
      { rune: getRune("io"), order: 5 },
      { rune: getRune("nef"), order: 6 },
    ],
    baseItemTypes: [{ baseItemType: { id: "staff", name: "6 Socket Staves" } }]
  },
  {
    id: "passion",
    name: "Passion",
    level: 43,
    stats: ["+25% Increased Attack Speed", "+160-210% Enhanced Damage", "50-80% Bonus To Attack Rating", "+75% Damage To Undead", "+50 To Attack Rating Against Undead", "Adds 1-50 Lightning Damage", "+1 To Zeal", "+1 To Berserk", "Hit Causes Monster To Flee 25%", "Hit Blinds Target +10", "75% Extra Gold From Monsters", "Level 3 Heart of Wolverine (12 Charges)"],
    runes: [
      { rune: getRune("dol"), order: 1 },
      { rune: getRune("ort"), order: 2 },
      { rune: getRune("eld"), order: 3 },
      { rune: getRune("lem"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "weapon", name: "4 Socket Weapons" } }]
  },
  {
    id: "pattern",
    name: "Pattern",
    level: 23,
    stats: ["+30% Faster Block Rate", "+40-80% Enhanced Damage", "10% Bonus To Attack Rating", "Adds 17-62 Fire Damage", "Adds 1-50 Lightning Damage", "Adds 3-14 Cold Damage", "+75 Poison Damage over 5 seconds", "+6 To Strength", "+6 To Dexterity", "All Resistances +15"],
    runes: [
      { rune: getRune("tal"), order: 1 },
      { rune: getRune("ort"), order: 2 },
      { rune: getRune("thul"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "claw", name: "3 Socket Claws" } }]
  },
  {
    id: "peace",
    name: "Peace",
    level: 29,
    stats: ["4% Chance To Cast Level 5 Slow Missiles When Struck", "2% Chance To Cast level 15 Valkyrie On Striking", "+2 To Amazon Skill Levels", "+20% Faster Hit Recovery", "+2 To Critical Strike", "Cold Resist +30%", "Attacker Takes Damage of 14"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("thul"), order: 2 },
      { rune: getRune("amn"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "phoenix",
    name: "Phoenix",
    level: 65,
    stats: ["100% Chance To Cast Level 40 Blaze When You Level Up", "40% Chance To Cast Level 22 Firestorm On Striking", "Level 10-15 Redemption Aura When Equipped", "+350-400% Enhanced Damage", "-28% To Enemy Fire Resistance", "+350-400 Defense Vs. Missile", "+15-21 Fire Absorb", "+5% To Maximum Lightning Resist (Armor)", "+10% To Maximum Fire Resist (Armor)", "+50 Life (Shield)", "+5% To Maximum Lightning Resist (Shield)", "+10% To Maximum Fire Resist (Shield)"],
    runes: [
      { rune: getRune("vex"), order: 1 },
      { rune: getRune("vex"), order: 2 },
      { rune: getRune("lo"), order: 3 },
      { rune: getRune("jah"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "weapon_shield", name: "4 Socket Weapons/Shields" } }]
  },
  {
    id: "plague",
    name: "Plague",
    level: 67,
    stats: ["20% Chance To Cast Level 12 Lower Resist When Struck", "25% Chance To Cast Level 15 Poison Nova On Striking", "Level 13-17 Cleansing Aura When Equipped", "+1-2 To All Skills", "+20% Increased Attack Speed", "+220-320% Enhanced Damage", "-(23)% To Enemy Poison Resistance", "0.375% Deadly Strike (Based on Character Level)", "25% Chance of Open Wounds", "Freezes Target +3"],
    runes: [
      { rune: getRune("cham"), order: 1 },
      { rune: getRune("shael"), order: 2 },
      { rune: getRune("um"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_claw_dagger", name: "3 Socket Swords/Claws/Daggers" } }]
  },
  {
    id: "pride",
    name: "Pride",
    level: 67,
    stats: ["25% Chance To Cast Level 17 Fire Wall When Struck", "Level 16-20 Concentration Aura When Equipped", "260-300% Bonus To Attack Rating", "+(1 Per Character Level) 1-99% Damage To Demons (Based On Character Level)", "Adds 50-280 Lightning Damage", "20% Deadly Strike", "Hit Blinds Target", "Freezes Target +3", "+10 To Vitality", "Replenish Life +8", "1.875-185.625% Extra Gold From Monsters (Based On Character Level)"],
    runes: [
      { rune: getRune("cham"), order: 1 },
      { rune: getRune("sur"), order: 2 },
      { rune: getRune("io"), order: 3 },
      { rune: getRune("lo"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "polearm_spear", name: "4 Socket Polearms/Spears" } }]
  },
  {
    id: "principle",
    name: "Principle",
    level: 53,
    stats: ["100% Chance To Cast Level 5 Holy Bolt On Striking", "+2 To Paladin Skill Levels", "+50% Damage to Undead", "+100-150 To Life", "15% Slower Stamina Drain", "+5% To Maximum Poison Resist", "Fire Resist +30%"],
    runes: [
      { rune: getRune("ral"), order: 1 },
      { rune: getRune("gul"), order: 2 },
      { rune: getRune("eld"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "prudence",
    name: "Prudence",
    level: 49,
    stats: ["+25% Faster Hit Recovery", "+140-170% Enhanced Defense", "All Resistances +25-35", "Damage Reduced By 3", "Magic Damage Reduced By 17", "+2 To Light Radius", "Repairs 1 Durability every 4 seconds"],
    runes: [
      { rune: getRune("mal"), order: 1 },
      { rune: getRune("tir"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "2 Socket Body Armor" } }]
  },
  {
    id: "radiance",
    name: "Radiance",
    level: 27,
    stats: ["+75% Enhanced Defense", "+30 Defense Vs. Missile", "+10 To Energy", "+10 To Vitality", "+15 To Dexterity", "Damage Reduced By 7", "Magic Damage Reduced By 3", "15% Damage Taken Goes To Mana", "+3 To Light Radius"],
    runes: [
      { rune: getRune("nef"), order: 1 },
      { rune: getRune("sol"), order: 2 },
      { rune: getRune("ith"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "rain",
    name: "Rain",
    level: 49,
    stats: ["5% Chance To Cast Level 15 Cyclone Armor When Struck", "5% Chance To Cast Level 15 Twister On Striking", "+2 To Druid Skill Levels", "+100-150 To Mana", "Lightning Resist +30%", "Magic Damage Reduced By 7", "15% Damage Taken Goes To Mana"],
    runes: [
      { rune: getRune("ort"), order: 1 },
      { rune: getRune("mal"), order: 2 },
      { rune: getRune("ith"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "rhyme",
    name: "Rhyme",
    level: 29,
    stats: ["40% Faster Block Rate", "20% Increased Chance of Blocking", "Regenerate Mana 15%", "All Resistances +25", "Cannot Be Frozen", "50% Extra Gold From Monsters", "25% Better Chance of Getting Magic Items"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("eth"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "shield", name: "2 Socket Shields" } }]
  },
  {
    id: "rift",
    name: "Rift",
    level: 53,
    stats: ["2% Chance To Cast Level 15 Iron Maiden When Struck", "16% Chance To Cast Level 21 Frozen Orb On Striking", "+160-250% Bonus To Attack Rating", "Adds 60-180 Magic Damage", "Adds 1-50 Lightning Damage", "+5-10 To All Attributes", "+38% Damage Taken Goes To Mana", "75% Extra Gold From Monsters", "Level 15 Iron Golem (40 Charges)"],
    runes: [
      { rune: getRune("hel"), order: 1 },
      { rune: getRune("ko"), order: 2 },
      { rune: getRune("lem"), order: 3 },
      { rune: getRune("gul"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "polearm_scepter", name: "4 Socket Polearms/Scepters" } }]
  },
  {
    id: "ritual",
    name: "Ritual",
    level: 57,
    stats: ["+40% Increased Attack Speed", "+250-320% Enhanced Damage", "+260% Bonus To Attack Rating", "+250% Damage To Demons", "+250 To Attack Rating Against Demons", "Adds 10-60 Magic Damage", "10% Life Stolen Per Hit", "Slain Monsters Rest In Peace", "+2 To Eldritch Skills (Warlock Only)"],
    runes: [
      { rune: getRune("amn"), order: 1 },
      { rune: getRune("shael"), order: 2 },
      { rune: getRune("ohm"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "dagger", name: "3 Socket Daggers" } }]
  },
  {
    id: "sanctuary",
    name: "Sanctuary",
    level: 49,
    stats: ["+20% Faster Hit Recovery", "+20% Faster Block Rate", "20% Increased Chance of Blocking", "+130-160% Enhanced Defense", "+250 Defense Vs. Missile", "+20 To Dexterity", "All Resistances +50-70", "Magic Damage Reduced By 7"],
    runes: [
      { rune: getRune("ko"), order: 1 },
      { rune: getRune("ko"), order: 2 },
      { rune: getRune("mal"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "shield", name: "3 Socket Shields" } }]
  },
  {
    id: "silence",
    name: "Silence",
    level: 55,
    stats: ["+200% Enhanced Damage", "+75% Damage To Undead", "+50 To Attack Rating Against Undead", "20% Increased Attack Speed", "+2 To All Skills", "All Resistances +75", "20% Faster Hit Recovery", "11% Mana Stolen Per Hit", "Hit Causes Monster To Flee 25%", "Hit Blinds Target +33", "Requirements -20%"],
    runes: [
      { rune: getRune("dol"), order: 1 },
      { rune: getRune("eld"), order: 2 },
      { rune: getRune("hel"), order: 3 },
      { rune: getRune("ist"), order: 4 },
      { rune: getRune("tir"), order: 5 },
      { rune: getRune("vex"), order: 6 },
    ],
    baseItemTypes: [{ baseItemType: { id: "weapon", name: "6 Socket Weapons" } }]
  },
  {
    id: "smoke",
    name: "Smoke",
    level: 37,
    stats: ["+20% Faster Hit Recovery", "+280% Enhanced Defense", "+10 To Vitality", "All Resistances +50", "-1 To Light Radius", "Level 6 Weaken (18 Charges)"],
    runes: [
      { rune: getRune("nef"), order: 1 },
      { rune: getRune("lum"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "2 Socket Body Armor" } }]
  },
  {
    id: "spirit",
    name: "Spirit",
    level: 25,
    stats: ["+2 To All Skills", "+25-35% Faster Cast Rate", "+55% Faster Hit Recovery", "+250 Defense Vs. Missile", "+22 To Vitality", "+89-112 To Mana", "+3-8 Magic Absorb"],
    runes: [
      { rune: getRune("tal"), order: 1 },
      { rune: getRune("thul"), order: 2 },
      { rune: getRune("ort"), order: 3 },
      { rune: getRune("amn"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_shield", name: "4 Socket Swords/Shields" } }]
  },
  {
    id: "splendor",
    name: "Splendor",
    level: 37,
    stats: ["+1 To All Skills", "+10% Faster Cast Rate", "+20% Faster Block Rate", "+60-100% Enhanced Defense", "+10 To Energy", "Regenerate Mana 15%", "50% Extra Gold From Monsters", "20% Better Chance of Getting Magic Items", "+3 To Light Radius"],
    runes: [
      { rune: getRune("eth"), order: 1 },
      { rune: getRune("lum"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "shield", name: "2 Socket Shields" } }]
  },
  {
    id: "stealth",
    name: "Stealth",
    level: 17,
    stats: ["Magic Damage Reduced By 3", "+6 To Dexterity", "+15 To Maximum Stamina", "Poison Resist +30%", "Regenerate Mana 15%", "25% Faster Run/Walk", "25% Faster Cast Rate", "25% Faster Hit Recovery"],
    runes: [
      { rune: getRune("tal"), order: 1 },
      { rune: getRune("eth"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "2 Socket Body Armor" } }]
  },
  {
    id: "steel",
    name: "Steel",
    level: 13,
    stats: ["20% Enhanced Damage", "+3 To Minimum Damage", "+3 To Maximum Damage", "+50 To Attack Rating", "50% Chance of Open Wounds", "25% Increased Attack Speed", "+2 To Mana After Each Kill", "+1 To Light Radius"],
    runes: [
      { rune: getRune("tir"), order: 1 },
      { rune: getRune("el"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_axe_mace", name: "2 Socket Swords/Axes/Maces" } }]
  },
  {
    id: "stone",
    name: "Stone",
    level: 47,
    stats: ["+60% Faster Hit Recovery", "+250-290% Enhanced Defense", "+300 Defense Vs. Missile", "+16 To Strength", "+16 To Vitality", "+10 To Energy", "All Resistances +15", "Level 16 Molten Boulder (80 Charges)", "Level 16 Clay Golem (16 Charges)"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("um"), order: 2 },
      { rune: getRune("pul"), order: 3 },
      { rune: getRune("lum"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "4 Socket Body Armor" } }]
  },
  {
    id: "strength",
    name: "Strength",
    level: 25,
    stats: ["+35% Enhanced Damage", "25% Chance of Crushing Blow", "7% Life Stolen Per Hit", "+2 To Mana After Each Kill", "+20 To Strength", "+10 To Vitality"],
    runes: [
      { rune: getRune("amn"), order: 1 },
      { rune: getRune("tir"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "melee_weapon", name: "2 Socket Melee Weapons" } }]
  },
  {
    id: "temper",
    name: "Temper",
    level: 35,
    stats: ["+20% Faster Hit Recovery", "+75-100% Enhanced Defense", "+10 To Vitality", "Increase Maximum Life 5%", "Fire Resist +40-60%", "+5% To Maximum Fire Resist"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("io"), order: 2 },
      { rune: getRune("ral"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "treachery",
    name: "Treachery",
    level: 43,
    stats: ["5% Chance To Cast Level 15 Fade When Struck", "25% Chance To Cast level 15 Venom On Striking", "+2 To Assassin Skills", "+45% Increased Attack Speed", "+20% Faster Hit Recovery", "Cold Resist +30%", "50% Extra Gold From Monsters"],
    runes: [
      { rune: getRune("shael"), order: 1 },
      { rune: getRune("thul"), order: 2 },
      { rune: getRune("lem"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "unbending_will",
    name: "Unbending Will",
    level: 41,
    stats: ["18% Chance To Cast Level 18 Taunt On Striking", "+3 To Combat Skills (Barbarian Only)", "+20-30% Increased Attack Speed", "+300-350% Enhanced Damage", "+9 To Maximum Damage", "+50 To Attack Rating", "+75% Damage To Undead", "+50 To Attack Rating Against Undead", "8-10% Life Stolen Per Hit", "Prevent Monster Heal", "+10 To Strength", "+10 To Vitality", "Damage Reduced By 8", "+3 To Light Radius", "Requirements -20%"],
    runes: [
      { rune: getRune("fal"), order: 1 },
      { rune: getRune("io"), order: 2 },
      { rune: getRune("ith"), order: 3 },
      { rune: getRune("eld"), order: 4 },
      { rune: getRune("el"), order: 5 },
      { rune: getRune("hel"), order: 6 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword", name: "6 Socket Swords" } }]
  },
  {
    id: "venom",
    name: "Venom",
    level: 49,
    stats: ["Hit Causes Monster To Flee 25%", "Prevent Monster Heal", "Ignore Target's Defense", "7% Mana Stolen Per Hit", "+273 Poison Damage Over 6 Seconds", "Level 13 Poison Nova (11 Charges)", "Level 15 Poison Explosion (27 Charges)"],
    runes: [
      { rune: getRune("tal"), order: 1 },
      { rune: getRune("dol"), order: 2 },
      { rune: getRune("mal"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "weapon", name: "3 Socket Weapons" } }]
  },
  {
    id: "vigilance",
    name: "Vigilance",
    level: 53,
    stats: ["+30% Faster Block Rate", "+10% Faster Run/Walk", "75-100% Enhanced Defense", "+20 To Vitality", "All Resistances +15-25", "Magic Damage Reduced By 10", "10% Chance To Cast Level 12 Ring of Fire When Struck", "+2 To Chaos Skills (Warlock Only)"],
    runes: [
      { rune: getRune("dol"), order: 1 },
      { rune: getRune("gul"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "shield_grimoire_head", name: "2 Socket Shields/Grimoires/Heads" } }]
  },
  {
    id: "vor",
    name: "Voice of Reason",
    level: 43,
    stats: ["15% Chance To Cast Level 13 Frozen Orb On Striking", "18% Chance To Cast Level 20 Ice Blast On Striking", "+50 To Attack Rating", "+220-350% Damage To Demons", "+355-375% Damage To Undead", "+50 To Attack Rating Against Undead", "Adds 100-220 Cold Damage", "-24% To Enemy Cold Resistance", "+10 To Dexterity", "Cannot Be Frozen", "75% Extra Gold From Monsters", "+1 To Light Radius"],
    runes: [
      { rune: getRune("lem"), order: 1 },
      { rune: getRune("ko"), order: 2 },
      { rune: getRune("el"), order: 3 },
      { rune: getRune("eld"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "sword_mace", name: "4 Socket Swords/Maces" } }]
  },
  {
    id: "void",
    name: "Void",
    level: 69,
    stats: ["Indestructible", "+2 To All Skills", "+40% Faster Cast Rate", "+10-15% To Magic Skill Damage", "-(10-15)% To Enemy Magic Resistance", "Level 10 Decrepify (30 Charges)", "Regenerate Mana 20%", "All Resistances +20-30"],
    runes: [
      { rune: getRune("thul"), order: 1 },
      { rune: getRune("zod"), order: 2 },
      { rune: getRune("ist"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "dagger", name: "3 Socket Daggers" } }]
  },
  {
    id: "wealth",
    name: "Wealth",
    level: 43,
    stats: ["+10 To Dexterity", "+2 To Mana After Each Kill", "300% Extra Gold From Monsters", "100% Better Chance of Getting Magic Items"],
    runes: [
      { rune: getRune("lem"), order: 1 },
      { rune: getRune("ko"), order: 2 },
      { rune: getRune("tir"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "armor", name: "3 Socket Body Armor" } }]
  },
  {
    id: "white",
    name: "White",
    level: 35,
    stats: ["Hit Causes Monster To Flee 25%", "+10 To Vitality", "+3 To Poison And Bone Skills (Necromancer Only)", "+3 To Bone Armor (Necromancer Only)", "+2 To Bone Spear (Necromancer Only)", "+4 To Skeleton Mastery (Necromancer Only)", "Magic Damage Reduced By 4", "20% Faster Cast Rate", "+13 To Mana"],
    runes: [
      { rune: getRune("dol"), order: 1 },
      { rune: getRune("io"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "wand", name: "2 Socket Wands" } }]
  },
  {
    id: "wind",
    name: "Wind",
    level: 61,
    stats: ["10% Chance To Cast Level 9 Tornado On Striking", "+20% Faster Run/Walk", "+40% Increased Attack Speed", "+15% Faster Hit Recovery", "+120-160% Enhanced Damage", "-25% Target Defense", "+50 To Attack Rating", "Hit Blinds Target", "+10 To Dexterity", "Replenish Life +8", "Level 13 Twister (127 Charges)"],
    runes: [
      { rune: getRune("sur"), order: 1 },
      { rune: getRune("el"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "melee_weapon", name: "2 Socket Melee Weapons" } }]
  },
  {
    id: "wisdom",
    name: "Wisdom",
    level: 45,
    stats: ["+33% Piercing Attack", "+15-25% To Attack Rating", "4-8% Mana Stolen Per Hit", "+30% Enhanced Defense", "+10 To Energy", "15% Slower Stamina Drain", "Cannot Be Frozen", "+5 To Mana After Each Kill", "15% Damage Taken Goes To Mana"],
    runes: [
      { rune: getRune("pul"), order: 1 },
      { rune: getRune("ith"), order: 2 },
      { rune: getRune("eld"), order: 3 },
    ],
    baseItemTypes: [{ baseItemType: { id: "helm", name: "3 Socket Helms" } }]
  },
  {
    id: "wrath",
    name: "Wrath",
    level: 63,
    stats: ["30% Chance To Cast Level 1 Decrepify On Striking", "5% Chance To Cast Level 10 Life Tap On Striking", "+375% Damage To Demons", "+100 To Attack Rating Against Demons", "+250-300% Damage To Undead", "Adds 85-120 Magic Damage", "Adds 41-240 Lightning Damage", "20% Chance of Crushing Blow", "Cannot Be Frozen", "Prevent Monster Heal"],
    runes: [
      { rune: getRune("pul"), order: 1 },
      { rune: getRune("lum"), order: 2 },
      { rune: getRune("ber"), order: 3 },
      { rune: getRune("mal"), order: 4 },
    ],
    baseItemTypes: [{ baseItemType: { id: "missile_weapon", name: "4 Socket Missile Weapons" } }]
  },
  {
    id: "zephyr",
    name: "Zephyr",
    level: 21,
    stats: ["7% Chance To Cast Level 1 Twister When Struck", "+25% Faster Run/Walk", "+25% Increased Attack Speed", "+33% Enhanced Damage", "-25% Target Defense", "+66 To Attack Rating", "Adds 1-50 Lightning Damage", "+25 Defense"],
    runes: [
      { rune: getRune("ort"), order: 1 },
      { rune: getRune("eth"), order: 2 },
    ],
    baseItemTypes: [{ baseItemType: { id: "missile_weapon", name: "2 Socket Missile Weapons" } }]
  },
];
