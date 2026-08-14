/**
 * data.js – ข้อมูลคะแนนสะสม IT E-SPORT 2026
 * แหล่งที่มา: Total Leaderboard Qualified Day1-3
 *
 * คอลัมน์:
 *   team      – ชื่อทีม
 *   placement – คะแนนจากอันดับสะสม (Placement Points รวมทุกแมตช์)
 *   kills     – จำนวนคิลรวมทุกแมตช์
 *   total     – คะแนนรวม (Placement + Kills)
 *   group     – กลุ่ม A หรือ B
 */

const GROUP_A = [
  { team: "exexex",                placement: 29, kills: 57, total: 86,  group: "A" },
  { team: "tUSfAM",                placement: 30, kills: 33, total: 63,  group: "A" },
  { team: "GO TO LOBBY",           placement: 29, kills: 29, total: 58,  group: "A" },
  { team: "ProjuctPrimKung",       placement: 19, kills: 33, total: 52,  group: "A" },
  { team: "ฝันร้ายบุฟเฟ่ต์",         placement: 23, kills: 27, total: 50,  group: "A" },
  { team: "MUASUM",                placement: 19, kills: 12, total: 31,  group: "A" },
  { team: "INNOVATE",              placement: 18, kills: 13, total: 31,  group: "A" },
  { team: "Made in Tui Dui",       placement: 9,  kills: 7,  total: 16,  group: "A" },
  { team: "Suttiao",               placement: 3,  kills: 12, total: 15,  group: "A" },
  { team: "Pitipiw piw wiw wiw",   placement: 6,  kills: 5,  total: 11,  group: "A" },
  { team: "Krathul",               placement: 3,  kills: 7,  total: 10,  group: "A" },
  { team: "Funny man",             placement: 4,  kills: 6,  total: 10,  group: "A" },
];

const GROUP_B = [
  { team: "esanredzone",           placement: 33, kills: 73, total: 106, group: "B" },
  { team: "ghost my eyes",         placement: 43, kills: 48, total: 91,  group: "B" },
  { team: "anubis Esports",        placement: 24, kills: 42, total: 63,  group: "B" },
  { team: "ascend",                placement: 17, kills: 39, total: 56,  group: "B" },
  { team: "TeeGumRungJaPenChamp",  placement: 19, kills: 15, total: 34,  group: "B" },
  { team: "Tawad",                 placement: 11, kills: 11, total: 22,  group: "B" },
  { team: "to love",               placement: 14, kills: 6,  total: 20,  group: "B" },
  { team: "erin",                  placement: 7,  kills: 9,  total: 16,  group: "B" },
  { team: "msunewgenv 1",          placement: 11, kills: 5,  total: 16,  group: "B" },
  { team: "E ling down",           placement: 6,  kills: 5,  total: 11,  group: "B" },
  { team: "khoaw_monekai",         placement: 6,  kills: 4,  total: 10,  group: "B" },
  { team: "Rachaai",               placement: 4,  kills: 5,  total: 9,   group: "B" },
];

const ALL_TEAMS = [...GROUP_A, ...GROUP_B];
