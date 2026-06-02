import type { PlayerDNAQuestion } from "../../lib/scoring/types";

export const goalkeeperQuestions: PlayerDNAQuestion[] = [
  { id: "goalkeeper_save_style", role: "goalkeeper", text: "哪种扑救最像你的风格？", options: [
    { label: "近距离快速反应", value: "reaction", traitEffects: { reflexes: 16, shotStopping: 10 }, tags: ["shot_stopper"] },
    { label: "大幅度侧扑", value: "dive", traitEffects: { shotStopping: 14, reflexes: 8 }, tags: ["shot_stopper"] },
    { label: "冷静完成常规扑救", value: "routine", traitEffects: { handling: 13, finalThirdDecision: 6 }, tags: ["secure"] },
    { label: "提前读射门，靠站位解决", value: "positioning", traitEffects: { shotStopping: 10, handling: 7, finalThirdDecision: 7 }, tags: ["reader"] },
  ] },
  { id: "goalkeeper_distribution_short", role: "goalkeeper", text: "压力不大时，你通常怎么重新发起进攻？", options: [
    { label: "短传给中卫", value: "short_cb", traitEffects: { keeperDistribution: 11, passing: 7, ballRetention: 5 }, tags: ["buildup_keeper"] },
    { label: "尽早找到边后卫", value: "fullback", traitEffects: { keeperDistribution: 9, finalThirdDecision: 5 }, tags: ["buildup_keeper"] },
    { label: "挑过第一道压迫", value: "clip", traitEffects: { keeperDistribution: 9, longPassing: 8, riskTaking: 4 }, tags: ["progressor"] },
    { label: "安全开到边路通道", value: "clear", traitEffects: { longPassing: 8, riskTaking: -5 }, tags: ["safety_first"] },
  ] },
  { id: "goalkeeper_high_line", role: "goalkeeper", text: "球队打高位防线时，你的舒适度如何？", options: [
    { label: "我会积极出击清理身后球", value: "aggressive_sweep", traitEffects: { sweeperKeeping: 15, acceleration: 6, riskTaking: 6 }, tags: ["sweeper"] },
    { label: "判断清楚才出击", value: "selective", traitEffects: { sweeperKeeping: 9, finalThirdDecision: 8 }, tags: ["reader"] },
    { label: "我更喜欢守住门线和小禁区", value: "stay_goal", traitEffects: { shotStopping: 8, handling: 6, sweeperKeeping: -6 }, tags: ["goal_line"] },
  ] },
  { id: "goalkeeper_crosses", role: "goalkeeper", text: "面对传中球，你通常怎么处理？", options: [
    { label: "主动出击摘球", value: "claim", traitEffects: { handling: 13, aerialAbility: 8, physicality: 5 }, tags: ["commanding"] },
    { label: "人多时选择击出", value: "punch", traitEffects: { aerialAbility: 9, finalThirdDecision: 6, handling: 4 }, tags: ["commanding"] },
    { label: "站住位置，准备第二下扑救", value: "hold", traitEffects: { shotStopping: 8, reflexes: 6 }, tags: ["goal_line"] },
    { label: "传中前先指挥后卫站位", value: "organize", traitEffects: { marking: 7, finalThirdDecision: 7, handling: 5 }, tags: ["organizer"] },
  ] },
  { id: "goalkeeper_one_v_one", role: "goalkeeper", text: "前锋形成单刀时，你最相信什么？", options: [
    { label: "快速冲出门线", value: "explode", traitEffects: { acceleration: 8, sweeperKeeping: 9, reflexes: 8 }, tags: ["sweeper"] },
    { label: "延缓他，缩小角度", value: "delay", traitEffects: { finalThirdDecision: 9, shotStopping: 8 }, tags: ["reader"] },
    { label: "提前下地封堵", value: "block", traitEffects: { reflexes: 10, physicality: 5 }, tags: ["shot_stopper"] },
  ] },
  { id: "goalkeeper_long_distribution", role: "goalkeeper", text: "球队需要越过压迫时，你会选择哪种球？", options: [
    { label: "直线球打进中场", value: "driven", traitEffects: { keeperDistribution: 11, longPassing: 8 }, tags: ["progressor"] },
    { label: "斜长传找边锋", value: "diagonal", traitEffects: { longPassing: 12, keeperDistribution: 7, riskTaking: 5 }, tags: ["switcher"] },
    { label: "安全大脚解围", value: "clearance", traitEffects: { longPassing: 7, riskTaking: -4 }, tags: ["safety_first"] },
    { label: "短传重置，让队友重新展开", value: "reset", traitEffects: { keeperDistribution: 8, tempoControl: 6, ballRetention: 4 }, tags: ["buildup_keeper"] },
  ] },
  { id: "goalkeeper_second_ball", role: "goalkeeper", text: "扑救后球掉在危险区域，什么最重要？", options: [
    { label: "马上控制反弹球", value: "smother", traitEffects: { reflexes: 10, handling: 9, physicality: 5 }, tags: ["shot_stopper"] },
    { label: "把球扑到远离危险的位置", value: "push_wide", traitEffects: { shotStopping: 9, finalThirdDecision: 6 }, tags: ["secure"] },
    { label: "相信后卫，保持门前站位", value: "trust", traitEffects: { marking: 5, handling: 6, riskTaking: -4 }, tags: ["organizer"] },
  ] },
  { id: "goalkeeper_under_press", role: "goalkeeper", text: "前锋逼抢你脚下球时，你会怎么做？", options: [
    { label: "从压迫里传出去", value: "play_through", traitEffects: { keeperDistribution: 12, ballRetention: 8, riskTaking: 5 }, tags: ["buildup_keeper"] },
    { label: "转移到远端边后卫", value: "switch", traitEffects: { longPassing: 10, keeperDistribution: 8 }, tags: ["switcher"] },
    { label: "尽早解围", value: "clear", traitEffects: { finalThirdDecision: 5, riskTaking: -6 }, tags: ["safety_first"] },
    { label: "和队友做快速回传配合", value: "bounce", traitEffects: { shortCombination: 7, keeperDistribution: 7 }, tags: ["connector"] },
  ] },
  { id: "goalkeeper_set_pieces", role: "goalkeeper", text: "防守定位球时，你的角色是什么？", options: [
    { label: "控制小禁区", value: "command", traitEffects: { handling: 12, aerialAbility: 9, physicality: 5 }, tags: ["commanding"] },
    { label: "指挥盯人和区域站位", value: "organize", traitEffects: { marking: 8, finalThirdDecision: 8 }, tags: ["organizer"] },
    { label: "专注于第二点或折射后的扑救", value: "save_drop", traitEffects: { reflexes: 9, shotStopping: 8 }, tags: ["goal_line"] },
  ] },
  { id: "goalkeeper_mistake_response", role: "goalkeeper", text: "出现一次冒险处理后，你下一步会怎么做？", options: [
    { label: "继续保持同样的出球角色", value: "same", traitEffects: { keeperDistribution: 8, riskTaking: 5, tempoControl: 4 }, tags: ["buildup_keeper"] },
    { label: "先简单处理几分钟", value: "simplify", traitEffects: { handling: 7, riskTaking: -5, finalThirdDecision: 5 }, tags: ["secure"] },
    { label: "沟通并重置全队情绪", value: "reset_team", traitEffects: { finalThirdDecision: 8, handling: 5 }, tags: ["organizer"] },
  ] },
  { id: "goalkeeper_identity", role: "goalkeeper", text: "哪种门将身份最接近你？", options: [
    { label: "现代出球门将", value: "buildup", traitEffects: { keeperDistribution: 14, ballRetention: 7, tempoControl: 5 }, tags: ["buildup_keeper"] },
    { label: "积极清道夫门将", value: "sweeper", traitEffects: { sweeperKeeping: 14, acceleration: 6, riskTaking: 6 }, tags: ["sweeper"] },
    { label: "禁区指挥型门将", value: "commanding", traitEffects: { handling: 12, aerialAbility: 9, physicality: 5 }, tags: ["commanding"] },
    { label: "纯扑救型门将", value: "shot_stopper", traitEffects: { shotStopping: 14, reflexes: 12 }, tags: ["shot_stopper"] },
  ] },
  { id: "goalkeeper_best_system", role: "goalkeeper", text: "哪种防守体系最适合你？", options: [
    { label: "高位防线，需要我保护身后空间", value: "high_line", traitEffects: { sweeperKeeping: 11, keeperDistribution: 6 }, tags: ["sweeper"] },
    { label: "控球队，需要后场短传出球", value: "possession", traitEffects: { keeperDistribution: 11, passing: 6, ballRetention: 5 }, tags: ["buildup_keeper"] },
    { label: "紧凑防守，会有很多扑救", value: "compact", traitEffects: { shotStopping: 11, reflexes: 8 }, tags: ["shot_stopper"] },
    { label: "传中很多，需要我控制禁区", value: "cross_heavy", traitEffects: { handling: 10, aerialAbility: 8 }, tags: ["commanding"] },
  ] },
];
