import type { QuestionOption, PlayerDNAQuestion } from "./scoring/types";
import type { Language } from "./scoring/traitCopy";

type QuestionCopy = {
  text: string;
  description?: string;
  options: Record<string, string>;
};

export const uiCopy = {
  zh: {
    productLabel: "足球风格匹配器",
    localMvp: "本地 MVP",
    chooseMode: "选择测试模式",
    title: "PlayerDNA / 足球风格匹配器",
    intro:
      "一个本地可跑的足球风格实验室。你可以测自己的球风 DNA，也可以测世界杯期间是哪种看球人格。",
    playerDnaMode: "球员风格 DNA",
    playerDnaTitle: "我踢球像哪个职业球员？",
    playerDnaDesc: "给踢球的人，测试你的球风 DNA。",
    fanMode: "Football SBTI 毒舌版",
    fanTitle: "世界杯犯病人格测试",
    fanDesc: "给所有看球的人，测测你是哪种看球人格。",
    commonProfile: "通用画像",
    scenarioSuffix: "场景题",
    question: "第",
    ofQuestions: "题 / 共",
    questionsUnit: "题",
    progress: "已完成",
    commonFirst: "先回答",
    commonFirstSuffix: "道通用题",
    restart: "重新开始",
    previous: "上一题",
    next: "下一题",
    viewResult: "查看结果",
    cardTitle: "球员 DNA 卡片",
    basedOnPrefix: "基于",
    basedOnMiddle: "道",
    basedOnSuffix: "相关回答生成。本地确定性匹配，不调用外部 API。",
    report: "球探报告",
    why: "为什么匹配这些球员",
    matchScore: "匹配分",
    strengths: "优势",
    development: "可以提升",
    tacticalFit: "战术适配",
    traitSnapshot: "能力画像",
    retake: "再测一次",
    languageToggle: "EN",
  },
  en: {
    productLabel: "Football Style Matcher",
    localMvp: "Local MVP",
    chooseMode: "Choose your mode",
    title: "PlayerDNA / Football Style Matcher",
    intro:
      "A local football style lab. Test your player DNA, or try the fan personality test during tournament season.",
    playerDnaMode: "PlayerDNA",
    playerDnaTitle: "Which professional player do I play like?",
    playerDnaDesc: "For people who play football. Find your style DNA.",
    fanMode: "Football SBTI",
    fanTitle: "World Cup fan personality test",
    fanDesc: "For football fans. Find your viewing personality.",
    commonProfile: "Common profile",
    scenarioSuffix: "scenario",
    question: "Question",
    ofQuestions: "/",
    questionsUnit: "",
    progress: "complete",
    commonFirst: "",
    commonFirstSuffix: "common questions first",
    restart: "Restart",
    previous: "Previous",
    next: "Next",
    viewResult: "View result",
    cardTitle: "Player DNA Card",
    basedOnPrefix: "Based on",
    basedOnMiddle: "/",
    basedOnSuffix: "answers. Deterministic local matching, no external API.",
    report: "Scouting report",
    why: "Why this match",
    matchScore: "match score",
    strengths: "Strengths",
    development: "Development areas",
    tacticalFit: "Tactical fit",
    traitSnapshot: "Trait snapshot",
    retake: "Retake",
    languageToggle: "中文",
  },
} as const;

export function localizeQuestion(
  question: PlayerDNAQuestion,
  language: Language,
): PlayerDNAQuestion {
  if (language === "zh") {
    return question;
  }

  const copy = questionCopyEn[question.id];

  if (!copy) {
    return question;
  }

  return {
    ...question,
    text: copy.text,
    description: copy.description ?? question.description,
    options: question.options.map((option): QuestionOption => ({
      ...option,
      label: copy.options[option.value] ?? option.label,
    })),
  };
}

