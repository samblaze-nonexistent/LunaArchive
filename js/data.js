const heroes = [
{
id:1,
name:"Artemis",
faction:"Olympus",
element:"💧 Water - 🌞 Light",
class:"🏹 Archer",
role:"⚔ Burst DPS",
tier: "C",
rating:"🟠 C tier",
best:"Story, Light Bosses",

tip:"I'm good against Light enemies with a full Archer team, although there are stronger options better than me!",  

image:"images/Artemisc.png"

},

{
id:2,
name:"Nera",
faction:"Demon empire",
element:"💧 Water",
class:"💕 Healer",
role:"💥 Burst DPS , Support",
tier: "SS",
rating:"🩵 SS tier",
best:" Almost every contents (except pvp)",
tip:`She's one of the strongest Burst DPS in the entire game.

Use her with a full healer team for maximum damage output.

Recommended Team:
• Selene / Miyu / Kasumi • Nera • Themis • Flora / Persephone`,
image:"images/nera.png"
},

{id:3,
name:"Metis",
faction:"Titans",
element:"💧 Water",
class:"🎇 Mage",
role:"⚔ Basic attack DPS,Support",
tier: "S",
rating:"🩷 S tier",
best:"Almost any contents (except pvp)",

tip:`She's really strong basic attack dps and it scales with her Dmg type active skill stats,  
  
although only recommended using her uf you have her on T10!`,  

image:"images/metis.png"

},

{id:4,
name:"Themis",
faction:"Olympus",
element:"☀️ Light",
class:"💕 Healer",
role:"support",
tier: "S",
rating:"🩷 S Tier",
best:"Almost every content (except pvp)",

tip:`She's really strong support against dark element Bosses !  
Also buff final attacks by alot if boss have passive stats are like ; ignore penetration,weakness:cain ,enhanced stun immunity !  
she also helps ners by increasing her crit rate which nera hardly depends on to do huge nuks damage `,  

image:"images/themis.png"

},

{id:5,
name:"Selene",
faction:"Titans",
element:"🟣 Dark - ☀️ Light",
class:"💕 healer",
role:"🛡️Sustain",
tier: "S",
rating:"🩷 S tier",
best:"Almost any contents (except pvp)",

tip:`She's one of the strongest sustain unit for almost any teams thanks to her huge final dmg reduction stats for whole team + thickest shield too !  
• Not to mention she's one of core member of Nera nuke team/Flora dot team as well  
• Note : She's normally dark element (which you'll use most, but she becomes light element if Cain is dark element which isn'st recommended cuz she won't be able to buff the final dmg reduction if she's light element.`,  

image:"images/selene.png"

},
{id:6,
name:"Nike",
faction:"Olympus",
element:"☀️ Light",
class:"🏹 Archer",
role:"⚔ Basic attack DPS,Support,Sustain",
tier: "S",
rating:"🩷 S tier",
best:"Almost any contents",

tip:`She's the core support of the Archer team and also be dps if build properly!!`,  

image:"images/nike.png"

},
{id:7,
name:"Kasumi",
faction:"Ancient Dragon",
element:"🌿 Leaf",
class:"🏹 Archer",
role:"⚔ Basic attack DPS,Sustain",
tier: "S",
rating:"🩷 S tier",
best:"Almost any contents",

tip:`She's really a solid dps but for you'll need at least 4 Archer/Leaf character on the team (Mixing Archer with leaf character counts too!)

ALSO! She's one of few characters that gives team Damage Defense stats which basically absorbs enemies attack making your character survive longer if you are fighting against a slow attacking boss `,

image:"images/kasumi.png"

},
{id:8,
name:"miyu",
faction:"Eastern Empire",
element:"💧Water - 🔥 Fire - 🟣 Dark",
class:"💕 Healer",
role:"🛡️ Sustain",
tier: "S",
rating:"🩷 S tier",
best:"Bosses that fires projectiles to attack",

tip:`She's a good alternative of selene if your selene isn't t10`,  

image:"images/miyu.png"

},

{id:9,
name:"Athena",
faction:"Olympus",
element:"🔥 Fire - 💧 Water - 🌿 Leaf",
class:"🎇 Mage",
role:"Support",
tier: "A",
rating:"🔵 A tier",
best:"Team with Metis / Early game penetration buffing",

tip:`She's really a decent source of penetration in the early game since she's a free character !

And she's a must have character for Metis team which does a huge amout DMG!!`,

image:"images/Athena.png"

},
{id:10,
name:"Eos",
faction:"Titans",
element:"☀️ Light - 🟣 Dark",
class:"⚔️ Warrior",
role:"⚔ Basic attack DPS, Sustain",
tier: "S",
rating:"🩷 S tier",
best:"Almost any contents (except pvp)",

tip:`She's one of the strongest basic attack dmg dealer out there , and her dmg scales with Penetration stats and with HP% too if she's using her signature weapon!!`,  

image:"images/eos.png"

},
{id:11,
name:"Ananke",
faction:"Olympus",
element:"💧 Water",
class:"🎇 Mage",
role:"water team support & Sustain",
tier: "S",
rating:"🩷 S tier",
best:"Against water and light boss ",

tip:`She's the core full water team , and even out of water team she's still outstanding because she makes everyone do increased dmg to water and light element opponents, and of her unique function is she increases your shield cap depending on transcend Lv !!`,  

image:"images/ananke.png"

},
{id:12,
name:"Rhea",
faction:"Titans",
element:"🌍 All",
class:" 🏹 Archer",
role:"Support, Sustain",
tier: "C",
rating:" 🟠 C tier",
best:"Archer team , PvP",

tip:`Good support and sustain for archer team , also is versetile in terms of elements since hers matches with Cain's element`,  

image:"images/rhea.png"

},
{id:13,
name:"Chaos",
faction:"Demon Empire",
element:"🌍 All",
class:" 🎇  Mage",
role:"Support, Sustain, Burst dps , Basic attack dps",
tier: "A",
rating:"🔵 A Tier",
best:"Mono element teams, PvP",

tip:`Decent support , sustain and dmg dealing passive for a character that can change into element matching with Cain's element , she becomes different types of roles depending on which slot you're placing her , although she's mostly usable on high Transcend lv`,  

image:"images/chaos.png"

},
{id:15,
name:"Flora",
faction:" Olympus",
element:"🌿 Leaf",
class:" 💕 Healer",
role:"Support, DOT DPS",
tier: "S",
rating:"🩷 S Tier",
best:"Ghoul chest, Full healer team with Nera, Pvp",

tip:`She's one of the strongest dot damage dealer in the game, and is absolute monster in ghoul chest, just having her enough to really decent score in ghoul chest mode!

Also ! You can pair her with Nera because she buffs Nera's dmg output too!`,

image:"images/flora.png"

},

{id:16,
name:"Kana",
faction:" Elgrad",
element:"🔥 Fire",
class:" 🏹 Archer",
role:"Basic Atk dps, Burst dos",
tier: "F" ,
rating:"🟤 F Tier",
best:"Pvp",

tip:`She don't have much uses outside of PvP consider her having really old and outdated kit`,  

image:"images/kana.png"

},

{id:17,
name:"Ares",
faction:" Olympus",
element:"☀️ Light - 🟣 Dark",
class:" ⚔️ Warrior",
role:"Haste Dps",
tier: "F",
rating:"🟤 F Tier",
best:"None",

tip:`One of the weakest dps out there .... Use him only if you don't have much characters...`,  

image:"images/ares.png"

},

{id:18,
name:"Megumin",
faction:" Collab Character",
element:"🔥 Fire",
class:" 🎇 Mage ",
role:"Burst dps , Basic Atk dps",
tier: "F",
rating:"🟤 F Tier",
best:"None",

tip:`Outdated kit and not recommended to use her since there are many better option than her`,  

image:"images/megumin.png"

},
{id:19,
name:"Aqua",
faction:" Collab Character",
element:"💧 Water",
class:" 💕 Healer ",
role:"Support",
tier: "F",
rating:"🟤 F Tier",
best:"None",

tip:`Outdated kit and not recommended to use her since there are many better option than her.`,  

image:"images/aqua.png"

},

{id:20,
name:"Darkness",
faction:" Collab Character",
element:"☀️ Light",
class:" ⚔️  warrior",
role:"🛡️ Tank",
tier: "F",
rating:"🟤 F Tier",
best:"None",

tip:`Outdated kit and not recommended to use her since there are many better option than her.`,  

image:"images/darkness.png"

},

{id:21,
name:"Bell & Hestia",
faction:" Collab Character",
element:"🔥 fire",
class:" ⚔️ warrior",
role:"Burst dps",
tier: "F",
rating:"🟤 F Tier",
best:"None",

tip:`Outdated kit and not recommended to use her since there are many better option than her.`,  

image:"images/bell&hestia.png"

},

{id:22,
name:"Ryu",
faction:" Collab Character",
element:"🌿 Leaf ",
class:" ⚔️ warrior",
role:"Burst dps",
tier: "F",
rating:"🟤 F Tier",
best:"None",

tip:`Outdated kit and not recommended to use her since there are many better option than her.`,  

image:"images/ryu.png"

},

{id:23,
name:"ais",
faction:" Collab Character",
element:"💧 Water",
class:" ⚔️ warrior",
role:"Basic atk dps",
tier: "F",
rating:"🟤 F Tier",
best:"None",

tip:`Outdated kit and not recommended to use her since there are many better option than her.`,  

image:"images/ais.png"

},

{id:24,  
name:"Demeter",  
faction:" Olympus",  
element:"🌿 Leaf",  
class:" 🎇Mage",  
role:"Burst dps",  
tier: "F",  
rating:"🟤 F Tier",  
best:"None",  

tip:`Outdated kit and not recommended to use her since there are many better option than her.`,  

image:"images/demeter.png"

},
{id:25,
name:"Poseidon",
faction:" Olympus",
element:"💧 Water",
class:" ⚔️ warrior",
role:"Basic atk dps",
tier: "F",
rating:"🟤 F Tier",
best:"None",

tip:`Outdated kit and not recommended to use her since there are many better option than her.`,  

image:"images/poseidon.png"

},
{id:26,
name:"Hestia",
faction:" Olympus",
element:"🔥 Fire",
class:" 🎇 Mage ",
role:"Burst dps , Basic Atk dps",
tier: "F",
rating:"🟤 F Tier",
best:"None",

tip:`Outdated kit and not recommended to use her since there are many better option than her`,  

image:"images/hestia.png"

},
{id:27,
name:"Lilith",
faction:" Demon Realm",
element:" ☀️ Light - 🟣 Dark",
class:" 🎇 Mage ",
role:"Cain support, Haste dps",
tier: "F",
rating:"🟤 F Tier",
best: "Against bosses with Weakness: cain passive",

tip:`Her kit is mainly based on buffing cain , so use her on contents with Weakness : Cain passive bosses`,  

image:"images/lilith.png"

},
{id:28,
name:"Dark Lord",
faction:" Demon Realm",
element:" ☀️ Light - 🟣 Dark",
class:" 🎇 Mage ",
role:"Dark team support",
tier: "F",
rating:"🟤 F Tier",
best: "None",

tip:`Outdated kit and not recommended to use her since there are many better option than her`,  

image:"images/darklord.png"

},

{id:29,
name:"Dark",
faction:" Ancient Dragon",
element:"🟣 Dark",
class:" 🎇 Mage ",
role:"Support",
tier: "F",
rating:"🟤 F Tier",
best: "None",

tip:`Outdated kit and not recommended to use her since there are many better option than her`,  

image:"images/dark.png"

},
{id:30,
name:"Odin",
faction:" Olympus - Eastern Empire",
element:"☀️ Light - 🟣 Dark",
class:" 🎇 Mage ",
role:"Support",
tier: "D",
rating:"🟢 D Tier",
best: "None",

tip:`She increases final atk by a little, also some base atk% for light element allies, can still use her in Challenge Raid if you're out of final attack buffer`,  

image:"images/odin.png"

},
{id:31,
name:"Hades",
faction:" Olympus",
element:"🟣 Dark - 🔥 Fire",
class:" 🎇 Mage ",
role:"Dark-Fire team Support, dot dps",
tier: "D",
rating:"🟢 D Tier",
best: "PvP",

tip:`Her kit mainly buffs dark and fire element team and has some burn type dot dmg too , sadly there's much better option then her .

She mainly shines in PvP`,

image:"images/hades.png"

},
{id:32,
name:"Zeus",
faction:" Olympus",
element:"☀️ Light",
class:" 🎇 Mage ",
role:"Basic attack dps",
tier: "D",
rating:"🟢 D Tier",
best: "none",

tip:`Outdated kit and not recommended to use him since there are many better option than him`,  

image:"images/zeus.png"

},
{id:33,
name:"Kalisia",
faction:" Ancient Dragon",
element:"🔥 Fire",
class:" 🎇 Mage ",
role:"support",
tier: "D",
rating:"🟢 D Tier",
best: "Penetration buff , Stunlock team in challenge Raid",

tip:`She buff penetration of whole party by alot which might be advantage for characters like Eos or Danah who scales with penetration! `,  

image:"images/kalisia.png"

},

{id:34,
name:"Lucifer",
faction:" Demon Realm",
element:"🟣 Dark - 🔥 Fire",
class:" 🎇 Mage ",
role:"Burst dps",
tier: "D",
rating:"🟢 D Tier",
best: "Against dark/fire element boss",

tip:`Her kit is good for Nuking dark/fire element boss but there's better options than her.`,  

image:"images/lucifer.png"

},

{id:35,
name:"Mia",
faction:" Elgard",
element: "🌿 Leaf -🔥 Fire - 💧 Water",
class:" ⚔️ Warrior ",
role:"Sustain",
tier: "D",
rating:"🟢 D Tier",
best: "Airi World Boss/challenge Raid",

tip:`Her damage defense helps fully absorb the ultimate of Airi World boss/challenge raid, can use her for damage defense if you can't kill the boss in time.`,  

image:"images/mia.png"

},

{id:36,
name:"Mary",
faction:" Elgrad",
element: "🌿 Leaf -💧 Water",
class:" 🏹 Archer",
role:"Basic attack dps",
tier: "D",
rating:"🟢 D Tier",
best: "Killing water element enemies , PvP",

tip:`Her kit is good for killing water enemies, but there's better options than her.

Also ! She's a decent PvP unit in early game too!`,

image:"images/mary.png"

},
{id:37,
name:"Ymir",
faction:" Titan",
element: "☀️ Light - 🟣 Dark",
class:" 🎇 Mage",
role:"Basic attack dps, Burst dps, support",
tier: "B",
rating:"🟣 B Tier",
best: "full mage/dark team, against dark bosses",

tip:`Her kit is good for buffing teams dmg against dark element, also has a okay enough dmg dealing performance. Her shield is thick too!`,  

image:"images/ymir.png"

},
{id:38,
name:"Belphegor",
faction:" Demon Realm",
element: "☀️ Light - 🟣 Dark",
class:" ⚔️ Warrior",
role:"Haste DPS",
tier: "B",
rating:"🟣 B Tier",
best: "Slaying dark/Light enemies",

tip:`Her kit is good for killing light/dark element enemies because of her high attack speed with high offensive multipliers to light/dark enemies!

Well still,there are better options than her `,

image:"images/belphegor.png"

},

{id:39,
name:"Alice",
faction:" Elgard",
element: "💧Water - ☀️ Light",
class:" ⚔️ Warrior",
role:"Basic Attack DPS ",
tier: "C",
rating:"🟠 C Tier",
best: "None",

tip:`Her kit depends on the position you're using her at , she can be sustain-dps-nuke depending on her team position . Although there's better options than her.`,  

image:"images/alice.png"

},
{id:40,
name:"Ariel",
faction:" Ancient Dragon",
element: "💧Water",
class:" ⚔️ Warrior",
role:"Basic Attack DPS",
tier: "C",
rating:"🟠 C Tier",
best: "Against water enemies",

tip:`Her kit is good for fighting against water enemies although there are better options than her.`,  

image:"images/ariel.png"

},

{id:41,
name:"Eros",
faction:" Olympus",
element: "💧Water - ☀️ Light",
class:" 🏹 Archer",
role:"Support",
tier: "C",
rating:"🟠 C Tier",
best: "Full archer team",

tip:`Her kit is good for buffing full archer team , although there's better archer support than her.`,  

image:"images/eros.png"

},
{id:42,
name:"Vivian",
faction:" Olympus",
element: "💧Water",
class:" ⚔️ Warrior",
role:"Support",
tier: "C",
rating:"🟠 C Tier",
best: "Water team sustaining",

tip:`Her kit is good for buffing sustainability of water team although not recommended to use her unless you don't have any sustain units.`,  

image:"images/vivian.png"

},

{id:43,
name:"Lugrant",
faction:" Elgard",
element: "💧Water - 🌿 Leaf",
class:" 🎇 Mage",
role:"Support",
tier: "C",
rating:"🟠 C Tier",
best: "Full mage team",

tip:`Her kit is good for buffing full mage team.`,  

image:"images/lugrant.png"

},
{id:44,
name:"Haru",
faction:" Eastern Empire",
element: " ☀️ Light - 🌿 Leaf",
class:" ⚔️ Warrior",
role:"PvP DPS",
tier: "C",
rating:"🟠 C Tier",
best: "PvP , Damage defense shield destroying",

tip:`Her kit is decent for pvp and also perfect for destroying Damage defense shield of enemies with her fast Dot inflicting.`,  

image:"images/haru.png"

},

{id:45,
name:"Theseus",
faction:" Elgard",
element: " 🟣 Dark",
class:" ⚔️ Warrior",
role:"Support",
tier: "C",
rating:"🟠 C Tier",
best: "Full warrior team",

tip:`His kit is good for buffing full warrior team , although there are better teams than full warrior team.`,  

image:"images/theseus.png"

},
{id:46,
name:"Yuria",
faction:" Demon empire",
element: "🔥 Fire",
class:" ⚔️ Warrior",
role:"Support",
tier: "C",
rating:"🟠 C Tier",
best: "Leaf element territory",

tip:`Her kit is good for buffing teams dmg against leaf element enemies, although her kit is restricted to build around demon empire faction.`,  

image:"images/yuria.png"

},

{id:47,
name:"Aina",
faction:" Elgard",
element: " 🔥 Fire -💧Water - 🟣 Dark",
class:" 🎇 Mage",
role:"Support",
tier: "C",
rating:"🟠 C Tier",
best: "buffing penetration",

tip:`Her kit is good for buffing penetration as well as buffing final dmg against fire/leaf element enemies and buffing some final attack for full team, pretty solid option to pair with Eos.`,  

image:"images/aina.png"

},
{id:48,
    name:"Aphrodite",
    faction:" Olympus",
    element: "🌍 all",
    class:" 💕 Healer",
    role:"Support",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Buffing offensive stats",

    tip:`Her kit is good for buffing offensive stats of any team depending on her team position and her element (Cain's element = Aphrodite's element).`,

    image:"images/aphrodite.png"
},
{id:49,
    name:"Joan of Arc",
    faction:" Elgard",
    element: "☀️ Light - 💧Water ",
    class:" 🎇 Mage",
    role:"Support",
    tier: "B",
    rating:"🟣 B Tier",
    best: " Against light boss , PvP",

    tip:`Her kit is really strong against light enemies due to her huge af final dmg reduction against light bosses she can also buff teams final dmg against light boss and also solid option to use on PvP mage team.`,

    image:"images/joa.png"
},
{id:50,
    name:"Luna",
    faction:" Eastern Empire",
    element: "🟣 Dark - 🌿 Leaf",
    class:" 🎇 Mage",
    role:"Basic attack DPS , Farmer",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Mage dmg dealer , farming , PvP",

    tip:`She's mostly gets used in farming since she can clear full waves of enemy on almost any farming stages . She's also really strong in Pvp content as one of the best pvp team requires her.`,

    image:"images/luna.png"
},
{id:51,
    name:"Hera",
    faction:" Olympus",
    element: "☀️ Light - 🌿 Leaf",
    class:" 🎇 Mage",
    role:"Support",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Mage team sustain , Cain buffing",

    tip:`Her kit is mainly based on buffing cain and also buffing the sustain of any team .`,

    image:"images/hera.png"
},
{id:52,
    name:"Theia",
    faction:" Titan",
    element: "☀️ Light - 💧 Water",
    class:" 🎇 Mage",
    role:"Support",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Pvp , mage team support",

    tip:`Her kit is good for buffing offensive capabilities of mage team and she also good on pvp mage team as well.`,

    image:"images/theia.png"
},

{id:53,
    name:"Ceres",
    faction:" Demon Empire",
    element: "🔥 Fire - 🟣 Dark ",
    class:" ⚔️ Warrior",
    role:"Basic Attack DPS",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Warrior team",

    tip:`Her kit is mainly based on basic attack dps but she becomes dps only if u have her on full warrior team . Or else she's also good for the damage defense she gives on active skill.`,

    image:"images/ceres.png"
},
{id:54,
    name:"Efreet",
    faction:" Elgard",
    element: "🔥 Fire",
    class:" ⚔️ Warrior",
    role:"Basic Attack DPS",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Killing leaf element enemies",

    tip:`Her kit is mainly based on basic attack dps and does bonus final dmg on leaf enemies and doesn't require full warrior team like Ceres. So you can pair her with other strong supports and sustain!`,

    image:"images/efreet.png"
},
{id:55,
    name:"Airi",
    faction:" Elgard",
    element: "💧Water - ☀️Light",
    class:" ⚔️ Warrior",
    role:"Basic Attack DPS",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Killing light element enemies",

    tip:`Her kit is mainly based on basic attack dps and does bonus final dmg on light enemies and doesn't require full warrior team like Ceres. So you can pair her with other strong supports and sustain!`,

    image:"images/airi.png"
},

{id:56,
    name:"Rina",
    faction:" Eastern Empire",
    element: "🌿 Leaf - 🔥 Fire",
    class:" 🏹 Archer",
    role:"Basic Attack DPS",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Archer team dps",

    tip:`Her kit is mainly based on basic attack dps and also provide shield if full team is archer or eastern empire. She also increases bosses final dmg taken (like shock debuff) depending on how much accuracy she has.`,

    image:"images/rina.png"
},

{id:57,
    name:"Gaia",
    faction:" Olympus",
    element: "🌿 Leaf",
    class:" 🏹 Archer",
    role:"Support",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Kasumi's damage defense invincible team,Pvp",

    tip:`Her kit is mainly for buffing archers attack smd also she synthesizes properly with with Kasumi's damage defense team . Gaia is also good for pvp for the 20 damage defense she gives to the team ( only for archers).`,

    image:"images/gaia.png"
},

{id:58,
    name:"Rosie",
    faction:" Elgard",
    element: "🟣 Dark",
    class:" 🎇 Mage",
    role:"Support",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Buffing active skill damage of characters, Ghos bosses.",

    tip:`Her kit is mainly based on buffing active skill damage of any characters . After using her active skill , any character (like nera) that does it's active skill does bonus damage and can damage the boss through the active skill even if the boss has "Ghost" passive!`,

    image:"images/rosie.png"
},

{id:59,
    name:"Helios",
    faction:" Elgard",
    element: "☀️Light - 🔥 Fire",
    class:" 🎇 Mage",
    role:"Nuke",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Killing leaf element enemies, Nuking, Territory",

    tip:`Her kit is mainly based on nuking but requires the target to be inflicted with burn dot effect. And she does bonus final dmg if the boss is Leaf element .`,

    image:"images/helios.png"
},

{id:60,
    name:"Hanbyeol",
    faction:" Demon Empire",
    element: " 🌍 All",
    class:" 💕 Healer",
    role:"Support",
    tier: "B",
    rating:"🟣 B Tier",
    best: "Buffing mono element teams.",

    tip:`Her kit is mainly based on buffing mono element teams . And team members get bonus buffs if they are from Elgard or Demon Empire factions . She's also good for blocking ultimate of Airi world boss/Challenge raid.`,

    image:"images/han.png"
},
{id:61,
    name:"Psyche",
    faction:" Olympus",
    element: " 🔥 Fire - 🟣 Dark",
    class:" 🏹 Archer",
    role:"Support",
    tier: "A",
    rating:"🔵 A Tier",
    best: "Against Fire/Dark element bosses ,stun immune support",

    tip:`Her kit is mainly based on increasing team's final damage against dark/fire element opponents. And also she provides team stun immunity buff . And for some characters like Dark element eos or Seah , Psyche is a must have!`,

    image:"images/psyche.png"
},
{id:62,
    name:"Yui",
    faction:" Eastern Empire",
    element: " 🌿 Leaf - 🔥 Fire - 💧 Water",
    class:" 💕 Healer",
    role:"Support",
    tier: "A",
    rating:"🔵 A Tier",
    best: "Stun immune support.",

    tip:`She provides team stun immunity buff . And for some characters like Dark element eos or Seah , Yui is a must have!`,

    image:"images/yui.png"
},
{id:63,
    name:"Persephone",
    faction:" Eastern Empire",
    element: " 🟣 Dark - 🔥 Fire",
    class:" 💕 Healer",
    role:"Support",
    tier: "A",
    rating:"🔵 A Tier",
    best: "Team revive.",

    tip:`Her kit is mainly useful because how she revives any characters after it dies and also provides big enough shield so that you sustain . pretty solid option to use with Nera nuke team`,

    image:"images/persephone.png"
},
{id:64,
    name:"Homaru",
    faction:" Eastern Empire",
    element: " 🔥 Fire",
    class:" 🏹 Archer",
    role:"Nuke ,Support",
    tier: "A",
    rating:"🔵 A Tier",
    best: "Dark-Fire-Leaf element bosses, Archer team.",

    tip:`She provides team various buffs depending on character's position. And also nukes dark - fire - leaf element opponents with decent amount of damage!`,

    image:"images/homaru.png"
},
{id:65,
    name:"Yura",
    faction:" Eastern Empire",
    element: " 🌿 Leaf",
    class:" ⚔️ Warrior",
    role:"Sustain, Support, Basic Attack Dps",
    tier: "A",
    rating:"🔵 A Tier",
    best: "Evasion based dps , enemy damage nullification.",

    tip:`She's quiet strong basic attack dps scaling with evasion stats and also can provide shields. She can also enemies final dmg taken (like shock debuff) scaling with how much penetration she has . And also ! She has a unique mechanic which is , if u use her on 2nd slot of the team , she stuns herself after using active skill but also forces all enemy to attack her. During this state, every attack of enemies will just miss!`,

    image:"images/yura.png"
},
{id:66,
    name:"Danah",
    faction:" Eastern Empire",
    element: "🔥 Fire",
    class:" ⚔️ Warrior",
    role:"Burst dps",
    tier: "SS",
    rating:"🔥 SS Tier",
    best: "Any content except pvp (can also nuke weakness cain Bosses!",

    tip:`She's current the strongest burst dps out there exceeding Nera's dmg but highly reqires her to be at T10. So yeah not f2p friendly like nera... Although yeah , weakness cain will be nothing to you later once you have her at t10!`,

    image:"images/danah.png"
},
{id:67,
    name:"Eve",
    faction:" Olympus",
    element: " 💧 Water",
    class:" 🏹 Archer",
    role:"Support, Burst dps",
    tier: "A",
    rating:"🔵 A Tier",
    best: "Water / light element boss , Water/light/archer team buffing.",

    tip:`Her kit is mainly based on buffing water/light/archer team and also makes team do alot of bonus final if they are light/water element . She also does alot burst damage if the target is inflicted with Rain dot effect!`,

    image:"images/eve.png"
},
{id:68,
    name:"Nyx",
    faction:" Titan",
    element: " 🟣 Dark",
    class:" 🏹 Archer",
    role:"Basic attack dps , Farmer",
    tier: "A",
    rating:"🔵 A Tier",
    best: "Archer dps , Farmiy",

    tip:`She's mostly gets used in farming since she can clear full waves of enemy on almost any farming stages. She also can be used as basic attack dps too !`,

    image:"images/nyx.png"
},
{id:69,
    name:"Jouy",
    faction:" Demon empire",
    element: " 🔥 Fire - 🟣 Dark",
    class: "⚔️ Warrior",
    role:"Basic attack dps , support",
    tier: "A",
    rating:"🔵 A Tier",
    best: " Warrior team",

    tip:`She mostly gets used for her dark form for the final attack support she provides but her Fire element is also strong as a basic attack dps even for f2p players ! And her dmg increases overtime.`,

    image:"images/jouy.png"
},
{id:70,
    name:"Lilia",
    faction:" Demon empire",
    element: " 🔥 Fire - 🌿 Leaf",
    class: "⚔️ Warrior",
    role:"Basic attack dps ",
    tier: "A",
    rating:"🔵 A Tier",
    best: " Slaying Water/Leaf Bosses",

    tip:`She mostly gets used for her leaf form and with it she can punish Leaf/Water bosses really hardly and her damage increases the more active skill she uses`,

    image:"images/lilia.png"
},
{id:71,
    name:"Seah",
    faction:" Eastern Empire",
    element: " 🟣 Dark - 🌿 Leaf",
    class: "🏹 Archer",
    role:"Basic attack dps ",
    tier: "A",
    rating:"🔵 A Tier",
    best: " Slaying Water/Leaf/Dark/Fire bosses",

    tip:`She's really strong to encounter fire-leaf-dark-water element bosses . But do remember that that her team must contain Yui or Psyche. Or else she'll be good as none existence..`,

    image:"images/seah.png"
}

];