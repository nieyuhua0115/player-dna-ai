import {
  clampTraitScore,
  createNeutralTraitVector,
  traitDefinitions,
  traitKeys,
  type TraitEffects,
  type TraitKey,
  type TraitVector,
} from "./traits";
import type {
  MatchReason,
  PlayerAnswer,
  PlayerDNAResult,
  PlayerMatch,
  PlayerMetadata,
  PlayerProfile,
  Question,
  QuestionOption,
  UserStyleProfile,
} from "./types";

const traitWeights: Record<TraitKey, number> = {
  pace: 1.2,
  acceleration: 1.2,
  dribbling: 1.25,
  oneVsOne: 1.15,
  cutInside: 0.9,
  goOutside: 0.85,
  shooting: 1.1,
  finishing: 1.1,
  crossing: 0.95,
  passing: 1.15,
  creativity: 1.15,
  offBall: 1.1,
  defensiveWorkRate: 0.9,
  pressing: 0.95,
  tackling: 1.05,
  interceptions: 1.05,
  marking: 1.05,
  physicality: 1,
  holdUpPlay: 0.9,
  riskTaking: 0.85,
  tempoControl: 1.15,
  transitionThreat: 1.1,
  weakFoot: 0.75,
  aerialAbility: 0.75,
  ballRetention: 1.05,
  longPassing: 0.85,
  shortCombination: 1,
  finalThirdDecision: 1.15,
  shotStopping: 1.2,
  reflexes: 1.15,
  handling: 1,
  keeperDistribution: 0.95,
  sweeperKeeping: 0.9,
};

const traitLabels = Object.fromEntries(
  traitDefinitions.map((trait) => [trait.key, trait.label]),
) as Record<TraitKey, string>;

export type AnswerMap = Record<string, string[]>;

export function buildUserStyleProfile(
  questions: Question[],
  answers: AnswerMap,
): UserStyleProfile {
  const traits = createNeutralTraitVector();
  const metadata: PlayerMetadata = {};
  const selectedAnswers: PlayerAnswer[] = [];

  for (const question of questions) {
    const optionIds = answers[question.id] ?? [];

    if (optionIds.length === 0) {
      continue;
    }

    selectedAnswers.push({ questionId: question.id, optionIds });

    for (const optionId of optionIds) {
      const option = question.options.find((candidate) => candidate.id === optionId);

      if (!option) {
        continue;
      }

      applyTraitEffects(traits, option.traitEffects);
      mergeMetadata(metadata, option.metadataEffects);
    }
  }

  return {
    traits,
    metadata,
    answers: selectedAnswers,
  };
}

export function generatePlayerDNAResult(
  userProfile: UserStyleProfile,
  players: PlayerProfile[],
): PlayerDNAResult {
  const matches = players
    .map((player) => scorePlayerMatch(userProfile, player))
    .sort((left, right) => right.score - left.score)
    .slice(0, 4);

  const percentages = toBlendPercentages(matches.map((match) => match.score));
  const blendedMatches = matches.map((match, index) => ({
    ...match,
    percentage: percentages[index] ?? 0,
  }));

  const archetype = inferArchetype(userProfile);
  const strengths = summarizeStrengths(userProfile.traits);
  const developmentAreas = summarizeDevelopmentAreas(userProfile.traits);
  const tacticalFit = inferTacticalFit(userProfile);

  return {
    topMatch: blendedMatches[0],
    matches: blendedMatches,
    archetype,
    strengths,
    developmentAreas,
    tacticalFit,
    scoutingReport: buildScoutingReport({
      archetype,
      strengths,
      developmentAreas,
      tacticalFit,
      matches: blendedMatches,
    }),
  };
}

function applyTraitEffects(traits: TraitVector, effects: TraitEffects): void {
  for (const [traitKey, effect] of Object.entries(effects)) {
    if (effect === undefined) {
      continue;
    }

    traits[traitKey as TraitKey] = clampTraitScore(
      traits[traitKey as TraitKey] + effect,
    );
  }
}

function mergeMetadata(
  metadata: PlayerMetadata,
  effects: PlayerMetadata | undefined,
): void {
  if (!effects) {
    return;
  }

  if (effects.positionGroup) {
    metadata.positionGroup = effects.positionGroup;
  }

  if (effects.preferredFoot) {
    metadata.preferredFoot = effects.preferredFoot;
  }

  metadata.positions = mergeStringList(metadata.positions, effects.positions);
  metadata.zones = mergeStringList(metadata.zones, effects.zones);
  metadata.roles = mergeStringList(metadata.roles, effects.roles);
}

function mergeStringList(
  existing: string[] | undefined,
  incoming: string[] | undefined,
): string[] | undefined {
  if (!incoming || incoming.length === 0) {
    return existing;
  }

  return Array.from(new Set([...(existing ?? []), ...incoming]));
}

