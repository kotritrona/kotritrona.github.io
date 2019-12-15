'use strict';
'use very strict';

const StringTable = {
  "en" : {
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
        "content": "SchoolFes was the best game on mobile; the other ones were just too greedy.\nProbably my first kind of music game which led me the way to the pandora's box.\nMy favorite character was Kotori!",
        "image": "images/articles/ll.jpg",
        "href" : "https://love-live.fandom.com/wiki/Love_Live!"
      },
      {
        "title": "Music Games",
        "content": "Around 2015 I played Maimai massively in a nearby arcade.\nThe best result I've achieved was a full combo on Lv.10 Master Momoiro Clover.\nAlso played a little Jubeat and Dynamix, getting to around level 8.\nAfter I had a PS4 also immediately bought Project Diva Future Tone and cleared all songs on Hard.",
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
  }
};

StringTable["zh-cn"] = Object.assign(StringTable["zh-cn"] || {}, StringTable["en"]);

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