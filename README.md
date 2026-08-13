# PUBG Total Leaderboard — IT E-SPORT 2026

ตารางคะแนนรวม PUBG PC สำหรับการแข่งขัน IT E-SPORT 2026

## โครงสร้างไฟล์

```
pubg-esport-2026/
├── index.html      ← หน้าหลัก (HTML structure + UI)
├── style.css       ← Design / layout
├── data.js         ← ข้อมูลคะแนนทีมทั้งหมด
├── app.js          ← Logic: render, sort, tab switching
├── netlify.toml    ← Netlify deploy config
└── README.md       ← ไฟล์นี้
```

## วิธีใช้งาน

### เปิดในเบราว์เซอร์ (local)
เปิดไฟล์ `index.html` ด้วย browser ได้เลย

### Deploy บน Netlify
1. ลาก Folder `pubg-esport-2026` ทั้งหมดไปที่ https://app.netlify.com/drop
2. รอสักครู่ได้ URL สาธารณะ

### Deploy บน GitHub Pages
1. `git init && git add . && git commit -m "init"`
2. Push ขึ้น GitHub repo
3. Settings → Pages → Branch: main, Folder: / (root)

## อัปเดตข้อมูล

แก้ไขได้ที่ไฟล์ `data.js` เพียงไฟล์เดียว:
- `GROUP_A` – ข้อมูลทีม Group A
- `GROUP_B` – ข้อมูลทีม Group B

ฟิลด์ที่แก้ได้:
| field | ความหมาย |
|-------|-----------|
| `team` | ชื่อทีม |
| `day1` | คะแนน Day1 (TOTAL) |
| `m1`   | คะแนน Day2 Match1 (TOTAL) |
| `m2`   | คะแนน Day2 Match2 (TOTAL) |
| `kills`| คิลรวมทุกรอบ (Tie-breaker) |
