import type { PlayerDNAQuestion } from "../../lib/scoring/types";

export const wingerQuestions: PlayerDNAQuestion[] = [
  { id: "winger_take_on_style", role: "winger", text: "你在边路接球，面前只有一个防守人，第一反应是什么？", options: [
    { label: "立刻一对一强突", value: "attack_1v1", traitEffects: { oneVsOne: 18, dribbling: 12, riskTaking: 10 }, tags: ["direct", "wide_isolation"] },
    { label: "内切寻找射门或配合", value: "cut_inside", traitEffects: { cutInside: 18, shooting: 8, creativity: 8 }, tags: ["inverted_winger"] },
    { label: "等边后卫套上后配合", value: "overlap_combo", traitEffects: { passing: 9, shortCombination: 10, crossing: 5 }, tags: ["combination"] },
    { label: "走外线下底传中", value: "outside_cross", traitEffects: { goOutside: 18, crossing: 12, pace: 5 }, tags: ["touchline", "provider"] },
  ] },
  { id: "winger_space", role: "winger", text: "你最希望队友给你创造哪种空间？", options: [
    { label: "边路单挑空间", value: "isolation", traitEffects: { oneVsOne: 12, dribbling: 8 }, tags: ["wide_isolation"] },
    { label: "内侧身后冲刺通道", value: "inside_channel", traitEffects: { offBall: 10, transitionThreat: 10, finishing: 5 }, tags: ["runner"] },
    { label: "肋部小空间拿球", value: "half_space", traitEffects: { creativity: 10, passing: 8, ballRetention: 5 }, tags: ["half_space"] },
    { label: "贴边拉宽空间", value: "touchline", traitEffects: { goOutside: 12, crossing: 8 }, tags: ["touchline"] },
  ] },
  { id: "winger_final_action", role: "winger", text: "你最喜欢的边路最后一脚是什么？", options: [
    { label: "低平倒三角", value: "cutback", traitEffects: { crossing: 12, finalThirdDecision: 8 }, tags: ["cutback"] },
    { label: "内切兜远角", value: "far_post_shot", traitEffects: { cutInside: 10, shooting: 10, finishing: 6 }, tags: ["inverted_winger"] },
    { label: "塞防线身后的小直传", value: "slip_pass", traitEffects: { creativity: 12, passing: 8 }, tags: ["creator"] },
    { label: "强行下底制造传中", value: "byline", traitEffects: { goOutside: 12, pace: 6, crossing: 8 }, tags: ["direct"] },
  ] },
  { id: "winger_press", role: "winger", text: "你会怎么压迫对方边后卫？", options: [
    { label: "冲上去把他逼到边线", value: "trap_line", traitEffects: { pressing: 11, acceleration: 7 }, tags: ["presser"] },
    { label: "弧线跑位封住内线传球", value: "curve_press", traitEffects: { pressing: 9, finalThirdDecision: 5 }, tags: ["smart_press"] },
    { label: "回撤保护自己的边后卫", value: "track_back", traitEffects: { defensiveWorkRate: 12, marking: 7 }, tags: ["two_way"] },
    { label: "留在高位准备反击出口", value: "stay_high", traitEffects: { transitionThreat: 10, offBall: 6, defensiveWorkRate: -4 }, tags: ["outlet"] },
  ] },
  { id: "winger_tempo", role: "winger", text: "过掉第一个防守人后，你下一步通常做什么？", options: [
    { label: "继续二次加速", value: "second_burst", traitEffects: { acceleration: 12, pace: 8, transitionThreat: 6 }, tags: ["explosive"] },
    { label: "慢下来吸引下一个防守人", value: "draw_defender", traitEffects: { ballRetention: 9, creativity: 7 }, tags: ["manipulator"] },
    { label: "尽早把球传出去", value: "early_release", traitEffects: { finalThirdDecision: 8, passing: 7 }, tags: ["connector"] },
    { label: "直接冲进禁区", value: "attack_box", traitEffects: { finishing: 8, offBall: 6, shooting: 6 }, tags: ["scorer"] },
  ] },
  { id: "winger_weak_side", role: "winger", text: "球来到你相对不舒服的一侧时，你倾向怎么处理？", options: [
    { label: "照样用弱脚射门或传球", value: "use_weak", traitEffects: { weakFoot: 12, finalThirdDecision: 4 }, tags: ["two_footed"] },
    { label: "调整回惯用脚", value: "shift", traitEffects: { ballRetention: 6, weakFoot: -5 }, tags: ["strong_footed"] },
    { label: "快速和队友做配合", value: "quick_combo", traitEffects: { shortCombination: 8, passing: 6 }, tags: ["combination"] },
  ] },
  { id: "winger_cross_type", role: "winger", text: "哪种传中或传球最像你的习惯？", options: [
    { label: "弧线传中", value: "whipped", traitEffects: { crossing: 12, goOutside: 6 }, tags: ["provider"] },
    { label: "地面倒三角", value: "ground_cutback", traitEffects: { crossing: 10, finalThirdDecision: 6 }, tags: ["cutback"] },
    { label: "反向传到内侧", value: "reverse", traitEffects: { creativity: 10, passing: 8 }, tags: ["creator"] },
  ] },
  { id: "winger_defender_body", role: "winger", text: "防守人故意放你走外线，你会怎么做？", options: [
    { label: "接受空间，直接外线加速", value: "race_outside", traitEffects: { pace: 9, goOutside: 12 }, tags: ["touchline"] },
    { label: "假装走外线，然后内切", value: "fake_cut", traitEffects: { cutInside: 12, dribbling: 8 }, tags: ["inverted_winger"] },
    { label: "撞墙配合后无球前插", value: "bounce_spin", traitEffects: { shortCombination: 8, offBall: 8 }, tags: ["combination"] },
  ] },
  { id: "winger_transition", role: "winger", text: "反击时，你最自然的跑动路线是哪条？", options: [
    { label: "直接冲防线身后", value: "beyond", traitEffects: { transitionThreat: 14, pace: 8, offBall: 6 }, tags: ["runner"] },
    { label: "从中线附近带球推进", value: "carry_halfway", traitEffects: { dribbling: 10, pace: 8 }, tags: ["carrier"] },
    { label: "后点或禁区弧附近后插上", value: "late_arrive", traitEffects: { offBall: 9, finishing: 7 }, tags: ["box_arrival"] },
  ] },
  { id: "winger_composure", role: "winger", text: "禁区附近两个防守人夹过来，你会怎么处理？", options: [
    { label: "尝试从中间钻过去", value: "split", traitEffects: { dribbling: 12, riskTaking: 9 }, tags: ["direct"] },
    { label: "护球造犯规或回做", value: "recycle", traitEffects: { ballRetention: 10, tempoControl: 6 }, tags: ["secure"] },
    { label: "找第三人前插", value: "third_man", traitEffects: { creativity: 10, shortCombination: 8 }, tags: ["creator"] },
  ] },
  { id: "winger_identity", role: "winger", text: "哪种边锋身份最接近你？", options: [
    { label: "爆发型贴边突击手", value: "explosive", traitEffects: { pace: 12, acceleration: 10, goOutside: 8 }, tags: ["direct"] },
    { label: "内切得分手", value: "inverted", traitEffects: { cutInside: 12, shooting: 10, finishing: 7 }, tags: ["inverted_winger"] },
    { label: "边路创造者", value: "creator", traitEffects: { creativity: 10, crossing: 8, passing: 7 }, tags: ["creator"] },
  ] },
  { id: "winger_support", role: "winger", text: "你最希望身边队友怎么支持你？", options: [
    { label: "边后卫套边", value: "overlap", traitEffects: { shortCombination: 6, finalThirdDecision: 5 }, tags: ["overlap_user"] },
    { label: "中锋压住中卫，给我单挑空间", value: "pinned_cb", traitEffects: { oneVsOne: 6, finishing: 4 }, tags: ["isolation"] },
    { label: "中场靠近我做小配合", value: "mid_close", traitEffects: { passing: 7, ballRetention: 6 }, tags: ["combination"] },
  ] },
];