const questionCopyEn: Record<string, QuestionCopy> = {
  strong_foot: {
    text: "Which foot shapes most of your decisions?",
    options: { right: "Right foot", left: "Left foot", both: "Both feet feel natural" },
  },
  preferred_zone: {
    text: "Where do you most like to influence the game?",
    options: {
      left_wide: "Wide left",
      right_wide: "Wide right",
      central: "Central lanes",
      box: "Around the penalty box",
      goal: "Goal area",
    },
  },
  pressure_response: {
    text: "When pressure arrives quickly, what is your first instinct?",
    options: {
      turn_carry: "Turn out and carry away",
      one_touch: "Play one-touch to a teammate",
      shield: "Shield it and wait for support",
      clear_switch: "Clear or switch the danger early",
    },
  },
  game_speed: {
    text: "What game rhythm feels most natural?",
    options: {
      fast: "Fast transitions and early forward actions",
      controlled: "Controlled possession and patient circulation",
      pressing: "Repeated pressing and second-ball fights",
      decisive: "Wait for the decisive action",
    },
  },
  risk_preference: {
    text: "A difficult but dangerous option appears. What do you do?",
    options: {
      take_risk: "Take it immediately",
      create_angle: "Manipulate the defender first, then play it",
      combine: "Combine to create a cleaner route",
      reset: "Keep the ball and reset the structure",
    },
  },
  defensive_instinct: {
    text: "When your team loses the ball, what do you naturally do?",
    options: {
      counter_press: "Counter-press immediately",
      recover_shape: "Recover into shape first",
      track_runner: "Track the most dangerous runner",
      outlet: "Stay available for the outlet pass",
    },
  },
  communication_style: {
    text: "How do you usually help teammates around you?",
    options: {
      organize: "Organize the shape and call movements",
      support_angle: "Offer a safe passing angle",
      drag_runs: "Drag opponents away with runs",
      duel_leader: "Lead through duels and intensity",
    },
  },
  primary_role: {
    text: "What is your primary role?",
    description: "This unlocks questions built for the way your position actually plays.",
    options: {
      winger: "Winger",
      defender: "Defender",
      forward: "Forward",
      midfielder: "Midfielder",
      goalkeeper: "Goalkeeper",
    },
  },

  winger_take_on_style: {
    text: "You receive wide against one defender. What is your first instinct?",
    options: {
      attack_1v1: "Attack 1v1 immediately",
      cut_inside: "Cut inside to shoot or combine",
      overlap_combo: "Wait for the overlap and combine",
      outside_cross: "Go outside and deliver",
    },
  },
  winger_space: {
    text: "Which space do you want teammates to create for you?",
    options: {
      isolation: "Wide isolation",
      inside_channel: "Inside channel to run behind",
      half_space: "Half-space pocket",
      touchline: "Touchline width",
    },
  },
  winger_final_action: {
    text: "What is your favorite final action from wide areas?",
    options: {
      cutback: "Low cutback",
      far_post_shot: "Cut inside and shoot far post",
      slip_pass: "Slip pass behind the defensive line",
      byline: "Drive to the byline",
    },
  },
  winger_press: {
    text: "How do you press the opposing fullback?",
    options: {
      trap_line: "Sprint to trap them on the line",
      curve_press: "Curve the run to block the inside pass",
      track_back: "Drop to protect my fullback",
      stay_high: "Stay high for the outlet",
    },
  },
  winger_tempo: {
    text: "After beating the first defender, what next?",
    options: {
      second_burst: "Accelerate again",
      draw_defender: "Slow down and draw the next defender",
      early_release: "Release the ball early",
      attack_box: "Attack the box",
    },
  },
  winger_weak_side: {
    text: "On your less comfortable side, what do you prefer?",
    options: {
      use_weak: "Still take the shot or pass",
      shift: "Shift back to my strong foot",
      quick_combo: "Combine quickly",
    },
  },
  winger_cross_type: {
    text: "Which delivery feels most natural?",
    options: {
      whipped: "Whipped cross",
      ground_cutback: "Ground cutback",
      reverse: "Reverse pass inside",
    },
  },
  winger_defender_body: {
    text: "A defender shows you outside. What do you do?",
    options: {
      race_outside: "Accept it and race outside",
      fake_cut: "Fake outside and cut in",
      bounce_spin: "Bounce pass and spin behind",
    },
  },
  winger_transition: {
    text: "In counterattacks, what is your natural lane?",
    options: {
      beyond: "Sprint beyond the back line",
      carry_halfway: "Carry from halfway",
      late_arrive: "Arrive late around the box",
    },
  },
  winger_composure: {
    text: "Two defenders close you down near the box. What now?",
    options: {
      split: "Try to split them",
      recycle: "Protect it, draw a foul, or recycle",
      third_man: "Find the third-man run",
    },
  },
  winger_identity: {
    text: "Which winger identity feels closest?",
    options: {
      explosive: "Explosive touchline runner",
      inverted: "Inverted scorer",
      creator: "Wide creator",
    },
  },
  winger_support: {
    text: "What support do you want around you?",
    options: {
      overlap: "Overlapping fullback",
      pinned_cb: "Striker pins center backs for my 1v1",
      mid_close: "Midfielder close for combinations",
    },
  },

  forward_receive: {
    text: "How do you want to receive against center backs?",
    options: {
      run_behind: "Run behind into space",
      back_to_goal: "Pin them and play with back to goal",
      drop_in: "Drop between the lines",
      late_box: "Arrive late in the box",
    },
  },
  forward_finish_type: {
    text: "Which chance feels most natural to finish?",
    options: {
      one_touch: "One-touch finish from a cutback",
      through_ball: "Sprint through and finish early",
      header: "Header or contact finish",
      self_create: "Create my own shot from the edge",
    },
  },
  forward_press: {
    text: "How do you start the press from the front?",
    options: {
      sprint_cb: "Sprint at the center back",
      block_pivot: "Curve run to block the pivot",
      drop_mid: "Drop onto their deepest midfielder",
      outlet: "Stay ready for the outlet",
    },
  },
  forward_hold_up: {
    text: "A defender is on your back. What is your default solution?",
    options: {
      protect: "Protect it and bring others in",
      spin: "Spin into the channel",
      layoff: "Lay it off first time",
      draw_foul: "Draw the foul",
    },
  },
  forward_box_movement: {
    text: "Where do you move when the ball goes wide?",
    options: {
      near_post: "Near-post dart",
      back_post: "Back-post peel",
      cutback_zone: "Penalty spot for the cutback",
      edge: "Edge of the box for the second phase",
    },
  },
  forward_link_choice: {
    text: "When midfielders play into your feet, what do you look for?",
    options: {
      wall_spin: "Wall pass and spin",
      switch_wide: "Switch to the winger",
      turn_shoot: "Turn and shoot",
      hold: "Hold until runners arrive",
    },
  },
  forward_transition_lane: {
    text: "On counters, which lane do you attack?",
    options: {
      between_cbs: "Between center backs",
      outside_shoulder: "Outside shoulder into the channel",
      drop_release: "Drop to receive and release runners",
      second_wave: "Arrive as the second wave",
    },
  },
  forward_aerial: {
    text: "How do aerial balls usually fit your game?",
    options: {
      score_headers: "I attack crosses to score",
      flick: "I flick them on for runners",
      feet_space: "I prefer feet or space instead",
    },
  },
  forward_weak_foot: {
    text: "A shot opens on your weaker foot. What happens?",
    options: {
      shoot: "Shoot without hesitation",
      shift: "Shift onto my strong foot",
      square: "Square it to a teammate",
    },
  },
  forward_decision: {
    text: "In the box with one defender left, what do you trust?",
    options: {
      quick_finish: "Quick finish before pressure arrives",
      beat_defender: "Beat the defender first",
      keeper_move: "Wait for the keeper to move",
      pass_tapin: "Pass if a teammate has a tap-in",
    },
  },
  forward_identity: {
    text: "Which forward identity feels closest?",
    options: {
      channel: "Explosive channel runner",
      finisher: "Penalty-box finisher",
      link: "Link-up nine",
      target: "Aerial target",
    },
  },
  forward_best_service: {
    text: "What service from teammates brings out your best football?",
    options: {
      through_balls: "Through balls behind the line",
      crosses: "Crosses into the box",
      feet_runners: "Passes into feet with runners nearby",
      cutbacks: "Cutbacks around the penalty spot",
    },
  },

  midfielder_receive: {
    text: "Where do you most like to receive in midfield?",
    options: {
      deep: "Deep facing the game",
      between_lines: "Between the lines",
      duel_zone: "Near opponents to press and duel",
      near_box: "Near the box for final actions",
    },
  },
  midfielder_first_scan: {
    text: "Before receiving, what option are you looking for?",
    options: {
      vertical: "Forward pass through the lines",
      switch: "Switch to the far side",
      bounce: "One-touch bounce to escape pressure",
      reset: "Safe reset to keep structure",
    },
  },
  midfielder_pressure: {
    text: "You receive with pressure on your back. What now?",
    options: {
      turn_carry: "Turn away and carry",
      first_time: "Play first-time around the corner",
      shield: "Shield and draw contact",
      release_long: "Release long before pressure arrives",
    },
  },
  midfielder_defensive_work: {
    text: "What defensive action gives you the most satisfaction?",
    options: {
      intercept: "Intercept before danger starts",
      tackle: "Win a tackle in midfield",
      counter_press: "Counter-press immediately",
      track: "Track a runner into the box",
    },
  },
  midfielder_tempo: {
    text: "How do you change the rhythm of a game?",
    options: {
      slow: "Slow it down and circulate",
      vertical: "Speed it up with vertical passes",
      carry: "Carry past pressure to break a line",
      chaos_press: "Press hard to force chaos",
    },
  },
  midfielder_final_third: {
    text: "Near the box, which action do you prefer?",
    options: {
      slip_pass: "Slip pass for a runner",
      late_shot: "Arrive late for a shot",
      tight_combo: "Combine quickly in tight spaces",
      recycle: "Recycle and keep pressure on",
    },
  },
  midfielder_carrying: {
    text: "When space opens in front of you, what do you do?",
    options: {
      drive: "Drive through midfield",
      draw_pass: "Draw pressure then pass",
      long_shot: "Shoot from range",
      switch_early: "Switch play early",
    },
  },
  midfielder_role_in_possession: {
    text: "What is your main job when your team has long possession?",
    options: {
      rhythm: "Be the rhythm setter",
      killer_pass: "Find the killer pass",
      angles: "Offer short angles everywhere",
      box: "Occupy the box when the ball goes wide",
    },
  },
  midfielder_role_out_of_possession: {
    text: "When defending, what responsibility feels natural?",
    options: {
      screen: "Screen the back line",
      jump_pivot: "Jump to press their pivot",
      cover_wide: "Cover fullbacks and wide channels",
      track_box: "Track runners into the box",
    },
  },
  midfielder_long_range: {
    text: "How important are long passes or shots in your game?",
    options: {
      diagonals: "Long diagonals are a weapon",
      long_shots: "Long shots are part of my game",
      short: "I prefer short combinations",
      rarely: "I rarely force long actions",
    },
  },
  midfielder_identity: {
    text: "Which midfield identity feels closest?",
    options: {
      controller: "Tempo controller",
      box_to_box: "Box-to-box presser",
      creative: "Creative interior",
      progressor: "Deep progressor",
    },
  },
  midfielder_best_teammate: {
    text: "Which teammate movement helps you most?",
    options: {
      wide_switch: "Wingers holding width for switches",
      wall_pass: "Forwards checking short for wall passes",
      runners: "Runners attacking behind the line",
      recycle_lanes: "Defenders giving safe recycle lanes",
    },
  },

  defender_home_zone: {
    text: "Which defensive home zone feels most natural?",
    options: {
      wide_overlap: "Wide defender who overlaps and supports attacks",
      wide_lockdown: "Wide defender who locks down wingers",
      central_stopper: "Center back who attacks duels early",
      central_cover: "Center back who covers space behind",
      central_progressor: "Center back who builds play from deep",
    },
  },
  defender_first_duel: {
    text: "A striker receives with their back to goal. What is your first action?",
    options: {
      tight_contact: "Step tight and make contact",
      delay_turn: "Hold position and delay the turn",
      anticipate_layoff: "Anticipate the layoff pass",
      protect_depth: "Drop a step to protect depth",
    },
  },
  defender_high_line: {
    text: "Your team holds a high line. What responsibility fits you?",
    options: {
      attack_ball: "Attack the ball early",
      cover_space: "Cover space behind the line",
      organize_line: "Organize the line and trigger offside",
      compact: "I prefer a compact block",
    },
  },
  defender_on_ball: {
    text: "When you have time on the ball, how do you progress play?",
    options: {
      vertical_pass: "Vertical pass into midfield",
      diagonal: "Diagonal switch to the far side",
      carry_forward: "Carry forward until pressure comes",
      secure_reset: "Secure pass and reset shape",
    },
  },
  defender_cross_defense: {
    text: "A cross is coming into your box. What do you focus on?",
    options: {
      first_ball: "Attack the first ball aerially",
      track_striker: "Track the striker's movement",
      second_ball: "Protect the second-ball zone",
      hold_line: "Hold the line for the goalkeeper",
    },
  },
  defender_recovery: {
    text: "A forward runs into the channel behind you. What saves the situation?",
    options: {
      recovery_sprint: "Recovery sprint and shoulder pressure",
      body_position: "Early body position before the run starts",
      last_tackle: "Last-moment tackle",
      delay_help: "Delay and wait for help",
    },
  },
  defender_set_pieces: {
    text: "On attacking set pieces, what role do you like?",
    options: {
      main_header: "Attack the main header",
      screen: "Block defenders for a teammate",
      stay_back: "Stay back for rest defense",
    },
  },
  defender_pressing: {
    text: "When a loose pass enters midfield, how do you react?",
    options: {
      step_intercept: "Step out and intercept",
      organize: "Tell a midfielder to jump",
      hold_line: "Hold the back line",
      follow: "Follow the receiver tightly",
    },
  },
  defender_under_press: {
    text: "A forward presses your first touch. What do you trust?",
    options: {
      play_through: "Play through the pressure",
      switch_early: "Switch early before pressure arrives",
      keeper_reset: "Use the goalkeeper to reset",
      clear_channel: "Clear into the channel",
    },
  },
  defender_line_role: {
    text: "What defensive line role helps your team most?",
    options: {
      covering: "Be the covering defender behind others",
      aggressive: "Be the aggressive defender who steps out",
      wide_outlet: "Be the wide outlet in possession",
      organizer: "Be the organizer who keeps everyone connected",
    },
  },
  defender_identity: {
    text: "Which defender identity feels closest?",
    options: {
      ball_player: "Ball-playing center back",
      commanding: "Commanding aerial defender",
      stopper: "Front-foot stopper",
      cover: "Cover defender",
    },
  },
  defender_best_system: {
    text: "What defensive system fits you best?",
    options: {
      high_line: "High line with aggressive stepping",
      possession: "Possession team needing buildup",
      compact_block: "Compact block protecting the box",
      man_oriented: "Man-oriented defending",
    },
  },

  goalkeeper_save_style: {
    text: "What type of save feels most like your game?",
    options: {
      reaction: "Explosive close-range reaction",
      dive: "Big dive across goal",
      routine: "Stay calm and make the routine save",
      positioning: "Read the shot early and position well",
    },
  },
  goalkeeper_distribution_short: {
    text: "Under light pressure, how do you restart play?",
    options: {
      short_cb: "Short pass to center backs",
      fullback: "Find the fullback early",
      clip: "Clip over the press",
      clear: "Clear safely into channels",
    },
  },
  goalkeeper_high_line: {
    text: "Your team plays a high line. What is your comfort level?",
    options: {
      aggressive_sweep: "I sweep behind aggressively",
      selective: "I come out only when the read is clear",
      stay_goal: "I prefer protecting the goalmouth",
    },
  },
  goalkeeper_crosses: {
    text: "How do you handle crosses?",
    options: {
      claim: "Claim aggressively",
      punch: "Punch when crowded",
      hold: "Hold position and save the second action",
      organize: "Organize defenders before the cross",
    },
  },
  goalkeeper_one_v_one: {
    text: "A striker breaks through one-on-one. What do you trust?",
    options: {
      explode: "Explode off the line",
      delay: "Delay and narrow the angle",
      block: "Go low early to block",
    },
  },
  goalkeeper_long_distribution: {
    text: "When your team needs to bypass pressure, what ball do you play?",
    options: {
      driven: "Driven pass into midfield",
      diagonal: "Diagonal to the winger",
      clearance: "Safe long clearance",
      reset: "Short reset and ask the team to open up",
    },
  },
  goalkeeper_second_ball: {
    text: "After a save drops loose, what matters most?",
    options: {
      smother: "Smother the rebound",
      push_wide: "Push it away from danger",
      trust: "Trust defenders and hold shape",
    },
  },
  goalkeeper_under_press: {
    text: "A forward presses you while the ball is at your feet. What now?",
    options: {
      play_through: "Play through the press",
      switch: "Switch to the far fullback",
      clear: "Clear early",
      bounce: "Use a quick bounce pass",
    },
  },
  goalkeeper_set_pieces: {
    text: "On defensive set pieces, what is your role?",
    options: {
      command: "Command the six-yard box",
      organize: "Organize marks and zones",
      save_drop: "Focus on the save if it drops",
    },
  },
  goalkeeper_mistake_response: {
    text: "After a risky moment, what do you do next?",
    options: {
      same: "Keep playing the same buildup role",
      simplify: "Simplify for a few minutes",
      reset_team: "Communicate and reset the team",
    },
  },
  goalkeeper_identity: {
    text: "Which goalkeeper identity feels closest?",
    options: {
      buildup: "Modern buildup keeper",
      sweeper: "Aggressive sweeper keeper",
      commanding: "Commanding box keeper",
      shot_stopper: "Pure shot stopper",
    },
  },
  goalkeeper_best_system: {
    text: "What defensive system suits you best?",
    options: {
      high_line: "High line with space to sweep",
      possession: "Possession team needing short buildup",
      compact: "Compact block with many saves",
      cross_heavy: "Cross-heavy games where I command the box",
    },
  },
};
