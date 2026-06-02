import { traitKeys, type TraitKey } from "@player-dna/player-matching";
import { inferUserArchetype } from "./buildUserTraits";
import {
  calculateFootSideCompatibility,
  calculateRoleFit,
  calculateTagOverlap,
  calculateTraitSimilarity,
} from "./similarity";
import {
  developmentCopyEn,
  developmentCopyZh,
  getRoleLabels,
  getTraitLabels,
  strengthCopyEn,
  strengthCopyZh,
  type Language,
} from "./traitCopy";
import type {
  PlayerDNAMatch,
  PlayerDNAProfile,
  PlayerDNAResult,
  UserTraitProfile,
} from "./types";

export function matchPlayers(
  userProfile: UserTraitProfile,
  players: PlayerDNAProfile[],
  language: Language = "zh",
): PlayerDNAResult {
  const matches = players
    .map((player) => scorePlayer(userProfile, player, language))
    .sort((left, right) => right.finalScore - left.finalScore)
    .slice(0, 4);

  const percentages = toPercentages(matches.map((match) => match.finalScore));
  const blendedMatches = matches.map((match, index) => ({
    ...match,
    percentage: percentages[index] ?? 0,
  }));
  const userArchetype = inferUserArchetype(userProfile, language);
  const strengths = summarizeStrengths(userProfile, language);
  const developmentAreas = summarizeDevelopmentAreas(userProfile, language);
  const tacticalFit = inferTacticalFit(userProfile, language);

  return {
    topMatch: blendedMatches[0],
    matches: blendedMatches,
    userArchetype,
    strengths,
    developmentAreas,
    tacticalFit,
    report: buildReport(userArchetype, blendedMatches, strengths, developmentAreas, tacticalFit, language),
  };
}

function scorePlayer(
  userProfile: UserTraitProfile,
  player: PlayerDNAProfile,
  language: Language,
): PlayerDNAMatch {
  const traitSimilarity = calculateTraitSimilarity(userProfile, player);
  const roleFit = calculateRoleFit(userProfile.roleFamily, player.roleFamily);
  const tagOverlap = calculateTagOverlap(userProfile.tags, player.tags);
  const footSideCompatibility = calculateFootSideCompatibility(userProfile, player);
  const finalScore =
    0.55 * traitSimilarity +
    0.2 * roleFit +
    0.2 * tagOverlap +
    0.05 * footSideCompatibility;

  return {
    player,
    finalScore,
    percentage: 0,
    traitSimilarity,
    roleFit,
    tagOverlap,
    footSideCompatibility,
    explanations: buildExplanations(userProfile, player, language),
  };
}

function buildExplanations(
  userProfile: UserTraitProfile,
  player: PlayerDNAProfile,
  language: Language,
) {
  const traitLabels = getTraitLabels(language);
  const roleLabels = getRoleLabels(language);
  const closestTraits = [...traitKeys]
    .map((traitKey) => ({
      traitKey,
      gap: Math.abs(userProfile.traits[traitKey] - player.traits[traitKey]),
    }))
    .sort((left, right) => left.gap - right.gap)
    .slice(0, 3)
    .map(({ traitKey }) => traitLabels[traitKey]);
  const sharedTags = userProfile.tags.filter((tag) => player.tags.includes(tag)).slice(0, 3);

  if (language === "en") {
    return [
      { label: "Role fit", value: roleLabels[player.roleFamily] },
      { label: "Closest traits", value: closestTraits.join(", ") },
      { label: "Shared style tags", value: sharedTags.length ? `${sharedTags.length} overlapping style tags` : "overall style fit" },
    ];
  }

  return [
    { label: "角色匹配", value: roleLabels[player.roleFamily] },
    { label: "最接近的能力维度", value: closestTraits.join("、") },
    { label: "共同风格标签", value: sharedTags.length ? `${sharedTags.length} 个风格标签重合` : "整体风格接近" },
  ];
}

function toPercentages(scores: number[]): number[] {
  const maxScore = Math.max(...scores);
  const temperature = 0.08;
  const weights = scores.map((score) => Math.exp((score - maxScore) / temperature));
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  const percentages = weights.map((weight) => Math.round((weight / total) * 100));
  const correction = 100 - percentages.reduce((sum, value) => sum + value, 0);

  percentages[0] += correction;

  return percentages;
}

function summarizeStrengths(userProfile: UserTraitProfile, language: Language): string[] {
  const copy = language === "zh" ? strengthCopyZh : strengthCopyEn;

  return topTraits(userProfile, 5).map((traitKey) => copy[traitKey]);
}

function summarizeDevelopmentAreas(userProfile: UserTraitProfile, language: Language): string[] {
  const copy = language === "zh" ? developmentCopyZh : developmentCopyEn;

  return bottomTraits(userProfile, 3).map((traitKey) => copy[traitKey]);
}

