/* ═══════════ Sanātana Dharma — app shell ═══════════ */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const store = {
  get: (k, d) => { try { return localStorage.getItem(k) ?? d; } catch (e) { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
};

function esc(s) { return (s + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

function toRoman(num) {
  const table = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  let n = num, out = '';
  for (const [v, s] of table) { while (n >= v) { out += s; n -= v; } }
  return out;
}

/* ═══════════ state ═══════════ */
/* localStorage can hold malformed JSON (a half-written value, a hand-edited
   key); an unguarded parse here would throw before the first render and leave
   a blank app with no way back short of clearing site data */
function readJSON(key, fallback) {
  try {
    const v = store.get(key, null);
    if (v == null) return fallback;
    const parsed = JSON.parse(v);
    return (parsed && typeof parsed === typeof fallback) ? parsed : fallback;
  } catch (e) { return fallback; }
}

let S = {
  lang: store.get('sd-lang', 'en') === 'gu' ? 'gu' : 'en',
  tab: 'home',
  reader: null,
  sec: 0,
  saved: readJSON('sd-saved', []),
  progress: readJSON('sd-progress', {}),
  font: Math.min(3, Math.max(0, parseInt(store.get('sd-font', '2'), 10) || 0)),
  query: '',
  part: null,        // library filtered to one part, opened from a home tile
  lastRead: store.get('sd-lastread', '') || null,
};
function setS(patch) {
  if (patch.lang) store.set('sd-lang', patch.lang);   // was never persisted
  S = Object.assign({}, S, patch);
  render();
}
function t(en, gu) { return S.lang === 'en' ? en : gu; }

/* ═══════════ chapter helpers ═══════════ */
function chTitle(c) { return t(c.en_title, c.gu_title); }
function chDeva(c) { return t(c.en_deva, c.gu_deva || c.en_deva); }
function chSecs(c) { return (S.lang === 'en' ? c.en : c.gu) || []; }
function chById(id) { return CH.find(c => c.id === id); }
function chIndex(id) { return CH.findIndex(c => c.id === id); }
function pct(id) { return S.progress[id] || 0; }
function readMeta(c) {
  const m = c.mins + t(' min', ' મિનિટ');
  const p = pct(c.id);
  if (p >= 96) return m + t(' · complete', ' · પૂર્ણ');
  if (p > 0) return m + ' · ' + p + t('% read', '% વાંચ્યું');
  return m;
}

/* reader scale: 21px default (easiest read), 23px for larger still */
const FONT_STEPS = [17, 19, 21, 23];
const FONT_LABELS = ['A', 'Aa', 'AA', 'AA⁺'];

/* the mandala web from the original guide, re-struck in gold and set turning */
const MANDALA = `<svg class="mandala" viewBox="0 0 700 700" aria-hidden="true" focusable="false">
  <g fill="none" stroke="#B0801F" stroke-width="1.1">
    <circle cx="350" cy="350" r="300"/><circle cx="350" cy="350" r="260"/>
    <circle cx="350" cy="350" r="220"/><circle cx="350" cy="350" r="180"/>
    <circle cx="350" cy="350" r="140"/><circle cx="350" cy="350" r="100"/>
    <circle cx="350" cy="350" r="60"/>
    <line x1="350" y1="50" x2="350" y2="650"/><line x1="50" y1="350" x2="650" y2="350"/>
    <line x1="138" y1="138" x2="562" y2="562"/><line x1="562" y1="138" x2="138" y2="562"/>
    <line x1="200" y1="50" x2="500" y2="650"/><line x1="500" y1="50" x2="200" y2="650"/>
    <line x1="50" y1="200" x2="650" y2="500"/><line x1="50" y1="500" x2="650" y2="200"/>
    <polygon points="350,80 620,230 620,470 350,620 80,470 80,230" stroke-width="1.5"/>
    <polygon points="350,120 580,255 580,445 350,580 120,445 120,255"/>
    <polygon points="350,160 540,280 540,420 350,540 160,420 160,280"/>
    <circle cx="350" cy="80" r="8"/><circle cx="350" cy="620" r="8"/>
    <circle cx="80" cy="230" r="8"/><circle cx="620" cy="230" r="8"/>
    <circle cx="80" cy="470" r="8"/><circle cx="620" cy="470" r="8"/>
  </g>
</svg>`;

/* ═══════════ language toggle widget ═══════════ */
function langToggle() {
  return `<div class="lang-toggle">
    <button class="${S.lang==='en'?'on':''}" onclick="setS({lang:'en'})">EN</button>
    <button class="gu ${S.lang==='gu'?'on':''}" onclick="setS({lang:'gu'})">ગુજરાતી</button>
  </div>`;
}

/* ═══════════ PANCHĀNG helpers ═══════════ */
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTHS_GU = ['જાન્યુઆરી','ફેબ્રુઆરી','માર્ચ','એપ્રિલ','મે','જૂન','જુલાઈ','ઑગસ્ટ','સપ્ટેમ્બર','ઑક્ટોબર','નવેમ્બર','ડિસેમ્બર'];
const WEEKDAYS_EN = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const WEEKDAYS_GU = ['રવિ','સોમ','મંગળ','બુધ','ગુરુ','શુક્ર','શનિ'];

function festDate(f) { const [y, m, d] = f.d.split('-').map(Number); return new Date(y, m - 1, d); }
function daysUntil(f) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((festDate(f) - today) / 86400000);
}
function festWhen(du) {
  return du === 0 ? t('Today', 'આજે')
       : du === 1 ? t('Tomorrow', 'આવતીકાલે')
       : t('in ' + du + ' days', du + ' દિવસમાં');
}
function festRow(f, opts) {
  const dt = festDate(f), du = daysUntil(f);
  const cls = 'fest-row' + (opts.full ? ' full' : '') + (du < 0 ? ' past' : '') + (du === 0 ? ' today' : '');
  return `
    <${opts.full ? 'div' : 'button type="button" onclick="setS({tab:\'panchang\',reader:null})"'}
      class="card ${opts.full ? '' : 'clickable '}${cls}"${opts.anchor ? ' id="fest-next"' : ''}>
      <span class="fest-date"><b>${dt.getDate()}</b><i>${t(WEEKDAYS_EN[dt.getDay()], WEEKDAYS_GU[dt.getDay()])}</i></span>
      <div class="body">
        <div class="title">${esc(t(f.en, f.gu))}</div>
        <div class="meta">${esc(t(f.t_en, f.t_gu))}</div>
        ${opts.full && f.n_en ? `<div class="note">${esc(t(f.n_en, f.n_gu))}</div>` : ''}
      </div>
      ${du >= 0 ? `<span class="fest-when${du === 0 ? ' now' : ''}">${festWhen(du)}</span>` : ''}
    </${opts.full ? 'div' : 'button'}>`;
}

/* the panchāng screen: every festival grouped by month, past ones dimmed */
function renderPanchang() {
  const nextIdx = FESTIVALS.findIndex(f => daysUntil(f) >= 0);
  const groups = [];
  FESTIVALS.forEach((f, i) => {
    const dt = festDate(f), key = dt.getFullYear() + '-' + dt.getMonth();
    let g = groups[groups.length - 1];
    if (!g || g.key !== key) { g = { key, y: dt.getFullYear(), m: dt.getMonth(), rows: [] }; groups.push(g); }
    g.rows.push(festRow(f, { full: true, anchor: i === nextIdx }));
  });
  /* the table is finite; say so rather than opening on a wall of past dates */
  const spent = nextIdx < 0
    ? `<div class="empty-state"><p>${t('This calendar runs to the end of 2027. Update the app for later dates.',
                                       'આ પંચાંગ ૨૦૨૭ના અંત સુધીનું છે. પછીની તિથિઓ માટે ઍપ અપડેટ કરો.')}</p></div>`
    : '';
  const body = spent + groups.map(g => `
    <div class="group-label">${t(MONTHS_EN[g.m], MONTHS_GU[g.m])} ${g.y}</div>
    <div class="chapter-list">${g.rows.join('')}</div>`).join('');
  return `
  <div class="screen-head">
    <div class="row">
      <div class="screen-title with-back">
        <button class="back" onclick="setS({tab:'home',reader:null})">←</button>
        ${t('PANCHĀNG', 'પંચાંગ')}
      </div>
      ${langToggle()}
    </div>
    <div class="screen-sub">${t('Festival dates follow the Indian panchāng; local observance can differ by a day.',
                                'તિથિ ભારતીય પંચાંગ પ્રમાણે; સ્થાનિક ઉજવણી એક દિવસ આગળ-પાછળ હોઈ શકે.')}</div>
  </div>
  <div class="scroll" id="panchangScroll"><div class="pane lib">${body}
    <p class="panchang-foot">${t('Wondering what these festivals mean? Read the chapter on festivals and the sixteen saṃskāras.',
                                 'આ ઉત્સવોનો અર્થ જાણવો છે? ઉત્સવો અને સોળ સંસ્કાર વિશેનું પ્રકરણ વાંચો.')}
      <a onclick="openReader('festivals')">${t('Open chapter ›', 'પ્રકરણ ખોલો ›')}</a></p>
  </div></div>`;
}

/* ═══════════ HOME ═══════════ */
function renderHome() {
  const lastId = S.lastRead && chById(S.lastRead) ? S.lastRead : CH[0].id;
  const cur = chById(lastId);
  const partsHtml = PARTS.map(p => `
    <button type="button" class="card clickable part-card" onclick="setS({tab:'library',query:'',part:${p.id}})">
      <div class="deva">${p.deva}</div>
      <div class="title">${esc(t(p.en, p.gu))}</div>
      <div class="count">${CH.filter(c=>c.part===p.id).length}${t(' chapters',' પ્રકરણ')}</div>
    </button>`).join('');
  return `
  <div class="home-hero">
    <div class="top-row">
      <span class="eyebrow">${t('A Reader’s Guide','વાચકની માર્ગદર્શિકા')}</span>
      ${langToggle()}
    </div>
    <div class="om-wrap">
      ${MANDALA}
      <span class="halo"></span>
      <span class="ring"></span>
      <div class="om-disc"><span>ॐ</span></div>
    </div>
    <div class="titles">
      <div class="t1">${t('SANĀTANA DHARMA','સનાતન ધર્મ')}</div>
      <div class="t2">${t(HERO.en_sub, HERO.gu_sub)}</div>
    </div>
  </div>
  <div class="scroll">
    <div class="home-body">
      <!-- the intro scrolls away with the content; only the mark and title pin -->
      <p class="home-desc">${t(HERO.en_desc, HERO.gu_desc)}</p>
      <button type="button" class="card clickable continue-card" onclick="openReader('${cur.id}')">
        <div class="row1">
          <div class="eyebrow">${t('CONTINUE','આગળ વાંચો')}</div>
          <div class="meta">${t('Chapter ','પ્રકરણ ')}${toRoman(cur.n)} · ${pct(cur.id)}%</div>
        </div>
        <div class="title">${chTitle(cur)}</div>
        <div class="deva">${chDeva(cur)}</div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct(cur.id)}%"></div></div>
      </button>

      <div class="section-label" style="margin-top:22px">${t('VERSE OF THE DAY','આજનો શ્લોક')}</div>
      <div class="verse-card">
        <div class="deva">एकं सत् विप्रा बहुधा वदन्ति</div>
        <div class="txt">${t('Truth is one; the wise call it by many names.','સત્ય એક છે; જ્ઞાનીઓ તેને અનેક નામે કહે છે.')}</div>
        <div class="cite">ṚGVEDA 1.164.46</div>
      </div>

      ${(() => {
        const next = FESTIVALS.filter(f => daysUntil(f) >= 0).slice(0, 3);
        if (!next.length) return '';
        return `
      <div class="section-label fest-label" style="margin-top:24px">
        <span>${t('UPCOMING FESTIVALS', 'આગામી ઉત્સવો')}</span>
        <button class="see-all" onclick="setS({tab:'panchang',reader:null})">${t('Full panchāng ›', 'પૂરું પંચાંગ ›')}</button>
      </div>
      <div class="chapter-list">${next.map(f => festRow(f, {})).join('')}</div>`;
      })()}

      <div class="section-label" style="margin-top:24px">${t('EXPLORE','વિષય-વિભાગ')}</div>
      <div class="explore-grid">${partsHtml}</div>

      ${S.deferredInstall ? `<div class="install-row"><button onclick="doInstall()">${t('📲 Install as App','📲 ઍપ તરીકે ઇન્સ્ટૉલ કરો')}</button></div>` : ''}
      <div class="install-row"><button onclick="shareChapter()">${t('↗ Share this app','↗ ઍપ શેર કરો')}</button></div>
    </div>
  </div>`;
}

/* ═══════════ LIBRARY ═══════════ */
function renderLibrary() {
  const q = S.query.trim().toLowerCase();
  const match = c => !q || chTitle(c).toLowerCase().includes(q) || c.en_title.toLowerCase().includes(q) || (c.en_deva||'').toLowerCase().includes(q);
  const row = c => `
    <button type="button" class="card clickable chapter-row" onclick="openReader('${c.id}')">
      <span class="num">${toRoman(c.n)}</span>
      <div class="body"><div class="title">${chTitle(c)}</div><div class="meta">${readMeta(c)}</div></div>
      <span class="mark">${S.saved.includes(c.id) ? '❖' : (pct(c.id)>=96 ? '✓' : '')}</span>
    </button>`;
  /* a home tile opens one part on its own; the search box widens back to all */
  const part = q ? null : PARTS.find(p => p.id === S.part);
  const shown = part ? PARTS.filter(p => p.id === part.id) : PARTS;
  const groups = shown.map(p => ({ label: t(p.en, p.gu).toUpperCase(), items: CH.filter(c => c.part===p.id && match(c)) })).filter(g => g.items.length);
  const body = groups.length
    ? groups.map(g => `${part ? '' : `<div class="group-label">${g.label}</div>`}<div class="chapter-list">${g.items.map(row).join('')}</div>`).join('')
    : `<div class="empty-state"><p>${t('Nothing found.','કંઈ મળ્યું નહીં.')}</p></div>`;
  return `
  <div class="screen-head">
    <div class="row">
      <div class="screen-title${part ? ' with-back' : ''}">
        ${part ? `<button class="back" onclick="setS({part:null})">←</button>` : ''}
        ${part ? esc(t(part.en, part.gu).toUpperCase()) : t('LIBRARY','ગ્રંથાલય')}
      </div>
      ${langToggle()}
    </div>
    ${part ? `<div class="screen-sub">${part.deva} · ${CH.filter(c=>c.part===part.id).length}${t(' chapters',' પ્રકરણ')}</div>` : ''}
    <div class="search-box">
      <span class="ic">⌕</span>
      <input type="search" value="${esc(S.query)}" oninput="setS({query:this.value})"
        aria-label="${t('Search '+CH.length+' chapters','પ્રકરણોમાં શોધો')}"
        placeholder="${t('Search '+CH.length+' chapters','શોધો')}">
    </div>
  </div>
  <div class="scroll"><div class="pane lib">${body}</div></div>`;
}

/* ═══════════ PRACTICE ═══════════ */
/* the four paths, verbatim from deploy — an at-a-glance overview above the
   chapters themselves */
const YOGA = [
  { deva: 'ज्ञान', en: 'Jñāna', gu: 'જ્ઞાન', nEn: 'The path of knowledge',   nGu: 'જ્ઞાનનો માર્ગ' },
  { deva: 'भक्ति', en: 'Bhakti', gu: 'ભક્તિ', nEn: 'The path of devotion',   nGu: 'ભક્તિનો માર્ગ' },
  { deva: 'कर्म',  en: 'Karma',  gu: 'કર્મ',  nEn: 'The path of action',     nGu: 'કર્મનો માર્ગ' },
  { deva: 'राज',   en: 'Rāja',   gu: 'રાજ',   nEn: 'The path of meditation', nGu: 'ધ્યાનનો માર્ગ' }
];
const PRACTICE_IDS = ['yogas', 'ethics', 'practice', 'mantras', 'festivals', 'questions'];

function renderPractice() {
  const links = PRACTICE_IDS.map(chById);
  const linkRow = c => `
    <button type="button" class="card clickable practice-link" onclick="openReader('${c.id}')">
      <span class="ic font-deva">${c.en_deva ? c.en_deva.split(' ')[0].slice(0,2) : '॰'}</span>
      <span class="title">${chTitle(c)}</span>
      <span class="arrow">›</span>
    </button>`;
  /* informational, as in deploy — the chapter link below opens the full text */
  const yogaCard = y => `
    <div class="yoga-card">
      <div class="deva">${y.deva}</div>
      <div class="title">${esc(t(y.en, y.gu))}</div>
      <div class="note">${esc(t(y.nEn, y.nGu))}</div>
    </div>`;
  return `
  <div class="screen-head">
    <div class="screen-title">${t('PRACTICE','સાધના')}</div>
    <div class="screen-sub">${t('The calendar and the four paths','ઉત્સવ-પંચાંગ અને ચાર માર્ગ')}</div>
  </div>
  <div class="scroll"><div class="pane lib">
    <button type="button" class="card clickable practice-link panchang-link" onclick="setS({tab:'panchang',reader:null})">
      <span class="ic">🪔</span>
      <span class="title">${t('Utsav Panchāng — festival dates','ઉત્સવ પંચાંગ — તિથિ-તારીખ')}</span>
      <span class="arrow">›</span>
    </button>
    <div class="section-label" style="margin-top:20px">${t('THE FOUR PATHS','ચાર માર્ગ')}</div>
    <div class="yoga-grid" style="margin-top:11px">${YOGA.map(yogaCard).join('')}</div>
    <div class="section-label" style="display:block;margin-top:24px">${t(PARTS[3].en.toUpperCase(), PARTS[3].gu)}</div>
    <div class="practice-links" style="margin-top:11px">${links.map(linkRow).join('')}</div>
  </div></div>`;
}

/* ═══════════ SAVED ═══════════ */
function renderSaved() {
  const chs = CH.filter(c => S.saved.includes(c.id));
  const row = c => `
    <button type="button" class="card clickable chapter-row" onclick="openReader('${c.id}')">
      <span class="num">${toRoman(c.n)}</span>
      <div class="body"><div class="title">${chTitle(c)}</div><div class="meta">${readMeta(c)}</div></div>
      <span class="mark">❖</span>
    </button>`;
  const body = chs.length
    ? `<div class="chapter-list">${chs.map(row).join('')}</div>`
    : `<div class="empty-state"><div class="glyph">❖</div><p>${t('Tap the ❖ while reading to keep a chapter here.','વાંચતી વખતે ❖ દબાવીને પ્રકરણ અહીં સાચવો.')}</p></div>`;
  return `
  <div class="screen-head">
    <div class="screen-title">${t('SAVED','સાચવેલું')}</div>
    <div class="screen-sub">${t('Chapters you have bookmarked','તમે સાચવેલાં પ્રકરણો')}</div>
  </div>
  <div class="scroll"><div class="pane lib">${body}</div></div>`;
}

/* ═══════════ READER — paged subchapters, deploy-style slabs ═══════════ */
function tagHtml(tags) {
  if (!tags || !tags.length) return '';
  return `<div class="slab-tags">${tags.map(t =>
    `<span class="slab-tag${t.v ? ' ' + t.v : ''}">${esc(t.x)}</span>`).join('')}</div>`;
}

function renderBlock(b) {
  if (b.t === 'quote') return `
    <div class="slab-quote">
      ${b.html ? `<div class="q-text">${b.html}</div>` : ''}
      ${b.cite ? `<div class="q-cite">${esc(b.cite)}</div>` : ''}
    </div>`;

  if (b.t === 'note') return `
    <div class="slab-note">
      ${b.title ? `<div class="n-title">${esc(b.title)}</div>` : ''}
      <div class="n-body">${b.html}</div>
    </div>`;

  if (b.t === 'cards') return `
    <div class="slab-cards">${b.items.map(i => `
      <div class="mini-card">
        ${i.num ? `<span class="m-num">${esc(i.num)}</span>` : ''}
        <div class="m-body">
          <div class="m-name">${esc(i.name)}</div>
          ${i.note ? `<div class="m-note">${esc(i.note)}</div>` : ''}
        </div>
      </div>`).join('')}
    </div>`;

  if (b.t === 'quiz') return `
    <div class="slab tone-gold">
      ${b.title ? `<div class="s-title">${esc(b.title)}</div>` : ''}
      <div class="s-body">${b.html.replace('&lt;QUIZ&gt;', '').replace('<QUIZ>', '')}</div>
      <div class="path-quiz"></div>
    </div>`;

  if (b.t === 'slab') return `
    <div class="slab tone-${b.tone || 'gold'}">
      ${b.icon ? `<div class="s-icon">${b.icon}</div>` : ''}
      ${b.eyebrow ? `<div class="s-eyebrow">${esc(b.eyebrow)}</div>` : ''}
      ${b.title ? `<div class="s-title">${esc(b.title)}</div>` : ''}
      ${b.deva ? `<div class="s-deva">${esc(b.deva)}</div>` : ''}
      <div class="s-body">${b.html}</div>
      ${tagHtml(b.tags)}
    </div>`;

  if (b.t === 'head') return `<div class="s-head">${esc(b.html)}</div>`;
  return `<div class="s-prose">${b.html}</div>`;
}

/* "चतुर्वेद · The Foundation of All Knowledge" -> gold देवनागरी + muted gloss */
function devaLine(s) {
  if (!s) return '';
  const at = s.indexOf('·');
  if (at < 0) return `<div class="deva">${esc(s)}</div>`;
  return `<div class="deva">${esc(s.slice(0, at).trim())}` +
         `<span class="gloss-sub">${esc(s.slice(at + 1).trim())}</span></div>`;
}

function renderReader() {
  const c = chById(S.reader);
  const secs = chSecs(c);
  const i = Math.min(S.sec, secs.length - 1);
  const sec = secs[i] || { blocks: [] };
  const idx = chIndex(c.id);
  const prevCh = idx > 0 ? CH[idx - 1] : null;
  const nextCh = idx < CH.length - 1 ? CH[idx + 1] : null;
  const isSaved = S.saved.includes(c.id);

  const dots = secs.map((s, n) => `
    <button class="pip ${n === i ? 'on' : ''}${n < i ? ' done' : ''}"
      onclick="goSection(${n})" aria-label="${n + 1}">${n + 1}</button>`).join('');

  const atFirst = i === 0, atLast = i === secs.length - 1;
  const prevLabel = atFirst
    ? (prevCh ? '‹ ' + chTitle(prevCh) : '')
    : '‹ ' + t('Back', 'પાછળ');
  const nextLabel = atLast
    ? (nextCh ? chTitle(nextCh) + ' ›' : t('Finish ✓', 'સમાપ્ત ✓'))
    : t('Next', 'આગળ') + ' ›';

  return `
  <div class="reader-view">
    <div class="reader-head">
      <div class="row">
        <button class="back" onclick="setS({reader:null,sec:0})">←</button>
        <div class="tools">
          <button onclick="cycleFont()">${FONT_LABELS[S.font]}</button>
          <button class="${isSaved ? 'on' : ''}" onclick="toggleSave()">❖</button>
          <button class="share" onclick="shareChapter()">${t('Share', 'શેર')}</button>
        </div>
      </div>
      <div class="eyebrow">${t('CHAPTER ', 'પ્રકરણ ')}${toRoman(c.n)}</div>
      <div class="title">${chTitle(c)}</div>
      ${devaLine(chDeva(c))}
    </div>
    <div class="reader-accent"></div>
    <div class="pips">${dots}</div>
    <div class="scroll" id="readerScroll">
      <div class="reader-content lang-${S.lang}" id="readerBody"
           style="font-size:${FONT_STEPS[S.font]}px">
        ${sec.label ? `<div class="s-head">${esc(sec.label)}</div>` : ''}
        ${sec.blocks.map(renderBlock).join('')}
      </div>
    </div>
    <div class="reader-foot">
      <div class="track"><div class="fill" style="width:${Math.max(pct(c.id), 8)}%"></div></div>
      <span class="label">${c.mins}${t(' min read', ' મિનિટ')}</span>
    </div>
    <div class="pager">
      <button class="pg prev ${!atFirst || prevCh ? '' : 'hide'}"
        onclick="${atFirst ? (prevCh ? `openReader('${prevCh.id}',-1)` : '') : 'goSection(' + (i - 1) + ')'}">${prevLabel}</button>
      <span class="pg-count">${i + 1} / ${secs.length}</span>
      <button class="pg next ${atLast ? 'chapter' : ''}"
        onclick="${atLast ? (nextCh ? `openReader('${nextCh.id}')` : `setS({reader:null,sec:0})`) : 'goSection(' + (i + 1) + ')'}">${nextLabel}</button>
    </div>
  </div>`;
}

/* ═══════════ TAB BAR ═══════════ */
function renderTabs() {
  const tab = (id, icon, label, om) => `
    <button class="tab-btn ${S.tab===id || (id==='practice' && S.tab==='panchang') ?'active':''}" onclick="setS({tab:'${id}',reader:null,part:null})">
      <span class="ic ${om?'om':''}">${icon}</span><span class="lbl">${label}</span>
    </button>`;
  return `<div class="tabbar">
    ${tab('home','ॐ',t('Home','ઘર'),true)}
    ${tab('library','☰',t('Library','ગ્રંથ'))}
    ${tab('practice','◈',t('Practice','સાધના'))}
    ${tab('saved','☾',t('Saved','સાચવેલું'))}
  </div>`;
}

/* ═══════════ deep links ═══════════
   Without this the URL never changes, so Share only ever sent the app's base
   address and the recipient landed on Home. */
const TABS = ['home', 'library', 'practice', 'saved', 'panchang'];

function currentHash() {
  if (S.reader) return '#/' + S.reader + '/' + (S.sec + 1);
  return S.tab === 'home' ? '' : '#/' + S.tab;
}
function syncHash() {
  const h = currentHash();
  if (location.hash === h) return;
  history.replaceState(null, '', h || location.pathname + location.search);
}
function parseHash() {
  const m = (location.hash || '').match(/^#\/([a-zA-Z-]+)(?:\/(\d+))?$/);
  if (!m) return null;
  const key = m[1];
  if (TABS.includes(key)) return { tab: key, reader: null, sec: 0, part: null };
  const c = chById(key);
  if (!c) return null;
  const total = ((S.lang === 'en' ? c.en : c.gu) || []).length;
  const n = Math.min(Math.max(parseInt(m[2] || '1', 10) || 1, 1), total) - 1;
  return { reader: key, sec: n };
}
window.addEventListener('hashchange', () => {
  const route = parseHash();
  if (route) setS(route);
  else if (!location.hash) setS({ reader: null, tab: 'home', sec: 0 });
});

/* ═══════════ actions ═══════════ */
/* sec = -1 opens the chapter at its LAST subchapter (paging backwards) */
function openReader(id, sec) {
  const c = chById(id);
  const total = ((S.lang === 'en' ? c.en : c.gu) || []).length;
  const at = sec === -1 ? Math.max(0, total - 1) : (sec || 0);
  store.set('sd-lastread', id);
  setS({ reader: id, sec: at, lastRead: id });
  markProgress(id, at, total);
}

/* swipe left/right in the reader turns pages like a book; mirrors the pager
   buttons exactly, including crossing into the previous/next chapter */
function pageTurn(dir) {
  const c = chById(S.reader);
  if (!c) return;
  const secs = chSecs(c), i = S.sec, idx = chIndex(c.id);
  if (dir > 0) {
    if (i < secs.length - 1) goSection(i + 1);
    else if (idx < CH.length - 1) openReader(CH[idx + 1].id);
    else setS({ reader: null, sec: 0 });
  } else {
    if (i > 0) goSection(i - 1);
    else if (idx > 0) openReader(CH[idx - 1].id, -1);
  }
}
function attachSwipe(sc) {
  let x0 = 0, y0 = 0, t0 = 0;
  sc.addEventListener('touchstart', e => {
    /* a second finger means a pinch-zoom or two-finger pan, not a page turn;
       without this, dx gets measured between two DIFFERENT fingers */
    if (e.touches.length > 1) { t0 = 0; return; }
    const t = e.touches[0]; x0 = t.clientX; y0 = t.clientY; t0 = Date.now();
  }, { passive: true });
  sc.addEventListener('touchend', e => {
    if (!t0 || e.touches.length || e.changedTouches.length !== 1) return;
    const t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
    if (Date.now() - t0 > 600) return;                       // slow drag, not a swipe
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;  // mostly vertical
    pageTurn(dx < 0 ? 1 : -1);
  }, { passive: true });
}

function goSection(n) {
  const c = chById(S.reader);
  const total = chSecs(c).length;
  const at = Math.max(0, Math.min(n, total - 1));
  markProgress(c.id, at, total);
  setS({ sec: at });
  const sc = $('#readerScroll');
  if (sc) sc.scrollTop = 0;
}

/* progress = furthest subchapter reached */
function markProgress(id, at, total) {
  if (!total) return;
  const p = Math.round(((at + 1) / total) * 100);
  if (p > (S.progress[id] || 0)) {
    S.progress[id] = p;
    store.set('sd-progress', JSON.stringify(S.progress));
  }
}
function toggleSave() {
  const has = S.saved.includes(S.reader);
  const saved = has ? S.saved.filter(x => x !== S.reader) : S.saved.concat(S.reader);
  store.set('sd-saved', JSON.stringify(saved));
  setS({ saved });
}
function cycleFont() {
  const font = (S.font + 1) % FONT_STEPS.length;
  store.set('sd-font', font);
  setS({ font });
}
function toggleAcc(header) { header.parentElement.classList.toggle('open'); }

/* ── share ── */
let toastTimer = null;
function showToast(msg) {
  let el = $('#toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}
async function shareChapter() {
  const title = 'Sanātana Dharma — સનાતન ધર્મ';
  const c = S.reader ? chById(S.reader) : null;
  const text = c
    ? t('“' + chTitle(c) + '” — from a guide to Sanātana Dharma:',
        '“' + chTitle(c) + '” — સનાતન ધર્મ માર્ગદર્શિકામાંથી:')
    : t('Check out this guide to Sanātana Dharma:', 'સનાતન ધર્મ વિશે આ માર્ગદર્શિકા જુઓ:');
  syncHash();
  const url = location.href;
  if (navigator.share) {
    try { await navigator.share({ title, text, url }); } catch (e) {}
    return;
  }
  try {
    await navigator.clipboard.writeText(url);
    showToast(t('Link copied to clipboard', 'લિંક કૉપી થઈ ગઈ'));
  } catch (e) {
    showToast(t('Could not copy link', 'લિંક કૉપી કરી શકાઈ નથી'));
  }
}

/* ── install prompt ── */
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  S = Object.assign({}, S, { deferredInstall: e });
  render();
});
async function doInstall() {
  const e = S.deferredInstall;
  if (!e) return;
  e.prompt();
  await e.userChoice;
  setS({ deferredInstall: null });
}

/* ── glossary (English reading only, matches source guide) ── */
function markGlossary(root) {
  const keys = Object.keys(GLOSS);
  if (!keys.length || !root) return;
  const rx = new RegExp('\\b(' + keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b');
  const seen = new Set();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => {
      const p = n.parentElement;
      if (!p || p.closest('.gloss, script, style, h1, h2, .gloss-pop')) return NodeFilter.FILTER_REJECT;
      return rx.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n => {
    const m = n.nodeValue.match(rx);
    if (!m || seen.has(m[1])) return;
    seen.add(m[1]);
    const idx = m.index, term = m[1];
    const after = n.splitText(idx);
    after.nodeValue = after.nodeValue.slice(term.length);
    const span = document.createElement('span');
    span.className = 'gloss';
    span.dataset.term = term;
    span.textContent = term;
    n.parentNode.insertBefore(span, after);
  });
}
let pop = null;
function closePop() { if (pop) { pop.remove(); pop = null; } }
document.addEventListener('click', e => {
  const g = e.target.closest('.gloss');
  closePop();
  if (!g) return;
  const entry = GLOSS[g.dataset.term];
  if (!entry) return;
  pop = document.createElement('div');
  pop.className = 'gloss-pop';
  pop.innerHTML = '<b>' + g.dataset.term + '</b>' + (entry[S.lang] || entry.en);
  document.body.appendChild(pop);
  const r = g.getBoundingClientRect();
  const pw = 300;
  let left = Math.min(Math.max(8, r.left), innerWidth - pw - 8);
  pop.style.left = left + 'px';
  pop.style.top = (r.bottom + 8) + 'px';
});

/* ── path quiz (renders inside the Four Yogas chapter) ── */
function initQuiz(box) {
  const data = QUIZ[S.lang];
  let i = 0; const tally = [0, 0, 0, 0];
  function draw() {
    if (i >= data.qs.length) {
      let best = 0;
      tally.forEach((v, k) => { if (v > tally[best]) best = k; });
      const r = data.results[best];
      box.innerHTML = '<div class="quiz-result"><h4>' + r[0] + '</h4><p>' + r[1] + '</p>' +
        '<p style="margin-top:12px;font-style:italic;color:rgba(212,160,23,0.75);">' + data.note + '</p>' +
        '<button class="quiz-restart">' + data.restart + '</button></div>';
      $('.quiz-restart', box).addEventListener('click', () => { i = 0; tally.fill(0); draw(); });
      return;
    }
    const q = data.qs[i];
    box.innerHTML = '<div class="quiz-q">' + q.q + '</div><div class="quiz-opts">' +
      q.o.map((o, k) => '<button data-k="' + k + '">' + o + '</button>').join('') +
      '</div><div class="quiz-meta">' + data.counter + ' ' + (i + 1) + ' / ' + data.qs.length + '</div>';
    $$('.quiz-opts button', box).forEach(b => b.addEventListener('click', () => { tally[+b.dataset.k]++; i++; draw(); }));
  }
  draw();
}

/* ═══════════ main render ═══════════ */
/* "Today"/"in 3 days" are computed at render time, so an app left resident
   overnight would keep yesterday's wording. Re-render on the first foreground
   of a new day — and only then, since a blanket re-render would throw away the
   reader's scroll position every time the app is resumed. */
let renderedDay = '';
function dayKey() { const d = new Date(); return d.getFullYear() + '/' + d.getMonth() + '/' + d.getDate(); }
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && renderedDay !== dayKey()) render();
});

function render() {
  renderedDay = dayKey();
  document.documentElement.setAttribute('data-app-lang', S.lang);
  let inner;
  if (S.reader) {
    // language toggle mid-chapter: clamp to the other language's section count
    const secs = chSecs(chById(S.reader));
    if (S.sec > secs.length - 1) S.sec = Math.max(0, secs.length - 1);
    inner = renderReader();
  } else {
    inner = S.tab==='home' ? renderHome() : S.tab==='library' ? renderLibrary() : S.tab==='practice' ? renderPractice() : S.tab==='panchang' ? renderPanchang() : renderSaved();
  }
  $('#stage').innerHTML = inner;
  /* nav lives outside #stage so it can be a bottom bar on phones and a
     persistent side rail on tablet/desktop */
  $('#nav').innerHTML = renderTabs();
  document.body.classList.toggle('reading', !!S.reader);
  syncHash();
  if (S.reader) {
    closePop();
    if (S.lang === 'en') markGlossary($('#readerBody'));
    const quizBox = $('.path-quiz', $('#readerBody'));
    if (quizBox) initQuiz(quizBox);
    const sc = $('#readerScroll');
    if (sc) { sc.addEventListener('scroll', closePop, { passive: true }); attachSwipe(sc); }
  }
  /* land the panchāng on the next upcoming festival, not January */
  if (S.tab === 'panchang' && !S.reader) {
    const el = $('#fest-next'), sc = $('#panchangScroll');
    if (el && sc) sc.scrollTop = Math.max(0, el.offsetTop - sc.offsetTop - 52);
  }
}

/* ── update flow ──────────────────────────────────────────────────────────
   sw.js calls skipWaiting + clients.claim, so a newly published version takes
   control the moment it installs. Two additions make that reach the user:
   - reg.update() every time the app returns to the foreground (an installed
     PWA resumed from the app switcher never re-navigates, so without this the
     browser may not look for a new sw.js for a long time)
   - a persistent toast on controllerchange offering a one-tap reload, since
     the page's in-memory code is still the old version until reloaded */
/* sw.js is network-first, so a plain open already runs the newest code — only
   an update that lands while the app is ALREADY running leaves stale code in
   memory and is worth a toast */
let swArmed = false;
function showUpdateToast() {
  if ($('#update-toast')) return;
  const el = document.createElement('button');
  el.id = 'update-toast';
  el.className = 'toast show update';
  el.textContent = t('✦ New version ready — tap to reload', '✦ નવું સંસ્કરણ તૈયાર — રીલોડ કરવા દબાવો');
  el.onclick = () => location.reload();
  document.body.appendChild(el);
}
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState !== 'visible') return;
        swArmed = true;
        reg.update().catch(() => {});
      });
    }).catch(() => {});
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (swArmed) showUpdateToast();
    });
  });
}

