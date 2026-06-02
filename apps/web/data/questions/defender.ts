import type { PlayerDNAQuestion } from "../../lib/scoring/types";

export const defenderQuestions: PlayerDNAQuestion[] = [
  { id: "defender_home_zone", role: "defender", text: "你最自然的防守活动区域是哪一种？", options: [
    { label: "边路后卫，能套上参与进攻", value: "wide_overlap", traitEffects: { pace: 8, goOutside: 8, crossing: 7, defensiveWorkRate: 6 }, tags: ["overlap", "touchline", "role_fullback"] },
    { label: "边路后卫，主要锁死对方边锋", value: "wide_lockdown", traitEffects: { pace: 6, tackling: 9, marking: 9, defensiveWorkRate: 7 }, tags: ["lockdown", "runner_tracking", "role_fullback"] },
    { label: "中卫，喜欢提前上抢对抗", value: "central_stopper", traitEffects: { tackling: 10, physicality: 8, interceptions: 7 }, tags: ["front_foot", "duel", "role_center_back"] },
    { label: "中卫，负责保护身后空间", value: "central_cover", traitEffects: { pace: 7, marking: 10, finalThirdDecision: 6 }, tags: ["cover_defender", "role_center_back"] },
    { label: "中卫，喜欢从后场出球组织", value: "central_progressor", traitEffects: { passing: 9, longPassing: 8, ballRetention: 6 }, tags: ["progressor", "role_center_back"] },
  ] },
  { id: "defender_first_duel", role: "defender", text: "前锋背身接球时，你第一步通常怎么做？", options: [
    { label: "贴紧上身体", value: "tight_contact", traitEffects: { physicality: 10, tackling: 10, marking: 7 }, tags: ["front_foot", "duel"] },
    { label: "卡住位置，不让他转身", value: "delay_turn", traitEffects: { marking: 12, finalThirdDecision: 6 }, tags: ["positionally_safe"] },
    { label: "预判他做球的线路", value: "anticipate_layoff", traitEffects: { interceptions: 13, marking: 5 }, tags: ["reader"] },
    { label: "先退一步保护纵深", value: "protect_depth", traitEffects: { marking: 9, pace: 5, riskTaking: -4 }, tags: ["cover_defender"] },
  ] },
  { id: "defender_high_line", role: "defender", text: "球队打高位防线时，哪种职责更适合你？", options: [
    { label: "提前攻击来球", value: "attack_ball", traitEffects: { interceptions: 11, acceleration: 5, riskTaking: 5 }, tags: ["front_foot"] },
    { label: "保护防线身后空间", value: "cover_space", traitEffects: { pace: 8, marking: 8, finalThirdDecision: 5 }, tags: ["cover_defender"] },
    { label: "组织防线，指挥造越位", value: "organize_line", traitEffects: { marking: 10, tempoControl: 5, finalThirdDecision: 7 }, tags: ["organizer"] },
    { label: "我更适合紧凑低位防守", value: "compact", traitEffects: { aerialAbility: 6, shotStopping: 0, marking: 8, riskTaking: -5 }, tags: ["box_defender"] },
  ] },
  { id: "defender_on_ball", role: "defender", text: "你有时间拿球时，通常怎么推进？", options: [
    { label: "直塞或纵传给中场", value: "vertical_pass", traitEffects: { passing: 10, longPassing: 7, riskTaking: 5 }, tags: ["progressor"] },
    { label: "大范围转移到远端", value: "diagonal", traitEffects: { longPassing: 13, tempoControl: 5 }, tags: ["switcher"] },
    { label: "自己带球向前，等对手上来", value: "carry_forward", traitEffects: { dribbling: 7, ballRetention: 7, passing: 5 }, tags: ["carrier"] },
    { label: "安全短传，保持阵型", value: "secure_reset", traitEffects: { passing: 7, ballRetention: 8, riskTaking: -5 }, tags: ["secure"] },
  ] },
  { id: "defender_cross_defense", role: "defender", text: "对方传中进禁区时，你最关注什么？", options: [
    { label: "主动攻击第一落点", value: "first_ball", traitEffects: { aerialAbility: 14, physicality: 6 }, tags: ["commanding"] },
    { label: "盯住前锋的跑位", value: "track_striker", traitEffects: { marking: 13, finalThirdDecision: 5 }, tags: ["runner_tracking"] },
    { label: "保护第二落点区域", value: "second_ball", traitEffects: { interceptions: 9, defensiveWorkRate: 7 }, tags: ["reader"] },
    { label: "保持站位，配合门将处理", value: "hold_line", traitEffects: { marking: 9, riskTaking: -4 }, tags: ["positionally_safe"] },
  ] },
  { id: "defender_recovery", role: "defender", text: "前锋冲到你身后的肋部，什么能力最能救场？", options: [
    { label: "回追速度和身体压迫", value: "recovery_sprint", traitEffects: { pace: 10, physicality: 7, tackling: 5 }, tags: ["cover_defender"] },
    { label: "提前卡位，不让他启动", value: "body_position", traitEffects: { marking: 11, interceptions: 6 }, tags: ["reader"] },
    { label: "最后时刻铲断", value: "last_tackle", traitEffects: { tackling: 13, riskTaking: 6 }, tags: ["front_foot"] },
    { label: "拖住他，等队友回防", value: "delay_help", traitEffects: { finalThirdDecision: 8, marking: 7, riskTaking: -4 }, tags: ["positionally_safe"] },
  ] },
  { id: "defender_set_pieces", role: "defender", text: "进攻定位球时，你更像什么角色？", options: [
    { label: "主攻头球", value: "main_header", traitEffects: { aerialAbility: 13, physicality: 7, finishing: 4 }, tags: ["commanding"] },
    { label: "帮队友做掩护", value: "screen", traitEffects: { physicality: 9, finalThirdDecision: 5 }, tags: ["duel"] },
    { label: "留在后面防反击", value: "stay_back", traitEffects: { marking: 9, interceptions: 6, defensiveWorkRate: 5 }, tags: ["positionally_safe"] },
  ] },
  { id: "defender_pressing", role: "defender", text: "中场出现松散传球时，你会怎么反应？", options: [
    { label: "上抢拦截", value: "step_intercept", traitEffects: { interceptions: 13, acceleration: 5, riskTaking: 4 }, tags: ["front_foot"] },
    { label: "指挥中场队友去压迫", value: "organize", traitEffects: { marking: 8, tempoControl: 5, finalThirdDecision: 5 }, tags: ["organizer"] },
    { label: "保持后防线", value: "hold_line", traitEffects: { marking: 10, riskTaking: -5 }, tags: ["positionally_safe"] },
    { label: "跟住接球人", value: "follow", traitEffects: { marking: 11, tackling: 6 }, tags: ["duel"] },
  ] },
  { id: "defender_under_press", role: "defender", text: "前锋压迫你的第一脚处理时，你相信什么？", options: [
    { label: "从压力中传出去", value: "play_through", traitEffects: { passing: 9, ballRetention: 8, riskTaking: 5 }, tags: ["progressor"] },
    { label: "提前大范围转移", value: "switch_early", traitEffects: { longPassing: 11, finalThirdDecision: 5 }, tags: ["switcher"] },
    { label: "回传门将重新组织", value: "keeper_reset", traitEffects: { passing: 7, tempoControl: 5, riskTaking: -3 }, tags: ["secure"] },
    { label: "直接解围到边路通道", value: "clear_channel", traitEffects: { longPassing: 7, riskTaking: -6 }, tags: ["safety_first"] },
  ] },
  { id: "defender_line_role", role: "defender", text: "你在防线里最能帮助球队的角色是什么？", options: [
    { label: "当保护身后的补位者", value: "covering", traitEffects: { pace: 7, marking: 8, finalThirdDecision: 6 }, tags: ["cover_defender"] },
    { label: "当主动上抢的人", value: "aggressive", traitEffects: { tackling: 9, interceptions: 8, riskTaking: 5 }, tags: ["front_foot"] },
    { label: "当控球时的边路出球点", value: "wide_outlet", traitEffects: { crossing: 7, ballRetention: 6, passing: 6 }, tags: ["role_fullback", "touchline"] },
    { label: "当组织防线的人", value: "organizer", traitEffects: { marking: 8, finalThirdDecision: 6, tempoControl: 4 }, tags: ["organizer"] },
  ] },
  { id: "defender_identity", role: "defender", text: "哪种后卫身份最接近你？", options: [
    { label: "出球型中卫", value: "ball_player", traitEffects: { passing: 11, longPassing: 11, ballRetention: 7 }, tags: ["progressor"] },
    { label: "制空型后卫", value: "commanding", traitEffects: { aerialAbility: 14, physicality: 8, marking: 7 }, tags: ["commanding"] },
    { label: "前顶型拦截者", value: "stopper", traitEffects: { tackling: 12, interceptions: 10, riskTaking: 5 }, tags: ["front_foot"] },
    { label: "补位型后卫", value: "cover", traitEffects: { pace: 9, marking: 10, finalThirdDecision: 7 }, tags: ["cover_defender"] },
  ] },
  { id: "defender_best_system", role: "defender", text: "哪种防守体系最适合你？", options: [
    { label: "高位防线，主动上抢", value: "high_line", traitEffects: { interceptions: 9, pace: 6, riskTaking: 5 }, tags: ["front_foot"] },
    { label: "控球队，需要后场出球", value: "possession", traitEffects: { passing: 10, longPassing: 8, ballRetention: 5 }, tags: ["progressor"] },
    { label: "紧凑防守，保护禁区", value: "compact_block", traitEffects: { marking: 10, aerialAbility: 8, riskTaking: -5 }, tags: ["box_defender"] },
    { label: "人盯人和强对抗", value: "man_oriented", traitEffects: { marking: 12, tackling: 7, physicality: 5 }, tags: ["duel"] },
  ] },
];
