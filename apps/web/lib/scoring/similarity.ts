import { traitKeys } from "@player-dna/player-matching";
import { adjacentRoles, roleWeights } from "./roleWeights";
import type { PlayerDNAProfile, RoleFamily, UserTraitProfile } from "./types";

export function calculateTraitSimilarity(
  userProfile: UserTraitProfile,
  player: PlayerDNAProfile,
): number {
  const weights = roleWeights[userProfile.roleFamily];
  let weightedDistance = 0;
  let maxDistance = 0;

  for (const traitKey of traitKeys) {
    const weight = weights[traitKey];
    const distance = userProfile.traits[traitKey] - player.traits[traitKey];

    weightedDistance += weight * distance * distance;
    maxDistance += weight * 100 * 100;
  }

  return clamp01(1 - Math.sqrt(weightedDistance / maxDistance));
}

export function calculateRoleFit(
  selectedRole: RoleFamily,
  playerRole: RoleFamily,
): number {
  if (selectedRole === playerRole) {
    return 1;
  }

  if (selectedRole === "defender" && playerRole === "fullback") {
    return 0.82;
  }

  if (selectedRole === "fullback" && playerRole === "defender") {
    return 0.7;
  }

  return adjacentRoles[selectedRole].includes(playerRole) ? 0.62 : 0.18;
}

export function calculateTagOverlap(userTags: string[], playerTags: string[]): number {
  if (userTags.length === 0) {
    return 0.35;
  }

  const userTagSet = new Set(userTags);
  const playerTagSet = new Set(playerTags);
  const userWeight = weightedTagTotal(userTagSet);
  const overlapWeight = [...userTagSet]
    .filter((tag) => playerTagSet.has(tag))
    .reduce((sum, tag) => sum + tagWeight(tag), 0);
  const coverage = userWeight === 0 ? 0 : overlapWeight / userWeight;
  const playerSignatureTags = playerTags.filter((tag) => !isGenericTag(tag));
  const signatureOverlap = playerSignatureTags.length === 0
    ? 0.35
    : playerSignatureTags.filter((tag) => userTagSet.has(tag)).length / playerSignatureTags.length;
  const contrastPenalty = calculateContrastPenalty(userTagSet, playerTagSet);

  return clamp01((0.75 * coverage) + (0.25 * signatureOverlap) - contrastPenalty);
}

export function calculateFootSideCompatibility(
  userProfile: UserTraitProfile,
  player: PlayerDNAProfile,
): number {
  if (!userProfile.strongFoot || userProfile.strongFoot === "both" || player.strongFoot === "both") {
    return 1;
  }

  return userProfile.strongFoot === player.strongFoot ? 1 : 0.55;
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function weightedTagTotal(tags: Set<string>): number {
  return [...tags].reduce((sum, tag) => sum + tagWeight(tag), 0);
}

function tagWeight(tag: string): number {
  if (
    tag.startsWith("role_") ||
    tag.endsWith("_zone") ||
    tag === "left_foot" ||
    tag === "right_foot"
  ) {
    return 0.55;
  }

  if (signatureTags.has(tag)) {
    return 1.45;
  }

  return 1;
}

function isGenericTag(tag: string): boolean {
  return tag.startsWith("role_") || tag.endsWith("_zone");
}

function calculateContrastPenalty(
  userTags: Set<string>,
  playerTags: Set<string>,
): number {
  return styleContrastGroups.reduce((penalty, group) => {
    const userGroupTags = group.filter((tag) => userTags.has(tag));
    const playerGroupTags = group.filter((tag) => playerTags.has(tag));

    if (userGroupTags.length === 0 || playerGroupTags.length === 0) {
      return penalty;
    }

    const hasSharedStyle = userGroupTags.some((tag) => playerTags.has(tag));

    return hasSharedStyle ? penalty : penalty + 0.12;
  }, 0);
}

const signatureTags = new Set([
  "wide_isolation",
  "inverted_winger",
  "touchline",
  "provider",
  "cutback",
  "runner",
  "channel_runner",
  "poacher",
  "target",
  "link_up",
  "false_nine",
  "self_creator",
  "controller",
  "progressor",
  "box_to_box",
  "interior_creator",
  "deep_lying",
  "presser",
  "front_foot",
  "cover_defender",
  "commanding",
  "box_defender",
  "buildup_keeper",
  "sweeper",
  "shot_stopper",
  "goal_line",
]);

const styleContrastGroups = [
  ["inverted_winger", "touchline", "provider", "wide_isolation"],
  ["controller", "transition", "direct", "high_risk"],
  ["poacher", "target", "link_up", "false_nine", "channel_runner", "self_creator"],
  ["deep_lying", "advanced_midfielder", "box_to_box", "interior_creator"],
  ["progressor", "front_foot", "cover_defender", "commanding", "box_defender", "lockdown"],
  ["buildup_keeper", "sweeper", "shot_stopper", "goal_line", "commanding"],
];
