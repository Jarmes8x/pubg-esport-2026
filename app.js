/**
 * app.js – Leaderboard rendering logic
 * IT E-SPORT 2026 · PUBG PC
 */

/* ── Helpers ─────────────────────────────────────────────── */

function getDataset(group) {
  let src;
  if (group === 'A')   src = ALL_TEAMS.filter(d => d.group === 'A');
  else if (group === 'B') src = ALL_TEAMS.filter(d => d.group === 'B');
  else src = [...ALL_TEAMS];

  // Stable sort: Total desc → Kills desc (Tie-breaker #1)
  return src.slice().sort((a, b) =>
    b.total - a.total || b.kills - a.kills
  );
}

/** Check if two adjacent rows are actually tie-broken */
function isTieBreak(sorted, idx) {
  if (idx === 0) return false;
  const prev = sorted[idx - 1];
  const curr = sorted[idx];
  return prev.total === curr.total;
}

/* ── Render ──────────────────────────────────────────────── */

function renderLeaderboard(group) {
  // --- Tabs ---
  ['A', 'B', 'ALL'].forEach(g => {
    const btn = document.getElementById(`tab-${g}`);
    const active = g === group;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', String(active));
  });

  const data = getDataset(group);

  // --- Header subtitle ---
  const subMap = {
    A:   'GROUP A · PUBG PC — รวมคะแนน Day1 + Day2 (Match1 + Match2)',
    B:   'GROUP B · PUBG PC — รวมคะแนน Day1 + Day2 (Match1 + Match2)',
    ALL: 'OVERALL · PUBG PC — รวมคะแนนทุกกลุ่ม Day1 + Day2 (Match1 + Match2)',
  };
  document.getElementById('header-sub').textContent = subMap[group];

  // --- Table title ---
  const titleMap = {
    A:   'ตารางคะแนนรวม Group A (Day1 + D2-Match1 + D2-Match2)',
    B:   'ตารางคะแนนรวม Group B (Day1 + D2-Match1 + D2-Match2)',
    ALL: 'ตารางคะแนนรวม Overall ทุกกลุ่ม',
  };
  document.getElementById('table-title').textContent = titleMap[group];

  // --- Podium (Top 3) ---
  const podium = document.getElementById('podium-container');
  podium.innerHTML = '';

  if (data.length >= 3) {
    // Display order: 2nd (left), 1st (center, elevated), 3rd (right)
    const displayOrder = [
      { d: data[1], cls: 'silver', rank: '🥈 อันดับ 2' },
      { d: data[0], cls: 'gold',   rank: '🏆 อันดับ 1' },
      { d: data[2], cls: 'bronze', rank: '🥉 อันดับ 3' },
    ];

    displayOrder.forEach(({ d, cls, rank }) => {
      const groupLabel = group === 'ALL'
        ? `<div class="p-group">(Group ${d.group})</div>` : '';
      const card = document.createElement('div');
      card.className = `p-card ${cls}`;
      card.innerHTML = `
        <div class="p-rank">${rank}</div>
        <div class="p-team">${d.team}</div>
        <div class="p-total">${d.total}</div>
        <div class="p-pts">คะแนนรวม</div>
        ${groupLabel}
      `;
      podium.appendChild(card);
    });
  }

  // --- Table rows ---
  const tbody = document.getElementById('lb-body');
  tbody.innerHTML = '';

  data.forEach((d, i) => {
    const rank  = i + 1;
    const rankCls = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
    const groupTag = group === 'ALL'
      ? `<span class="group-tag">Group ${d.group}</span>` : '';
    const tieTag = isTieBreak(data, i)
      ? `<span class="tie-badge">Tie-break</span>` : '';

    const tr = document.createElement('tr');
    if (rankCls) tr.className = rankCls;
    tr.innerHTML = `
      <td class="num rank-cell">#${rank}</td>
      <td class="team-cell">${d.team}${groupTag}${tieTag}</td>
      <td class="num">${d.day1}</td>
      <td class="num">${d.m1}</td>
      <td class="num">${d.m2}</td>
      <td class="num">${d.kills}</td>
      <td class="num total-cell">${d.total}</td>
    `;
    tbody.appendChild(tr);
  });
}

/* ── Init ────────────────────────────────────────────────── */

// Read ?group=A|B|ALL from URL, default to B
(function init() {
  const params = new URLSearchParams(window.location.search);
  const g = (['A', 'B', 'ALL'].includes(params.get('group')))
    ? params.get('group') : 'B';
  renderLeaderboard(g);
})();
