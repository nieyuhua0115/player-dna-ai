export type FanAxis = "H" | "C" | "S" | "T" | "E" | "I" | "L" | "W";

export type FanScoreEffects = Partial<Record<FanAxis, number>>;

export type FanOption = {
  id: string;
  label: string;
  description?: string;
  scoreEffects: FanScoreEffects;
  tags?: string[];
};

export type FanQuestion = {
  id: string;
  text: string;
  subtitle?: string;
  options: FanOption[];
};

export type FanPersonaCode =
  | "HSEL"
  | "HSEW"
  | "HSIL"
  | "HSIW"
  | "HTEL"
  | "HTEW"
  | "HTIL"
  | "HTIW"
  | "CSEL"
  | "CSEW"
  | "CSIL"
  | "CSIW"
  | "CTEL"
  | "CTEW"
  | "CTIL"
  | "CTIW";

export type FanPersona = {
  code: FanPersonaCode;
  title: string;
  subtitle: string;
  keywords: string[];
  description: string;
  footballQuote: string;
  breakdownMoment: string;
  friendCircleCopy: string;
  ratings: {
    passion: number;
    tactics: number;
    memeEnergy: number;
    loyalty: number;
    chaos: number;
  };
};

export type NationalTeamBias = {
  id: string;
  name: string;
  label: string;
  roastTitle: string;
  roastDescription: string;
  keywords: string[];
  warningLabel: string;
};

export type FanAxisBreakdownPair = {
  leftLabel: string;
  rightLabel: string;
  leftCode: FanAxis;
  rightCode: FanAxis;
  leftPercent: number;
  rightPercent: number;
};

export type FanTestResult = {
  scores: Record<FanAxis, number>;
  code: FanPersonaCode;
  persona: FanPersona;
  selectedNationalTeam: NationalTeamBias;
  axisBreakdown: {
    emotion: FanAxisBreakdownPair & {
      leftLabel: "热血";
      rightLabel: "冷静";
      leftCode: "H";
      rightCode: "C";
    };
    aesthetic: FanAxisBreakdownPair & {
      leftLabel: "巨星";
      rightLabel: "体系";
      leftCode: "S";
      rightCode: "T";
    };
    expression: FanAxisBreakdownPair & {
      leftLabel: "开麦";
      rightLabel: "内心";
      leftCode: "E";
      rightCode: "I";
    };
    loyalty: FanAxisBreakdownPair & {
      leftLabel: "忠诚";
      rightLabel: "爽感";
      leftCode: "L";
      rightCode: "W";
    };
  };
  shareLine: string;
};
