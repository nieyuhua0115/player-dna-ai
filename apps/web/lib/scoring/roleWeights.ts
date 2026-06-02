import { traitKeys, type TraitKey } from "@player-dna/player-matching";
import type { RoleFamily, RoleWeights } from "./types";

const baseWeight = Object.fromEntries(
  traitKeys.map((traitKey) => [traitKey, 0.55]),
) as RoleWeights;

function weights(overrides: Partial<Record<TraitKey, number>>): RoleWeights {
  return { ...baseWeight, ...overrides };
}

export const roleWeights: Record<RoleFamily, RoleWeights> = {
  winger: weights({
    pace: 1.25,
    acceleration: 1.2,
    dribbling: 1.3,
    oneVsOne: 1.25,
    cutInside: 1,
    goOutside: 0.95,
    crossing: 0.9,
    creativity: 1,
    transitionThreat: 1.1,
    finalThirdDecision: 1.05,
  }),
  fullback: weights({
    pace: 1,
    acceleration: 0.9,
    goOutside: 1,
    crossing: 1.1,
    longPassing: 1,
    defensiveWorkRate: 1.1,
    pressing: 0.85,
    tackling: 1.2,
    interceptions: 1.15,
    marking: 1.15,
    transitionThreat: 0.9,
  }),
  defender: weights({
    physicality: 1.05,
    aerialAbility: 1.1,
    defensiveWorkRate: 1,
    tackling: 1.25,
    interceptions: 1.25,
    marking: 1.3,
    longPassing: 0.8,
    passing: 0.75,
    tempoControl: 0.7,
    finalThirdDecision: 0.9,
  }),
  forward: weights({
    pace: 0.9,
    shooting: 1.2,
    finishing: 1.35,
    offBall: 1.25,
    physicality: 0.9,
    holdUpPlay: 1,
    aerialAbility: 0.9,
    transitionThreat: 1,
    weakFoot: 0.85,
    finalThirdDecision: 1.2,
  }),
  midfielder: weights({
    passing: 1.25,
    creativity: 1.1,
    defensiveWorkRate: 0.95,
    pressing: 0.95,
    interceptions: 1,
    riskTaking: 0.9,
    tempoControl: 1.3,
    ballRetention: 1.2,
    longPassing: 1.05,
    shortCombination: 1.15,
    finalThirdDecision: 1,
  }),
  goalkeeper: weights({
    shotStopping: 1.35,
    reflexes: 1.25,
    handling: 1.2,
    keeperDistribution: 1.05,
    sweeperKeeping: 1,
    aerialAbility: 0.9,
    longPassing: 0.75,
    finalThirdDecision: 0.75,
    ballRetention: 0.65,
  }),
};

export const adjacentRoles: Record<RoleFamily, RoleFamily[]> = {
  winger: ["fullback", "forward", "midfielder"],
  fullback: ["winger", "defender", "midfielder"],
  defender: ["fullback", "midfielder"],
  forward: ["winger", "midfielder"],
  midfielder: ["winger", "fullback", "defender", "forward"],
  goalkeeper: [],
};
