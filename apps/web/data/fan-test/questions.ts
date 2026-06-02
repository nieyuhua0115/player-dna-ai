import type { FanQuestion } from "./types";

export const fanQuestions: FanQuestion[] = [
  {
    id: "pre_match",
    text: "世界杯开赛前，你最可能做什么？",
    options: [
      {
        id: "study_schedule",
        label: "提前研究分组、赛程、晋级路线",
        scoreEffects: { C: 5, T: 5, I: 2 },
      },
      {
        id: "scan_stars",
        label: "先看有哪些球星、帅哥、故事线",
        scoreEffects: { S: 6, W: 3 },
      },
      {
        id: "gather_friends",
        label: "约朋友一起看，气氛最重要",
        scoreEffects: { E: 6, H: 3, W: 2 },
      },
      {
        id: "pretend_casual",
        label: "嘴上说随便看看，其实默默收藏赛程",
        scoreEffects: { I: 5, C: 2, L: 2 },
      },
    ],
  },
  {
    id: "one_nil_down",
    text: "你支持的球队 0:1 落后，你第一反应是？",
    options: [
      {
        id: "tactics_unfolding",
        label: "别急，战术还没完全展开",
        scoreEffects: { C: 6, T: 4 },
      },
      {
        id: "blame_ref",
        label: "裁判今天是不是有问题？",
        scoreEffects: { H: 6, E: 3, L: 2 },
      },
      {
        id: "demand_subs",
        label: "换人啊！这教练在干嘛？",
        scoreEffects: { H: 5, T: 4, E: 4 },
      },
      {
        id: "believe_miracle",
        label: "完了，但我还是相信奇迹",
        scoreEffects: { H: 3, S: 3, L: 5 },
      },
    ],
  },
  {
    id: "favorite_story",
    text: "你最喜欢的世界杯剧情是？",
    options: [
      {
        id: "last_dance",
        label: "老将最后一舞",
        scoreEffects: { S: 5, L: 5, H: 2 },
      },
      {
        id: "wonderkid",
        label: "天才少年横空出世",
        scoreEffects: { S: 5, W: 4 },
      },
      {
        id: "dark_horse",
        label: "黑马一路爆冷",
        scoreEffects: { W: 6, H: 4 },
      },
      {
        id: "system_champion",
        label: "强队用体系碾压夺冠",
        scoreEffects: { T: 6, C: 4, W: 2 },
      },
    ],
  },
  {
    id: "least_tolerable",
    text: "你看球最不能忍的是？",
    options: [
      {
        id: "miss_sitter",
        label: "前锋浪费单刀",
        scoreEffects: { H: 4, S: 3, E: 2 },
      },
      {
        id: "defender_mistake",
        label: "后卫低级失误",
        scoreEffects: { H: 4, T: 3, E: 2 },
      },
      {
        id: "conservative_coach",
        label: "教练保守不换人",
        scoreEffects: { H: 5, T: 5, E: 3 },
      },
      {
        id: "no_fight",
        label: "球队没有斗志",
        scoreEffects: { H: 5, L: 4 },
      },
    ],
  },
  {
    id: "player_crush",
    text: "你更容易被哪种球员圈粉？",
    options: [
      {
        id: "superstar_goal",
        label: "绝境进球的超级巨星",
        scoreEffects: { S: 6, H: 3 },
      },
      {
        id: "workhorse",
        label: "满场飞奔的拼命三郎",
        scoreEffects: { L: 4, H: 3, T: 2 },
      },
      {
        id: "midfield_master",
        label: "优雅传球的中场大师",
        scoreEffects: { T: 5, C: 4 },
      },
      {
        id: "main_character",
        label: "有颜值、有故事、有宿命感的主角",
        scoreEffects: { S: 6, I: 2, W: 2 },
      },
    ],
  },
  {
    id: "group_chat_role",
    text: "你在看球群里的角色是？",
    options: [
      {
        id: "live_commentator",
        label: "实时解说员",
        scoreEffects: { E: 6, H: 3 },
      },
      {
        id: "tactical_analyst",
        label: "战术分析师",
        scoreEffects: { E: 3, T: 6, C: 3 },
      },
      {
        id: "meme_machine",
        label: "表情包发送机",
        scoreEffects: { E: 6, W: 4, H: 2 },
      },
      {
        id: "silent_breakdown",
        label: "沉默但关键时刻破防",
        scoreEffects: { I: 6, H: 3, L: 2 },
      },
    ],
  },
  {
    id: "team_eliminated",
    text: "如果你喜欢的队被淘汰了，你会？",
    options: [
      {
        id: "support_forever",
        label: "继续支持到底，等下届",
        scoreEffects: { L: 7, C: 2 },
      },
      {
        id: "find_new_home",
        label: "立刻寻找新的精神寄托",
        scoreEffects: { W: 7, S: 2 },
      },
      {
        id: "break_then_next",
        label: "破防半小时，然后看下一场",
        scoreEffects: { H: 5, W: 3 },
      },
      {
        id: "write_analysis",
        label: "写一篇长文总结失败原因",
        scoreEffects: { T: 5, I: 3, C: 3, L: 2 },
      },
    ],
  },
  {
    id: "penalty_shootout",
    text: "你对点球大战的态度是？",
    options: [
      {
        id: "love_drama",
        label: "太刺激了，我爱看",
        scoreEffects: { H: 5, W: 4, E: 2 },
      },
      {
        id: "too_cruel",
        label: "太残忍了，不敢看",
        scoreEffects: { I: 4, H: 3, L: 3 },
      },
      {
        id: "keeper_legend",
        label: "这是门将封神时刻",
        scoreEffects: { S: 3, T: 2, C: 2 },
      },
      {
        id: "psychology_exam",
        label: "这是心理素质的终极考试",
        scoreEffects: { C: 5, T: 4 },
      },
    ],
  },
  {
    id: "watch_priority",
    text: "你看世界杯更在意什么？",
    options: [
      {
        id: "star_steps_up",
        label: "有没有巨星站出来",
        scoreEffects: { S: 7, H: 2 },
      },
      {
        id: "team_reasonable",
        label: "队伍整体踢得是否合理",
        scoreEffects: { T: 7, C: 3 },
      },
      {
        id: "friend_vibe",
        label: "朋友一起看的氛围",
        scoreEffects: { E: 6, W: 3 },
      },
      {
        id: "iconic_moment",
        label: "最后有没有名场面",
        scoreEffects: { W: 6, H: 3, S: 2 },
      },
    ],
  },
  {
    id: "late_no_sub",
    text: "你看到教练 80 分钟还不换人，你会？",
    options: [
      {
        id: "coach_from_sofa",
        label: "开始激情指挥",
        scoreEffects: { H: 6, E: 5, T: 3 },
      },
      {
        id: "understand_plan",
        label: "试图理解他的战术安排",
        scoreEffects: { C: 6, T: 5 },
      },
      {
        id: "spam_subs",
        label: "在群里刷“换人啊”",
        scoreEffects: { E: 6, H: 4 },
      },
      {
        id: "accept_fate",
        label: "默默叹气，接受命运",
        scoreEffects: { I: 6, C: 3, L: 2 },
      },
    ],
  },
  {
    id: "watch_state",
    text: "你最像哪种观赛状态？",
    options: [
      {
        id: "jump_from_sofa",
        label: "进球瞬间从沙发上弹起来",
        scoreEffects: { H: 6, E: 3 },
      },
      {
        id: "observe_calmly",
        label: "全程冷静观察局势",
        scoreEffects: { C: 6, T: 3, I: 2 },
      },
      {
        id: "post_moments",
        label: "一边看球一边发朋友圈",
        scoreEffects: { E: 6, W: 3 },
      },
      {
        id: "inner_winner",
        label: "表面平静，内心已经补时绝杀",
        scoreEffects: { I: 6, S: 2, H: 2 },
      },
    ],
  },
  {
    id: "support_reason",
    text: "你选择支持一支球队的原因通常是？",
    options: [
      {
        id: "childhood_memory",
        label: "从小喜欢，青春记忆",
        scoreEffects: { L: 7, S: 2 },
      },
      {
        id: "favorite_star",
        label: "有我喜欢的球星",
        scoreEffects: { S: 7, W: 2 },
      },
      {
        id: "plays_well",
        label: "今年踢得好看",
        scoreEffects: { W: 6, T: 3 },
      },
      {
        id: "strong_story",
        label: "这队剧情感太强了",
        scoreEffects: { S: 4, W: 5, H: 2 },
      },
    ],
  },
  {
    id: "worst_match",
    text: "你最讨厌哪种比赛？",
    options: [
      {
        id: "nil_nil",
        label: "0:0 闷平",
        scoreEffects: { H: 4, W: 4, E: 2 },
      },
      {
        id: "no_discipline",
        label: "毫无战术纪律的乱踢",
        scoreEffects: { T: 6, C: 4 },
      },
      {
        id: "late_equalizer",
        label: "明明能赢结果被绝平",
        scoreEffects: { H: 5, L: 4 },
      },
      {
        id: "no_blood",
        label: "我支持的队整场没有血性",
        scoreEffects: { H: 5, L: 5 },
      },
    ],
  },
  {
    id: "favorite_goal",
    text: "你更喜欢哪种进球？",
    options: [
      {
        id: "solo_goal",
        label: "巨星个人能力一条龙",
        scoreEffects: { S: 7, H: 3 },
      },
      {
        id: "team_goal",
        label: "十几脚传递后的团队进球",
        scoreEffects: { T: 7, C: 3 },
      },
      {
        id: "stoppage_winner",
        label: "补时绝杀",
        scoreEffects: { H: 6, W: 5 },
      },
      {
        id: "scrappy_goal",
        label: "门前混战捅进去也算英雄",
        scoreEffects: { H: 4, W: 4, E: 2 },
      },
    ],
  },
  {
    id: "post_match",
    text: "比赛结束后，你最可能做什么？",
    options: [
      {
        id: "post_feelings",
        label: "发朋友圈表达情绪",
        scoreEffects: { E: 6, H: 3 },
      },
      {
        id: "read_stats",
        label: "看技术统计和赛后分析",
        scoreEffects: { C: 5, T: 6 },
      },
      {
        id: "rewatch_highlights",
        label: "找集锦再爽一次",
        scoreEffects: { W: 5, S: 3 },
      },
      {
        id: "quiet_recover",
        label: "安静地缓一会儿",
        scoreEffects: { I: 6, L: 2, C: 2 },
      },
    ],
  },
  {
    id: "understand_football",
    text: "朋友问你“你真的懂球吗？”，你会？",
    options: [
      {
        id: "three_min_output",
        label: "立刻开始输出三分钟",
        scoreEffects: { E: 6, T: 4, H: 2 },
      },
      {
        id: "watch_fun",
        label: "我不装，我就是看热闹",
        scoreEffects: { W: 5, E: 3 },
      },
      {
        id: "winning_fun",
        label: "懂不懂不重要，赢了就爽",
        scoreEffects: { W: 6, H: 3 },
      },
      {
        id: "silent_knower",
        label: "我不说话，但我心里很懂",
        scoreEffects: { I: 6, C: 3, T: 3 },
      },
    ],
  },
];
