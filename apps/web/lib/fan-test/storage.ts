export type FanTestStoredPayload = {
  selectedNationalTeamId: string;
  answers: Record<string, string>;
};

export const fanTestStorageKey = "player-dna-ai:fan-test-result";
