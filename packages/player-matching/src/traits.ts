export const minTraitScore = 0;
export const maxTraitScore = 100;
export const neutralTraitScore = 50;

export const traitCategories = [
  "athleticism",
  "carrying",
  "attacking",
  "creation",
  "defending",
  "duels",
  "control",
  "movement",
] as const;

export type TraitCategory = (typeof traitCategories)[number];

export type TraitDefinition = {
  key: string;
  label: string;
  category: TraitCategory;
  description: string;
};

export const traitDefinitions = [
  {
    key: "pace",
    label: "Pace",
    category: "athleticism",
    description: "Top speed over longer distances.",
  },
  {
    key: "acceleration",
    label: "Acceleration",
    category: "athleticism",
    description: "First-step burst and ability to separate quickly.",
  },
  {
    key: "dribbling",
    label: "Dribbling",
    category: "carrying",
    description: "Comfort carrying the ball under pressure.",
  },
  {
    key: "oneVsOne",
    label: "1v1",
    category: "carrying",
    description: "Willingness and ability to beat a direct marker.",
  },
  {
    key: "cutInside",
    label: "Cut Inside",
    category: "carrying",
    description: "Preference for driving inside from wide areas.",
  },
  {
    key: "goOutside",
    label: "Go Outside",
    category: "carrying",
    description: "Preference for attacking the outside lane.",
  },
  {
    key: "shooting",
    label: "Shooting",
    category: "attacking",
    description: "Shot volume, range, and confidence.",
  },
  {
    key: "finishing",
    label: "Finishing",
    category: "attacking",
    description: "Chance conversion and penalty-box composure.",
  },
  {
    key: "crossing",
    label: "Crossing",
    category: "creation",
    description: "Delivery from wide areas into dangerous zones.",
  },
  {
    key: "passing",
    label: "Passing",
    category: "creation",
    description: "Overall passing quality and involvement.",
  },
  {
    key: "creativity",
    label: "Creativity",
    category: "creation",
    description: "Ability to find unexpected final-third solutions.",
  },
  {
    key: "offBall",
    label: "Off Ball",
    category: "movement",
    description: "Timing and quality of movement without the ball.",
  },
  {
    key: "defensiveWorkRate",
    label: "Defensive Work Rate",
    category: "defending",
    description: "Defensive responsibility and recovery effort.",
  },
  {
    key: "pressing",
    label: "Pressing",
    category: "defending",
    description: "Aggression and timing when closing opponents.",
  },
  {
    key: "physicality",
    label: "Physicality",
    category: "duels",
    description: "Strength and willingness to absorb contact.",
  },
  {
    key: "holdUpPlay",
    label: "Hold-up Play",
    category: "duels",
    description: "Ability to receive, protect, and connect under pressure.",
  },
  {
    key: "riskTaking",
    label: "Risk Taking",
    category: "control",
    description: "Tolerance for ambitious passes, carries, and shots.",
  },
  {
    key: "tempoControl",
    label: "Tempo Control",
    category: "control",
    description: "Ability to slow, accelerate, and organize possession.",
  },
  {
    key: "transitionThreat",
    label: "Transition Threat",
    category: "movement",
    description: "Danger in open space and attacking transitions.",
  },
  {
    key: "weakFoot",
    label: "Weak Foot",
    category: "control",
    description: "Comfort using the non-dominant foot.",
  },
  {
    key: "aerialAbility",
    label: "Aerial Ability",
    category: "duels",
    description: "Heading threat and ability to compete in the air.",
  },
  {
    key: "ballRetention",
    label: "Ball Retention",
    category: "control",
    description: "Security in possession against pressure.",
  },
  {
    key: "longPassing",
    label: "Long Passing",
    category: "creation",
    description: "Range and accuracy when switching or progressing play.",
  },
  {
    key: "shortCombination",
    label: "Short Combination",
    category: "creation",
    description: "Quality in quick wall passes and tight combinations.",
  },
  {
    key: "finalThirdDecision",
    label: "Final-third Decision",
    category: "attacking",
    description: "Shot, pass, and carry choices near goal.",
  },
] as const satisfies readonly TraitDefinition[];

export type TraitKey = (typeof traitDefinitions)[number]["key"];
export type TraitVector = Record<TraitKey, number>;
export type TraitEffects = Partial<Record<TraitKey, number>>;

export const traitKeys = traitDefinitions.map((trait) => trait.key);

const traitKeySet = new Set<string>(traitKeys);

export function isTraitKey(value: string): value is TraitKey {
  return traitKeySet.has(value);
}

export function clampTraitScore(value: number): number {
  if (!Number.isFinite(value)) {
    throw new TypeError("Trait score must be a finite number.");
  }

  return Math.min(maxTraitScore, Math.max(minTraitScore, value));
}

export function createNeutralTraitVector(
  value = neutralTraitScore,
): TraitVector {
  const score = clampTraitScore(value);

  return Object.fromEntries(
    traitKeys.map((traitKey) => [traitKey, score]),
  ) as TraitVector;
}
