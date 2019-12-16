'use strict';
'use very strict';

const StringTable = {

  /* ----- ENGLISH ----- */

  "en" : {
    "documentTitle" : "Kotri's Personal Home Page",
    "nameCardData" : {
      "name" : "Kotri",
      "items" : [
        {
          "key" : "LEVEL",
          "value" : "208"
        },
        {
          "key" : "HP",
          "value" : "8739"
        },
        {
          "key" : "MP",
          "value" : "654"
        }
      ]
    },
    "welcomeData" : {
      subtitle: "\"Welcome to my world.\"",
      description: "I'm a Data Scientist, a web developer and a cute anime girl.\nLiving alone in the Painting World.",
      thoughts: "Thoughts",
      adventures: "Events",
      history: "History",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      tachieURL: "images/tia.png"
    },
    "thoughtsMetadata" : {
      title: "MODELING REALITY",
      subtitle: "\"270 years after statistical AI, the degree of freedom in human society dropped to zero.\""
    },
    "adventuresMetadata" : {
      title: "EMOTIONAL LOCAL MAXIMA",
      subtitle: "\"As a student, you must play video games. You won't have time after getting a job.\""
    },
    "historyMetadata" : {
      title: "TIME-SERIES TRAINING DATA",
      subtitle: "\"The neural network trained with 20 years of video, motion and chemical data.\""
    },
    "projectMetadata" : {
      title: "INTERMEDIATE OUTPUT",
      subtitle: "\"Open source is a bad idea anyways. Rather than creating value, it destroys value of programs.\""
    },
    "skillsMetadata" : {
      title: "PIPELINE MIDDLEWARES",
      subtitle: "\"This Well-Rounder hammer build has 38 distinct skills each at level 1.\""
    },
    "thoughtsArticles" : [
      {
        "title": "My three rules of life",
        "content": "1. I cannot find a job.\n2. I cannot find a love.\n3. I cannot earn money.\nBecause I know I just can't.",
        "image": "images/articles/dt1.jpg",
        "href" : "https://telegra.ph/Darkness-Theory-1-%E4%BA%BA%E9%97%B4%E5%A4%B1%E6%A0%BC-12-15"
      },
      {
        "title": "The end of economical growth",
        "content": "People live in an illusion called exponential growth.\nThere is never exponential growth in the world - only logistic ones.\nWhen the economical growth stops, the unpowered can do nothing but fall back.\nBack to square one - the Malthusian trap where they can barely survive.",
        "image": "images/articles/dt2.jpg",
        "href" : "https://telegra.ph/Darkness-Theory-2-%E5%A2%9E%E9%95%BF%E7%BB%88%E7%BB%93-12-15"
      },
      {
        "title": "Cycles, nations and their limits",
        "content": "Very often does a nation destroy itself in one of the cycles.\nThe reason the world doesn't end in this way, is that other nations will come and take the place.\nHowever, globalization unifies all.\nWhen humanity is eventually unified, one of the cycles will probably spell its end.",
        "image": "images/articles/dt3.jpg",
        "href" : "https://telegra.ph/Darkness-Theory-3-%E5%88%86%E4%B9%85%E5%BF%85%E5%90%88-12-15"
      },
      {
        "title": "Reverse Anthropic Principle",
        "content": "If there exists a universe whose inhabitants can live on forever,\nthen the ephemeral human beings will be statistically insignificant to exist here.\nHence, the reverse anthropic principle.\nThe only possibility is for all beings to equally come to an end.",
        "image": "images/articles/dt4.jpg",
        "href" : "https://telegra.ph/Darkness-Theory-4-%E9%80%86%E4%BA%BA%E6%8B%A9%E5%8E%9F%E7%90%86-12-15"
      }
    ],
    "adventuresArticles" : [
      {
        "title": "Atelier Series",
        "content": "Gust's Atelier series is my favorite franchise.\nI have played each one in Mysterious trilogy (Sophie, Firis, Lydie/Suelle) twice,\nthen explored Arland with Rorona, Totori, Meruru and finally Lulua. \nAnother great mention is Atelier Questboard, where it took me a year to finally beat the final stage.\nRyza has a rather short story but is also a really great game.\nLooking forward to Dusk DX!",
        "image": "images/articles/atelier.jpg",
        "href" : "https://www.koeitecmoamerica.com/duskdx/"
      },
      {
        "title": "Monster Hunter",
        "content": "In the undergraduate period I played my first Monster Hunter, MHP3 on PPSSPP Emulator.\nLater on, I borrowed a used 3DS and finished the main story in MH Generations.\nSince 2018 I achieved platinum trophy on Monster Hunter World PS4 and later on reached endgame in Iceborne.\nMainly use a gunlance or a hammer, while sometimes playing Hunting Horn as well.\nProbably the most 'AAA' type of game I have indulged in.",
        "image": "images/articles/mhw.jpg",
        "href" : "https://medium.com/@kotri/%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BA%E5%86%B0%E5%8E%9F%E9%94%A4%E5%AD%90%E9%85%8D%E8%A3%85%E5%88%86%E4%BA%AB-368ac483bef1"
      },
      {
        "title": "Factorio",
        "content": "This great city builder game made me play three times.\nFirst time on v0.14, second time v0.16, it felt really great to build a ludicrous industry production line while producing nukes to drop on some innocent biters. \nThen it comes to v0.17, I played the third time to try the new settings, but it was too customizable and I accidentally got a map with almost no biters at all...",
        "image": "images/articles/factorio.jpg",
        "href" : "https://store.steampowered.com/app/427520/Factorio/"
      },
      {
        "title": "Love Live!",
        "content": "SchoolFes was the best game on mobile; the other ones were just too greedy.\nProbably my first kind of music game which led me the way to the pandora's box.\nMy favorite character was Kotori&lt;3",
        "image": "images/articles/ll.jpg",
        "href" : "https://love-live.fandom.com/wiki/Love_Live!"
      },
      {
        "title": "Music Games",
        "content": "Around 2015 I played Maimai massively in a nearby arcade.\nThe best result I've achieved was a full combo on Lv.10 Master Momoiro Clover.\nAlso played a little Jubeat and Dynamix, getting to around level 8.\nAfter I had a PS4 also immediately bought Project Diva Future Tone. (It's too hard considering Miku..)",
        "image": "images/articles/mug.jpg",
        "href" : "https://www.youtube.com/watch?v=SLxSX5heyLk"
      },
      {
        "title": "Zachtronics Games",
        "content": "Opus Magnum and Spacechem. Well, it was too much programming.",
        "image": "images/articles/opus.jpg",
        "href" : "https://store.steampowered.com/app/558990/Opus_Magnum/"
      }
    ],
    "historyArticles" : [
      {
        "title": "Tell them, I've had a wonderful life",
        "content": "Tell them, I've lived a wonderful life.\nNothing more wonderful could this life be like.\nNext world, maybe we can finally begin putting some effort.\nAnd it wouldn't be bad if we don't.",
        "href" : "https://ar3.moe/dd/?t=138",
        "important" : false
      },
      {
        "title": "Sour Lemon/Yellow Lemon",
        "content": "For someone like me, the only and best way of life is to play games until the end of the world.\nTrying to join the normal crew is futile, but I accept this as I knew I would since long ago.\nAnd I have done it. Ever annoyed, perplexed, but always believed it was correct.",
        "href" : "https://ar3.moe/dd/?t=137",
        "important" : false
      },
      {
        "title": "Postgraduate Outside Wall Maria (2018 - 2019)",
        "content": "People said that it takes effort to study abroad.\nNope, it was basically cash and luck.\nNo effort is ever required in this world to success in anything.",
        "href" : "https://ar3.moe/dd/?t=131",
        "important" : true
      },
      {
        "title": "Failed Job Interviews (2017)",
        "content": "A lot people talk about successful job interviews.\nDoes anyone say how badly they failed?\nProbably not, as it would invoke trauma of readers and consequently drop their followers.",
        "href" : "https://ar3.moe/dd/?t=136",
        "important" : false
      },
      {
        "title": "University Life (2013 - 2017)",
        "content": "My life in university literally consists of video games.\nAnd more video games.\nFor the other things, I cannot possible achieve them anyways.",
        "href" : "https://ar3.moe/dd/?t=135",
        "important" : true
      },
      {
        "title": "Grievous Highschool Period (2010 - 2012)",
        "content": "It was painful at that time.\nThe five stage of grief - denial, anger, bargaining, depression, acceptance.\nIf I go through these five stages, do I become less grievous, or even more?",
        "href" : "https://ar3.moe/dd/?t=134",
        "important" : true
      },
      {
        "title": "Truth Hidden between the Pages (2007 - 2010)",
        "content": "Reading books grants knowledge.\nHowever, beyond knowledge there lies the truth, and the truth hurts.",
        "href" : "https://ar3.moe/dd/?t=133",
        "important" : true
      },
      {
        "title": "The Beginning of Everything Else",
        "content": "I could have walked down the same path as theirs, as a so-called genius, pridefully.\nBut it was the path to doom, it was a path which would bring me nothing but eternal suffering.",
        "href" : "https://ar3.moe/dd/?t=132",
        "important" : false
      }
    ],
    "projectArticles" : [
      {
        "title": "HimeJumper",
        "content": "Existential Webgame using some character from 100% Orange Juice!.",
        "image": "images/thumbnails/himejumper.jpg",
        "href" : "https://kotritrona.github.io/jump2048/ojhime.html"
      },
      {
        "title": "OMPuzzle",
        "content": "Custom puzzle builder for Opus Magnum.",
        "image": "images/thumbnails/ompuzzle.jpg",
        "href" : "https://kotritrona.github.io/opusmagnum-puzzle-editor/ompuzzle.html"
      },
      {
        "title": "osumapper",
        "content": "Automatic beatmap creation engine using Tensorflow Deep Learning (TM).",
        "image": "images/thumbnails/osumapper.jpg",
        "href" : "https://github.com/kotritrona/osumapper"
      },
      {
        "title": "Postbar",
        "content": "Recreated Tieba in 2012 design, using some sort of Github API to post and reply.",
        "image": "images/thumbnails/216.jpg",
        "href" : "https://github.com/kotritrona/postbar"
      },
      {
        "title": "zzencode",
        "content": "Encode any Javascript to symbols only.",
        "image": "images/thumbnails/zzencode.jpg",
        "href" : "https://ar3.moe/zzencode/"
      },
      {
        "title": "2e48",
        "content": "Magically edited 2048 to become a Clicker Hero type of game.",
        "image": "images/thumbnails/2e48.jpg",
        "href" : "https://ar3.moe/2e48/"
      },
      {
        "title": "gem2048",
        "content": "Because the gem combining concepts are just alike...",
        "image": "images/thumbnails/gem2048.jpg",
        "href" : "https://kotritrona.github.io/gem2048/"
      }
    ],
    "skillsArticles" : [
      {
        "title": "JavaScript",
        "content": "18 years of experience in JScript. Been using the marquee element since elementary school.",
        "href" : undefined,
        "level" : 100
      },
      {
        "title": "HTML",
        "content": "Able to program HTML directly without using preprocessors or frameworks. Even for HTML less than 5.",
        "href" : undefined,
        "level" : 90
      },
      {
        "title": "Loneliness Management",
        "content": "Some people are not afraid of being alone. I am afraid of not being alone.",
        "href" : undefined,
        "level" : 88
      },
      {
        "title": "CSS/LESS",
        "content": "Also SCSS but that is basically the same thing as Less. All styles on this site were handwritten.",
        "href" : undefined,
        "level" : 78
      },
      {
        "title": "Python",
        "content": "Not afraid of real pythons. They are not poisonous after all.",
        "href" : undefined,
        "level" : 76
      },
      {
        "title": "Machine Learning",
        "content": "When even the machine is learning, you know it would be pretty hard for you to catch up.",
        "href" : undefined,
        "level" : 73
      },
      {
        "title": "Steam",
        "content": "Who would expect using Steam to be such an important skill?",
        "href" : "https://steamcommunity.com/profiles/76561198375746173/",
        "level" : 70
      },
      {
        "title": "Mathematics",
        "content": "That one time I was the only person who stayed in the course in the whole class.",
        "href" : undefined,
        "level" : 65
      },
      {
        "title": "Precrastination",
        "content": "Usually pulls off every single task over a week earlier than schedule so the rest of time is dedicated to videogames.",
        "href" : undefined,
        "level" : 62
      },
      {
        "title": "Statistics",
        "content": "Statistically, having so many skills is significantly improbable to be true.",
        "href" : undefined,
        "level" : 53
      },
      {
        "title": "Japanese",
        "content": "If that was true shouldn't I have a Japanese option on this site, instead of putting it here?",
        "href" : undefined,
        "level" : 52
      },
      {
        "title": "Imagination",
        "content": "I have a whole world in me. The Painting World.",
        "href" : "https://store.steampowered.com/app/756590",
        "level" : 50
      },
      {
        "title": "Music Games",
        "content": "Jubeat, osu!, maimai, Love Live! and Dynamix.",
        "href" : undefined,
        "level" : 45
      },
      {
        "title": "Node.js",
        "content": "Nope. Just use WScript.",
        "href" : undefined,
        "level" : 44
      },
      {
        "title": "Reading",
        "content": "Reading books does not make you more smart. Instead, it lets you realize how stupid you are.",
        "href" : "https://jamesbridle.com/books",
        "level" : 41
      },
      {
        "title": "Data Visualization",
        "content": "Tableau and D3.js for drawing pie charts.",
        "href" : "https://medium.com/@kotri/roronas-machine-learning-lab-part-1-4-1-b68d904174c2",
        "level" : 39
      },
      {
        "title": "Text Processing",
        "content": "People call it natural language processing, but nope, language is not natural at all.",
        "href" : undefined,
        "level" : 38
      },
      {
        "title": "R",
        "content": "Just use OLS.",
        "href" : undefined,
        "level" : 38
      },
      {
        "title": "Platforming",
        "content": "Completed several I Wanna styled games such as I Wanna See The Moon.",
        "href" : undefined,
        "level" : 36
      },
      {
        "title": "Action Gaming",
        "content": "Veteran G-Rank player in Monster Hunter.",
        "href" : undefined,
        "level" : 36
      },
      {
        "title": "Web Server",
        "content": "Installed forums, blog, cloud storage, database, music player and webgames on the server to create my own instance of internet.",
        "href" : "https://ar3.moe/dd/",
        "level" : 35
      },
      {
        "title": "Quantum Mechanics",
        "content": "When people cannot be certain on things.",
        "href" : undefined,
        "level" : 35
      },
      {
        "title": "Parallel Computing",
        "content": "Knows about MPI, OpenMP and Web Workers.",
        "href" : undefined,
        "level" : 32
      },
      {
        "title": "Savoir Faire",
        "content": "That is clearly NOT the right thing to do.",
        "href" : "https://discoelysium.gamepedia.com/Savoir_Faire",
        "level" : 31
      },
      {
        "title": "PowerPoint",
        "content": "It's just like making a one pager web app.",
        "href" : "https://www.youtube.com/watch?v=uNjxe8ShM-8",
        "level" : 29
      },
      {
        "title": "Linux",
        "content": "Why is Linux a skill while Windows isn't?",
        "href" : undefined,
        "level" : 28
      },
      {
        "title": "Education",
        "content": "Mainly how to make other people fail in educating myself.",
        "href" : undefined,
        "level" : 28
      },
      {
        "title": "Photoshop",
        "content": "For example, the background above was done by myself.",
        "href" : undefined,
        "level" : 26
      },
      {
        "title": "Music",
        "content": "Learned music theory and how to use FL Studio just to create a program that makes music game beatmaps.",
        "href" : undefined,
        "level" : 26
      },
      {
        "title": "Cryptography",
        "content": "RSA and Elliptic Curve. Blockchain Cryptocurrencies!",
        "href" : undefined,
        "level" : 25
      },
      {
        "title": "Excel",
        "content": "It's the spreadsheets.",
        "href" : undefined,
        "level" : 23
      },
      {
        "title": "PHP",
        "content": "It is still relevant.",
        "href" : undefined,
        "level" : 23
      },
      {
        "title": "Cloud Computing",
        "content": "Still prefer to use my own server than to rely on their services.",
        "href" : undefined,
        "level" : 20
      },
      {
        "title": "React",
        "content": "Why would people use JSX when there is the fully optimized innerHTML?",
        "href" : undefined,
        "level" : 16
      },
      {
        "title": "Assembly",
        "content": "x86 Assembly for Cheat Engine.",
        "href" : undefined,
        "level" : 14
      },
      {
        "title": "C/C++",
        "content": "And also C#. Wait, they are not the same thing.",
        "href" : undefined,
        "level" : 12
      },
      {
        "title": "Sewing",
        "content": "Can fix my broken bags and clothes when I don't feel like buying a new one.",
        "href" : undefined,
        "level" : 11
      },
      {
        "title": "Android Studio",
        "content": "One afternoon of experience in using Java and Android Studio. Successfully built an app!",
        "href" : undefined,
        "level" : 10
      },
      {
        "title": "Lua",
        "content": "LuaError: unknown object under TEXT_BABA",
        "href" : undefined,
        "level" : 7
      },
      {
        "title": "Unity",
        "content": "Reading the book that teaches it was really fun, but I never managed to actually try.",
        "href" : undefined,
        "level" : 6
      },
      {
        "title": "Angular",
        "content": "I read a full book about its fancy stuff, but I don't believe it's useful in any situation I would face.",
        "href" : undefined,
        "level" : 5
      },
      {
        "title": "Spell Damage +1",
        "content": "Increases all damage dealt using spells by 1.",
        "href" : "https://gamepedia.cursecdn.com/hearthstone_gamepedia/3/3e/Archmage(545).png",
        "level" : 1
      }
    ],
    "socialLinks" : [
      {
        "text" : "Twitter",
        "iconClass" : "fab fa-twitter",
        "href" : "https://www.twitter.com/Kotri_Lv204",
        "gauge" : 100
      },
      {
        "text" : "GitHub",
        "iconClass" : "fab fa-github",
        "href" : "https://github.com/kotritrona",
        "gauge" : 90
      },
      {
        "text" : "PlayStation",
        "iconClass" : "fab fa-playstation",
        "href" : "https://psnprofiles.com/kotri_lv183",
        "gauge" : 80
      },
      {
        "text" : "Steam",
        "iconClass" : "fab fa-steam",
        "href" : "https://steamcommunity.com/profiles/76561198375746173/",
        "gauge" : 75
      },
      {
        "text" : "Medium",
        "iconClass" : "fab fa-medium",
        "href" : "https://medium.com/@kotri/",
        "gauge" : 50
      },
      {
        "text" : "Telegram",
        "iconClass" : "fab fa-telegram",
        "href" : "https://t.me/kotri_lv191",
        "gauge" : 40
      },
      {
        "text" : "YouTube",
        "iconClass" : "fab fa-youtube",
        "href" : "https://www.youtube.com/channel/UCjCEipop5hs4llX09nTdaOw",
        "gauge" : 15
      }
    ],
    "footer" : "Copyright " + String.fromCodePoint(127819) + " Kotri Lv.208 2019. I do not track you!",
    "footerDark" : "(because I don't want to find out no one ever visited)"
  },

  /* ----- CHINESE SIMPLIFIED ----- */

  "zh-cn" : {
    "documentTitle" : "柯朵莉的绘画世界",
    "nameCardData" : {
      "name" : "Kotri",
      "items" : [
        {
          "key" : "LEVEL",
          "value" : "208"
        },
        {
          "key" : "HP",
          "value" : "8739"
        },
        {
          "key" : "MP",
          "value" : "654"
        }
      ]
    },
    "welcomeData" : {
      subtitle: "「早安，一起喝杯茶吧。」",
      description: "机器学习，网页编程，以及，二次元。\n一个人住在绘画世界。",
      thoughts: "文章",
      adventures: "经历",
      history: "学业",
      projects: "项目",
      skills: "技能",
      contact: "联系",
      tachieURL: "images/tia.png"
    },
    "thoughtsMetadata" : {
      title: "人生哲学",
      subtitle: "「人工智能诞生的两百年后，人类社会的统计自由度降为了零。」"
    },
    "adventuresMetadata" : {
      title: "旅途经历",
      subtitle: "「作为学生，最重要的是多打游戏。迈入社会之后，就再也没有机会了。」"
    },
    "historyMetadata" : {
      title: "学校教育",
      subtitle: "「我们组合了视频、音频、动作和化学信息，对这个神经网络连续训练了20年。」"
    },
    "projectMetadata" : {
      title: "项目经验",
      subtitle: "「开源社区是程序员最糟糕的发明。它不是在创造价值，而是毁灭了价值。」"
    },
    "skillsMetadata" : {
      title: "技能工具",
      subtitle: "「这个混乱套装特点是技能特别多，有38个技能，不过每个只有1级。」"
    },
    "thoughtsArticles" : [
      {
        "title": "我的人生三定律",
        "content": "1. 我不可能找到工作。\n2. 我不可能恋爱结婚。\n3. 我不可能挣到钱。\n因为我早就明白，我这样的人不可能在这样的社会里生存。",
        "image": "images/articles/dt1.jpg",
        "href" : "https://telegra.ph/Darkness-Theory-1-%E4%BA%BA%E9%97%B4%E5%A4%B1%E6%A0%BC-12-15"
      },
      {
        "title": "指数增长的虚拟终点",
        "content": "人们生活在指数增长的幻想中。\n但现实不是这样的。现实中没有指数增长，只有——S形曲线。\n当科技与经济停止增长的时候，一切都会回到原点。\n回到人类应有的样子，那个几乎吃不饱饭的马尔萨斯陷阱。",
        "image": "images/articles/dt2.jpg",
        "href" : "https://telegra.ph/Darkness-Theory-2-%E5%A2%9E%E9%95%BF%E7%BB%88%E7%BB%93-12-15"
      },
      {
        "title": "分久必合，合久，就什么也没有了",
        "content": "一个国家经常在某个循环中毁灭掉自己。\n之所以人类没有因此灭亡，是因为有其他不同阶段的国家进来重新占领。\n但是全球化的趋势终将统一世界，\n而统一后的世界，或许下一个循环的结束之时，就是一切的终点。",
        "image": "images/articles/dt3.jpg",
        "href" : "https://telegra.ph/Darkness-Theory-3-%E5%88%86%E4%B9%85%E5%BF%85%E5%90%88-12-15"
      },
      {
        "title": "逆人择原理",
        "content": "如果存在某个世界，那里作为人的生物能够永久的存在下去，\n那么统计学上来说，有限对无限，人类存在于现在这个世界的概率为零。\n这就是逆人择原理——\n唯一的可能性就是，所有的世界线上，所有类似人的生物，都会像人类现在这样灭亡。",
        "image": "images/articles/dt4.jpg",
        "href" : "https://telegra.ph/Darkness-Theory-4-%E9%80%86%E4%BA%BA%E6%8B%A9%E5%8E%9F%E7%90%86-12-15"
      }
    ],
    "adventuresArticles" : [
      {
        "title": "炼金工房系列",
        "content": "Gust的炼金工作室系列的忠实粉丝。\n先是在PC平台上接触了不可思议系列的三部作品，\n后来白金通关了PS4版的亚兰德四部曲以及莱莎、奈尔克。\n另外有个工作室手游（アトリエ クエストボード）也是神作（后来停止运营了）。\n期待接下来发售的黄昏DX系列。",
        "image": "images/articles/atelier.jpg",
        "href" : "https://www.koeitecmoamerica.com/duskdx/"
      },
      {
        "title": "怪物猎人",
        "content": "最初是PPSSPP模拟器接触的MHP3，以及用室友的3DS通关MHX（还记得骸龙卡了一星期）\n后来PS4上的怪物猎人世界，因为实在太好玩，甚至刷出大小金达成了白金。\n再后来就是现在的冰原，MR100+通关。主要武器是铳枪和大锤，有时也换长柄锤。\n冰原说好的白兔兽呢！（怨念）",
        "image": "images/articles/mhw.jpg",
        "href" : "https://medium.com/@kotri/%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BA%E5%86%B0%E5%8E%9F%E9%94%A4%E5%AD%90%E9%85%8D%E8%A3%85%E5%88%86%E4%BA%AB-368ac483bef1"
      },
      {
        "title": "异星工厂",
        "content": "挺喜欢这类工厂建设游戏的，建起来一大片一大片的流水线。\n怎么说呢，就像是成功搭好编译、连接、发布流程的时候那种感觉？\n思考。\n还能造核弹炸虫子。真好。",
        "image": "images/articles/factorio.jpg",
        "href" : "https://store.steampowered.com/app/427520/Factorio/"
      },
      {
        "title": "Love Live!",
        "content": "Love Live是最好的手游，玩了这个手游，就不会再想玩别的了。\n想起来那时候，也算是我的第一款音游了，笑。\n学校的大家为了偶像缪斯而牺牲自己的样子，难道不是最可爱了吗！（误）",
        "image": "images/articles/ll.jpg",
        "href" : "https://love-live.fandom.com/wiki/Love_Live!"
      },
      {
        "title": "音乐游戏",
        "content": "后来有时候就会去附近的机厅打一打maimai，以及jubeat。\n当时最好的成绩大概是全连了一个10级的歌，叫桃草什么的。\n后来有了PS4之后迅速买下了初音DIVA Future Tone，不过这游戏也太难玩了……",
        "image": "images/articles/mug.jpg",
        "href" : "https://www.youtube.com/watch?v=SLxSX5heyLk"
      },
      {
        "title": "Zachtronics Games",
        "content": "游戏里还编程，没救了。",
        "image": "images/articles/opus.jpg",
        "href" : "https://store.steampowered.com/app/558990/Opus_Magnum/"
      }
    ],
    "historyArticles" : [
      {
        "title": "告诉他们，我度过了美好的一生",
        "content": "告诉他们，我度过了美好的一生。\n这样的一生，再美不过了。\n下个世界，再开始努力吧。\n——「不，下个世界也不努力，也没关系的。」",
        "href" : "https://ar3.moe/dd/?t=138",
        "important" : false
      },
      {
        "title": "酸柠檬/黄柠檬",
        "content": "对我这样的人来说，唯一的方式就是，好好享受打游戏的时间，当成人生的最后来度过。\n工作当然是找不到的，这时候所需要做的就是，接受这个结果，好好在家打游戏。\n我也一直以来都真的这么做了。曾经迷茫过，逃避过，但认为这么做是错的，一次也没有。",
        "href" : "https://ar3.moe/dd/?t=137",
        "important" : false
      },
      {
        "title": "留学篇 (2018 - 2019)",
        "content": "人们说出国留学很难。\n怎么会呢，一点都不难。只需要两样东西：运气和金钱。\n努力在任何情况下都是没有必要，也没有用的。",
        "href" : "https://ar3.moe/dd/?t=131",
        "important" : true
      },
      {
        "title": "大学时光之后 (2017)",
        "content": "很多人谈面试成功的经验，所谓面经。\n但是有人谈到过他们是如何面试无数次都失败了的吗？\n大概是不会有了，因为这样的人在现实中没有朋友，没有人会关注他们写了什么。",
        "href" : "https://ar3.moe/dd/?t=136",
        "important" : false
      },
      {
        "title": "大学时光 (2013 - 2017)",
        "content": "大学四年，几乎没有学习压力，好好打了四年游戏。\n我没有压力，没有犹豫，因为我明白这样才是对的。\n啊，当时最好玩的游戏，我认为是Love Live。",
        "href" : "https://ar3.moe/dd/?t=135",
        "important" : true
      },
      {
        "title": "高中时期 (2010 - 2012)",
        "content": "明白一切的感觉，实在是太痛苦了。\n悲伤的五个阶段：否认，愤怒，讨价还价，抑郁，接受。\n但是五个阶段之后，接受了悲伤，难道不是更悲伤了吗？",
        "href" : "https://ar3.moe/dd/?t=134",
        "important" : true
      },
      {
        "title": "书海无涯，回头是岸 (2007 - 2010)",
        "content": "但是，如果你学校成绩不错，但是人际交往能力极低，连说话也不会说呢？\n没有一本书会告诉你怎么做，才能让这样的人，哪怕只是生存下去。\n那时候，我理解了这份沉默的含义：没有的含义就是，没有。真的没有办法了。",
        "href" : "https://ar3.moe/dd/?t=133",
        "important" : true
      },
      {
        "title": "另一条跑道的起点",
        "content": "如果不是我发现了这一切，或许我之后都会走在他们编织好的名为好学生的路上。\n之后到处进入培训班奥数，把家里的积蓄浪费在毫无意义的提高分数上。\n然后，在走出校园，面对真实之时，发觉自己被欺骗而无意义的一生，竹篮打水一场空。",
        "href" : "https://ar3.moe/dd/?t=132",
        "important" : false
      }
    ],
    "projectArticles" : [
      {
        "title": "姬梦跳跳乐",
        "content": "某个跳一跳小游戏，改编成了100% Orange Juice的人物。",
        "image": "images/thumbnails/himejumper.jpg",
        "href" : "https://kotritrona.github.io/jump2048/ojhime.html"
      },
      {
        "title": "OMPuzzle",
        "content": "用来自制Opus Magnum的游戏关卡的工具，实现了游戏自带编辑器都没实现的功能。",
        "image": "images/thumbnails/ompuzzle.jpg",
        "href" : "https://kotritrona.github.io/opusmagnum-puzzle-editor/ompuzzle.html"
      },
      {
        "title": "osumapper",
        "content": "osu!音乐游戏的自动做图工具，使用机器学习 (Tensorflow) 以及Node.js搭建。",
        "image": "images/thumbnails/osumapper.jpg",
        "href" : "https://github.com/kotritrona/osumapper"
      },
      {
        "title": "github贴吧化计划",
        "content": "利用github API重制的2012旧版贴吧，利用github的issues系统发帖回帖。",
        "image": "images/thumbnails/216.jpg",
        "href" : "https://github.com/kotritrona/postbar"
      },
      {
        "title": "zzencode",
        "content": "把所有的Javascript代码加密符号化。",
        "image": "images/thumbnails/zzencode.jpg",
        "href" : "https://ar3.moe/zzencode/"
      },
      {
        "title": "2e48",
        "content": "撒，谁知道这是做什么用的呢……",
        "image": "images/thumbnails/2e48.jpg",
        "href" : "https://ar3.moe/2e48/"
      },
      {
        "title": "gem2048",
        "content": "我到底在做些什么（笑）",
        "image": "images/thumbnails/gem2048.jpg",
        "href" : "https://kotritrona.github.io/gem2048/"
      }
    ],
    "skillsArticles" : [
      {
        "title": "JavaScript",
        "content": "18年的网页制作经验，然而还是找不到工作。",
        "href" : undefined,
        "level" : 100
      },
      {
        "title": "HTML",
        "content": "可以不利用任何框架直接编写HTML，包括不是HTML5的那种。",
        "href" : undefined,
        "level" : 90
      },
      {
        "title": "Loneliness",
        "content": "有些人不怕孤独，我则是怕不孤独。",
        "href" : undefined,
        "level" : 88
      },
      {
        "title": "CSS/LESS",
        "content": "还有SCSS，不过功能和Less是一样的。现在的程序员真是太敬业了，一个东西写两次。",
        "href" : undefined,
        "level" : 78
      },
      {
        "title": "Python",
        "content": "蟒蛇编程语言。可以用来让机器学习蟒蛇的行为，对程序员进行啃咬。",
        "href" : undefined,
        "level" : 76
      },
      {
        "title": "机器学习",
        "content": "机器都学习了，不知道人类还在学习个什么锤子。",
        "href" : undefined,
        "level" : 73
      },
      {
        "title": "Steam",
        "content": "使用Steam也是一项非常了不起的技能。",
        "href" : "https://steamcommunity.com/profiles/76561198375746173/",
        "level" : 70
      },
      {
        "title": "数学",
        "content": "当时只有我一个人留在了那门课里，我才不像他们一样因为难就怕了。",
        "href" : undefined,
        "level" : 65
      },
      {
        "title": "预判",
        "content": "从不拖延，一般都是提前一星期做好，剩下的时间用来打游戏。",
        "href" : undefined,
        "level" : 62
      },
      {
        "title": "统计学",
        "content": "统计学上来讲，这么多技能是不现实的。",
        "href" : undefined,
        "level" : 53
      },
      {
        "title": "日语",
        "content": "这样是很不合理的，如果真的会日语，为什么不直接给这网站加个日语选项？",
        "href" : undefined,
        "level" : 52
      },
      {
        "title": "想象力",
        "content": "我心中有一个巨大的世界，绘画世界。",
        "href" : "https://store.steampowered.com/app/756590",
        "level" : 50
      },
      {
        "title": "音乐游戏",
        "content": "能反应那么快也是一项了不起的能力了。",
        "href" : undefined,
        "level" : 45
      },
      {
        "title": "Node.js",
        "content": "为什么不用windows自带的WScript呢（笑）",
        "href" : undefined,
        "level" : 44
      },
      {
        "title": "阅读",
        "content": "越读书越明白，读书学习都是没有用的。在这个社会上生存，必要的是社交技巧。网络时代，知识是没有价值的。",
        "href" : "https://jamesbridle.com/books",
        "level" : 41
      },
      {
        "title": "数据可视化",
        "content": "从前炼金术士罗罗娜煮派，现在则有数据工程师画饼图（pie chart）。",
        "href" : "https://medium.com/@kotri/roronas-machine-learning-lab-part-1-4-1-b68d904174c2",
        "level" : 39
      },
      {
        "title": "语言处理",
        "content": "不知道为什么人们把它叫做自然语言处理，要知道人类语言一点也不自然。",
        "href" : undefined,
        "level" : 38
      },
      {
        "title": "R",
        "content": "还是用Excel吧。",
        "href" : undefined,
        "level" : 38
      },
      {
        "title": "动作游戏",
        "content": "曾经打通关过数个以难度著称的I Wanna类游戏。",
        "href" : undefined,
        "level" : 36
      },
      {
        "title": "狩猎",
        "content": "资深怪猎G级猎人。",
        "href" : undefined,
        "level" : 36
      },
      {
        "title": "网络服务器",
        "content": "在服务器上装上了论坛、博客、云盘、数据库、音乐播放器和网页游戏，这样就可以断掉国际互联网，享受自己的局域网了。",
        "href" : "https://ar3.moe/dd/",
        "level" : 35
      },
      {
        "title": "量子力学",
        "content": "遇事不决，量子力学。",
        "href" : undefined,
        "level" : 35
      },
      {
        "title": "并行计算",
        "content": "MPI, OpenMP, Web Workers.",
        "href" : undefined,
        "level" : 32
      },
      {
        "title": "潜行",
        "content": "以及翻滚！这个我在三次元都做得出来！是不是很厉害！！",
        "href" : "https://discoelysium.gamepedia.com/Savoir_Faire",
        "level" : 31
      },
      {
        "title": "PowerPoint",
        "content": "这个大家都会用，但是反正都写了这么多了嘛……",
        "href" : "https://www.youtube.com/watch?v=uNjxe8ShM-8",
        "level" : 29
      },
      {
        "title": "Linux",
        "content": "你说，为什么Linux算一门技能，Windows就不算呢？不公平啊！",
        "href" : undefined,
        "level" : 28
      },
      {
        "title": "教育",
        "content": "为了防止别人教育我，我只好学习了大量教育知识，保证让他们教育不成功。",
        "href" : undefined,
        "level" : 28
      },
      {
        "title": "Photoshop",
        "content": "比如上面那个背景图就是我自己P的。",
        "href" : undefined,
        "level" : 26
      },
      {
        "title": "音乐",
        "content": "学习了整本书的乐理，编曲方式，只为了在音乐游戏里做图。",
        "href" : undefined,
        "level" : 26
      },
      {
        "title": "密码学",
        "content": "现在提到密码学，都是想到区块链、比特币了吧？黄金的魔法太厉害了……",
        "href" : undefined,
        "level" : 25
      },
      {
        "title": "Excel",
        "content": "还是Excel好用，比什么统计软件都好使，好看。",
        "href" : undefined,
        "level" : 23
      },
      {
        "title": "PHP",
        "content": "这位应聘者，你说自己熟悉这些单词的拼写，那么请问，PHP的全称是什么？",
        "href" : undefined,
        "level" : 23
      },
      {
        "title": "云计算",
        "content": "我还是对云计算不放心，还是自己的电脑和硬盘安全。",
        "href" : undefined,
        "level" : 20
      },
      {
        "title": "React",
        "content": "所以说人类就是重复相同的错误，都有innerHTML这么好用的东西了，搞什么JSX……",
        "href" : undefined,
        "level" : 16
      },
      {
        "title": "汇编语言",
        "content": "x86汇编语言（Cheat Engine用）",
        "href" : undefined,
        "level" : 14
      },
      {
        "title": "C/C++",
        "content": "以及C#。",
        "href" : undefined,
        "level" : 12
      },
      {
        "title": "裁缝",
        "content": "可以把坏掉的小熊布偶正常的修好，不需要炼金术。",
        "href" : undefined,
        "level" : 11
      },
      {
        "title": "Android Studio",
        "content": "一个下午的安卓studio经验。我成功在安卓上写出了一个游戏！",
        "href" : undefined,
        "level" : 10
      },
      {
        "title": "Lua",
        "content": "LuaError: unknown object under TEXT_BABA",
        "href" : undefined,
        "level" : 7
      },
      {
        "title": "Unity",
        "content": "那本教人怎么用unity的书倒是挺有意思的，读的津津有味。但是实际用起来就……",
        "href" : undefined,
        "level" : 6
      },
      {
        "title": "Angular",
        "content": "我看了一整本书也没弄明白这东西有什么用，我又不可能找到工作，学这种面向大项目的东西也没有用吧……",
        "href" : undefined,
        "level" : 5
      },
      {
        "title": "法术伤害+1",
        "content": "将所有法术伤害的数值+1。",
        "href" : "https://huiji-public.huijistatic.com/hearthstone/uploads/e/e9/%E9%A3%9F%E4%BA%BA%E9%AD%94%E6%B3%95%E5%B8%88.png",
        "level" : 1
      }
    ],
    "socialLinks" : [
      {
        "text" : "Twitter",
        "iconClass" : "fab fa-twitter",
        "href" : "https://www.twitter.com/Kotri_Lv204",
        "gauge" : 100
      },
      {
        "text" : "GitHub",
        "iconClass" : "fab fa-github",
        "href" : "https://github.com/kotritrona",
        "gauge" : 90
      },
      {
        "text" : "PlayStation",
        "iconClass" : "fab fa-playstation",
        "href" : "https://psnprofiles.com/kotri_lv183",
        "gauge" : 80
      },
      {
        "text" : "Steam",
        "iconClass" : "fab fa-steam",
        "href" : "https://steamcommunity.com/profiles/76561198375746173/",
        "gauge" : 75
      },
      {
        "text" : "Medium",
        "iconClass" : "fab fa-medium",
        "href" : "https://medium.com/@kotri/",
        "gauge" : 50
      },
      {
        "text" : "Zhihu",
        "iconClass" : "fab fa-zhihu",
        "href" : "https://www.zhihu.com/people/kotri-lv145",
        "gauge" : 40
      },
      {
        "text" : "YouTube",
        "iconClass" : "fab fa-youtube",
        "href" : "https://www.youtube.com/channel/UCjCEipop5hs4llX09nTdaOw",
        "gauge" : 15
      }
    ],
    "footer" : "Copyright " + String.fromCodePoint(127819) + " Kotri Lv.208 2019. 我不追踪你的行为！",
    "footerDark" : "我才不想发现我写了这么久网站没一个人看"
  }
};

// StringTable.ne = Object.assign({}, StringTable.en);

// function reverseStrings(obj) {
//   var v = Object.assign({}, obj);
//   for(let s in obj) {
//     if(typeof obj[s] == "string") {
//       v[s] = obj[s].split("").reverse().join("");
//     }
//   }
//   return v;
// }

// Object.keys(StringTable.ne).forEach(key => {
//   let l = StringTable.ne[key];
//   if(typeof l == "string") {
//     l = l.split("").reverse().join("");
//   }
//   else if(l instanceof Array) {
//     l = l.map(k => reverseStrings(k));
//   }
//   else {
//     l = reverseStrings(l);
//   }
//   StringTable.ne[key] = l;
// });