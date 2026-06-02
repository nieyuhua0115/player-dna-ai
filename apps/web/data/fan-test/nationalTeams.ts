import type { NationalTeamBias } from "./types";

export const nationalTeams: NationalTeamBias[] = [
  {
    id: "argentina",
    name: "阿根廷",
    label: "阿根廷",
    roastTitle: "命运感重症患者",
    roastDescription:
      "你不是在看球，你是在寻找宿命、眼泪、最后一舞和点球大战。别人看的是 90 分钟比赛，你看的是人生大型连续剧。",
    keywords: ["宿命", "眼泪", "最后一舞", "精神股东"],
    warningLabel: "容易在国歌和慢镜头里失去理智",
  },
  {
    id: "portugal",
    name: "葡萄牙",
    label: "葡萄牙",
    roastTitle: "传奇滤镜戒断失败",
    roastDescription:
      "你嘴上说看整体，实际上镜头一给到某个男人，你的理智就自动下线。你尊重足球规律，但不尊重自己对传奇的执念。",
    keywords: ["传奇", "执念", "最后一届", "精神续命"],
    warningLabel: "容易把比赛看成个人英雄史诗",
  },
  {
    id: "brazil",
    name: "巴西",
    label: "巴西",
    roastTitle: "五星贵族滤镜持有者",
    roastDescription:
      "你看球自带五星贵族滤镜。别人进倒钩叫神迹，巴西少一个花活你都觉得今天踢得不够桑巴。",
    keywords: ["天赋", "花活", "桑巴", "贵族病"],
    warningLabel: "容易对普通胜利感到不够华丽",
  },
  {
    id: "france",
    name: "法国",
    label: "法国",
    roastTitle: "天赋碾压爱好者",
    roastDescription:
      "你喜欢强队，但不太想承认自己是冠军粉。你看法国队的感觉是：怎么替补席坐着的也像豪门首发。",
    keywords: ["天赋", "身体怪", "冠军相", "版本答案"],
    warningLabel: "容易被阵容厚度惯坏",
  },
  {
    id: "england",
    name: "英格兰",
    label: "英格兰",
    roastTitle: "大赛 PTSD 患者",
    roastDescription:
      "赛前你觉得这届真有戏，赛后你说我早就知道。你支持的不是球队，是一种周期性自我伤害。",
    keywords: ["点球", "回家", "青春疼痛", "祖传剧本"],
    warningLabel: "容易在淘汰赛恢复祖传记忆",
  },
  {
    id: "germany",
    name: "德国",
    label: "德国",
    roastTitle: "秩序感考古学家",
    roastDescription:
      "你怀念一种曾经稳定、冷酷、机械降神的足球秩序。现在看德国队，像看年级第一突然开始摆烂，但你还想等他复读成功。",
    keywords: ["纪律", "秩序", "复兴", "考古"],
    warningLabel: "容易沉迷昔日荣光",
  },
  {
    id: "spain",
    name: "西班牙",
    label: "西班牙",
    roastTitle: "传控洁癖患者",
    roastDescription:
      "你看球有点审美洁癖。球可以不进，但传球必须顺；比赛可以赢得艰难，但不能踢得像施工现场。",
    keywords: ["传控", "技术流", "洁癖", "控球"],
    warningLabel: "容易对简单粗暴的胜利感到不适",
  },
  {
    id: "netherlands",
    name: "荷兰",
    label: "荷兰",
    roastTitle: "无冕之王考古粉",
    roastDescription:
      "你喜欢一种美丽、骄傲、差一口气的足球气质。别人追冠军，你追的是“差点封神”的文学感。",
    keywords: ["无冕之王", "美丽足球", "遗憾", "文学感"],
    warningLabel: "容易把输球解读成艺术牺牲",
  },
  {
    id: "italy",
    name: "意大利",
    label: "意大利",
    roastTitle: "防守美学遗老",
    roastDescription:
      "你相信足球不只有进攻，还有铲断、站位、门将和 1:0 的优雅。你的快乐有时候来自对手越踢越急。",
    keywords: ["防守", "门将", "链式防守", "1:0"],
    warningLabel: "容易把苟住说成艺术",
  },
  {
    id: "japan",
    name: "日本",
    label: "日本",
    roastTitle: "努力型爆冷信徒",
    roastDescription:
      "你喜欢纪律、跑动、逆袭和赛后更衣室打扫干净。你相信只要足够努力，豪门也能被做成 PPT 案例。",
    keywords: ["纪律", "跑动", "逆袭", "小组赛爆冷"],
    warningLabel: "容易把足球看成热血运动番",
  },
  {
    id: "korea",
    name: "韩国",
    label: "韩国",
    roastTitle: "东亚热血燃烧派",
    roastDescription:
      "你喜欢那种跑到最后一秒、拼到脸变形、哪怕局面很难也要冲一下的足球。你看球时经常觉得：技术可以输，气势不能输。",
    keywords: ["热血", "拼命", "体能", "绝不躺平"],
    warningLabel: "容易被最后十分钟的冲刺感动",
  },
  {
    id: "usa",
    name: "美国",
    label: "美国",
    roastTitle: "新手村雄心玩家",
    roastDescription:
      "你看的是一种“这游戏我们刚认真玩”的上升期幻觉。你不一定知道他们能走多远，但你很期待有人突然把足球做成北美项目管理案例。",
    keywords: ["新势力", "身体素质", "项目管理", "潜力股"],
    warningLabel: "容易把潜力当即战力",
  },
  {
    id: "mexico",
    name: "墨西哥",
    label: "墨西哥",
    roastTitle: "小组赛硬汉信仰者",
    roastDescription:
      "你喜欢那种不一定最豪华，但永远有存在感、永远有情绪、永远能把比赛踢得很有火药味的队。",
    keywords: ["硬气", "情绪", "小组赛", "现场感"],
    warningLabel: "容易被气氛带到上头",
  },
  {
    id: "croatia",
    name: "克罗地亚",
    label: "克罗地亚",
    roastTitle: "加时赛命硬爱好者",
    roastDescription:
      "你迷恋那种明明该累了但就是不死、明明该结束了但还能拖进加时的命硬气质。你看球的精神核心是：别急，还能熬。",
    keywords: ["加时", "点球", "命硬", "中场大师"],
    warningLabel: "容易把心脏练成铁",
  },
  {
    id: "morocco",
    name: "摩洛哥",
    label: "摩洛哥",
    roastTitle: "黑马童话投资人",
    roastDescription:
      "你最受不了的就是强队按剧本夺冠。你需要爆冷，需要逆袭，需要全世界都没想到的那种爽文剧情。",
    keywords: ["黑马", "逆袭", "防守", "童话"],
    warningLabel: "容易在爆冷后立刻入股",
  },
  {
    id: "uruguay",
    name: "乌拉圭",
    label: "乌拉圭",
    roastTitle: "南美硬茬爱好者",
    roastDescription:
      "你喜欢那种队伍不一定最华丽，但骨头硬、脾气硬、比赛也硬。你的足球审美里有一种“谁也别想舒服踢完”的狠劲。",
    keywords: ["硬茬", "南美", "对抗", "狠劲"],
    warningLabel: "容易把身体对抗看成精神品质",
  },
  {
    id: "bandwagon",
    name: "谁强看谁",
    label: "我谁强看谁",
    roastTitle: "版本答案流浪汉",
    roastDescription:
      "你不是墙头草，你只是精准识别版本答案。你的主队随赛程动态更新，精神股权非常灵活。",
    keywords: ["冠军粉", "版本答案", "灵活站队", "理性投资"],
    warningLabel: "容易被老球迷开除球籍",
  },
  {
    id: "stars_only",
    name: "只看帅哥/球星",
    label: "我只看帅哥/球星",
    roastTitle: "主角镜头捕手",
    roastDescription:
      "你不一定懂阵型，但你很懂谁有主角脸、谁有破碎感、谁适合剪 BGM。你看世界杯不是 football scouting，是人类高光样本观察。",
    keywords: ["颜值", "主角感", "BGM", "混剪"],
    warningLabel: "容易在镜头特写里完成入坑",
  },
  {
    id: "casual_chaos",
    name: "临时发疯",
    label: "我只是世界杯期间临时发疯",
    roastTitle: "世界杯限定吗喽",
    roastDescription:
      "平时不看球，世界杯一来突然觉醒。你不是球迷，你是四年一度被足球召唤出来的快乐灵长类。",
    keywords: ["临时球迷", "气氛组", "吗喽", "四年一度"],
    warningLabel: "容易三分钟学会越位并开始指挥国家队",
  },
];

export const defaultNationalTeam = nationalTeams[nationalTeams.length - 1];