function topTraits(userProfile: UserTraitProfile, count: number): TraitKey[] {
  return [...traitKeys]
    .sort((left, right) => userProfile.traits[right] - userProfile.traits[left])
    .slice(0, count);
}

function bottomTraits(userProfile: UserTraitProfile, count: number): TraitKey[] {
  return [...traitKeys]
    .sort((left, right) => userProfile.traits[left] - userProfile.traits[right])
    .slice(0, count);
}

function inferTacticalFit(userProfile: UserTraitProfile, language: Language): string[] {
  const { roleFamily, traits } = userProfile;

  if (roleFamily === "goalkeeper") {
    if (language === "en") {
      return traits.keeperDistribution >= 66
        ? ["Fits systems where the goalkeeper participates in buildup.", "Can support a high line and short buildup.", "Needs clear back-pass and support angles."]
        : ["Fits systems that value box protection and stable shot stopping.", "Can provide the final barrier in compact defending.", "Needs defenders to protect second balls."];
    }

    return traits.keeperDistribution >= 66
      ? ["适合门将参与出球的体系。", "能支持高防线和后场短传组织。", "需要清晰的回传和接应结构。"]
      : ["适合重视禁区保护和扑救稳定性的体系。", "能在中低位防守中提供最后屏障。", "需要后卫保护二点球。"];
  }

  if (roleFamily === "fullback") {
    if (language === "en") {
      return traits.crossing >= 66 || traits.goOutside >= 66
        ? ["Fits overlap-heavy wide systems.", "Provides width and depth from the flank.", "Needs midfield cover behind forward runs."]
        : ["Fits inverted fullback roles in possession.", "Can create central overloads in buildup.", "Needs the winger to hold width."];
    }

    return traits.crossing >= 66 || traits.goOutside >= 66
      ? ["适合边路重叠和传中体系。", "能提供宽度和纵深。", "需要中场补位保护身后空间。"]
      : ["适合内收参与组织的边后卫角色。", "能帮助中场形成控球人数优势。", "需要边锋保持外线宽度。"];
  }

  if (roleFamily === "defender") {
    if (language === "en") {
      return traits.longPassing >= 66
        ? ["Fits systems that ask center backs to progress and switch play.", "Can help break the first pressing line from the back.", "Needs clear support angles nearby."]
        : ["Fits systems that value box protection and duel quality.", "Can stabilize compact defending and clear crosses.", "Needs midfield cover in the half-spaces."];
    }

    return traits.longPassing >= 66
      ? ["适合需要中卫出球和转移的体系。", "能帮助球队从后场打破第一道压迫。", "需要身边队友提供清晰接应角度。"]
      : ["适合重视禁区保护和对抗质量的体系。", "能在中低位防守中稳定处理传中和二点球。", "需要后腰保护肋部空间。"];
  }

  if (roleFamily === "midfielder") {
    if (language === "en") {
      return ["Fits systems that need midfield connection and rhythm control.", "Provides a passing outlet in possession.", "Can adjust risk based on pressing intensity."];
    }

    return ["适合需要中场连接和节奏管理的体系。", "能在阵地战中提供传球出口。", "可根据压迫强度切换风险。"];
  }

  if (roleFamily === "forward") {
    if (language === "en") {
      return ["Fits systems built around box movement and final actions.", "Needs steady service from wide areas and midfield.", "Can provide depth threat in transition."];
    }

    return ["适合围绕禁区跑位和最后一击设计的体系。", "需要边路和中场稳定输送。", "反击中能提供纵深威胁。"];
  }

  if (language === "en") {
    return ["Fits wide isolation and fast progression systems.", "Needs teammates to offer inside support.", "Has higher value in transitions and width attacks."];
  }

  return ["适合边路隔离和快速推进体系。", "需要队友提供内线接应。", "反击和宽度进攻中价值更高。"];
}

function buildReport(
  archetype: string,
  matches: PlayerDNAMatch[],
  strengths: string[],
  developmentAreas: string[],
  tacticalFit: string[],
  language: Language,
): string {
  const blend = matches.map((match) => `${match.percentage}% ${match.player.name}`).join(", ");

  if (language === "en") {
    return `Your style is close to ${archetype}. Your clearest strengths are ${strengths.slice(0, 3).join(", ")}. The closest professional reference is a blend of ${blend}. Tactically, ${tacticalFit[0]} A useful next step is improving ${developmentAreas.slice(0, 2).join(" and ")}.`;
  }

  return `你的风格接近 ${archetype}。最明显的优势是${strengths.slice(0, 3).join("、")}。职业球员参照更像 ${blend} 的混合。战术上，${tacticalFit[0]} 后续可以重点提升${developmentAreas.slice(0, 2).join("和")}。`;
}
