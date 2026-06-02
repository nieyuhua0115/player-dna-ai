import type { FanPersona, FanPersonaCode } from "./types";

export const fanPersonas: Record<FanPersonaCode, FanPersona> = {
  HSEL: {
    code: "HSEL",
    title: "国家队热血保安",
    subtitle: "你不是在看球，你是在为自己的青春续命。",
    keywords: ["上头", "忠诚", "开麦", "主角感", "血压管理失败"],
    description:
      "你看球不是来看比赛的，你是来把自己的命运和球队绑定的。你支持的队一丢球，你的血压先越位。嘴上说“随便看个球”，国歌一响，你已经准备战斗到天亮。",
    footballQuote: "我不是在看世界杯，我是在经历人生。",
    breakdownMoment: "补时被绝平、点球踢飞、教练 80 分钟还不换人。",
    friendCircleCopy:
      "我是【国家队热血保安】。足球就是这样，明明知道会受伤，还是会一次次回来。",
    ratings: { passion: 5, tactics: 3, memeEnergy: 4, loyalty: 5, chaos: 4 },
  },
  HSEW: {
    code: "HSEW",
    title: "世界杯发疯吗喽",
    subtitle: "你不一定最懂球，但你一定最会把球看热闹。",
    keywords: ["吗喽", "气氛组", "名场面", "上头", "快乐第一"],
    description:
      "你看世界杯的状态像一只被补时绝杀激活的吗喽。进球时你是人类，丢球时你是猴，点球大战时你已经进化成尖叫型灵长类。你不一定懂球，但你非常懂怎么把一场 0:0 看成精神团建。",
    footballQuote: "我不站队，我站名场面。",
    breakdownMoment: "比赛 0:0、没有球星、没有冲突、没有表情包。",
    friendCircleCopy:
      "我是【世界杯发疯吗喽】。平时还算正常，世界杯期间不保证。",
    ratings: { passion: 5, tactics: 1, memeEnergy: 5, loyalty: 2, chaos: 5 },
  },
  HSIL: {
    code: "HSIL",
    title: "悲情主角守墓人",
    subtitle: "你爱的不是胜利，是“差一点”的宿命感。",
    keywords: ["悲情", "主角滤镜", "沉默", "忠诚", "意难平"],
    description:
      "你表面很安静，实际上已经在心里给喜欢的球员剪完了退役混剪。你最容易被老将、伤病、最后一舞和差一口气击中。别人看淘汰赛，你看人生无常。",
    footballQuote: "足球最狠的地方，是它真的不给所有故事一个圆满结局。",
    breakdownMoment: "老将替补、队长落泪、最后一次世界杯提前结束。",
    friendCircleCopy: "我是【悲情主角守墓人】。我不是爱哭，我只是对命运感过敏。",
    ratings: { passion: 4, tactics: 2, memeEnergy: 2, loyalty: 5, chaos: 3 },
  },
  HSIW: {
    code: "HSIW",
    title: "高冷颜值球探",
    subtitle: "嘴上随便看看，手里已经收藏三个球员混剪。",
    keywords: ["颜值", "主角感", "高冷", "内心戏", "混剪"],
    description:
      "你嘴上说随便看看，实际上已经在 12 分钟内判断出谁有主角脸、谁有破碎感、谁适合剪 BGM。你看球不是看战术，是在看人类命运高光混剪。但你别说，你眼光还真不差。",
    footballQuote: "足球最迷人的地方，是有人真的像命运的主角。",
    breakdownMoment: "喜欢的球员替补、受伤、镜头太少，或者发型突然不对。",
    friendCircleCopy: "我是【高冷颜值球探】。我不是颜控，我是在识别主角气质。",
    ratings: { passion: 3, tactics: 1, memeEnergy: 3, loyalty: 2, chaos: 3 },
  },
  HTEL: {
    code: "HTEL",
    title: "沙发区无证主帅",
    subtitle: "你距离执教国家队只差一个足协不知道你存在。",
    keywords: ["无证主帅", "换人啊", "战术", "开麦", "忠诚"],
    description:
      "你看球最大的痛苦不是输球，而是教练完全不执行你在沙发上的战术部署。每次换人晚了，你都觉得世界足球错失了一位天才教练。你不是单纯喷，你是真的觉得这时候该变阵了。",
    footballQuote: "这场输在哪？听我给你复盘。",
    breakdownMoment: "你喊了 30 分钟的换人，教练到 88 分钟才动。",
    friendCircleCopy: "我是【沙发区无证主帅】。不懂球的人在看比分，懂球的人在骂换人。",
    ratings: { passion: 5, tactics: 5, memeEnergy: 4, loyalty: 5, chaos: 4 },
  },
  HTEW: {
    code: "HTEW",
    title: "战术发疯指挥官",
    subtitle: "一边聊压迫触发点，一边在群里刷换人啊。",
    keywords: ["战术", "发疯", "开麦", "乐子", "指挥欲"],
    description:
      "你能看懂战术，但你的情绪管理经常看不懂你。你上一秒还在分析中场站位，下一秒就因为边后卫回传开始原地爆炸。你不是不理性，你只是理性得太激动。",
    footballQuote: "专业分析是我的底色，激情破防是我的表达。",
    breakdownMoment: "明明能高位压迫，结果全队开始退守挨打。",
    friendCircleCopy: "我是【战术发疯指挥官】。我懂球，但我也要骂。",
    ratings: { passion: 5, tactics: 5, memeEnergy: 5, loyalty: 2, chaos: 5 },
  },
  HTIL: {
    code: "HTIL",
    title: "阴暗战术老登",
    subtitle: "表面不说话，心里已经开完三次战术会议。",
    keywords: ["老登", "战术", "内心戏", "忠诚", "阴暗开会"],
    description:
      "别人在看进球，你在看站位；别人在骂前锋，你在骂出球结构。你表面沉默，内心已经把两个边后卫、一个后腰和主教练全部开会。你的问题不是不懂球，是懂得有点影响社交。",
    footballQuote: "足球不是 22 个人追一个球，是空间、时间和选择。",
    breakdownMoment: "球队连续 20 分钟出不了球，但教练完全不调整。",
    friendCircleCopy: "我是【阴暗战术老登】。不吵不闹，但我真的看懂了。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 2, loyalty: 5, chaos: 2 },
  },
  HTIW: {
    code: "HTIW",
    title: "冷脸体系赌狗",
    subtitle: "你嘴上冷静分析，心里已经押注下一个版本答案。",
    keywords: ["体系", "冷脸", "赌狗", "版本答案", "内心戏"],
    description:
      "你表面在说“这个队的压迫结构不错”，实际心里已经把冠军赔率和晋级路线算了一遍。你不太相信玄学，但你很相信趋势。你不是墙头草，你只是提前切换到了正确版本。",
    footballQuote: "足球没有永远的主队，只有不断更新的版本答案。",
    breakdownMoment: "你刚看好的队，下一场就被爆冷打回原形。",
    friendCircleCopy: "我是【冷脸体系赌狗】。我不冲动，我只是提前布局。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 3, loyalty: 1, chaos: 4 },
  },
  CSEL: {
    code: "CSEL",
    title: "情怀型老球迷",
    subtitle: "你看的是球，也是自己的青春存档。",
    keywords: ["情怀", "忠诚", "冷静", "巨星", "青春"],
    description:
      "你不一定每场都大喊大叫，但你记得很多年前的球衣、进球、夏天和遗憾。你看球像翻旧照片，嘴上说看淡了，真到淘汰赛还是会心里一紧。",
    footballQuote: "我不是还在等他们赢，我是在等青春给我回个消息。",
    breakdownMoment: "老球员退场、熟悉的队再次输在同一个地方。",
    friendCircleCopy: "我是【情怀型老球迷】。有些主队不是选择，是命。",
    ratings: { passion: 3, tactics: 2, memeEnergy: 2, loyalty: 5, chaos: 1 },
  },
  CSEW: {
    code: "CSEW",
    title: "冠军粉流浪汉",
    subtitle: "你的主队不是变了，只是在升级配置。",
    keywords: ["冠军粉", "流浪", "巨星", "爽感", "灵活站队"],
    description:
      "你看球很务实：谁强、谁帅、谁有冠军相，你就先借住一下。老球迷说你墙头草，你说自己是开放式支持。你不是没有忠诚，你忠诚于好看的足球和快乐。",
    footballQuote: "我不是背叛主队，我只是追求更高质量的精神生活。",
    breakdownMoment: "刚宣布支持一队，它立刻被淘汰。",
    friendCircleCopy: "我是【冠军粉流浪汉】。我的足球国籍随淘汰赛实时更新。",
    ratings: { passion: 2, tactics: 2, memeEnergy: 4, loyalty: 1, chaos: 4 },
  },
  CSIL: {
    code: "CSIL",
    title: "主角滤镜鉴赏家",
    subtitle: "你不是颜控，你是在研究命运如何打光。",
    keywords: ["主角滤镜", "安静", "颜值", "故事", "内心戏"],
    description:
      "你看球不吵，但你很会观察谁有主角气质。一个眼神、一次庆祝、一个慢镜头，你就能判断这个人适不适合被剪成三分钟封神视频。你不一定懂所有战术，但你懂镜头语言。",
    footballQuote: "真正的球星，连沉默都像伏笔。",
    breakdownMoment: "你看好的主角没有首发，或者全场没有高光镜头。",
    friendCircleCopy: "我是【主角滤镜鉴赏家】。我的眼光可能比球探还毒。",
    ratings: { passion: 2, tactics: 1, memeEnergy: 3, loyalty: 3, chaos: 2 },
  },
  CSIW: {
    code: "CSIW",
    title: "安静追星型破防人",
    subtitle: "表面淡淡的，心里已经为他赢了三次世界杯。",
    keywords: ["追星", "安静", "破防", "主角", "爽感"],
    description:
      "你平时看起来很理智，但只要你喜欢的球员一拿球，你的精神状态就开始变得不稳定。你不一定在群里发疯，但你会默默截图、收藏、反复看集锦，然后假装自己只是路过。",
    footballQuote: "我没有入坑，我只是暂时被命运击中。",
    breakdownMoment: "喜欢的球员被换下、错失单刀、或者赛后红眼。",
    friendCircleCopy: "我是【安静追星型破防人】。我没疯，我只是喜欢的人在踢世界杯。",
    ratings: { passion: 3, tactics: 1, memeEnergy: 3, loyalty: 2, chaos: 3 },
  },
  CTEL: {
    code: "CTEL",
    title: "理性忠诚受害者",
    subtitle: "你知道问题在哪，但你还是每届都回来受伤。",
    keywords: ["理性", "忠诚", "战术", "受害者", "复盘"],
    description:
      "你不是盲目支持，你清楚球队哪里不行、教练哪里保守、阵容哪里缺陷。但最惨的是，你全都知道，还是会继续看。你是理性和情怀共同折磨下的成熟受害者。",
    footballQuote: "我已经看穿了问题，但我还没看开。",
    breakdownMoment: "赛前分析的所有隐患，比赛里全部应验。",
    friendCircleCopy: "我是【理性忠诚受害者】。我不是不懂，我只是放不下。",
    ratings: { passion: 2, tactics: 5, memeEnergy: 2, loyalty: 5, chaos: 1 },
  },
  CTEW: {
    code: "CTEW",
    title: "懂球但不装的乐子人",
    subtitle: "能聊站位，也能为乌龙球快乐三分钟。",
    keywords: ["懂球", "乐子人", "战术", "开麦", "快乐"],
    description:
      "你能看懂战术，但你也允许自己为倒钩、远射、爆冷和门将低级失误快乐。你是少数既能聊压迫触发点，也能玩梗的人。专业可以有，快乐不能少。",
    footballQuote: "专业分析到此为止，接下来开始发疯。",
    breakdownMoment: "比赛既没战术内容，也没乐子。",
    friendCircleCopy: "我是【懂球但不装的乐子人】。我懂球，但我不端着。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 5, loyalty: 1, chaos: 4 },
  },
  CTIL: {
    code: "CTIL",
    title: "战术区潜水老登",
    subtitle: "你在群里不说话，但心里已经把所有人开除了懂球籍。",
    keywords: ["潜水", "战术", "老登", "内心戏", "冷静"],
    description:
      "你看球很少发言，因为你知道一开口就会显得大家不太懂。你喜欢观察站位、节奏和压迫，不喜欢无效激情。你最大的问题是太冷静，冷静到像在给比赛写审计报告。",
    footballQuote: "热闹是他们的，站位图是我的。",
    breakdownMoment: "群里所有人都在骂前锋，但真正的问题明明是中场失控。",
    friendCircleCopy: "我是【战术区潜水老登】。我不发言，不代表我没在心里判案。",
    ratings: { passion: 1, tactics: 5, memeEnergy: 2, loyalty: 4, chaos: 1 },
  },
  CTIW: {
    code: "CTIW",
    title: "冷静版本答案猎人",
    subtitle: "你不是墙头草，你只是比别人更早发现谁要夺冠。",
    keywords: ["版本答案", "冷静", "体系", "爽感", "理性投资"],
    description:
      "你看世界杯像看版本更新。谁阵容合理，谁战术先进，谁状态正热，你很快就能闻到味。你不沉迷情怀，也不盲目追星，你只想站在正确的一边。",
    footballQuote: "感情会骗人，比赛内容不会。",
    breakdownMoment: "你选中的版本答案突然整活，被弱队拖进点球。",
    friendCircleCopy: "我是【冷静版本答案猎人】。我不是墙头草，我是数据驱动型球迷。",
    ratings: { passion: 1, tactics: 5, memeEnergy: 3, loyalty: 1, chaos: 3 },
  },
};

export const fanPersonaList = Object.values(fanPersonas);
