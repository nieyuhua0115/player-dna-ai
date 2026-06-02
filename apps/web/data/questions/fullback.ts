import type { PlayerDNAQuestion } from "../../lib/scoring/types";

export const fullbackQuestions: PlayerDNAQuestion[] = [
  { id: "fullback_first_job", role: "fullback", text: "边锋在你前方接球时，你会提供什么支持？", options: [
    { label: "高速外线套边", value: "overlap", traitEffects: { pace: 9, goOutside: 12, crossing: 8 }, tags: ["overlap", "touchline"] },
    { label: "内侧前插到肋部", value: "underlap", traitEffects: { offBall: 8, shortCombination: 8, finalThirdDecision: 5 }, tags: ["underlap", "combination"] },
    { label: "留在身后保护反击", value: "rest_defense", traitEffects: { marking: 10, interceptions: 7, defensiveWorkRate: 6 }, tags: ["positionally_safe"] },
    { label: "内收到中场参与组织", value: "invert", traitEffects: { passing: 8, tempoControl: 8, longPassing: 6 }, tags: ["inverted", "controller"] },
  ] },
  { id: "fullback_defending_winger", role: "fullback", text: "速度型边锋在边线附近单挑你，你的直觉是什么？", options: [
    { label: "贴紧并尽早抢断", value: "tackle_early", traitEffects: { tackling: 14, physicality: 7, riskTaking: 3 }, tags: ["duel", "aggressive_defender"] },
    { label: "拖住他，引导远离球门", value: "delay", traitEffects: { marking: 12, finalThirdDecision: 6, riskTaking: -4 }, tags: ["positionally_safe"] },
    { label: "逼他只能走外线", value: "force_line", traitEffects: { goOutside: 6, marking: 9, pace: 5 }, tags: ["touchline_defender"] },
    { label: "趁他转身前上抢", value: "step_in", traitEffects: { interceptions: 12, acceleration: 6, pressing: 6 }, tags: ["front_foot"] },
  ] },
  { id: "fullback_cross_choice", role: "fullback", text: "你带到前场且有时间时，最想送出哪种球？", options: [
    { label: "早传弧线球", value: "early_cross", traitEffects: { crossing: 14, finalThirdDecision: 5 }, tags: ["provider"] },
    { label: "下底后的低平倒三角", value: "cutback", traitEffects: { goOutside: 8, crossing: 10, pace: 4 }, tags: ["cutback", "overlap"] },
    { label: "斜长传转移到远端", value: "switch", traitEffects: { longPassing: 13, tempoControl: 5 }, tags: ["switcher"] },
    { label: "短传到内侧后重新组织", value: "recycle", traitEffects: { passing: 9, ballRetention: 8, tempoControl: 6 }, tags: ["controller"] },
  ] },
  { id: "fullback_transition_defense", role: "fullback", text: "你在高位时球队丢球，第一反应是什么？", options: [
    { label: "立刻回追到防线", value: "recover", traitEffects: { pace: 10, defensiveWorkRate: 11, marking: 5 }, tags: ["recovery_runner"] },
    { label: "反抢接球人", value: "counter_press", traitEffects: { pressing: 11, acceleration: 6, tackling: 5 }, tags: ["presser"] },
    { label: "封住中路传球线路", value: "block_lane", traitEffects: { interceptions: 10, finalThirdDecision: 6 }, tags: ["positionally_safe"] },
    { label: "跟住我身后的前插人", value: "track_runner", traitEffects: { marking: 12, defensiveWorkRate: 7, pace: 4 }, tags: ["runner_tracking"] },
  ] },
  { id: "fullback_build_up", role: "fullback", text: "后场组织时，你更喜欢在哪里接球？", options: [
    { label: "贴边接球", value: "wide", traitEffects: { ballRetention: 6, crossing: 5, goOutside: 7 }, tags: ["touchline"] },
    { label: "内收到中场旁边", value: "inside", traitEffects: { passing: 9, tempoControl: 10, ballRetention: 7 }, tags: ["inverted"] },
    { label: "更高位置，站在边锋和前锋之间", value: "high_half_space", traitEffects: { offBall: 8, creativity: 6, shortCombination: 6 }, tags: ["underlap"] },
    { label: "更靠后，方便大范围转移", value: "deep_switch", traitEffects: { longPassing: 11, passing: 7 }, tags: ["switcher"] },
  ] },
  { id: "fullback_duel_style", role: "fullback", text: "你通常怎么赢下防守对抗？", options: [
    { label: "身体接触和肩部压迫", value: "physical", traitEffects: { physicality: 12, tackling: 8 }, tags: ["duel"] },
    { label: "读第一脚触球，伸脚破坏", value: "read_touch", traitEffects: { interceptions: 10, tackling: 8 }, tags: ["reader"] },
    { label: "跟住速度，等待机会", value: "match_sprint", traitEffects: { pace: 9, marking: 8 }, tags: ["recovery_runner"] },
    { label: "用身体角度封住内线", value: "body_angle", traitEffects: { marking: 11, finalThirdDecision: 5 }, tags: ["positionally_safe"] },
  ] },
  { id: "fullback_attacking_timing", role: "fullback", text: "你通常什么时候加入进攻？", options: [
    { label: "边锋被单独隔离时马上套边", value: "immediate_overlap", traitEffects: { acceleration: 7, goOutside: 9, crossing: 5 }, tags: ["overlap"] },
    { label: "中场已经补位时再上", value: "covered", traitEffects: { finalThirdDecision: 8, defensiveWorkRate: 6, riskTaking: -4 }, tags: ["positionally_safe"] },
    { label: "能悄悄内侧前插时", value: "late_underlap", traitEffects: { offBall: 10, finishing: 4, shortCombination: 5 }, tags: ["underlap"] },
    { label: "大多数时候保持连接和循环", value: "circulate", traitEffects: { passing: 8, tempoControl: 8, ballRetention: 5 }, tags: ["controller"] },
  ] },
  { id: "fullback_pressing_trigger", role: "fullback", text: "你最信任哪种压迫触发点？", options: [
    { label: "对方在我这一侧停球不稳", value: "loose_touch", traitEffects: { acceleration: 7, pressing: 10, tackling: 5 }, tags: ["front_foot"] },
    { label: "对方向边后卫回传", value: "back_pass", traitEffects: { pressing: 9, defensiveWorkRate: 5 }, tags: ["presser"] },
    { label: "对方边锋背对球门", value: "back_to_goal", traitEffects: { marking: 8, interceptions: 7 }, tags: ["reader"] },
    { label: "我更优先保护后点", value: "back_post", traitEffects: { marking: 11, aerialAbility: 6 }, tags: ["box_defender"] },
  ] },
  { id: "fullback_long_ball", role: "fullback", text: "远端边锋空了，你会多频繁转移过去？", options: [
    { label: "角度一出现就马上转移", value: "immediate", traitEffects: { longPassing: 13, finalThirdDecision: 7, riskTaking: 4 }, tags: ["switcher"] },
    { label: "先短传一次改善角度", value: "after_combo", traitEffects: { shortCombination: 8, passing: 7 }, tags: ["combination"] },
    { label: "很少，我更喜欢安全循环", value: "rarely", traitEffects: { ballRetention: 8, tempoControl: 7, riskTaking: -6 }, tags: ["secure"] },
  ] },
  { id: "fullback_box_defense", role: "fullback", text: "传中从另一侧打来时，你最关注什么？", options: [
    { label: "保护后点空中球", value: "back_post_air", traitEffects: { aerialAbility: 10, marking: 9 }, tags: ["box_defender"] },
    { label: "跟住后插上的人", value: "late_runner", traitEffects: { marking: 12, interceptions: 6 }, tags: ["runner_tracking"] },
    { label: "清理禁区附近第二点", value: "second_ball", traitEffects: { defensiveWorkRate: 8, physicality: 7, tackling: 5 }, tags: ["duel"] },
  ] },
  { id: "fullback_identity", role: "fullback", text: "哪种边后卫身份最接近你？", options: [
    { label: "套边冲刺型", value: "overlapping_runner", traitEffects: { pace: 10, goOutside: 11, crossing: 8 }, tags: ["overlap"] },
    { label: "内收传球型", value: "inverted_passer", traitEffects: { passing: 10, tempoControl: 10, longPassing: 8 }, tags: ["inverted"] },
    { label: "锁死对手型", value: "lockdown", traitEffects: { tackling: 12, marking: 12, defensiveWorkRate: 8 }, tags: ["lockdown"] },
  ] },
  { id: "fullback_support_need", role: "fullback", text: "哪种队友关系最能帮助你？", options: [
    { label: "边锋拉宽，让我内收", value: "winger_width", traitEffects: { tempoControl: 7, passing: 6 }, tags: ["inverted"] },
    { label: "边锋内切，让我套边", value: "winger_inside", traitEffects: { goOutside: 8, crossing: 6 }, tags: ["overlap"] },
    { label: "中场补我身后的空间", value: "mid_cover", traitEffects: { riskTaking: 5, transitionThreat: 5 }, tags: ["aggressive_runner"] },
    { label: "中卫向外侧移动保护我", value: "cb_shift", traitEffects: { finalThirdDecision: 5, defensiveWorkRate: 4 }, tags: ["positionally_safe"] },
  ] },
];
