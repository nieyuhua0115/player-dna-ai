import type { PlayerDNAQuestion } from "../../lib/scoring/types";

export const forwardQuestions: PlayerDNAQuestion[] = [
  { id: "forward_receive", role: "forward", text: "面对中卫时，你最希望怎样接球？", options: [
    { label: "跑身后接直塞", value: "run_behind", traitEffects: { pace: 9, offBall: 14, transitionThreat: 10 }, tags: ["runner", "channel_runner"] },
    { label: "背身顶住对手做支点", value: "back_to_goal", traitEffects: { holdUpPlay: 14, physicality: 9, ballRetention: 5 }, tags: ["target", "link_up"] },
    { label: "回撤到两线之间接球", value: "drop_in", traitEffects: { passing: 8, creativity: 8, shortCombination: 7 }, tags: ["false_nine", "connector"] },
    { label: "晚一步杀进禁区", value: "late_box", traitEffects: { offBall: 10, finishing: 10 }, tags: ["box_arrival"] },
  ] },
  { id: "forward_finish_type", role: "forward", text: "哪种机会最符合你的终结习惯？", options: [
    { label: "倒三角后的一脚推射", value: "one_touch", traitEffects: { finishing: 14, finalThirdDecision: 7 }, tags: ["poacher"] },
    { label: "单刀冲刺后提前射门", value: "through_ball", traitEffects: { pace: 8, finishing: 10, transitionThreat: 8 }, tags: ["channel_runner"] },
    { label: "头球或身体对抗后的终结", value: "header", traitEffects: { aerialAbility: 12, physicality: 7, finishing: 7 }, tags: ["target"] },
    { label: "禁区外自己创造射门", value: "self_create", traitEffects: { shooting: 12, dribbling: 7, riskTaking: 7 }, tags: ["self_creator"] },
  ] },
  { id: "forward_press", role: "forward", text: "你会怎么从前场发起压迫？", options: [
    { label: "直接冲向中卫", value: "sprint_cb", traitEffects: { pressing: 12, acceleration: 7 }, tags: ["presser"] },
    { label: "弧线跑位封住后腰", value: "block_pivot", traitEffects: { pressing: 9, finalThirdDecision: 7 }, tags: ["smart_press"] },
    { label: "回撤盯住对方后腰", value: "drop_mid", traitEffects: { defensiveWorkRate: 8, marking: 8 }, tags: ["screening"] },
    { label: "留在高位等反击出口", value: "outlet", traitEffects: { offBall: 7, transitionThreat: 7, defensiveWorkRate: -4 }, tags: ["outlet"] },
  ] },
  { id: "forward_hold_up", role: "forward", text: "防守人贴在你身后时，你通常怎么解决？", options: [
    { label: "护住球，把队友带进进攻", value: "protect", traitEffects: { holdUpPlay: 13, physicality: 8, shortCombination: 5 }, tags: ["link_up"] },
    { label: "转身冲向肋部通道", value: "spin", traitEffects: { acceleration: 8, offBall: 9, riskTaking: 5 }, tags: ["channel_runner"] },
    { label: "一脚做给队友", value: "layoff", traitEffects: { passing: 8, finalThirdDecision: 6, shortCombination: 7 }, tags: ["connector"] },
    { label: "扛住对抗，制造犯规", value: "draw_foul", traitEffects: { physicality: 8, ballRetention: 7 }, tags: ["secure"] },
  ] },
  { id: "forward_box_movement", role: "forward", text: "球到边路时，你在禁区里怎么跑？", options: [
    { label: "抢前点", value: "near_post", traitEffects: { acceleration: 8, offBall: 12, finishing: 6 }, tags: ["poacher"] },
    { label: "拉到后点", value: "back_post", traitEffects: { offBall: 10, aerialAbility: 7, finishing: 5 }, tags: ["box_arrival"] },
    { label: "站在点球点附近等倒三角", value: "cutback_zone", traitEffects: { finalThirdDecision: 7, finishing: 9, offBall: 6 }, tags: ["cutback"] },
    { label: "留在禁区弧等第二波", value: "edge", traitEffects: { shooting: 9, creativity: 5 }, tags: ["self_creator"] },
  ] },
  { id: "forward_link_choice", role: "forward", text: "中场把球交到你脚下时，你优先看什么？", options: [
    { label: "撞墙后转身前插", value: "wall_spin", traitEffects: { shortCombination: 9, offBall: 8 }, tags: ["link_up"] },
    { label: "分给边路队友", value: "switch_wide", traitEffects: { passing: 9, longPassing: 5, creativity: 5 }, tags: ["connector"] },
    { label: "转身直接射门", value: "turn_shoot", traitEffects: { shooting: 11, riskTaking: 7, physicality: 4 }, tags: ["self_creator"] },
    { label: "先拿住，等队友前插", value: "hold", traitEffects: { holdUpPlay: 10, ballRetention: 7, tempoControl: 4 }, tags: ["target"] },
  ] },
  { id: "forward_transition_lane", role: "forward", text: "反击时你最想攻击哪条路线？", options: [
    { label: "两个中卫之间", value: "between_cbs", traitEffects: { offBall: 10, transitionThreat: 10, finishing: 5 }, tags: ["runner"] },
    { label: "中卫外侧肩膀的肋部", value: "outside_shoulder", traitEffects: { pace: 9, acceleration: 7, transitionThreat: 8 }, tags: ["channel_runner"] },
    { label: "回撤接球，再释放队友", value: "drop_release", traitEffects: { passing: 9, creativity: 7, holdUpPlay: 5 }, tags: ["false_nine"] },
    { label: "第二波跟进到禁区", value: "second_wave", traitEffects: { offBall: 8, finalThirdDecision: 6, shooting: 5 }, tags: ["box_arrival"] },
  ] },
  { id: "forward_aerial", role: "forward", text: "高空球在你的比赛里通常是什么角色？", options: [
    { label: "我会主动争顶完成射门", value: "score_headers", traitEffects: { aerialAbility: 13, finishing: 7, physicality: 5 }, tags: ["target"] },
    { label: "我会头球摆渡给队友", value: "flick", traitEffects: { aerialAbility: 9, holdUpPlay: 8, finalThirdDecision: 5 }, tags: ["link_up"] },
    { label: "我更喜欢脚下球或身后球", value: "feet_space", traitEffects: { offBall: 7, dribbling: 5, aerialAbility: -5 }, tags: ["channel_runner"] },
  ] },
  { id: "forward_weak_foot", role: "forward", text: "弱脚一侧出现射门机会，你会怎么做？", options: [
    { label: "不犹豫，直接打", value: "shoot", traitEffects: { weakFoot: 12, finishing: 8 }, tags: ["two_footed"] },
    { label: "调整到惯用脚", value: "shift", traitEffects: { ballRetention: 6, weakFoot: -5 }, tags: ["strong_footed"] },
    { label: "横传给机会更好的队友", value: "square", traitEffects: { finalThirdDecision: 8, passing: 6 }, tags: ["connector"] },
  ] },
  { id: "forward_decision", role: "forward", text: "禁区里只剩一个防守人，你最相信什么？", options: [
    { label: "在压力到来前快速完成射门", value: "quick_finish", traitEffects: { finishing: 12, finalThirdDecision: 8 }, tags: ["poacher"] },
    { label: "先过掉防守人", value: "beat_defender", traitEffects: { dribbling: 9, oneVsOne: 9, riskTaking: 7 }, tags: ["self_creator"] },
    { label: "等门将先动", value: "keeper_move", traitEffects: { finishing: 10, tempoControl: 6 }, tags: ["composed"] },
    { label: "队友空门就传", value: "pass_tapin", traitEffects: { finalThirdDecision: 10, passing: 5 }, tags: ["connector"] },
  ] },
  { id: "forward_identity", role: "forward", text: "哪种前锋身份最接近你？", options: [
    { label: "爆发型身后跑者", value: "channel", traitEffects: { pace: 10, offBall: 12, transitionThreat: 10 }, tags: ["channel_runner"] },
    { label: "禁区终结者", value: "finisher", traitEffects: { finishing: 14, offBall: 9, finalThirdDecision: 7 }, tags: ["poacher"] },
    { label: "连接型九号位", value: "link", traitEffects: { holdUpPlay: 12, passing: 8, shortCombination: 7 }, tags: ["link_up"] },
    { label: "高空支点", value: "target", traitEffects: { aerialAbility: 12, physicality: 9, holdUpPlay: 7 }, tags: ["target"] },
  ] },
  { id: "forward_best_service", role: "forward", text: "队友给你哪种支援最能发挥你？", options: [
    { label: "防线身后的直塞", value: "through_balls", traitEffects: { transitionThreat: 8, pace: 5, finishing: 5 }, tags: ["channel_runner"] },
    { label: "禁区传中", value: "crosses", traitEffects: { aerialAbility: 8, finishing: 7 }, tags: ["target"] },
    { label: "脚下球，身边有人接应", value: "feet_runners", traitEffects: { holdUpPlay: 8, shortCombination: 7 }, tags: ["link_up"] },
    { label: "点球点附近的倒三角", value: "cutbacks", traitEffects: { offBall: 8, finishing: 8 }, tags: ["poacher", "cutback"] },
  ] },
];