/* open on whatever the URL points at, so a shared chapter link lands there */
const boot = parseHash();
if (boot) S = Object.assign({}, S, boot);
render();

/* ── layout probe: add ?debug to the URL ──────────────────────────────────
   Simulators report env(safe-area-inset-*) as 0, so real-device layout bugs
   cannot be reproduced here. This prints what the device actually reports. */
function showLayoutProbe() {
  if (document.getElementById('sd-probe')) { document.getElementById('sd-probe').remove(); return; }
  const probe = document.createElement('div');
  probe.style.cssText = 'position:fixed;top:0;left:0;height:0;width:0;' +
    'padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom);';
  document.body.appendChild(probe);
  const ps = getComputedStyle(probe);
  const insetTop = ps.paddingTop, insetBottom = ps.paddingBottom;
  probe.remove();

  const r = el => { const b = el.getBoundingClientRect();
    return Math.round(b.top) + '→' + Math.round(b.bottom) + ' (h' + Math.round(b.height) + ')'; };
  const shell = document.getElementById('app-shell');
  const nav = document.getElementById('nav');
  const bar = document.querySelector('.tabbar');
  const vv = window.visualViewport;

  const box = document.createElement('div');
  box.id = 'sd-probe';
  box.style.cssText = 'position:fixed;left:8px;right:8px;bottom:8px;z-index:9999;' +
    'background:#1b1b1b;color:#EFEBE2;font:11px/1.5 ui-monospace,Menlo,monospace;' +
    'padding:10px 12px;border-radius:10px;white-space:pre;overflow:auto;max-height:52vh;' +
    'box-shadow:0 6px 30px rgba(0,0,0,.5)';
  box.textContent = [
    'inner        ' + innerWidth + ' x ' + innerHeight,
    'visualVP     ' + (vv ? Math.round(vv.width) + ' x ' + Math.round(vv.height) : 'n/a'),
    'screen       ' + screen.width + ' x ' + screen.height + '  dpr ' + devicePixelRatio,
    'safe-area    top ' + insetTop + '   bottom ' + insetBottom,
    'standalone   ' + (matchMedia('(display-mode: standalone)').matches ||
                       navigator.standalone === true),
    'shell        ' + r(shell) + '  pos ' + getComputedStyle(shell).position,
    'nav          ' + r(nav) + '  pos ' + getComputedStyle(nav).position,
    'tabbar       ' + r(bar) + '  padB ' + getComputedStyle(bar).paddingBottom,
    'GAP BELOW    ' + Math.round(innerHeight - bar.getBoundingClientRect().bottom) + 'px',
    'sw           ' + (navigator.serviceWorker && navigator.serviceWorker.controller
                       ? 'controlled' : 'none'),
    'css build    v19'
  ].join('\n');
  box.onclick = () => box.remove();
  document.body.appendChild(box);
}

/* ?debug in a browser, or five taps on the ॐ inside the installed app —
   the home-screen icon gives no address bar to type a query into */
if (/(^|[?&])debug\b/.test(location.search) || /debug/.test(location.hash)) showLayoutProbe();
let probeTaps = 0, probeTimer = null;
document.addEventListener('click', e => {
  if (!e.target.closest('.om-disc')) return;
  probeTaps++;
  clearTimeout(probeTimer);
  probeTimer = setTimeout(() => { probeTaps = 0; }, 1200);
  if (probeTaps >= 5) { probeTaps = 0; showLayoutProbe(); }
});
