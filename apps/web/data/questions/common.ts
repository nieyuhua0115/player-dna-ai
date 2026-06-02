import type { PlayerDNAQuestion } from "../../lib/scoring/types";

export const commonQuestions: PlayerDNAQuestion[] = [
  {
    id: "strong_foot",
    role: "common",
    text: "你的主要决策通常由哪只脚主导？",
    options: [
      { label: "右脚", value: "right", traitEffects: {}, tags: ["right_foot"] },
      { label: "左脚", value: "left", traitEffects: {}, tags: ["left_foot"] },
      { label: "左右脚都比较自然", value: "both", traitEffects: { weakFoot: 16 }, tags: ["two_footed"] },
    ],
  },
  {
    id: "preferred_zone",
    role: "common",
    text: "你最喜欢在哪个区域影响比赛？",
    options: [
      { label: "左路宽区域", value: "left_wide", traitEffects: { cutInside: 5, crossing: 4 }, tags: ["left_zone"] },
      { label: "右路宽区域", value: "right_wide", traitEffects: { cutInside: 5, crossing: 4 }, tags: ["right_zone"] },
      { label: "中路和肋部", value: "central", traitEffects: { passing: 6, tempoControl: 5 }, tags: ["central_zone"] },
      { label: "禁区附近", value: "box", traitEffects: { finishing: 7, offBall: 5 }, tags: ["box_zone"] },
      { label: "球门和小禁区", value: "goal", traitEffects: { shotStopping: 8, handling: 6 }, tags: ["goal_zone"] },
    ],
  },
  {
    id: "pressure_response",
    role: "common",
    text: "对手快速逼抢上来时，你第一反应是什么？",
    options: [
      { label: "转身带出去", value: "turn_carry", traitEffects: { dribbling: 9, ballRetention: 7, riskTaking: 4 }, tags: ["press_resistant", "carrier"] },
      { label: "一脚出球给队友", value: "one_touch", traitEffects: { shortCombination: 9, passing: 6, tempoControl: 4 }, tags: ["connector"] },
      { label: "护住球，等队友接应", value: "shield", traitEffects: { physicality: 8, holdUpPlay: 7, ballRetention: 6 }, tags: ["secure"] },
      { label: "提前解围或转移危险", value: "clear_switch", traitEffects: { longPassing: 8, finalThirdDecision: 5, riskTaking: -3 }, tags: ["safety_first"] },
    ],
  },
  {
    id: "game_speed",
    role: "common",
    text: "哪种比赛节奏最适合你？",
    options: [
      { label: "快速转换，尽早向前", value: "fast", traitEffects: { pace: 6, acceleration: 6, transitionThreat: 10 }, tags: ["transition"] },
      { label: "控球推进，耐心循环", value: "controlled", traitEffects: { tempoControl: 11, passing: 7, ballRetention: 6 }, tags: ["controller"] },
      { label: "反复压迫，争第二点", value: "pressing", traitEffects: { pressing: 10, defensiveWorkRate: 8, physicality: 4 }, tags: ["presser"] },
      { label: "等待决定性一脚", value: "decisive", traitEffects: { finalThirdDecision: 8, riskTaking: 5, creativity: 4 }, tags: ["decisive"] },
    ],
  },
  {
    id: "risk_preference",
    role: "common",
    text: "一个困难但很有威胁的选择出现了，你会怎么做？",
    options: [
      { label: "马上尝试", value: "take_risk", traitEffects: { riskTaking: 13, creativity: 7 }, tags: ["high_risk"] },
      { label: "先晃出角度，再处理", value: "create_angle", traitEffects: { dribbling: 6, creativity: 6, finalThirdDecision: 6 }, tags: ["creator"] },
      { label: "通过配合创造更干净的线路", value: "combine", traitEffects: { shortCombination: 8, passing: 7 }, tags: ["combination"] },
      { label: "先保住球，重新组织", value: "reset", traitEffects: { ballRetention: 9, tempoControl: 8, riskTaking: -6 }, tags: ["controller"] },
    ],
  },
  {
    id: "defensive_instinct",
    role: "common",
    text: "本方丢球后，你通常会怎么做？",
    options: [
      { label: "立刻就地反抢", value: "counter_press", traitEffects: { pressing: 12, defensiveWorkRate: 9, acceleration: 4 }, tags: ["presser"] },
      { label: "先回到防守阵型", value: "recover_shape", traitEffects: { defensiveWorkRate: 8, marking: 7, tempoControl: 3 }, tags: ["positionally_safe"] },
      { label: "盯住最危险的前插人", value: "track_runner", traitEffects: { marking: 10, interceptions: 6, pace: 4 }, tags: ["runner_tracking"] },
      { label: "留在前面准备接反击出口", value: "outlet", traitEffects: { offBall: 7, transitionThreat: 6, ballRetention: 3 }, tags: ["outlet"] },
    ],
  },
  {
    id: "communication_style",
    role: "common",
    text: "你通常怎么帮助身边队友？",
    options: [
      { label: "组织站位，提醒跑位", value: "organize", traitEffects: { marking: 6, tempoControl: 6, finalThirdDecision: 4 }, tags: ["organizer"] },
      { label: "提供安全接应角度", value: "support_angle", traitEffects: { passing: 7, ballRetention: 6, shortCombination: 5 }, tags: ["connector"] },
      { label: "用无球跑动带走防守人", value: "drag_runs", traitEffects: { offBall: 8, transitionThreat: 5 }, tags: ["runner"] },
      { label: "用对抗和强度带动队友", value: "duel_leader", traitEffects: { physicality: 8, pressing: 5, tackling: 5 }, tags: ["duel"] },
    ],
  },
  {
    id: "primary_role",
    role: "common",
    text: "你平时主要踢什么角色？",
    description: "选择后会进入更适合你位置的场景题。",
    options: [
      { label: "边锋", value: "winger", traitEffects: { pace: 7, dribbling: 7, oneVsOne: 5 }, tags: ["role_winger"] },
      { label: "后卫", value: "defender", traitEffects: { tackling: 8, marking: 8, interceptions: 6 }, tags: ["role_defender"] },
      { label: "前锋", value: "forward", traitEffects: { finishing: 9, shooting: 6, offBall: 6 }, tags: ["role_forward"] },
      { label: "中场", value: "midfielder", traitEffects: { passing: 8, tempoControl: 7, ballRetention: 5 }, tags: ["role_midfielder"] },
      { label: "门将", value: "goalkeeper", traitEffects: { shotStopping: 10, reflexes: 8, handling: 6 }, tags: ["role_goalkeeper"] },
    ],
  },
];
