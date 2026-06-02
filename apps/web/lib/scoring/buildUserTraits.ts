import {
  clampTraitScore,
  createNeutralTraitVector,
  isTraitKey,
} from "@player-dna/player-matching";
import type { Language } from "./traitCopy";
import type {
  PlayerDNAAnswerMap,
  PlayerDNAQuestion,
  RoleFamily,
  StrongFoot,
  UserTraitProfile,
} from "./types";

export function buildUserTraits(
  questions: PlayerDNAQuestion[],
  answers: PlayerDNAAnswerMap,
  roleFamily: RoleFamily,
): UserTraitProfile {
  const traits = createNeutralTraitVector();
  const tags: string[] = [];
  const preferredZones: string[] = [];
  let strongFoot: StrongFoot | undefined;

  for (const question of questions) {
    const values = answers[question.id] ?? [];

    for (const value of values) {
      const option = question.options.find((candidate) => candidate.value === value);

      if (!option) {
        continue;
      }

      for (const [traitKey, effect] of Object.entries(option.traitEffects)) {
        if (isTraitKey(traitKey) && effect !== undefined) {
          traits[traitKey] = clampTraitScore(traits[traitKey] + effect);
        }
      }

      tags.push(...(option.tags ?? []));

      if (question.id === "strong_foot" && isStrongFoot(value)) {
        strongFoot = value;
      }

      if (question.id === "preferred_zone") {
        preferredZones.push(value);
      }
    }
  }

  return {
    roleFamily,
    strongFoot,
    preferredZones: Array.from(new Set(preferredZones)),
    traits,
    tags: Array.from(new Set(tags)),
  };
}

export function inferUserArchetype(
  userProfile: UserTraitProfile,
  language: Language = "zh",
): string {
  const { roleFamily, tags, traits } = userProfile;

  if (roleFamily === "goalkeeper") {
    return traits.keeperDistribution >= 66 || traits.sweeperKeeping >= 66
      ? language === "zh" ? "现代清道夫门将" : "Modern Sweeper Keeper"
      : language === "zh" ? "指挥型扑救门将" : "Commanding Shot Stopper";
  }

  if (roleFamily === "fullback") {
    return tags.includes("inverted") || traits.longPassing >= 66
      ? language === "zh" ? "内收推进型边后卫" : "Inverted Progressor"
      : language === "zh" ? "套边进攻型边后卫" : "Overlapping Fullback";
  }

  if (roleFamily === "defender") {
    return traits.longPassing >= 66 || tags.includes("progressor")
      ? language === "zh" ? "出球型后卫" : "Ball-playing Defender"
      : traits.aerialAbility >= 66 || tags.includes("commanding")
        ? language === "zh" ? "禁区指挥型后卫" : "Commanding Box Defender"
        : language === "zh" ? "前顶拦截型后卫" : "Front-foot Stopper";
  }

  if (roleFamily === "forward") {
    return traits.holdUpPlay >= 66
      ? language === "zh" ? "连接型前锋" : "Link-up Forward"
      : traits.offBall >= 66
        ? language === "zh" ? "禁区前插型前锋" : "Box Crasher"
        : language === "zh" ? "肋部冲刺型前锋" : "Channel Runner";
  }

  if (roleFamily === "midfielder") {
    return traits.tempoControl >= 66
      ? language === "zh" ? "节奏控制型中场" : "Tempo Controller"
      : traits.pressing >= 66
        ? language === "zh" ? "高压八号位" : "Pressing Eight"
        : language === "zh" ? "前场连接型中场" : "Final-third Connector";
  }

  return traits.cutInside >= 66
    ? language === "zh" ? "内切创造型边锋" : "Inverted Creator"
    : language === "zh" ? "爆发型边路推进手" : "Explosive Wide Carrier";
}

function isStrongFoot(value: string): value is StrongFoot {
  return value === "left" || value === "right" || value === "both";
}
