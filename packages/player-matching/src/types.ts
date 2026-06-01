import type { TraitEffects, TraitKey, TraitVector } from "./traits";

export type PreferredFoot = "left" | "right" | "both";

export type PositionGroup =
  | "winger"
  | "forward"
  | "midfielder"
  | "defender"
  | "goalkeeper";

export type QuestionType = "single" | "multi" | "scale";

export type QuestionCategory =
  | "position"
  | "footedness"
  | "zone"
  | "movement"
  | "attack"
  | "creation"
  | "defense"
  | "duels"
  | "mentality";

export type PlayerMetadata = {
  positionGroup?: PositionGroup;
  positions?: string[];
  preferredFoot?: PreferredFoot;
  zones?: string[];
  roles?: string[];
};

export type QuestionOption = {
  id: string;
  label: string;
  traitEffects: TraitEffects;
  metadataEffects?: PlayerMetadata;
};

export type Question = {
  id: string;
  text: string;
  type: QuestionType;
  category: QuestionCategory;
  options: QuestionOption[];
};

export type PlayerAnswer = {
  questionId: string;
  optionIds: string[];
};

export type PlayerProfile = {
  id: string;
  name: string;
  nationality?: string;
  positionGroup: PositionGroup;
  positions: string[];
  preferredFoot: PreferredFoot;
  roles: string[];
  zones: string[];
  archetypes: string[];
  traits: TraitVector;
  strengths: string[];
  developmentAreas?: string[];
  tacticalFit: string[];
  summarySeed: string;
};

export type UserStyleProfile = {
  traits: TraitVector;
  metadata: PlayerMetadata;
  answers: PlayerAnswer[];
};

export type MatchReason = {
  type: "trait" | "metadata";
  key: TraitKey | keyof PlayerMetadata;
  label: string;
  impact: "positive" | "negative" | "neutral";
};

export type PlayerMatch = {
  player: PlayerProfile;
  score: number;
  percentage: number;
  reasons: MatchReason[];
};

export type PlayerDNAResult = {
  topMatch: PlayerMatch;
  matches: PlayerMatch[];
  archetype: string;
  strengths: string[];
  developmentAreas: string[];
  tacticalFit: string[];
  scoutingReport: string;
};
