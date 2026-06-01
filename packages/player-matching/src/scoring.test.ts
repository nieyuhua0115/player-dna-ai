import { describe, expect, it } from "vitest";
import { createTraitVector } from "./traits";
import { buildUserStyleProfile, generatePlayerDNAResult } from "./scoring";
import type { PlayerProfile, Question } from "./types";

const questions: Question[] = [
  {
    id: "style",
    text: "Style",
    type: "single",
    category: "attack",
    options: [
      {
        id: "explosive",
        label: "Explosive",
        traitEffects: {
          pace: 25,
          acceleration: 20,
          dribbling: 18,
          transitionThreat: 20,
        },
        metadataEffects: {
          positionGroup: "winger",
          roles: ["wide-carrier"],
          zones: ["wide"],
        },
      },
      {
        id: "controller",
        label: "Controller",
        traitEffects: {
          passing: 22,
          tempoControl: 24,
          ballRetention: 20,
          shortCombination: 18,
        },
        metadataEffects: {
          positionGroup: "midfielder",
          roles: ["controller"],
          zones: ["central"],
        },
      },
    ],
  },
];

const players: PlayerProfile[] = [
  {
    id: "wide-runner",
    name: "Wide Runner",
    positionGroup: "winger",
    positions: ["LW"],
    preferredFoot: "right",
    roles: ["wide-carrier"],
    zones: ["wide"],
    archetypes: ["Explosive Wide Carrier"],
    traits: createTraitVector({
      pace: 78,
      acceleration: 74,
      dribbling: 72,
      transitionThreat: 76,
    }),
    strengths: [],
    tacticalFit: [],
    summarySeed: "",
  },
  {
    id: "tempo-midfielder",
    name: "Tempo Midfielder",
    positionGroup: "midfielder",
    positions: ["CM"],
    preferredFoot: "right",
    roles: ["controller"],
    zones: ["central"],
    archetypes: ["Tempo Controller"],
    traits: createTraitVector({
      passing: 78,
      tempoControl: 80,
      ballRetention: 76,
      shortCombination: 74,
    }),
    strengths: [],
    tacticalFit: [],
    summarySeed: "",
  },
];

describe("player matching scoring", () => {
  it("matches explosive wide answers to the wide runner profile", () => {
    const userProfile = buildUserStyleProfile(questions, {
      style: ["explosive"],
    });
    const result = generatePlayerDNAResult(userProfile, players);

    expect(result.topMatch.player.id).toBe("wide-runner");
    expect(result.archetype).toBe("Explosive Wide Carrier");
  });

  it("matches controller answers to the tempo midfielder profile", () => {
    const userProfile = buildUserStyleProfile(questions, {
      style: ["controller"],
    });
    const result = generatePlayerDNAResult(userProfile, players);

    expect(result.topMatch.player.id).toBe("tempo-midfielder");
    expect(result.archetype).toBe("Tempo Controller");
  });
});
