/**
 * team-data.js — ฐานข้อมูลกลาง IT E-SPORT 2026
 * ใช้ร่วมกันระหว่าง match-results.html และ players.html
 */

/* ─── ชื่อทีม (#1 – #16 จาก Final Stage) ─────────────────── */
const TEAM_NAMES = {
  1:  'ฝันร้ายบุฟเฟ่ต์',
  2:  'TUSFAM',
  3:  'PROJUCTPRIMKUNG',
  4:  'TAWAD',
  5:  'ANUBIS ESPORTS',
  6:  'INNOVATE',
  7:  'MUASUM',
  8:  'EXEXEX',
  9:  'ESANREDZONE',
  10: 'TO LOVE',
  11: 'TEEGUMRUNG JAPENCHAMP',
  12: 'GO TO LOBBY',
  13: 'MADE IN TUI DUI',
  14: 'ERIN',
  15: 'GHOST MY EYES',
  16: 'ASCEND',
};

/* ─── ผู้เล่นแต่ละทีม + kills แยกแมตช์ [M1, M2, M3] ─────── */
const ROSTERS = {
  1: [
    { name: '[RIZZ] SiuuuCrits',   kills: [0, 0, 1] },
    { name: '[RIZZ] K1mbappp',     kills: [4, 0, 2] },
    { name: '[STOP] Demityrix',    kills: [2, 0, 3] },
    { name: '[KMC] ThaengMo-OHo',  kills: [0, 0, 1] },
  ],
  2: [
    { name: '[OTC] J4RM3S',            kills: [2, 0, 1] },
    { name: '[STOP] KARAMUCHOAROI',    kills: [2, 1, 3] },
    { name: '[AT99] LiningFam',        kills: [1, 1, 4] },
    { name: '[BAD] JaoJed-',           kills: [4, 5, 2] },
  ],
  3: [
    { name: '[NLG] T1eepycat',     kills: [1, 0, 5] },
    { name: '[KAD] m1xs1ksak',     kills: [1, 0, 0] },
    { name: '[HTK] 18Sept-',       kills: [1, 0, 0] },
    { name: '[BB] BADBOY_SAMMY',   kills: [0, 0, 3] },
  ],
  4: [
    { name: 'Koppee101',           kills: [2, 0, 0] },
    { name: 'Dunkkint',            kills: [0, 2, 0] },
    { name: '[D9] Ramkz',          kills: [0, 0, 0] },
  ],
  5: [
    { name: '[RDS] ANX_BIS',       kills: [2, 2, 0] },
    { name: '[RDS] wianut',        kills: [4, 0, 0] },
    { name: '[7NA] AECEXXX',       kills: [0, 0, 1] },
    { name: '[7NA] EmerGenZy_',    kills: [0, 0, 0] },
  ],
  6: [
    { name: 'Xxx_LuFengxXlu',      kills: [3, 1, 1] },
    { name: '[INNV] TK-23s',       kills: [0, 0, 1] },
    { name: '[INNV] Zenkenz1e',    kills: [0, 1, 0] },
    { name: '[INNV] Otok1',        kills: [0, 1, 0] },
  ],
  7: [
    { name: '[DNK] PsMzYyy',       kills: [0, 2, 2] },
    { name: '[DNK] keenzazaza',    kills: [0, 0, 1] },
    { name: '[DNK] LEOLOVINU',     kills: [0, 2, 0] },
    { name: '[DNK] AugustRecon',   kills: [0, 0, 0] },
  ],
  8: [
    { name: 'Lnwroblox888',        kills: [1, 0, 2] },
    { name: 'b0bsaurus',           kills: [2, 2, 4] },
    { name: '[BTD] KIMSANGTH',     kills: [0, 0, 1] },
    { name: 'Paxtons',             kills: [1, 2, 1] },
  ],
  9: [
    { name: '[MORI] ISISARME',     kills: [7, 3, 3] },
    { name: 'Ame666-',             kills: [5, 3, 0] },
    { name: 'Caraxes666',          kills: [7, 9, 1] },
    { name: '[FS] Jayuar_',        kills: [4, 2, 3] },
  ],
  10: [
    { name: '[INNV] BBKK1225',     kills: [0, 0, 1] },
    { name: '[INNV] jruxn',        kills: [0, 0, 0] },
    { name: '[INNV] TuHuKINpeaK',  kills: [0, 0, 0] },
    { name: '[INNV] sunmer555',    kills: [0, 1, 0] },
  ],
  11: [
    { name: 'SkizZaCH',            kills: [0, 3, 0] },
    { name: 'BTZR47',              kills: [0, 0, 0] },
    { name: 'SoloPachaiKFC',       kills: [0, 0, 0] },
    { name: 'Vgodvape',            kills: [0, 4, 0] },
  ],
  12: [
    { name: '[X1] B-BOB-_',            kills: [0, 1, 0] },
    { name: '[FX1] BesTxx1',           kills: [0, 0, 1] },
    { name: '[INGO] MILOkukkikk',      kills: [0, 0, 1] },
    { name: '[X1] 5544656543555556',   kills: [0, 2, 0] },
  ],
  13: [
    { name: 'rReyo',               kills: [0, 1, 0] },
    { name: 'safare1150',          kills: [0, 2, 0] },
    { name: 'delaTP',              kills: [0, 0, 1] },
    { name: 'SSSRTF77',            kills: [1, 0, 0] },
  ],
  14: [
    { name: '[LUMD] Skyrer',       kills: [1, 0, 1] },
    { name: '[LUMD] lonluisuan',   kills: [0, 0, 0] },
    { name: '[LUMD] Zomjoy007',    kills: [0, 0, 0] },
    { name: '[LUMD] Huahomyai',    kills: [0, 0, 0] },
  ],
  15: [
    { name: 'Jayneverr',           kills: [2, 1, 0] },
    { name: 'Charon_XCVII',        kills: [0, 0, 0] },
    { name: '[AZS] KimzSayhi',     kills: [0, 0, 1] },
    { name: '[RBWF] nebCO',        kills: [2, 1, 1] },
  ],
  16: [
    { name: '[ACT] BmSy-_-',          kills: [0, 6, 4] },
    { name: '[ACT] GONKUNEIEI',        kills: [3, 2, 1] },
    { name: '[404] nongHuMsoBig49',    kills: [0, 0, 1] },
    { name: '[ACT] NewL1-',            kills: [0, 0, 2] },
  ],
};

