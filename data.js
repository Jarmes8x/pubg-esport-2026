/**
 * data.js – ข้อมูลคะแนนทีม IT E-SPORT 2026
 * แหล่งที่มา: Match Leaderboard Day1 + Day2 Match1 + Day2 Match2
 *
 * คอลัมน์:
 *   team  – ชื่อทีม
 *   day1  – คะแนน TOTAL จาก Day1 (Placement + Kill)
 *   m1    – คะแนน TOTAL จาก Day2 Match1 (Placement + Kill)
 *   m2    – คะแนน TOTAL จาก Day2 Match2 (Placement + Kill)
 *   kills – จำนวนคิลรวมทุกรอบ (ใช้สำหรับ Tie-breaker ข้อ 1)
 *   group – กลุ่ม (Group A / Group B)
 */

const GROUP_A = [
  { team: "exexex",                day1: 49, m1: 3,  m2: 5,  kills: 39, group: "A" },
  { team: "tUSfAM",                day1: 7,  m1: 23, m2: 19, kills: 26, group: "A" },
  { team: "ProjuctPrimKung",       day1: 18, m1: 16, m2: 1,  kills: 24, group: "A" },
  { team: "ฝันร้ายบุฟเฟ่ต์",         day1: 17, m1: 6,  m2: 9,  kills: 14, group: "A" },
  { team: "GO TO LOBBY",           day1: 8,  m1: 9,  m2: 12, kills: 14, group: "A" },
  { team: "INNOVATE",              day1: 20, m1: 1,  m2: 2,  kills: 11, group: "A" },
  { team: "MUASUM",                day1: 12, m1: 0,  m2: 6,  kills: 6,  group: "A" },
  { team: "Suttiao",               day1: 7,  m1: 6,  m2: 0,  kills: 11, group: "A" },
  { team: "Made in Tui Dui",       day1: 1,  m1: 3,  m2: 6,  kills: 4,  group: "A" },
  { team: "Krathul",               day1: 5,  m1: 0,  m2: 4,  kills: 7,  group: "A" },
  { team: "Pitipiw piw wiw wiw",   day1: 4,  m1: 5,  m2: 0,  kills: 3,  group: "A" },
  { team: "Funny man",             day1: 1,  m1: 2,  m2: 4,  kills: 5,  group: "A" },
];

const GROUP_B = [
  { team: "esanredzone",           day1: 34, m1: 21, m2: 17, kills: 48, group: "B" },
  { team: "anubis Esports",        day1: 32, m1: 15, m2: 13, kills: 39, group: "B" },
  { team: "ghost my eyes",         day1: 18, m1: 10, m2: 21, kills: 26, group: "B" },
  { team: "ascend",                day1: 15, m1: 10, m2: 2,  kills: 19, group: "B" },
  { team: "Tawad",                 day1: 16, m1: 2,  m2: 1,  kills: 9,  group: "B" },
  { team: "msunewgenv 1",          day1: 12, m1: 4,  m2: 11, kills: 5,  group: "B" },
  { team: "to love",               day1: 5,  m1: 7,  m2: 0,  kills: 5,  group: "B" },
  { team: "TeeGumRungJaPenChamp",  day1: 6,  m1: 0,  m2: 8,  kills: 5,  group: "B" },
  { team: "E ling down",           day1: 1,  m1: 7,  m2: 3,  kills: 4,  group: "B" },
  { team: "khoaw_monekai",         day1: 5,  m1: 0,  m2: 1,  kills: 4,  group: "B" },
  { team: "Rachaai",               day1: 5,  m1: 0,  m2: 3,  kills: 5,  group: "B" },
  { team: "erin",                  day1: 1,  m1: 0,  m2: 7,  kills: 5,  group: "B" },
];

// คำนวณคะแนนรวมและรวม dataset
const ALL_TEAMS = [...GROUP_A, ...GROUP_B].map(d => ({
  ...d,
  total: d.day1 + d.m1 + d.m2,
}));
