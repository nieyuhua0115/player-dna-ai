import type { PlayerDNAQuestion } from "../../lib/scoring/types";

export const midfielderQuestions: PlayerDNAQuestion[] = [
  { id: "midfielder_receive", role: "midfielder", text: "你最喜欢在中场哪里接球？", options: [
    { label: "靠后、面向球场", value: "deep", traitEffects: { passing: 10, tempoControl: 12, longPassing: 7 }, tags: ["controller", "deep_lying"] },
    { label: "两线之间的小空间", value: "between_lines", traitEffects: { ballRetention: 8, creativity: 10, shortCombination: 7 }, tags: ["interior_creator"] },
    { label: "靠近对手，准备压迫和对抗", value: "duel_zone", traitEffects: { pressing: 10, defensiveWorkRate: 8, physicality: 5 }, tags: ["box_to_box"] },
    { label: "禁区附近参与最后一脚", value: "near_box", traitEffects: { finalThirdDecision: 9, shooting: 6, offBall: 6 }, tags: ["advanced_midfielder"] },
  ] },
  { id: "midfielder_first_scan", role: "midfielder", text: "接球前你通常先看什么选择？", options: [
    { label: "向前穿透两线的传球", value: "vertical", traitEffects: { passing: 10, riskTaking: 7, finalThirdDecision: 5 }, tags: ["progressor"] },
    { label: "转移到远端空侧", value: "switch", traitEffects: { longPassing: 12, tempoControl: 5 }, tags: ["switcher"] },
    { label: "一脚回做摆脱压力", value: "bounce", traitEffects: { shortCombination: 10, ballRetention: 7 }, tags: ["connector"] },
    { label: "安全回传，保持结构", value: "reset", traitEffects: { tempoControl: 10, ballRetention: 8, riskTaking: -6 }, tags: ["controller"] },
  ] },
  { id: "midfielder_pressure", role: "midfielder", text: "背身接球且有人逼抢时，你会怎么做？", options: [
    { label: "转身带出去", value: "turn_carry", traitEffects: { dribbling: 9, ballRetention: 9, riskTaking: 4 }, tags: ["press_resistant"] },
    { label: "第一时间顺给队友", value: "first_time", traitEffects: { shortCombination: 10, passing: 7 }, tags: ["connector"] },
    { label: "护球吸引身体接触", value: "shield", traitEffects: { physicality: 7, ballRetention: 10 }, tags: ["secure"] },
    { label: "压力到来前提前长传", value: "release_long", traitEffects: { longPassing: 9, finalThirdDecision: 6 }, tags: ["switcher"] },
  ] },
  { id: "midfielder_defensive_work", role: "midfielder", text: "哪种防守动作最让你有成就感？", options: [
    { label: "危险形成前提前拦截", value: "intercept", traitEffects: { interceptions: 14, finalThirdDecision: 5 }, tags: ["reader"] },
    { label: "在中场赢下抢断", value: "tackle", traitEffects: { tackling: 12, physicality: 6 }, tags: ["duel"] },
    { label: "丢球后立刻反抢", value: "counter_press", traitEffects: { pressing: 12, acceleration: 5 }, tags: ["presser"] },
    { label: "一路跟防前插到禁区", value: "track", traitEffects: { marking: 10, defensiveWorkRate: 9 }, tags: ["runner_tracking"] },
  ] },
  { id: "midfielder_tempo", role: "midfielder", text: "你通常怎么改变比赛节奏？", options: [
    { label: "慢下来控住并循环", value: "slow", traitEffects: { tempoControl: 13, ballRetention: 8 }, tags: ["controller"] },
    { label: "用纵向传球提速", value: "vertical", traitEffects: { passing: 9, riskTaking: 7, finalThirdDecision: 6 }, tags: ["progressor"] },
    { label: "带球突破第一道压力", value: "carry", traitEffects: { dribbling: 9, acceleration: 6, ballRetention: 5 }, tags: ["carrier"] },
    { label: "用高强度压迫制造混乱", value: "chaos_press", traitEffects: { pressing: 10, defensiveWorkRate: 8, riskTaking: 4 }, tags: ["box_to_box"] },
  ] },
  { id: "midfielder_final_third", role: "midfielder", text: "到禁区前沿时，你更喜欢哪种处理？", options: [
    { label: "给前插队友塞身后", value: "slip_pass", traitEffects: { creativity: 12, passing: 8, finalThirdDecision: 6 }, tags: ["creator"] },
    { label: "后插上完成射门", value: "late_shot", traitEffects: { offBall: 8, shooting: 9, finishing: 5 }, tags: ["box_arrival"] },
    { label: "小范围连续配合", value: "tight_combo", traitEffects: { shortCombination: 11, ballRetention: 6 }, tags: ["connector"] },
    { label: "回做并保持压制", value: "recycle", traitEffects: { tempoControl: 9, passing: 6, riskTaking: -4 }, tags: ["controller"] },
  ] },
  { id: "midfielder_carrying", role: "midfielder", text: "身前出现推进空间时，你会怎么做？", options: [
    { label: "直接带球穿过中场", value: "drive", traitEffects: { dribbling: 9, acceleration: 8, transitionThreat: 6 }, tags: ["carrier"] },
    { label: "吸引压力后再传", value: "draw_pass", traitEffects: { ballRetention: 8, passing: 8, creativity: 5 }, tags: ["manipulator"] },
    { label: "尝试远射", value: "long_shot", traitEffects: { shooting: 10, riskTaking: 6 }, tags: ["advanced_midfielder"] },
    { label: "尽早转移到另一侧", value: "switch_early", traitEffects: { longPassing: 11, tempoControl: 5 }, tags: ["switcher"] },
  ] },
  { id: "midfielder_role_in_possession", role: "midfielder", text: "球队长时间控球时，你的主要任务是什么？", options: [
    { label: "成为节奏控制点", value: "rhythm", traitEffects: { tempoControl: 13, passing: 9 }, tags: ["controller"] },
    { label: "寻找致命传球", value: "killer_pass", traitEffects: { creativity: 12, riskTaking: 7 }, tags: ["creator"] },
    { label: "不断提供短接应角度", value: "angles", traitEffects: { shortCombination: 9, ballRetention: 8 }, tags: ["connector"] },
    { label: "边路起球时进入禁区", value: "box", traitEffects: { offBall: 9, finishing: 5 }, tags: ["box_arrival"] },
  ] },
  { id: "midfielder_role_out_of_possession", role: "midfielder", text: "防守时，哪种职责最自然？", options: [
    { label: "保护后防线身前区域", value: "screen", traitEffects: { interceptions: 10, marking: 8, tempoControl: 4 }, tags: ["deep_lying"] },
    { label: "上抢压迫对方后腰", value: "jump_pivot", traitEffects: { pressing: 11, defensiveWorkRate: 7 }, tags: ["presser"] },
    { label: "补边后卫和边路通道", value: "cover_wide", traitEffects: { defensiveWorkRate: 9, pace: 5, tackling: 5 }, tags: ["box_to_box"] },
    { label: "跟防前插球员进禁区", value: "track_box", traitEffects: { marking: 11, defensiveWorkRate: 7 }, tags: ["runner_tracking"] },
  ] },
  { id: "midfielder_long_range", role: "midfielder", text: "长传或远射在你的比赛里重要吗？", options: [
    { label: "长距离斜传是武器", value: "diagonals", traitEffects: { longPassing: 13, passing: 5 }, tags: ["switcher"] },
    { label: "远射是我的常规选择", value: "long_shots", traitEffects: { shooting: 11, riskTaking: 6 }, tags: ["advanced_midfielder"] },
    { label: "我更喜欢短传配合", value: "short", traitEffects: { shortCombination: 10, ballRetention: 7 }, tags: ["connector"] },
    { label: "我很少强行做长距离动作", value: "rarely", traitEffects: { tempoControl: 7, riskTaking: -5 }, tags: ["controller"] },
  ] },
  { id: "midfielder_identity", role: "midfielder", text: "哪种中场身份最接近你？", options: [
    { label: "节奏控制者", value: "controller", traitEffects: { tempoControl: 14, passing: 9, ballRetention: 8 }, tags: ["controller"] },
    { label: "B2B 高压中场", value: "box_to_box", traitEffects: { pressing: 11, defensiveWorkRate: 10, transitionThreat: 6 }, tags: ["box_to_box"] },
    { label: "创造型内锋/前腰", value: "creative", traitEffects: { creativity: 12, shortCombination: 9, finalThirdDecision: 6 }, tags: ["interior_creator"] },
    { label: "拖后推进者", value: "progressor", traitEffects: { longPassing: 10, interceptions: 6, passing: 8 }, tags: ["deep_lying", "progressor"] },
  ] },
  { id: "midfielder_best_teammate", role: "midfielder", text: "哪种队友跑动最能帮助你？", options: [
    { label: "边锋拉开宽度，方便我转移", value: "wide_switch", traitEffects: { longPassing: 8, tempoControl: 5 }, tags: ["switcher"] },
    { label: "前锋回撤做撞墙配合", value: "wall_pass", traitEffects: { shortCombination: 8, passing: 6 }, tags: ["connector"] },
    { label: "有人冲击防线身后", value: "runners", traitEffects: { creativity: 8, finalThirdDecision: 6 }, tags: ["creator"] },
    { label: "后卫给我安全回做线路", value: "recycle_lanes", traitEffects: { ballRetention: 7, tempoControl: 7 }, tags: ["controller"] },
  ] },
];