function scorePlayerMatch(
  userProfile: UserStyleProfile,
  player: PlayerProfile,
): PlayerMatch {
  const traitSimilarity = calculateTraitSimilarity(
    userProfile.traits,
    player.traits,
  );
  const metadataSimilarity = calculateMetadataSimilarity(userProfile.metadata, player);
  const score = traitSimilarity * 0.86 + metadataSimilarity * 0.14;

  return {
    player,
    score,
    percentage: 0,
    reasons: buildMatchReasons(userProfile, player),
  };
}

function calculateTraitSimilarity(
  userTraits: TraitVector,
  playerTraits: TraitVector,
): number {
  let weightedDistance = 0;
  let maxDistance = 0;

  for (const traitKey of traitKeys) {
    const weight = traitWeights[traitKey];
    const distance = userTraits[traitKey] - playerTraits[traitKey];

    weightedDistance += weight * distance * distance;
    maxDistance += weight * 100 * 100;
  }

  return 1 - Math.sqrt(weightedDistance / maxDistance);
}

function calculateMetadataSimilarity(
  metadata: PlayerMetadata,
  player: PlayerProfile,
): number {
  let score = 0;
  let total = 0;

  if (metadata.positionGroup) {
    total += 0.35;
    score += metadata.positionGroup === player.positionGroup ? 0.35 : 0;
  }

  if (metadata.preferredFoot) {
    total += 0.15;
    score +=
      metadata.preferredFoot === player.preferredFoot ||
      metadata.preferredFoot === "both" ||
      player.preferredFoot === "both"
        ? 0.15
        : 0;
  }

  if (metadata.zones?.length) {
    total += 0.25;
    score += overlapRatio(metadata.zones, player.zones) * 0.25;
  }

  if (metadata.roles?.length) {
    total += 0.25;
    score += overlapRatio(metadata.roles, player.roles) * 0.25;
  }

  return total === 0 ? 0.5 : score / total;
}

function overlapRatio(left: string[], right: string[]): number {
  const rightSet = new Set(right);
  const overlap = left.filter((value) => rightSet.has(value)).length;

  return overlap / Math.max(left.length, 1);
}

function toBlendPercentages(scores: number[]): number[] {
  if (scores.length === 0) {
    return [];
  }

  const maxScore = Math.max(...scores);
  const temperature = 0.08;
  const weights = scores.map((score) => Math.exp((score - maxScore) / temperature));
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  const rawPercentages = weights.map((weight) => Math.round((weight / total) * 100));
  const correction = 100 - rawPercentages.reduce((sum, value) => sum + value, 0);

  rawPercentages[0] += correction;

  return rawPercentages;
}

function buildMatchReasons(
  userProfile: UserStyleProfile,
  player: PlayerProfile,
): MatchReason[] {
  const traitReasons = traitKeys
    .map((traitKey) => ({
      traitKey,
      gap: Math.abs(userProfile.traits[traitKey] - player.traits[traitKey]),
    }))
    .sort((left, right) => left.gap - right.gap)
    .slice(0, 3)
    .map(({ traitKey }) => ({
      type: "trait" as const,
      key: traitKey,
      label: traitLabels[traitKey],
      impact: "positive" as const,
    }));

  const metadataReasons: MatchReason[] = [];

  if (userProfile.metadata.positionGroup === player.positionGroup) {
    metadataReasons.push({
      type: "metadata",
      key: "positionGroup",
      label: "Position fit",
      impact: "positive",
    });
  }

  return [...traitReasons, ...metadataReasons].slice(0, 4);
}

function inferArchetype(userProfile: UserStyleProfile): string {
  const traits = userProfile.traits;
  const roles = userProfile.metadata.roles ?? [];

  if (
    traits.transitionThreat >= 68 &&
    traits.pace >= 68 &&
    traits.dribbling >= 62
  ) {
    return "Explosive Wide Carrier";
  }

  if (
    traits.cutInside >= 66 &&
    traits.creativity >= 62 &&
    traits.finalThirdDecision >= 60
  ) {
    return "Inverted Creator";
  }

  if (traits.finishing >= 68 && traits.offBall >= 64) {
    return "Box Crasher";
  }

  if (traits.tempoControl >= 68 && traits.passing >= 64) {
    return "Tempo Controller";
  }

  if (roles.includes("link-up") || traits.holdUpPlay >= 66) {
    return "Link-up Forward";
  }

  if (traits.pressing >= 66 && traits.defensiveWorkRate >= 66) {
    return "Pressing Connector";
  }

  return "Balanced Attacking Connector";
}

function summarizeStrengths(traits: TraitVector): string[] {
  return topTraits(traits, 5).map((traitKey) => traitStrengthCopy[traitKey]);
}

function summarizeDevelopmentAreas(traits: TraitVector): string[] {
  return bottomTraits(traits, 3).map((traitKey) => traitDevelopmentCopy[traitKey]);
}

function topTraits(traits: TraitVector, count: number): TraitKey[] {
  return [...traitKeys]
    .sort((left, right) => traits[right] - traits[left])
    .slice(0, count);
}

