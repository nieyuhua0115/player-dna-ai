import type { TraitEffects, TraitKey, TraitVector } from "@player-dna/player-matching";

export type RoleFamily =
  | "winger"
  | "fullback"
  | "defender"
  | "forward"
  | "midfielder"
  | "goalkeeper";

export type StrongFoot = "left" | "right" | "both";

export type QuestionOption = {
  label: string;
  value: string;
  traitEffects: TraitEffects;
  tags?: string[];
};

export type PlayerDNAQuestion = {
  id: string;
  role: RoleFamily | "common";
  text: string;
  description?: string;
  options: QuestionOption[];
};

export type PlayerDNAAnswerMap = Record<string, string[]>;

export type PlayerDNAProfile = {
  id: string;
  name: string;
  roleFamily: RoleFamily;
  positions: string[];
  strongFoot: StrongFoot;
  preferredZones: string[];
  archetype: string;
  traits: TraitVector;
  tags: string[];
  summary: string;
};

export type UserTraitProfile = {
  roleFamily: RoleFamily;
  strongFoot?: StrongFoot;
  preferredZones: string[];
  traits: TraitVector;
  tags: string[];
};

export type MatchExplanation = {
  label: string;
  value: string;
};

export type PlayerDNAMatch = {
  player: PlayerDNAProfile;
  finalScore: number;
  percentage: number;
  traitSimilarity: number;
  roleFit: number;
  tagOverlap: number;
  footSideCompatibility: number;
  explanations: MatchExplanation[];
};

export type PlayerDNAResult = {
  topMatch: PlayerDNAMatch;
  matches: PlayerDNAMatch[];
  userArchetype: string;
  strengths: string[];
  developmentAreas: string[];
  tacticalFit: string[];
  report: string;
};

export type RoleWeights = Record<TraitKey, number>;
