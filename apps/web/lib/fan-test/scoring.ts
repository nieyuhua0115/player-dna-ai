import { fanPersonas } from "../../data/fan-test/personas";
import { fanQuestions } from "../../data/fan-test/questions";
import {
  defaultNationalTeam,
  nationalTeams,
} from "../../data/fan-test/nationalTeams";
import type {
  FanAxis,
  FanOption,
  FanPersonaCode,
  FanTestResult,
} from "../../data/fan-test/types";

export const fanAxes: FanAxis[] = ["H", "C", "S", "T", "E", "I", "L", "W"];

export type FanAnswerInput =
  | Record<string, string | FanOption | undefined>
  | Array<{
      questionId: string;
      optionId?: string;
      option?: FanOption;
    }>;

export type CalculateFanPersonaParams = {
  selectedNationalTeamId: string;
  answers: FanAnswerInput;
};

export function calculateFanPersona({
  selectedNationalTeamId,
  answers,
}: CalculateFanPersonaParams): FanTestResult {
  const scores = createEmptyScores();

  for (const question of fanQuestions) {
    const selectedOption = resolveSelectedOption(question.id, answers);

    if (!selectedOption) {
      continue;
    }

    for (const [axis, effect] of Object.entries(selectedOption.scoreEffects)) {
      if (effect === undefined) {
        continue;
      }

      scores[axis as FanAxis] += effect;
    }
  }

  const code = buildPersonaCode(scores);
  const persona = fanPersonas[code];
  const selectedNationalTeam =
    nationalTeams.find((team) => team.id === selectedNationalTeamId) ??
    defaultNationalTeam;

  return {
    scores,
    code,
    persona,
    selectedNationalTeam,
    axisBreakdown: {
      emotion: {
        leftLabel: "热血",
        rightLabel: "冷静",
        leftCode: "H",
        rightCode: "C",
        ...toPercentPair(scores.H, scores.C),
      },
      aesthetic: {
        leftLabel: "巨星",
        rightLabel: "体系",
        leftCode: "S",
        rightCode: "T",
        ...toPercentPair(scores.S, scores.T),
      },
      expression: {
        leftLabel: "开麦",
        rightLabel: "内心",
        leftCode: "E",
        rightCode: "I",
        ...toPercentPair(scores.E, scores.I),
      },
      loyalty: {
        leftLabel: "忠诚",
        rightLabel: "爽感",
        leftCode: "L",
        rightCode: "W",
        ...toPercentPair(scores.L, scores.W),
      },
    },
    shareLine: buildShareLine(code, persona.title, selectedNationalTeam.roastTitle),
  };
}

function createEmptyScores(): Record<FanAxis, number> {
  return {
    H: 0,
    C: 0,
    S: 0,
    T: 0,
    E: 0,
    I: 0,
    L: 0,
    W: 0,
  };
}

function resolveSelectedOption(
  questionId: string,
  answers: FanAnswerInput,
): FanOption | undefined {
  if (Array.isArray(answers)) {
    const answer = answers.find((candidate) => candidate.questionId === questionId);

    if (!answer) {
      return undefined;
    }

    return (
      answer.option ??
      fanQuestions
        .find((question) => question.id === questionId)
        ?.options.find((option) => option.id === answer.optionId)
    );
  }

  const selectedAnswer = answers[questionId];

  if (!selectedAnswer) {
    return undefined;
  }

  if (typeof selectedAnswer !== "string") {
    return selectedAnswer;
  }

  return fanQuestions
    .find((question) => question.id === questionId)
    ?.options.find((option) => option.id === selectedAnswer);
}

function buildPersonaCode(scores: Record<FanAxis, number>): FanPersonaCode {
  const emotion = scores.H >= scores.C ? "H" : "C";
  const aesthetic = scores.S >= scores.T ? "S" : "T";
  const expression = scores.E >= scores.I ? "E" : "I";
  const loyalty = scores.W >= scores.L ? "W" : "L";

  return `${emotion}${aesthetic}${expression}${loyalty}` as FanPersonaCode;
}

function toPercentPair(
  left: number,
  right: number,
): { leftPercent: number; rightPercent: number } {
  const total = left + right;

  if (total === 0) {
    return { leftPercent: 50, rightPercent: 50 };
  }

  const leftPercent = Math.round((left / total) * 100);

  return {
    leftPercent,
    rightPercent: 100 - leftPercent,
  };
}

function buildShareLine(
  code: FanPersonaCode,
  personaTitle: string,
  nationalTeamRoastTitle: string,
): string {
  const lines: string[] = [];

  lines.push(code.startsWith("H")
    ? "世界杯期间不保证情绪稳定。"
    : "我很冷静，但不代表我不会在心里开会。");

  lines.push(code[2] === "E"
    ? "我看球不发言是不可能的。"
    : "我表面没事，内心已经踢完加时。");

  lines.push(code[3] === "L"
    ? "我不是不想换主队，是青春不允许。"
    : "我的主队随赛程实时更新。");

  return `我是【${personaTitle}】+【${nationalTeamRoastTitle}】。${lines.join("")}`;
}