function bottomTraits(traits: TraitVector, count: number): TraitKey[] {
  return [...traitKeys]
    .sort((left, right) => traits[left] - traits[right])
    .slice(0, count);
}

function inferTacticalFit(userProfile: UserStyleProfile): string[] {
  const traits = userProfile.traits;
  const fits: string[] = [];

  if (traits.transitionThreat >= 64) {
    fits.push("适合有纵深和反击空间的体系。");
  }

  if (traits.shortCombination >= 62 || traits.ballRetention >= 64) {
    fits.push("能在小范围配合和阵地战中保持连接。");
  }

  if (traits.crossing >= 64 || traits.goOutside >= 64) {
    fits.push("适合需要边路宽度和传中质量的进攻结构。");
  }

  if (traits.pressing >= 64) {
    fits.push("可以融入高位压迫和快速反抢体系。");
  }

  if (fits.length === 0) {
    fits.push("适合职责清晰、允许根据场面切换节奏的体系。");
  }

  return fits.slice(0, 3);
}

function buildScoutingReport({
  archetype,
  strengths,
  developmentAreas,
  tacticalFit,
  matches,
}: {
  archetype: string;
  strengths: string[];
  developmentAreas: string[];
  tacticalFit: string[];
  matches: PlayerMatch[];
}): string {
  const blend = matches
    .map((match) => `${match.percentage}% ${match.player.name}`)
    .join(", ");

  return `你的风格接近 ${archetype}。从数据看，你最突出的比赛影响力来自${strengths
    .slice(0, 3)
    .join("、")}。职业球员参照更像是 ${blend} 的混合体。战术上，${tacticalFit[0]} 下一步可以重点提升${developmentAreas
    .slice(0, 2)
    .join("和")}，这样你的持球选择和最终三区效率会更稳定。`;
}

const traitStrengthCopy: Record<TraitKey, string> = {
  pace: "长距离冲刺和纵向推进",
  acceleration: "第一步启动和摆脱",
  dribbling: "持球推进",
  oneVsOne: "正面对抗防守人的能力",
  cutInside: "从边路向中路制造威胁",
  goOutside: "外线突破和拉开宽度",
  shooting: "主动完成射门",
  finishing: "禁区内终结",
  crossing: "边路传中和倒三角输送",
  passing: "传球参与度",
  creativity: "创造非常规机会",
  offBall: "无球跑位",
  defensiveWorkRate: "防守责任感",
  pressing: "压迫和反抢",
  tackling: "抢断和下脚时机",
  interceptions: "预判传球线路",
  marking: "盯人与防守站位",
  physicality: "身体对抗",
  holdUpPlay: "背身拿球和做球",
  riskTaking: "承担高收益选择",
  tempoControl: "比赛节奏控制",
  transitionThreat: "转换进攻威胁",
  weakFoot: "弱脚处理球",
  aerialAbility: "空中争顶",
  ballRetention: "抗压控球",
  longPassing: "长传转移",
  shortCombination: "小范围配合",
  finalThirdDecision: "最终三区决策",
  shotStopping: "扑救能力",
  reflexes: "近距离反应",
  handling: "接球和处理安全性",
  keeperDistribution: "门将出球",
  sweeperKeeping: "高位防线身后保护",
};

const traitDevelopmentCopy: Record<TraitKey, string> = {
  pace: "提升无球冲刺和纵深威胁",
  acceleration: "提升启动爆发力",
  dribbling: "提高持球稳定性",
  oneVsOne: "增加一对一处理方案",
  cutInside: "丰富内切后的传射选择",
  goOutside: "增加外线突破和传中威胁",
  shooting: "提升射门自信和质量",
  finishing: "提高门前处理冷静度",
  crossing: "提升边路最后一传",
  passing: "提高基础传球稳定性",
  creativity: "增加创造性传球和假动作",
  offBall: "优化无球启动时机",
  defensiveWorkRate: "提升回防投入",
  pressing: "提高压迫触发判断",
  tackling: "提升下脚时机和一对一防守",
  interceptions: "加强预判和线路封堵",
  marking: "提升盯人和身后保护",
  physicality: "增强对抗下动作质量",
  holdUpPlay: "提升背身保护和连接",
  riskTaking: "在关键区域承担更多选择",
  tempoControl: "加强节奏变化",
  transitionThreat: "提高反击中的前插意识",
  weakFoot: "加强弱脚传射",
  aerialAbility: "提升争顶和落点判断",
  ballRetention: "减少压力下丢球",
  longPassing: "增加长距离转移能力",
  shortCombination: "提升小范围一脚出球",
  finalThirdDecision: "提高最后一传和射门选择",
  shotStopping: "提升扑救稳定性",
  reflexes: "提升近距离反应速度",
  handling: "提升接球和二点控制",
  keeperDistribution: "提升门将出球选择",
  sweeperKeeping: "提升出击时机和身后空间判断",
};