/* ─── ผลแมตช์ (rank = อันดับที่จบ, kills = kill รวมของทีม) ─ */
const MATCH1 = [
  { rank:1,  team:9,  kills:23 },
  { rank:2,  team:2,  kills:9  },
  { rank:3,  team:5,  kills:6  },
  { rank:4,  team:15, kills:4  },
  { rank:5,  team:7,  kills:0  },
  { rank:6,  team:3,  kills:3  },
  { rank:7,  team:10, kills:0  },
  { rank:8,  team:8,  kills:4  },
  { rank:9,  team:6,  kills:3  },
  { rank:10, team:1,  kills:6  },
  { rank:11, team:12, kills:0  },
  { rank:12, team:14, kills:1  },
  { rank:13, team:13, kills:1  },
  { rank:14, team:11, kills:0  },
  { rank:15, team:4,  kills:2  },
  { rank:16, team:16, kills:3  },
];

const MATCH2 = [
  { rank:1,  team:9,  kills:17 },
  { rank:2,  team:2,  kills:7  },
  { rank:3,  team:11, kills:7  },
  { rank:4,  team:16, kills:8  },
  { rank:5,  team:7,  kills:4  },
  { rank:6,  team:10, kills:1  },
  { rank:7,  team:4,  kills:2  },
  { rank:8,  team:13, kills:3  },
  { rank:9,  team:15, kills:2  },
  { rank:10, team:5,  kills:2  },
  { rank:11, team:8,  kills:4  },
  { rank:12, team:1,  kills:0  },
  { rank:13, team:14, kills:0  },
  { rank:14, team:6,  kills:3  },
  { rank:15, team:3,  kills:0  },
  { rank:16, team:12, kills:3  },
];

const MATCH3 = [
  { rank:1,  team:2,  kills:10 },
  { rank:2,  team:1,  kills:7  },
  { rank:3,  team:6,  kills:2  },
  { rank:4,  team:9,  kills:7  },
  { rank:5,  team:8,  kills:8  },
  { rank:6,  team:7,  kills:3  },
  { rank:7,  team:5,  kills:1  },
  { rank:8,  team:16, kills:8  },
  { rank:9,  team:10, kills:1  },
  { rank:10, team:3,  kills:8  },
  { rank:11, team:12, kills:2  },
  { rank:12, team:11, kills:0  },
  { rank:13, team:15, kills:2  },
  { rank:14, team:13, kills:1  },
  { rank:15, team:14, kills:1  },
  { rank:16, team:4,  kills:0  },
];

/* Final: ยังไม่มีผล (null = TBD) */
const MATCH_FINAL = null;

const MATCHES     = [MATCH1, MATCH2, MATCH3];
const MATCH_NAMES = ['Match 1', 'Match 2', 'Match 3'];

/* ─── Helper ──────────────────────────────────────────────── */
function placePts(rank) {
  if (rank === 1) return 10;
  if (rank === 2) return 6;
  if (rank === 3) return 5;
  if (rank === 4) return 4;
  if (rank === 5) return 3;
  if (rank === 6) return 2;
  if (rank <= 8)  return 1;
  return 0;
}

function teamName(id) {
  return TEAM_NAMES[id] || `ทีม ${id}`;
}
