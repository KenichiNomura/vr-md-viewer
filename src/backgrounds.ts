export const DEFAULT_BACKGROUND_ID = "dark-cyberspace";

export interface BackgroundPreset {
  id: string;
  label: string;
  url: string | null;
}

export const BACKGROUND_PRESETS: BackgroundPreset[] = [
  { id: DEFAULT_BACKGROUND_ID, label: "Dark Cyberspace", url: "backgrounds/dark-cyberspace.jpg" },
  { id: "neon-lab", label: "Neon Lab", url: "backgrounds/neon-lab.jpg" },
  { id: "orbital-deck", label: "Orbital Deck", url: "backgrounds/orbital-deck.jpg" },
  { id: "hologram-atrium", label: "Hologram Atrium", url: "backgrounds/hologram-atrium.jpg" },
  { id: "none", label: "None", url: null },
];

const VALID_BACKGROUND_IDS = new Set(BACKGROUND_PRESETS.map((preset) => preset.id));

export function normalizeBackgroundId(value: unknown) {
  return typeof value === "string" && VALID_BACKGROUND_IDS.has(value) ? value : DEFAULT_BACKGROUND_ID;
}

export function getBackgroundPreset(backgroundId: string) {
  return BACKGROUND_PRESETS.find((preset) => preset.id === backgroundId) ?? BACKGROUND_PRESETS[0];
}
