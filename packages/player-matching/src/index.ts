export {
  clampTraitScore,
  createNeutralTraitVector,
  createTraitVector,
  isTraitKey,
  maxTraitScore,
  minTraitScore,
  neutralTraitScore,
  traitCategories,
  traitDefinitions,
  traitKeys,
} from "./traits";

export { buildUserStyleProfile, generatePlayerDNAResult } from "./scoring";

export type { AnswerMap } from "./scoring";

export type {
  TraitCategory,
  TraitDefinition,
  TraitEffects,
  TraitKey,
  TraitVector,
} from "./traits";

export type {
  MatchReason,
  PlayerAnswer,
  PlayerDNAResult,
  PlayerMatch,
  PlayerMetadata,
  PlayerProfile,
  PositionGroup,
  PreferredFoot,
  Question,
  QuestionCategory,
  QuestionOption,
  QuestionType,
  UserStyleProfile,
} from "./types";
