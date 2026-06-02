import type { PlayerDNAQuestion, RoleFamily } from "../../lib/scoring/types";
import { commonQuestions } from "./common";
import { defenderQuestions } from "./defender";
import { forwardQuestions } from "./forward";
import { fullbackQuestions } from "./fullback";
import { goalkeeperQuestions } from "./goalkeeper";
import { midfielderQuestions } from "./midfielder";
import { wingerQuestions } from "./winger";

export { commonQuestions } from "./common";

export const roleQuestionMap: Record<RoleFamily, PlayerDNAQuestion[]> = {
  winger: wingerQuestions,
  fullback: fullbackQuestions,
  defender: defenderQuestions,
  forward: forwardQuestions,
  midfielder: midfielderQuestions,
  goalkeeper: goalkeeperQuestions,
};

export function getQuestionsForRole(roleFamily?: RoleFamily): PlayerDNAQuestion[] {
  if (!roleFamily) {
    return commonQuestions;
  }

  return [...commonQuestions, ...roleQuestionMap[roleFamily]];
}
